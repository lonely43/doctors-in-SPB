function createFooter(){
   document.querySelector("footer").innerHTML = 
   `
         <div class="list bound"">
            <div class="policy">
               <h3>© Top-ortodont.ru, 2022 г. </h3>
               <p>Все права защищены. Любое копирование материалов сайта запрещено вне зависимости от целей использования.</p>
            </div>

            <span class="anotherBlocks">
               <div class="rating">
                  <h3>РЕЙТИНГ</h3>
                  <div class="content">
                     <a href="./index.html#doctors">Врачи</a>
                     <a href="./index.html#hospitals">Клиники</a>
                  </div>
               </div>

               <div class="info">
                  <h3>ИНФОРМАЦИЯ</h3>
                  <div class="content">
                     <a href="./rating.html">О рейтинге</a>
                     <a href="">Партнеры</a>
                  </div>
               </div>

               <div class="contacts">
                  <h3>КОНТАКТЫ</h3>
                  <a href="mailto:top-ortodont@mail.ru">top-ortodont@mail.ru</a>
               </div>
            </span>
         </div>
   `
}

export default createFooter;