let btnAgree = document.querySelector('.btnAgree');
let btnDisagree = document.querySelector('.btnDisagree');
let toroImg = document.querySelector('img');
let sound = document.querySelector('audio');

btnAgree.addEventListener("mouseenter",()=>{
    console.log('hoverAgree');
    toroImg.src='ToroAnimation/ToroHappy.gif';
});

btnAgree.addEventListener('click',()=>{
    setTimeout(()=>{
        console.log('Done');
        let link =document.querySelector('.linkAgree');
        link.href="eventPick.html";
        link.click();
    },3000);
    toroImg.src='ToroAnimation/ToroLove.gif';
});

btnDisagree.addEventListener('mouseenter',()=>{
    console.log('hoverDisagree');
    toroImg.src='ToroAnimation/ToroCry.gif';
});

btnDisagree.addEventListener('click',()=>{
    sound.play();
    toroImg.src='ToroAnimation/ToroMad.gif';
});

document.querySelectorAll('button').forEach((btn)=>{
    btn.addEventListener('mouseleave',()=>{
        console.log('MouseLeave');
        toroImg.src='ToroAnimation/Toro.gif';
        sound.pause();
        sound.currentTime=0;
    })
});