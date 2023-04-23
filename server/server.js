// bringing in express
const express= require('express');

// initializing express
const app= express()

// bringing in bodyparser 
const bodyParser= require('body-parser')

// creating variable for port= to 5000
const port=5000;

// bringing in the js file bookmarks from routes
const routes=('/Users/LuckieBah/Documents/Coding/practice/Bookmarks-App/server/routes/bookmarks.js')

// initializing body parser
app.use(bodyParser.urlencoded({extended:true}));

// telling server to use routes variable for all
// request concerning /bookmarks
app.use('/bookmarks',routes)


// telling server to listen for request to turn on port 5000
app.listen(port, ()=>{
    console.log('Congrats youre connected on port',port);
})