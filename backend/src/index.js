const express = require('express');

const app = express()
const locationRoute = require('./routes/locationRoute')
const cors = require('cors');


//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/", locationRoute)

app.listen(5000, ()=> console.log('Listening'))