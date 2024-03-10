const button = document.querySelector('button')
button.addEventListener('click',ageCalculation)

function ageCalculation(){
const inputDate = document.querySelector('input').value
const date = new Date(inputDate);
const today = new Date();

let age = today.getFullYear() - date.getFullYear();
const m = today.getMonth() - date.getMonth();

if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
    age--;
  }

  document.querySelector('.class_value').innerText = age;



//let day = date.getDate();
//let month = date.getMonth() + 1;
//let year = date.getFullYear();
//let currentDate = `${year}-${month}-${day}`;
//let diff = Math.abs(currentDate - inputDate);
//console.log(diff)
//console.log(currentDate);

//console.log(inputDate);


}

//You need the date input from the user
//You need the current correct date
//You need to compare the two and derive the age based on the distance between the two
//Take this value and put that back in the DOM

//Age formula = Given date - date of birth
