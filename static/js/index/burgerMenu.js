document.querySelector(".burger-btn").addEventListener("click", () => {
   document.querySelector(".burger-btn").classList.toggle("opened")
   document.querySelector(".burger-menu").classList.toggle("opened-menu")
   blackScreenAnim(document.querySelector(".burger-btn").classList.contains("opened"))
} ,false)

function blackScreenAnim(state){ // staye = true/false
   let screen = document.querySelector(".blackScreen")

   if(state){
      screen.style.display = "flex"
      screen.style.opacity = 0
      setTimeout(()=>{screen.style.opacity = 1},0)
   }
   else{
      screen.style.opacity = 0
      setTimeout(()=>{screen.style.display = "none"},200)
   }
}