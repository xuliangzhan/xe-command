/*!
 * xe-command.js v1.0.5
 * (c) 2017-2018 Xu Liangzhan
 * ISC License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global.XECommand = factory())
}(this, function () {
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

  function copy (content) {
    var $copy = getContainer()
    try {
      $copy.value = content
      $copy.select()
      document.execCommand('copy', false, null)
    } catch (e) {
      console.log('该浏览器不支持Copy')
    }
  }

  function print () {
    try {
      document.execCommand('print')
    } catch (e) {
      window.print()
    }
  }

  function XECommand () {}

  /**
   * 函数扩展
   *
   * @param {Object} methods 扩展函数对象
   */
  function mixin (methods) {
    return Object.assign(XECommand, methods)
  }

  mixin({
    copy: copy, print: print
  })
  XECommand.mixin = mixin

  return XECommand
}))
