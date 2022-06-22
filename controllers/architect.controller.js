const db =  require('../models');
const bcrypt = require("bcrypt");
const jwt =  require('jsonwebtoken')


//create main Model
const Architect = db.architects

//main scope
//add Customer
const addArchitect = async (req, res) => {

    //encrypt the password
    const salt = await bcrypt.genSalt(10);
    let encPassword = await bcrypt.hash(req.body.password, salt);

    // const validPassword = await bcrypt.compare(req.body.password, password);

    let info = {
        name: req.body.name,
        email: req.body.email,
        password: encPassword,
        image: req.body.image
    }

    const architect =  await Architect.create(info)
    res.status(200).send({ message: "Successfully created your account!"})
}

//get all customer
const getAllArchitect =  async (req, res) => {

    // for specific field
    let architect = await Architect.findAll({
        attributes: [
            'name',
            'email'
        ]
    })

    // let architect = await Architect.findAll()

    res.status(200).send(architect)
}



const userAuthenticattion = async (req, res)=>{

    const salt = await bcrypt.genSalt(10);
    let email = req.body.email
    let pass = req.body.password
    let user = await Architect.findOne({ where: { email: email }})
    if(user == null){
        res.status(200).send({message: 'Invalid email or password!'})
    }
    else{
        const userJson = JSON.stringify(user)
        const userData = JSON.parse(userJson)
        //compareing hashPassword and requested password is same or not
        const validPassword = await bcrypt.compare(pass, userData.password);
        //if password not matched
        
        if(validPassword){
            const token =  jwt.sign({
                name: user.name,
                email: user.email,
                image: user.image
            },
            'usersignin token',
            {
                expiresIn: '24h'
            }
            )
            res.status(200).json({
                name: user.name,
                email: user.email,
                image: user.image,
                token: token
            })
        }else{
            res.status(401).send({message: 'Invalid email or password!'})
        }
        
    }
    
}


module.exports = {
    addArchitect,
    getAllArchitect,
    userAuthenticattion
}