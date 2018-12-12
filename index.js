'use strict'

function XECommand () {}

function getContainer () {
  var $copy = document.getElementById('$XECopy')
  if (!$copy) {
    $copy = document.createElement('input')
    $copy.id = '$XECopy'
    $copy.style['width'] = '48px'
    $copy.style['height'] = '12px'
    $copy.style['position'] = 'absolute'
    $copy.style['z-index'] = '0'
    $copy.style['left'] = '-500px'
    $copy.style['top'] = '-500px'
    document.body.appendChild($copy)
  }
  return $copy
}

function objectEach (obj, iterate, context) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      iterate.call(context || this, obj[key], key, obj)
    }
  }
}

/**
 * 复制文本到剪贴板
 *
 * @param {String} content 文本内容
 */
function copy (content) {
  var $copy = getContainer()
  var value = content || ''
  try {
    $copy.value = value
    $copy.focus()
    $copy.setSelectionRange(0, value.length)
    return document.execCommand('copy', true)
  } catch (e) {
    return false
  }
}

XECommand.copy = copy
XECommand.mixin = function (methods) {
  objectEach(methods, function (callback, name) {
    XECommand[name] = callback
  })
}

module.exports = XECommand
module.exports.default = XECommand
