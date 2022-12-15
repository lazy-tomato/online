/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  var l = 0
  var r = nums.length - 1

  while (l <= r) {
    // 差值除以2加上左侧数据
    var mid = Math.floor((r - l) / 2 + l)

    var temp = nums[mid]

    if (target === temp) {
      return mid
    } else if (target < temp) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }

  return -1
}

console.log(search([-1, 0, 3, 5, 9, 12]))
console.log(search([-1, 0, 3, 5, 9, 12]))
