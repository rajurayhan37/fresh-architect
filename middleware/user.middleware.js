const db =  require('../models');
const bcrypt = require("bcrypt");
const jwt =  require('jsonwebtoken')


//create main Model
const User = db.users


//email exist or not middleware
const emailExist = async (req, res, next)=> {
    let email = req.body.email
    let user = await User.findOne({ where: { email: email }})
    if(user != null){
        res.status(401).send({message: 'Email already exist!'})
    }
    else{
        next()
    }
}

const checkAuth = async(req, res, next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1]
        const verify =  jwt.verify(token, 'usersignin token')
        console.log(verify)
        next()
    }catch(err){
        return res.status(401).json({
            message: 'Invalid token'
        })
    }
}



module.exports = {
    emailExist,
    checkAuth
}