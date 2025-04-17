function clickButton() {
    const bouton = document.getElementById("bouton");
    const input = document.getElementById("input");

    bouton.addEventListener("click", function () {
        alert("Tu as tapé : " + input.value);
    });
}

clickButton()