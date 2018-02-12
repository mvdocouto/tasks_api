const express = require("express")
const consign = require("consign")
// import express  from "express";
// import consign  from "consign";
const httpPort = 3000;
const app = express();

app.set("json spaces", 4)

consign()
    .include("models")
    .then("routes")
    .into(app);


app.listen(httpPort, () => {
    console.log(`Estamos vivos! http://localhost:${httpPort}`);
});