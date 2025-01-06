const express= require('express')
const app=express()

app.use((req,res)=>{
    res.send("this is basic server ")
})
app.listen(3000,()=>{
    console.log("your server runnig on port 3000");
    
})