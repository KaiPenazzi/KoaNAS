const fs = require('fs');

const dataPOST = ctx => {
    //var req = JSON.parse(ctx.request.body)

    var req = JSON.parse(ctx.request.body)

    //console.log(req.data.length)
    
    err = fs.writeFileSync('src/data/' + req.path + req.name, req.data)

    if (err) {
        console.log(err)
        ctx.response.status = 500; // Set error status code
        ctx.response.body = { error: 'Error writing file' }; // Set error response body
    } else {
        ctx.response.status = 200; // Set success status code
        ctx.response.body = { message: 'File written successfully' }; // Set success response body
    }

};

module.exports = dataPOST;