$(document).ready(function() {
    $(".menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
    });
});
//scroll efect
$(window).on("scroll", function() {
    if($(window).scrollTop()) {
        $("nav").addClass('black');
    }
    else {
        $("nav").removeClass('black');
    }
});

const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.6;

//set first image opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
    //reset the opacity
    imgs.forEach(img => img.style.opacity = 1)
    //change current image to src of clicked image
    current.src = e.target.src;
    //add fade in class
    current.classList.add('fade-in');
    //remove fade in class 
    setTimeout(() => current.classList.remove('fade-in'), 500);
    //change the opacity to opacity var
    e.target.style.opacity = opacity;
}

