ar = [1,2,3,4,5,6,7,8,9,10]

for i in range(len(ar)):
  for j in range(i+1 ,  len(ar)):
    if ar[i] <  ar[j] :
      ar[i] , ar[j] = ar[j] , ar[i]

print(ar)




ar1 = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]

#explain loop 


for i in range(len(ar1) - 1 , -1 , -1):
  for j in range(i-1 , -1 , -1):
    if ar1[i] == ar1[j] :
      ar1.pop(j)
      break 
print(ar1)