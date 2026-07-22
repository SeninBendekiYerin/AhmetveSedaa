// Şifre

function checkPassword(){

const password=document.getElementById("password").value;

if(password==="26.02.2026"){

document.getElementById("login").style.display="none";
document.getElementById("main").style.display="block";

const music=document.getElementById("music");

// 1. saniyeden başlat
music.currentTime=1;

music.play().catch(()=>{});

window.scrollTo({
top:0,
behavior:"smooth"
});

}
else{

alert("Şifre yanlış ❤️");

}

}

// Yazıları yavaş göster

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{
opacity:0,
transform:"translateY(60px)"
},

{
opacity:1,
transform:"translateY(0)"
}

],{

duration:1400,
fill:"forwards"

});

}

});

},{
threshold:.35
});

document.querySelectorAll(".photo,.text,#letter,#finish").forEach(el=>{

el.style.opacity="0";

observer.observe(el);

});

// Fotoğraflara hafif yakınlaşma

document.querySelectorAll(".photo img").forEach(img=>{

img.animate([

{
transform:"scale(1)"
},

{
transform:"scale(1.06)"
}

],{

duration:9000,
iterations:Infinity,
direction:"alternate"

});

});

// Kalp oluştur

function heart(x,y){

const h=document.createElement("div");

h.innerHTML="🩷";

h.style.position="fixed";

h.style.left=x+"px";

h.style.top=y+"px";

h.style.fontSize="24px";

h.style.pointerEvents="none";

h.style.zIndex="9999";

document.body.appendChild(h);

h.animate([

{
transform:"translateY(0)",
opacity:1
},

{
transform:"translateY(-120px)",
opacity:0
}

],{

duration:1800

});

setTimeout(()=>{

h.remove();

},1800);

}

// Dokununca kalp

document.addEventListener("click",(e)=>{

heart(e.clientX,e.clientY);

});

// Final butonu

const finishButton=document.querySelector("#finish button");

finishButton.addEventListener("click",()=>{

alert("🩷 Umarım bu hikâyenin devamını birlikte yazarsınız.");

});