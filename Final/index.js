

// ALERT 
document.getElementById("chew").addEventListener("click", helloWorld);

function helloWorld() {
  alert ("Arfas little world");
}


// ROTATE HAND 
document.getElementById("hand").addEventListener("click", animate);
function animate(){
    setInterval(function(){
      document.getElementById("hand").style.WebkitTransitionDuration=".25s";
      document.getElementById("hand").style.transform = 'rotate(240deg)'; } , 1000)
}




// CHANGE BACKGROUND COLOR 
let paint = new Audio("assets/paintbucket!.mov");
const colors = ["#001FCC", "#FD611F", "#05A556", "#111111", "#E0B507", "#E7DDCC", "#CFCAD6" ]
i = 0; 
document.getElementsByClassName("item18")[0].addEventListener("click", function(){
    document.body.style.backgroundColor = colors[i];
    paint.play();
  
    i = (i + 1) % colors.length;
    
     // === 

    // i ++ ; 
    // if (i >= colors.length) {
    //   i = 0
    // }
});




// DATE 
document.getElementById("scissors").addEventListener("click", function(){
  document.getElementById("h1").innerHTML = Date();
  console.log(Date());
});


// CHANGE BACKGROUND IMAGE 
document.getElementById("sharpen").addEventListener("click", function(){
  document.body.style.backgroundImage = "url('assets/grass.jpg')"; 
});



// SPLAT + ROTATE 
let degree = 90; 
let splat = new Audio("assets/splat.mp3")

document.getElementById("fish").addEventListener("click", function(){
    document.body.style.setProperty("-webkit-transform", `rotate(${degree}deg)`, null);
    degree += 90; 
    if (i >= 360) {
      i = 0
    }
    splat.play();
});

// ERROR SOUNDS 
let sound1 = new Audio("assets/error.mp3");
document.getElementById("pencil").addEventListener("click",function(){
  sound1.play();
})

document.getElementById("hook").addEventListener("click",function(){
  sound1.play();
})
document.getElementById("flower").addEventListener("click",function(){
  sound1.play();
})


// CROCHET BOY
let n = 0;
document.getElementById("crochetboy").addEventListener("click", function(){
  document.body.style.backgroundColor = "black";
  document.querySelectorAll("img")[n].src = "assets/crochetBoy.png";
  n++; 
});


// C MAJOR SCALE 
let c = new Audio("assets/C.wav");
document.getElementById("orange1").addEventListener("click", function(){
  c.play();
})

let d = new Audio("assets/D.wav"); 
let e = new Audio("assets/E.wav");
let f = new Audio("assets/F.wav");
let g = new Audio("assets/G.wav");
let a = new Audio("assets/A.wav");
let b = new Audio("assets/B.wav");

document.getElementById("purple1").addEventListener("click", function(){
  d.play();
})

document.getElementById("blue1").addEventListener("click", function(){
  e.play();
})

document.getElementById("pink1").addEventListener("click", function(){
  f.play();
})

document.getElementById("purple2").addEventListener("click", function(){
  g.play();
})

document.getElementById("green1").addEventListener("click", function(){
  a.play();
})

document.getElementById("yellow1").addEventListener("click", function(){
  b.play();
})





//OPEN SKETCH BOOk
let sound3 = new Audio("assets/pageFlip.mp3");

// document.getElementById("journal").addEventListener("click", function(){
//   document.getElementById("journal").src = "assets/openjournal.png";
//   sound3.play();
// })



document.getElementById("journal").addEventListener("click", changePic);
var image_tracker = "journal";

function changePic(){
  var image = document.getElementById("journal");
  sound3.play();
  if (image_tracker == "journal"){
    image.src= "assets/openjournal.png";
    image_tracker = "open";
  }
  else if (image_tracker == "open"){
    image.src = "assets/journal.png";
    image_tracker = "journal";
    console.log(image_tracker);
  }
}



//LIGHTS OUT 
let sound4 = new Audio("assets/lightSwitchCrop.mov");
document.getElementById("circle").addEventListener("click", lightsOut);

var lightsOn = true; 
function lightsOut(){
  sound4.play();

  if (lightsOn){
    document.getElementById("overlay").style.display = "block";
    lightsOn = false; 
  }

  else{
   document.getElementById("overlay").style.display = "none";
   lightsOn = true; 
  }
}


//FIELD 
let birds = new Audio("assets/birds.mp3")
document.getElementById("mushroom").addEventListener("click", function(){
  document.body.style.backgroundImage = "url('assets/field.png')";
  document.body.style.backgroundPosition = "center";
  birds.play();

})