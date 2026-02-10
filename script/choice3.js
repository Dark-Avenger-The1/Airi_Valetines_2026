import { choice,pickChoice } from "./storedChoice.js";

let link = document.querySelector('a');
let pick;
document.querySelectorAll('li').forEach((list)=>{
    list.addEventListener('click',()=>{
        pick=list.dataset.choice;
        pickChoice(pick,2);
        alert(`You have pick ${choice[2]} as the first thing we will do`);
    });
});

link.addEventListener('click',()=>{
    if(!pick){
        alert('Please pick a choice.')
    }else{
        link.href='dateDecided.html';
    }
});