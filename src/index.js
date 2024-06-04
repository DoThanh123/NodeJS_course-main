var methodOverride = require('method-override')
const express = require('express')
const path = require('path')
const app = express()
const handlebars = require('express-handlebars')
const morgan = require('morgan')
const port = 3000

const route = require('./routes')
const db = require('./config/db')

//connect db
db.connect()

//body.parse
app.use(express.static(path.join(__dirname, 'public')))
app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

app.use(methodOverride('_method'))

//HTTP logger
//app.use(morgan('combined'))

//template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: 'hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

//Route init
route(app)

//127.0.0.1 - localhost
app.listen(port, () => console.log(`App listening at http://localhost:${port}`))
