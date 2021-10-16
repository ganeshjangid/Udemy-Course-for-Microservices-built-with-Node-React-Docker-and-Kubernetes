const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bye There !');
});

app.listen(8080, () => console.log('Server is running on PORT 8080'));
