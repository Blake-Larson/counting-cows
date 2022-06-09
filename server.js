const express = require('express')
const MongoClient = require('mongodb').MongoClient
const app = express()
const PORT = 3000
require('dotenv').config()

// ========================
// Link to Database
// ========================

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'road-trip-farmers'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })


// ========================
// Middlewares
// ========================
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// ========================
// Routes
// ========================
app.get('/', (req, res) => {
    db.collection('players').find().toArray()
        .then(players => {
            res.render('index.ejs', { players: players })
        })
        .catch(error => console.error(error))
})

app.post('/players', (req, res) => {
    db.collection('players').insertOne({ playerName: req.body.playerName, farmName: req.body.farmName, farmCount: 0, barn: { barnCount: 0 } })
        .then(result => {
            res.redirect('/')
        })
        .catch(error => console.error(error))
})

app.put('/players', (req, res) => {
    db.collection('players').findOneAndUpdate(
        { playerName: req.body.players.playerName },
        {
            $set: {
                name: req.body.name,
                quote: req.body.quote
            }
        },
        {
            upsert: true
        }
    )
        .then(result => res.json('Success'))
        .catch(error => console.error(error))
})

app.delete('/players', (req, res) => {
    db.collection('players').deleteOne({ playerName: req.body.playerNameS, farmName: req.body.farmNameS })
        .then(result => {
            console.log(`Player: ${req.body.playerNameS}, Deleted`)
            res.json(`Player: ${req.body.playerNameS}, Deleted`)
        })
        .catch(error => console.error(error))
})

// ========================
// Listen
// ========================

app.listen(process.env.PORT || PORT, function () {
    console.log(`listening on ${PORT}`)
})
