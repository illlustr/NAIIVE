let prevState = window.scrollY;
window.onscroll = function () {
    let currentState = window.scrollY;
    if (prevState > currentState) {
        document.querySelector(".overlay").
            style.scale = "1";
    } else {
        document.querySelector(".overlay").
            style.scale = "2";
    }
    prevState = currentState;
}