
def removeDuplicates2( nums):
        j = 1
        for i in range(1, len(nums)):
            if nums[i] != nums[i - 1]:
                nums[j] = nums[i]
                j += 1
        for i in range(j,len(nums)): 
            nums.pop()
        return nums
test1 = [1,2,2,9,9,32]

print(removeDuplicates2(test1))
