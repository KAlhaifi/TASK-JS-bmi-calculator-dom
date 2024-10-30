function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  let result = (weight / Math.pow(height, 2)) * 10000;
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

  let bmiBasedOnAge = "Unknown";
  if (age >= 19 && age <= 24) {
    if (bmi >= 19 && bmi <= 24) {
      bmiBasedOnAge = "Healthy";
    } else bmiBasedOnAge = "Not Healthy";
  } else if (age >= 25 && age <= 34) {
    if (bmi >= 20 && bmi <= 25) {
      bmiBasedOnAge = "Healthy";
    } else bmiBasedOnAge = "Not Healthy";
  } else if (age >= 35 && age <= 44) {
    if (bmi >= 21 && bmi <= 26) {
      bmiBasedOnAge = "Healthy";
    } else bmiBasedOnAge = "Not Healthy";
  } else if (age >= 45 && age <= 54) {
    if (bmi >= 22 && bmi <= 27) {
      bmiBasedOnAge = "Healthy";
    } else bmiBasedOnAge = "Not Healthy";
  } else if (age >= 55 && age <= 64) {
    if (bmi >= 23 && bmi <= 28) {
      bmiBasedOnAge = "Healthy";
    } else bmiBasedOnAge = "Not Healthy";
  } else if (age >= 65) {
    if (bmi >= 24 && bmi <= 29) {
      bmiBasedOnAge = "Healthy";
    } else bmiBasedOnAge = "Not Healthy";
  }
  alert(
    `  bmi = ${bmi}
   bmiState = ${bmiState}
   bmiByAge = ${bmiBasedOnAge}`
  );
  // if ( age >= 19 && age < 24 ) bmiBasedOnAge = ( age >= 19 && age < 24 ) ? "Healthy" : "Not Healthy";
  // else ( age >= 25 && age < 34 ) bmiBasedOnAge = ( age >= 25 && age < 34 ) ? "Healthy" : "Not Healthy";
  // else ( age >= 35 && age < 44 ) bmiBasedOnAge = ( age >= 35 && age < 44 ) ? "Healthy" : "Not Healthy";
  // else ( age >= 45 && age < 54 ) bmiBasedOnAge = ( age >= 45 && age < 54 ) ? "Healthy" : "Not Healthy";
  // else ( age >= 55 && age < 64 ) bmiBasedOnAge = ( age >= 55 && age < 64 ) ? "Healthy" : "Not Healthy";
  // else ( age >= 65 ) bmiBasedOnAge = ( age >= 65 )
}
