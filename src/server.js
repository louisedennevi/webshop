// Här ska vi definiera vår server
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 8080
const config = require("../config/config")

// Route till
app.get('/', (req, res) => res.send('Hello World!'))





module.exports = {app, port, config}
