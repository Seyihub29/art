// const { name } = require('ejs')
const express = require('express')
const app = express()
const cors = require('cors')
// require('ejs')
// app.set('view engine', 'ejs')
const dotenv = require('dotenv')
dotenv.config()


const nigerianArtiste = [
    {name: 'Anendlessocean', songTitle: 'Juba', songUrl:'https://open.spotify.com/track/3y8fl4vQjkHjOaHc0nHmXU?si=57eb1bfb84284f86', yearofRelease:'2024'},
    {name: 'Pelumideborah', songTitle: 'Gbogbonise', songUrl:'https://open.spotify.com/track/2g5SqiHdJjOPucWuHnzB4k?si=60e9613d19e74071', yearofRelease:'2025'},
    {name: 'Limoblaze', songTitle: 'Calling(bless me)', songUrl:'https://open.spotify.com/track/70phX1Md7Hertk651Q06Z2?si=0fc759ff97da474e', yearofRelease:'2025'},
    {name: 'Paultomisin', songTitle: 'Iyin ye', songUrl:'https://open.spotify.com/track/2OmxCzeLuekhaX7nSvzhax?si=4a64f417d8814463', yearofRelease:'2025'}
]

app.use(cors());
// app.use('/', songRoute)

app.get('/users', (req,res) =>{
    res.send(nigerianArtiste)
})

const port = process.env.port
app.listen(port, () =>{
    console.log(`server running on localhost:$(port)`);
    
})
