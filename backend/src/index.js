import express, { request, response } from 'express'

const app=express();
app.use(express.json());

app.get('/test',(req,res)=>{
res.send("Hello World")
})

app.listen(8080);