let button = document.querySelector("button");
button.addEventListener("mousedown",evnt => {
    if (event.button == 0) {
        console.log(false);
    }else if (event.button == 1) {
        console.log(true);
    }
});