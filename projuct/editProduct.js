const data = JSON.parse(localStorage.getItem('data'));
const params = window.location.search; //?productId=12
const searchParams = new URLSearchParams(params);
const productId = Number(searchParams.get('productId'));// 12

let title=document.getElementById('title')
data[productId-1].title=title.value

let category=document.getElementById('categoryInput')
data[productId-1].category=categoryInput.value


let price=document.getElementById('price')
data[productId-1].price=price.value

let Quantity=document.getElementById('Quantity')
data[productId-1].Quantity=Quantity.value

let Description=document.getElementById('Description')
data[productId-1].Description=Description.value
console.log(data[productId-1])

