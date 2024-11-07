function createNav(){
   document.querySelector("nav").innerHTML = 
`
   <div class="content bound">
         <ul class="links">
            <li><a href="./index.html#doctors">Врачи</a></li>
            <li><a href="./index.html#hospitals">Клиники</a></li>
            <li><a href="./rating.html">О рейтинге</a></li>
            <li><a href="">Партнеры</a></li>
         </ul>
   
         <div class="burger-btn">
            <span></span>
            <span></span>
            <span></span>
         </div>
   
         <div class="burger-menu">
            <ul class="burger-links">
               <li><a href="./index.html#doctors">Врачи</a></li>
               <li><a href="./index.html#hospitals">Клиники</a></li>
               <li><a href="./rating.html">О рейтинге</a></li>
               <li><a href="">Партнеры</a></li>
            </ul>
         </div>
         <div class="blackScreen"></div>
   
         <div class="info">
            <div class="location">
               <img src="public/icons/nav/Vector.svg" alt="location">
               <a>Санкт-Петербург</a>
            </div>
            <div class="primary-btn">
               Оставить заявку
            </div>
         </div>
   </div>
`
}

function burgerMenu(){
   document.querySelector("nav .burger-btn").addEventListener("click", () => {
      document.querySelector("nav .burger-btn").classList.toggle("opened")
      document.querySelector("nav .burger-menu").classList.toggle("opened-menu")
   
      blackScreenAnim(document.querySelector("nav .burger-btn").classList.contains("opened"))
   } ,false)
   
   function blackScreenAnim(state){ // staye = true/false
      let screen = document.querySelector("nav .blackScreen")
   
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
}

export {createNav, burgerMenu}