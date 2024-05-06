const express = require('express');
const serveIndex = require('serve-index');

const app = express();

app.use(express.static('public'));
app.use('/public', serveIndex('public', {'icons': true}));

app.get('/', (req, res) => {
  res.sendFile('/index.html');
});

app.listen(3000, () => console.log('Server is running on port 3000'));