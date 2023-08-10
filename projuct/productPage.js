let productName = '';
const data = JSON.parse(localStorage.getItem('data'));
const params = window.location.search; //?productId=12
const searchParams = new URLSearchParams(params);
const productId = Number(searchParams.get('productId'));// 12

let continuerImage=document.getElementById('continuerImage');
let image=document.createElement('img')
image.src=data[productId-1].image;
image.classList.add('imageP')
continuerImage.append(image)

let title=document.getElementById('title')
title.innerText=data[productId-1].title

let description=document.getElementById('description')
description.innerText=data[productId-1].description

let category=document.getElementById('category')
category.innerText=data[productId-1].category

let price=document.getElementById('price')
price.innerText=data[productId-1].price

let quantity=document.getElementById('quantity')
quantity.innerText=data[productId-1].rating.count