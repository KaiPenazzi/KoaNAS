const fs = require('fs');

const dataPOST = ctx => {
    var req = JSON.parse(ctx.request.body)
    
    fs.writeFile('src/data/' + req.path + req.name, req.data, (err) => {
        if (err) {
            console.log(err)
        }
    })

};

module.exports = dataPOST;