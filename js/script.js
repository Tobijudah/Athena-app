gsap.set(".container", {visibility:"visible"});

gsap.registerPlugin(ScrollTrigger);

mastertl = gsap.timeline()


onload = gsap.timeline()

onload.from('.blob', {
   delay: 0.5,
   duration: 2,
   opacity: 0,
   scale: 0,
   stagger: 0.25
})
.from('nav a', {
   duration: 0.5,
   y: -20,
   opacity: 0,
}, '-=2.5')
.from('#hero h1', {
   duration: 0.8,
   x: -50,
   opacity: 0
}, '-=1.75')
.from('#hero p', {
   duration: 0.8,
   x: -50,
   opacity: 0
}, '-=1.5')
.from('#hero form', {
   duration: 0.8,
   opacity: 0
}, '-=0.75')
.from('#hero .image img', {
   duration: 0.8,
   opacity: 0,
   x: 100
}, '-=1')
.from('#hero .image img', {
   duration: 1.75,
   y: 12.5,
   yoyo: true,
   repeat: -1,
   yoyoEase: true
})
.to('.blob', {
   duration: 4,
   x: "random(20, -20)",
   y: "random(20, -20)",
   z: "random(20, -20)",
   yoyo: true,
   repeat: -1,
   yoyoEase: true,
   stagger: 0.5
}, '-=2')



features = gsap.timeline({
   scrollTrigger: {
      trigger: "#features",
      start: "top 60%",
   }
})

features.from('#features h2', {
   duration: 1,
   opacity: 0
})
.from('#features video', {
   duration: 0.8,
   opacity: 0,
   y: 50
}, '-=0.75')
.from('#features .col .row-1', {
   duration: 0.75,
   opacity: 0,
   y: 50
}, '-=0.3')
.from('#features .col .row-2', {
   duration: 0.75,
   opacity: 0,
   y: 50
}, '-=0.5')



how = gsap.timeline()

how1 = gsap.timeline({
   scrollTrigger: {
      trigger: '#how .col-1',
      start: "top center",
   }
})

how.from('#how h2', {
   scrollTrigger: {
      trigger: '#how h2',
      start: 'top center'
   },
   duration: 3,
   opacity: 0
})

how1.from('#how .col-1 .image img', {
   duration: 1,
   x: +70,
   opacity: 0
}, '-=0.75')
.from('#how .col-1 .text', {
   duration: 0.8,
   x: -100,
   opacity: 0
}, '-=1')



how2 = gsap.timeline({
   scrollTrigger: {
      trigger: '#how .col-2',
      start: "top center",
   }
})

how2.from('#how .col-2 .image img', {
   duration: 0.8,
   x: -100,
   opacity: 0
})
.from('#how .col-2 .text', {
   duration: 1,
   x: +70,
   opacity: 0
}, '-=1')



how3 = gsap.timeline({
   scrollTrigger: {
      trigger: '#how .col-3',
      start: "top center",
   }
})

how3.from('#how .col-3 .image img', {
   duration: 0.8,
   x: +70,
   opacity: 0
})
.from('#how .col-3 .text', {
   duration: 1,
   x: -100,
   opacity: 0
}, '-=1')



how4 = gsap.timeline({
   scrollTrigger: {
      trigger: '#how .col-4',
      start: "top center",
   }
})

how4.from('#how .col-4 .image img', {
   duration: 0.8,
   x: -100,
   opacity: 0
})
.from('#how .col-4 .text', {
   duration: 1,
   x: +70,
   opacity: 0
}, '-=1')




availability = gsap.timeline({
   scrollTrigger: {
      trigger: "#availability",
      start: "top 50%",
   }
})

availability.from('#availability h2', {
   duration: 1,
   opacity: 0
})
.from('#availability .col', {
   duration: 1,
   opacity: 0,
   stagger: 0.2
}, '-=0.75')


form = gsap.timeline({
   scrollTrigger: {
      trigger: "#form",
      start: "top 70%",
   }
})

form.from('#form .form-box', {
   duration: 0.8,
   opacity: 0,
   y: 20
})


