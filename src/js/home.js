var input = document.getElementById("path")

window.addEventListener("DOMContentLoaded", () => {

    var xhr = new XMLHttpRequest()
    xhr.open('GET', '/data/' + input.textContent)

})