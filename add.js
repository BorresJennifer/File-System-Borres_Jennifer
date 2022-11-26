const fs = require('fs')

const add = function(task=[], oldTask) {
    let finalTask = JSON.parse(oldTask)

    finalTask.push(task)

    let objectTask = JSON.stringify(finalTask)

    fs.writeFileSync('task.txt', objectTask)
}

module.exports = add