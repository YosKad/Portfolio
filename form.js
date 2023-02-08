const scriptURL =
  "https://script.google.com/macros/s/AKfycbwt2QHx7LnQ6SR5tlnxq-WeO9TCkoWphh-2bJbUwe2YMyw8p0rTSnejQWYEQOgMsx_T/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
