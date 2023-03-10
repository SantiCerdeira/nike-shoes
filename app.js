const d = document;
const sizes = d.querySelectorAll('.size');
const colors = d.querySelectorAll('.color');
const shoes = d.querySelectorAll('.shoe');
const gradients = d.querySelectorAll('.gradient');
const shoeBg = d.querySelector('.shoeBackground')

let prevColor = "red"
let animationEnd = true;

function changeSize(){
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}

function changeColor(){
    if(!animationEnd) return;
    let primary = this.getAttribute('primary');
    let color = this.getAttribute('color');
    let shoe = d.querySelector(`.shoe[color="${color}"]`)
    let gradient = d.querySelector(`.gradient[color="${color}"]`)
    let prevGradient = d.querySelector(`.gradient[color="${prevColor}"]`)

    colors.forEach(color => color.classList.remove('active'));
    this.classList.add('active');

    d.documentElement.style.setProperty('--primary', primary)

    shoes.forEach(shoe => shoe.classList.remove('show'))
    shoe.classList.add('show')

    gradients.forEach(gradient => gradient.classList.remove('first', 'second'));
    gradient.classList.add('first')
    prevGradient.classList.add('second')

    prevColor = color;
    animationEnd = false;

    gradient.addEventListener('animationend', () => {
        animationEnd = true;
    })
}

sizes.forEach(size => size.addEventListener('click', changeSize))
colors.forEach(color => color.addEventListener('click', changeColor))



let x = window.matchMedia("(max-width: 1000px)")

function changeHeight(){
    if(x.matches){
        let shoeHeight = shoes[0].offsetHeight
        shoeBg.style.height = `${shoeHeight}px`
    } else {
        shoeBg.style.height = "475px";
    }
}

changeHeight()

window.addEventListener('resize', changeHeight);