let btnWA = document.getElementById("wa_admin")
let basa = document.getElementById("basa")

btnWA.addEventListener("click", function() {
    window.location.href = "https://api.whatsapp.com/send?phone=+6282258704873"
})

let xhr = new XMLHttpRequest();
xhr.open("GET", "text.txt", true)
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        basa.innerText = xhr.responseText
    }
}
xhr.send()