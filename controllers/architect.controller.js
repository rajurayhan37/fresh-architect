const db =  require('../models');
const bcrypt = require("bcrypt");
const jwt =  require('jsonwebtoken')
const multer =  require('multer')


//create main Model
const Architect = db.architects
const ArchitectReview = db.architect_reviews

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
            'email',
            'image'
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

//get all architect with their reviews

const getArchitectWithReview = async (req, res) => {
    const data = await Architect.findAll({
        include: [{
            model: ArchitectReview,
            as: 'review'
        }],
    })

    res.status(200).send(data)
}


//upload profile image

//define storage for images
const storage = multer.diskStorage({
    //destination for file
    destination: function(request, file, callback){
        callback(null, './public/uploads/')
    },

    //define extentions
    filename: function(request, file, callback){
        callback(null, Date.now() + file.originalname )
    }
})

//upload parameter for multer
const upload = multer({
    storage: storage,
    limits: {
        fieldSize: 1024*1024*10
    }
})

const uploadImage = async (req, res) =>{
    let id = req.params.id
    let data = {
        image: req.file.filename
    }
    const architect = await Architect.update( data, { where: { id: id}})

    res.status(200).send(architect)
}

module.exports = {
    addArchitect,
    getAllArchitect,
    userAuthenticattion,
    getArchitectWithReview,
    uploadImage,
    upload
}