/**
 * xe-command.js v1.0.14
 * (c) 2017-2018 Xu Liangzhan
 * ISC License.
 * @preserve
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory()
    : typeof define === 'function' && define.amd ? define(factory)
      : (global.XECommand = factory())
}(this, function () {
  'use strict'

  function XECommand () { }

  XECommand.version = '1.0.14'
  XECommand.mixin = function (methods) {
    return Object.assign(XECommand, methods)
  }

  function getContainer () {
    var $copy = document.getElementById('$XECopy')
    if (!$copy) {
      $copy = document.createElement('input')
      $copy.id = '$XECopy'
      $copy.style.width = '2px'
      $copy.style.position = 'absolute'
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
      return document.execCommand('copy', false, null)
    } catch (e) {
      console.log(e)
      return false
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

  var methodExports = {
    copy: copy,
    commandCopy: copy,
    print: print,
    commandPrint: print
  }

  XECommand.mixin(methodExports)

  return XECommand
}))
