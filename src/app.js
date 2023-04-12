const Koa = require('koa');
const router = require('./router');

const app = new Koa();

// registriere Routen
router(app);

app.listen(3000);
console.log('Server running on port 3000');
