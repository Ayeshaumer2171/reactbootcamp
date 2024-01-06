const getColor=()=>{
const randomNumber=Math.floor(Math.random()*1677215);
const randomCode='#'+randomNumber.toString(16);
document.getElementById('color-code').innerText=randomCode;
document.body.style.backgroundColor=randomCode;

navigator.clipboard.writeText(randomCode);
}

document.getElementById('btn').addEventListener(
    'click',function( ){
        getColor();
    }
)

getColor();