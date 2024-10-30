function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  let result = weight / Math.pow(height, 2) / 10000;
  let bmi = result.toFixed(1);
  let bmiState = "unkown";
  if (bmi < 18.5) {
    bmiState = "Underweghit";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bmiState = "Healthy Weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    bmiState = "Overweight";
  } else if (bmi > 30) {
    bmiState = "Above Obesity";
  }
  alert(
    `
    bmi = ${bmi}
   bmiState = ${bmiState}`
  );
}
