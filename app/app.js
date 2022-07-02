const express = require('express');
const router = require('../api/routes/router')
const app = express();


app.use(express.json())

app.get('/', (req, res, next)=> {
    res.status(200).json({
        message: 'Server is up',
    })
})

// localhost:3000
app.use("/users", router)
module.exports = app