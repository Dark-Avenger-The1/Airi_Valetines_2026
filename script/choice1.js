import { choice,pickChoice } from "./storedChoice.js";

let link = document.querySelector('a');
let pick;
document.querySelectorAll('li').forEach((list)=>{
    list.addEventListener('click',()=>{
        pick=list.dataset.choice;
        pickChoice(pick,0);
        alert(`You have pick ${choice[0]} as the first thing we will do`)
        console.log(choice[0]);
    });
});

link.addEventListener('click',()=>{
    if(!pick){
        alert('Please pick a choice.')
    }else{
        link.href='eventPick2.html';
    }
});