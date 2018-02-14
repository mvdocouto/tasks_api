const express = require("express")
const consign = require("consign")
// import express  from "express";
// import consign  from "consign";
const app = express();

consign()
    .include("models")
    .then("libs/middleware.js")
    .then("routes")
    .then("libs/start.js")
    .into(app);
