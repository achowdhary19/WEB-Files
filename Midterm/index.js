  

const images = ["babyrocket.jpg", "cover1.jpeg", "cover2.jpg", "roundstar.jpg"]

for (i = 0; i < document.getElementsByClassName("picture").length; i ++){
    console.log(document.getElementsByClassName("label")[i].innerHTML); 
    document.getElementsByClassName("picture")[i].innerHTML += "<img src= ' " +  images[i] + " ' > "; 
    
    //have to put the image relative to the pictures.html page, not the js page 
}

console.log("do you see this? ")

