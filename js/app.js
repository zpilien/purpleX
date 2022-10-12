// 1. Adidas Yeezy
//Add an event listener to the Adidas Brand element (id of brand1) that will toggle the description of the shoe when clicked.
let YeezyBrand = document.getElementById('brand1');

YeezyBrand.addEventListener('click', showBrand);

function showBrand(){
    //console.log('test')
    let descripElem = document.getElementById('descrip1');
    if (descripElem.style.visibility === 'visible'){
        descripElem.style.visibility = 'hidden';
    }
    else{
        descripElem.style.visibility = 'visible';
    }
}

// 2. Adidas x Allbirds
//Add an event listener to the Adidas x AllbirdsBrand element (id of brand2) that will toggle the description of the shoe when clicked.

let birdBrand = document.getElementById('brand2');

birdBrand.addEventListener('click', showBrand2);

function showBrand2(){
    let descripElem = document.getElementById('descrip2');
    if (descripElem.style.visibility === 'visible'){
        descripElem.style.visibility = 'hidden';
    }
    else{
        descripElem.style.visibility = 'visible';
    }
}


//3. Adidas Human Race
//Add an event listener to the Quantity element for the Adidas Tokio Solar Hu shoe that will increase the Quantity by 1 each time Quantity is clicked.

let TokioNum = document.getElementById('qty3');
TokioNum.addEventListener('click', countUp);

function countUp(){
    TokioNum.innerHTML++;
}

//4. Nike Air Jordan
//Add an event listener to the Price element for the Nike Air Jordan shoe that will change the price from USD to JPY when clicked and vice versa. (you can use '¥43,618' for the Yen amount )

let jordanPrice = document.getElementById('price4');
jordanPrice.addEventListener('click', convertJPY);

function convertJPY(){
    let jorCost = document.getElementById('amt4');
    if (jorCost.innerHTML === '$300'){
        jorCost.innerHTML = '¥43,618';
    }
    else{
        jorCost.innerHTML = '$300';
    }
}

//5. Nike Air Mags
//Add an event listener to the img element for the Nike Air Mag Shoe that will change the shoe image to an iconic movie that made this shoe popular after hovering (mouseover) over the shoe image and vice versa.

//Use this image for the iconic movie: 
//'https://static.wikia.nocookie.net/bttf/images/f/fd/Back_To_The_Future_Nike_Shoes.jpg/'

let shoePics = document.getElementsByTagName('img');
console.log(shoePics);

shoePics[4].addEventListener('mouseover', showFilm);

function showFilm(){
    if (shoePics[4].src === 'https://cdn.flightclub.com/TEMPLATE/090135/1.jpg'){
        shoePics[4].src = 'https://static.wikia.nocookie.net/bttf/images/f/fd/Back_To_The_Future_Nike_Shoes.jpg/';
    }
    else {
        shoePics[4].src = 'https://cdn.flightclub.com/TEMPLATE/090135/1.jpg';
    }
}

//6. Nike Kyrie
//Add an event listener to all of the Nike shoes (Air Jordan, Air Mags, and Kyrie) that will toggle the description of the respective shoe when the brand element is clicked.

let brandBox = document.getElementsByClassName('brand');
console.log(brandBox);

for (i=0; i<brandBox.length; i++){
    brandBox[i].addEventListener('click', showBrand3);
}
    function showBrand3(){
        let descBox = this.querySelector('.nikeDesc');
        //for (i=0; i<descBox.length; i++){
        if (descBox.style.visibility === 'visible'){
            descBox.style.visibility = 'hidden';
        }
        else {
            descBox.style.visibility = 'visible';
        }
    }
 

//7. Saucony Shadow
//Add an event listener to the Quantity elements for the Saucony and Asics and shoes that will increase the Quantity by 1 each time Quantity is clicked.


//8. Asics Onitsuka Tiger
//Add an event listener to the Price elements of Saucony, Asics and Pizza Hut shoes that will toggle the price of the respective shoe when clicked.


//9. Pizza Hut
//There are a couple of missing HTML elements that you'll need to create. Please create a div element with the following details:
//the div element will have an id of 'qtyItems'
//the innerHTML will be 'Quantity'
//add an event listener with a click action and function name of editTotalOrders
//append this div element to Pizza Hut shoe 

//Next, create a paragraph element with following details:
//the p element will have an id of 'tally'
//the innerHTML will be '1'
//append this p element to the above div element that you just created

//Last step, create a function editTotalOrders that will that will increase the Quantity by 1 each time Quantity is clicked.

