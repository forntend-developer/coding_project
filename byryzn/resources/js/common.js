
if ('NodeList' in window && !NodeList.prototype.forEach) {
        
  NodeList.prototype.forEach = function (callback, thisArg) {
  thisArg = thisArg || window;
  for (let i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
      }
  };
}
/* 
document.onreadystatechange = function(e){
  if(document.readyState=="interactive"){
      var all = document.getElementsByTagName("*");
      for (var i=0, max=all.length; i < max; i++) 
      {
      set_ele(all[i]);
      }
  }
}

function check_element(ele){
  var all = document.getElementsByTagName("*");
  var totalele=all.length;
  var per_inc=100/all.length;

  if($(ele).on()){
      var prog_width=per_inc+Number(document.getElementById("progress_width").value);
      document.getElementById("progress_width").value=prog_width;
      $("#bar1").animate({width:prog_width+"%"},10,function(){
          if(document.getElementById("bar1").style.width=="100%"){
              $("#loading").fadeOut("slow");
              $('video').trigger('play');
              setTimeout(function(){
                  $('.video_box').addClass('on');
                  $('.kv_txt').each(function(idx){
                      let that = $(this);
                      setTimeout(function(){
                          that.animate({'left':0,'opacity':1},1000);
                          if(that.hasClass('kv_txt3') == true){
                              $('.kv_tit').addClass('on');
                              $('.kv_tit div.big_font').animate({'top':'0'},1000,function(){
                                  $('.noScroll').remove();
                                  $('#kvBox .scroll').removeClass('on');
                                  
                                  // kv �곸뿭
                                  gsap.timeline({
                                      scrollTrigger: {
                                          trigger: "#kvBox",
                                          start: "bottom 90%",
                                          end: "bottom 70%",
                                          scrub: 2,
                                      }
                                  })
                                  .fromTo('.kv_tit .mb_40',{top:'-4.3vw'},{top: '-1.3vw',ease: 'none', duration: 10 },0)
                                  .fromTo('.kv_tit .kv_txt1',{fontSize: '4.89vw', lineHeight: '4.89vw'},{fontSize: '2.9687vw', lineHeight: '2.9687vw',ease: 'none', duration: 10 },0)
                                  .fromTo('.kv_tit .kv_txt2',{fontSize: '4.89vw', lineHeight: '4.89vw'},{fontSize: '2.9687vw', lineHeight: '2.9687vw',ease: 'none', duration: 10 },0)
                                  .fromTo('.kv_tit .kv_txt3',{fontSize: '3.59vw', lineHeight: '3.59vw'},{fontSize: '2.1354vw', lineHeight: '2.1354vw',ease: 'none', duration: 10 },0)
                              });
                          }
                      },2000 * idx)
                  })
              },1000)
          }			
      });
  } else{
      set_ele(ele);
  }
}

function set_ele(set_element){
  check_element(set_element);
} */

