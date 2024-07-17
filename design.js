
function calculateBMI() {
            var heightCm = parseFloat(document.getElementById("height").value);
            var weightKg = parseFloat(document.getElementById("weight").value);
            if (isNaN(heightCm) || isNaN(weightKg) || heightCm <= 0 || weightKg <= 0) {
                alert("Please enter valid height and weight.");
                return;
            }
            var heightM = heightCm / 100;
            var bmi = weightKg / (heightM * heightM);
            var resultText = "Your BMI is " + bmi.toFixed(2) + ". ";

            if (bmi < 18.5) {
                resultText += "You are underweight.";
            } else if (bmi >= 18.5 && bmi < 24.9) {
                resultText += "You have a normal weight.";
            } else if (bmi >= 25 && bmi < 29.9) {
                resultText += "You are overweight.";
            } else {
                resultText += "You are obese.";
            }

            document.getElementById("result").innerHTML = resultText;
        }
