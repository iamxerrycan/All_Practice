# defination of tuple 
# tuple is used to store multiple values in a single variable
# tuple is created by using parenthesis ()

tup = (1,2,3,4,5,6,7,8,9,10)
print(tup)
print(tup[0])
print(tup[-1])  
print(tup[0:5])
print(tup[0:5:2])
print(tup[0:5:3])

print(tup.count(1))
print(tup.index(1))


for x in tup:
  print(x)

if 1 in tup:  
  print("yes 1 is in tup")  