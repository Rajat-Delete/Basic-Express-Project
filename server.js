const express = require('express');
//const { ServerConfig } =require('./src/config')
const app = express();
const PORT = 3000;


const friendsList = [{
    id : 0,
    name : 'Albert Einstien'
},{
    id : 1,
    name : 'Issac Newton'
}]

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

//configuring route parameters
app.get('/friends',(req,res)=>{
    res.status(200).json(friendsList);
})

app.get('/friends/:friendId',(req,res)=>{
    const friendId = Number(req.params.friendId);
    const friend = friendsList[friendId];
    console.log('friend',friend);
    if(friend){
        res.status(200).json(friend);
    }else{
        res.status(400).json('OOPS no friends Found!!');
    }
})

app.listen(PORT , (req,res)=>{
    //console.log('serverconfig',ServerConfig);
    console.log(`Successfuly started the app on ${PORT}`);
});