const cmd = process.argv
const add = require('./add')
const read = require('./read')
const write = require('./write')
const del = require('./del')

const data = process.argv
var task = {}

if(data[2] == 'add'){
    task = {
        id: data[3],
        title: data[4],
        body: data[5]
    }




    var oldTask = read()

    add(task,oldTask)
}
//console.log(task)

if (data[2] == 'read'){

   const present = require('./present')
   present(read())

}

if (data[2] === 'delete'){
    let id = data[3]
    let oldTask = read()
    let del = require("./del.js")
    del(id,oldTask);
    console.log(read());
}
 //   const del = require('./del')
  //  del(read())
//}
    