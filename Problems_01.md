## Leetcode - Problems 

### 01 - Arrays 

#### 1)  [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

~~~python
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
~~~

~~~javascript
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

~~~

#### 2 - 179 ) Largest Number

Given a list of non-negative integers `nums`, arrange them such that they form the largest number and return it.

Since the result may be very large, so you need to return a string instead of an integer.

 

**Example 1:**

```
Input: nums = [10,2]
Output: "210"
```

**Example 2:**

```
Input: nums = [3,30,34,5,9]
Output: "9534330"
```

 

**Constraints:**

- `1 <= nums.length <= 100`

- `0 <= nums[i] <= 109`

  ~~~javascript
  **
   * @param {number[]} nums
   * @return {string}
   */
  var largestNumber = function(nums) {
   // Convert the numbers to strings
      let s_nums = nums.map(x=>x.toString());
  
      // Custom comparator function
      function comp(a, b) {
          let s1 = a + b;
          let s2 = b + a;
          
          // Sorting in descending order based on the comparison of    concatenated strings
          return s1 > s2 ? -1 : 1;
      }
  
      // Sort the array based on the custom comparator
      s_nums.sort(comp);
  
      console.log("give the temp: ", s_nums);
  
      // Join the sorted numbers into a single string
      let result = s_nums.join('');
  
      // Handle the edge case where the result starts with '0' (e.g., [0, 0])
      return result[0] === '0' ? '0' : result;
  ~~~

  ~~~python
  class Solution:
      def largestNumber(self, nums: List[int]) -> str:
          s=[str(x) for x in nums]
  
          def cmp(a, b):
              return -1 if a+b > b+a else 1
          s.sort(key=cmp_to_key(cmp))
          ans="".join(s)
          return '0' if ans[0]=='0' else ans
  ~~~

  

### 3- 2185) Counting Words With a Given Prefix

You are given an array of strings `words` and a string `pref`.

Return *the number of strings in* `words` *that contain* `pref` *as a **prefix***.

A **prefix** of a string `s` is any leading contiguous substring of `s`.

 

**Example 1:**

```
Input: words = ["pay","attention","practice","attend"], pref = "at"
Output: 2
Explanation: The 2 strings that contain "at" as a prefix are: "attention" and "attend".
```

**Example 2:**

```
Input: words = ["leetcode","win","loops","success"], pref = "code"
Output: 0
Explanation: There are no strings that contain "code" as a prefix.
```

~~~javascript
/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {

    count = 0
    for (let i of words) {
        if(i.startsWith(pref))
           count+=1
    }

    return count
    
};
~~~



~~~python
class Solution:
    def prefixCount(self, words: List[str], pref: str) -> int:
        count = 0;
        for i in words:
            if i.startswith(pref):
                count+=1
            
        return count
~~~

