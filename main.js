document.addEventListener("keydown", (event) => {
    document.querySelector("h2").innerHTML = event.keyCode;
    document.querySelector("h3").innerHTML = event.key;
})

