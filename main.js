const button = document.querySelector('button')
button.addEventListener('click',ageCalculation)

function ageCalculation(){
const inputDate = document.querySelector('input').value
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}-${month}-${year}`;
console.log(date);
console.log(inputDate);

//return currentDate - inputDate
}

//You need the date input from the user
//You need the current correct date
//You need to compare the two and derive the age based on the distance between the two
//Take this value and put that back in the DOM

//Age formula = Given date - date of birth
