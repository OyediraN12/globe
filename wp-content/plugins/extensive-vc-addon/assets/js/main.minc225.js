!function(w){"use strict";window.evc={},w(document).ready(function(){var e,t;(e=w(".evc-owl-carousel")).length&&e.each(function(){var e=w(this),t=e.children().length,a=e.data("number-of-items"),n=void 0!==a&&!1!==a?parseInt(a,10):1,o="yes"===e.data("enable-loop"),i="yes"===e.data("enable-autoplay"),r="yes"===e.data("enable-autoplay-hover-pause"),c=e.data("carousel-speed"),s=void 0!==c&&!1!==c?parseInt(c,10):5e3,d=e.data("carousel-speed-animation"),l=void 0!==d&&!1!==d?parseInt(d,10):600,u=e.data("carousel-margin"),h=void 0!==u&&!1!==u?parseInt(u,10):0,v=e.data("enable-center"),f="yes"===v,p="yes"===e.data("enable-navigation"),m="yes"===e.data("enable-pagination");p&&m&&e.addClass("evc-carousel-has-both-control"),t<=1&&(m=p=i=o=!1),f&&n<3&&(n=3);var g=n<3?n:2,b=n<3?n:3,y=n<5?n:4;e.owlCarousel({items:n,loop:o,autoplay:i,autoplayHoverPause:r,autoplayTimeout:s,smartSpeed:l,margin:h,center:f,dots:m,nav:p,navText:['<span class="evc-prev-arrow '+evcVars.global.sliderNavPrevArrow+'"></span>','<span class="evc-next-arrow '+evcVars.global.sliderNavNextArrow+'"></span>'],responsive:{0:{items:1,margin:0},681:{items:g},769:{items:b},1025:{items:y},1281:{items:n}},onInitialize:function(){e.addClass("evc-owl-carousel-init")}})}),(t=w(".evc-has-pagination")).length&&t.each(function(){var t=w(this),n=t.children(".evc-element-wrapper"),o=t.find(".evc-load-more-button"),i=t.find(".evc-pagination-spinner");o.on("click",function(e){e.preventDefault(),o.addClass("evc-loading"),i.addClass("evc-loading");var a=t.data("options");w.ajax({type:"POST",data:{action:"extensive_vc_init_shortcode_pagination",options:a},url:evcVars.global.adminAjaxUrl,success:function(e){var t=JSON.parse(e);a.next_page=parseInt(a.next_page,10)+1,n.append(t.data),o.removeClass("evc-loading"),i.removeClass("evc-loading"),a.next_page>a.max_pages_num&&o.hide()}})})})})}(jQuery),function(t){"use strict";t(document).ready(function(){e().init()});var e=function(){var e=t(".evc-button");return{init:function(){e.length&&e.each(function(){var e=t(this);!function(e){if(void 0!==e.data("hover-color")){var t=function(e){e.data.button.css("color",e.data.color)},a=e.css("color"),n=e.data("hover-color");e.on("mouseenter",{button:e,color:n},t),e.on("mouseleave",{button:e,color:a},t)}}(e),function(e){if(void 0!==e.data("hover-background-color")){var t=function(e){e.data.button.css("background-color",e.data.color)},a=e.css("background-color"),n=e.data("hover-background-color");e.on("mouseenter",{button:e,color:n},t),e.on("mouseleave",{button:e,color:a},t)}}(e),function(e){if(void 0!==e.data("hover-border-color")){var t=function(e){e.data.button.css("border-color",e.data.color)},a=e.css("borderTopColor"),n=e.data("hover-border-color");e.on("mouseenter",{button:e,color:n},t),e.on("mouseleave",{button:e,color:a},t)}}(e)})}}}}(jQuery),function(a){"use strict";a(document).ready(function(){var e;(e=a(".evc-counter")).length&&e.each(function(){var e=a(this),t=e.find(".evc-c-digit");e.appear(function(){e.css("opacity","1"),t.countTo({from:0,to:parseFloat(t.text()),speed:1500,refreshInterval:100})},{accX:0,accY:-80})})})}(jQuery),function(z){"use strict";z(document).ready(function(){var e;(e=z(".evc-custom-font")).length&&e.each(function(){var e=z(this),t="",a=e.data("item-class"),n=e.data("font-size-1440"),o=e.data("font-size-1366"),i=e.data("font-size-1280"),r=e.data("font-size-1024"),c=e.data("font-size-768"),s=e.data("font-size-680"),d=e.data("line-height-1440"),l=e.data("line-height-1366"),u=e.data("line-height-1280"),h=e.data("line-height-1024"),v=e.data("line-height-768"),f=e.data("line-height-680"),p="",m="",g="",b="",y="",w="",x="",C="";void 0!==a&&!1!==a&&(t=a),void 0!==n&&!1!==n&&(p+="font-size: "+n+" !important;"),void 0!==o&&!1!==o&&(m+="font-size: "+o+" !important;"),void 0!==i&&!1!==i&&(g+="font-size: "+i+" !important;"),void 0!==r&&!1!==r&&(b+="font-size: "+r+" !important;"),void 0!==c&&!1!==c&&(y+="font-size: "+c+" !important;"),void 0!==s&&!1!==s&&(w+="font-size: "+s+" !important;"),void 0!==d&&!1!==d&&(p+="line-height: "+d+" !important;"),void 0!==l&&!1!==l&&(m+="line-height: "+l+" !important;"),void 0!==u&&!1!==u&&(g+="line-height: "+u+" !important;"),void 0!==h&&!1!==h&&(b+="line-height: "+h+" !important;"),void 0!==v&&!1!==v&&(y+="line-height: "+v+" !important;"),void 0!==f&&!1!==f&&(w+="line-height: "+f+" !important;"),(p.length||m.length||g.length||b.length||y.length||w.length)&&(p.length&&(C+="@media only screen and (max-width: 1440px) {.evc-custom-font."+t+" { "+p+" } }"),m.length&&(C+="@media only screen and (max-width: 1366px) {.evc-custom-font."+t+" { "+m+" } }"),g.length&&(C+="@media only screen and (max-width: 1280px) {.evc-custom-font."+t+" { "+g+" } }"),b.length&&(C+="@media only screen and (max-width: 1024px) {.evc-custom-font."+t+" { "+b+" } }"),y.length&&(C+="@media only screen and (max-width: 768px) {.evc-custom-font."+t+" { "+y+" } }"),w.length&&(C+="@media only screen and (max-width: 680px) {.evc-custom-font."+t+" { "+w+" } }")),C.length&&(x='<style type="text/css">'+C+"</style>"),x.length&&z("head").append(x)})})}(jQuery),function(h){"use strict";evc.doughnutChart=[],h(document).ready(function(){a.init()});var a={charts:[],init:function(e){this.holder=h(".evc-doughnut-chart"),h.extend(this.holder,e),this.holder.length&&(this.holder.each(function(){a.createChart(h(this))}),evc.doughnutChart.push(this))},createChart:function(t){t.appear(function(){t.addClass("evc-dc-appeared");var e=new Chart(t.children("canvas"),{type:"doughnut",data:a.getChartData(t),options:a.getChartOptions(t)});a.charts.push(e)},{accX:0,accY:-80})},getChartData:function(e){var t=e.children(".evc-doughnut-chart-item"),a=e.data("border-color"),n=void 0!==a&&""!==a?a:"#fff",o=e.data("border-hover-color"),i=void 0!==o&&""!==o?o:"#efefef",r=e.data("border-width"),c=void 0!==r&&""!==r?parseInt(r,10):2,s=[],d=[],l=[],u={};return t.each(function(){var e=h(this),t=e.data("label"),a=e.data("value"),n=e.data("color");void 0!==t&&""!==t&&s.push(t),void 0!==a&&""!==a&&void 0!==n&&""!==n&&(d.push(a),l.push(n))}),u.labels=s,u.datasets=[{data:d,backgroundColor:l,borderColor:n,hoverBorderColor:i,borderWidth:c}],u},getChartOptions:function(e){var t=e.data("enable-legend"),a=e.data("legend-position"),n=e.data("legend-text-size"),o=void 0!==n&&""!==n?parseInt(n,10):12,i=e.data("legend-color"),r=void 0!==i&&""!==i?i:"#666",c={responsive:!0};return c.legend={display:t,position:a,labels:{fontSize:o,fontColor:r}},c}}}(jQuery),function(o){"use strict";o(document).ready(function(){var e;(e=o(".evc-full-screen-sections")).length&&e.each(function(){var e=o(this),n=e.children(".evc-fss-wrapper"),t=e.data("enable-navigation"),a="yes"===t;n.fullpage({sectionSelector:".evc-fss-item",loopTop:!0,loopBottom:!0,verticalCentered:!1,navigation:!1,onLeave:function(e,t,a){n.hasClass("evc-fss-first-init")&&n.removeClass("evc-fss-first-init")},afterRender:function(){a&&e.children(".evc-fss-nav-holder").css("visibility","visible"),n.addClass("evc-fss-is-loaded evc-fss-first-init")}}),a&&(e.find("#evc-fss-nav-up").on("click",function(){return o.fn.fullpage.moveSectionUp(),!1}),e.find("#evc-fss-nav-down").on("click",function(){return o.fn.fullpage.moveSectionDown(),!1}))})})}(jQuery),function(r){"use strict";r(document).ready(function(){var e;(e=r(".evc-icon-progress-bar")).length&&e.each(function(){var e=r(this),a=e.find(".evc-ipb-icon"),n=e.data("number-of-active-icons"),o=e.data("icon-active-color"),i=[];a.length&&void 0!==n&&!1!==n&&e.appear(function(){a.each(function(e){if(e<n){var t=150*(e+1);i[e]=setTimeout(function(){r(a[e]).addClass("evc-active"),void 0!==n&&!1!==n&&r(a[e]).css("color",o)},t)}})},{accX:0,accY:-80})})})}(jQuery),function(v){"use strict";v(document).ready(function(){var e;(e=v(".evc-line-graph")).length&&e.each(function(){var e=v(this),t=e.data("legend-text"),a=e.data("border-color"),n=void 0!==a&&""!==a?a:"",o=e.data("border-width"),i=void 0!==o&&""!==o?o:"",r="yes"!==e.data("disable-line"),c=e.data("background-color"),s=void 0!==c&&""!==c?c:"",d=e.children(".evc-line-graph-item"),l=e.children("canvas"),u=[],h=[];d.each(function(){var e=v(this),t=e.data("label"),a=e.data("value");void 0!==t&&""!==t&&u.push(t),void 0!==a&&""!==a&&h.push(a)}),e.appear(function(){e.addClass("evc-lg-appeared"),new Chart(l,{type:"line",data:{labels:u,datasets:[{label:t,data:h,backgroundColor:s,borderColor:n,borderWidth:i,showLine:r}]}})},{accX:0,accY:-80})})})}(jQuery),function(h){"use strict";evc.pieChart=[],h(document).ready(function(){a.init()});var a={charts:[],init:function(e){this.holder=h(".evc-pie-chart"),h.extend(this.holder,e),this.holder.length&&(this.holder.each(function(){a.createChart(h(this))}),evc.pieChart.push(this))},createChart:function(t){t.appear(function(){t.addClass("evc-pc-appeared");var e=new Chart(t.children("canvas"),{type:"pie",data:a.getChartData(t),options:a.getChartOptions(t)});a.charts.push(e)},{accX:0,accY:-80})},getChartData:function(e){var t=e.children(".evc-pie-chart-item"),a=e.data("border-color"),n=void 0!==a&&""!==a?a:"#fff",o=e.data("border-hover-color"),i=void 0!==o&&""!==o?o:"#efefef",r=e.data("border-width"),c=void 0!==r&&""!==r?parseInt(r,10):2,s=[],d=[],l=[],u={};return t.each(function(){var e=h(this),t=e.data("label"),a=e.data("value"),n=e.data("color");void 0!==t&&""!==t&&s.push(t),void 0!==a&&""!==a&&void 0!==n&&""!==n&&(d.push(a),l.push(n))}),u.labels=s,u.datasets=[{data:d,backgroundColor:l,borderColor:n,hoverBorderColor:i,borderWidth:c}],u},getChartOptions:function(e){var t=e.data("enable-legend"),a=e.data("legend-position"),n=e.data("legend-text-size"),o=void 0!==n&&""!==n?parseInt(n,10):12,i=e.data("legend-color"),r=void 0!==i&&""!==i?i:"#666",c={responsive:!0};return c.legend={display:t,position:a,labels:{fontSize:o,fontColor:r}},c}}}(jQuery),function(t){"use strict";t(document).ready(function(){var e;(e=t(".evc-process")).length&&e.each(function(){var e=t(this);e.appear(function(){e.addClass("evc-process-appeared")},{accX:0,accY:-80})})})}(jQuery),function(t){"use strict";t(document).ready(function(){var e;(e=t(".evc-process-2")).length&&e.each(function(){var e=t(this);e.appear(function(){e.addClass("evc-process-appeared")},{accX:0,accY:-80})})})}(jQuery),function(r){"use strict";r(document).ready(function(){var e;(e=r(".evc-progress-bar")).length&&e.each(function(){var e=r(this),a=e.hasClass("evc-pb-vertical"),n=e.find(".evc-pb-percent"),o=e.find(".evc-pb-active-bar"),i=parseFloat(o.data("percentage"));void 0!==i&&!1!==i&&e.appear(function(){var e,t;t=i,(e=n).length&&e.each(function(){var e=r(this);e.css({opacity:"1"}).countTo({from:0,to:t,speed:1500,refreshInterval:50})}),a?o.stop().animate({height:i+"%"},1500):o.stop().animate({width:i+"%"},1500)},{accX:0,accY:-80})})})}(jQuery),function(g){"use strict";g(document).ready(function(){var e;(e=g(".evc-svg-text")).length&&e.each(function(){var e=g(this),t="",a=e.data("item-class"),n=e.data("font-size-1440"),o=e.data("font-size-1366"),i=e.data("font-size-1280"),r=e.data("font-size-1024"),c=e.data("font-size-768"),s=e.data("font-size-680"),d="",l="",u="",h="",v="",f="",p="",m="";void 0!==a&&!1!==a&&(t=a),void 0!==n&&!1!==n&&(d+="font-size: "+n+" !important;",d+="height: "+n+" !important;"),void 0!==o&&!1!==o&&(l+="font-size: "+o+" !important;",l+="height: "+o+" !important;"),void 0!==i&&!1!==i&&(u+="font-size: "+i+" !important;",u+="height: "+i+" !important;"),void 0!==r&&!1!==r&&(h+="font-size: "+r+" !important;",h+="height: "+r+" !important;"),void 0!==c&&!1!==c&&(v+="font-size: "+c+" !important;",v+="height: "+c+" !important;"),void 0!==s&&!1!==s&&(f+="font-size: "+s+" !important;",f+="height: "+s+" !important;"),(d.length||l.length||u.length||h.length||v.length||f.length)&&(d.length&&(m+="@media only screen and (max-width: 1440px) {.evc-svg-text."+t+" { "+d+" } }"),l.length&&(m+="@media only screen and (max-width: 1366px) {.evc-svg-text."+t+" { "+l+" } }"),u.length&&(m+="@media only screen and (max-width: 1280px) {.evc-svg-text."+t+" { "+u+" } }"),h.length&&(m+="@media only screen and (max-width: 1024px) {.evc-svg-text."+t+" { "+h+" } }"),v.length&&(m+="@media only screen and (max-width: 768px) {.evc-svg-text."+t+" { "+v+" } }"),f.length&&(m+="@media only screen and (max-width: 680px) {.evc-svg-text."+t+" { "+f+" } }")),m.length&&(p='<style type="text/css">'+m+"</style>"),p.length&&g("head").append(p)})})}(jQuery),function(i){"use strict";i(document).ready(function(){!function(){var e=i(".evc-tabs");e.length&&e.each(function(){var e=i(this),t=e.find(".evc-tabs-item");t.each(function(e){e+=1;var t=i(this),a=t.attr("id"),n=t.parent().find(".evc-tabs-nav li:nth-child("+e+") a"),o=n.attr("href");-1<(a="#"+a).indexOf(o)&&n.attr("href",a)}),e.tabs(),e.appear(function(){e.css({visibility:"visible"}),a(t)}),e.find(".evc-tabs-nav li").each(function(){i(this).children().on("click",function(){setTimeout(function(){a(t)},50)})})});function a(e){e.each(function(){var e=i(this);e.is(":visible")?e.addClass("evc-active"):e.removeClass("evc-active")})}}()})}(jQuery),function(s){"use strict";s(document).ready(function(){var e;(e=s(".evc-text-marquee")).length&&e.each(function(){var t=s(this),e=t.find(".evc-tm-element"),i=e.filter(".evc-tm-original"),r=e.filter(".evc-tm-aux"),c=function(e){return t.outerWidth()>e.outerWidth()?t.outerWidth():e.outerWidth()};!function(){window.requestNextAnimationFrame=function(){var a,n,e=navigator.userAgent,t=0,o=this;return window.webkitRequestAnimationFrame&&(n=function(e){void 0===e&&(e=+new Date),o.callback(e)},a=window.webkitRequestAnimationFrame,window.webkitRequestAnimationFrame=function(e,t){o.callback=e,a(n,t)}),window.mozRequestAnimationFrame&&(t=e.indexOf("rv:"),-1!==e.indexOf("Gecko")&&"2.0"===e.substr(t+3,3)&&(window.mozRequestAnimationFrame=void 0)),window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e,t){var a,n;window.setTimeout(function(){a=+new Date,e(a),n=+new Date,o.timeout=1e3/60-(n-a)},o.timeout)}}();var o=c(i);e.css({width:o}),r.css("left",o),e.each(function(e){var t=s(this),a=0,n=function(){a-=1,t.position().left<=-o&&(t.css("left",parseInt(o-1)),a=0),t.css("transform","translate3d("+.8*a+"px,0,0)"),requestNextAnimationFrame(n),s(window).resize(function(){o=c(i),a=0,i.css("left",0),r.css("left",o)})};n()})}()})})}(jQuery);