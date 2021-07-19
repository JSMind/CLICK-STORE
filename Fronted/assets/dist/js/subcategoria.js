class Subcategoria{                     //Definimos nuestra clase Subcategoria
      
    constructor(formatobjeto){          //Definimos el constructor
        this.data=formatobjeto 
      
    }

    mostrarSubcategorias() {            //Metodo que imprimira el DOM de subcategorias.html 
        const items = document.getElementById('items')
        const templateCard = document.getElementById('template-card').content
        const fragment = document.createDocumentFragment()
        
        this.data.children_categories.forEach(item => {
           
            templateCard.querySelector('h5').textContent = item.name
            templateCard.querySelector('img').setAttribute("src", this.data.picture)
            templateCard.querySelector('a').dataset.id = item.id
            const clone = templateCard.cloneNode(true)
            fragment.appendChild(clone)
        })
        items.appendChild(fragment)
    }
    
    static obtenerSubcategorias(url){     //Metodo que consumira de nuestra API propia las subcategorias
        let Data
        fetch(url)                                   
            .then(response => response.json())       
            .then(formatobjeto => {
                Data = new Subcategoria(formatobjeto)   
                console.log(Data)
                Data.mostrarSubcategorias()               
            })
            .catch(error =>{
                console.log(error)                   
            })

    }  
    
}


const idcategoria = localStorage.getItem('idcategoria')
Subcategoria.obtenerSubcategorias( 'http://localhost:3000/categoria='+idcategoria)  //Aqui se inicializa el codigo

const botonSubcategoria = document.querySelector(".container")                      //Evento que detecta la seleccion de la subcategoria del usuario
botonSubcategoria.addEventListener("click", e => {
    if (e.target.classList.contains("btn-subcategoria")){
        const idsubcategoria= e.target.dataset.id
        localStorage.setItem('idsubcategoria', idsubcategoria)     
    }  
})





