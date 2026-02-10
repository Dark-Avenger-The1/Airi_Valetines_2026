export let choice =JSON.parse(localStorage.getItem('choice'));

if(!choice){
   choice= ['Arcade','Food Date','Gift'];
   saveToLocal();
}

function saveToLocal(){
    localStorage.setItem('choice',JSON.stringify(choice));
}
export function pickChoice(pick,index){
    choice[index]=pick;
    saveToLocal();
}