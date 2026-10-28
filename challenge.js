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

//***********************************************************

const scoreDolphins = (88 + 108 + 96) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy")
} else if (scoreDolphins === scoreKoalas) {
    console.log("Both win the trophy")
} else if (scoreDolphins < scoreKoalas) {
    console.log("Koalas win the trophy")

}




