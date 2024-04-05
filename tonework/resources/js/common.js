$(document).ready(function(){
  
  //스크롤시 로고 변형
  const tl0 = gsap.timeline();
  tl0.to(".main header .logo", { position: 'absolute', x:0, y:0, width:240, height:30}); 
  ScrollTrigger.create({
    animation: tl0,
    trigger: ".section01",
    start: "top+=500px center",
    end: "bottom-=100px center",
    scrub: true,
    markers: true,
  })


  
  // 메인 비주얼 슬라이드
  var mainSwiper = new Swiper(".main_swiper", {
    slidesPerView: 1,
    simulateTouch: true,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    preloadImages: true,
    updateOnImagesReady: true,
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-20%", 0, -1],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: "true",
      type: "bullets",
      renderBullet: function (index, className) {
        return ('<span class="' + className + '">' +"<i></i>" + "<b></b>" + "</span>"
        );
      },
    },
  });



  
  //메인 바이 미, 톤 링커 슬라이드
  var bymeSwiper = new Swiper(".byme_swiper", {
    slidesPerView: 1,
    direction: "vertical",
    simulateTouch: true,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    allowTouchMove : true,
    observer:true,
    observeParents:true,
  });

  //메인 with 톤워크 슬라이드
  var withSwiper = new Swiper(".with_swiper", {
    slidesPerView: 4,
    speed: 1000,
    spaceBetween:8,
    loop: false,
    simulateTouch: true,
    allowTouchMove : true,
    observer:true,
    observeParents:true,
  });

  // 길이 구하기
  // var cl = document.querySelector(".brd_ani_line03");
  // function circleLine(el) {
  //   var line = el.getTotalLength();
  //   el.style.strokeDasharray = line;
  //   el.style.strokeDashoffset = line;

  //   console.log(line)
  // }


const tl1 = gsap.timeline();
tl1.to(".brd_ani_line01", { strokeDashoffset: 0,}); 
ScrollTrigger.create({
  animation: tl1,
  trigger: ".step_01",
  start: "top+=100px center",
  end: "bottom-=100px center",
  scrub: 1,
  markers: true,
  toggleClass:{targets:'.number.number01',className:'active'},
})

const tl2 = gsap.timeline();
tl2.to(".brd_ani_line02", { strokeDashoffset: 0,});
ScrollTrigger.create({
  animation: tl2,
  trigger: ".step_02",
  start: "top+=100px center",
  end: "bottom-=100px center",
  scrub: 1,
  markers: true,
  toggleClass:{targets:'.number.number02',className:'active'},
})

const tl3 = gsap.timeline();
tl3.to(".brd_ani_line03", { strokeDashoffset: 0,});
ScrollTrigger.create({
  animation: tl3,
  trigger: ".step_03",
  start: "top+=100px center",
  end: "bottom-=100px center",
  scrub: 1,
  markers: true,
  toggleClass:{targets:'.number.number03',className:'active'},
})

ScrollTrigger.create({
  trigger: ".step_04",
  start: "top+=100px center",
  end: "bottom-=100px center",
  scrub: 1,
  markers: true,
  toggleClass:{targets:'.step_final',className:'active'},
})

const tl4 = gsap.timeline();
tl4.to(".ico_star", { rotation: 360,});
ScrollTrigger.create({
  animation: tl4,
  trigger: ".section03",
  start: "top-=200px center",
  end: "bottom-=100px center",
  scrub: true,
  markers: true,
})

});