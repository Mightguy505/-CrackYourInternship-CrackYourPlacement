var moveZeroes = function(nums) {
    let result=0
  
    for(let i=0; i< nums.length; i++){
      if(nums[i] != 0){
          [nums[result], nums[i]] = [nums[i], nums[result]]
          result++
      }
    }
     return result
  };