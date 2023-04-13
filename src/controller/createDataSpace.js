const fs = require('fs')

function createDataSpace() {
    if (!fs.existsSync('src/data')) {
        fs.mkdir('src/data', (err) => {
            if (err) {
                console.log(err)
                return
            }
        })
    }
}

module.exports = createDataSpace