import peliculas from './peliculas.js'

// GÉNERO 53
//capturo el elemento donde vamos a imprimir las peliculas que coinciden
const genero53 = document.getElementById("genero-53")

//hago el array con las coincidencias del género seleccionado
const peliculas53 = peliculas.filter(element => element.genre_ids.includes(53))

// uso forEach para hacer una repetición del proceso por cada coincidencia
peliculas53.forEach(element => {
    const peliculaDiv = document.createElement("div") //creo un DIV
    peliculaDiv.classList.add("peliculas") //le doy una clase en el DIV para trabajar luego el CSS
    const urlPelicula = "https://image.tmdb.org/t/p/w500" + element.poster_path //concateno la ruta de la portada porque no la tengo en los objetos
    
    //agrego el título y la foto al DIV que acabo de crear
    peliculaDiv.innerHTML = `

        <img src="${urlPelicula}" class="imagenPelicula">
        <h5>${element.original_title}</h5>

        `

    //meto el DIV recién creado al elemento capturado anteriormente
    genero53.appendChild(peliculaDiv)
} )

// GÉNERO 28
//capturo el elemento donde vamos a imprimir las peliculas que coinciden
const genero28 = document.getElementById("genero-28")

//hago el array con las coincidencias del género seleccionado
const peliculas28 = peliculas.filter(element => element.genre_ids.includes(28))

// uso forEach para hacer una repetición del proceso por cada coincidencia
peliculas28.forEach(element => {
    const peliculaDiv = document.createElement("div") //creo un DIV
    peliculaDiv.classList.add("peliculas") //le doy una clase en el DIV para trabajar luego el CSS
    const urlPelicula = "https://image.tmdb.org/t/p/w500" + element.poster_path //concateno la ruta de la portada porque no la tengo en los objetos
    
    //agrego el título y la foto al DIV que acabo de crear
    peliculaDiv.innerHTML = `

        <img src="${urlPelicula}" class="imagenPelicula">
        <h5>${element.original_title}</h5>

        `

    //meto el DIV recién creado al elemento capturado anteriormente
    genero28.appendChild(peliculaDiv)
} )

// GÉNERO 12
//capturo el elemento donde vamos a imprimir las peliculas que coinciden
const genero12 = document.getElementById("genero-12")

//hago el array con las coincidencias del género seleccionado
const peliculas12 = peliculas.filter(element => element.genre_ids.includes(12))

// uso forEach para hacer una repetición del proceso por cada coincidencia
peliculas12.forEach(element => {
    const peliculaDiv = document.createElement("div") //creo un DIV
    peliculaDiv.classList.add("peliculas") //le doy una clase en el DIV para trabajar luego el CSS
    const urlPelicula = "https://image.tmdb.org/t/p/w500" + element.poster_path //concateno la ruta de la portada porque no la tengo en los objetos
    
    //agrego el título y la foto al DIV que acabo de crear
    peliculaDiv.innerHTML = `

        <img src="${urlPelicula}" class="imagenPelicula">
        <h5>${element.original_title}</h5>

        `

    //meto el DIV recién creado al elemento capturado anteriormente
    genero12.appendChild(peliculaDiv)
} )