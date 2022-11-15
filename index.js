const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;


app.use(cors());
const category = require ('./Data/category.json');
const courses = require ('./Data/course.json');


app.get('/', (req, res) =>{
    res.send('Learning Platform server is running');
});

app.get('/course-category', (req, res) =>{
    res.send(category);
});

app.get('/category/:id', (req, res) =>{
    const id = req.params.id;
    const category_course = courses.filter( c => c.category_id === id);
    res.send(category_course); 
});

app.get('/course/:id', (req, res) =>{
    const id = req.params.id;
    const selected = courses.find( c=> c._id === id);
    res.send(selected);
});

app.listen(port, () => {
    console.log('Learning platform Server running on port', port);
});