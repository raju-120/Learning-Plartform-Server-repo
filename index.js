const express = require('express');
const app = express();
const port = process.env.PORT || 5000;



app.get('/', (req, res) =>{
    res('Learning Platform server is running');
})

app.listen(port, () => {
    console.log('Learning platform Server running on port', port);
})