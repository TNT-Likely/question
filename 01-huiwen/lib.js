/**
 * 检查一个字符串最多删除一个字符后是否为回文
 * @param {string} str 检测的字符串
 * @param {boolean} isChild 是否为子字符串
 */
const isPalindrome = (str, isChild = false) => {
    let i = 0
    let j = str.length - 1
    while(i < j) {
        if (str[i] === str[j]) {
            i++
            j--
        } else if (isChild) {
            return false
        } else {
            const subStr1 = str.substring(i, j)
            const subStr2 = str.substring(i + 1, j + 1)
            return isPalindrome(subStr1, true)  || isPalindrome(subStr2, true)
        }
    }
    return true
}


module.exports = isPalindrome