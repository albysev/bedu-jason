const perritosArea = document.getElementById("perritos")
const perritosBreed = document.getElementById("perritosBreed")
const botonPerritos = document.getElementById("dameperritos")
const botonPerritosRaza = document.getElementById ("perritosRaza")

// 2. FUNCIONES
const extraerPerritos = () => {
    fetch("https://dog.ceo/api/breeds/image/random/3").then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
        perritosArea.innerHTML = `
        <p>Primer Perro</p>
        <img src="${data.message[0]}" />
        <p>Segundo Perro</p>
        <img src="${data.message[1]}" />
        <p>Tercer Perro</p>
        <img src="${data.message[2]}" />
    `
    })
}  
// 3. EVENTOS
botonPerritosRaza.addEventListener("click", () => {
    extraerPerritos()
})

//SEGUNDO BOTON 
// 2. FUNCIONES
const perritosRaza = () => {
    fetch("https://dog.ceo/api/breeds/image/random/3").then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
        perritosArea.innerHTML = `
        <p>Primer Perro</p>
        <img src="${data.message[9]}" />
        <p>Segundo Perro</p>
        <img src="${data.message[10]}" />
        <p>Tercer Perro</p>
        <img src="${data.message[11]}" />
    `
    })
}  
// 3. EVENTOS
botonPerritos.addEventListener("click", () => {
    perritosRaza()
})


/* PRIMER EJERCICIO CON PERROS 
fetch ("https://dog.ceo/api/breeds/image/random/3").then((response)=> {
    return response.json ()
}).then ((data) =>{
    console.log(data)
    perritosArea.innerHTML=`
        <img src="${data.message[0]}"/>
        <img src="${data.message[1]}"/>
        <img src="${data.message[2]}"/>
    `
})

// SEGUNDO EJERCICIO CON PERROS 

fetch ("https://dog.ceo/api/breed/hound/images").then((response)=> {
    return response.json ()
}).then ((data) =>{
    console.log(data)
    perritosBreed.innerHTML=`
    <img src="${data.message[0]}"/>
    <img src="${data.message[1]}"/>
    <img src="${data.message[2]}"/>
    <img src="${data.message[3]}"/>
    <img src="${data.message[4]}"/>
    <img src="${data.message[5]}"/>
    `
})*/