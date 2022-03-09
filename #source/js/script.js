// Burger menu script
burger_btn_show = document.querySelector(".burger__img");
burger_btn_hide = document.querySelector(".burger__close");
burger_menu     = document.querySelector(".burger__menu");

burger_btn_show.addEventListener("click", function(){
    burger_menu.style.top = 0;
    burger_btn_show.style.display = 'none';
})
burger_btn_hide.addEventListener("click", function(){
    burger_menu.style.top = '-500px';
    burger_btn_show.style.display = 'block';
})
