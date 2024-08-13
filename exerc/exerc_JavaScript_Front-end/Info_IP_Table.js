const pagina = document.getElementById("tabela")
const ip = document.getElementById("ip")

function pesquisar(){
    const url = `https://ipinfo.io/${ip.value}/json?`

    return fetch(url)
        .then((response) => response.json())
        .then(jsonResponse => {
            console.log(jsonResponse)
            
            const row = document.createElement('tr');

            row.innerHTML = ` 
                <td>${jsonResponse.ip}</td>
                <td>${jsonResponse.org}</td>
                <td>${jsonResponse.country}</td>
                <td>${jsonResponse.city}</td>
                <td><button onclick="limpar(this)">X</button></td>
            `;
            pagina.appendChild(row);
            ip.value = ''
        })
 }
 function limpar(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}