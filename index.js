import { commandMethods } from './src/methods'

function XECommand () {}

/**
 * 函数扩展
 *
 * @param {Object} methods 扩展函数对象
 */
function mixin (methods) {
  return Object.assign(XECommand, methods)
}

mixin(commandMethods)
XECommand.mixin = mixin

export * from './src/command'
export default XECommand
