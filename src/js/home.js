var input = document.getElementById('path')
var list = document.getElementById('files')

window.addEventListener("DOMContentLoaded", () => {

    var xhr = new XMLHttpRequest()
    xhr.open('GET', '/data')
    xhr.setRequestHeader("path", input.textContent)
    xhr.send()

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText)
            addListItems(data)
        }
    }

})

function addListItems(items) {
    items.forEach(element => {
        var li = document.createElement('li')
        li.setAttribute("class", "list-group-item")
        li.appendChild(document.createTextNode(element))
        list.appendChild(li)
    });
}