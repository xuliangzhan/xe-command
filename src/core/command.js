'use strict'

function XECommand () {}

XECommand.version = '1.0.15'
XECommand.mixin = function (methods) {
  return Object.assign(XECommand, methods)
}

module.exports = XECommand
