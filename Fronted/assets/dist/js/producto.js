class Producto{                                     //Definimos nuestra clase Producto

    
    constructor(formatobjeto){                      //Definimos el constructor
        this.data=formatobjeto  
    }
      

    mostrarProductos() {                            //Metodo que imprimira el DOM de producto.html 
        const items = document.getElementById('items')
        const templateCard = document.getElementById('template-card').content
        const fragment = document.createDocumentFragment()
        
        let i = 0;
        this.data.results.forEach(item => {  
            // console.log(this.data.results[i])        
            templateCard.querySelector('h5').textContent = item.title
            templateCard.querySelector('p').textContent = "PRECIO : $"+ item.price
            templateCard.querySelector('img').setAttribute("src", item.thumbnail)
            // templateCard.querySelector('button').dataset.id = item.id
            templateCard.querySelector('button').dataset.id = i
            const clone = templateCard.cloneNode(true)
            fragment.appendChild(clone)
            i++;
        })
        items.appendChild(fragment)
    }
    
    productoseleccionado(producto){
        console.log(this.data.results[producto])       
    }
}



function obtenerProductos(url){                       //Metodo que consumira de nuestra API propia los productos relacionada a la subcategoria que selecciono el usuario
    let Data
    fetch(url)                                   
        .then(response => response.json())       
        .then(formatobjeto => {
            Data = new Producto(formatobjeto)   
            console.log(Data)
            Data.mostrarProductos()               
        })
        .catch(error =>{
            console.log(error)                   
        })

    const botonProducto = document.querySelector(".container")
    botonProducto.addEventListener("click", e => {
        if (e.target.classList.contains("btn-producto")){
            const producto = e.target.dataset.id
            console.log(producto)
            Data.productoseleccionado(producto)
        }  
    })
 
        
}  




const idsubcategoria =localStorage.getItem('idsubcategoria');

obtenerProductos("http://localhost:3000/subcategoria="+idsubcategoria); //Aqui se inicializa el codigo







