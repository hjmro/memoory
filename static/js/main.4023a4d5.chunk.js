(this.webpackJsonpmemoory=this.webpackJsonpmemoory||[]).push([[0],[,,,,,,,function(e,a,n){e.exports=n(15)},,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),o=n.n(t),c=n(5),i=n.n(c),l=(n(12),n(6)),r=n(3);n(13),n(14);function s(e){e.id;var a=e.sound,n=e.isFlipped,t=e.name,c=e.flipCard;return console.log("flipped",n),o.a.createElement("div",{className:"card ".concat(n?"flipped":""),onClick:function(){a.play(),n||c()}},o.a.createElement("div",null,n?t:o.a.createElement("img",{className:"cardImage",alt:"Card faced down",src:"/static/Images/Behind.jpg"})))}var d=[{id:1,name:"Bill",call:new Audio("/static/Sounds/Cow1.m4a")},{id:2,name:"Dagros",call:new Audio("/static/Sounds/Cow1.m4a")},{id:3,name:"Kua",call:new Audio("/static/Sounds/Cow1.m4a")},{id:4,name:"Dolly",call:new Audio("/static/Sounds/Cow1.m4a")}],m=new Audio("/static/Sounds/Ambience.mp3");var u=function(){var e=Object(t.useState)([]),a=Object(r.a)(e,2),n=a[0],c=a[1],i=Object(t.useState)(d),u=Object(r.a)(i,2),p=u[0],f=(u[1],Object(t.useState)(!1)),w=Object(r.a)(f,2),h=w[0],v=w[1];return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("h1",null,"MeMOOry")),h?p.map((function(e){return o.a.createElement(s,{key:e.id,sound:e.call,id:e.id,name:e.name,isFlipped:n.includes(e.id),flipCard:function(){return a=e.id,c([].concat(Object(l.a)(n),[a]));var a}})})):o.a.createElement("button",{onClick:function(){v(!0),m.play()}},"Start matching Moos"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.4023a4d5.chunk.js.map