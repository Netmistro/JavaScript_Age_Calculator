const btnE1 = document.getElementById("btnAge");
const birthdayE1 = document.getElementById("birthday");

function calculateAge() {
  const birthdayValue = birthdayE1.value;
  if (birthdayValue === "") {
    alert("Please Enter Your Birthday");
  } else {
const age=getAge(birthdayValue);
  }
}

function getAge(birthdayValue){
  const currentDate = new Date();
}
btnE1.addEventListener("click", calculateAge);
