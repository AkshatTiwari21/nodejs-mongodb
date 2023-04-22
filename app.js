const express= require('express');
const mongoose=require('mongoose');
const path=require('path');
const CampGroundSchema=require('./models/campground.js')

mongoose.connect("mongodb://localhost:27017/yelp-camp");

const db=mongoose.connection;

db.on("error",console.error.bind(console,"connection error"));
db.once("open",()=>{
    console.log("Database Connected");
})

const onListening = () => {
    console.log("Listening on PORT 5000");
}
const app= express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.listen(5000, onListening)

app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/makeCampground',async (req,res)=>{
    const camp= new CampGroundSchema({
        title:'My New Campground',
        description:'cheap camping!'
    });
    await camp.save();
    res.send(camp)
})

app.get('/getTopCampGround',async (req,res)=>{
    const camp= await CampGroundSchema.find({})
    res.send(camp);
})