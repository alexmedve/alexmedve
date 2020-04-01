function nav() {
    const buttonOpen = document.querySelector(".navbar__container__menu");
    const buttonClose = document.querySelector(".navbar__mobile__top__button");
    const navOpen = document.querySelector(".navbar__mobile");

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

    function openMenu() {
        navOpen.classList.remove('nav-open-anim-reverse');
        navOpen.classList.add('nav-open-anim');
    }

    function closeMenu() {
        navOpen.classList.remove('nav-open-anim');
        navOpen.classList.add('nav-open-anim-reverse');
    }

    buttonOpen.addEventListener('click', throttle(() => {
        openMenu();
    }, 700));

    buttonClose.addEventListener('click', throttle(() => {
        closeMenu();
    }, 700));
}

window.onload = nav;