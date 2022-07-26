const burgerNode = document.querySelector('.burger')
const drropdownNode = document.querySelector('.m-menu')
const contentNode = document.querySelector('.wrapper-content')
burgerNode.addEventListener('click', function() {
    burgerNode.classList.toggle('burger--js-active')
    drropdownNode.classList.toggle('m-menu--js-toggle-drropdown')
    contentNode.classList.toggle('wrapper-content--js-toggle')
})