"use strict";var Tracking;(function(b){var a;(function(d){(function(h,n,k,f,l){var e,j;h.GoogleAnalyticsObject=l;h[l]=h[l]||function(){(h[l].q=h[l].q||[]).push(arguments)},h[l].l=(new Date()).getTime();e=n.createElement(k),j=n.getElementsByTagName(k)[0];e.async=1;e.src=f;j.parentNode.insertBefore(e,j)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");var c=document.location.href.toLowerCase().indexOf("beta.")>-1?widgetName+"-beta":widgetName;ga("create",googleTracking.availproUniversalTrackingId,"auto",{allowLinker:true});ga("require","linker");ga("linker:autoLink",["secure-hotel-booking.com"]);ga("set","dimension1",bookingEngineReference);ga("set","dimension7",c);ga("set","dimension8",hotelId.toString());jQuery(b.events).on("track:setPage",function(f,e){ga("set",e);var g=jQuery.extend({ga_track:"track:setPage"},e);console.log(g)});jQuery(b.events).on("track:pageView",function(e){b.Triggers.setPage({page:"Widgets/"+widgetName,title:widgetName});ga("send","pageview");console.log({ga_track:"track:pageView"})})})(a=b.GoogleUniversal||(b.GoogleUniversal={}))})(Tracking||(Tracking={}));