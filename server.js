const express = require("express");
const PORT = process.env.PORT || 3001;
const routes = require('./routes')
const app = express();
const mongoose = require('mongoose')
const db = require('./database/keys/register').MongoURI
const passport = require('./passport');
const path = require('path');

app.use(express.json())

app.use(passport.initialize())
app.use(passport.session())

app.use(routes)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err))

app.listen(PORT, function () {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});