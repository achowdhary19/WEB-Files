

// ALERT 
document.getElementById("chew").addEventListener("click", helloWorld);

function helloWorld() {
  alert ("Hello World!");
}


// ROTATE HAND 
document.getElementById("hand").addEventListener("click", animate);
function animate(){
    setInterval(function(){
      document.getElementById("hand").style.WebkitTransitionDuration=".5s";
      document.getElementById("hand").style.transform = 'rotate(240deg)'; } , 1000)
}




// CHANGE BACKGROUND COLOR 
const colors = ["#001FCC", "#FD611F", "#05A556", "#111111", "#E0B507", "#E7DDCC", "#CFCAD6" ]
i = 0; 
document.getElementById("flower").addEventListener("click", function(){
    document.body.style.backgroundColor = colors[i];
  
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


// CROCHET BOY
let n = 0;
document.getElementById("crochetboy").addEventListener("click", function(){
  document.body.style.backgroundColor = "black";
  document.querySelectorAll("img")[n].src = "assets/crochetBoy.png";
  n++; 
});

