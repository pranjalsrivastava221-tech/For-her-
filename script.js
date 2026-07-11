// Loading Screen
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 1800);
});

// Pages
const pages = document.querySelectorAll(".page");
const nextBtns = document.querySelectorAll(".nextBtn");

let currentPage = 0;

nextBtns.forEach(btn => {
    btn.addEventListener("click", () => {

        if(currentPage < pages.length-1){

            pages[currentPage].classList.remove("active");

            currentPage++;

            pages[currentPage].classList.add("active");

        }

    });
});

// Restart
const restart = document.getElementById("restartBtn");

restart.addEventListener("click",()=>{

pages[currentPage].classList.remove("active");

currentPage=0;

pages[currentPage].classList.add("active");

window.scrollTo(0,0);

});

// Music

const music=document.getElementById("bgMusic");

const musicBtn=document.getElementById("musicBtn");

let playing=false;

musicBtn.onclick=()=>{

if(!playing){

music.play();

musicBtn.innerHTML="⏸️";

playing=true;

}
else{

music.pause();

musicBtn.innerHTML="🎵";

playing=false;

}

};

// Floating Hearts

const hearts=document.getElementById("hearts");

setInterval(()=>{

const heart=document.createElement("span");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(4+Math.random()*4)+"s";

heart.style.fontSize=(18+Math.random()*18)+"px";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

},350);
/* ==========================
   TYPEWRITER EFFECT
========================== */

const finalText = `Happy Girlfriend Day ❤️

Thank you for coming into my life.

Every little memory with you became one of my favourite memories.

From our first conversation...
to our first meeting...
to every smile...
every late night chat...

Thank you for being a part of my life.

I Love You Forever ❤️`;

const message = document.getElementById("finalMessage");

if(message){

message.innerHTML="";

let index=0;

function typeWriter(){

if(index<finalText.length){

message.innerHTML+=finalText.charAt(index);

index++;

setTimeout(typeWriter,35);

}

}

setTimeout(typeWriter,700);

}

/* ==========================
   GALLERY ANIMATION
========================== */

const gallery=document.querySelectorAll(".gallery img");

gallery
