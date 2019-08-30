function init() {
    new hoverEffect({
        parent: document.querySelector('section.work'),
        intensity: 0.2,
        image1: '../assets/model.jpg',
        image2: '../assets/runway.jpg',
        displacementImage: '../assets/stripe1.png'
    })
}

init();