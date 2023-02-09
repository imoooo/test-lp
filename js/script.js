let burger = document.querySelector('.burger-menu');
let buttonOpen = document.querySelector('.burger-button__open');
let buttonClosed = document.querySelector('.burger-button__closed');

function open(){
    burger.classList.add('burger-menu__open');
}
buttonOpen.addEventListener('click', open);

function closed(event){
    if (event.target.className === 'burger-menu burger-menu__open' || event.target.className === 'burger-button__closed') {
        burger.classList.remove('burger-menu__open');
    }
}
buttonClosed.addEventListener('click', closed);

burger.addEventListener('click', closed);







