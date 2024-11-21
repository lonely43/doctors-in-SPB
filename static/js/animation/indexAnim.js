window.onload = () => {

gsap.registerPlugin(ScrollTrigger);

// land Block
gsap.fromTo(".land .title", {
   y: 60,
   opacity: 0,
   },
   {
      y: 0,
      opacity: 1,
      duration: 1.2
   })

gsap.fromTo(".land .line-first", {
      x: -520,
      opacity: 0,
   },
   {
      x: 0,
      opacity: 1,
      duration: 1.2
   })

gsap.fromTo(".land .line-second", {
      x: 900,
      opacity: 0,
   },
   {
      x: 0,
      opacity: 1,
      duration: 1.2
   })

gsap.fromTo(".land .icon", {
      opacity: 0,
      y: -150,
   },
   {
      y: "4rem",
      opacity: 1,
      duration: 1.2
   })

//lists
let h2s = gsap.utils.toArray(".listBlock h2")

h2s.forEach((el)=>{
   gsap.from(el, {
      opacity: 0,
      ease: "power4.out",
      scrollTrigger:{
         trigger: el,
         scrub: true,
         start: "center center",
      }
   })
})


let leftParts = gsap.utils.toArray(".listBlock .hospitals .card")

leftParts.forEach(el => {
   gsap.fromTo(el, {
      x: -200,
      opacity: 0
   },
   { 
      x: 0,
      opacity: 1,
      ease: "power4.out",
      scrollTrigger:{
         trigger: el,
         scrub: true,
         start: "top 65%",
      },
   })
});

let rightParts = gsap.utils.toArray(".listBlock .doctors .card")

rightParts.forEach(el => {
   gsap.fromTo(el, {
      x: 200,
      opacity: 0
   },
   { 
      x: 0,
      y: 0,
      opacity: 1,
      ease: "power4.out",
      scrollTrigger:{
         trigger: el,
         scrub: true,
         start: "top 65%",
      },
   })
});

let btns = gsap.utils.toArray(".listBlock button")
btns.forEach(el => {
   gsap.from(el, {
      y: -40,
      opacity: 0,
      ease: "power4.out",
      scrollTrigger:{
         trigger: el,
         scrub: true,
         start: "top 65%",
      },
   })
});
//end


//centerText
gsap.from(".centerText", {
   x: 100,
   opacity: 0,
   ease: "power4.out",
   scrollTrigger:{
      trigger: ".centerText",
      scrub: true,
      start: "top 80%",
   },
})

//des
gsap.from(".description .background .line1", {
   x: "-100%",
   opacity: 0,
   ease: "power4.out",
   scrollTrigger:{
      trigger: ".description .background .line1",
      scrub: true,
      start: "top 70%",
   },
})

gsap.from(".description .background .line2", {
   x: 100,
   opacity: 0,
   ease: "power4.out",
   scrollTrigger:{
      trigger: ".description .background .line2",
      scrub: true,
      start: "top 70%",
   },
})

gsap.from(".description .background .line3", {
   x: "-100%",
   opacity: 0,
   ease: "power4.out",
   scrollTrigger:{
      trigger: ".description .background .line3",
      scrub: true,
      start: "top 70%",
   },
})

gsap.from(".description .background .line4", {
   x: "100%",
   opacity: 0,
   ease: "power4.out",
   scrollTrigger:{
      trigger: ".description .background .line4",
      scrub: true,
      start: "top 70%",
   },
})

gsap.from(".description .content .firstBlock .title", {
   y: -50,
   opacity: 0,
   ease: "power4.out",
   scrollTrigger:{
      trigger: ".description .content .firstBlock .title",
      scrub: true,
      start: "top 70%",
   },
})

gsap.from(".description .content .firstBlock .info .text",{
   opacity: 0,
   ease: "power4.out",
   scrollTrigger:{
      trigger: ".description .content .firstBlock .info .text",
      scrub: true,
      start: "top 80%",
   },
})

gsap.from(".description .content .firstBlock .info .icon",{
   opacity: 0,
   x: 200,
   ease: "power4.out",
   scrollTrigger:{
      trigger: ".description .content .firstBlock .info .icon",
      scrub: true,
      start: "top 70%",
   },
})

gsap.from(".description .content .secondBlock .info .icon",{
   opacity: 0,
   x: -200,
   ease: "power4.out",
   scrollTrigger:{
      trigger: ".description .content .secondBlock .info .icon",
      scrub: true,
      start: "top 80%",
   },
})

gsap.from(".description .content .secondBlock .title", {
   y: -50,
   opacity: 0,
   ease: "power4.out",
   scrollTrigger:{
      trigger: ".description .content .secondBlock .title",
      scrub: true,
      start: "top 70%",
   },
})

gsap.from(".description .content .secondBlock .info .text",{
   opacity: 0,
   ease: "power4.out",
   scrollTrigger:{
      trigger: ".description .content .secondBlock .info .text",
      scrub: true,
      start: "top 80%",
   },
})

gsap.from(".description .content .cards .title",{
   x: 200,
   opacity: 0,
   ease: "power4.out",
   scrollTrigger:{
      trigger: ".description .content .cards .title",
      scrub: true,
      start: "top 70%",
   },
})

gsap.from(".description .content .cards .list",{
   x: -200,
   opacity: 0,
   ease: "power4.out",
   scrollTrigger:{
      trigger: ".description .content .cards .list",
      scrub: true,
      start: "top 80%",
   },
})

//expertise
gsap.from(".expertise .info .icon",{
   y: 50,
   opacity: 0,
   ease: "power4.out",
   scrollTrigger:{
      trigger: ".expertise .info .icon",
      scrub: true,
      start: "top 80%",
   },
})

gsap.from(".expertise .info .text",{
   x: 100,
   opacity: 0,
   ease: "power4.out",
   scrollTrigger:{
      trigger: ".expertise .info .text",
      scrub: true,
      start: "top 80%",
   },
})

gsap.from(".expertise .list .forDoctors",{
   x: -100,
   opacity: 0,
   ease: "power4.out",
   scrollTrigger:{
      trigger: ".expertise .list .forDoctors",
      scrub: true,
      start: "top 80%",
   },
})

gsap.from(".expertise .list .forHospitals",{
   x: 100,
   opacity: 0,
   ease: "power4.out",
   scrollTrigger:{
      trigger: ".expertise .list .forHospitals",
      scrub: true,
      start: "top 80%",
   },
})

gsap.from(".expertise .seeMore",{
   y: -50,
   opacity: 0,
   ease: "power4.out",
   scrollTrigger:{
      trigger: ".expertise .seeMore",
      scrub: true,
      start: "top bottom",
      end: "top bottom-100"
   },
})

}