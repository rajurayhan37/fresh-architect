const db =  require('../models');
const bcrypt = require("bcrypt");
const jwt =  require('jsonwebtoken')


//create main Model
const User = db.users
const Role = db.roles

//main scope
//add user

const adduser = async (req, res) => {

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

    const user =  await User.create(info)
    res.status(200).send(user)
}

//get all users

const getAllUsers =  async (req, res) => {

    // for specific field
    // let users = await User.findAll({
    //     attributes: [
    //         'name',
    //         'email'
    //     ]
    // })

    let users = await User.findAll()

    res.status(200).send(users)
}


//get single user

const getOneUser =  async (req, res) => {

    let id = req.params.id
    let user = await User.findOne({ where: { id: id }})

    res.status(200).send(user)
} 


//update user

const updateUser =  async (req, res) => {

    let id = req.params.id
    const user = await User.update(req.body, { where: { id: id}})

    res.status(200).send({message: 'User updated successfully!'})
} 

//delete user

const deleteUser =  async (req, res) => {

    let id = req.params.id
    await User.destroy({ where: { id: id}})

    res.status(200).send('User delete successfully!')
} 

//check email already register or not

const checkUserEmail = async (req, res)=> {
    let email = req.params.email
    let user = await User.findOne({ where: { email: email }})
    res.status(200).send(user)
}

//middleware



const userAuthenticattion = async (req, res)=>{

    const salt = await bcrypt.genSalt(10);
    let email = req.body.email
    let pass = req.body.password
    let user = await User.findOne({ where: { email: email }})
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
    adduser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser,
    checkUserEmail,
    userAuthenticattion,
}