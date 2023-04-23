const router= require('express').Router();

const pool= require('../modules/pool.js/pool')

router.post ('/',(req,res)=>{
    console.log('working');
})

module.exports =router;

