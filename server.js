const express = require('express');
const app = express();


// Database setup: 

const MongoClient = require('mongodb').MongoClient

const ObjectId = require('mongodb').ObjectId
let db;
// the below commented code is totally optional it's just to write the clean code 
// (async function(){
//     try{
//     const client= await MongoClient.connect('mongodb://localhost:27017/ecom')
//     db = client.db('ecom')
//        }catch(err){
        
//         throw err

//        }
    

// })

MongoClient.connect('mongodb://localhost:27017/ecom', (err, client) => {
  if (err) throw err

db = client.db('ecom')

  
  })


app.get('/', (req, res)=>{
    // db.products.find() .. this is what we do in mogodb shell ... but chaning the array finction
    // will help in ..jo bhi result aayega find ka usko javascript array ke andar convert kar dega 
    // db.collection('products').find().toArray((err, result) => {
    //     if (err) throw err
    
    //     // console.log(result)    
    //     res.send(result)

    // })

    // the below mentioned code is insert the data in the database 
    try{
    // const result = db.collection('products').insertOne({
    //     name:'Camera',
    //     price: 400
    // });
    
     const result = db.collection('products').findOne({_id: ObjectId('6264dba5ba366c035aa48480')
        
    });

        // console.log(result)    
        res.send(result)

    } catch(err){

        throw err
    }

})



// res.send('<h1>Hello from express JS!!!</h1>')


app.listen(4000, ()=> console.log('Listening to port 4000'));

