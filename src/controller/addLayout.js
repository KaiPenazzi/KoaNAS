const fs = require('fs')

function addLayout(text) {

    data = fs.readFileSync('./src/html/layout.html')
    data = "" + data;
    var splited = data.split("space");
    return splited[0] + text + splited[1]
}

module.exports = { addLayout }