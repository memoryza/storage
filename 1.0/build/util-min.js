/*!build time : 2013-10-30 1:05:21 AM*/
KISSY.add("gallery/storage/1.0/conf",function(){var a=location.href.indexOf("if-debug=1")>-1,b=location.href.indexOf("if-debug-log=1")>-1,c="http://gm.mmstat.com",d="http://log.mmstat.com/ued.1.1.2?type=9&_gm:id=storage&v=1.0",e={DEBUG:a,DEBUG_LOG:b,SAM_PV:.001,TIMEOUT_STORAGE:3e3,PROXY:"http://a.tbcdn.cn/s/kissy/gallery/storage/1.0/proxy.html",PROXY_TMALL:"http://www.tmall.com/go/act/stp-tm.php",PROXY_TAOBAO:"http://www.taobao.com/go/act/stp-tb.php",M:{G:d+"&t=g&d={0}",P:d+"&t=p&d={0}"},ARR:{ST_SET:c+"/tmallbrand.999.5",ST_GET:c+"/tmallbrand.999.6",ST_RM:c+"/tmallbrand.999.7",ST_CL:c+"/tmallbrand.999.8"},K:{IFRAME:"iframe",ONLOAD:"onload",XD:"xd",XD_TIMEOUT:"xdTimeout",IFRAME_TIMEOUT:"iframeTimeout",PROXY:"proxy",CALLBACK_LIST:"callbackList",CACHED_ACTION_LIST:"cachedActionList",PROXY_READY:"proxyReady"}};return e}),KISSY.add("gallery/storage/1.0/util",function(a,b){var c={log:function(){b.DEBUG_LOG&&window.console&&window.console.log&&window.console.log.apply&&window.console.log.apply(window.console,arguments)},fm:function(){if(0==arguments.length)return"";if(1==arguments.length)return arguments[0];var a,b=arguments[0];for(a=1;a<arguments.length;++a){var c=new RegExp("\\{"+(a-1)+"\\}","g");b=b.replace(c,arguments[a])}return b}},d=c;return d.sendLog=function(a){d.send(d.fm(b.M.G,encodeURIComponent(location.href))),d.send(a)},d.send=function(a){if(a){var b="__st_"+ +new Date+Math.random(),c=new Image;window[b]=c,c.src=d.fm("{0}{1}r{2}=1",a,a.indexOf("?")>-1?"&":"?",+new Date),c.onload=function(){window[b]=null}}},d},{requires:["./conf"]});