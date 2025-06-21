//const usernamelInput = document.querySelector("#emailnumber")

//emailnumberInput.addEventListener("click", ()=>{
    //console.log("input clicked");
//})

//emailInput.addEventListener("input", (lajred) =>{
    //console.log(lajr);
    //console.log("input event fired");
//})

//const emailInput =
//document.getElementById("email");

//const passwordInput =
//document.getElementById("password");

//emailInput.addEventListener("input",logData);
//passwordInput.addEventListener("input",logData);

//function logData() {
   // const data ={
      //  emailOrphone: emailInput.value,
      //  password:passwordInput.value,
    //};
   // console.clear();
   // console.log(data);
//}

const form = document.querySelector(".myform");

const emailInput = form.querySelector('input[type="text"]');
const passwordInput = form.querySelector('input[type="password"]');

emailInput.addEventListener("input", logData);
passwordInput.addEventListener("input", logData);

function logData() {
    const data = {
        emailOrphone: emailInput.value,
        password: passwordInput.value,
    };
    console.clear();
    console.log(data);
}

//document.addEventListener("DOMContentLoaded", () => {
 // const form = document.querySelector(".form"); // selects your form

  // Get all input fields inside the form
 // const inputs = form.querySelectorAll("input");

  //inputs.forEach((input) => {
    //input.addEventListener("input", () => {
      //const data = {};
      //inputs.forEach((inp) => {
        //data[inp.name] = inp.value; // dynamically store inputs by name
      //});

      //console.clear();
      //console.log(data);
   // });
  //});
//});




