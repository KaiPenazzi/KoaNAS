const route = require('koa-route');
const hello = require('./controller/hello.js');
const greet = require('./controller/greet.js');

const router = app => {
    app.use(route.get('/', hello));
    app.use(route.get('/greet', greet));
}

module.exports = router;