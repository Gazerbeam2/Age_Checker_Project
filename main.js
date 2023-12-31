document.querySelector('button').addEventListener('click',ageCalculation)

function ageCalculation(){
const inputDate = document.querySelector('button').value
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}-${month}-${year}`;
console.log(date);
console.log(inputDate);

//return currentDate - inputDate
}
