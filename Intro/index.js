function displayFirstName() {
    const input = document.getElementById("input")
    const bouton = document.getElementById("bouton")

    bouton.addEventListener("click", () => {
        alert(`Bonjour, ${input.value} !`);
    })
}


displayFirstName()



