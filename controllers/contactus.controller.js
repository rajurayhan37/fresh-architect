const db =  require('../models');


//create main Model
const ContactUs = db.contact_us

//main scope
//add Contact
const storeUserMessage = async (req, res) => {

    let info = {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    }

    const result =  await ContactUs.create(info)
    res.status(200).send(result)
}

//get all customer
const getUserMessage =  async (req, res) => {

    // for specific field
    let result = await ContactUs.findAll({
        attributes: [
            'name',
            'email',
            'message'
        ]
    })
    //for all information
    // let result = await ContactUs.findAll()

    res.status(200).send(result)
}




module.exports = {
    storeUserMessage,
    getUserMessage
}