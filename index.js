const express = require('express');
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');
const WebRouter = require('./routers/WebRouter');

dotenv.config();
const server = express();

server.use(express.json());
server.use("/store",WebRouter);

server.get('/',(req,res)=>{
    res.setHeader('content-type','text/html');
    res.send(fs.readFileSync(path.join(__dirname,'ApiDocs.html'),'utf-8'));
})

server.listen(process.env.PORT,()=>
{
    console.log(`server running on http://localhost:${process.env.PORT}`);
})