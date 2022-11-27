"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[170],{170:function(n,e,t){t.r(e),t.d(e,{default:function(){return T}});var r,i,o,c,a,s,u,d,l,p,f,h,x=t(885),g=t(791),m=t(689),v=t(409),Z=t(168),b=t(444),w=t(731),j=b.ZP.div(r||(r=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),y=b.ZP.div(i||(i=(0,Z.Z)([""]))),P=(0,b.ZP)(w.rU)(o||(o=(0,Z.Z)(["\n  margin-bottom: 10px;\n  margin-top: 10px;\n  color: black;\n  font-weight: bold;\n  padding: 5px;\n  text-decoration: none;\n  border: 3px solid black;\n  border-radius: 5px;\n  margin-left: 30px;\n  margin-right: auto;\n\n  :hover {\n    background-color: green;\n    color: white;\n    border: 3px solid green;\n  }\n"]))),k=b.ZP.article(c||(c=(0,Z.Z)(["\n  display: flex;\n"]))),_=b.ZP.img(a||(a=(0,Z.Z)(["\n  margin-top: 10px;\n  margin-left: 10px;\n"]))),z=b.ZP.h1(s||(s=(0,Z.Z)(["\n  font-size: 48px;\n"]))),U=b.ZP.ul(u||(u=(0,Z.Z)(["\n  list-style: none;\n  margin: 0;\n"]))),C=b.ZP.li(d||(d=(0,Z.Z)(["\n  font-size: 24px;\n  font-weight: bold;\n  margin: 16px 0;\n"]))),O=b.ZP.span(l||(l=(0,Z.Z)(["\n  font-weight: normal;\n"]))),R=(0,b.ZP)(w.OL)(p||(p=(0,Z.Z)(["\n  font-size: 24px;\n  text-decoration: none;\n  font-weight: bold;\n  color: blue;\n\n  :hover,\n  :focus {\n    background-color: #d9d9d9;\n    border-radius: 5px;\n  }\n"]))),A=b.ZP.ul(f||(f=(0,Z.Z)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  width: 300px;\n  justify-content: space-evenly;\n"]))),G=b.ZP.h2(h||(h=(0,Z.Z)(["\n  font-size: 30px;\n  margin-bottom: 0;\n"]))),L=t(184),T=function(){var n,e,t=(0,m.UO)().details,r=(0,g.useState)([]),i=(0,x.Z)(r,2),o=i[0],c=i[1],a=(0,m.TH)();(0,g.useEffect)((function(){(0,v.gW)(t).then((function(n){n&&c(n)}))}),[t]);var s=o.poster_path,u=o.original_title,d=o.vote_average,l=o.overview,p=o.genres,f=(0,g.useRef)(null===(n=a.state)||void 0===n||null===(e=n.from)||void 0===e?void 0:e.search);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(j,{children:[(0,L.jsx)(P,{to:a.state.from,children:"Go back"}),o&&(0,L.jsxs)(k,{children:[(0,L.jsx)(y,{children:(0,L.jsx)(_,{src:s?"https://image.tmdb.org/t/p/w500/"+s:"https://cloupyblob.blob.core.windows.net/cloupy/image-not-found.png",title:u})}),(0,L.jsxs)(U,{children:[(0,L.jsx)(C,{children:(0,L.jsx)(z,{children:u})}),(0,L.jsxs)(C,{children:["User core:",(0,L.jsxs)(O,{children:[" ",Math.round(10*d)," %"]})]}),(0,L.jsxs)(C,{children:["Overview:",(0,L.jsxs)(O,{children:[" ",l]})]}),(0,L.jsxs)(C,{children:["Genres:",(0,L.jsxs)(O,{children:[" ",function(){if(p)return p.reduce((function(n,e){return n+"".concat(n?", ":"").concat(e.name)}),"")}()]})]})]})]})]}),(0,L.jsxs)(j,{children:[(0,L.jsx)(G,{children:"Additional information"}),(0,L.jsxs)(A,{children:[(0,L.jsx)(C,{children:(0,L.jsx)(R,{to:"cast",state:{from:f.current?"/movies".concat(f.current):"/"},children:"Cast"})}),(0,L.jsx)(C,{children:(0,L.jsx)(R,{to:"reviews",state:{from:f.current?"/movies".concat(f.current):"/"},children:"Reviews"})})]})]}),(0,L.jsx)(m.j3,{})]})}},409:function(n,e,t){t.d(e,{Av:function(){return u},Yc:function(){return x},gW:function(){return l},uT:function(){return a},zo:function(){return f}});var r=t(861),i=t(757),o=t.n(i),c=t(44);function a(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("trending/movie/day");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function u(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("search/movie?query=".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/movie/".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/movie/".concat(e,"/credits"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/movie/".concat(e,"/reviews"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}c.ZP.defaults.baseURL="https://api.themoviedb.org/3",c.ZP.defaults.params={api_key:"a7cdca3ac9a73d688c9dec2c3c2e067b"}}}]);
//# sourceMappingURL=170.51ce5a16.chunk.js.map