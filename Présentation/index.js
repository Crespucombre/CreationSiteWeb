function revealPassion() {
    const button = document.getElementById("secretBtn")
    const passionSecret = document.getElementById("secret")


    button.addEventListener("click", function () {
        if (passionSecret.style.display == "block") {
            passionSecret.style.display = "none"
        } else {
            passionSecret.style.display = "block"
        }
    })
}

revealPassion()