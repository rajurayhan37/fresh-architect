const express = require('express');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: 'http://localhost:8080'
}


// middleware
app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({extended: true}))



//routes for users
const userRoute = require('./routes/user.route')
app.use('/api/users', userRoute)

//routes for role
const roleRoute = require('./routes/role.route')
app.use('/api/role', roleRoute)

//routes for Customer
const customerRoute = require('./routes/customer.route')
app.use('/api/customer', customerRoute)

//routes for Customer
const architectRoute = require('./routes/architect.route')
app.use('/api/architect', architectRoute)

//routes for ContactUs
const contactRoute = require('./routes/contact.route')
app.use('/api/contact', contactRoute)


//testing api

app.get('/', (req, res)=>{
    res.json({
        message: 'hello from api'
    })
})

//port

const PORT = process.env.PORT || 3000

//server

app.listen(PORT, ()=>{
    console.log(`Server is running at: http://localhost:${PORT}`)
})