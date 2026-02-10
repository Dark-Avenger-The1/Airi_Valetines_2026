import { choice,pickChoice } from "./storedChoice.js";

let link = document.querySelector('a');
let header = document.querySelector('h1');
let pick;
loadHeader();
function loadHeader(){
    header.innerText=`What should we do after ${choice[0]}?`;
}
document.querySelectorAll('li').forEach((list)=>{
    list.addEventListener('click',()=>{
        pick=list.dataset.choice;
        pickChoice(pick,1);
        alert(`You have pick ${choice[1]} as the first thing we will do`)
        console.log(choice[1]);
    });
});

link.addEventListener('click',()=>{
    if(!pick){
        alert('Please pick a choice.')
    }else{
        link.href='eventPick3.html';
    }
});