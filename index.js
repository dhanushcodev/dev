//movement animation 

const main = document.querySelector('#main');
const container = document.querySelector('.container');
const profileCricle = document.querySelector('.profile-circle');
const username = document.querySelector('.profile-description h1');
const desp = document.querySelector('.profile-description p')

main.addEventListener('mousemove',(e)=>{
    let x = (window.innerWidth /2 )- e.pageX;
    let y = (window.innerHeight /2) - e.pageY;
    container.style.transform=`rotateX(${y*0.05}deg) rotateY(${x*0.05}deg)`;
   
});

main.addEventListener('mouseenter',()=>{
    container.style.transition = 'none';
        profileCricle.style.transform = 'translateZ(100px)';
        username.style.transform = 'translateZ(150px)'
        desp.style.transform  = 'translateZ(100px)';
        console.log(profileCricle,username,desp);
});

main.addEventListener('mouseleave',()=>{
    container.style.transition = '1s';
   container.style.transform =`rotateX(0deg) rotateY(0deg)`;
   profileCricle.style.transform = 'translateZ(0px)';
   username.style.transform = 'translateZ(0px)'
   desp.style.transform  = 'translateZ(0px)';
});
