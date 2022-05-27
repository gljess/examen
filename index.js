const url = 'https://swapi.dev/api/films/1/'



examen(url)
.then(response => response.json() )
.then(data => {


let element = document.getElementById("title")
element.innerHTML = "<p>${data.name}</p>"
    console.log(data)
})
.catch(err=>console.log(err))