var menu = document.querySelector("#menu");
var bg = document.querySelector("#landing");

menu.addEventListener('click',function(){
    bg.style.transform = 'scale(.8)';
    bg.style.borderRadious = '10px';
    bg.style.boxShadow = '0 150px 45px -100px rgba(0,0,0,0.2)' 
})
var tl = gsap.timeline();

tl.from(".naviteam",{
    stagger: .3,
    duration: 2,
    delay:5,
    x: -20,
    ease: 'Expo.easeInOut',
    opacity: 0
})
.from(".leftiteam",{
    stagger: .3,
    duration: 2,
    y: 20,
    ease: 'Expo.easeInOut',
    opacity: 0
}, '-=2')
.from(".rightside",{
    stagger:.3,
    duration:2,
    x:-30,
    ease:'Expo.easeInOut',
    opacity:0
},'-=2')
.from(".img",{
    duration: 3.5,
    scale: 1.2,
    ease:'Expo.easeInOut',
    opacity: 0
},'-=2')