const fs = require('fs');

const write = function(data="Bahala kaman!") {
    fs.writeFileSync('note.txt', data);

}

module.exports = write