const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;


app.use(cors());
const courses = require ('./Data/coursesItem.json');
const details = require ('./Data/details.json');


app.get('/', (req, res) =>{
    res.send('Learning Platform server is running');
});

app.get('/courses', (req, res) =>{
    res.send(courses);
})

app.get('/details/:id', (req, res) =>{
    const id = req.params.id;
    const selectedCourse = details.find( d => d._id === id);
    res.send(selectedCourse);    
})

app.listen(port, () => {
    console.log('Learning platform Server running on port', port);
})