const cardArray = [
    {
        name:  "fries",
        Image: "images/fries.png",
    }, 
    {
        name: "cheeseburger",
        Image: "images/cheeseburger.png"
    },
    {
        name: "hotdog",
        Image: "images/hotdog.png",
    },
    {
        name: "ice-cream",
        Image: "images/ice-cream.png",
    },
    {
        name: "milkshake",
        Image: "images/milkshake.png",

    },
    {
        name: "pizza",
        Image: "images/pizza.png",
    },
    {
        name:  "fries",
        Image: "images/fries.png",
    }, 
    {
        name: "cheeseburger",
        Image: "images/cheeseburger.png"
    },
    {
        name: "hotdog",
        Image: "images/hotdog.png",
    },
    {
        name: "ice-cream",
        Image: "images/ice-cream.png",
    },
    {
        name: "milkshake",
        Image: "images/milkshake.png",

    },
    {
        name: "pizza",
        Image: "images/pizza.png",
    }
   
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for(let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card); 

    }
   
    
}

 createBoard()

 function checkMatch() {
    const cards = document.querySelector('image');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    console.log(cards);
    console.log('check for match!');
    if (cardsChosen[0] == cardsChosen[1]){
        alert('You Found a Match!');
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].setAttribute('src', 'images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('clicks' , flipCard);
        cardsWon.push(cardsChosen);
    }

    cardsChosen = []
    cardsChosenIds = []
    
    
 }



 function flipCard() {
    console.log(cardArray);
    const cardID = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardID].name);
    cardsChosenIds.push(cardID);
    console.log(cardsChosen);
    console.log(cardsChosenIds);
    console.log('clicked', cardID);
    console.log(cardsChosen);
    this.setAttribute('src', cardArray[cardID].Image);
    if(cardsChosen.length === 2) {
    setTimeout( checkMatch, 500)   
    }
 }