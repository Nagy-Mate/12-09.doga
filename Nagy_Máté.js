//Get the Middle Character
function getMiddle(s) {
    if(s.length % 2 == 0){
        return `${s[Math.floor(s.length / 2 -1)]}${s[Math.floor(s.length / 2)]}`; 
    }else{
        return s[Math.floor(s.length / 2  )];
    }
}
console.log(getMiddle("test"));
console.log(getMiddle("testing"));


//You're a square!
function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
}
console.log(isSquare(-1));

//String cleaning
function stringClean(s){
    return s.replace(/\d/g, "");
}

//Calculate BMI
function bmi(weight, height) {
    let bmi = weight / (height*height)
    if(bmi <= 18.5){
        return "Underweight";
    }else if(bmi <= 25 ) {
        return "Normal";
    }else if(bmi <= 30){
        return "Overweight";
    }else if(bmi > 30){
        return "Obese";
    }
  }