// PICTURE PAGE 
//this is javascript to iterate through every flex box and populate it with every image in this list.

const images = ["cover1.jpeg", "babyrocket.jpg", "cover2.jpg", "cover3.jpg", "stamp1.jpg", "stamp2.jpg", "stamp3.jpg", "stamp4.jpg"]

for (i = 0; i < document.getElementsByClassName("picture").length; i++) {
    
    console.log("length: " + document.getElementsByClassName("picture").length)
    // console.log(document.getElementsByClassName("label")[i].innerHTML);
    document.getElementsByClassName("picture")[i].innerHTML += "<img src= ' " + images[i] + " ' > ";
    //have to put the image relative to the pictures.html page, not the js page 
}


document.getElementById("icon").addEventListener("click", randomBG); 

function randomBG() {
    document.body.style.backgroundColor = `rgba(` + Math.random() * 255 + `, ` + Math.random() * 255 + `, ` + Math.random() * 255 + `, 255)`
}


// setInterval(randomBG, 100)


// document.getElementById("button").addEventListener("click", console.log(Date())); 

// // buttonClicked(){
// //     document.getElementById("button").addEventListener("click", Date())
// // }






//CRAFTS PAGE 


const craftimages = ["crochet1.jpg", "crochet2.jpg", "crochet3.jpg", "crochet4.jpg"]

for (i = 0; i < document.getElementsByClassName("craft").length; i++) {
    console.log(document.getElementsByClassName("label2")[i].innerHTML);
    document.getElementsByClassName("craft")[i].innerHTML += "<img src= ' " + craftimages[i] + " ' > ";
}




//READING PAGE 
const readingimages = ["book1.jpg", "book2.jpg", "book3.jpg", "book4.jpg"]

for (i = 0; i < document.getElementsByClassName("reading").length; i++) {
    console.log(document.getElementsByClassName("label3")[i].innerHTML);
    document.getElementsByClassName("reading")[i].innerHTML += "<img src= ' " + readingimages[i] + " ' > ";
}



//RECIPES PAGE 
const recipeimages = ["recipe1.jpg", "recipe2.jpg", "recipe3.jpg", "recipe4.jpg"]

for (i = 0; i < document.getElementsByClassName("recipe").length; i++) {
    console.log(document.getElementsByClassName("label4")[i].innerHTML);
    document.getElementsByClassName("recipe")[i].innerHTML += "<img src= ' " + recipeimages[i] + " ' > ";
}
