from functools import cmp_to_key


def largestNumber(nums):
        # convert and split nums int single dig in form charactor
               
     s_nums = [str(s) for s in nums ]
     print("source: ",s_nums)
     def comp(a,b): 
        print("a: ",a, "-- b: ",b)
        s1 =a+b
        s2= b+a
        
        return -1 if s1>s2 else 1
     s_nums.sort(key=cmp_to_key(comp))
     print("give the temp: ",s_nums)
     result="".join(s_nums)
     return 0 if result[0]==0 else result

test = [3,30,34,5,9]  # 9534330

print(largestNumber(test))


# def largestNumber(self, nums: List[int]) -> str:
#         s=[str(x) for x in nums]
#         def cmp(x, y):
#             return -1 if x+y>y+x else 1
#         s.sort(key=cmp_to_key(cmp))
#         ans="".join(s)
#         return '0' if ans[0]=='0' else ans
        
        