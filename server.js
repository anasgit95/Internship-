const express = require('express');
const app = express();


app.get('/api/customers',(req,res)=> {
	const customers = [
   {id:1,firstname:'DEv Web',lastname:'création d'un site web pour .......'} ,
   {id:2,firstname:'dev mobile',lastname:'mobile ...................'} ,
   {id:3,firstname:'android ... ',lastname:'description .................'} ,
   {id:5,firstname:'mdsmqdsq ',lastname:'dmqsmdqdmqms'} ,

	];
res.json(customers);
  
   });

const port =5000;
app.listen(port,()=>console.log("server started on port ${port}"));