$(document).ready(function(){
  
  //蹂묒썝 李얘린 �앹뾽
  const data = [
      { name: '泥�떞湲��섏떆�쇰�怨쇱쓽��', location: '�쒖슱 媛뺣궓援� �꾩궛��濡�81湲� 51 5痢� 湲��섏떆�쇰�怨쇱쓽��', number: '0507-1325-5257', mapUrl: 'https://naver.me/x8EUYrfm' },
      { name: '�몄씤�몄쓽��', location: '寃쎄린 �섏젙遺��� �됲솕濡� 540 (�섏젙遺���) 6痢�', number: '031-829-1004', mapUrl: 'https://naver.me/GgeuPjay' },
      { name: '365�ㅻ쭏�쇱쓽��', location: '寃쎄린 �붿꽦�� �숉깂��濡�1湲� 3 (�μ���) MJ�ㅽ�섏뼱 4痢�', number: '032-8055-8920', mapUrl: 'https://naver.me/GZjLKQHe' },
      { name: '諛붾줈洹몄쓽�� 源��댁젏', location: '寃쎈궓 源��댁떆 媛��쎈줈 19 (遺��먮룞, �꾨쫫�ㅼ슫 �댁슃 硫붾뵒而ъ꽱��) 3痢�', number: '055-724-3997', mapUrl: 'https://naver.me/FVbfJNwp' },
      { name: '誘명샇�섏썝', location: '寃쎈궓 �묒궛�� �숇㈃ 湲덉삤13湲� 20 (�앹궛由�, �쇳�鍮뚮뵫) 4痢�', number: '055-363-2575', mapUrl: 'https://naver.me/FKKOry5G' },
      { name: '諛붾줈洹몄쓽�� 留덉궛��', location: '寃쎈궓 李쎌썝�� 留덉궛�⑺룷援� �쇳샇濡� 49 (�고샇��) �닿굔鍮뚮뵫 2痢�', number: '055-715-6464', mapUrl: 'https://naver.me/xUE8nr14' },
      { name: '�섎━�섏쓽��', location: '寃쎈궓 李쎌썝�� �깆궛援� �곷궓濡� 126 (�곷궓��) 7痢�', number: '055-282-8005', mapUrl: 'https://naver.me/5izxrZWO' },
      { name: '�섏��몄긽�섏썝', location: '寃쎈궓 李쎌썝�� �깆궛援� �먯씠��濡� 678 (�곷궓��) 諛쒕㉧�� �쒖쓽�� 2痢�', number: '055-261-0105', mapUrl: 'https://naver.me/G2UsQX3G' },
      { name: '釉붾━鍮꾩쓽��(援щ�)', location: '寃쎈턿 援щ��� �몃룞媛��곕줈 14 (吏꾪룊��) 3痢�', number: '1833-7466', mapUrl: 'https://naver.me/I5cB0PpA' },
      { name: '�섏씤�먯쓽��', location: '��援� �숆뎄 �숇�濡�26湲� 6 (�좎쿇��, ��援� 硫붾━�댄듃 �명뀛) 2痢�', number: '053-746-9191', mapUrl: 'https://naver.me/I5o0j0W2' },
      { name: '諛붾줈洹몄쓽�� 寃쎌궛��', location: '��援� �섏꽦援� �ш뎄踰뚮�濡� 3206 (�좊ℓ��, 李쎌꽦鍮뚮뵫) 2痢�', number: '053-792-7797', mapUrl: 'https://naver.me/xwDQooQf' },
      { name: '湲��섎뱶�깊삎�멸낵', location: '��援� 以묎뎄 援�콈蹂댁긽濡� 630 (怨듯룊��, 硫뷀듃濡쒗���) 6痢�', number: '053-710-0103', mapUrl: 'https://naver.me/GdJiEmrf' },
      { name: '��援ы쁽���쇰쭏瑜댁쓽��', location: '��援� 以묎뎄 �ш뎄踰뚮�濡� 2077 (怨꾩궛��2媛�, �꾨�諛깊솕��) 9痢�', number: '053-245-3905', mapUrl: 'https://naver.me/FCbBZg7o' },
      { name: '�ν꽣�좎쫰�섏썝', location: '��援� 以묎뎄 以묒븰��濡� 366 (�뺤궛��) 諛섏썡�쇳듃�댄��� 4痢�', number: '053-426-0366', mapUrl: 'https://naver.me/Gi9sUZDQ' },
      { name: '�ъ쫰�꾩떆�섏썝', location: '遺��� 遺��곗쭊援� �숉룊濡� 83 (�밴컧��, 誘몃옒硫붾뵒移�) 6痢�', number: '051-804-8606', mapUrl: 'https://naver.me/5tjfB8I2' },
      { name: '諛붾줈洹몄쓽��', location: '遺��� 遺��곗쭊援� 以묒븰��濡�691踰덇만 9 (遺��꾨룞) 2痢�, 3痢�', number: '051-804-4433', mapUrl: 'https://naver.me/5GyRRijE' },
      { name: '�뷀띁�ㅽ듃�쇰�怨쇱쓽�� 遺��곗젏', location: '遺��� 遺곴뎄 湲덇끝��濡� 287 (�붾챸��, �쇳븳怨⑤뱺酉�) 3痢�, 7痢�', number: '051-929-2999', mapUrl: 'https://naver.me/5X9DANEE' },
      { name: '誘몄냼�덉쓽��', location: '遺��� 以묎뎄 援щ뜒濡� 40 (�⑦룷��2媛�) 12痢�', number: '051-257-0097', mapUrl: 'https://naver.me/GmF1vuP4' },
      { name: '�섎뒛�깊삎�멸낵', location: '遺��곌킅��떆 遺��곗쭊援� 遺��꾨룞 256-4踰덉� �먯씠�ㅻ찓�붿뭡���� 3痢�~10痢�', number: '051-806-0090', mapUrl: 'https://naver.me/G4rLvgiO' },
      { name: '由ъ썝�쇰�怨쇱쓽��', location: '�쒖슱 媛뺣궓援� �꾩궛��濡� 327 (�좎궗��) SGF泥�떞���� 8痢�', number: '02-543-0210', mapUrl: 'https://naver.me/FCb4dYm8' },
      { name: '�쇱뼱�섏쓽��', location: '�쒖슱 媛뺣궓援� 遊됱��щ줈 111 (�쇳쁽��) ES鍮뚮뵫 8痢�', number: '02-555-2121', mapUrl: 'https://naver.me/54Vk5ejp' },
      { name: '�꾨��ㅽ궓�섏썝', location: '�쒖슱 媛뺣궓援� 遊됱��щ줈38湲� 4 (��궪��) 2痢�', number: '02-771-7890', mapUrl: 'https://naver.me/FVcSmwf9' },
      { name: '由щ돱�쇱쓽��', location: '�쒖슱 媛뺣궓援� �좊쫱濡�157湲� 18 (�좎궗��) 4痢�', number: '02-512-8800', mapUrl: 'https://naver.me/FRDC2KgX' },
      { name: '�щ챸�쇰�怨쇱쓽��', location: '�쒖슱 媛뺣궓援� �뚰뿤��濡� 141 (��궪��)', number: '02-556-5522', mapUrl: 'https://naver.me/5B1vx1gz' },
      { name: '�곗씠酉곗쓽�� 媛뺤꽌諛쒖궛��', location: '�쒖슱 媛뺤꽌援� 媛뺤꽌濡� 399 (留덇끝��, 留덇끝�섏씠留덈（) 1痢�, 2痢�', number: '010-2767-1215', mapUrl: 'https://naver.me/Go57lasj' },
      { name: '�쇰쭏瑜댁쓽��(�쒖슱���낃뎄)', location: '�쒖슱 愿��낃뎄 愿��낅줈 203 (遊됱쿇��) 吏���1痢�, 4痢�, 5痢�', number: '02-883-8822', mapUrl: 'https://naver.me/5AmfqzDm' },
      { name: '�ㅼ븘濡쒗뵾遺�怨쇱쓽��(�몄썝)', location: '�쒖슱 �몄썝援� �명빐濡� 507 (�곴퀎��, ���곗눥�묐ぐ) 4痢�', number: '02-930-1500', mapUrl: 'https://naver.me/xOCmqnsG' },
      { name: '留묒쓣�꾩쓽��', location: '�쒖슱 �몄썝援� �명빐濡�81湲� 5-6 (�곴퀎��, �몄썝�ㅽ�섏뼱) 3痢�', number: '02-930-9302', mapUrl: 'https://naver.me/FqSjcEqF' },
      { name: '媛뺣궓�섏썝(�몄궛)', location: '�몄궛 以묎뎄 踰덉쁺濡� 566 (�⑥쇅��) 4痢�', number: '052-281-5583', mapUrl: 'https://naver.me/FiLodkHw' },
      { name: '�꾨씪�ㅽ궓�섏썝', location: '�몄쿇 �쒓뎄 泥�쭏濡�167踰덇만 24 (�뱁븯��, TK鍮뚮뵫) TK鍮뚮뵫 4痢�', number: '032-715-6075', mapUrl: 'https://naver.me/GLKAtMxG' },
      { name: '�곗쓽��(�쒖쿇)', location: '�꾨궓 �쒖쿇�� �뺤�濡� 39 (�뺤���) 3痢�', number: '061-721-5509', mapUrl: 'https://naver.me/5NdqSlY5' },
      { name: '�ㅻ툝�묒쓽��', location: '�꾨턿 �꾩＜�� �뺤쭊援� �몃퀝�쒕줈 10 (�≪쿇��2媛�) 2痢�', number: '063-717-7511', mapUrl: 'https://naver.me/Gc4wjcc6' },
      { name: '�ν꽣�먯씠移섏쓽��', location: '�꾨턿 �꾩＜�� �꾩궛援� �띿궛�⑤줈 50 (�⑥옄��2媛�) 3痢�', number: '063-236-2233', mapUrl: 'https://naver.me/5Q4s29uP' },
      { name: '�≪뒪�ㅽ븘�섏썝(泥�＜)', location: '異⑸턿 泥�＜�� �λ뜒援� 2�쒗솚濡� 1240 (媛뺤꽌��) MK���� 8痢�', number: '043-716-0123', mapUrl: 'https://naver.me/5qRAHKDa' }
  ];

  const container = $('#hospitalList');

  data.forEach(item => {
      const itemElement = $('<li>');
      itemElement.html(`
          <div class="left_box">
              <p class="hospital_name">${item.name}</p>
              <a class="map" href="${item.mapUrl}" target="_blank">吏��꾨줈 蹂닿린</a>
          </div>
          <div class="right_box">
              <p class="location">${item.location}</p>
              <p class="call">${item.number}</p>
          </div>
      `);
  
      container.append(itemElement);
  });

  $(document).on('click','.pop_open',function(){
      $('#popupLayer, #pop01').fadeIn(300);
  });
  $(document).on('click','.pop_closed',function(){
      $('#popupLayer, #pop01').fadeOut(300);
      $('#hospitalList').scrollTop(0);
  });

  $('.slide_cont').slick({
      arrows: true,
      infinite: false,
      speed: 800,
      centerMode: true,
      centerPadding: '0px',
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
      draggable : false,
      fade: true,
  })

  var currentSlide = $('.slide_cont').slick('slickCurrentSlide');
  $('#currentKey').text(currentSlide+1);

  $(document).on('click', '.slide_arr', function(e){
      e.preventDefault();
      var currentSlide = $('.slide_cont').slick('slickCurrentSlide');
      $('#currentKey').text(currentSlide+1);
  }) 
  
  var scrollObj = window.Scrollbar.init(document.querySelector('#scrollCont'),{ damping: 0.1, thumbMinSize:10, speed:0.01});

  $(document).on('click','.go_top',function(e){
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

  // SS �뚮윭洹몄씤�� Y異뺤씠 �대룞�� �뚮쭏�� 諛쒖깮�섎뒗 �대깽�� 由ъ뒪�덉엯�덈떎.
  scrollObj.addListener(function(e){
      var _this = this;

      ScrollTrigger.update();
      // console.log(_this);
      if(_this.offset.y > 100){
          $('#kvBox .scroll').addClass('on');
          $('#header').fadeOut();
          $('#goTop').fadeIn();
      } else{
          $('#kvBox .scroll').removeClass('on');
          $('#FloatingBtn').removeClass('on');
          $('#header').fadeIn();
          $('#goTop').fadeOut();
      }
  });

  $('video').trigger('play');
  setTimeout(function(){
      $('.video_box').addClass('on');
      $('.kv_txt').each(function(idx){
          let that = $(this);
          setTimeout(function(){
              that.animate({'left':0,'opacity':1},1000);
              if(that.hasClass('kv_txt3') == true){
                  $('.kv_tit').addClass('on');
                  $('.kv_tit div.big_font').animate({'top':'0'},1000,function(){
                      $('.noScroll').remove();
                      $('#kvBox .scroll').removeClass('on');
                      $('#FloatingBtn').removeClass('on');
                      // kv �곸뿭
                      gsap.timeline({
                          scrollTrigger: {
                              trigger: "#kvBox",
                              start: "bottom 90%",
                              end: "bottom 70%",
                              scrub: 2,
                          }
                      })
                      .fromTo('.kv_tit .mb_40',{top:'-4.3vw'},{top: '-1.3vw',ease: 'none', duration: 10 },0)
                      .fromTo('.kv_tit .kv_txt1',{fontSize: '4.89vw', lineHeight: '4.89vw'},{fontSize: '2.9687vw', lineHeight: '2.9687vw',ease: 'none', duration: 10 },0)
                      .fromTo('.kv_tit .kv_txt2',{fontSize: '4.89vw', lineHeight: '4.89vw'},{fontSize: '2.9687vw', lineHeight: '2.9687vw',ease: 'none', duration: 10 },0)
                      .fromTo('.kv_tit .kv_txt3',{fontSize: '3.59vw', lineHeight: '3.59vw'},{fontSize: '2.1354vw', lineHeight: '2.1354vw',ease: 'none', duration: 10 },0)
                  });
              }
          },2000 * idx)
      })
  },1000)
  // �ㅽ겕濡� �몃━嫄곌� �몄떇�댁빞�섎뒗 湲곕낯 �ㅽ겕濡� ���곸쓣 SS �뚮윭洹몄씤�쇰줈 蹂�寃쏀빀�덈떎.
  ScrollTrigger.defaults({ scroller: document.querySelector('#scrollCont') }); 
  
  gsap.timeline({
      scrollTrigger: {
          trigger: "#kvBox",
          start: "bottom 95%",
          endTrigger: "#kvBox",
          end: "bottom 85%",
          scrub: 0.5,
      }
  })
  .fromTo('.top_text',{y:'0%'},{y: '-50%',ease: 'none', duration: 5 },0)
  gsap.timeline({
      scrollTrigger: {
          trigger: "#kvBox",
          start: "bottom 100%",
          endTrigger: "#kvBox",
          end: "bottom += 2000",
          scrub: 0.5,
      }
  })
  .fromTo('.bg_video',{y:'0%'},{y: '-50%',ease: 'none', duration: 5 },0)
  
  gsap.timeline({
      scrollTrigger: {
          trigger: "#kvBox",
          start: "center 20%",
          end: "center 10%",
          scrub: 0.5,
      },
      opacity: 1,
  })
  .fromTo('.noborder_text',{opacity:0},{opacity:1,ease: 'none', duration: 2 },0)
  gsap.timeline({
      scrollTrigger: {
          trigger: "#kvBox",
          start: "center 20%",
          end: "center 10%",
          scrub: 0.5,
      },
      opacity: 1,
  })
  .fromTo('.border_text',{opacity:1},{opacity:0,ease: 'none', duration: 2 },0)

  // sec01 �곸뿭
  var tt1= gsap.timeline({
      scrollTrigger: {
          trigger: '#sec01',
          start: 'top 50%',
          endTrigger: '#sec01',
          end: 'top -=2000',
          scrub: 0.5,
      }
  })
  .fromTo(".top_text", { yPercent:0}, {  yPercent:250, ease: 'none', duration: 5 },0)
  .fromTo(".top_text .text1", {xPercent:0, }, { xPercent: -100,  ease: 'none', duration: 5 },1)
  .fromTo(".top_text .text2", {xPercent:0, }, { xPercent: 100,  ease: 'none', duration: 5 },1)
  .fromTo(".top_text .text3", {xPercent:0, }, { xPercent: 150,  ease: 'none', duration: 5 },1)

  var tt1= gsap.timeline({
      scrollTrigger: {
          trigger: '#sec01',
          start: 'top bottom',
          endTrigger: '#sec01',
          end: 'top -=2000',
          scrub: 0.5,
      }
  })
  .fromTo(".mid_text", {yPercent:0}, { yPercent: -100, ease: 'none', duration: 5 },1)
  .fromTo("p.img01", {yPercent:0}, { yPercent: -200, ease: 'none', duration: 4 },1)
  .fromTo("p.img02", {yPercent:0}, { yPercent: -150, ease: 'none', duration: 5 },1)
  .fromTo("p.img03", {yPercent:0}, { yPercent: -50, ease: 'none', duration: 2 },1)
  .fromTo("p.img04", {yPercent:0}, { yPercent: -300, ease: 'none', duration: 3 },1)

          
  // sec02 �곸뿭
  gsap.timeline({
      scrollTrigger: {
          trigger: "#sec02",
          start: "top 85%",
          end: "top 50%",
          scrub: 2,
      }
  })
  .fromTo("#sec02 .txt1", {opacity:1}, { opacity: 1, ease: 'none', duration: 2 },1)
  .fromTo("#sec02 .txt2", {y:'50%',opacity:0}, {y:'0%', opacity: 1, ease: 'none', duration: 2 },2)

  gsap.timeline({
      scrollTrigger: {
          trigger: "#sec02",
          start: "bottom 100%",
          end: "bottom -=1000",
          scrub: 0.1,
          pin: true
      }
  })
  .fromTo("#sec02 .circle_img img.cir_img2", {opacity:0}, { opacity: 1, ease: 'none', duration: 0.3 },0)
  .fromTo("#sec02 .circle_img img.cir_img3", {opacity:0}, { opacity: 1, ease: 'none', duration: 0.3 },1)
  .fromTo("#sec02 .circle_img img.cir_img4", {opacity:0}, { opacity: 1, ease: 'none', duration: 0.3 },2)
  .fromTo("#sec02 .yy_cont .cont_list_wrap", {y:0}, { y: '-27.0832vw', ease: 'none', duration: 2 },0)

  // sec03 �곸뿭
  gsap.timeline({
      scrollTrigger: {
          trigger: "#sec02",
          start: "bottom 40%",
          end: "bottom 20%",
          scrub: 1.2,
      }
  })
  .fromTo("#sec03 .bg", {xPercent:0 , yPercent : 0}, { xPercent:0 , yPercent : -35 , ease: 'none', duration: 3 },1)
  .fromTo("#sec03 .bg .bg_img", {width:'30%'}, {  width : '100%' , ease: 'none', duration: 3 },1)
  .fromTo("#sec03 .sec_tit p.txt1", {xPercent:0 }, { xPercent:0 , ease: 'none', duration: 3 },1)
  .fromTo("#sec03 .sec_tit p.txt2", {xPercent:0 }, { xPercent:-20 , ease: 'none', duration: 3 },1)
  .fromTo("#sec03 .sec_tit p.txt3", {xPercent:0 }, { xPercent:-40 , ease: 'none', duration: 3 },1)
  .fromTo("#sec03 .sec_tit p.small", {xPercent:0 }, { xPercent:-160 , ease: 'none', duration: 3 },1)
  
  gsap.timeline({
      scrollTrigger: {
          trigger: "#sec03",
          start: "top 0%",
          endTrigger: '#sec03',
          end: "top -=5500",
          scrub: 1,
          pin: true
      },
  })
  // .fromTo("#sec03 .sec_wrap .pd_info", { opacity : 1}, {  opacity : 1 , ease: 'none', duration: 1 },0)
  .fromTo("#sec03 .sec_wrap .pd_info", { yPercent : 0}, {  yPercent : -170 , ease: 'none', duration: 1 },0)
  .fromTo("#sec03 .sec_wrap .pd_box", { yPercent : 0}, {  yPercent : -120 , ease: 'none', duration: 1 },0)
  .fromTo("#sec03 .sec_wrap .sec_tit", { opacity : 1}, {  opacity : 0 , ease: 'none', duration: 0 },1)
  .fromTo("#sec03 .sec_wrap .pd_box", { yPercent : -120}, {  yPercent : -230 , ease: 'none', duration: 1 },1.1)

  gsap.timeline({
      scrollTrigger: {
          trigger: "#sec03",
          start: "top 0%",
          endTrigger: '#sec03',
          end: "top -=5500",
          scrub: 10,
      },
  }).fromTo("#sec03 .bg .bg_img", { yPercent : 0}, {  yPercent : -20 , ease: 'none', duration: 10 },0)
  
  gsap.timeline({
      scrollTrigger: {
          trigger: "#sec04",
          start: "top 50%",
          //end: "top 0%",
          pin:false,
          scrub: 0.8,
      }
  })
  .to("#byRyzn #sec04 .sec_wrap .sec_tit .small.text1",  { fontSize:'1.9791vw',lineHeight: '3.1vw',height:'3.1vw',xPercent : 28, top: '10vw' , ease: 'none' }, 0)
  .to("#byRyzn #sec04 .sec_wrap .sec_tit .small.text2",  { fontSize:'1.9791vw',lineHeight: '3.1vw',height:'3.1vw',xPercent : 23.5, top: '12.6vw' , ease: 'none' }, 0)
  .to("#byRyzn #sec04 .sec_wrap .sec_tit .small p span",  { top:'0vw',width: '0.4166vw',height : '0.4166vw',  ease: 'none' }, 0)
  .to("#byRyzn #sec04 .sec_wrap .ryzn_list1",  { y:'-29%',  ease: 'none' }, 0)
  .to("#byRyzn #sec04 .sec_wrap .ryzn_list2",  { y:'-32%',  ease: 'none' }, 0)

  .to('#title', {top: '98.07vw', ease: 'power3.inOut', duration: 1}, 0.5)      // �띿뒪�� �섏삤�� 紐⑥뀡
  .to('.cover', {height: 0, ease: 'none', duration: 1}, 1)
})