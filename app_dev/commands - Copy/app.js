const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const commandRoutes = require('./routes/commands');
const adminRoutes = require('./routes/admin');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: true}));
//app.use(express.static(path.join(__dirname, 'public')));

app.get('/commands', commandRoutes);
app.get('/admin', adminRoutes);
app.post('/admin_add', adminRoutes);

app.listen(3000);