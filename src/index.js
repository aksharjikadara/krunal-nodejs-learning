const express = require('express');
const config = require('../config/config')
const router = require('./router')

const app = express();

// app.use(express.json())
app.use('/', router);


app.listen(config.PORT, () => {
  console.log(`server is started at http://localhost:${config.PORT}`);
})
