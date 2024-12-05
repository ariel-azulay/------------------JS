// // ex-1

// var ariel = 0;
// let israel = 0;
// const vital = 0;

// // ex-2

// var ariel = 10 +"10"; //ניתן להכריז על אותו משתמש שוב למרות שכבר הגדרנו משתנה דומה

// // var ariel =(
// //     {10:10}
// // ) // לא קיימת אפשרות לשים בבלוק קוד 
// console.log(ariel);

// israel= 10+ "10"

// console.log(israel);

// vital =10 // תיוצר תקלה בגלל זהמשתנה לא ניתן לשינוי


// ex-3

const ariel1 = function ariel() {
    alert("hi my name is ariel")
}//משתנה מסוג פונקציה

const isObject = {
    typeCar : 10 ,
}//משתנה מסוג אובג'קט

const array = ["ariel","israel","vital","eliahu"]//משתנה מסוג אובייקט

let areYouLie = true;// משתנה בוליאני //פרימיטיבי

let isNumber = 10 //משתנה מסוג מספר//פרימיטיבי

let isString = "הי שמי אריאל ואני מקליד תווים"//משתנה מסוג סטרינג//פרימיטיבי

// ex-4

let variable ="10"
console.log(variable);

variable=Number(variable)//המרת משתנה סטרינג ל מספר
console.log(variable);

variable=Boolean(variable)//המרת משתנה סטרינג לבוליאני
console.log(variable);

// ex-5 

// let new1 = 10.5;
// let new2 = 10.5;


// console.log(parseInt(num1));

// דוגמא מהצאט

// שימוש ב-parseInt
let intNumber = parseInt("123.456");
console.log(intNumber); // 123 - מתעלם מחלק השבר

// שימוש ב-parseFloat
let floatNumber = parseFloat("123.456");
console.log(floatNumber); // 123.456 - כולל את חלק השבר

// דוגמא נוספת שמראה שימוש עם ערכים אחרים
let stringWithLetters = "123abc";
console.log(parseInt(stringWithLetters)); // 123 - מתעלם מהאותיות אחרי המספר
console.log(parseFloat(stringWithLetters)); // 123 - גם כאן מתעלם מהאותיות

// דוגמא למקרה שבו parseInt יעגל למספר שלם ו-parseFloat ישמור את הדיוק
let anotherString = "0.567";
console.log(parseInt(anotherString)); // 0
console.log(parseFloat(anotherString)); // 0.567




