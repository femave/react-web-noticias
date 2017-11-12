'use strict';

const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const PORT = 3001

app.use(express.static(path.join(process.cwd(), 'public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// midleware
const setHeaders = require('./server/midleware/setHeaders')
const webToParse = require('./server/midleware/webToParse')

// Routes
const newsData = require('./server/routes/newsData/')
const laVanguardia = require('./server/routes/laVanguardia/')
const elPais = require('./server/routes/elPais/')
const omicrono = require('./server/routes/omicrono/')
const elAndroideLibre = require('./server/routes/elAndroideLibre/')
const genbeta = require('./server/routes/genbeta/')
const gizmodo = require('./server/routes/gizmodo/')
   
//app.use('/', setHeaders, firstRoute);
app.use('/api/newsData', setHeaders, newsData)
app.use('/api/lavanguardia', setHeaders, webToParse, laVanguardia)
app.use('/api/elpais', setHeaders, webToParse, elPais)
app.use('/api/omicrono', setHeaders, webToParse, omicrono)
app.use('/api/elandroidelibre', setHeaders, webToParse, elAndroideLibre)
app.use('/api/genbeta', setHeaders, webToParse, genbeta)
app.use('/api/gizmodo', setHeaders, webToParse, gizmodo)

app.listen(PORT)
console.log(`Listening at port ${PORT}`)