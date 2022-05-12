let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');

menu.onclick=()=>
{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll=()=>
{
    menu.classList.remove('fa-times'); //remove the class style
    navbar.classList.remove('active'); //remove the class style
}
