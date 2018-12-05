/**
 * xe-command.js v1.1.0
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

  function getContainer () {
    var $copy = document.getElementById('$XECopy')
    if (!$copy) {
      $copy = document.createElement('input')
      $copy.id = '$XECopy'
      $copy.style['width'] = '48px'
      $copy.style['height'] = '12px'
      $copy.style['position'] = 'absolute'
      $copy.style['z-index'] = '0'
      $copy.style['left'] = '-100px'
      $copy.style['top'] = '-100px'
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
    return Object.assign(XECommand, methods)
  }

  return XECommand
}))
