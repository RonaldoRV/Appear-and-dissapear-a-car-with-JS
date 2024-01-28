
const hide = document.getElementById("Mybutton")
const car = document.getElementById("car")

hide.addEventListener("click", event =>{

    if(car.style.visibility === "hidden"){
        car.style.visibility = "visible";
        hide.textContent = "Hide"
    }
    else{
        car.style.visibility = "hidden"
        hide.textContent = "Show"

    }
})


 
