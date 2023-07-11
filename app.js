const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create();
const app = express();

const indexRouter = require('./routes/index.js');
const clubsRouter = require('./routes/clubs.js');
const formRouter = require('./routes/form.js');

const PORT = 3000;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('src'));
app.use('/', indexRouter);
app.use('/clubs', clubsRouter);
app.use('/form', formRouter);

app.listen(PORT);
