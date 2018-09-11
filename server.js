
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const validUrl = require('valid-url')

const PORT = process.env.PORT || 3000

// Enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing), so that API is remotely testable by fCC
app.use(cors({optionSuccessStatus: 200})) // Some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))


// Array storage for short URLs
let storage = []

// API endpoints
app.post('/api/shorturl/new', async function (req, res) {

    let url = validUrl.isWebUri(req.body.url)

    if (!url) return res.json({"error": "invalid URL"})

    let index = storage.indexOf(url)
    if (index < 0) index = storage.push(url) - 1

    return res.json({
        "original_url": url,
        "short_url": index
    })
})

app.get('/api/shorturl/:short', function (req, res) {
    let index = req.params.short
    if (!storage[index]) return res.json({"error": "invalid URL"})
    res.redirect(storage[index])
})


// http://expressjs.com/en/starter/basic-routing.html
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/readme.html')
})

// Listen for requests
const listener = app.listen(PORT, function () {
    console.log(`App is listening on port ${listener.address().port}`)
})
