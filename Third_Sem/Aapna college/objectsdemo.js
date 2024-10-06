let lecture=10;
let section = 3;
let title='javaScript';
console.log(lecture);

// const course={
//     lecture:10,
//     section:3,
//     title:'JavaScript',
//     notes:{
//       introduction:"Welcome to JS course"
//     },
//     enroll(){
//       console.log('You are Sucessfully enrolled');
//     }
// }

// function enroll(){
//   console.log('You are successfully enrolled');

// }
// course.enroll();
// console.log(course);
// course.price=999;


//Factory Function
function createCourse(title){
  return {
    title:title,
    enroll(){
       console.log('You are successfully enrolled');
      
      }
    }
  }
  const newcourse=createCourse('javaScript')
//     notes:{
//       introduction:"Welcome to JS course"
//     },
// const course = createCourse('java is oop');
// course.enroll();
// console.log(course);


//constructor Function

function Course(title)
  {
  this.title=title,
  this.enroll = function(){
    console.log('You are Sucessfully enrolled');
  }
  
}

const course1= 'alphabet';
//const course = new Course('javaScript');
//console.log(course.constructor);
console.log(newcourse.constructor);

// delete course.title;
// console.log(course.title);
// course.checkEnrollment=function(){
//   console.log('30 user enrolled')
// }

// course.enroll();
// console.log(course); 
//Function is Constructor function
const Course_1=new Function('title',`
this.title=title,
  this.enroll = function(){
    console.log('You are Sucessfully enrolled');
  }
  `)

  // const course_2=new Course_1('javaScript');
  // course_2.enroll();


  //primitive datatype
  let number=10;
  //pass by value
  let number_2=number;
  number=15;
   console.log(number);
  console.log(number_2);

  //Refrence Datatype
  let obj={
    number:10
  };
 // new object();
  //pass by reference
  let obj2=obj;//memory location of obj is passed here
  obj.number=15;

  console.log(obj);
  console.log(obj2);



  const course={
    title:'javaScript',
    enroll(){
       console.log('You are successfully enrolled');
      
      }
    }

    // const course_1={...course}//3 dots are important i.e spread operator in js
    // console.log(course_1);
    // course_1.title='c++';
    // console.log(course_1);
    // console.log(course);
 
    // const course_1=Object.assign({},course) 
    // course_1.title='hello World';
    // console.log(course_1);
    //  console.log(course);

    // for(let key in course){
    //   console.log(key,course[key]);
    // }
    const course_1={};
    
    for(let key of Object.keys(course)){
      console.log(key,course[key]);
      course_1[key]=course[key];

    }