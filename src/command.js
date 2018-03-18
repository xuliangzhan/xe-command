
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
export function copy (content) {
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
export function print () {
  try {
    document.execCommand('print')
  } catch (e) {
    window.print()
  }
}
