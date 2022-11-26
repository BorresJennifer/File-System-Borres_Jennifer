const fs = require('fs');

const read = function() {
    return fs.readFileSync('task.txt', 'utf8')
}

module.exports = read;