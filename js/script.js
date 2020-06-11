//dynamic navbar toggler
$(document).ready(function(){
	$(".navbar-icon").click(function(){
		$("#mobile-menu").collapse('toggle');
		$("#mobile-menu").addClass("animated zoomIn");
	});
});

//typing animation
$(document).ready(function(){
	var string="BE STYLISH";
	var i=0;
	if(i<string.length)
	{
		setInterval(function(){
			document.querySelector(".add-header").innerHTML +=string.charAt(i);
			i++;
		},120);
	}
});

$(document).ready(function(){

	$("#sh-icon").click(function(){
		$("#sh").collapse('toggle');
	});

	$("#sh").on('show.bs.collapse',function(){
		$("#header-slider h1").animate({marginTop:"50px"});
	});

	$("#sh").on('hide.bs.collapse',function(){
		$("#header-slider h1").animate({marginTop:"0"});
	});
});

//client slider----------------------------------------
$(document).ready(function(){
	$("#client-next").click(function(){
		$("#client-slider").carousel('next');
	});

	$("#client-prev").click(function(){
		$("#client-slider").carousel('prev');
	});
});

//number animation-------------------------------------
$(window).scroll(function(){
	if(sessionStorage.getItem("user-scroll") == null)
	{
	var value=$("#what").attr("class");
	if(value.indexOf("animated") != -1)
	{
		animation();
		sessionStorage.setItem('user-scroll','yes');
	}

}
});
function animation()
{
$(document).ready(function(){
	var num=0;
	var repeat=setInterval(function(){
		num=num+1;
		$("#num-1").html(num+"+");
		if(num == 500)
		{
			clearInterval(repeat);
		}
	},1);
});

$(document).ready(function(){
	var num=0;
	var repeat=setInterval(function(){
		num=num+1;
		$("#num-2").html(num+"+");
		if(num == 399)
		{
			clearInterval(repeat);
		}
	},1);
});

$(document).ready(function(){
	var num=0;
	var repeat=setInterval(function(){
		num=num+1;
		$("#num-3").html(num+"+");
		if(num == 299)
		{
			clearInterval(repeat);
		}
	},1);
});

$(document).ready(function(){
	var num=0;
	var repeat=setInterval(function(){
		num=num+1;
		$("#num-4").html(num+"+");
		if(num == 100)
		{
			clearInterval(repeat);
		}
	},1);
});

}