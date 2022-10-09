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
//Add an event listener to the Quantity element for the Adidas Tokio Solar Hu shoe that will increase the Quantity by 1 each time it is clicked.

remain3.addEventListener('click', showQty);

function showQty(){
    qty3.innerHTML++;
}

//4. Nike Air Jordan
//Add an event listener to the Price element for the Nike Air Jordan shoe that will change the price from USD to JPY when clicked and vice versa.
//(you can use '¥43,618' for the Yen amount )
price4.addEventListener('click', showPrice);

function showPrice(){
    if(amt4.innerHTML === '$300'){
        amt4.innerHTML = '¥43,618';
    }else{
        amt4.innerHTML = '$300';
    }
}

//Nike Air Mags
//Add an event listener to the img element for the Nike Air Mag Shoe that will change the shoe image to an iconic movie that made this shoe popular after hovering (mouseover) over the shoe image and vice versa.

//Use this image for the iconic movie"
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






// plus.addEventListener('click', add);

// function add(){
//     total.innerHTML++;
// }

// minus.addEventListener('click', subtract);

// function subtract(){
//     total.innerHTML--;
// }


//8.

//9.

// 1. Add an event to the 'See Details' content that will create an alert box that says 'Not Available in Hawaii.' after clicking on See Details.

//2. Add an event to the div element with the id of 'name1' that will show/hide the description ('descrip1') after hovering over Air Jordan II.

//3. Add an event to the div element with the id of 'name2' that will show/hide the following description after clicking on the element.
//'The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season.'


//You'll need to:
// create a div element with an id of 'descrip2'
//append this element to the div element with the id of 'name2' 

//4. Add events to the all the thumbs up icon that will add a count for each time the icon is clicked on for any shoe.

//5. Add an event to the plus icon that will increment the price of the Air Jordan V shoe each time the icon is clicked on.

//6. Add an event to the minus icon that will decrement the price of the Air Jordan VI shoe each time the icon is clicked on.

//7. Add an event to the Air Jordan XI shoe that will show another colorway for that shoe after hovering over the image. 

//8. Add an event to the Air Jordan XII shoe that will increase the image by 50% after clicking on the image.

//9. Add events to both the plus and minus icon that will add or decrease the price each time the respective icon is clicked on.

//10. Add an event to the Air Jordan XXVIII shoe that will show the famous 'crying Michael Jordan' meme after clicking on the image.
