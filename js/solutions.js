// 1. Adidas Yeezy
//Add an event listener to the Adidas Brand element (id of brand1) that will toggle the description of the shoe when clicked.

brand1.addEventListener('click', showDescrip);

function showDescrip(){
    if(descrip1.style.visibility === 'visible'){
        descrip1.style.visibility = 'hidden'
    }else{
        descrip1.style.visibility = 'visible';
    }
}

// 2. Adidas x Allbirds
//Add an event listener to the Adidas x AllbirdsBrand element (id of brand2) that will toggle the description of the shoe when clicked.

brand2.addEventListener('click', displayDescription);

function displayDescription(){
    if(descrip2.style.visibility === 'visible'){
        descrip2.style.visibility = 'hidden'
    }else{
        descrip2.style.visibility = 'visible';
    }
}

//3. Adidas Human Race
//Add an event listener to the Quantity element for the Adidas Tokio Solar Hu shoe that will increase the Quantity by 1 each time Quantity is clicked.

remain3.addEventListener('click', showQty);

function showQty(){
    qty3.innerHTML++;
}

//4. Nike Air Jordan
//Add an event listener to the Price element for the Nike Air Jordan shoe that will change the price from USD to JPY when clicked and vice versa. (you can use '¥43,618' for the Yen amount )

price4.addEventListener('click', showPrice);

function showPrice(){
    if(amt4.innerHTML === '$300'){
        amt4.innerHTML = '¥43,618';
    }else{
        amt4.innerHTML = '$300';
    }
}

//5. Nike Air Mags
//Add an event listener to the img element for the Nike Air Mag Shoe that will change the shoe image to an iconic movie that made this shoe popular after hovering (mouseover) over the shoe image and vice versa.

//Use this image for the iconic movie: 
//'https://static.wikia.nocookie.net/bttf/images/f/fd/Back_To_The_Future_Nike_Shoes.jpg/'

let imgElem = document.getElementsByTagName('img');

for(let i = 0; i<imgElem.length; i++){
    imgElem[4].addEventListener('mouseover', changeImg);
}

function changeImg(){
    if(imgElem[4].src === 'https://cdn.flightclub.com/TEMPLATE/090135/1.jpg'){
        imgElem[4].src = 'https://static.wikia.nocookie.net/bttf/images/f/fd/Back_To_The_Future_Nike_Shoes.jpg/';
    }else{
        imgElem[4].src = 'https://cdn.flightclub.com/TEMPLATE/090135/1.jpg';
    }  
}

//6. Nike Kyrie
//Add an event listener to all of the Nike shoes (Air Jordan, Air Mags, and Kyrie) that will toggle the description of the respective shoe when the brand element is clicked.

let nikeBrand = document.getElementsByClassName('brand');

for(let i =0; i<nikeBrand.length; i++){
    nikeBrand[i].addEventListener('click', showNikeDesc);
}

function showNikeDesc(){
    let nikeBrandDesc = this.querySelector('.nikeDesc');
    if(nikeBrandDesc.style.visibility === 'visible'){
        nikeBrandDesc.style.visibility = 'hidden';
    }else{
        nikeBrandDesc.style.visibility = 'visible';
    }
}

//7. Saucony Shadow
//Add an event listener to the Quantity elements for the Saucony, Asics and Pizza Hut shoes that will increase the Quantity by 1 each time Quantity is clicked.

let addItem = document.getElementsByClassName('purchases');

for(let i = 0; i<addItem.length; i++){
    addItem[i].addEventListener('click', plusItem);
}

function plusItem(){
  let orderBox = this.querySelector('.orders');
  orderBox.innerHTML++; 
}

//8. Asics Onitsuka Tiger
//Add an event listener to the Price elements of Saucony, Asics and Pizza Hut shoes that will toggle the price of the respective shoe when clicked.

let amountBox = document.getElementsByClassName('amount');

for(let i = 0; i<amountBox.length; i++){
    amountBox[i].addEventListener('click', displayPrice);
}

function displayPrice(){
    let priceBox = this.querySelector('.price');
    if(priceBox.style.display === 'block'){
        priceBox.style.display = 'none';
    }else{
        priceBox.style.display = 'block';
    }
}

//9. Pizza Hut

// let blockCards = document.getElementsByClassName('block3');
// console.log(blockCards[2])

// let divElem = document.createElement('div');
// divElem.className = 'amount';
// divElem.innerHTML = 'Price';
// blockCards[2].appendChild(divElem)

// let pElem = document.createElement('p');
// pElem.className = 'price';
// pElem.innerHTML = "$375";
// divElem.appendChild(pElem);
