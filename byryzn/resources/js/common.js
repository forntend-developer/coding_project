$(document).ready(function(){

    // �좎쭨 怨꾩궛
var now = new Date();
var dd = now.getDate();
var mm = now.getMonth()+1;
var yyyy = now.getFullYear();
var today = '';

if(dd<10) { dd='0'+dd } 
if(mm<10) { mm='0'+mm }

today = yyyy+'-'+mm+'-'+dd;

  var scrollObj = window.Scrollbar.init(document.querySelector('#scrollCont'),{ damping: 0.1, thumbMinSize:100, speed:0.01});

  $(document).on('click','.goTop',function(e){
      e.preventDefault();

      scrollObj.scrollTo(0, 0, 1000);
  })

  // GSAP �ㅽ겕濡ㅽ듃由ш굅 �몄텧
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

  ScrollTrigger.scrollerProxy('#scrollCont',{
    scrollTop: function(value) {
      if (arguments.length) {
          scrollObj.scrollTop = value;
      }
      return scrollObj.scrollTop;
    }
  });
 
  ScrollTrigger.defaults({scroller: document.querySelector('#scrollCont')});
  // SS �뚮윭洹몄씤�� Y異뺤씠 �대룞�� �뚮쭏�� 諛쒖깮�섎뒗 �대깽�� 由ъ뒪�덉엯�덈떎.
  
  var prevScrollPos = $(window).scrollTop();
  scrollObj.addListener(function(){
    var _this = this;
    let sec01 = Math.floor($('#sec01Scroll').offset().top);
    let sec03 = Math.floor($('#sec03scroll').offset().top);
    let sec04 = Math.floor($('#sec04').offset().top);
    let sec06 = Math.floor($('#sec06').offset().top + 160);
    let sec07 = Math.floor($('#sec07').offset().top);

      ScrollTrigger.update();
      if(_this.offset.y > 100){
          $('.goTop').fadeIn();
        } else{
          $('.goTop').fadeOut();
        }
        
      if(_this.offset.y < prevScrollPos){
        $('#header').fadeIn(500);
      } else {
        $('#header').fadeOut(500);
      }
      prevScrollPos = _this.offset.y;
      // console.log(prevScrollPos)

      if(sec01 <= 0){
        $('.gnb li:nth-child(1)').addClass('on');
        $('.gnb li:nth-child(1)').siblings().removeClass('on');
      } 
      if(sec03 <= 0){
        $('.gnb li:nth-child(2)').addClass('on');
        $('.gnb li:nth-child(2)').siblings().removeClass('on');
      }
      if(sec04 <= 0){
        $('.gnb li:nth-child(3)').addClass('on');
        $('.gnb li:nth-child(3)').siblings().removeClass('on');
      }
      if(sec07 <= 0){
        $('.gnb li:nth-child(4)').addClass('on');
        $('.gnb li:nth-child(4)').siblings().removeClass('on');
        
      } 

      if(sec06 <= 0){
        $('#FloatingBtn').addClass('on');
      } else {
        $('#FloatingBtn').removeClass('on');
      }
  });

  
  $('.gnb li a, .FloatingBtn').on('click', function(e){
		e.preventDefault();

		var $target = $($(this).attr('href'));
		var targetYpos = '';
    targetYpos = $target.position().top;
    $(this).parent('li').addClass('on');
    $(this).parent('li').siblings('li').removeClass('on');
    
    scrollObj.scrollTo(0, targetYpos, 3000);
	});

  if(today > '2024-05-07'){ // 5/8�� 遺��� �곸슜
    $('#secMain').css('display','block');
    $('#sec01 .logo').css('display', 'none');
    $('video').trigger('play');
    // 泥섏쓬 �쒖옉 �좊땲硫붿씠��
    setTimeout(function(){
      $('.videoBox').addClass('on');
      setTimeout(() => {
        $('#secMain .scroll, #secMain .sound').removeClass('on');
        $('#FloatingBtn').removeClass('on');
        $('.noScroll').remove();
      },2000)
    },1000)
  
    // sec01 �좊땲硫붿씠��
    gsap.timeline({
      scrollTrigger: {
          trigger: "#sec01",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin : true
        }
      })
      .fromTo("#sec01 .txt01", {opacity:0, yPercent:30}, { opacity: 1, yPercent: 0, ease: 'none', duration: 2,},0)
      .fromTo("#sec01 .txtBox01", {opacity:0, yPercent:30}, { opacity: 1, yPercent: 0, ease: 'none', duration: 2 },1)
      .fromTo("#sec01 .txtBox02", {opacity:0, yPercent:30}, { opacity: 1, yPercent: 0, ease: 'none', duration: 2 },2)
      .fromTo("#sec01 .txt02", {opacity:0, yPercent:30}, { opacity: 1, yPercent: 0, ease: 'none', duration: 2 },3)
      .fromTo("#sec01 .txt02 .line", {opacity:0, height:0}, { opacity: 1, height: 100 + 'vh', ease: 'none', duration: 2},4)
    } else { // 5/7�쇨퉴吏� �곸슜
      $('#secMain').css('display','none');
      $('#sec01 .logo').css('display', 'block');
      setTimeout(() => {
        // $('.scroll').removeClass('on');
        $('#FloatingBtn').removeClass('on');
        $('.noScroll').remove();
      },500)
  
      gsap.to('#sec01 .txt01', {//�ㅽ뻾�쒗궗寃껊뱾
        y:0,
        opacity: 1,
        delay:0.5,
        duration: 0.5,
        ease: 'none',
        onComplete: function () {
          gsap.to('#sec01 .txtBox01', {//�ㅽ뻾�쒗궗寃껊뱾
              y:0,
              opacity: 1,
              duration: 1,
          }, 1);
          gsap.to('#sec01 .txtBox02', {//�ㅽ뻾�쒗궗寃껊뱾
            y:0,
            delay:0.8,
            opacity: 1,
            duration: 1,
          },1.1);
          gsap.to('#sec01 .txt02', {//�ㅽ뻾�쒗궗寃껊뱾
            y:0,
            delay:1.6,
            opacity: 1,
            duration: 1,
          },1.2);
          gsap.to('#sec01 .txt02 .line', {//�ㅽ뻾�쒗궗寃껊뱾
            height:100 + 'vh',
            delay:2,
            opacity: 1,
            duration: 2,
          },1.3);
          
        }
      });
    }


// �숈쁺�� 蹂�寃� 諛� �띿뒪�� �꾩튂 蹂�寃�
gsap.timeline({
scrollTrigger: {
    trigger: "#sec02",
    start: "top top",
    end: "200%",
    scrub: 0.8,
    pin: true,
  }
})
.fromTo("#sec02 .videoBox", {width:100 + '%'}, { width: 50 + '%', ease: 'none', duration: 1},0)
.fromTo("#sec02 .rightBox .tit01", {opacity:0, yPercent:50}, { opacity: 1, yPercent: 0, ease: 'none', duration: 0.5 },1)
.fromTo("#sec02 .rightBox .tit02", {opacity:0, yPercent:50}, { opacity: 1, yPercent: 0, ease: 'none', duration: 0.5 },2)
.fromTo("#sec02 .rightBox .tit03", {opacity:0, yPercent:50}, { opacity: 1, yPercent: 0, ease: 'none', duration: 0.5 },3)

// �띿뒪�� �몄텧
gsap.timeline({
  scrollTrigger: {
    trigger: "#sec03",
    start: "top top",
    end: "100%",
    scrub: 1,
    pin: true,
  }
  })
.fromTo("#sec03 .right .imgBg", {opacity:0}, { opacity: 1, ease: 'none', duration: 1 },0)
.fromTo("#sec03 .left .txt01", {opacity:0, yPercent:50}, { opacity: 1, yPercent: 0, ease: 'none', duration: 1 },1)
.fromTo("#sec03 .left .txt02", {opacity:0, yPercent:50}, { opacity: 1, yPercent: 0, ease: 'none', duration: 1 },2)

gsap.timeline({
  scrollTrigger: {
    trigger: "#sec04",
    start: "-60% top",
    end: "50% bottom",
    scrub: 1,
  }
  })
.fromTo("#sec04 .tit", {opacity:0, yPercent:50}, { opacity: 1, yPercent:0, ease: 'none', duration: 2 },0)

// �ㅻⅨ履쎌뿉�� �쇱そ�쇰줈 �대룞�섎㈃�� �띿뒪�� 蹂�寃�
gsap.timeline({
    scrollTrigger: {
        trigger: "#sec05",
        start: "top top",
        end: "400%",
        scrub: 2,
        pin:true,
    }
})

  .fromTo("#sec05 .contWrap .pdBox01", { xPercent : 0, opacity : 1}, {opacity : 1,  xPercent : -91 , ease: 'none', duration: 1 },0)
  .fromTo("#sec05 .contWrap .textBox01", { opacity : 0}, {  opacity : 1 , ease: 'none', duration: 0 },1)
  .fromTo("#sec05 .contWrap .pdBox01", { xPercent : -91}, {  xPercent : -257 , ease: 'none', duration: 1 },1.1)

  .fromTo("#sec05 .contWrap .pdBox02", { xPercent : 43, opacity: 1, }, {opacity:1, xPercent : -143 , ease: 'none', duration: 1 },2)
  .fromTo("#sec05 .contWrap .textBox01", { opacity : 1}, {  opacity : 0 , ease: 'none', duration: 1 },2.1)
  .fromTo("#sec05 .contWrap .textBox02", { opacity : 0}, {  opacity : 1 , ease: 'none', duration: 0.5 },3)
  .fromTo("#sec05 .contWrap .pdBox02", { xPercent : -143, opacity:1}, {opacity:1, xPercent : -331 , ease: 'none', duration: 1 },3.1)

  .fromTo("#sec05 .contWrap .pdBox03", { xPercent : 0, opacity: 1}, {opacity:1, xPercent : -282 , ease: 'none', duration: 1 },4)
  .fromTo("#sec05 .contWrap .textBox02", { opacity : 1}, {  opacity : 0 , ease: 'none', duration: 1 },4.1)
  .fromTo("#sec05 .contWrap .textBox03", { opacity : 0}, {  opacity : 1 , ease: 'none', duration: 0.5 },5)
  .fromTo("#sec05 .contWrap .pdBox03", { xPercent : -282, opacity:1}, {opacity:1, xPercent : -574 , ease: 'none', duration: 1 },5.1)


  gsap.timeline({
    scrollTrigger: {
      trigger: "#sec06",
      start: "-50% top",
      end: "bottom bottom",
      scrub: 1,
    }
    })
  .fromTo("#sec06 .tit01", {opacity:0, yPercent:50}, { opacity: 1, yPercent:0, ease: 'none', duration: 1},0)
  .fromTo("#sec06 .tit02", {opacity:0, yPercent:50}, { opacity: 1, yPercent:0, ease: 'none', duration: 1},1)
  .fromTo("#sec06 .tit03", {opacity:0, yPercent:50}, { opacity: 1, yPercent:0, ease: 'none', duration: 1},2)

})