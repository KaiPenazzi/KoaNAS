const Koa = require('koa');
const router = require('./router');
const createSpace = require('./controller/createDataSpace')

const app = new Koa();

// registriere Routen
router(app);

app.listen(3000);
console.log('Server running on port 3000');

createSpace()