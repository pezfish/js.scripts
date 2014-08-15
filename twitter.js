(function(){var po = document.createElement('script'); po.id = 'twitter_json'; po.type = 'text/javascript'; po.async = true; po.src = '//assets.aycmedia.com/twitter/user_timeline.php?count=4&screen_name=eventcentralpro'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);})();	

// http://twitter.com/javascripts/blogger.js
function twitterCallback2(twitters) {
	var statusHTML = [];
	for (var i=0; i<twitters.length; i++){
		var image_html = "",
			image_src = "";

		if(twitters[i].entities.media){
			image_src = twitters[i].entities.media[0].media_url + ":thumb";
			image_html = "<img src='"+image_src+"' alt='' />";
		}
		var username = twitters[i].user.screen_name;
		var status = twitters[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url) {
			return '<a href="'+url+'">'+url+'</a>';
		}).replace(/\B@([_a-z0-9]+)/ig, function(reply) {
			return  reply.charAt(0)+'<a href="http://twitter.com/'+reply.substring(1)+'">'+reply.substring(1)+'</a>';
		});
		statusHTML.push("<div><p>"+status+"</p><a class=\"time\" href=\"http://twitter.com/"+username+"/statuses/"+twitters[i].id_str+"\">"+relative_time(twitters[i].created_at)+"</a>"+ image_html +"</div>");
	}
	document.getElementById('twitter_update_list').innerHTML = statusHTML.join('');
}
function relative_time(c){var b=c.split(" "),c=b[1]+" "+b[2]+", "+b[5]+" "+b[3],a=Date.parse(c),b=1<arguments.length?arguments[1]:new Date,a=parseInt((b.getTime()-a)/1E3),a=a+60*b.getTimezoneOffset();return 60>a?"less than a minute ago":120>a?"about a minute ago":3600>a?parseInt(a/60).toString()+" minutes ago":7200>a?"about an hour ago":86400>a?"about "+parseInt(a/3600).toString()+" hours ago":172800>a?"1 day ago":parseInt(a/86400).toString()+" days ago"};