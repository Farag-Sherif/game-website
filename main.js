// open listitems @media (max-width:992px)
let bars = document.querySelector('header .fa-bars')
bars.addEventListener('click', function() {
    const listitems = document.querySelector('header nav')
    listitems.classList.toggle('active')
})

// open infomation details of products
function informationDetails(id) {
    const imageOfProduct = document.querySelectorAll('.our-product .product img')
    const detailsOfProduct = document.querySelectorAll('.our-product .product .info')
    imageOfProduct[id].classList.toggle('active')
    detailsOfProduct[id].classList.toggle('show-details')
}
// change image 
function activeImage(img) {
    const imageOfActive = document.querySelector('.our-product .active-image .active')
    imageOfActive.src = img;
}










