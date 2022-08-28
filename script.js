//###########
// slider
//###########

//images array
const images = [
    'https://www.microworx.com/wp-content/uploads/2017/03/services-upgrade-sq-1.jpg',
    'https://timesmarket.org/wp-content/uploads/2022/04/featured-express-computer-repair-in-bedford.jpg',
    'https://cf-assets.esportsclub.nl/erz7ypidnr7y/uKdWHOpl6Z27U0TODMExE/80dfe2e6b405c8fa7800ef0d70e92610/Windows-11_1920_Hero_Latest.jpg',
    'https://www.decomputerspecialisten.nl/wp-content/uploads/2018/04/Microsoft-Office.png'
]

//elements from HTML
const slider = document.querySelector(".slider")
const arrowLeft = document.querySelector(".arrow-left")
const arrowRight = document.querySelector(".arrow-right")

//current image index
let currentIndex = 0

//action when sliding left
arrowLeft.addEventListener('click', ()=> {
    currentIndex--
    if(currentIndex == -1)
        currentIndex = images.length-1
    setImage(currentIndex, slider, images)
})

//action when sliding right
arrowRight.addEventListener('click', ()=> {
    currentIndex++
    if(currentIndex == images.length)
        currentIndex = 0
    setImage(currentIndex, slider, images)
})

//setting image background from updated index, images array and slider element
const setImage = ( index, slider, arr ) => {
    const currentURL = arr[index]
    slider.style.backgroundImage = `url("${currentURL}")`
}

//default image set when loading HTML
setImage(currentIndex, slider, images)

//###########
// menu
//###########

//elements from HTML
const menu = document.querySelector("#menu")
const ul = document.querySelector("nav").querySelector("ul")
const bars = document.querySelectorAll('.menu-bar')

//action when clicking menu hamburger
menu.addEventListener('click', ()=> {
    ul.classList.toggle('show-flex')
    bars[0].classList.toggle('menu-bar-1-change')
    bars[1].classList.toggle('menu-bar-2-change')
    bars[2].classList.toggle('menu-bar-3-change')
})
