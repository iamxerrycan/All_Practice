# dictionary difination
# dictionary is used to store multiple values in a single variable
# dictionary is created by using curly braces {}

dict = {
  "name" : "raj" ,
  "age" : 20
}

print(dict)
print(dict["name"])
print(dict["age"])  


# add
dict["address"] = "kolkata"
print(dict)   


# remove
dict.pop("name")
print(dict)


# update
dict["age"] = 21
print(dict)

# clear
dict.clear()
print(dict)


# copy
dict = dict.copy()
print(dict1)


# update  
dict.update({"name" : "raaz"})
print(dict)

print(dict.get("name"))
print(dict.keys())
print(dict.values())
print(dict.items())