const layout = require('./addLayout')

const fs = require('fs')

const hello = ctx => {
    var data = fs.readFileSync('src/html/home.html')
    data = "" + data
    ctx.response.body = layout.addLayout(data);
};

module.exports = hello;