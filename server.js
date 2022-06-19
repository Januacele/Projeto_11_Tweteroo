import express from "express";

const app = express();

app.get("/", (req, res) => {
    console.log("Here");
    res.send("Hello");
})

app.listen(5000);