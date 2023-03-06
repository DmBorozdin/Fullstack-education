const express = require("express");
const path = require('path');

const app = express();

const PORT = 3000;

const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`);

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.get('/', (req, res) => {
    res.sendFile(createPath('index'));
});

app.get('/contacts', (req, res) => {
    const contacts = [
        { name: 'GitHub', link: 'https://github.com/DmBorozdin'},
    ];
    res.sendFile(createPath('contacts'));
});

app.get('/posts/:id', (req, res) => {
    const title = 'Post';
    res.sendFile(createPath('post'));
});

app.get('/posts', (req, res) => {
    const title = 'Posts';
    res.sendFile(createPath('posts'));
});

app.get('/add-post', (req, res) => {
    const title = 'Add post';
    res.sendFile(createPath('add-post'));
});

app.use((req, res) => {
    const title = 'Error page';
    res
        .status(404)
        .sendFile(createPath('error'));
});