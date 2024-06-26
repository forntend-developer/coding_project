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
		document.write('<link rel="stylesheet" href="'+baseURL+'/resources/css/style.css" type="text/css" />');
	},
	scripts : function(){
    // library js
		document.write('<script src="'+baseURL+'/resources/js/lib/jquery-3.6.0.min.js"></script>');
		document.write('<script src="'+baseURL+'/resources/js/lib/jquery-ui.js"></script>');
		document.write('<script src="'+baseURL+'/resources/js/lib/swiper.min.js"></script>');
    document.write('<script src="'+baseURL+'/resources/js/lib/swiper-bundle.js"></script>');
		//document.write('<script src="'+baseURL+'/resources/js/lib/aos.min.js"></script>');
		//document.write('<script src="'+baseURL+'/resources/js/lib/scroll-out.min.js"></script>');
    // custom js
		document.write('<script src="'+baseURL+'/resources/js/common.js"></script>');
	},
	header : function(){
		document.write('<header class="header_wrap">');
		document.write('<div id="quick_link" class="user">');
		document.write('<div class="link_wrap">');
		document.write('<a href="#n" class="btn_lay_close ui-close"><span class="blind">close</span></a>');
		document.write('<div class="tit">Quick Link</div>');
		document.write('<div class="dep_cate">');
		document.write('<a href="#n">Prospective<br>Students</a>');
		document.write('<ul class="list">');
		document.write('<li><a href="#n">Admissions</a></li>');
		document.write('<li><a href="#n">News</a></li>');
		document.write('<li><a href="#n">Support</a></li>');
		document.write('<li><a href="#n">Contact</a></li>');
		document.write('<li><a href="#n">Visit Taejae</a></li>');
		document.write('</ul>');
		document.write('</div>');
		document.write('<div class="dep_cate">');
		document.write('<a href="#n">Students</a>');
		document.write('<ul class="list">');
		document.write('<li><a href="#n">Taejae Portal</a></li>');
		document.write('<li><a href="#n">Notice</a></li>');
		document.write('<li><a href="#n">News</a></li>');
		document.write('<li><a href="#n">Schools</a></li>');
		document.write('<li><a href="#n">Student Success</a></li>');
		document.write('<li><a href="#n">Metaverse</a></li>');
		document.write('<li><a href="#n">Digital Library</a></li>');
		document.write('</ul>');
		document.write('</div>');
		document.write('<div class="dep_cate">');
		document.write('<a href="#n">Faculty &<br>Staff</a>');
		document.write('<ul class="list">');
		document.write('<li><a href="#n">News</a></li>');
		document.write('<li><a href="#n">Notice</a></li>');
		document.write('<li><a href="#n">Schools</a></li>');
		document.write('<li><a href="#n">Student Success</a></li>');
		document.write('<li><a href="#n">Metaverse</a></li>');
		document.write('</ul>');
		document.write('</div>');
		document.write('<div class="dep_cate">');
		document.write('<a href="#n">Visitors</a>');
		document.write('<div class="list">');
		document.write('<li><a href="#n">Visit Taejae</a></li>');
		document.write('<li><a href="#n">Events</a></li>');
		document.write('<li><a href="#n">About Taejae</a></li>');
		document.write('<li><a href="#n">Taejae News</a></li>');
		document.write('</div>');
		document.write('</div>');
		document.write('</div>');
		document.write('</div>');
		document.write('<div class="gnb_new">');
		document.write('<nav>');
		document.write('<p class="logo"><a href="#home">home</a></p>');
		document.write('<ul class="gnb_menu">');
		document.write('<li class="depth_01">');
		document.write('<a href="javascript:;" data-href="#n" onclick="gnbListToggle(this);">About</a>');
		document.write('<ul class="depth_02 acco_list_wrap">');
		document.write('<li><a href="#n">About Taejae</a></li>');
		document.write('<li><a href="#n">Vision &amp; Mission</a></li>');
		document.write('<li><a href="#n">History of Taejae</a></li>');
		document.write('<li class="btn_dep_more">');
		document.write('<a href="#n">Leadership</a><button type="button" class="dep_tit"></button>');
		document.write('<ul class="sub_list dep_list">');
		document.write('<li><a href="#n">Founder’s Message</a></li>');
		document.write('<li><a href="#n">Office of the President</a></li>');
		document.write('<li><a href="#n">Provost and Executive Vice President</a></li>');
		document.write('<li><a href="#n">Board of Trustees</a></li>');
		document.write('</ul>');
		document.write('</li>');
		document.write('<li class="btn_dep_more">');
		document.write('<a href="#n">Taejae at a Glance</a><button type="button" class="dep_tit"></button>');
		document.write('<ul class="sub_list dep_list">');
		document.write('<li><a href="#n">Taejae at a Glance</a></li>');
		document.write('<li><a href="#n">Charter</a></li>');
		document.write('<li><a href="#n">Organization</a></li>');
		document.write('</ul>');
		document.write('</li>');
		document.write('<li><a href="#n">Visit Taejae</a></li>');
		document.write('</ul>');
		document.write('</li>');
		document.write('<li class="depth_01">');
		document.write('<a href="javascript:;" data-href="#n" onclick="gnbListToggle(this);">Admissions</a>');
		document.write('<ul class="depth_02">');
		document.write('<li><a href="#n">Admissions</a></li>');
		document.write('<li><a href="#n">For International Students</a></li>');
		document.write('<li><a href="#n">For Korean Students</a></li>');
		document.write('<li><a href="#n">Tuition & Scholarship</a></li>');
		document.write('<li><a href="#n">FAQ</a></li>');
		document.write('<li><a href="#n">Contact</a></li>');
		document.write('</ul>');
		document.write('</li>');
		document.write('<li class="depth_01">');
		document.write('<a href="javascript:;" data-href="#n" onclick="gnbListToggle(this);">Academics</a>');
		document.write('<ul class="depth_02 acco_list_wrap">');
		document.write('<li class="btn_dep_more">');
		document.write('<a href="#n">Schools</a><button type="button" class="dep_tit"></button>');
		document.write('<ul class="sub_list dep_list">');
		document.write('<li><a href="#n">Innovation Foundations</a></li>');
		document.write('<li><a href="#n">Humanities and Social Sciences</a></li>');
		document.write('<li><a href="#n">Natural Sciences</a></li>');
		document.write('<li><a href="#n">Data Science and Artificial Intelligence</a></li>');
		document.write('<li><a href="#n">Business Innovation</a></li>');
		document.write('</ul>');
		document.write('</li>');
		document.write('<li><a href="#n">Faculty</a></li>');
		document.write('</ul>');
		document.write('</li>');
		document.write('<li class="depth_01">');
		document.write('<a href="javascript:;" data-href="#n" onclick="gnbListToggle(this);">Support</a>');
		document.write('<ul class="depth_02 acco_list_wrap">');
		document.write('<li class="btn_dep_more">');
		document.write('<a href="#n">Education at Taejae</a><button type="button" class="dep_tit"></button>');
		document.write('<ul class="sub_list dep_list">');
		document.write('<li><a href="#n">Active Learning</a></li>');
		document.write('<li><a href="#n">Innovative Learning Experience</a></li>');
		document.write('<li><a href="#n">Education Innovation Institute</a></li>');
		document.write('</ul>');
		document.write('</li>');
		document.write('<li class="btn_dep_more">');
		document.write('<a href="#n">Global Experience</a><button type="button" class="dep_tit"></button>');
		document.write('<ul class="sub_list dep_list">');
		document.write('<li><a href="#n">Residential Campus Program & Study Tour</a></li>');
		document.write('<li><a href="#n">Civic Project</a></li>');
		document.write('<li><a href="#n">Residential Social Program</a></li>');
		document.write('<li><a href="#n">Global Initiative Institute</a></li>');
		document.write('</ul>');
		document.write('</li>');
		document.write('<li class="btn_dep_more">');
		document.write('<a href="#n">Student Success</a><button type="button" class="dep_tit"></button>');
		document.write('<ul class="sub_list dep_list">');
		document.write('<li><a href="#n">Self & Leadership Program</a></li>');
		document.write('<li><a href="#n">Wellness Program</a></li>');
		document.write('<li><a href="#n">Social Value Program</a></li>');
		document.write('<li><a href="#n">Career Development Program</a></li>');
		document.write('<li><a href="#n">Student Success Institute</a></li>');
		document.write('</ul>');
		document.write('</li>');
		document.write('<li><a href="#n">Metaverse</a></li>');
		document.write('<li><a href="#n">Digital Library</a></li>');
		document.write('</ul>');
		document.write('</li>');
		document.write('<li class="depth_01">');
		document.write('<a href="javascript:;" data-href="#n" onclick="gnbListToggle(this);">Today</a>');
		document.write('<ul class="depth_02">');
		document.write('<li><a href="#n">News</a></li>');
		document.write('<li><a href="#n">Notice</a></li>');
		document.write('<li><a href="#n">Press Release</a></li>');
		document.write('<li><a href="#n">Status</a></li>');
		document.write('</ul>');
		document.write('</li>');
		document.write('</ul>');
		document.write('<div class="util">');
		document.write('<button type="button" class="lang"><span>EN</span></button>');
		document.write('<button type="button" class="btn_find" onclick="netiveUI.plugins.findLayer(\'#lay_search\')"><span class="a11y">검색</span></button>');
		document.write('<div type="button" class="btn_gnb_menu" onclick="gnbAction();">');
		document.write('<div class="icon"></div>');
		document.write('</div>');
		document.write('<button type="button" class="btn_quick" onclick="netiveUI.plugins.findLayer(\'#quick_link\');""><span>Quick Link</span></button>');
		document.write('</div>');
		document.write('</nav>');
		document.write('</div>');
		document.write('</header>');
		document.write('<div class="lay_search" id="lay_search" style="display: none;">');
		document.write('<a href="#n" class="btn_lay_close ui-close"><span class="blind">close</span></a>');
		document.write('<div class="wrap">');
		document.write('<div class="find_area">');
		document.write('<input type="text" class="input" value="" placeholder="Search Taejae University" title="검색어 입력">');
		document.write('<a href="#none" class="btn_delete"><span class="a11y">삭제</span></a>');
		document.write('</div>');
		document.write('<div class="tag_search">');
		document.write('<p class="stit">Other ways to search</p>');
		document.write('<ul class="tag_list">');
		document.write('<li><a href="#n">Hash tag</a></li>');
		document.write('<li><a href="#n">Hash tag</a></li>');
		document.write('<li><a href="#n">Hash tag</a></li>');
		document.write('<li><a href="#n">Hash tag</a></li>');
		document.write('<li><a href="#n">Hash tag</a></li>');
		document.write('<li><a href="#n">Hash tag</a></li>');
		document.write('<li><a href="#n">Hash tag</a></li>');
		document.write('<li><a href="#n">Hash tag</a></li>');
		document.write('<li><a href="#n">Hash tag</a></li>');
		document.write('</ul>');
		document.write('</div>');
		document.write('</div>');
		document.write('</div>');
	},
	footer : function(){
		document.write('<footer class="footer_wrap">');
		document.write('<div class="family_site">');
		document.write('<button type="button" class="fam_btn" onclick="m_famToggle();"><span>Family Site</span></button>');
		document.write('<ul>');
		document.write('<li><a href="#n" target="_blank">Portal system</a></li>');
		document.write('<li><a href="#n" target="_blank">Digital Library</a></li>');
		document.write('<li><a href="#n" target="_blank">Metaverse</a></li>');
		document.write('</ul>');
		document.write('</div>');
		document.write('<div class="inner on">'); /* 20231206 클래스 on 추가 */
		document.write('<a href="#n" class="btm_logo"></a>');
		document.write('<button type="button" class="btn_footer_more" onclick="m_footerToggle();">');
		document.write('<span class="blind">menu open</span>');
		document.write('</button>');
		document.write('<div class="sitemap">');
		document.write('<ul>');
		document.write('<li>About</li>');
		document.write('<li><a href="#n">About Taejae</a></li>');
		document.write('<li><a href="#n">Vision & Mission</a></li>');
		document.write('<li><a href="#n">History of Taejae</a></li>');
		document.write('<li><a href="#n">Leadership</a></li>');
		document.write('<li><a href="#n">Taejae at a Glance</a></li>');
		document.write('<li><a href="#n">Visit Taejae</a></li>');
		document.write('</ul>');
		document.write('<ul>');
		document.write('<li>Admissions</li>');
		document.write('<li><a href="#n">Admissions</a></li>');
		document.write('<li><a href="#n">For International Students</a></li>');
		document.write('<li><a href="#n">For Korean Students</a></li>');
		document.write('<li><a href="#n">Tuition & Scholarship</a></li>');
		document.write('<li><a href="#n">FAQ</a></li>');
		document.write('<li><a href="#n">Contact</a></li>');
		document.write('</ul>');
		document.write('<ul>');
		document.write('<li>Academics</li>');
		document.write('<li><a href="#n">Schools</a></li>');
		document.write('<li><a href="#n">Faculty</a></li>');
		document.write('</ul>');
		document.write('<ul>');
		document.write('<li>Support</li>');
		document.write('<li><a href="#n">Education at Taejae</a></li>');
		document.write('<li><a href="#n">Global Experience</a></li>');
		document.write('<li><a href="#n">Student Success</a></li>');
		document.write('<li><a href="#n">Metaverse</a></li>');
		document.write('<li><a href="#n">Digital Library/a></li>');
		document.write('</ul>');
		document.write('<ul>');
		document.write('<li>Story</li>');
		document.write('<li><a href="#n">Spectrum</a></li>');
		document.write('<li><a href="#n">Podium</a></li>');
		document.write('<li><a href="#n">Momentum</a></li>');
		document.write('</ul>');
		document.write('<ul>');
		document.write('<li>Today</li>');
		document.write('<li><a href="#n">Today</a></li>');
		document.write('<li><a href="#n">News</a></li>');
		document.write('<li><a href="#n">Notice</a></li>');
		document.write('<li><a href="#n">Press Release</a></li>');
		document.write('<li><a href="#n">Status</a></li>');
		document.write('</ul>');
		document.write('</div>');
		document.write('<ul class="user">');
		document.write('<li><a href="#n">Prospective Students</a></li>');
		document.write('<li><a href="#n">Students</a></li>');
		document.write('<li><a href="#n">Faculty & Staff</a></li>');
		document.write('<li><a href="#n">Visitors</a></li>');
		document.write('</ul>');
		document.write('</div>');

		document.write('<div class="foot_util">');
		document.write('<ul class="inform">');
		document.write('<li><a href="#" target="_blank">Academy info</a></li>');
		document.write('<li><a href="#" target="_blank"><strong>Privacy Policy</strong></a></li>');
		document.write('<li><a href="#" target="_blank">Contact</a></li>');
		document.write('<li><a href="#" target="_blank">Recruitment</a></li>');
		document.write('</ul>');
		document.write('<div class="sns_wrap">');
		document.write('<a href="#n" class="lnk_youtube" target="_blank">youtube</a>');
		document.write('<a href="#n" class="lnk_instagram" target="_blank">instagram</a>');
		document.write('<!-- <a href="#n" class="lnk_linkedin" target="_blank">youtube</a>');
		document.write('<a href="#n" class="lnk_facebook" target="_blank">youtube</a> -->');
		document.write('</div>');
		document.write('</div>');
		document.write('<div class="co_info">');
		document.write('<address>');
		document.write('<p>Taejae University</p>');
		document.write('<span>22-8 Changdeokgung 5-gil, Jongno-gu, Seoul 03151<a href="mailto:info@taejae.ac.kr" class="mail">info@taejae.ac.kr</a><br>');
		document.write('Copyright 2023 Taejae University All Rights Reserved.</span>');
		document.write('</address>');
		document.write('<div class="footer_banner">');
		document.write('<a href="#n" target="_blank"><img src="../../../img/img_banner_nal.png" alt="국회도서관"></a>');
		document.write('<a href="#n" target="_blank"><img src="../../../img/img_banner_halyym.png" alt="한림대학교"></a>');
		document.write('<a href="#n" target="_blank"><img src="../../../img/img_banner_udemy.png" alt="udemy"></a>');
		document.write('<a href="#n" target="_blank"><img src="../../../img/img_banner_hana.png" alt="하나은행"></a>');
		document.write('</div>');
		document.write('</div>');
		document.write('</footer>');
		document.write('</div>');
	},
	quickBtn: function () {
    document.write('<div class="quick_btn">');
    document.write(
      '<button type="button" class="quick_btn_top" onclick="go_top();">맨 위로 바로가기</button>'
    );
    document.write("</div>");
  },
}