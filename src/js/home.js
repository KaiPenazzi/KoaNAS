var input = document.getElementById('path')
var list = document.getElementById('files')
var filePicker = document.getElementById('filePicker')

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

filePicker.addEventListener('change', () => {
    var FR = new FileReader()

    FR.addEventListener('loadend', () => {
        var file = FR.result

        var sendData = {
            name: filePicker.files[0].name,
            path: input.textContent,
            data: file
        }

        var xhr = new XMLHttpRequest()
        xhr.open('POST', '/data')
        xhr.send(JSON.stringify(sendData))

        document.location.reload(true)
    })

    FR.readAsBinaryString(filePicker.files[0])
})