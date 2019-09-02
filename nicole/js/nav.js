function nav() {

    const hamburger = document.querySelector(".menu");
    // const hamburgerLines = document.querySelectorAll(".menu line");
    const navOpen = document.querySelector(".nav-open");
    const work = document.querySelector(".work-link");
    const personal = document.querySelector(".personal-link");
    const about = document.querySelector(".about-link");
    // const logo = document.querySelector(".logo");

    let opened = false;

    function openMenu() {
        //remove close animation classes
        navOpen.classList.remove('nav-open-anim-reverse');
        work.classList.remove('nav-link-anim-reverse');
        about.classList.remove('nav-link-anim-reverse');
        personal.classList.remove('nav-link-anim-reverse');
        //add open animation classes
        navOpen.classList.add('nav-open-anim');
        work.classList.add('nav-link-anim');
        personal.classList.add('nav-link-anim');
        about.classList.add('nav-link-anim');

        opened = true;
    }

    function closeMenu() {
        //remove open animation classes
        navOpen.classList.remove('nav-open-anim');
        work.classList.remove('nav-link-anim');
        about.classList.remove('nav-link-anim');
        personal.classList.remove('nav-link-anim');
        //add close animation classes
        navOpen.classList.add('nav-open-anim-reverse');
        work.classList.add('nav-link-anim-reverse');
        personal.classList.add('nav-link-anim-reverse');
        about.classList.add('nav-link-anim-reverse');
        opened = false;
    }

    const throttle = (func, limit) => {
        let inThrottle
        return function () {
            const args = arguments
            const context = this
            if (!inThrottle) {
                func.apply(context, args)
                inThrottle = true
                setTimeout(() => inThrottle = false, limit)
            }
        }
    }

    hamburger.addEventListener('click', throttle(() => {
        if (opened === false) {
            openMenu();
        } else {
            closeMenu();
        }
    }, 700));
}

window.onload = nav;