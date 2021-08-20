const div1 = document.getElementById('first');
const div2 = document.getElementById('second');
const div3 = document.getElementById('third');

const img = document.getElementById('art');

const desc = document.getElementById('desc');
const price = document.getElementById('price');

//top button
const free = document.getElementById('free');
const express = document.getElementById('express');

const shippingFild = document.getElementById('shipping')
const total = document.getElementById('total');


free.addEventListener('click', function () {
    shippingFild.innerText = '5'
    updateTotal()
});
express.addEventListener('click', function () {
    shippingFild.innerText = '30'
    updateTotal()
});

//update total
function updateTotal(){
    const  shippingCharge=parseInt(shippingFild.innerText) ;
    const productPrice=parseInt(price.innerText);
    const grandTotal= shippingCharge + productPrice;
    total.innerText=grandTotal;
}


div1.addEventListener('click', function () {
    img.src = 'images/1.jpg';
    desc.innerText = ' first- Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam tempore dolor voluptatum eveniet tempora totam, explicabo doloribus nihil cum fugiat!';
    price.innerText = '850'
    //changing total price
    updateTotal()

});
div2.addEventListener('click', function () {
    //chaning images
    img.src = 'images/2.jpg';
    //changing dicscription
    desc.innerText = ' second- Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam tempore dolor voluptatum eveniet tempora totam, explicabo doloribus nihil cum fugiat!';
    //changing price
    price.innerText = '550';
    //changing total price
    updateTotal()
});
div3.addEventListener('click', function () {
    img.src = 'images/3.jpg';
    desc.innerText = ' third- Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam tempore dolor voluptatum eveniet tempora totam, explicabo doloribus nihil cum fugiat!';
    price.innerText = '450';
    updateTotal()
});