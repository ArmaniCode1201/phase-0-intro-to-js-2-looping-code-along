// Code your solutions in this file
//for (let age = 30; age < 40; age++) {
    //console.log(`I'm ${age} years old. Happy birthday to me!`);
    
//}

//const gifts = ["teddy bear", "drone", "doll"];

//function wrapGifts(gifts) {
    //for (let i = 0; i < gifts.length; i++) {
        //console.log(`Wrapped ${gifts[i]} and added a bow!`);
        //debugger;
    //}
    //return gifts;
//}
//wrapGifts(gifts);

const origArray = ["Gaudalupe", "Ollie", "Aki"];
    

function writeCards(origArray) {
    const newArray = [];
    for (let i = 0; i < origArray.length; i++) {
         newArray.push(`Thank you, ${origArray[i]}, for the wonderful surprise gift!`);
    }

    return newArray;
}
writeCards(origArray);

function countDown() {
    let i=10;
    while(i>=0) {
        console.log(i);
        i--;
    }
}
