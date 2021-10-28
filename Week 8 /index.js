console.log("hello world")

// console.log(Math.floor(Math.random() *10)); /*get a random number between 0 and 1 */ 


/*console.log (document.getElementsByClassName("options") ) ; 
 what we get when we print to the console is an array type thing, and we can access it like an array*/ 

// console.log (document.getElementsByClassName("options")[0]) ; 
// access first element 


const images = ["cosmos.jpg", "sky.jpg", "snow.jpg"]


for (i = 0; i < document.getElementsByClassName("options").length; i ++ ){/* or you can do by < 3 if its simple like ours rn */ 
    console.log(document.getElementsByClassName("options")[i].innerHTML); 
    document.getElementsByClassName("options")[i].innerHTML += '<img src="assets/' + images[i] + ' "> ' ;  /*any inner html stuff is in quotations */ 
    /*this is adding all the images, but i haven't gotten it to work */ 
    
    
    
    // document.getElementsByClassName("options")[i].innerHTML += '<img src= "assets/cosmos.jpg">' /*any inner html stuff is in quotations */ 
    // /*this line just adds one picture to each flex box 
}
