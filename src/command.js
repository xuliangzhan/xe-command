'use strict'

function getContainer () {
  var $copy = document.getElementById('$XECopy')
  if (!$copy) {
    $copy = document.createElement('input')
    $copy.id = '$XECopy'
    $copy.style.width = '2px'
    $copy.style.position = 'fixed'
    $copy.style.left = '-1000px'
    $copy.style.top = '-1000px'
    document.body.appendChild($copy)
  }
  return $copy
}

/**
 * 复制文本到剪贴板
 *
 * @param {String} content 文本内容
 */
function copy (content) {
  var $copy = getContainer()
  try {
    $copy.value = content
    $copy.select()
    document.execCommand('copy', false, null)
  } catch (e) {
    console.log(e)
  }
}

/**
 * 调用打印
 */
function print () {
  try {
    document.execCommand('print')
  } catch (e) {
    window.print()
  }
}

var exportMethods = {
  copy: copy,
  commandCopy: copy,
  print: print,
  commandPrint: print
}

function XECommand () {}

/**
 * functions of mixing
 *
 * @param {Object} methods
 */
function mixin (methods) {
  return Object.assign(XECommand, methods)
}

mixin(exportMethods)
XECommand.mixin = mixin

module.exports = XECommand
module.exports.default = XECommand
