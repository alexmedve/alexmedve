function init() {
    const hero = document.querySelector('.hero .inner .heading h1');
    const about = document.querySelector('.hero .inner .heading a h3');
    const work = document.querySelector('.work .inner .heading h2');
    const personal = document.querySelector('.personal .inner .heading h2');
    setTimeout(() => {
        hero.classList.add('heading-anim');
        about.classList.add('heading-anim');
    }, 600);
    setTimeout(() => {
        work.classList.add('heading-anim');
    }, 900);
    setTimeout(() => {
        personal.classList.add('heading-anim');
    }, 1200);
}

window.onload = init;