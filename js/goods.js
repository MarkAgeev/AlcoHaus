const cart = {
    "p9": {
        "name": "The Sampler Kit",
        "url": "#",
        "image": "./img/TheSamplerKit.png",
        "price": 39
    },
    "p7": {
        "name": "Grapefruit Jalapeño",
        "url": "#",
        "image": "./img/GrapefruitJalapeno.png",
        "price": 34
    },
    "p6": {
        "name": "Citrus Flower",
        "url": "#",
        "image": "./img/CitrusFlower.png",
        "price": 31
    },
    "p5": {
        "name": "Strawberry Basil",
        "url": "#",
        "image": "./img/StrawberryBasil.png",
        "price": 36
    },
    "p4": {
        "name": "Pomegranate Rosemary",
        "url": "#",
        "image": "./img/PomegranateRosemary.png",
        "price": 33
    },
    "p1": {
        "name": "Spiced Cherry",
        "url": "#",
        "image": "./img/SpicedCherry.png",
        "price": 35
    },
}
let data;
if(localStorage.getItem('cart') == null) {
    data = {};
}
else {
    data = JSON.parse(localStorage.getItem('cart'));
}
let num;
if(localStorage.getItem('num') == null) {
    num = 0;
    document.querySelector('.cart').innerHTML = `Cart(${num})`;
    document.querySelector('.cart-small').innerHTML = `Cart(${num})`;
    localStorage.setItem('num', JSON.stringify(num));
}
else {
    num = JSON.parse(localStorage.getItem('num'));
    document.querySelector('.cart').innerHTML = `Cart(${num})`; 
    document.querySelector('.cart-small').innerHTML = `Cart(${num})`;
}
document.querySelector('.goods').addEventListener('click', event => {
    if (event.target.classList.contains('btn-cost')) {
        let articul = event.target.dataset['articul'];
        if(data[articul] !== undefined) {
            data[articul]['count']++; 
        }
        else {
            data[articul] = cart[articul];
            data[articul]['count'] = 1;
            num++
            document.querySelector('.cart').innerHTML = `Cart(${num})`;
            document.querySelector('.cart-small').innerHTML = `Cart(${num})`;
        }
        localStorage.setItem('cart', JSON.stringify(data))     
        localStorage.setItem('num', JSON.stringify(num))
    }
});

