//JS para la validación del formulario

let miBoton = document.getElementById("enviar");
let miForm = document.getElementById("formulario");

miBoton.addEventListener("click", (evento)=>{
    evento.preventDefault();

    valido = validar()

    if(valido){
        miForm.submit();
    }
})

//Mandamos los alerts para cada apartado del formulario

function validar(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let direccion = document.getElementById("direccion").value;
    let telefono = document.getElementById("telefono").value;
    let edad = document.getElementById("edad").value;
    let correo = document.getElementById("correo").value;
    let privacidad = document.getElementById("privacidad")

    if(!nombre){
        alert("El campo nombre no puede estar vacio");
        return false;
    }
    
    let name_re = /^[a-zA-Z ]{2,30}$/
    if(!name_re.exec(nombre)){
        alert("el nombre solo puede contener letras")
        return false;
    }

    /*****apellido*********/

    if(!apellido){
        alert("El campo apellido no puede estar vacio")
        return false;
    }

    let apellido_re = /^[a-zA-z]{2,40}$/
    if(!apellido_re.exec(apellido)){
        alert("el apellido solo puede contener letras")
        return false;
    }

    /******direccion********/

    if(!direccion){
        alert("El campo direccion no puede estar vacio");
        return false;
    }

    let direccion_re = /^[a-zA-Z0-9 /]{2,30}$/
    if(!direccion_re.exec(direccion)){
        alert("Debe cumplir con los requisitos de un correo");
        return false;
    }

    /********telefono*******/

    if(!telefono){
        alert("El campo telefono no puede estar vacio");
        return false;
    }

    let telefono_re = /^[0-9]{9}$/
    if(!telefono_re.exec(telefono)){
        alert("Ponga el telefono correctamente")
        return false
    }

    /**********edad********/

    if(!edad){
        alert("El campo edad no puede estar vacio");
        return false;
    }

    let edad_re = /^[0-9]{1,2}$/
    if(!edad_re.exec(edad)){
        alert("El campo edad solo puede contener números con un máximo de 2")
        return false
    }

    /********correo********/

    if(!correo){
        alert("El campo correo no puede estar vacio");
        return false;
    }

    let correo_re = /^[a-z0-9,.,@]{5,50}$/
    if(!correo_re.exec(correo)){
        alert("Cumpla con los requisitos de un correo")
        return false
    }

    /******privacidad*******/

    if(!privacidad.checked){
        alert("Debe aceptar las condiciones de la empresa");
        return false;
    }

    return true;

}

/*******presupuesto********/


let carro = []

//Elementos del DOM

const selectorProducto = document.getElementById("producto")
const botonAniadirCarrito = document.getElementById("carro")
const contenedorArticulosCarrito = document.getElementById("articulos-carrito")
const elementoTotalFinal = document.getElementById("total-final")

//Agregar al carrito

botonAniadirCarrito.addEventListener('click', () => {
    const opcionSeleccionada = selectorProducto.options[selectorProducto.selectedIndex]
    const valorSeleccionado = opcionSeleccionada.value

    if(!valorSeleccionado) {
        alert('Selecciona un producto valido')
        return
    }

    const [nombreProducto, precioProducto] = valorSeleccionado.split(":")
    const precio = parseFloat(precioProducto)

    //agregar el producto al carro
    carro.push({nombre: nombreProducto, precio})

    actualizarCarrito()
})

//actualizar el carrito

function actualizarCarrito() {
    contenedorArticulosCarrito.innerHTML = ''

    let totalCarrito = 0

    carro.forEach((producto, index)=> {
        totalCarrito += producto.precio

        const articuloCarrito = document.createElement('div')
        articuloCarrito.classList.add('articulo-carrito')
        articuloCarrito.innerHTML = `
        ${producto.nombre} - ${producto.precio.toFixed(2)}
        `
        contenedorArticulosCarrito.appendChild(articuloCarrito)
    })

    actualizatTotalFinal()
}

//calcular y mostrar el precio final

function actualizatTotalFinal(){
    let total = carro.reduce((suma, item) => suma + item.precio, 0)

    //sumar los extras
    const extrasSeleccionados = document.querySelectorAll(".checkbox-extra:checked")
    extrasSeleccionados.forEach((checkbox) => {
        const[, precioExtra] = checkbox.value.split(':')
        total += parseFloat(precioExtra)
    })

    //aplicar el descuento
    const radioDescuento = document.querySelector('input [name-"descuento]:checked')
    if (radioDescuento) {
        const valorDescuento = parseFloat(radioDescuento.value)
        total = total - (total * valorDescuento)
    }

    elementoTotalFinal.textContent = `Precio: ${total.toFixed(2)}€`

}

//actualizar el carrito con los extras
const checkboxExtras = document.querySelectorAll(".checkbox-extra")
checkboxExtras.forEach((checkbox) => {
    checkbox.addEventListener('change', actualizatTotalFinal)
})

//evento para actualizar el descuento
const radioDescuento = document.querySelectorAll('input[name="descuento"]')
radioDescuento.forEach((radio) => {
    radio.addEventListener('change', actualizatTotalFinal)
})
















