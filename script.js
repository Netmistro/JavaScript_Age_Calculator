const btnE1 = document.getElementById("btnAge");
const birthdayE1 = document.getElementById("birthday");
const resultAge = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayE1.value;
  if (birthdayValue === "") {
    alert("Please Enter Your Birthday");
  } else {
    const age = getAge(birthdayValue);
    resultAge.innerText = `Your Age is ${age} ${
      age > 1 ? "years" : "year"
    } Old`;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }
  return age;
}
btnE1.addEventListener("click", calculateAge);
