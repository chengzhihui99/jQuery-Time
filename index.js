$(function(){
	let iNow=0;
	function goTime(n){
		let oDate=new Date();
		// 在年前面设置 月份  月份减了 年份也会跟着减
		oDate.setMonth(oDate.getMonth()+n);
		let year=oDate.getFullYear();
		let month=oDate.getMonth();
		let day=oDate.getDate();
		// console.log(year);
		// console.log(month);
		// console.log(day);
		//一年中月份的天数	下标0开始 正好月份也是0~11
		let allDay=[31,28,31,30,31,30,31,31,30,31,30,31][month];
		// 解决闰年问题
		if(month==1){
			//年份判断是否闰年
			if(year%4==0 && year%100!=0 || year%400==0){
				allDay==29;
			}
		}
		// 清空时间
		$(".dateList").empty();
		// 这个月第一天星期几
		oDate.setDate(1);
		let week=oDate.getDay();
		// console.log(week);
		for(let i=0;i<week;i++){
			$(".dateList").append(`<li></li>`);
		}
		for(let i=1;i<=allDay;i++){
			$(".dateList").append(`<li>`+i+`</li>`);
		}
		// 判断一下月份
		$(".dateList li").each(function(i,ele){
			let val=$(this).text();
			// console.log(val);
			if(n==0){
				if(val<day){
					$(this).addClass("ccc");
				}else if(val==day){
					$(this).addClass("red");
				}else if(i%7==0 || i%7==6){
					$(this).addClass("sun");
				}
			}else if(n<0){
				$(this).addClass("ccc");
			}else if(i%7==0 || i%7==6){
				$(this).addClass("sun");
			}
		});
		// h2 时间监听
		$(".time h2").text(year+`年`+(month+1)+`月`);
	}
	goTime(0)
	// 监听上下月点击事件
	$(".a1").click(function(){
		iNow--;
		goTime(iNow);
		console.log(iNow);
	})
	$(".a2").click(function(){
		iNow++;
		goTime(iNow);
		console.log(iNow);
	})
})