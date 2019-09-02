function nav() {

    //menu

    const hamburger = document.querySelector(".menu");
    // const hamburgerLines = document.querySelectorAll(".menu line");
    const navOpen = document.querySelector(".nav-open");
    const work = document.querySelector(".work-link");
    const personal = document.querySelector(".personal-link");
    const about = document.querySelector(".about-link");
    // const logo = document.querySelector(".logo");

    const tl = new TimelineMax({
        paused: true,
        reversed: true
    });

    tl.to(navOpen, 0.5, {
            y: 0
        })
        .fromTo(work, 0.5, {
            opacity: 0,
            y: 10
        }, {
            opacity: 1,
            y: 0
        }, "-=0.1")
        .fromTo(personal, 0.5, {
            opacity: 0,
            y: 10
        }, {
            opacity: 1,
            y: 0
        }, "-=0.5")
        .fromTo(about, 0.5, {
            opacity: 0,
            y: 10
        }, {
            opacity: 1,
            y: 0
        }, '-=0.5');
    // .fromTo(logo, 0.2, {
    //     color: "white"
    // }, {
    //     color: "black"
    // }, "-=1")
    // .fromTo(
    //     hamburgerLines,
    //     0.2, {
    //         stroke: "white"
    //     }, {
    //         stroke: "black"
    //     },
    //     "-=1"
    // );

    hamburger.addEventListener("click", () => {
        tl.reversed() ? tl.play() : tl.reverse();
    });
}

window.onload = nav;