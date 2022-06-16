function checkBmi (weight, height) {
  let bmi = Math.round(weight/(height*height));

  if (bmi <= 18.5) {
    return "your BMI is " + bmi + " you're healthy, bien fait";
  }

  else if (bmi > 18.5 && bmi <= 24.5 ) {
    return "your BMI is " + bmi + " damn son, you;re slipping, watch out";
  }

  else {
    return "your BMI is " + bmi + " HOLY FUCK< you're fat man, go get help";
  }
}

console.log(checkBmi(40, 1.7));