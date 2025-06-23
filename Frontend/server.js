require("dotenv").config()
const express = require("express")
const nodemailer = require("nodemailer")
const mongoose = require("mongoose")
const app = express()

mongoose.connect(process.env.MONGO_URL)

const port = process.env.PORT
app.listen(port, (req,res)=>{
    console.log(`Server is running on ${port}`)
})

const transporter = nodemailer.createTransport({
    service: "gmail",
    to: "",
    from: "",
})