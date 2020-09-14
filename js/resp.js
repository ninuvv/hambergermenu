burger=document.querySelector(".burger")
nav=document.querySelector(".nav")
nav_list=document.querySelector(".nav_list")
nav_right=document.querySelector(".nav_right")


burger.addEventListener('click',()=>{
    nav_right.classList.toggle('v_cls');
    nav.classList.toggle('h_nav') ;
    nav_list.classList.toggle('v_cls') ;
})

