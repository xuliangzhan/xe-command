'use strict'

var XECommand = require('./command')
var methodExports = require('../method')

XECommand.mixin(methodExports)

module.exports = XECommand
module.exports.default = XECommand
