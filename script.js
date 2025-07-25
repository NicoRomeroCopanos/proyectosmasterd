//JS para la galería de fotos

const carrusel = document.getElementById("carrusel")
const cajas = document.querySelectorAll(".caja")
const prevBoton = document.getElementById("prev-boton")
const nextBoton = document.getElementById ("next-boton")

const content = ["A", "B", "C", "D", "E", "F", "G"]
const images = [
   'https://picsum.photos/id/1018/1000/600',
   'https://picsum.photos/id/1049/1000/600',
   'https://picsum.photos/id/1058/1000/600',
   'https://picsum.photos/id/1049/1000/600',
   'https://picsum.photos/id/1036/1000/600',
   'https://picsum.photos/id/1026/1000/600',
   'https://picsum.photos/id/1016/1000/600',
]


let currentIndex = 0

cajas.forEach((caja) => {
    const img = document.createElement('img')
    img.alt = "carousel image"
    caja.appendChild(img)
})

function updateCarrusel() {
   const prevIndex = (currentIndex -1 + content.length) % content.length 
   const nextIndex = (currentIndex + 1) % content.length

   cajas.forEach((caja, index) => {
        const img = caja.querySelector('img')
        if(index === 0) {
            //caja.textContent = content[prevIndex]
            img.src = images[prevIndex]
        } else if (index === 1) {
            //caja.textContent = content[currentIndex]
            img.src = images[currentIndex] 
        } else if (index === 2) {
            //caja.textContent = content[nextIndex]
            img.src = images[nextIndex]
        }
   })
}

prevBoton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + content.length) % content.length
    updateCarrusel()
})

nextBoton.addEventListener('click', () =>{
    currentIndex = (currentIndex + 1) % content.length
    updateCarrusel()
})

updateCarrusel()





