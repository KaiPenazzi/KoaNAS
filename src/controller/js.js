const fs = require('fs')

const js = ctx => {
    file = ctx.req.url.split('/')[2]
    data = fs.readFileSync('src/js/' + file)
    ctx.body = data
};

module.exports = js;