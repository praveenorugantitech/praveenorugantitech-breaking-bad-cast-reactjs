(this["webpackJsonppraveenorugantitech-breaking-bad-cast-reactjs"]=this["webpackJsonppraveenorugantitech-breaking-bad-cast-reactjs"]||[]).push([[0],{21:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(14),r=c.n(n),s=(c(21),c(5)),i=c.n(s),j=c(15),o=c(3),d=c(16),u=c.n(d).a.create({baseURL:"https://www.breakingbadapi.com/api/"}),b=c.p+"static/media/logo.e6ecab44.png",l=c(0),h=function(){return Object(l.jsx)("header",{className:"center",children:Object(l.jsx)("img",{src:b,alt:"Logo"})})},O=function(e){var t=e.item;return Object(l.jsx)("div",{className:"card",children:Object(l.jsxs)("div",{className:"card-inner",children:[Object(l.jsx)("div",{className:"card-front",children:Object(l.jsx)("img",{src:t.img,alt:"Character"})}),Object(l.jsxs)("div",{className:"card-back",children:[Object(l.jsx)("h1",{children:t.name}),Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"Actor Name:"})," ",t.portrayed]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"Nickname:"})," ",t.nickname]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"Birthday:"})," ",t.birthday]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"Status:"})," ",Object(l.jsx)("span",{style:{color:"Alive"===t.status?"green":"red"},children:t.status})]})]})]})]})})},m=c.p+"static/media/spinner.11d9cde8.gif",x=function(){return Object(l.jsx)("img",{src:m,style:{width:"200px",margin:"auto",display:"block"},alt:"Loading"})},p=function(e){var t=e.items;return e.isLoading?Object(l.jsx)(x,{}):Object(l.jsx)("section",{className:"cards",children:t.map((function(e){return Object(l.jsx)(O,{item:e},e.char_id)}))})},g=function(e){var t=e.setQuery,c=Object(a.useState)(""),n=Object(o.a)(c,2),r=n[0],s=n[1];return Object(l.jsx)("section",{className:"search",children:Object(l.jsx)("form",{onSubmit:function(e){e.preventDefault()},children:Object(l.jsx)("input",{className:"form-control",placeholder:"Search Characters",autoFocus:!0,type:"text",name:"search",value:r,onChange:function(e){s(e.target.value),t(e.target.value)},id:"search"})})})},f=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(!0),s=Object(o.a)(r,2),d=s[0],b=s[1],O=Object(a.useState)(""),m=Object(o.a)(O,2),x=m[0],f=m[1];return Object(a.useEffect)((function(){(function(){var e=Object(j.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/characters?name=".concat(x));case 2:t=e.sent,n(t.data),b(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[x]),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(h,{}),Object(l.jsx)(g,{setQuery:function(e){return f(e)}}),Object(l.jsx)(p,{isLoading:d,items:c})]})};r.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.f6ab0434.chunk.js.map