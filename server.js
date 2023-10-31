const express = require('express');
//const { ServerConfig } =require('./src/config')
const app = express();
const PORT = 3000;

app.get('/',(req,res)=>{
    res.send('Hey Buddy! Welcome to Home Page')
})

app.get('/messages',(req,res)=>{
    res.send('<ul><li>Hey Albert New Messages for You in Inbox</li></ul>');
})

app.post('/messages',(req,res)=>{
    res.send({
        id:1,
        name : 'Albert Einstien'
    })
});

app.listen(PORT , (req,res)=>{
    //console.log('serverconfig',ServerConfig);
    console.log(`Successfuly started the app on ${PORT}`);
});