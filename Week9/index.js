// console.log("hello world")


meals = ["LIGA", "dinner", "brunch"]


for(i = 0; i < document.getElementsByClassName("meal").length; i++ ){ 
    console.log(meals[i]);  // just checking if it works 
    document.getElementsByClassName("meal")[i].innerHTML = "<h2>" + meals[i] + "</h2>"; // styled as an H2 
    document.getElementsByClassName("meal")[i].id = meals[i]; 
}