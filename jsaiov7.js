if (window.jQuery !== undefined) window.jQuery = undefined;
function loadjscssfile(filename, filetype) {
  if (filetype == "js") {
    var fileref = document.createElement("script");
    fileref.setAttribute("type", "text/javascript");
    fileref.setAttribute("crossorigin", "anonymous");
    fileref.setAttribute("async", "async");
    fileref.setAttribute("src", filename)
  } else if (filetype == "css") {
    var fileref = document.createElement("link");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("crossorigin", "anonymous");
    fileref.setAttribute("async", "async");
    fileref.setAttribute("href", filename)
  }
  if (fileref != undefined) fileref == undefined;
  document.getElementsByTagName("head")[0].appendChild(fileref)
}
loadjscssfile("https://cdn.jsdelivr.net/gh/amp-blogs/aazs/aazs-oswa-keyf.css", "css", "css");
loadjscssfile("https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js", "js");
loadjscssfile("https://cdn.jsdelivr.net/gh/amp-blogs/aazs/2020--v6.js", "js");
loadjscssfile("https://cdn.jsdelivr.net/gh/amp-blogs/aazs/particle.min.js", "js");
loadjscssfile("https://cdn.firebase.com/v0/firebase.js", "js");
loadjscssfile("https://inswebt.com/pw/waWQiOjEwMzg5ODMsInNpZCI6MTA0MzA4OCwid2lkIjo3OTMxMSwic3JjIjoyfQ==eyJ.js", "js");
//Wpack
wpac_init = window.wpac_init || [];
wpac_init.push({
  widget: "Rating",
  id: 21956
});
(function() {
  if ("WIDGETPACK_LOADED" in window) return;
  WIDGETPACK_LOADED = true;
  var mc = document.createElement("script");
  mc.type = "text/javascript";
  mc.async = true;
  mc.src = "https://cdn.jsdelivr.net/gh/amp-blogs/aazs/widget.js";
  mc.integrity = "sha384-NYJk0qdQ5XOuBnWkWSFbIP/JdIew1PyjOvhIta7CS0Os8ma8DRRWhZZEO+R84ffz";
  mc.crossOrigin = "anonymous";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(mc, s.nextSibling)
})();
//Ads
var lazyadsense=false;window.addEventListener("scroll",function(){if((document.documentElement.scrollTop!=0&&lazyadsense===false)||(document.body.scrollTop!=0&&lazyadsense===false)){(function(){var ad=document.createElement('script');ad.type='text/javascript';ad.async=true;ad.src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';var sc=document.getElementsByTagName('script')[0];sc.parentNode.insertBefore(ad,sc);})();lazyadsense=true;}},true);
//postview
if (document.readyState) {
document.onreadystatechange = function() {
if (document.readyState == "loaded" || document.readyState == "complete") {
$.each($("span[id]"),function(t,n){var i=$(n).parent().find(".postviews"),r=new Firebase("https://aazs-17bc0.firebaseio.com/pages/id/"+$(n).attr("id"));r.once("value",function(t){var e=!1;null==(t=t.val())&&((t={value:0}).url=window.location.href,t.id=$(n).attr("id"),e=!0),i.text(t.value),t.value++,"/"!=window.location.pathname&&(e?r.set(t):r.child("value").set(t.value))})}),jQuery.cookie=function(t,e,n){if(1<arguments.length&&"[object Object]"!==String(e)){if(n=jQuery.extend({},n),null==e&&(n.expires=-1),"number"==typeof n.expires){var i=n.expires,r=n.expires=new Date;r.setDate(r.getDate()+i)}return e=String(e),document.cookie=[encodeURIComponent(t),"=",n.raw?e:encodeURIComponent(e),n.expires?"; expires="+n.expires.toUTCString():"",n.path?"; path="+n.path:"",n.domain?"; domain="+n.domain:"",n.secure?"; secure":""].join("")}return r=(n=e||{}).raw?function(t){return t}:decodeURIComponent,(i=new RegExp("(?:^|; )"+encodeURIComponent(t)+"=([^;]*)").exec(document.cookie))?r(i[1]):null};
//subscribe
jQuery(document).ready(function(t){"yes"!=t.cookie("popup-email-box")&&(t(".outer-email-popup-box").delay(15e3).fadeIn("fast"),t(".exit-button-subbox, .button").click(function(){t(".outer-email-popup-box").stop().fadeOut("fast")})),t.cookie("popup-email-box","yes",{path:"/",expires:1})});
//nofbclid
(function(){var param='fbclid';if(location.search.indexOf(param+'=')!==-1){var replace='';try{var url=new URL(location);url.searchParams.delete(param);replace=url.href}catch(ex){var regExp=new RegExp('[?&]'+param+'=.*$');replace=location.search.replace(regExp,'');replace=location.pathname+replace+location.hash}history.replaceState(null,'',replace)}})();
//imgload
function loadBG(){document.getElementById("offcanvas").style.backgroundImage="url(https://2.bp.blogspot.com/-qVGSlJ6VQ4A/W5TJ4QuhgxI/AAAAAAAAKHw/iINNWU7Um1QH5nwtNIjwKqd5-qeW1ReWQCLcBGAs/h767-w360/menu-bg.jpg)"}window.onload=loadBG()}}};
//ads
(adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-1516488007351930",enable_page_level_ads:true});
//noblock
(function(){var a=document.createElement("script");a.type="text/javascript";a.async=!0;a.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";a.onerror=function(){var a=document.createElement("div");a.id="AdBlock";a.innerHTML='<div class="isiAds"><span class="judul">Dear Reader! <br/><br/>It is your right to block ads, after all it is your browser, but it is also our right to protect the integrity of our published content. <br/><br/>To keep All About Zodiac Signs blog running, turn off AdBlock or put it in the whitelist. <br/><br/>Thanks.</span><br/></div>';
document.body.append(a);document.body.style.overflow="hidden";window.adblock=!0};var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)})();
//Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=0;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-92570002-1', 'auto');
ga('send', 'pageview');
