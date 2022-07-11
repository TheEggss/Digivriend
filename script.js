//###########
// slider
//###########

//images array
const images = [
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    'https://thumbs.dreamstime.com/b/spring-nature-sunny-morning-landscape-amazing-sky-grassy-meadow-sunlight-rural-scene-bright-sun-149207903.jpg',
    'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
    'https://media.istockphoto.com/photos/villefranche-on-sea-in-evening-picture-id1145618475?k=20&m=1145618475&s=612x612&w=0&h=_mC6OZt_eWENYUAZz3tLCBTU23uvx5beulDEZHFLsxI='
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

//action when clicking menu hamburger
menu.addEventListener('click', ()=> {
    ul.classList.toggle('show-flex')

})
