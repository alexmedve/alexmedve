function nav() {
    const button = document.querySelector("#mobileMenu");

    let opened = false;

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

    button.addEventListener('click', throttle(() => {
        console.log(opened);
    }, 700));
}

window.onload = nav;