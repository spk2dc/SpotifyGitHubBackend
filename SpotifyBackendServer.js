//___________________
//Dependencies
//___________________
const express = require('express');
const app = express();
require('dotenv').config()
//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET

app.get('/spotify-variables', (req, res) => {
    res.json({ CLIENT_ID: CLIENT_ID, CLIENT_SECRET: CLIENT_SECRET })
})

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log('Listening on port:', PORT));