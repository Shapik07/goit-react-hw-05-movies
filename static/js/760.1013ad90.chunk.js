"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[760],{760:function(n,t,e){e.r(t),e.d(t,{default:function(){return O}});var r,u,a,o,i,c,s,p,d,f,l,h=e(885),x=e(596),v=(e(462),e(168)),Z=e(444),m=Z.ZP.div(r||(r=(0,v.Z)(["\n  padding-top: 24px;\n  display: flex;\n  justify-content: center;\n"]))),g=Z.ZP.form(u||(u=(0,v.Z)([""]))),b=Z.ZP.input(a||(a=(0,v.Z)(["\n  width: 300px;\n  height: 30px;\n  margin-right: 10px;\n  border-radius: 15px;\n"]))),w=Z.ZP.button(o||(o=(0,v.Z)(["\n  cursor: pointer;\n  width: 100px;\n  height: 35px;\n  border-radius: 15px;\n\n  :hover {\n    background-color: green;\n    color: white;\n  }\n"]))),y=e(184),P=function(n){var t=n.onSubmit;return(0,y.jsx)(m,{children:(0,y.jsxs)(g,{onSubmit:t,children:[(0,y.jsx)(b,{type:"text",autoFocus:!0,name:"input",placeholder:"Enter movie title"}),(0,y.jsx)(w,{type:"submit",children:"Search"})]})})},k=e(861),j=e(757),_=e.n(j),q=e(791),A=e(731),S=Z.ZP.ul(i||(i=(0,v.Z)(["\n  list-style: none;\n"]))),z=Z.ZP.li(c||(c=(0,v.Z)([""]))),L=(0,Z.ZP)(A.OL)(s||(s=(0,v.Z)(["\n  font-size: 24px;\n  text-decoration: none;\n  font-weight: bold;\n  color: black;\n\n  :hover,\n  :focus {\n    background-color: #d9d9d9;\n    border-radius: 5px;\n  }\n"]))),W=e(409),C=e(689),E=function(n){var t=n.query,e=(0,q.useState)([]),r=(0,h.Z)(e,2),u=r[0],a=r[1],o=(0,C.TH)();return(0,q.useEffect)((function(){!function(){var n=(0,k.Z)(_().mark((function n(){var e;return _().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,W.Av)(t);case 3:if(0!==(e=n.sent).results.length){n.next=7;break}return x.Am.warn("Woops, something went wrong"),n.abrupt("return");case 7:a(e.results),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),x.Am.warn("Woops, something went wrong");case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}()()})),(0,y.jsx)("ul",{children:(0,y.jsxs)(S,{children:[u.map((function(n){var t=n.id,e=n.original_title;return(0,y.jsx)(z,{children:(0,y.jsxs)(L,{to:"/movies/".concat(t),state:{from:o},children:["- ",e]})},t)})),(0,y.jsx)(x.Ix,{})]})})},I=Z.ZP.div(p||(p=(0,v.Z)([""]))),O=(Z.ZP.ul(d||(d=(0,v.Z)(["\n  list-style: none;\n"]))),Z.ZP.li(f||(f=(0,v.Z)(["\n  font-size: 24px;\n  padding-bottom: 5px;\n  padding-top: 5px;\n  font-weight: bold;\n"]))),(0,Z.ZP)(A.OL)(l||(l=(0,v.Z)(["\n  text-decoration: none;\n  color: black;\n\n  :hover,\n  :focus {\n    background-color: #d9d9d9;\n    border-radius: 5px;\n  }\n"]))),function(){var n=(0,A.lr)(),t=(0,h.Z)(n,2),e=t[0],r=t[1],u=e.get("query");return(0,y.jsxs)(I,{children:[(0,y.jsx)(P,{onSubmit:function(n){n.preventDefault();var t=n.target,e=t.input.value.trim();if(!e)return x.Am.warn("Please enter movie name");r({query:e}),t.reset()}}),u&&(0,y.jsx)(E,{query:u}),(0,y.jsx)(x.Ix,{})]})})},409:function(n,t,e){e.d(t,{Av:function(){return s},Yc:function(){return x},gW:function(){return d},uT:function(){return i},zo:function(){return l}});var r=e(861),u=e(757),a=e.n(u),o=e(44);function i(){return c.apply(this,arguments)}function c(){return(c=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("trending/movie/day");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function s(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("search/movie?query=".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("/movie/".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("/movie/".concat(t,"/credits"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("/movie/".concat(t,"/reviews"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}o.ZP.defaults.baseURL="https://api.themoviedb.org/3",o.ZP.defaults.params={api_key:"a7cdca3ac9a73d688c9dec2c3c2e067b"}}}]);
//# sourceMappingURL=760.1013ad90.chunk.js.map