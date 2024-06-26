var baseURL = '../';
var include = {
	meta : function(){
		document.write('<meta charset="UTF-8">');
		document.write('<meta http-equiv="X-UA-Compatible" content="IE=edge">');
		document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
	},
  favicon: function () {
    document.write('<link rel="icon" type="image/png" href="'+baseURL+'/favicon.ico">');
  },
	styles : function(){
		document.write('<link rel="stylesheet" href="https://use.typekit.net/zjv6udh.css" type="text/css" />');
		document.write('<link rel="stylesheet" href="'+baseURL+'/resources/css/style.css" type="text/css" />');
		document.write('<link rel="stylesheet" href="'+baseURL+'/resources/css/swiper.min.css" type="text/css" />');
	},
  scripts: function () {
    document.write('<script src="'+baseURL+'/resources/js/jquery-3.6.0.min.js"></script>');
    document.write('<script src="'+baseURL+'/resources/js/swiper.min.js"></script>');
    document.write('<script src="'+baseURL+'/resources/js/jquery-ui.min.js"></script>');
    document.write(
      '<script src="'+baseURL+'/resources/js/scrollmagic/ScrollMagic.js"></script>'
    );
    document.write(
      '<script src="'+baseURL+'/resources/js/scrollmagic/plugins/debug.addIndicators.js"></script>'
    );
    document.write(
      '<script src="'+baseURL+'/resources/js/scrollmagic/plugins/TweenMax.min.js"></script>'
    );
    document.write(
      '<script src="'+baseURL+'/resources/js/scrollmagic/plugins/animation.gsap.js"></script>'
    );
    // custom js
    document.write('<script src="'+baseURL+'/resources/js/common.js"></script>');
  },
	header: function () {
    document.write('<div class="header_wrap">');
    document.write('<div class="logo_wrap">');
    document.write('<h1 class="logo">');
    document.write(
      '<svg id="logo_txt" xmlns="http://www.w3.org/2000/svg" width="1400" height="100%" viewBox="0 0 1400 175">'
    );
    document.write(
      '<rect id="base" width="1400" height="174.998" fill="none"/>'
    );
    document.write('<g id="logo">');
    document.write(
      '<path id="패스_1" data-name="패스 1" d="M142.967.526H20.072C12.265.526,9.814,3.2,7.807,9.667L0,31.748l3.123.225C9.591,16.806,15.836,3.2,33.234,3.2H54.646c5.351,0,15.611,1.119,15.611,7.14V163.121c0,6.022-11.375,6.468-16.728,7.135v2.677h55.984v-2.677c-5.576-.667-16.728-1.113-16.728-7.135V10.338c0-6.02,10.26-7.14,15.613-7.14h21.41c17.176,0,23.643,13.608,30.111,28.775l3.125-.225L155.234,9.667C153,3.2,150.773.526,142.967.526" transform="translate(0 0.592)" fill="#fff"/>'
    );
    document.write(
      '<path id="패스_2" data-name="패스 2" d="M170.594,0c-49.737,0-91,41.711-91,91,0,47.281,38.14,83.862,84.308,83.862,49.737,0,91-41.486,91-90.777C254.906,36.8,216.987,0,170.594,0m1.117,170.4c-46.168,0-67.8-46.393-67.8-87.206,0-35.91,16.726-78.732,59.1-78.732,46.168,0,67.582,45.276,67.582,86.314,0,35.908-16.284,79.624-58.884,79.624" transform="translate(89.484)" fill="#fff"/>'
    );
    document.write(
      '<path id="패스_3" data-name="패스 3" d="M294.442,3.791c5.576.892,15.834,1.338,15.834,7.36V151.443c0,8.7-1.784,12.716-6.022,12.716-5.8,0-11.6-13.162-15.834-21.86L234.887,32.786C221.506,5.354,211.026,0,201.21,0c-8.7,0-16.951,3.344-16.951,18.29v145.2c0,6.02-10.033,6.468-15.613,7.358v2.679h34.574v-2.679c-5.578-.89-15.838-1.338-15.838-7.358V23.2c0-8.253,1.563-12.713,6.022-12.713,5.8,0,11.6,13.162,15.838,21.856L262.77,141.852c13.382,27.434,23.866,32.785,33.677,32.785,8.7,0,16.951-3.344,16.951-18.285V10.93c.221-5.8,10.26-6.247,15.613-7.14V1.118h-34.57Z" transform="translate(189.595 0.002)" fill="#fff"/>'
    );
    document.write(
      '<path id="패스_4" data-name="패스 4" d="M336.474,170.256H305.253c-5.576,0-15.613-1.113-15.613-7.135v-76.5c1.572-5.349,7.966-9.461,14.2-9.045,6.976.467,12.24,2.715,18.863,4.482,13.974,3.726,23.184,4.408,31.45-6.615,1.13-1.5,1.82-3.324,1.306-3.709-1.056-.807-2.4.438-3.375,1.139-6.016,4.287-11.792,4.828-19.762,2.759-4.605-1.2-8.424-3.027-12.934-4.546-10.022-3.38-22.9-3.507-29.134,6.475-.1.17-.37.217-.616.253V10.338c0-6.02,10.037-7.137,15.613-7.137h26.984c17.179,0,28.1,13.606,34.572,28.773l2.455-.225L361.457,9.667C359.227,3.2,357,.526,349.19.526H251.5V3.2c5.576.671,15.613,1.117,15.613,7.137V163.121c0,6.022-10.037,6.468-15.613,7.135v2.677H353.426c7.806,0,10.039-2.677,12.269-9.145l7.807-22.081-2.454-.446c-6.466,15.392-17.4,29-34.574,29" transform="translate(282.741 0.592)" fill="#fff"/>'
    );
    document.write(
      '<path id="패스_5" data-name="패스 5" d="M515.695,3.041c3.562.446,15.831,1.559,14.942,7.135L500.749,150.915c-1.341,6.693-3.346,12.49-7.137,12.49-5.8,0-9.143-14.5-10.7-22.3L461.939,41.4c-4.682-21.856-11.821-30.78-22.3-30.78-7.8,0-13.608,5.134-17.174,21.189l-26.319,119.1c-1.339,6.693-3.344,12.49-7.134,12.49-5.8,0-9.147-14.5-10.712-22.3L350.868,10.4c-1.561-6.914,9.592-6.693,13.155-7.36V.59h-53.3V3.041c8.027.892,14.942,1.784,16.053,7.135l28.329,132.265c5.355,24.979,12.936,31.668,26.1,31.668,5.8,0,13.155-1.334,18.065-23.194L424.918,36.052c.89-4.24,2.9-9.37,6.466-9.37,3.122,0,5.13,4.238,7.362,14.721l21.408,101.039c5.355,25.2,12.715,31.668,25.652,31.668,6.02,0,13.6-1.334,18.287-23.194L533.978,10.4c1.565-6.022,10.264-6.468,16.061-7.36V.59H515.695Z" transform="translate(349.324 0.664)" fill="#fff"/>'
    );
    document.write(
      '<path id="패스_6" data-name="패스 6" d="M514.866.064c-49.739,0-91,41.711-91,91,0,47.281,38.137,83.862,84.309,83.862,49.737,0,91-41.486,91-90.777,0-47.285-37.915-84.087-84.308-84.087m1.118,170.4c-46.173,0-67.807-46.393-67.807-87.206,0-35.91,16.73-78.732,59.109-78.732,46.168,0,67.578,45.276,67.578,86.314,0,35.908-16.282,79.625-58.879,79.625" transform="translate(476.523 0.072)" fill="#fff"/>'
    );
    document.write(
      '<path id="패스_7" data-name="패스 7" d="M625.436,106.307c-13.162-20.072-41.784-17.172-37.994-24.758,4.684-8.474,47.138-15.388,47.138-44.83C634.58,9.283,614.286.589,572.349.589h-61.9V3.263c5.576.671,15.613,1.117,15.613,7.14V163.184c0,6.022-10.037,6.468-15.613,7.135V173H564.2v-2.679c-5.353-.667-15.612-1.113-15.612-7.135V10.4c0-5.8,18.635-7.14,23.988-7.14,22.749,0,39.479,8.478,39.479,38.587,0,20.741-19.7,26.763-26.617,35.241C577.63,86.682,598,95.378,602.683,103.185c6.468,10.708,5.338,31.9,5.338,47.956,0,13.6,1.339,21.856,18.736,21.856h27.375v-2.679c-26.765,0-14.646-42.822-28.7-64.011" transform="translate(573.855 0.662)" fill="#fff"/>'
    );
    document.write(
      '<path id="패스_8" data-name="패스 8" d="M621.387,163.185V10.4c0-6.02,10.262-7.14,15.613-7.14h2.009V.59H583.246V3.262c5.581.673,15.613,1.119,15.613,7.14V163.185c0,6.022-10.032,6.468-15.613,7.135V173h57.992V170.32h-.668c-5.8,0-19.184-1.559-19.184-7.135" transform="translate(655.7 0.664)" fill="#fff"/>'
    );
    document.write(
      '<path id="패스_9" data-name="패스 9" d="M691.145,161.846,642.214,92.48c-1.344-2.016-6.948-9.529-11.968-16.212a15.786,15.786,0,0,1,1.946-21.108l47.218-44.87c9.226-7.42,13.58-6.492,18.935-7.384V.59H659.477V2.905c3.993.637,10.385,1.406,13.695,3.8,1.867,1.349,1.6,3.781,1.209,4.1L614.573,67.216a17.92,17.92,0,0,0-2.26,23.889l49.836,69.624a9.712,9.712,0,0,1,1.785,4.461c0,3.571-5.353,4.238-10.929,4.909V173h62v-2.9c-5.8-.671-18.731-1.784-23.861-8.253" transform="translate(684.399 0.664)" fill="#fff"/>'
    );
    document.write("</g>");
    document.write("</svg>");
    document.write('<a href="" class="logo_link">home으로 바로가기</a>');
    document.write("</h1>");
    document.write("</div>");
    document.write('<div class="gnb">');
    document.write('<ul class="gnb_list">');
    document.write('<li class="depth_01">');
    document.write(
      '<a href="javascript:;" data-href="/html/brand_about.html" onclick="gnbListToggle(this);"><span>ABOUT US</span></a>'
    );
    document.write('<ul class="depth_02">');
    document.write('<li><a href="">브랜드 스토리</a></li>');
    document.write('<li><a href="">스토어</a></li>');
    document.write("</ul>");
    document.write("</li>");
    document.write('<li class="depth_01">');
    document.write(
      '<a href="javascript:;" data-href="/html/" onclick="gnbListToggle(this);"><span>DISCOVER YOUR TONE</span></a>'
    );
    document.write('<ul class="depth_02">');
    document.write(
      '<li><a href="/html/skin_tone.html#skinToneFinder" onclick="gnbAction();">톤워크 바이미</a></li>'
    );
    document.write(
      '<li><a href="/html/skin_tone.html#skinTonePicker" onclick="gnbAction();">톤링커</a></li>'
    );
    document.write(
      '<li><a href="/html/skin_tone.html#skinToneLinker2" onclick="gnbAction();">톤링커+</a></li>'
    );
    document.write("</ul>");
    document.write("</li>");
    document.write('<li class="depth_01">');
    document.write(
      '<a href="javascript:;" data-href="/html/product_list.html" onclick="gnbListToggle(this);"><span>PRODUCT</span></a>'
    );
    document.write('<ul class="depth_02">');
    document.write('<li class="mo"><a href="#">전체보기</a></li>');
    document.write('<li><a href="">페이스(Face)</a></li>');
    document.write('<li><a href="">립(LIP)</a></li>');
    document.write("</ul>");
    document.write("</li>");
    document.write('<li class="depth_01">');
    document.write(
      '<a href="javascript:;" data-href="/html/event_list.html" onclick="gnbListToggle(this);"><span>ISSUE</span></a>'
    );
    document.write('<ul class="depth_02">');
    document.write('<li><a href="">브랜드 이슈</a></li>');
    document.write('<li><a href="">당첨자 발표</a></li>');
    document.write("</ul>");
    document.write("</li>");
    document.write('<li class="depth_01">');
    document.write(
      '<a href="javascript:;" data-href="/html/news_list.html" onclick="gnbListToggle(this);"><span>COMMUNITY</span></a>'
    );
    document.write('<ul class="depth_02">');
    document.write('<li class="mo"><a href="">커뮤니티 홈</a></li>');
    document.write('<li><a href="">공지사항</a></li>');
    document.write('<li><a href="">FAQ</a></li>');
    document.write('<li><a href="">Q&A</a></li>');
    document.write('<li><a href="">Review</a></li>');
    document.write("</ul>");
    document.write("</li>");
    document.write("<!-- 모바일에서만 보여질 마이페이지 메뉴 -->");
    document.write('<li class="depth_01 mo_mypage">');
    document.write(
      '<a href="javascript:;" data-href="/html/mypage_home.html" onclick="gnbListToggle(this);"><span>MY PAGE</span></a>'
    );
    document.write('<ul class="depth_02">');
    document.write('<li><a href="">컬러 히스토리</a></li>');
    document.write('<li><a href="">어센틱컬러 리포트</a></li>');
    document.write('<li><a href="">문의내역</a></li>');
    document.write('<li><a href="">나의 리뷰</a></li>');
    document.write('<li><a href="">내정보</a></li>');
    document.write("</ul>");
    document.write("</li>");
    document.write("<!-- // 모바일에서만 보여질 마이페이지 메뉴 -->");
    document.write("</ul>");
    document.write('<div class="gnb_info">');
    document.write('<div class="depth_01">');
    document.write('<a href="javascript:;" class="gnb_info_my">');
    document.write('<span class="ico_26">회원정보</span>');
    document.write("</a>");
    document.write('<ul class="depth_02">');
    document.write("<!-- 로그인 상태 일 경우 -->");
    document.write(
      '<li class="my_page mo_menu"><a href="">컬러 히스토리</a></li>'
    );
    document.write('<li><a href="">어센틱컬러 리포트</a></li>');
    document.write('<li><a href="">문의내역</a></li>');
    document.write('<li><a href="">나의 리뷰</a></li>');
    document.write('<li><a href="">내 정보</a></li>');
    document.write('<li class="log_out mo_menu">');
    document.write('<a href="">로그아웃</a>');
    document.write("</li>");
    document.write("<!-- // 로그인 상태 일 경우 -->");
    document.write("<!-- 로그아웃 상태 일 경우 ");
    document.write('<li class="log_in mo_menu">');
    document.write('<a href="">로그인</a>');
    document.write("</li>");
    document.write("<!-- // 로그아웃 상태 일 경우 -->");
    document.write("</ul>");
    document.write("</div>");
    document.write('<div class="depth_01 lang_set">');
    document.write('<a href="" class="gnb_info_lang">');
    document.write('<span class="ico_26">언어설정</span>');
    document.write("</a>");
    document.write('<ul class="depth_02">');
    document.write('<li class="mo_menu">');
    document.write('<input type="radio" id="lang_ko" name="lang_set" checked>');
    document.write('<label for="lang_ko">KR</label>');
    document.write("</li>");
    document.write('<li class="mo_menu">');
    document.write('<input type="radio" id="lang_en" name="lang_set">');
    document.write('<label for="lang_en">EN</label>');
    document.write("</li>");
    document.write("</ul>");
    document.write("</div>");
    document.write('<span class="ico_16 arrow"></span>');
    document.write("</div>");
    document.write("</div>");
    document.write("<!-- 모바일 메뉴 활성화 버튼 -->");
    document.write(
      '<button type="button" class="btn_gnb_menu" onclick="gnbAction();">'
    );
    document.write('<span class="top"></span>');
    document.write('<span class="title">메뉴</span>');
    document.write('<span class="bottom"></span>');
    document.write("</button>");
    document.write("<!-- // 모바일 메뉴 활성화 버튼 -->");
    document.write("</div>");
  },
	 footer: function () {
    document.write('<div class="grid_wrap">');
    document.write("<!-- footer_top -->");
    document.write('<div class="footer_top">');
    document.write(
      '<button class="footer_toggle" onclick="m_footerToggle();">푸터 상세보기</button>'
    );
    document.write("<!-- footer_logo -->");
    document.write('<div class="footer_logo">');
    document.write(
      '<img src="../resources/images/common/logo_fotter.svg" alt="">'
    );
    document.write(
      '<img class="ico_star" src="../resources/images/icon/icon_34_star@2x.png" alt="">'
    );
    document.write("</div>");
    document.write("<!-- // footer_logo -->");
    document.write("<!-- site_map -->");
    document.write('<ul class="site_map">');
    document.write('<li class="item_box">');
    document.write("<dl>");
    document.write("<dt>");
    document.write('<a href="#">ABOUT US</a>');
    document.write("</dt>");
    document.write("<dd>");
    document.write('<ul class="depth">');
    document.write('<li><a href="#">브랜드 스토리</a></li>');
    document.write('<li><a href="#">스토어</a></li>');
    document.write("</ul>");
    document.write("</dd>");
    document.write("</dl>");
    document.write("</li>");
    document.write('<li class="item_box">');
    document.write("<dl>");
    document.write("<dt>");
    document.write('<a href="#">DISCOVER YOUR TONE</a>');
    document.write("</dt>");
    document.write("<dd>");
    document.write('<ul class="depth">');
    document.write(
      '<li><a href="/html/skin_tone.html#skinToneFinder">톤워크 바이미</a></li>'
    );
    document.write(
      '<li><a href="/html/skin_tone.html#skinTonePicker">톤링커</a></li>'
    );
    document.write(
      '<li><a href="/html/skin_tone.html#skinToneLinker2" onclick="gnbAction();">톤링커+</a></li>'
    );
    document.write("</ul>");
    document.write("</dd>");
    document.write("</dl>");
    document.write("</li>");
    document.write('<li class="item_box">');
    document.write("<dl>");
    document.write("<dt>");
    document.write('<a href="#">PRODUCTS</a>');
    document.write("</dt>");
    document.write("<dd>");
    document.write('<ul class="depth">');
    document.write('<li class="mo"><a href="#">전체보기</a></li>');
    document.write('<li><a href="#">페이스(Face)</a></li>');
    document.write('<li><a href="#">립(LIP)</a></li>');
    document.write("</ul>");
    document.write("</dd>");
    document.write("</dl>");
    document.write("</li>");
    document.write('<li class="item_box">');
    document.write("<dl>");
    document.write("<dt>");
    document.write('<a href="#">ISSUE</a>');
    document.write("</dt>");
    document.write("<dd>");
    document.write('<ul class="depth">');
    document.write('<li><a href="#">브랜드 이슈</a></li>');
    document.write('<li><a href="#">당첨자 발표</a></li>');
    document.write("</ul>");
    document.write("</dd>");
    document.write("</dl>");
    document.write("</li>");
    document.write('<li class="item_box">');
    document.write("<dl>");
    document.write("<dt>");
    document.write('<a href="#">COMMUNITY</a>');
    document.write("</dt>");
    document.write("<dd>");
    document.write('<ul class="depth">');
    document.write('<li class="mo"><a href="">커뮤니티 홈</a></li>');
    document.write('<li><a href="#">공지사항</a></li>');
    document.write('<li><a href="#">FAQ</a></li>');
    document.write('<li><a href="#">Q&A</a></li>');
    document.write('<li><a href="#">Review</a></li>');
    document.write("</ul>");
    document.write("</dd>");
    document.write("</dl>");
    document.write("</li>");
    document.write("</ul>");
    document.write("<!-- // site_map -->");
    document.write("</div>");
    document.write("<!-- // footer_top -->");
    document.write('<div class="footer_bottom">');
    document.write('<div class="footer_address">');
    document.write('<div class="company_info">');
    document.write('<p class="name">(주)아모레퍼시픽</p>');
    document.write('<div class="address">');
    document.write("<p>서울특별시 용산구 한강대로 100 (한강로2가 181)</p>");
    document.write(
      "<p>고객상담팀(수신자요금부담) 080-023-5454 (상담시간 월~금 : AM 09:00 ~ PM 06:00)</p>"
    );
    document.write("</div>");
    document.write("</div>");
    document.write('<div class="sns_link">');
    document.write('<a href="#" class="icon_facebook">페이스북 바로가기</a>');
    document.write('<a href="#" class="icon_youtube">유튜브 바로가기</a>');
    document.write('<a href="#" class="icon_instar">인스타그램 바로가기</a>');
    document.write("</div>");
    document.write("</div>");
    document.write('<div class="footer_util">');
    document.write('<ul class="util_m">');
    document.write('<li><a href="#">서비스이용약관</a></li>');
    document.write(
      '<li><a href="#"><strong>개인정보처리방침</strong></a></li>'
    );
    document.write('<li><a href="#">영상정보처리방침</a></li>');
    document.write('<li><a href="#" target="_blank">뷰티포인트</a></li>');
    document.write("</ul>");
    document.write(
      '<p class="copy_right">ⓒ AMOREPACIFIC CORPORATION. All rights reserved.</p>'
    );
    document.write("</div>");
    document.write("</div>");
    document.write("</div>");
  },
	quickBtn: function () {
    document.write('<div class="quick_btn">');
    document.write(
      '<button type="button" class="quick_btn_top" onclick="go_top();">맨 위로 바로가기</button>'
    );
    document.write("</div>");
  },
}