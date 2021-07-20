
class Carrito{                     //Definimos nuestra clase Carrito
      
    constructor(carrito){          //Definimos el constructor
        this.data=carrito 
      
    }

    mostrarpedido() {               //Metodo que imprimira el DOM de Carrito.html
        const items = document.getElementById('items')
        const templateCard = document.getElementById('template-card').content
        const fragment = document.createDocumentFragment()
        
        this.data.forEach(item => {
           
            templateCard.querySelector('h5').textContent = item.name
            templateCard.querySelector('h5').dataset.id = item.id
            templateCard.querySelector('p').textContent = "PRECIO : $"+ item.price
            templateCard.querySelector('img').setAttribute("src", item.thumbnail)

            const clone = templateCard.cloneNode(true)
            fragment.appendChild(clone)
        })
        items.appendChild(fragment)
    }
}

function imprimircarrito(carrito){              //Funcion que instancia el objeto "Pedido" y ejecuta el metodo "mostrar pedido"
      Pedido = new Carrito(carrito)                                  
      Pedido.mostrarpedido()
    }  
    




const carrito = localStorage.getItem('carrito') //Recuperamos el valor del arreglo "Carrito"

imprimircarrito(JSON.parse(carrito))            //Aqui se inicia el codigo

