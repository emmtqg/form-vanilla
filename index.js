/* 
PART 2: STRETCH GOAL

1. Validate that it's an email the user has entered
2. Give feedback as to whether the form was successfully submitted or not
3. Go crazy with the error/success feedback (e.g. animations, sounds)

*/

const email = document.getElementById("email-input")
const form = document.getElementById("myForm")

form.addEventListener("submit", function (e) {
  e.preventDefault()
  // console.log("email: ", email.value)

  /* adapted from w3schools.com How-to Snack/Toast */
  const toast = document.querySelector(".toast");
  // console.dir(toast)
  console.log("email = ", email.value)
  console.dir(email)
  toast.innerHTML = "You are in! Expect interesting updates soon at " + email.value + "!"; 
  toast.classList.add("show");
  
  setTimeout(function () {
    toast.classList.remove("show");
    toast.innerHTML = "";
  }, 3000);
})

email.addEventListener("input", function(e) {
  const label = document.querySelector(".form-input-label");
  console.log('trapped on change')
  label.classList.add("clamp-label");s
});
