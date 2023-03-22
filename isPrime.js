// 1 is NOT a prime number...

const maxValue = (nums) => {
    var maxNum = 0;

    for (let i = 0; i <= nums.length; i++){
      if (maxNum == 0 ||maxNum <= nums[i]){
        maxNum = nums[i]
        }
    }
    console.log('maxNum:', maxNum)
    return maxNum
};
