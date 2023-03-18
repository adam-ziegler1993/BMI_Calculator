// Variables for the calculation
let heightInput = document.getElementById('height');
let weightInput = document.getElementById('weight');
let calculateButton = document.querySelector('#bmi button[type="submit"]');
let bmiResult = document.getElementById('result');

// Toggling between cm & kg, inches and pounds
let heightType = "cm";
let weightType = "kg";

const heightToggle = document.getElementById("height-toggle");
const weightToggle = document.getElementById("weight-toggle");

// Function to calculate BMI
function calculateBMI() {
  let heightValue = parseFloat(heightInput.value);
  let weightValue = parseFloat(weightInput.value);

  if (isNaN(weightValue) || isNaN(heightValue) || weightValue === 0 || heightValue === 0) {
    bmiResult.innerHTML = "Please enter valid values for height and weight";
    return;
  }

  // Converting height to meters and weight to kg
  if (heightType === "in") {
    heightValue = heightValue * 0.0254;
  }
  if (weightType === "lbs") {
    weightValue = weightValue * 0.453592;
  }

  let bmi = weightValue / (heightValue ** 2);
  bmi = bmi.toFixed(2);

  // Outputting the result
  bmiResult.innerHTML = `Your BMI is: ${bmi}`;
}

// Event listeners for toggling height and weight units
document.querySelectorAll('input[name="heightUnit"]').forEach(input => {
    input.addEventListener('change', function() {
      if (this.value === "cm") {
        heightType = "cm";
        heightInput.placeholder = "Enter your height in centimeters";
      } else if (this.value === "in") {
        heightType = "in";
        heightInput.placeholder = "Enter your height in inches";
      }
    });
  });
  
  document.querySelectorAll('input[name="weightUnit"]').forEach(input => {
    input.addEventListener('change', function() {
      if (this.value === "kg") {
        weightType = "kg";
        weightInput.placeholder = "Enter your weight in kilograms";
      } else if (this.value === "lbs") {
        weightType = "lbs";
        weightInput.placeholder = "Enter your weight in pounds";
      }
    });
  });
  

// Event listener for button click
calculateButton.addEventListener('click', function(event) {
  event.preventDefault();
  calculateBMI();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
