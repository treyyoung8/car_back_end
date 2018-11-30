const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const knex = require('knex')
const queries = require('./queries')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())