const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));
app.use(routes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
