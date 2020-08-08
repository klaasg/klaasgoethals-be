/* Show correct birthday */
let today = new Date();
let age = today.getFullYear() - 2000;
age -= (today.getMonth() > 6 || (today.getMonth() === 6 && today.getDate() >= 9)) ? 0 : 1;
document.getElementById("age").innerHTML = age;