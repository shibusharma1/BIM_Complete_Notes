let lecture=10;
let section = 3;
let title='javaScript';

const course={
    lecture:10,
    section:3,
    title:'JavaScript',
    notes:{
      introduction:"Welcome to JS course"
    },
    enroll(){
      console.log('You are Sucessfully enrolled');
    }
}

function enroll(){
  console.log('You are successfully enrolled');

}
course.enroll();
console.log(course);
course.price=999;