document.addEventListener('DOMContentLoaded', function () {

    // Sorter drop-down
    let dropdown3 = document.querySelector('.sorter');
    let nav_category3 = document.querySelector('.sorting__list');

    nav_category3.style.transition = 'all 0.3s';
    dropdown3.addEventListener('mouseover', function () {
        nav_category3.style.opacity = '1';
        nav_category3.style.top = 'calc(100% + -10px)';
        nav_category3.style.visibility = 'visible';

        dropdown3.addEventListener('mouseout', function () {
            fadeOut3(nav_category3)
        })
    })

    // Showing 12 results
    let amount = 12 ;

    document.querySelector(".counter").textContent = `Showing ${amount} results` ;

});

function fadeOut3(nc) {
    nc.style.opacity = '0';
    nc.style.top = 'calc(100% + 20px)';
    nc.style.visibility = 'hidden';
}

