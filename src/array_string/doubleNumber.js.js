var removeDuplicates = function(nums) {
    j=1
    for (let i=1;i<nums.length;i++) {
        if(nums[i]!=nums[i-1]) {
            nums[j]=nums[i]
            j+=1
        }
    }
     console.log(j);
     
      let p = 1
      let rest=nums.length-j
      console.log(" -- "+rest)
      while(p<=(rest)) {
        nums.pop()
        p++
    }

    return nums

  
};


test1 = [1,2,2,9,9,32]
test2 = [0,0,1,1,1,2,2,3,3,4]

console.log(removeDuplicates(test2))
