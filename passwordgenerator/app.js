const upperSet='ABCDEFGHIJKLMNOPQRST';
const lowerSet='abcdefghijklmnopqrst';
const numberSet='1234567890';
const  symbolSet='!@#$^&*?/(){}~';

const getRandomData=(dataSet)=>{
return dataSet[Math.floor(Math.random()*dataSet.length)];
}

//selectors
const totalChar=document.getElementById('total-char');
const upperInput=document.getElementById('upper-case');
const lowerInput=document.getElementById('lower-case');
const numberInput=document.getElementById('numbers');
const symbolInput=document.getElementById('symbols');
const passwordBox=document.getElementById('pass-box');

const generatePassword=(password='')=>{
    if(upperInput.checked){
        password+=getRandomData(upperSet);
    }
     if(lowerInput.checked){
        password+=getRandomData(lowerSet);
    }
    if(numberInput.checked){
        password+=getRandomData(numberSet);
    }
    if(symbolInput.checked){
        password+=getRandomData(symbolSet);
    }
    if (password.length < totalChar.value){
      return  generatePassword(password);
    }

   passwordBox.innerText=truncateString(password,totalChar.value);
}

document.getElementById('btn').addEventListener(
    'click',function( ){
        generatePassword();
    }
)

function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}