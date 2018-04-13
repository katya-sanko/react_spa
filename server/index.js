const express = require('express');
const app = express();

// app.get('/', (req, res) => res.send('Hello World!'));
app.get('/greeting', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ greeting: 'Hello World!' }));
});

app.listen(3001, () => console.log('Example app listening on port 3001!'));