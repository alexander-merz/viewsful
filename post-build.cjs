const fs = require('fs')
const path = require('path')

const source = path.resolve(`${__dirname}/dist/viewsful.umd.cjs`)
const destination = path.resolve(`${__dirname}/dist/index.js`)

fs.rename(source, destination, error => error && console.error(error))
