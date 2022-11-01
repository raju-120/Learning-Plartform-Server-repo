const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;


app.use(cors());

const categories = require ('./Data/category.json');

app.get('/', (req, res) =>{
    res.send('Learning Platform server is running');
})

app.listen(port, () => {
    console.log('Learning platform Server running on port', port);
})