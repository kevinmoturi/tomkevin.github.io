(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/3.177e166e.jpg"},20:function(e,t,a){e.exports=a.p+"static/media/react.47ce6e77.png"},26:function(e,t,a){e.exports=a(42)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){e.exports=a.p+"static/media/nodejs.08ebf3d0.png"},35:function(e,t,a){e.exports=a.p+"static/media/graphql.8c005987.png"},36:function(e,t,a){e.exports=a.p+"static/media/laravel.f17b1720.png"},37:function(e,t,a){e.exports=a.p+"static/media/electron.3ba2a5b8.png"},42:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(22),r=a.n(c),o=(a(31),a(8)),i=a(9),s=a(11),m=a(10),u=a(12),d=a(23),v=a(5),p=(a(32),a(13)),b=(a(33),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).componentDidMount=function(){var e=document.querySelector(".navbar"),t=document.querySelector(".section-one");new IntersectionObserver(function(t,a){t.forEach(function(t){t.isIntersecting?e.classList.remove("navbar-scrolled"):e.classList.add("navbar-scrolled")})},{rootMargin:"-200px 0px 0px 0px"}).observe(t)},a.navToggler=function(){var e=document.querySelector(".navbar-toggler"),t=document.querySelector(".navbar ul");e.classList.toggle("open-navbar-toggler"),t.classList.toggle("open")},a.smoothScroll=function(e){e.preventDefault();var t=e.currentTarget.getAttribute("href");window.scrollTo({top:document.querySelector(t).offsetTop,behavior:"smooth"})},a.removeBorder=function(){document.querySelectorAll(".tab-item").forEach(function(e){e.classList.remove("tab-border")})},a.removeShow=function(){document.querySelectorAll(".tab-content-item").forEach(function(e){e.classList.remove("show")})},a.selectItem=function(e){var t=document.querySelector("#".concat(e.currentTarget.id));a.removeBorder(),a.removeShow(),t.classList.add("tab-border"),document.querySelector("#".concat(e.currentTarget.id,"-content")).classList.add("show")},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return document.querySelectorAll(".navbar a").forEach(function(e){return e.addEventListener("click",function(){var e=document.querySelector(".navbar-toggler");document.querySelector(".navbar ul").classList.contains("open")&&e.click()})}),document.querySelectorAll(".tab-item").forEach(function(t){t.addEventListener("click",e.selectItem)}),l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar nav-scrolled"},l.a.createElement("a",{className:"navbar-brand",href:"/"},l.a.createElement("span",null,"K"),"EVIN ",l.a.createElement("span",null,"M"),"OTURI"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#home",onClick:this.smoothScroll},"Home")),l.a.createElement("li",null,l.a.createElement("a",{href:"#about",onClick:this.smoothScroll},"About")),l.a.createElement("li",null,l.a.createElement("a",{href:"#skillset",onClick:this.smoothScroll},"Skill Set"))),l.a.createElement("button",{className:"navbar-toggler",onClick:function(){return e.navToggler()}},l.a.createElement("span",null))),l.a.createElement("section",{className:"section-one",id:"home"},l.a.createElement("img",{src:a(19),alt:"Kevin Moturi"}),l.a.createElement("h1",null,"Hi, I'm Kevin"),l.a.createElement("h4",null,"Full Stack Software Developer")),l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"intro"},l.a.createElement("div",{className:"intro-text"},l.a.createElement("h1",null,"Little About Me"),l.a.createElement("p",null,"Hello There, I'm Kevin Moturi. I am a passionate, scalable and flexible full stack software developer with key interest in javascript. I am able to make wide range of applications for web, mobile and desktop."),l.a.createElement("p",null,"I Have a strong work ethic and go beyond expectations to achieve project targets. I am also continually learning new languages and development techniques for career advancement."),l.a.createElement("p",null,"Please scroll through to view my skill sets.")),l.a.createElement("div",{className:"intro-image"},l.a.createElement("img",{src:a(19),alt:"Kevin Moturi"})))),l.a.createElement("section",{id:"skillset"},l.a.createElement("div",{className:"tabs"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{id:"tab-1",className:"tab-item tab-border",onClick:this.selectItem},l.a.createElement(p.a,{className:"icon"}),l.a.createElement("p",{className:"hide-sm"},"Web Development")),l.a.createElement("div",{id:"tab-2",className:"tab-item",onClick:this.selectItem},l.a.createElement(p.c,{className:"icon"}),l.a.createElement("p",{className:"hide-sm"},"Mobile Development")),l.a.createElement("div",{id:"tab-3",className:"tab-item",onClick:this.selectItem},l.a.createElement(p.b,{className:"icon"}),l.a.createElement("p",{className:"hide-sm"},"Desktop Development")))),l.a.createElement("div",{className:"tab-content"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{id:"tab-1-content",className:"tab-content-item show"},l.a.createElement("div",{className:"tab-1-content-inner"},l.a.createElement("div",null,l.a.createElement("h1",null,"React JS - Frontend"),l.a.createElement("p",{className:"text-lg"},"I use react because its fast, simple and scalable and allows me to create reusable ui components and its easy to integrate other external javascript libraries with it.")),l.a.createElement("img",{src:a(20),alt:"Kevin Moturi"})),l.a.createElement("div",{className:"tab-1-content-inner"},l.a.createElement("div",null,l.a.createElement("h1",null,"Node JS - Backend"),l.a.createElement("p",{className:"text-lg"},"Node JS has enabled me to build reat-time applications that are light weight and efficient.")),l.a.createElement("img",{src:a(34),alt:"Kevin Moturi"})),l.a.createElement("div",{className:"tab-1-content-inner"},l.a.createElement("div",null,l.a.createElement("h1",null,"GraphQL - (Frontend / Backend)"),l.a.createElement("p",{className:"text-lg"},"It a syntax that describes how to ask for data, and is generally used to load data from a server to a client. User's in applications i make with graphql are able to make a single call to fetch the required information rather than to construct several REST requests to fetch the same")),l.a.createElement("img",{src:a(35),alt:"Kevin Moturi"})),l.a.createElement("div",{className:"tab-1-content-inner"},l.a.createElement("div",null,l.a.createElement("h1",null,"Laravel - Backend"),l.a.createElement("p",{className:"text-lg"},"It's a PHP framework for effective web development solutions with Effective authorization process, presence of object-oriented libraries, Useful MVC support and Top-notch security.")),l.a.createElement("img",{src:a(36),alt:"Kevin Moturi"}))),l.a.createElement("div",{id:"tab-2-content",className:"tab-content-item"},l.a.createElement("div",{className:"tab-1-content-inner"},l.a.createElement("div",null,l.a.createElement("h1",null,"React Native"),l.a.createElement("p",{className:"text-lg"},"It's a framework that enables me to create robust mobile applications using my existing JavaScript knowledge. It offers faster mobile development, and more efficient code sharing across iOS, Android, and the Web, without sacrificing the end user's experience or application quality. It enables my applications to have a native look and feel.")),l.a.createElement("img",{src:a(20),alt:"Kevin Moturi"}))),l.a.createElement("div",{id:"tab-3-content",className:"tab-content-item"},l.a.createElement("div",{className:"tab-1-content-inner"},l.a.createElement("div",null,l.a.createElement("h1",null,"Electron JS"),l.a.createElement("p",{className:"text-lg"},"It's a runtime framework that allows the user to create desktop-suite applications with HTML5, CSS, and JavaScript. Combined with react js, i can be able to turn my existing web or mobile applications into dektop apps that can be installed in either mac or windows machines.")),l.a.createElement("img",{src:a(37),alt:"Kevin Moturi"})))))))}}]),t}(n.Component)),h=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement(v.c,null,l.a.createElement(v.a,{path:"/",exact:!0,strict:!0,component:b}),l.a.createElement(v.a,{exact:!0,component:b})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.801702a5.chunk.js.map