(function(t){function e(e){for(var s,i,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},r=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"00f5":function(t,e,a){},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=r(t);return a(e)}function r(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=r,t.exports=n,n.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("4de4"),a("a9e3"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=a("c1df"),r=a.n(n),i=a("067d"),o=a.n(i),c=a("8c4f"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Dashboard")],1)},u=[],d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container border-bottom border-left border-right"},[a("div",{staticClass:"row"},[a("main",{staticClass:"col-md-12 ml-sm-auto col-lg-12 px-md-4",attrs:{role:"main"}},[a("div",{staticClass:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"},[a("h1",{staticClass:"logo"},[a("a",{class:[t.darkTheme?"text-clear":"text-dark"],attrs:{href:"#"},on:{click:function(e){return t.toggleTheme()}}},[a("svg",{attrs:{width:"2.5em",height:"2.5em",viewBox:"0 0 528.66 637.82",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M142.07 541.14c5.36-3.06 41.73-24.74 57.52-57.7 17.07-35.62 19.57-57.07 19-68.67-.83-17.08-4.55-38.71-21.62-67.65s-42.86-7.59-65.16-10.27c-33.33-4-3.66-28.73 17.12-58.41s0-65.89 14.67-109.33c10.34-30.53 31.25-53 68.61-68.33-.87-9.31.2-21.91 11.73-24.16 10.34-2 18.08 5.78 22.94 13.14 3.69-.9 7.48-1.76 11.39-2.57 76.18-15.84 124.25 14.13 148 41.59s34.89 50.65 44.91 69.2 87.24 32 78.09 43.14c-10.85 13.28-77 5.83-85.88 6.95s-6.31 9.28-4.82 17.81 16.33 18.18 25.6 27.83 17.44 34.14 20.41 43.78-3.8 10.63-8.53 10.76c-7.39.2-21.89-5.19-26.71 1.48s5.57 26.71 6.92 33-2.1 5.57-.24 11.5-7.42 12.24-8.9 25.6 14.64 32.48-3.71 45.05c-13.45 9.21-13.91 3.37-47.31.59S384.34 469.38 381 495c-2.4 18.38 4.67 48.52 8.85 64.06 1.13.72 2.27 1.43 3.4 2.17 69 45.64 91.27 152.9 91.27 152.9C336.47 575 88.25 581.25 88.25 581.25a259.21 259.21 0 0153.82-40.11z",transform:"translate(-88.25 -76.29)"}}),a("path",{staticClass:"cls-1",attrs:{d:"M473.64 386.77s28.94-1.86 37.85 14.1 17.43 54.13 23.74 73.83 11.5 30.42 16.33 28.2 10.39-12.24 6.68-29.68 7-21.15 25.6-20.41 36 .3 32.65 21.52c-3.52 22-5.94 59.74-31.91 67.53s-52.33-10.39-62.71-44.52-11.63-81.22-24.87-92.92c-8.58-7.56-23.31-6.31-23.31-6.31z",transform:"translate(-88.25 -76.29)"}})])])]),a("div",{staticClass:"btn-toolbar mb-2 mb-md-0"})]),a("div",{staticClass:"row no-gutters mb-2 border"},[a("div",{staticClass:"col-sm-12 col-lg-9"},[a("div",{staticClass:"d-flex align-items-center",staticStyle:{height:"340px",padding:"0 0 0 25px"}},[a("MultiLineChart",{attrs:{data:t.dataSeries,height:370,width:960,"dark-theme":t.darkTheme}})],1)]),a("div",{staticClass:"col-lg-3 d-none d-lg-block"},[a("div",{staticClass:"d-flex flex-column border-lg-left h-100"},[a("div",{staticClass:"p-2 flex-fill w-100"},[a("pre",{class:{"text-clear":t.darkTheme}},[t._v(t._s(t.eventSummary))])])])]),a("div",{staticClass:"col-12 border-top pl-1 ",class:{"player-controls-dark":t.darkTheme}},[a("div",{staticClass:"btn-toolbar d-flex align-items-center",attrs:{role:"toolbar","aria-label":"Toolbar with button groups"}},[a("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"First group"}},[t.hidePlay()?t._e():a("button",{staticClass:"btn btn-link btn-play",class:{"text-clear":t.darkTheme},attrs:{type:"button"},on:{click:function(e){return t.play()}}},[a("svg",{staticClass:"bi bi-play-fill",attrs:{width:"1.7em",height:"1.7em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"}})])]),t.hidePause()?t._e():a("button",{staticClass:"btn btn-link btn-pause",class:{"text-clear":t.darkTheme},attrs:{type:"button"},on:{click:function(e){return t.pause()}}},[a("svg",{staticClass:"bi bi-pause",attrs:{width:"1.7em",height:"1.7em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"}})])])]),a("div",{staticClass:"input-group",class:{"text-clear":t.darkTheme}},[a("span",{staticClass:"small duration"},[t._v(t._s(t._f("duration")(t.player.current))+"/"+t._s(t._f("duration")(t.player.duration)))])]),a("div",{staticClass:"flex-grow-1 mx-3"},[a("vue-slider",{attrs:{adsorb:!0,value:t.currentInterval,min:t.player.min,max:t.player.duration,lazy:!0,"enable-cross":!1,tooltip:"none",silent:!0},on:{change:t.onChange}})],1),a("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"First group"}},[a("button",{directives:[{name:"show",rawName:"v-show",value:t.player.current>2,expression:"player.current > 2"}],staticClass:"btn btn-link btn-zoom",class:{"text-clear":t.darkTheme},attrs:{type:"button"},on:{click:function(e){return t.zoomIn()}}},[a("svg",{staticClass:"bi bi-zoom-in",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"}}),a("path",{attrs:{d:"M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"}}),a("path",{attrs:{"fill-rule":"evenodd",d:"M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"}})])])])])])]),a("div",{staticClass:"d-flex justify-content-between mb-2"},[a("div",{staticClass:"status-message",class:{"text-clear":t.darkTheme}},[t._v(" "+t._s(t.status())+" ")]),a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.metrics.length>1,expression:"metrics.length > 1"}],class:{"text-clear":t.darkTheme}},t._l(t.metrics,(function(e,s){return a("div",{key:s,staticClass:"form-check form-check-inline mr-0 ml-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.filters,expression:"filters"}],staticClass:"form-check-input pointer",attrs:{type:"checkbox",id:e},domProps:{value:e,checked:Array.isArray(t.filters)?t._i(t.filters,e)>-1:t.filters},on:{change:function(a){var s=t.filters,n=a.target,r=!!n.checked;if(Array.isArray(s)){var i=e,o=t._i(s,i);n.checked?o<0&&(t.filters=s.concat([i])):o>-1&&(t.filters=s.slice(0,o).concat(s.slice(o+1)))}else t.filters=r}}}),a("label",{staticClass:"form-check-label pointer",attrs:{for:e}},[t._v(t._s(e))])])})),0)])]),a("div",[a("virtual-list",{staticClass:"list-infinite scroll-touch border-top",attrs:{"data-key":"id","data-sources":t.items,"data-component":t.itemComponent,"estimate-size":79,"item-class":"list-item-infinite","footer-class":"loader-wrapper"},on:{tobottom:t.onScrollToBottom}},[a("div",{staticClass:"loader",attrs:{slot:"footer"},slot:"footer"})])],1)])])])},f=[],h=(a("99af"),a("cb29"),a("4160"),a("c975"),a("a15b"),a("d81d"),a("13d5"),a("fb6a"),a("a434"),a("b0c0"),a("4fad"),a("b64b"),a("d3b7"),a("07ac"),a("ac1f"),a("3ca3"),a("466d"),a("159b"),a("ddb0"),a("2909")),m=a("5530"),b=a("3835"),p=a("2ef0"),v=a("bac2"),j=a.n(v),g=a("5698"),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-100 h-100",attrs:{id:"chart"}})},x=[],w={name:"MultiLineChart",props:{data:{type:Object,default:function(){return{}},required:!0},height:{type:Number,default:0,required:!0},width:{type:Number,default:0,required:!0},darkTheme:{type:Boolean,default:!1,required:!1}},data:function(){return{x:null,y:null,line:null,focus:null,margin:{top:20,right:20,bottom:30,left:30}}},computed:{chartWidth:function(){return Math.max(this.width-this.margin.left-this.margin.right,0)},chartHeight:function(){return this.height}},watch:{data:function(){var t=this;g["k"]("#chart").selectAll("svg").remove(),this.x=g["j"]().domain(g["d"](this.data.dates)).nice().range([this.margin.left,this.chartWidth-this.margin.right]),this.y=g["i"]().domain([0,g["g"](this.data.series,(function(t){return g["g"](t.values)}))]).nice().range([this.chartHeight-this.margin.bottom,this.margin.top]),this.line=g["f"]().defined((function(t){return!isNaN(t)})).x((function(e,a){return t.x(t.data.dates[a])})).y((function(e){return t.y(e)})),this.chart()}},mounted:function(){var t=this;this.prepareComponent(),g["k"]("#chart").selectAll("svg").remove(),this.x=g["j"]().domain(g["d"](this.data.dates)).range([this.margin.left,this.chartWidth-this.margin.right]),this.y=g["i"]().domain([0,g["g"](this.data.series,(function(t){return g["g"](t.values)}))]).nice().range([this.chartHeight-this.margin.bottom,this.margin.top]),this.line=g["f"]().defined((function(t){return!isNaN(t)})).x((function(e,a){return t.x(t.data.dates[a])})).y((function(e){return t.y(e)})),this.chart()},methods:{prepareComponent:function(){},xAxis:function(t){return t.attr("transform","translate(0,".concat(this.chartHeight-this.margin.bottom,")")).call(g["a"](this.x).ticks(this.chartWidth/80).tickSizeOuter(0)).selectAll("text").style("text-anchor","end").attr("dx","-.8em").attr("dy",".15em").attr("transform","rotate(-35)")},yAxis:function(t){var e=this;return t.attr("transform","translate(".concat(this.margin.left,",0)")).call(g["b"](this.y)).call((function(t){return t.select(".domain").remove()})).call((function(t){return t.select(".tick:last-of-type text").clone().attr("x",3).attr("text-anchor","start").attr("font-weight","bold").text(e.data.y)}))},moved:Object(p["throttle"])((function(t,e,a,s){t.preventDefault();var n=g["h"](t,Object(p["get"])(s,"_groups.0.0")),r=this.x.invert(n[0]),i=this.y.invert(n[1]),o=g["c"](this.data.dates,r),c=g["e"](this.data.series,(function(t){return Math.abs(t.values[o]-i)}));e.attr("stroke",(function(t){return t===c?null:"#ddd"})).filter((function(t){return t===c})).raise(),a.attr("transform","translate(".concat(this.x(this.data.dates[o]),",").concat(this.y(c.values[o]),")")),a.select("line.x").attr("x1",0).attr("x2",-this.x(this.data.dates[o])).attr("y1",0).attr("y2",0),a.select("line.y").attr("x1",0).attr("x2",0).attr("y1",0).attr("y2",this.chartHeight-this.y(c.values[o])),a.select("text").attr("class","chart-tip").text("".concat(g["m"]("%a %b %e %X %Y")(r)," | ").concat(c.name," ").concat(c.values[o]))}),60),entered:Object(p["throttle"])((function(t,e){t.style("mix-blend-mode",null).attr("stroke","#ddd"),e.attr("display",null)}),60),left:Object(p["throttle"])((function(t,e){t.style("mix-blend-mode",null).attr("stroke",null),e.attr("display","none")}),60),hover:Object(p["throttle"])((function(t,e,a){var s=this;"ontouchstart"in document?t.style("-webkit-tap-highlight-color","transparent").on("touchmove",(function(n){s.moved(n,e,a,t)})).on("touchstart",(function(){s.entered(e,a)})).on("touchend",(function(){s.left(e,a)})):t.on("mousemove",(function(n){s.moved(n,e,a,t)})).on("mouseenter",(function(){s.entered(e,a)})).on("mouseover",(function(){return a.style("display",null)})).on("mouseleave",(function(){s.left(e,a)})),g["l"](".focus"),g["l"](".focus circle").attr("class","circle").style("fill","none"),g["l"](".focus line").style("fill","none").style("stroke-width","1.5px").style("stroke-dasharray","3 3")}),60),chart:function(){var t=this;if(this.data.series.length){var e=g["k"]("#chart").append("svg").attr("viewBox",[0,0,this.chartWidth,this.chartHeight]).style("overflow","visible");e.append("g").attr("class","xAxis").call(this.xAxis),e.append("g").attr("class","yAxis").call(this.yAxis);var a=e.append("g").attr("class","chart-lines").attr("fill","none").attr("stroke-width",1).attr("stroke-linejoin","round").attr("stroke-linecap","round").selectAll("path").data(this.data.series).join("path").attr("d",(function(e){return t.line(e.values)})),s=e.append("g").attr("class","focus").style("display","none");s.append("circle").attr("r",6).attr("font-weight","bold"),s.append("line").classed("x",!0),s.append("line").classed("y",!0),s.append("text").attr("text-anchor","middle").attr("y",-30),e.call(this.hover,a,s)}}}},k=w,C=a("0c7c"),z=Object(C["a"])(k,y,x,!1,null,null,null),O=z.exports,A=a("d7ac"),_=a.n(A),P=a("386c"),S=a.n(P),T=a("f633"),D=a.n(T),E=a("89c1"),M=a.n(E),N=a("4971"),I=a.n(N),L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item-inner"},[a("div",{staticClass:"d-flex event",staticStyle:{"min-height":"50px"}},[a("div",{staticClass:"p-2 flex-shrink-1 border-right",staticStyle:{"min-width":"170px"}},[t._v(t._s(t.source.datetime))]),a("div",{staticClass:"p-2 w-100"},[t._v(t._s(t.source.event))])])])},H=[],Y={name:"infinite-loading-item",props:{source:{type:Object,default:function(){return{}}}}},V=Y,q=Object(C["a"])(V,L,H,!1,null,null,null),B=q.exports,U=(a("24df"),{}),F=[],G=D.a.pool(),R={name:"DashboardV2",components:{VirtualList:M.a,MultiLineChart:O,VueSlider:I.a},data:function(){return{items:[],itemComponent:B,messageStatus:"connecting...",eventSummary:null,dataSeries:{y:"events",series:[],dates:[]},dates:[],ph:330,pw:1e3,darkTheme:!1,metrics:[],filters:[],player:{current:0,duration:0,min:0,ref:null,status:{PLAYING:!1,PAUSED:!0,LIVE:!1}},zoom:!1,zoomDomain:[]}},computed:{domain:function(){var t=this.dates;return t.sort((function(t,e){return t-e})),[t[0],t[t.length-1]]},currentInterval:function(){var t=Number(this.player.current);return this.zoom&&this.zoomDomain.length?this.zoomDomain:t},datetimeRange:function(){var t=Array.isArray(this.currentInterval),e=t?this.currentInterval[1]:this.currentInterval;if(!e)return[];for(var a=Object(b["a"])(this.domain,1),s=a[0],n=[s],r=1;r<e;r+=1)n.push(s+r);return t?n.slice(Math.max(this.currentInterval[0]-1,0)):n}},watch:{darkTheme:function(t){t?document.body.className="darkTheme":document.body.removeAttribute("class")},filters:function(){this.render()},zoomDomain:function(){this.render()},"player.current":function(){this.render()}},mounted:function(){this.prepareComponent(),this.handleResize()},created:function(){window.addEventListener("resize",this.handleResize),this.handleResize()},destroyed:function(){},methods:{prepareComponent:function(){var t=this;this.websocket(),S.a.change((function(e,a){"visible"===a&&t.player.duration>0&&window.requestAnimationFrame(t.sync)}))},handleResize:function(){},get:function(t,e,a){if(e){var s=Array.isArray(e)?e:e.match(/([^[.\]])+/g);return s.reduce((function(t,e){return t&&t[e]}),t)||a}},set:function(t,e,a){var s=Array.isArray(e)?e:e.match(/([^[.\]])+/g);s.reduce((function(t,e,n){return void 0===t[e]&&(t[e]={}),n===s.length-1&&(t[e]=a),t[e]}),t)},omit:function(t,e){var a=Object(m["a"])({},t);return e.forEach((function(t){return delete a[t]})),a},save:function(t){-1===this.metrics.indexOf(t.name)&&(this.metrics.push(t.name),this.filters.push(t.name)),this.dates.push(t.timestamp);var e="".concat(t.timestamp,".").concat(t.name),a=this.get(U,e);this.set(U,e,Array.isArray(a)?a.concat(t.events):[].concat(t.events))},format:function(t){return G.exec((function(t){return new Promise((function(e){var a=t.values.map((function(e){return Object.assign({metric:t.metric},t.tags,e)}));e({name:"".concat(t.metric).concat(t.tags.type?":".concat(t.tags.type):""),timestamp:t.timestamp,events:a})}))}),[t]).then(this.save)},websocket:function(){var t,e=this,a=function(t){var a=JSON.parse(_.a.inflate(t.data,{to:"string"}));Promise.all(a.map(e.format)).then((function(){e.metrics.sort(),e.player.status.PAUSED&&window.requestAnimationFrame(e.sync)}))},s=function(){e.messageStatus="connected"},n=function n(){t&&(e.messageStatus="connecting..."),t=new WebSocket("ws://".concat(window.location.host)),t.addEventListener("open",s),t.addEventListener("message",a),t.addEventListener("close",Object(p["debounce"])(n,8e3))};n()},toggleTheme:function(){this.darkTheme=!this.darkTheme},zoomIn:function(){this.stopPlayer(),this.zoom=!this.zoom},onChange:function(t){if(Array.isArray(t)){var e=Object(b["a"])(t,2),a=e[0],s=e[1];this.zoomDomain=[a,s],this.player.current=s}else this.zoomDomain=[0,t],this.player.current=t},status:function(){return this.messageStatus},play:function(){if(this.player.current!==this.player.duration){var t=this;t.togglePausePlay(),t.player.ref=setInterval((function(){t.player.current<t.player.duration?t.player.current=Number(t.player.current)+1:t.pause()}),1e3)}},sync:Object(p["debounce"])((function(){var t=Object(b["a"])(this.domain,2),e=t[0],a=t[1],s=r.a.utc(e,"X"),n=r.a.utc(a,"X"),i=r.a.duration(n.diff(s)).asSeconds();this.player.duration=i+1}),500),pause:function(){this.togglePausePlay(),clearInterval(this.player.ref)},hidePlay:function(){return this.player.status.PLAYING},hidePause:function(){return this.player.status.PAUSED},togglePausePlay:function(){this.player.status.PLAYING=!this.player.status.PLAYING,this.player.status.PAUSED=!this.player.status.PAUSED},stopPlayer:function(){this.player.status.PLAYING&&(this.player.status.PLAYING=!1,this.player.status.PAUSED=!0,clearInterval(this.player.ref))},getPageData:function(t){var e=this,a=[];return F.splice(0,t).forEach((function(t){a.push({id:Date.now()+Math.random(),datetime:t.datetime,event:Object.entries(e.omit(t,["datetime","timestamp"])).map((function(t){return t.join(": ")})).join(" ")})})),a},onScrollToBottom:function(){var t;(t=this.items).push.apply(t,Object(h["a"])(this.getPageData(20)))},getTimeSeries:function(){var t=this;if(!this.player.duration)return{};var e=this.datetimeRange,a={},s={};this.items=null,this.items=[],F=null,F=[],e.forEach((function(s,n){if(U[s]){var r=t.filters.length>0?Object(p["pick"])(U[s],t.filters):{};Object.keys(r).forEach((function(t){var s;a[t]||(a[t]={name:t,values:Array(e.length).fill(0)}),a[t].values[n]=r[t].length,(s=F).push.apply(s,Object(h["a"])(r[t]))}))}}));var n=Object.values(a);return n.forEach((function(t){s[t.name]=t.values.reduce((function(t,e){return t+e}),0)})),F.reverse(),{domain:e,series:n,count:s}},render:Object(p["debounce"])((function(){if("hidden"!==S.a.state()){var t=this,e=this.getTimeSeries();if(Object.keys(e).length){var a=function(){t.items=t.getPageData(10),t.eventSummary=j()(e.count,!0,15),t.dataSeries={y:"events",series:e.series,dates:e.domain.map(Object(g["n"])("%s"))}};window.requestAnimationFrame(a)}}}),250)}},W=R,$=(a("c5cb"),Object(C["a"])(W,d,f,!1,null,null,null)),J=$.exports,X={name:"Home",components:{Dashboard:J}},K=X,Q=Object(C["a"])(K,l,u,!1,null,null,null),Z=Q.exports;s["default"].use(c["a"]);var tt=[{path:"/",name:"Home",component:Z}],et=new c["a"]({mode:"history",base:"/",routes:tt}),at=et,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},nt=[],rt=(a("5c0b"),{}),it=Object(C["a"])(rt,st,nt,!1,null,null,null),ot=it.exports,ct=(a("ab8b"),"production");s["default"].config.devtools="production"!==ct,s["default"].config.productionTip="production"!==ct,s["default"].filter("duration",(function(t){return o()(1e3*Number(t))})),s["default"].filter("datetime",(function(t){return t?r()(t).format("YYYY-MM-DD HH:mm:ss"):""})),new s["default"]({router:at,render:function(t){return t(ot)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("00f5")},"752f":function(t,e,a){},c5cb:function(t,e,a){"use strict";a("752f")}});