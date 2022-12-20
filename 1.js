/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
// var findTheDifference = function (s, t) {
//   s = s.split('')
//   for (let i = 0; i < t.length; i++) {
//     let temp = s.indexOf(t[i])
//     if (temp !== -1) {
//       s.splice(temp, 1)
//     } else {
//       return t[i]
//     }
//   }
// }
/* 

输入：s = "abcd", t = "abcde"
输出："e"
解释：'e' 是那个被添加的字母。

输入：s = "", t = "y"
输出："y"

*/

var findTheDifference = function (s, t) {
  let ret = 0
  for (const ch of s) {
    console.log(111, binary(ret), binary(ch.charCodeAt()))

    ret ^= ch.charCodeAt()
  }
  for (const ch of t) {
    console.log(222, binary(ret), binary(ch.charCodeAt()))
    ret ^= ch.charCodeAt()
  }

  console.log(333, binary(ret))

  return String.fromCharCode(ret)
}

console.log(findTheDifference('abcd', 'abcde'))
console.log(findTheDifference('', 'y'))

function binary(num) {
  var resArry = []
  var xresArry = []
  i = 0
  //除2取余
  for (; num > 0; ) {
    resArry.push(num % 2)
    num = parseInt(num / 2)
    i++
  }
  //倒序排列
  for (j = i - 1; j >= 0; j--) {
    xresArry.push(resArry[j])
  }
  return xresArry.join().replace(/,/g, '')
}
