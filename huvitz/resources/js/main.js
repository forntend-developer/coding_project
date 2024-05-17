$(function(){
	var sy = $('.ma_icons').offset().top - $(window).height()
	if($(window).scrollTop() > sy){
		$('.ma_icons li .icon svg').addClass('on')
	}
	$(window).scroll(function(){
		

		//icon animation
		//console.log("===",sy,$(window).height())
		if($(window).scrollTop() > sy){
			$('.ma_icons li .icon svg').addClass('on')
		}
		
	})

	//main product vod
	$('.main_vod_box .vodbar > span').on('click', function(){
		$('.main_vod_box .vodbar > span').removeClass('active')
		$(this).addClass('active');
		var i = $(this).index();
		$('.main_vod_list li').removeClass('active')
		$('.main_vod_list li').eq(i).addClass('active')
		$('.main_vod_list li iframe').attr('src','');
		$('.main_vod_list li iframe').eq(i).attr('src',$('.main_vod_list li iframe').eq(i).attr('data-src'));
		var w = i * 33.33 + '%'
		$('.main_vod_box .progress_bar > .progress').width(w)
	})
});