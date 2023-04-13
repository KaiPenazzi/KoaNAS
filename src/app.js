const Koa = require('koa');
const { koaBody } = require('koa-body');

const router = require('./router');
const createSpace = require('./controller/createDataSpace')

const app = new Koa();

app.use(koaBody({
    formLimit: "50mb",
    textLimit: "50mb"
}))

// registriere Routen
router(app);

app.listen(3000);
console.log('Server running on port 3000');

createSpace()