const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3000
const Blog=require("./models/mySchema")
app.use(express.urlencoded({extended:true}))
app.get('/', (req, res) => {
    res.sendFile('./views/home.html', { root: __dirname })
})

app.get('/index.html', (req, res) => {
    res.send("<h3> Your entry has been added to database</h3>")
})


mongoose.connect('mongodb+srv://jassyalkady:ZTafBXq4gi1POXCZ@cluster0.etidetd.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
}) })
.catch((err) => { console.log(err) });

app.post('/', (req, res) => {
    console.log(req.body)
    const data=new Blog(req.body);
    data.save()
    .then(()=>{res.redirect("/index.html")})
    .catch((err)=>console.log(err))
    
})
