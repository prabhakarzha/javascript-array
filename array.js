/* 
forEach() calls a provided callback function once
for each element in an array in ascending order  
{.
.
.
.
.
} */


/*const arr = [6,8,5,3,10,4,1]
arr.forEach((item, index) =>console.log(item)) */


/* .map() create a new array with all element that pass the test implemented by the provided function.

 syntax 
 arr.map(callback(currentvalue,index,array))
 */

var users =[
     { name:"Sonu", age:20 },
     { name:"Ram",  age:18 }
 ];
 

const names = users.map((user)=>{
    return user.name
})
console.log(names)
