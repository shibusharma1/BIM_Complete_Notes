const num=[1,2,3,4,5,6,7,8,9];
//push
num.push(10);
console.log(num);
//unshift/similar to push but it insert at beginning

num.unshift(0);
console.log(num);
//delete and return last element
console.log(num.pop());
//shift delete and return first element
console.log(num.shift());

console.log(num.length);
num[0]=15;

console.log(num);
const names=['Amal','Dhanvan','Akash','Akshit','Neha','Supriya'];
names.indexOf('A');
console.log(names.indexOf('Akash'));
console.log(names);
//Returns true and false either the array includes the value  or not
console.log(names.includes('Neha'));


let channels = [{
  name:'Apna College',
  subscriber:10000
},{
  name:'Apni kaksha',
  subscriber:20000
},{
  name:'Aman Dhattarwal',
  subscriber:50000
}];
//find is the function here go to mdn refrence for more detailed info
// console.log(channels.find(function(element){
//   return element.name === 'Apna College';
// }))

let names1 = ['Amal','Dhavan','Akash'];
let names2 = ['Akshit','Neha','Supriya'];
let names3 = names1.concat(names2);
//3 se pehele ki valuess aaur 5 k baad ki sari values will be delete including 3 and 5 index
console.log(names3.slice(3,5));
console.log(names1.concat(names2));
//concate grne another  method
let names4=[...names1,...names2];
console.log(names4);


//Here from element to 'Apna College is a function using arrow function
console.log(channels.find(element=>  {
  return element.name === 'Apna College';
}))

//For loop
for(let i = 0; i<names.length; i++){
  console.log(names[i]);
}

//for of loop
for(let name of names){
  console.log(name);
}

//for each method
//function is call back function
names.forEach(function(name,index){
  console.log(name,index)
})

//join method
 let student = ['s','h','i','v','a'];
console.log(student.join('_'));
//split
student='s.h.i.v.a';
console.log(student.split('.'));

//filter method
 let cities =[
  {name: 'Mumbai',population: 3792621},
  {name: 'Delhi',population: 8175133},
  {name: 'Bangalore',population: 2695598},
  {name: 'Chennai',population: 2099451},
  {name: 'Lucknow',population: 1526006}
 ];
 let a=cities.filter(city=> city.population>300000);
 console.log(a);