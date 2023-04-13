const route = require('koa-route')
const home = require('./controller/home.js')
const greet = require('./controller/greet.js')
const js = require('./controller/js.js')
const data = require('./controller/data.js')

const router = app => {
    app.use(route.get('/', home))
    app.use(route.get('/greet', greet))
    app.use(route.get('/js/:file', js))
    app.use(route.get('/data/:path', data))
}

module.exports = router;