function openModal(url, width, height, iframe){
	var _iframe = iframe || false;
	$(function(){
		$.colorbox({href:url, width:width, height:height, iframe:_iframe});
	});
}

/*-- min --*/
function openModal(a,b,c,d){var e=d||!1;$(function(){$.colorbox({href:a,width:b,height:c,iframe:e})})};