let navbar = document.querySelector("#nav");
let navBtn = document.querySelector("#nav-btn");
let closeBtn = document.querySelector("#close-btn");
let sidebar = document.querySelector("#sidebar");
let date = document.querySelector("#date");

//add fixed class to navbar+


window.addEventListener("scroll", function(){
    if (window.scrollY > 80){
        navbar.classList.add("navbar-fixed");
    }else{
        console.log('hi')
        navbar.classList.remove("navbar-fixed")
    }
});

//show sidebar

navBtn.addEventListener("click", function(){
    sidebar.classList.add("show-sidebar");
});

//close sidebar

closeBtn.addEventListener("click", function(){
    sidebar.classList.remove("show-sidebar");
});

//set year
date.innerHTML = new Date().getFullYear();