(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,n,t){e.exports=t(53)},38:function(e,n,t){},40:function(e,n,t){},53:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(14),c=t.n(o),l=(t(38),t(22)),i=t.n(l),s=t(21),u=t(27),d=t(29),h=(t(40),t(67)),m=t(66),f=t(64),g=Object(h.a)(m.a)({backgroundColor:"#ff6501",maxWidth:"400px",alignSelf:"center",marginTop:"20vh",color:"white",fontWeight:"600"}),p=Object(h.a)(f.a)({color:"#ff6501",alignSelf:"center",marginTop:"20vh"});var b=function(){var e=Object(a.useState)({loading:!1,headings:[]}),n=Object(d.a)(e,2),t=n[0],o=n[1],c=function(){var e=Object(u.a)(i.a.mark(function e(){var n,t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o(function(e){return Object(s.a)({},e,{loading:!0})}),e.next=3,fetch("http://165.227.192.56:3000");case 3:return n=e.sent,e.next=6,n.json();case 6:t=e.sent,o(function(e){return Object(s.a)({},e,{headings:t.HNheadings})}),o(function(e){return Object(s.a)({},e,{loading:!1})});case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"These are the Hacker News headings today"))),r.a.createElement("tbody",null,t.headings.map(function(e,n){return r.a.createElement("tr",{key:n},r.a.createElement("td",null,e))}))),t.loading?r.a.createElement(p,null):t.headings&&0===t.headings.length?r.a.createElement(g,{className:"button",onClick:c},"Get latest headlines"):null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.3783fd30.chunk.js.map