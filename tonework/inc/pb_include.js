var include = {
  meta: function () {
    document.write('<meta charset="UTF-8">');
    document.write('<meta http-equiv="X-UA-Compatible" content="IE=edge">');
    document.write(
      '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
    );
  },
  scripts: function () {
    document.write('<script src="../resources/js/jquery-3.6.0.min.js"></script>');
    document.write('<script src="../resources/js/swiper.min.js"></script>');
    document.write('<script src="../resources/js/jquery-ui.min.js"></script>');
    document.write(
      '<script src="../resources/js/scrollmagic/ScrollMagic.js"></script>'
    );
    document.write(
      '<script src="../resources/js/scrollmagic/plugins/debug.addIndicators.js"></script>'
    );
    document.write(
      '<script src="../resources/js/scrollmagic/plugins/TweenMax.min.js"></script>'
    );
    document.write(
      '<script src="../resources/js/scrollmagic/plugins/animation.gsap.js"></script>'
    );
    document.write('<script src="../resources/js/common.js"></script>');
  },
  styles: function () {
    document.write(
      '<link rel="stylesheet" href="https://use.typekit.net/zjv6udh.css"></link>'
    );
    document.write('<link rel="stylesheet" href="../resources/css/font.css">');
    document.write('<link rel="stylesheet" href="../resources/css/style.css">');
    document.write(
      '<link rel="stylesheet" href="../resources/css/swiper.min.css">'
    );
    document.write(
      '<link rel="stylesheet" href="../resources/css/jquery-ui.min.css">'
    );
    document.write(
      '<link rel="stylesheet" href="../resources/css/tonework_pc.css">'
    );
    document.write(
      '<link rel="stylesheet" href="../resources/css/tonework_tablet.css">'
    );
    document.write(
      '<link rel="stylesheet" href="../resources/css/tonework_mobile.css">'
    );
  },
  title: function () {
    document.write("<title>TONEWORK</title>");
  },
  // favicon: function () {
  //   document.write('<link rel="icon" type="image/png" href="/favicon.ico">');
  // },
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
      '<path class="cls-1" d="M750.75,2.37,721.91,81.6q-3,7.7-5,13.63t-3.65,11.16c-.13.42-.23.85-.36,1.27-.62-2.07-1.27-4.15-2-6.31-.93-2.63-2-5.56-3.17-8.79s-2.57-6.88-4.15-11L672.71,2.37H644.66L700,140.67h23.31L779,2.37Z" fill="#fff"/>'
    );
    document.write(
      '<path class="cls-1" d="M70.4,68.36h69.87a85.84,85.84,0,0,1-4,28.75,71.43,71.43,0,0,1-13,24,61.46,61.46,0,0,1-21.63,16.5q-12.95,6-29.34,6a77.68,77.68,0,0,1-28.84-5.24A67,67,0,0,1,5.33,100.56,77.08,77.08,0,0,1,0,71.52,75,75,0,0,1,5.43,42.58,66.61,66.61,0,0,1,43.76,5.14,79.75,79.75,0,0,1,72.71,0,78.36,78.36,0,0,1,97.4,3.66a65.78,65.78,0,0,1,19.85,10.47,63.85,63.85,0,0,1,14.92,16.49l-19,12.65A43.17,43.17,0,0,0,97.3,27.46q-10.17-5.92-24.59-5.92A48,48,0,0,0,48.4,27.76,46.78,46.78,0,0,0,31,45.15Q24.5,56.31,24.5,71.52q0,15,6.42,26.37a46.44,46.44,0,0,0,17.29,17.69,47.82,47.82,0,0,0,24.5,6.32,49.69,49.69,0,0,0,16.59-2.57A37.43,37.43,0,0,0,101.94,112a44.21,44.21,0,0,0,8.9-10.86,51.56,51.56,0,0,0,5.33-13H70.4Z" fill="#fff"/>'
    );
    document.write(
      '<path class="cls-1" d="M914.92,55.52h58.94a51,51,0,0,0-5.33-13,44.18,44.18,0,0,0-8.89-10.87A37.63,37.63,0,0,0,947,24.3a50,50,0,0,0-16.6-2.57,47.76,47.76,0,0,0-24.5,6.33,46.41,46.41,0,0,0-17.29,17.68q-6.42,11.35-6.42,26.38,0,15.21,6.52,26.37a46.88,46.88,0,0,0,17.39,17.39,48.08,48.08,0,0,0,24.3,6.22q14.42,0,24.6-5.93a43.12,43.12,0,0,0,15.9-15.8l19,12.64A64.24,64.24,0,0,1,975,129.51,66,66,0,0,1,955.1,140a78.38,78.38,0,0,1-24.7,3.66,79.87,79.87,0,0,1-28.94-5.14,66.61,66.61,0,0,1-38.33-37.44,74.89,74.89,0,0,1-5.43-28.94A77,77,0,0,1,863,43.07,67,67,0,0,1,901.16,5.24,77.72,77.72,0,0,1,930,0q16.39,0,29.34,6A61.29,61.29,0,0,1,981,22.53a71.34,71.34,0,0,1,13,24,86.32,86.32,0,0,1,4,28.75H914.92Z" fill="#fff"/>'
    );
    document.write(
      '<path class="cls-1" d="M311.76,140.67h28.05l-39-55A49.78,49.78,0,0,0,308.1,83a40.67,40.67,0,0,0,17.29-15q6.12-9.67,6.12-22.72t-6.12-22.62A40.91,40.91,0,0,0,308.1,7.71q-11.16-5.34-26.18-5.34H239.25v138.3h23.31V88.31H276.8ZM262.56,22.52h18.38a33.17,33.17,0,0,1,13.93,2.77,21.84,21.84,0,0,1,9.38,7.9,22.63,22.63,0,0,1,3.36,12.65,22.72,22.72,0,0,1-3.36,12.54,21.52,21.52,0,0,1-9.38,8,33,33,0,0,1-13.93,2.77H262.56Z" fill="#fff"/>'
    );
    document.write(
      '<path class="cls-1" d="M429.31,42.87a66.52,66.52,0,0,1,15.11-22.62A70,70,0,0,1,467.34,5.33a78.86,78.86,0,0,1,57,0,70.34,70.34,0,0,1,22.82,14.92,66.81,66.81,0,0,1,15.11,22.62,75,75,0,0,1,5.33,28.65,75.9,75.9,0,0,1-5.33,28.65,68,68,0,0,1-15,22.92,69.43,69.43,0,0,1-22.81,15.11,78.43,78.43,0,0,1-57.4,0,67.32,67.32,0,0,1-37.73-38A75.9,75.9,0,0,1,424,71.52,75,75,0,0,1,429.31,42.87Zm25.38,54a44.39,44.39,0,0,0,16.7,17.48,50.07,50.07,0,0,0,48.7,0,44.68,44.68,0,0,0,16.59-17.48,52.57,52.57,0,0,0,6-25.39,53.24,53.24,0,0,0-5.93-25.39,44,44,0,0,0-16.49-17.48q-10.57-6.33-24.6-6.32a46.69,46.69,0,0,0-24.3,6.32,44.46,44.46,0,0,0-16.7,17.48,52.71,52.71,0,0,0-6,25.39A52.68,52.68,0,0,0,454.69,96.91Z" fill="#fff"/></g></g></svg>'
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
  quickBtn: function () {
    document.write('<div class="quick_btn">');
    document.write(
      '<button type="button" class="quick_btn_top" onclick="go_top();">맨 위로 바로가기</button>'
    );
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
};
