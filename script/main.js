$(document).ready(function() {
    $(".menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
    });
    
    var userFeed = new Instafeed({
        get: 'user',
        userId: '8727053738',
        limit: 6,
        resolution: 'standard_resolution',
        accessToken: '8727053738.1677ed0.ee3abfd56f304140bfcaa8670bf5ed4a',
        sortBy: 'most-recent',
        template: '<div class="instaimg"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"></a></div>'
    });
    userFeed.run();
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

