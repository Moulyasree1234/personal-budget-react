const express = require('express');
const app = express();
const cors = require('cors')
const port = 3300;

app.use('/', express.static('public'));
app.use(cors('localhost:3000'))

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.use('/budget', (req, res) => {
    res.sendFile("personal-budget.json", { root: '.' });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

 
 