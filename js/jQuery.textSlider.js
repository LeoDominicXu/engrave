/**
 * @author feiwen
 */
(function($){
	$.fn.textSlider = function(settings){    
            settings = jQuery.extend({
                speed : "normal",
                line : 2,
                timer : 3000
            }, settings);
            return this.each(function() {
                $.fn.textSlider.scllor( $( this ), settings );
            });
        };
	$.fn.textSlider.scllor = function($this, settings){
            var ul = $("ul:eq(0)",$this );
            var timerID;
            var li = ul.children();
            var liHight=$(li[0]).height();
            var upHeight=0-settings.line*liHight;//滚动的高度；
            var scrollUp=function(){
                ul.animate({marginTop:upHeight},settings.speed,function(){
                    for(i=0;i<settings.line;i++){
                        ul.find("li:first",$this).appendTo(ul);
                    }
                    ul.css({marginTop:0});
                });
            };
            var autoPlay=function(){
                timerID = window.setInterval(scrollUp,settings.timer);
            };
            var autoStop = function(){
                window.clearInterval(timerID);
            };
            //事件绑定
            ul.hover(autoStop,autoPlay).mouseout();
	};
})(jQuery);


$(document).ready(function(){
	    //首页公告1行滚动
        $("#scrollDiv").textSlider({line:1,speed:500,timer:3000});
       // $("#scrollDiv2").textSlider({line:2,speed:500,timer:3000});
	 //首页banner切换  
	var sWidth = $("#focus").width(); //获取焦点图的宽度（显示面积）
	var len = $("#focus ul li").length; //获取焦点图个数
	var index = 0;
	var picTimer;
	var btn = "<div class='btnBg'></div><div class='btn'>";
	for(var i=0; i < len; i++) {
		btn += "<span></span>";
	}
	btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>";
	$("#focus").append(btn);
	$("#focus .btnBg").css("opacity",0.5);
	$("#focus .btn span").mouseenter(function() {
		index = $("#focus .btn span").index(this);
		showPics(index);
	}).eq(0).trigger("mouseenter");
	$("#focus .pre").css("opacity",1).hover(function() {
		$(this).stop(true,false).addClass("hover_pre");
	},function() {
		$(this).stop(true,false).removeClass("hover_pre");
	});
	$("#focus .next").css("opacity",1).hover(function() {
		$(this).stop(true,false).addClass("hover_next");
	},function() {
		$(this).stop(true,false).removeClass("hover_next");
	});
	$("#focus .pre").click(function() {
		index -= 1;
		if(index == -1) {index = len - 1;}
		showPics(index);
	});
	$("#focus .next").click(function() {
		index += 1;
		if(index == len) {index = 0;}
		showPics(index);
	});
	$("#focus ul").css("width",sWidth * (len));
	$("#focus").hover(function() {
		clearInterval(picTimer);
	},function() {
		picTimer = setInterval(function() {
			showPics(index);
			index++;
			if(index == len) {index = 0;}
		},4000);
	}).trigger("mouseleave");
	function showPics(index) {
		var nowLeft = -index*sWidth;
		$("#focus ul").stop(true,false).animate({"left":nowLeft},300);
		$("#focus .btn span").stop(true,false).removeClass("on").eq(index).stop(true,false).addClass("on"); 
	}
	//用户名验证
     $('input.input_name').focus( function(){
		var $user_name=$('input.input_name').val();		
		if($user_name==='请输入您的姓名'){
			$('input.input_name').val('');
			}		
		 }).blur(function(){
			 var $user_name=$('input.input_name').val();
			 if($user_name===''){
				 $('input.input_name').val('请输入您的姓名');
				 alert('请输入您的姓名')
				 }
			 });
	$('.input_tel').focus(function(){
		var $user_password=$('input.input_tel').val();
		if($user_password==='请输入您的手机号'){
			$('input.input_tel').val('');
			}
		}).blur(function(){
			var $user_password=$('input.input_tel').val();
			if($user_password===''){
				$('input.input_tel').val('请输入您的手机号');
				alert('请输入您的手机号！')
				}
			});
		$('.input_yzm').focus(function(){
		var $user_password=$('input.input_yzm').val();
		if($user_password==='请输入验证码'){
			$('input.input_yzm').val('');
			}
		}).blur(function(){
			var $user_password=$('input.input_yzm').val();
			if($user_password===''){
				$('input.input_yzm').val('请输入验证码');
				
				}
			});
		$('.textarea').focus(function(){
			var $textarea=$('.textarea').val();
			if($textarea==='请输入您要咨询的问题'){
			$('.textarea').val('');
			}
			}).blur(function(){
			var $textarea=$('.textarea').val();
			if($textarea===''){
				$('.textarea').val('请输入您要咨询的问题');
				
				}
			});
			
			
			
		//首页tab切换
			$('.tab_contentbg .tab_content_01,.tab_contentbg .tab_content_02,.tab_contentbg .tab_content_03,.tab_contentbg .tab_content_04,.tab_contentbg .tab_content_05,.tab_contentbg .tab_content_06').css({'border':'1px solid #ccc','width':'98%','margin':'0 auto','height':'434px'});
			$('.tab_content_02,.tab_content_03,.tab_content_04,.tab_content_05,.tab_content_06').hide();
			$('.tab_titlebg span.tabtitle_01').addClass('highlight');
			
			for(var i = 1; i < 7; i++){
				var selectTab_titlebg='.tab_titlebg span.tabtitle_0NUM'.replace(/NUM/,i);
				var selectTab_contentbg='.tab_contentbg .tab_content_0NUM'.replace(/NUM/,i);
				
				function Run(a,b){
				var a=a;
				var b=b;	
				$(a).mouseover(function(){
				$(b).show().siblings().hide();
				$(this).addClass('highlight').siblings().removeClass('highlight');
				});
					};
				Run(selectTab_titlebg,selectTab_contentbg);				
			
			$('.tab_subtitle .tab_sub11').addClass('sub_highlight');
			$('.tab_subcontent .tab_subcentent11').show().siblings().hide();
			$('.tab_subtitle .tab_sub21').addClass('sub_highlight');
			$('.tab_subcontent .tab_subcentent21').show().siblings().hide();
			$('.tab_subtitle .tab_sub31').addClass('sub_highlight');
			$('.tab_subcontent .tab_subcentent31').show().siblings().hide();
			$('.tab_subtitle .tab_sub41').addClass('sub_highlight');
			$('.tab_subcontent .tab_subcentent41').show().siblings().hide();
			$('.tab_subtitle .tab_sub51').addClass('sub_highlight');
			$('.tab_subcontent .tab_subcentent51').show().siblings().hide();
			$('.tab_subtitle .tab_sub61').addClass('sub_highlight');
			$('.tab_subcontent .tab_subcentent61').show().siblings().hide();
			for(var j = 1; j < 9; j++){
			  var selectTab_subcontent='.tab_subcontent .tab_subcententNUM'.replace(/NUM/,i*10+j);
			  
			  var selectTab_subtitle='.tab_subtitle .tab_subNUM'.replace(/NUM/,i*10+j);
			     function Get(a,b){
					var a=a;
					var b=b;
					$(a).show().siblings().hide();
			        $(b).click(function(){
				    $(a).show().siblings().hide();
				    $(this).addClass('sub_highlight').siblings().removeClass('sub_highlight');
				    });
					 }
			     Get(selectTab_subcontent,selectTab_subtitle);		
					
					}
				
				  			 
				}
				//咨询tab
		 $('.tab_contentbg li:nth-child(1)').show().siblings().hide();
		 $('.tab_title span:nth-child(1)').addClass('news_highlight').siblings().removeClass('news_highlight');
		 $('.tab_title span:nth-child(1)').mouseover(function(){
			 $('.tab_contentbg li:nth-child(1)').show().siblings().hide();
			 $(this).addClass('news_highlight').siblings().removeClass('news_highlight');
			 });
		$('.tab_title span:nth-child(2)').mouseover(function(){
			 $('.tab_contentbg li:nth-child(2)').show().siblings().hide();
			 $(this).addClass('news_highlight').siblings().removeClass('news_highlight');
			 });
		$('.tab_title span:nth-child(3)').mouseover(function(){
			 $('.tab_contentbg li:nth-child(3)').show().siblings().hide();
			 $(this).addClass('news_highlight').siblings().removeClass('news_highlight');
			 });
		$('.tab_title span:nth-child(4)').mouseover(function(){
			 $('.tab_contentbg li:nth-child(4)').show().siblings().hide();
			 $(this).addClass('news_highlight').siblings().removeClass('news_highlight');
			 });
			 //地图点击放大
			 $('.map_big').hide();
				$('.bxy_map img').click(function(){
					var h = $(document).height();
                    $('#screen').css({ 'height': h });
                    $('#screen').show();
					$('.map_big').show();
					})
				$('.closebtn_map').click(function(){
					 $('#screen').hide();
					$('.map_big').hide();
					})
		
});
