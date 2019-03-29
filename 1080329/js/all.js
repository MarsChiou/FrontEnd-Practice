// Banner change
var banner = document.getElementById("banner");
var bc = banner.children;
var b = 0;

setInterval(br,3000);

function br(){
    bc[b].classList.remove("active");
    if(b<bc.length - 1){
        b++;
        bc[b].classList.add("active");
    }
    else{
        b = 0;
        bc[b].classList.add("active");
    }
}

var bs = document.querySelectorAll("#banner_spot > div");
var active = document.getElementsByClassName("active")[0];
for(let i = 0;i<bs.length;i++){
    bs[i].addEventListener("click",function(){
        var bn = this.getAttribute("data-n");
        var active = document.getElementsByClassName("active")[0];
        active.classList.remove("active");
        bc[bn].classList.add("active");
        b = bn;
        
    })
}

function fade(e){
    e.style.transitionDuration = "3s"
    e.style.opacity = "0"
}

window.addEventListener("load",function(){
    let ldimg = document.getElementById("loading");
    fade(ldimg);
    ldimg.remove();
})

//nav fixed color
$(window).scroll(function(){
    var nav_p = $(nav).height();
    var scroll = $(window).scrollTop();
    if(scroll > nav_p){
        $(".fixed-top").css("background-color","#62d2a2");
        $(".navbar-brand").css("color","#fff");
        $(".gotop").css("display","flex")
        
     }
    if(scroll < nav_p){
      $(".fixed-top").css('background-color','rgba(255,255,255,0.8)');
      $(".navbar-brand").css("color","rgba(0,0,0,.9)");
      $(".gotop").css("display","none")
    }
})



$(".gotop").click(function(){
    $("html,body").animate({
        scrollTop: 0}, 400, "swing");
})