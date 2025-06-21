   document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");
   // selects your form

   
  const inputs = form.querySelectorAll("input");

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      const data = {};
      inputs.forEach((inp) => {
        data[inp.name] = inp.value; // dynamically store inputs by name
      });

      console.clear();
      console.log(data);
    });
  });
});

// Get all input elements
  const inputs = document.querySelectorAll('input, select');

  // Loop through each input and add input event
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      console.log(`${input.id}: ${input.value}`);
    });
 });

  document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");
  const inputs = form.querySelectorAll("input");

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      const data = {};
      inputs.forEach((inp) => {
        data[inp.name] = inp.value;
      });

      // console.clear(); // hata dein agar chahen
      console.log(data);
    });
  });
});
