const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('这是第四次测试'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
