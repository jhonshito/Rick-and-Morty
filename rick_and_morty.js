

// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//     .then(datos => datos.json())
//     .then(res => console.log(res.forms[0].name))



document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

const fetchData = async () => {
    // console.log('siiiiuuu')

    try {
        loadingData(true)

        const res = await fetch('https://rickandmortyapi.com/api/character')
        const data = await res.json()
        pintarCard(data)
    } catch (error) {
        console.log(error)
    }finally {
        loadingData(false)
    }
}

const pintarCard = data => {

    // llamamos los componetes necesarios para realizar el proceso de pintar el sitio web
    const cartas = document.getElementById('card-dinamicas')
    const template = document.getElementById('template-card').content
    const fragment = document.createDocumentFragment()

    data.results.forEach(e => {   
        // console.log(e)

        // clonamos el template y llamamos las etiquetas que necesitamos
        let clone = template.cloneNode(true)
        clone.querySelector('h5').textContent = e.name
        clone.querySelector('p').textContent = e.species
        clone.querySelector('img').setAttribute('src', e.image)

        // guardamos en el fragment para evitar el reflow
        fragment.appendChild(clone);
    });

    // lo pintamos en la sitio web
    cartas.appendChild(fragment);
}

// agregando el loading
const loadingData = (estado) => {
    const loading = document.getElementById('loading')
    if(estado){
        loading.classList.remove('d-none')
    }else{
        loading.classList.add('d-none')
    }
}