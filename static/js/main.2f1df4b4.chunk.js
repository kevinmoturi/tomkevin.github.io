(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n(35)},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(19),c=n.n(r),l=(n(28),n(8)),i=n(9),s=n(11),u=n(10),m=n(12),v=n(20),h=n(5),b=(n(29),n(30),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).componentDidMount=function(){var e=document.querySelector(".navbar"),t=document.querySelector(".section-one");console.log(t),new IntersectionObserver(function(t,n){t.forEach(function(t){console.log(t),console.log("".concat(JSON.stringify(t.isIntersecting))),t.isIntersecting?e.classList.remove("navbar-scrolled"):e.classList.add("navbar-scrolled")})},{rootMargin:"-200px 0px 0px 0px"}).observe(t)},n.navToggler=function(){var e=document.querySelector(".navbar-toggler"),t=document.querySelector(".navbar ul");e.classList.toggle("open-navbar-toggler"),t.classList.toggle("open")},n.smoothScroll=function(e){e.preventDefault();var t=e.currentTarget.getAttribute("href");console.log(t),window.scrollTo({top:document.querySelector(t).offsetTop,behavior:"smooth"})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return document.querySelectorAll(".navbar a").forEach(function(e){return e.addEventListener("click",function(){var e=document.querySelector(".navbar-toggler");document.querySelector(".navbar ul").classList.contains("open")&&e.click()})}),o.a.createElement("div",null,o.a.createElement("nav",{className:"navbar nav-scrolled"},o.a.createElement("a",{className:"navbar-brand",href:"/profile"},o.a.createElement("span",null,"K"),"EVIN ",o.a.createElement("span",null,"M"),"OTURI"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"#home",onClick:this.smoothScroll},"Home")),o.a.createElement("li",null,o.a.createElement("a",{href:"#about",onClick:this.smoothScroll},"About")),o.a.createElement("li",null,o.a.createElement("a",{href:"#about",onClick:this.smoothScroll},"Technologies"))),o.a.createElement("button",{className:"navbar-toggler",onClick:function(){return e.navToggler()}},o.a.createElement("span",null))),o.a.createElement("section",{className:"section-one",id:"home"},o.a.createElement("h1",null,"Section One")),o.a.createElement("section",{id:"about"},o.a.createElement("h1",null,"Section Two")))}}]),t}(a.Component)),f=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(v.a,null,o.a.createElement(h.c,null,o.a.createElement(h.a,{path:"/",exact:!0,strict:!0,component:b}),o.a.createElement(h.a,{exact:!0,component:b})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.2f1df4b4.chunk.js.map