const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
});

function loaderanimation(){
    var tl = gsap.timeline()

tl.to("#yellow1",{
    top:"-100%",
    delay:0.2,
    duration:0.5,
    ease:"expo.out"
})
tl.from("#yellow2",{
    top:"100%",
    delay:0.8,
    duration:0.3,
    ease:"expo.out"
},"anim")
tl.to("#loader h1",{
    dealy:0.6,
    duration:0.7,
    color:"black"
},"anim")
tl.to("#loader",{
    opacity:0
})
tl.to("#loader",{
   
    display:"none"
})
}

function page2animation(){
    var page2 = document.querySelector("#page2");
var elems = document.querySelectorAll(".elem")

elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var bgimg = e.getAttribute("data-img")
        page2.style.backgroundImage = `url(${bgimg})`    
    })
})
}

loaderanimation();
page2animation();