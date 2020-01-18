//export the path to the directory that is the root of the project

const path = require('path')

module.exports = path.dirname(process.mainModule.filename)