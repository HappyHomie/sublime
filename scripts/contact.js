document.addEventListener('DOMContentLoaded', function(){
    let dropdown = document.querySelectorAll('.nav_submenu');
    let nav_category = document.querySelectorAll('.navigation__category')
    
    dropdown.forEach((e,index) => {
        console.log(e, index)
    });
    nav_category[1].style.transition = 'all 1s';
    dropdown.addEventListener('mouseover', function(){
        nav_category[1].style.opacity = '1';
        nav_category[1].style.top = 'calc(100% + 1px)';

        dropdown.addEventListener('mouseout', function(){
            /* nav_category[1].style.transition = 'all 1s'; */
            nav_category[1].style.opacity = '0';
            nav_category[1].style.top = 'calc(100% + 20px)';
        })
    })


});
/* dropdown.addEventListener('mouseout' function(event){
nav_category[1].removeAttribute('style');
}) */