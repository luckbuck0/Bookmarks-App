
//------------------Routes CODE-------------------------

// bring in the express router tool
const router= require('express').Router();

// bringing in the pool.js file with the database
const pool= require('../modules/pool.js/pool')

// creating a post route to get information from client side
router.post ('/',(req,res)=>{
    console.log('working');
})

// exporting the router
module.exports =router;

