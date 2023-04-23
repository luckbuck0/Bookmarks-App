
//------------------SERVER CODE-------------------------
// bringing in express
const express= require('express');

// initializing express
const app= express()

// bringing in bodyparser 
const bodyParser= require('body-parser')

// creating variable for port= to 5000
const port=5000;

// identify the server/public file
app.use(express.static('./server/public'));

// initializing body parser
app.use(bodyParser.urlencoded({extended:true}));


//------------------Routes CODE-------------------------

// bringing in the js file bookmarks from routes
const bookmarks=require('./routes/bookmarks')

// telling server to use routes variable for all
// request concerning /bookmarks
app.use('/bookmarks',bookmarks)

// telling server to listen for request to turn on port 5000
app.listen(port, ()=>{
    console.log('Congrats youre connected on port',port);
});