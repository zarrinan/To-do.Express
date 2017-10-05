/* import your dependencies (install them first)*/
/* what packages do you need to set up your server? */
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
const cheerio = require('cheerio')
//const dom = require('express-jsdom')(app);
//dom.use('jquery');

const ejs = require('ejs');

const methodOverride = require('method-override');

const todoRoutes = require('./routes/todo-routes');

app.use(logger('dev'));

app.use(express.static('public'));
app.use(methodOverride('_method'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
res.render('index');
})

// dom.get('/', function() {
//     $('#homeLink').css('color', 'yellow');
// });

app.use('/todos', todoRoutes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

app.get('*', (req, res) => {
  res.status(404).send('not found');
});










