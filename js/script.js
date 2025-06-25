

$(function() {
    $('html,body').animate({ scrollTop: 0 }, '0');
});

let day_night = "day";
let time = setInterval(changeBack ,20000);

window.addEventListener("scroll", moveSunMoon);

function changeBack(){
    let body = document.body;
    let title = document.getElementsByClassName("title");
    let detail = document.getElementsByClassName("detail");
    let label = document.getElementsByClassName("label");
    if(day_night == 'day'){
        body.style.backgroundColor = 'rgb(12, 0, 68)';
        document.getElementById('sun_img').style.opacity = 0;
        document.getElementById('moon_img').style.opacity = 1;
        for(let i = 0; i < title.length; i++){
            title[i].style.color = "rgb(201, 200, 211)";
        }
        for(let i = 0; i < detail.length; i++){
            detail[i].style.color = "rgb(201, 200, 211)";
        }
        for(let i = 0; i < label.length; i++){
            label[i].style.color = "rgb(201, 200, 211)";
        }
        day_night = "night";
    }else{
        body.style.backgroundColor = '#71DDFF';
        document.getElementById('sun_img').style.opacity = 1;
        document.getElementById('moon_img').style.opacity = 0;
        for(let i = 0; i < title.length; i++){
            title[i].style.color = "rgb(70, 45, 29)";
        }
        for(let i = 0; i < detail.length; i++){
            detail[i].style.color = "rgb(70, 45, 29)";
        }
        for(let i = 0; i < label.length; i++){
            label[i].style.color = "rgb(70, 45, 29)";
        }
        day_night = 'day';
    }
}

function moveSunMoon(){
    let sun_moon = document.getElementById("sun_moon_flex");
    sun_moon.style.top = (350 + window.scrollY)+'px';
}

$('a[href^="#"]').click(function () {
    const speed = 400;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top - 100;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
});

$('.hamburger').on("touchstart", function () {
    $('ul').toggleClass("open");
    $('.hamburger').toggleClass("open");
});