const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const port=4321;

app.use(bodyParser.urlencoded({
	extended:true
}))

app.use(bodyParser.json())

app.use(cors())

app.get("/",(req,res)=>{
	res.send("Hi,I am server")
})

app.post("/newData",(req,res)=>{
	//console.log(req.body)
	const {name,age}=req.body
	console.log("name and password are",name,age)
	res.send("Data Added")
})
app.listen(port,()=>console.log("Server is started"))






