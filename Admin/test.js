const products = [
    {
        id: 0,
        image: './img/1.png',
        title: 'Vacuum Cleaner',
        price: 19,
    },
    {
        id: 1,
        image: './img/2.png',
        title: 'Electric Whisk (black)',
        price: 20,
    },
    {
        id: 2,
        image: './img/6.png',
        title: 'Support Pour Ordinateur Portable' ,
        price: 20 ,
    },
    {
        id: 3,
        image: './img/4.webp',
        title: 'Support De Volant De Voiture',
        price: 21,
    },
    {
        id: 4,
        image: './img/5.png',
        title: 'Luxury Women Rhinestone Quartz Watches',
        price: 18 ,
    },
    {
        id: 5,
        image: './img/3.webp',
        title: 'Mini Projecteur De Poche',
        price: 45 ,
    },
];

const categories = [...new Set(products.map((item) => item))];

let i = 0;

document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src="${image}" alt="${title}">
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>$ ${price}.00</h2>
                <button onclick='addtocart(${i++})'>Add to cart</button>
            </div>
         </div>`
    );
}).join('');

var cart = [];

function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
}

function displaycart() {
    let j = 0; total=0;
    document.getElementById("count").innerHTML=cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src="${image}">
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size:15px;'>$ ${price}.00</h2>
                    <i class='fa-solid fa-trash' onclick='delElement(${j++})'></i>
                </div>`
            );
        }).join('');
    }
}

function delElement(index) {
    cart.splice(index, 1);
    displaycart();
}


console.log({ products, categories, cart, generatedHTML: document.getElementById('root').innerHTML });