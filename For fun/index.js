const colors = ["#001FCC", "#FD611F", "#05A556", "#111111", "#E0B507", "#E7DDCC", "#CFCAD6" ]

i = 0; 
document.getElementById("h1").addEventListener("click", function(){
    document.body.style.color = colors[i];
  
    i = (i + 1) % colors.length;
    
     // === 

    // i ++ ; 
    // if (i >= colors.length) {
    //   i = 0
    // }
});




