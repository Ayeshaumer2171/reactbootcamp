const item=document.querySelector('#item')
const toDo=document.querySelector('#to-do-box')

item.addEventListener(
    'keyup',function(event){
if(event.key=='Enter'){
    addTODo(this.value);
    this.value='';
}
    }
)

const addTODo=(item)=>{
const listItem=document.createElement('li');
listItem.innerHTML=`
${item}
<i class="fas fa-times"></i>
`
toDo.appendChild(listItem);


listItem.addEventListener(
    "click",
    function() {
        this.classList.toggle("done");
    }
)


listItem.querySelector("i").addEventListener(
    "click",
    function() {
        listItem.remove()
    }
)

}
