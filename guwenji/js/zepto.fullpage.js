/*!
 * zepto.fullpage.js v0.3.1 (https://github.com/yanhaijing/zepto.fullpage)
 * API https://github.com/yanhaijing/zepto.fullpage/blob/master/doc/api.md
 * Copyright 2014 yanhaijing. All Rights Reserved
 * Licensed under MIT (https://github.com/yanhaijing/zepto.fullpage/blob/master/LICENSE)
 */
(function(e,h,b){if(typeof e==="undefined"){throw new Error("zepto.fullpage's script requires Zepto")}e(document).on("touchmove",function(d){d.preventDefault()});var g=null;var i={page:".page",start:0,duration:500,loop:false,drag:false,dir:"v",der:0.1,change:function(d){},beforeChange:function(d){},afterChange:function(d){},orientationchange:function(d){}};function f(l,k,d){if(l<0){return !!d?k-1:0}if(l>=k){return !!d?0:k-1}return l}function c(m,d,l){var n="0px",k="0px";if(d==="v"){k=l+"px"}else{n=l+"px"}m.css({"-webkit-transform":"translate3d("+n+", "+k+", 0px);",transform:"translate3d("+n+", "+k+", 0px);"})}function j(d){var l=e.extend(true,{},i,d);var k=this;k.curIndex=-1;k.o=l;k.startY=0;k.movingFlag=false;k.$this.addClass("fullPage-wp");k.$parent=k.$this.parent();k.$pages=k.$this.find(l.page).addClass("fullPage-page fullPage-dir-"+l.dir);k.pagesLength=k.$pages.length;k.update();k.initEvent();k.status=1}function a(k,d){this.$this=k;j.call(this,d)}e.extend(a.prototype,{update:function(){if(this.o.dir==="h"){this.width=this.$parent.width();this.$pages.width(this.width);this.$this.width(this.width*this.pagesLength)}this.height=this.$parent.height();this.$pages.height(this.height);this.moveTo(this.curIndex<0?this.o.start:this.curIndex)},initEvent:function(){var d=this;var k=d.$this;k.on("touchstart",function(l){if(!d.status){return 1}if(d.movingFlag){return 0}d.startX=l.targetTouches[0].pageX;d.startY=l.targetTouches[0].pageY});k.on("touchend",function(n){if(!d.status){return 1}if(d.movingFlag){return 0}var l=d.o.dir==="v"?(n.changedTouches[0].pageY-d.startY)/d.height:(n.changedTouches[0].pageX-d.startX)/d.width;var m=(l>d.o.der||l<-d.o.der)?l>0?-1:1:0;d.moveTo(d.curIndex+m,true)});if(d.o.drag){k.on("touchmove",function(m){if(!d.status){return 1}if(d.movingFlag){d.startX=m.targetTouches[0].pageX;d.startY=m.targetTouches[0].pageY;return 0}var o=m.changedTouches[0].pageY-d.startY;if((d.curIndex==0&&o>0)||(d.curIndex===d.pagesLength-1&&o<0)){o/=2}var l=m.changedTouches[0].pageX-d.startX;if((d.curIndex==0&&l>0)||(d.curIndex===d.pagesLength-1&&l<0)){l/=2}var n=(d.o.dir==="v"?(-d.curIndex*d.height+o):(-d.curIndex*d.width+l));k.removeClass("anim");c(k,d.o.dir,n)})}h.addEventListener("orientationchange",function(){if(h.orientation===180||h.orientation===0){d.o.orientationchange("portrait")}if(h.orientation===90||h.orientation===-90){d.o.orientationchange("landscape")}},false);h.addEventListener("resize",function(){d.update()},false)},start:function(){this.status=1},stop:function(){this.status=0},moveTo:function(k,m){var l=this;var n=l.$this;var o=l.curIndex;k=f(k,l.pagesLength,l.o.loop);if(m){n.addClass("anim")}else{n.removeClass("anim")}if(k!==o){var d=l.o.beforeChange({next:k,cur:o});if(d===false){return 1}}l.movingFlag=true;l.curIndex=k;c(n,l.o.dir,-k*(l.o.dir==="v"?l.height:l.width));if(k!==o){l.o.change({prev:o,cur:k})}h.setTimeout(function(){l.movingFlag=false;if(k!==o){l.o.afterChange({prev:o,cur:k});l.$pages.removeClass("cur").eq(k).addClass("cur")}},l.o.duration);return 0},movePrev:function(d){this.moveTo(this.curIndex-1,d)},moveNext:function(d){this.moveTo(this.curIndex+1,d)},getCurIndex:function(){return this.curIndex}});e.fn.fullpage=function(d){if(!g){g=new a(e(this),d)}return this};e.fn.fullpage.version="0.3.1";e.each(["update","moveTo","moveNext","movePrev","start","stop","getCurIndex"],function(d,k){e.fn.fullpage[k]=function(){if(!g){return 0}return g[k].apply(g,[].slice.call(arguments,0))}})}(Zepto,window));