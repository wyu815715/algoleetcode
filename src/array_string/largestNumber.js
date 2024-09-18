/**
 * @param {number[]} nums
 * @return {string}
 */
// var largestNumber = function(nums) {

//     nums.map(x=>x.toString())
//      console.log("--- "+nums);
//     let cmp = (a,b) => {
//         console.log("a .. "+a+" b.. "+b);
        
//         return a+b>b+a ? 1:-1}
    
//     nums.sort(cmp)
//     console.log(nums);
    
//     result = nums.join("")
//     if(result[0]==="0")
//       return "0"
//     return result;
// };
// test = [3,30,34,5,9]  // 9534330
// console.log(largestNumber(test)
// );


function largestNumber(nums) {
    // Convert the numbers to strings
    let s_nums = nums.map(x=>x.toString())
    // nums.map(String);

    // Custom comparator function
    function comp(a, b) {
        let s1 = a + b;
        let s2 = b + a;
        
        // Sorting in descending order based on the comparison of concatenated strings
        return s1 > s2 ? -1 : 1;
    }

    // Sort the array based on the custom comparator
    s_nums.sort(comp);

    console.log("give the temp: ", s_nums);

    // Join the sorted numbers into a single string
    let result = s_nums.join('');

    // Handle the edge case where the result starts with '0' (e.g., [0, 0])
    return result[0] === '0' ? '0' : result;
}

// Example usage
console.log(largestNumber([3, 30, 34, 5, 9]));

