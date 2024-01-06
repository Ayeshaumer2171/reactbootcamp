const endDate='1 august 2023 2:00 AM';

document.getElementById('end-date').innerText=endDate;

const inputs=document.querySelectorAll('input');

function clock(){
const end=new Date(endDate);
const now=new Date();
const difference=(end-now)/1000;

if(difference>0) return;

//convert into days
inputs[0].value=Math.floor(difference/3600/24);
//convert into hours
inputs[1].value=Math.floor(difference/3600)%24;
//convert into minutes
inputs[2].value=Math.floor(difference/60)%60;
//convert into seconds
inputs[3].value=Math.floor(difference)%60;
}

//initial call
clock();

setInterval(
    ()=>{
        clock()
    },
    1000
)

//1 day=24 hrs
//1 hr= 60 mins
//1 min=3600 s

