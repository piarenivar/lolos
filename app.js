const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.listen(PORT, () => {
    console.log(`Server has started running on port ${PORT}.`);
});

app.get('/', (req, res) => {
    console.log('Server has received http request.');
    res.send('Hello there...')
});