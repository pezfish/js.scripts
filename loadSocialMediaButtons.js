function loadSocialMediaButtons(sites){
	var sitesToLoad = sites.split(",");
	var scripts = {
		pinterest : function(){
			(function(d){var f = d.getElementsByTagName('SCRIPT')[0], p = d.createElement('SCRIPT'); p.type = 'text/javascript'; p.async = true; p.src = '//assets.pinterest.com/js/pinit.js'; f.parentNode.insertBefore(p, f);}(document));
		},
		facebook : function(){
			if(window.FB){
				FB.XFBML.parse();
			} else {
				(function(a,b,c){var d=a.getElementsByTagName(b)[0];a.getElementById(c)||(a=a.createElement(b),a.id=c,a.src="//connect.facebook.net/en_US/all.js#xfbml=1",d.parentNode.insertBefore(a,d))})(document,"script","facebook-jssdk");
			}
		},
		twitter : function(){
			if(window.twttr && typeof twttr.widgets === "object"){
				twttr.widgets.load();
			} else {
				(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}})(document,"script","twitter-wjs");
			}
		},
		googleplus : function(){
  			(function(){var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true; po.src = 'https://apis.google.com/js/plusone.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);})();
		}
	};
	
	for(var i=0; i<sitesToLoad.length; i++){
		var temp = sitesToLoad[i].replace(/\s/g, "");
		if(typeof scripts[temp] !== "undefined"){
			scripts[temp].apply();
		} else {
			console.error("Script does not exist for " + temp);
		}
	}
}

/*-- min --*/
function loadSocialMediaButtons(c){c=c.split(",");for(var f={pinterest:function(){var a=document.getElementsByTagName("SCRIPT")[0],b=document.createElement("SCRIPT");b.type="text/javascript";b.async=!0;b.src="//assets.pinterest.com/js/pinit.js";a.parentNode.insertBefore(b,a)},facebook:function(){if(window.FB)FB.XFBML.parse();else{var a=document,b=a.getElementsByTagName("script")[0];a.getElementById("facebook-jssdk")||(a=a.createElement("script"),a.id="facebook-jssdk",a.src="//connect.facebook.net/en_US/all.js#xfbml=1", b.parentNode.insertBefore(a,b))}},twitter:function(){if(window.twttr&&"object"===typeof twttr.widgets)twttr.widgets.load();else{var a,b=document.getElementsByTagName("script")[0];document.getElementById("twitter-wjs")||(a=document.createElement("script"),a.id="twitter-wjs",a.src="//platform.twitter.com/widgets.js",b.parentNode.insertBefore(a,b))}},googleplus:function(){var a=document.createElement("script");a.type="text/javascript";a.async=!0;a.src="https://apis.google.com/js/plusone.js";var b=document.getElementsByTagName("script")[0]; b.parentNode.insertBefore(a,b)}},d=0;d<c.length;d++){var e=c[d].replace(/\s/g,"");"undefined"!==typeof f[e]?f[e].apply():console.error("Script does not exist for "+e)}};