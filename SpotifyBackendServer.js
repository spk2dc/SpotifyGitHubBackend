//___________________
//Dependencies
//___________________
const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config()


let corsOptions = {
    origin: 'https://spk2dc.github.io/SpotifyTrackFilter/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))

//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET

app.get('/spotify-variables', (req, res) => {
    let requester = req.hostname
    res.json({ CLIENT_ID: CLIENT_ID, CLIENT_SECRET: CLIENT_SECRET, requester: requester })
})

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log('Listening on port:', PORT));