const fs = require('fs')

const data = ctx => {
    var path = ctx.headers.path
    var dirread = fs.readdirSync('src/data/' + path)

    ctx.body = JSON.stringify(dirread);
};

module.exports = data;