
//------------------Routes CODE-------------------------

// bring in the express router tool
const router= require('express').Router();

// bringing in the pool.js file with the database
const pool= require('../modules/pool.js/pool')

// creating a post route to get information from client side
router.post('/',(req,res) =>{
 let name= req.body.name;
 let description=req.body.description;
 let link= req.body.link;
 let notes= req.body.notes;
 let image_url= req.body.image_URL;

 let sqlText = `
 INSERT INTO "bookmarks"
 ("name","description","link","notes","images")
 VALUES
 ($1,$2,$3,$4,$5)
 `;

 let sqlValues= [name,description,link,notes,image_url]
 
 pool.query(sqlText,sqlValues)
 .then((dbres) =>{
    res.sendStatus(201);
 }).catch((dbErr)=>{
    console.log('thier was a error here', dbErr);
    res.sendStatus(500);
 })
})

// get route for the client side from database
router.get('/', (req,res)=>{
    let sqlText= 'SELECT * FROM "bookmarks";';

    pool.query(sqlText)
    .then((dbRes)=>{
        
        let bookmark=dbRes.rows;
        res.send(dbRes.rows)
    }).catch((dbErr)=>{
        console.log('things are not working with get rout',dbErr)
        res.sendStatus(500);
    })
})

router.delete('/:id',(req,res)=>{
    let idToDelete=req.params.id;

    let sqlText= `
    DELETE FROM "bookmarks"
    WHERE "id"=$1;
    `
    let sqlValues= [idToDelete]

    pool.query(sqlText,sqlValues)
    .then((dbRes)=>{
        res.sendStatus(200);
    }).catch((dbErr)=>{
        console.log('something went wrong check it out--->', dbErr);
        res.sendStatus(500);
    })
})

    
// exporting the router
module.exports =router;

