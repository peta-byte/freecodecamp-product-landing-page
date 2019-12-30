const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8084;

app.use(express.json());
app.use('/', express.static(path.join(__dirname, '.')));

app.listen(port, () => console.log(`Listening on port ${port}!`));
