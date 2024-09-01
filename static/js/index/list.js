{ // hospitals
   let hosCards = [
      {
         order: 1,
         name: "Конфиденция",
         text: "Чайковского, 5/10",
         rating: "90",
         src: "./public/icons/index/list/hospital/1.png",
      },
      {
         order: 2,
         name: "Белая Радуга",
         text: "Котельническая набережная, 25с1",
         rating: "85",
         src: "./public/icons/index/list/hospital/2.png",
      },
      {
         order: 3,
         name: "Beauty Line",
         text: "Никольская, 10",
         rating: "85",
         src: "./public/icons/index/list/hospital/3.png",
      },
      {
         order: 4,
         name: "Belgravia Dental Studio",
         text: "Молодогвардейская, 2к1",
         rating: "85",
         src: "./public/icons/index/list/hospital/4.png",
      },
      {
         order: 5,
         name: "Agami Center",
         text: "Советской Армии, 17/52",
         rating: "85",
         src: "./public/icons/index/list/hospital/5.png",
      },
   ]
   
   hosCards.forEach((el, index) => {
      hosCards[index] = `
      <div class="card">
         <div class="info">
            <div class="number">
               <p>${el.order} МЕСТО</p>
            </div>
            <div class="text">
               <h3>${el.name}</h3>
               <p>${el.text}</p>
            </div>
            <p class="rating"> ${el.rating} из 100 баллов </p>
         </div>
         <div class="icon">
            <img src="${el.src}" alt="icon">
         </div>
   
         <div class="seeMore">
            <h3>Подробнее о клинике →</h3>
         </div>
      </div>
      `
   })
   hosCards.forEach(el => {
      document.querySelector(".listBlock .hospitals .cards").innerHTML += el
   })
}

{  //doctors
   let cards = [
      {
         order: 1,
         name: "Анастасия Вячеславовна Иванова",
         rating: "90",
         src: "./public/icons/index/list/doctor/1.png",
      },
      {
         order: 2,
         name: "Анастасия Вячеславовна Иванова",
         rating: "85",
         src: "./public/icons/index/list/doctor/2.png",
      },
      {
         order: 3,
         name: "Анастасия Вячеславовна Иванова",
         rating: "80",
         src: "./public/icons/index/list/doctor/3.png",
      },
      {
         order: 4,
         name: "Анастасия Вячеславовна Иванова",
         rating: "75",
         src: "./public/icons/index/list/doctor/4.png",
      },
      {
         order: 5,
         name: "Анастасия Вячеславовна Иванова",
         rating: "70",
         src: "./public/icons/index/list/doctor/5.png",
      },
   ]
   
   cards.forEach((el, index) => {
      cards[index] = `
      <div class="card">
         <div class="info">
            <div class="number">
               <p>${el.order} МЕСТО</p>
            </div>
            <div class="text">
               <h3>${el.name}</h3>
            </div>
            <p class="rating"> ${el.rating} из 100 баллов </p>
         </div>
         <div class="icon">
            <img src="${el.src}" alt="icon">
         </div>
   
         <div class="seeMore">
            <h3>Подробнее о враче →</h3>
         </div>
      </div>
      `
   })
   cards.forEach(el => {
      document.querySelector(".listBlock .doctors .cards").innerHTML += el
   })   
}