let twoSum = function (nums, target) {
  let map = new Map()
  for (var i = 0; nums.length; i++) {
    let x = target - nums[i]
    if (map.has(x)) {
      return [map.get(x), i]
    }
    map.set(nums[i], i)
  }
}

const nums = [1, 2, 3, 4, 5, 6]
const target = 7
console.log(twoSum(nums, target))
