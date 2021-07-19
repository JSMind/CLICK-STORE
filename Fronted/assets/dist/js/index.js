class Categoria{                            //Definimos nuestra clase Categoria
    
    constructor(datos){                     //Definimos el constructor
        this.datos = datos;
    };
    mostrarCategoria(){                      //Metodo que imprimira el DOM de index.html 
        let lista = document.querySelector(".dropdown-menu");
        let fragment = document.createDocumentFragment();
        let tempCategoria = document.querySelector("#categorias").content;
        this.datos.forEach(element => {
            tempCategoria.querySelector("a").dataset.id = element.id;
            tempCategoria.querySelector(".dropdown-item").textContent = element.name;
            const clon = tempCategoria.cloneNode(true);
            fragment.appendChild(clon);
            
        });
        lista.appendChild(fragment);
    };

    static obtenerCategorias(url){          //Metodo que consumira de nuestra API propia las categorias
        let Data
        fetch(url)                                   
            .then(response => response.json())       
            .then(formatobjeto => {
                Data = new Categoria(formatobjeto)   
                console.log(Data)
                Data.mostrarCategoria()               
            })
            .catch(error =>{
                console.log(error)                   
            })

    }  
    
}

document.addEventListener("DOMContentLoaded", e => 
Categoria.obtenerCategorias('http://localhost:3000/'));            //Aqui se inicializa el codigo

const botonCategoria = document.querySelector(".navbar-collapse")  //Evento que detecta la seleccion de la categoria del usuario
botonCategoria.addEventListener("click", e => {
    if (e.target.classList.contains("btn-categoria")){
        const idcategoria= e.target.dataset.id
        localStorage.setItem('idcategoria', idcategoria)
    }  
})


