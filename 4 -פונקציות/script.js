console.log('*******ex1+2+4************');


const plus = (num1,num2) => {
    const resolt = num1 + num2;
    console.log(resolt);
    

}

const get2num = (get1 ,get2)=>{
 get1 = +prompt('הכנס מספר 1')
get2 = +prompt('הכנס מספר 2')
plus(get1,get2)
}


console.log('*******ex3************');


const go = () => {
  const scr1 = +prompt('enter number 1:');
  const scr2 = +prompt('enter number 2:');
  return scr1 + scr2;

}
const go2 = () => {
    const resolt = go();
    console.log(resolt);
}
// go2()

console.log('*******ex5************');

const multi = () => {
    let num1 =+prompt('enter number 1:')
    let num2 =+prompt('enter number 2:')
    console.log('an:'+ num1*num2);
    
}

console.log('*******ex6************');

const multi3 = (num1, num2) => {
    
    console.log('an:' + num1 * num2);
    
}
multi3(2,8)

console.log('*******ex7************');

const go5 = () => {
    const scr1 = +prompt('enter number 1:');
    const scr2 = +prompt('enter number 2:');
    return scr1 * scr2;
  
  }
  const go6 = () => {
      const resolt = go();
      console.log(resolt);
  }

  console.log('*******ex8************');

  function multiplyAndReturn(num1, num2) {
    return num1 * num2; // מחזירים את תוצאת המכפלה של שני המספרים
}
const product = multiplyAndReturn(8, 12); // שומרים את התוצאה במשתנה
console.log("The product is:", product);