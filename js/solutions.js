//1. Add an event listener to the Adidas Brand element (id of brand1) that will toggle the description when clicked.

brand1.addEventListener('click', showDescrip);

function showDescrip(){
    if(descrip1.style.visibility === 'visible'){
        descrip1.style.visibility = 'hidden'
    }else{
        descrip1.style.visibility = 'visible';
    }
}


// 2. Add an event listener to the Price element for the Adidas x Allbirds shoe that will change the price from USD to JPY when clicked and vice versa.

price2.addEventListener('click', showPrice);

function showPrice(){
    if(amt2.innerHTML === '$120'){
        amt2.innerHTML = '¥13,845';
    }else{
        amt2.innerHTML = '$120';
    }
}

//3. Add an event listener to the Quantity element for the Adidas Tokio Solar Hu shoe that will increase the Quantity by one each time it is clicked.

remain3.addEventListener('click', showQty);

function showQty(){
    qty3.innerHTML++;
}

//4. Add event listeners to all the Brand elements for the Nike shoes that will toggle the description for the respective shoe when clicked.

let brandElem = document.getElementsByClassName('brand');

for(let i = 0; i<brandElem.length; i++){
    brandElem[i].addEventListener('click', showDesc );
}

function showDesc(){
    let descElem = this.querySelector('.descrip');
    if(descElem.style.visibility === 'visible'){
        descElem.style.visibility = 'hidden';
    }else{
        descElem.style.visibility = 'visible';
    }
}

/*5 Add an event listener to the price element for the Nike Mag shoe that will:
1. create an alert that says 'WAAAT!?!?! 50% OFF!!!'
2. changes the price from $50,000 to $25,000
3. the $25,000 should be in #EC1818'

*/

let priceElem = document.getElementsByClassName('price');

priceElem[1].addEventListener('click', discount);

function discount(){
    let amtElem = this.querySelector('.amt');
    window.alert('WAAAT!?!?! 50% OFF!!!');
    amtElem.innerHTML = '$25,000';
    amtElem.style.color = '#EC1818';
    
}

/*6 Add an event listener to the img element for the Nike Air Jordan 14 x CLOT 'Terracotta' Shoe that will
change the shoe image to a Terracotta Soldier image after hovering over the shoe image and vice versa.

You can use this image for the Terracotta Soldier"
'https://media.entertainmentearth.com/assets/images/41e0e13f4ebd4a6aa808c0c42d8804e3xl.jpg'

*/

let imgElem = document.getElementsByTagName('img');

for(let i = 0; i<imgElem.length; i++){
    imgElem[5].addEventListener('click', changeImg);
}

function changeImg(){
    if(imgElem[5].src === 'https://cdn.flightclub.com/1250/TEMPLATE/205734/1.jpg'){
        imgElem[5].src = 'https://media.entertainmentearth.com/assets/images/41e0e13f4ebd4a6aa808c0c42d8804e3xl.jpg'
    }else{
        imgElem[5].src = 'https://cdn.flightclub.com/1250/TEMPLATE/205734/1.jpg'
    }  
}


plus.addEventListener('click', add);

function add(){
    total.innerHTML++;
}

minus.addEventListener('click', subtract);

function subtract(){
    total.innerHTML--;
}


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
