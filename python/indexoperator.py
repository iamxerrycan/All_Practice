# index operator definition
# index operator is used to access the element of the list
# index operator is used to access the element of the tuple
# index operator is used to access the element of the string  


list = [1,2,3,4,5,6,7,8,9,10]
print(list[1])

tuple = (1,2,3,4,5,6,7,8,9,10)
print(tuple[1])

string = "raj"

if string[1].islower():
      print(string[1].upper())

fullname = "raj singh"

firstnameCap = fullname[0].upper() + fullname[1:]
print(firstnameCap)

fullnamefirstcap = fullname[0].upper() + fullname[1:fullname.find(" ")] +" "+ fullname[fullname.find(" ")+1].upper() + fullname[fullname.find(" ")+2:]
print(fullnamefirstcap)