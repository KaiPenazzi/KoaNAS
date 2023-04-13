const route = require('koa-route')
const home = require('./controller/home.js')
const greet = require('./controller/greet.js')
const js = require('./controller/js.js')

const router = app => {
    app.use(route.get('/', home))
    app.use(route.get('/greet', greet))
    app.use(route.get('/js/:id', js))
}

module.exports = router;