const express = require('express');
const path=require('path');
const hbs = require("hbs");

const app=express();
const port=process.env.PORT || 3000;
app.set("view engine", "hbs");

const staticPath = path.join(__dirname, "../public")
app.use(express.static(staticPath))

const templatePath = path.join(__dirname, "../templates/views")
app.set("views", templatePath)

const partialsPath = path.join(__dirname, "../templates/partials")
hbs.registerPartials(partialsPath)




app.get("",(req,res) =>{
     res.render('index');
});

app.get("/about", (req,res) =>{
    res.render('about');
});

app.get("/weather", (req,res) =>{
    res.render('weather');
});

app.get("*", (req,res) =>{
    res.render('404error',{
        errorMsg:'OppS! page Not Found'
    })
});


app.listen(port,()=>{
    console.log(`listening to the port ${port}`);
});