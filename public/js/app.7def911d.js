(function(t){function e(e){for(var r,l,o=e[0],u=e[1],b=e[2],i=0,j=[];i<o.length;i++)l=o[i],Object.prototype.hasOwnProperty.call(c,l)&&c[l]&&j.push(c[l][0]),c[l]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);d&&d(e);while(j.length)j.shift()();return a.push.apply(a,b||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var u=n[o];0!==c[u]&&(r=!1)}r&&(a.splice(e--,1),t=l(l.s=n[0]))}return t}var r={},c={app:0},a=[];function l(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=r,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var b=0;b<o.length;b++)e(o[b]);var d=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"3b01":function(t,e,n){"use strict";n("df4a")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=Object(r["d"])("h1",null,"mStable - Voting Participation",-1),a={key:0},l={key:1},o={key:0},u={key:1};function b(t,e,n,b,d,i){var j=Object(r["h"])("Table");return Object(r["e"])(),Object(r["c"])(r["a"],null,[c,b.error?(Object(r["e"])(),Object(r["c"])("div",a,Object(r["i"])(b.error),1)):(Object(r["e"])(),Object(r["c"])("div",l,[b.data.length?(Object(r["e"])(),Object(r["c"])("div",o,[Object(r["d"])(j,{data:b.data},null,8,["data"])])):(Object(r["e"])(),Object(r["c"])("div",u,"Loading"))]))],64)}var d=n("1da1"),i=(n("96cf"),n("d3b7"),n("b680"),{key:0}),j={key:1},O={class:"table-container"},s=Object(r["d"])("thead",null,[Object(r["d"])("tr",null,[Object(r["d"])("th",null,"Title"),Object(r["d"])("th",null,"Start"),Object(r["d"])("th",null,"End"),Object(r["d"])("th",null,"Voter Percent"),Object(r["d"])("th",null,"Num Voters"),Object(r["d"])("th",null,"Total Holders"),Object(r["d"])("th",null,"vMTA Percent"),Object(r["d"])("th",null,"vMTA voted"),Object(r["d"])("th",null,"vMTA total"),Object(r["d"])("th",null,"State")])],-1);function p(t,e,n,c,a,l){return 0==c.tableData.length?(Object(r["e"])(),Object(r["c"])("div",i,"Table is empty")):(Object(r["e"])(),Object(r["c"])("div",j,[Object(r["d"])("div",O,[Object(r["d"])("table",null,[s,Object(r["d"])("tbody",null,[(Object(r["e"])(!0),Object(r["c"])(r["a"],null,Object(r["g"])(c.tableData,(function(t){return Object(r["e"])(),Object(r["c"])("tr",{key:t._id},[Object(r["d"])("td",null,Object(r["i"])(t.title),1),Object(r["d"])("td",null,Object(r["i"])(t.start),1),Object(r["d"])("td",null,Object(r["i"])(t.end),1),Object(r["d"])("td",null,Object(r["i"])((t.votersNum/t.votersTotal*100).toFixed(2))+"%",1),Object(r["d"])("td",null,Object(r["i"])(t.votersNum),1),Object(r["d"])("td",null,Object(r["i"])(t.votersTotal),1),Object(r["d"])("td",null,Object(r["i"])((t.scoreNum/t.scoreTotal*100).toFixed(2))+"%",1),Object(r["d"])("td",null,Object(r["i"])(t.scoreNum.toFixed(2)),1),Object(r["d"])("td",null,Object(r["i"])(t.scoreTotal.toFixed(2)),1),Object(r["d"])("td",null,Object(r["i"])(t.state),1)])})),128))])])])]))}var f={name:"Table",props:["data"],setup:function(t){return{tableData:t.data}}};n("3b01");f.render=p;var v=f,h={name:"App",components:{Table:v},setup:function(){var t=Object(r["f"])([]),e=Object(r["f"])(null),n=function(){var n=Object(d["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://hq-server-ju8ry.ondigitalocean.app/api/proposals");case 3:if(r=n.sent,r.ok){n.next=6;break}throw Error("Data not fetched");case 6:return n.next=8,r.json();case 8:t.value=n.sent,n.next=14;break;case 11:n.prev=11,n.t0=n["catch"](0),e.value=n.t0.message;case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}();return n(),{data:t,error:e}}};n("e339");h.render=b;var y=h;Object(r["b"])(y).mount("#app")},"84e2":function(t,e,n){},df4a:function(t,e,n){},e339:function(t,e,n){"use strict";n("84e2")}});
//# sourceMappingURL=app.7def911d.js.map