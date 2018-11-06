$(function() {
		var timer = 0
		var now = 0
       $('#btns div').on('click',function(){
		   $(this).addClass('btnactive').siblings().removeClass('btnactive')
		   $('#bannerwrap ul').animate({'left':-$('#bannerwrap li').width()*now})
	   })
	   
	   timer=setInterval(function startbanner(){
		   now++
		   if(now> $('#btns div').length-1){
			   now=0
		   }
		   
		   $('#btns div').eq(now).trigger('click')
	   },3000)
	   
	   $('#btns div').on('mouseover',function(){
		   clearInterval(timer)
	   })
         $('#btns div').on('mouseout',function(){
         	timer=setInterval(startbanner,3000)
         })
	   
	})
