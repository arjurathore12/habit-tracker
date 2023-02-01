require('dotenv').config()
const express =require('express');
const path = require('path');
const app =express();
const bodyParser = require('body-parser')
const router =require('./routes/mainRoutes')

app.set('view engine','ejs');


//Set Template Engine 

app.set("view engine","ejs")

app.set('views', path.join(__dirname, 'views'))
console.log(app.get("view engine"))


//   Database Connection
const {connectMonggose} = require('./app/db')
connectMonggose();


//  Asset

app.use("/assets", express.static('./assets'));
app.use( bodyParser.urlencoded({ extended: true }) );

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//  Routes 
app.use(router);

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Serving running on port ${PORT}`);
})
