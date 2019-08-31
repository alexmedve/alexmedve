function init() {
    const hero = document.querySelector('.hero .inner .heading h1');
    const about = document.querySelector('.hero .inner .heading a h3');
    const work = document.querySelector('.work .inner .heading h2');
    const personal = document.querySelector('.personal .inner .heading h2');
    setTimeout(() => {
        hero.classList.add('heading-anim');
    }, 600);
    setTimeout(() => {
        work.classList.add('heading-anim');
    }, 900);
    setTimeout(() => {
        personal.classList.add('heading-anim');
    }, 1200);
    setTimeout(() => {
        about.classList.add('button-anim');
    }, 1500);

    //menu

    const hamburger = document.querySelector(".menu");
    const hamburgerLines = document.querySelectorAll(".menu line");
    const navOpen = document.querySelector(".nav-open");
    const contact = document.querySelector(".contact");
    const social = document.querySelector(".social");
    const logo = document.querySelector(".logo");

    const tl = new TimelineMax({
        paused: true,
        reversed: true
    });

    tl.to(navOpen, 0.5, {
            y: 0
        })
        .fromTo(contact, 0.5, {
            opacity: 0,
            y: 10
        }, {
            opacity: 1,
            y: 0
        }, "-=0.1")
        .fromTo(social, 0.5, {
            opacity: 0,
            y: 10
        }, {
            opacity: 1,
            y: 0
        }, "-=0.5")
        .fromTo(logo, 0.2, {
            color: "white"
        }, {
            color: "black"
        }, "-=1")
        .fromTo(
            hamburgerLines,
            0.2, {
                stroke: "white"
            }, {
                stroke: "black"
            },
            "-=1"
        );

    hamburger.addEventListener("click", () => {
        tl.reversed() ? tl.play() : tl.reverse();
    });
}

window.onload = init;