const pagina = document.getElementById("tabela")
const ip = document.getElementById("ip")

function pesquisar(){
    const url = `https://ipinfo.io/${ip.value}/json?`

    return fetch(url)
        .then(
        (response) => response.json()
        )
        .then(
        ( function (jsonResponse){
            console.log(jsonResponse)
            pagina.innerHTML += ` 
            <tr>
                <td>${jsonResponse.ip}</td>
                <td>${jsonResponse.org}</td>
                <td>${jsonResponse.country}</td>
                <td>${jsonResponse.city}</td>
                <td class=close id=close> X </td>
            </tr> 
            `  
        }))    
 }