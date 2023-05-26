const layout = require('./addLayout')

const fs = require('fs')

const home = ctx => {
    var data = fs.readFileSync('src/html/home.html')
    data = "" + data
    ctx.response.body = layout.addLayout(data);
};

module.exports = home;