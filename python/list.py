list = ["banana" ,  " mango" , "apple"]
print(list[1])

list[0] = "cherry"  #it will replace the banana with cherry
print(list)

list.append("grapes") #it will add grapes at the end of the list
print(list)

list.insert(1 , "kiwi") #it will add kiwi at index 1
print(list)

list.remove("apple") #it will remove apple from the list
print(list)

list.pop() #it will remove the last element from the list
print(list)

list.clear() #it will remove all the elements from the list
print(list)

list.reverse() #it will reverse the list
print(list)

list.sort() #it will sort the list
print(list) 

list.copy() #it will copy the list
print(list)

list.extend(list) #it will extend the list
print(list)   

list.count("banana") #it will count the number of banana in the list
print(list) 

list.index("banana") #it will find the index of banana in the list
print(list)   

