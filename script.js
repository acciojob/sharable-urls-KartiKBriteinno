const nameInput = document.getElementById("name");
const yearInput = document.getElementById("year");
const urlText = document.getElementById("url");
const form = document.getElementById("url-form");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  const name = nameInput.value;
  const year = yearInput.value;

  // Build the query string
  const queryString = `?name=${name}&year=${year}`;

  // Update the URL text
  urlText.textContent = `https://localhost:8080/${queryString}`;
});