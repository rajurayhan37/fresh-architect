const db =  require('../models');
const jwt =  require('jsonwebtoken')


//create main Model
const Customer = db.customers


//email exist or not middleware
const emailExist = async (req, res, next)=> {
    let email = req.body.email
    let customer = await Customer.findOne({ where: { email: email }})
    if(customer != null){
        res.status(401).send({message: 'Email already exist!'})
    }
    else{
        next()
    }
}

//checking customer is authenticate or not

const checkAuth = async(req, res, next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1]
        const verify =  jwt.verify(token, 'usersignin token')
        console.log(verify)
        next()
    }catch(err){
        return res.status(401).json({
            message: 'Unauthorized user!'
        })
    }
}



module.exports = {
    emailExist,
    checkAuth
}