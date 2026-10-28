const massJohn = " 92";
const heightJohn = "1.95";
const massMark = "78";
const heightMark = "1.69";

const BMIJohn = massJohn / (heightJohn * heightJohn);
const BMIMark = massMark / (heightMark * heightMark);
console.log(BMIMark, BMIJohn);
console.log(BMIMark > BMIJohn);


if (BMIMark > BMIJohn) {
    console.log(BMI = `Mark's BMI (${BMIMark}) is higher than John's   (${BMIJohn})!`)
} else {
    console.log(BMI = `John's BMI (${BMIJohn}) is higher than Mark's   (${BMIMark})!`)
};
