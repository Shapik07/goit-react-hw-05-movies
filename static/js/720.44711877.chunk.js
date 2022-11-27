"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[720],{720:function(n,t,r){r.r(t),r.d(t,{default:function(){return q}});var e,u,a,i,c,o,s,p,d=r(885),f=r(791),h=r(409),l=r(168),v=r(444),x=v.ZP.div(e||(e=(0,l.Z)(["\n  padding-top: 24px;\n  display: flex;\n  justify-content: center;\n"]))),Z=v.ZP.form(u||(u=(0,l.Z)([""]))),m=v.ZP.input(a||(a=(0,l.Z)(["\n  width: 300px;\n  height: 30px;\n  margin-right: 10px;\n  border-radius: 15px;\n"]))),g=v.ZP.button(i||(i=(0,l.Z)(["\n  cursor: pointer;\n  width: 100px;\n  height: 35px;\n  border-radius: 15px;\n\n  :hover {\n    background-color: green;\n    color: white;\n  }\n"]))),b=r(184),w=function(n){var t=n.onSubmit;return(0,b.jsx)(x,{children:(0,b.jsxs)(Z,{onSubmit:t,children:[(0,b.jsx)(m,{type:"text",autoFocus:!0,name:"input",placeholder:"Enter movie title"}),(0,b.jsx)(g,{type:"submit",children:"Search"})]})})},y=r(731),P=v.ZP.div(c||(c=(0,l.Z)([""]))),k=v.ZP.ul(o||(o=(0,l.Z)(["\n  list-style: none;\n"]))),j=v.ZP.li(s||(s=(0,l.Z)(["\n  font-size: 24px;\n  padding-bottom: 5px;\n  padding-top: 5px;\n  font-weight: bold;\n"]))),_=(0,v.ZP)(y.OL)(p||(p=(0,l.Z)(["\n  text-decoration: none;\n  color: black;\n\n  :hover,\n  :focus {\n    background-color: #d9d9d9;\n    border-radius: 5px;\n  }\n"]))),S=r(689),q=function(){var n=(0,f.useState)([]),t=(0,d.Z)(n,2),r=t[0],e=t[1],u=(0,y.lr)(),a=(0,d.Z)(u,2),i=a[0],c=a[1],o=(0,S.TH)();return(0,b.jsxs)(P,{children:[(0,b.jsx)(w,{onSubmit:function(n){n.preventDefault();var t=n.target,r=t.input.value.trim();i&&((0,h.Av)(r).then((function(n){return e(n.results)})),c({query:r}),t.reset())}}),r.length>0&&(0,b.jsx)(k,{children:r.map((function(n){var t=n.id,r=n.original_title;return(0,b.jsx)(j,{children:(0,b.jsxs)(_,{to:"/movies/".concat(t),state:{from:o},children:["- ",r]})},t)}))})]})}},409:function(n,t,r){r.d(t,{Av:function(){return s},Yc:function(){return v},gW:function(){return d},uT:function(){return c},zo:function(){return h}});var e=r(861),u=r(757),a=r.n(u),i=r(44);function c(){return o.apply(this,arguments)}function o(){return(o=(0,e.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("trending/movie/day");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function s(n){return p.apply(this,arguments)}function p(){return(p=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("search/movie?query=".concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("/movie/".concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("/movie/".concat(t,"/credits"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return x.apply(this,arguments)}function x(){return(x=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("/movie/".concat(t,"/reviews"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}i.ZP.defaults.baseURL="https://api.themoviedb.org/3",i.ZP.defaults.params={api_key:"a7cdca3ac9a73d688c9dec2c3c2e067b"}}}]);
//# sourceMappingURL=720.44711877.chunk.js.map