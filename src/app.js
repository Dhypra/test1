const express = require("express")
const app = express();
const serverless=require("serverless-http");
const router=express.Router();
module.exports.handler=serverless(app);
app.use("/.netlify/functions/app",router)
app.use(express.static("src/dist"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/dist/index.html")
})
app.post("/", (req, res) => {
    res.redirect("/")
})
app.post("/short", (req, res) => {
    res.sendFile(__dirname + "/dist/short.html")
})

app.post("/long", (req, res) => {
    res.sendFile(__dirname + "/dist/long.html")
})

app.listen(3000, (req, res) => {
    console.log("helo");
})
