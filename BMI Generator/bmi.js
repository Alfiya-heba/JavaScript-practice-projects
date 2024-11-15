const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Stop the default form submission

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  // Validate height input
  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please provide a valid height!`;
    return;
  }

  // Validate weight input
  if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please provide a valid weight!`;
    return;
  }

  // Calculate BMI
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  // Determine BMI category and display result
  let category = "";
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight";
  } else if (bmi >= 30) {
    category = "Obese";
  }

  // Show BMI and category
  results.innerHTML = `Your BMI is <span>${bmi}</span> (${category}).`;
});
