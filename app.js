const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv');

dotenv.config({});

app.use(express.static('dist'));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 6105;
app.listen(PORT, () => console.log(`Application is running on: ${PORT}`));
