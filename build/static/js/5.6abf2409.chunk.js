(this.webpackJsonppetlover=this.webpackJsonppetlover||[]).push([[5],{58:function(e,t,c){"use strict";c.r(t);var a=c(45),n=c(47),r=c.n(n),s=c(48),o=c(49),i=c.n(o),l={catApiKey:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_KEY||"8fc894be-1ff1-46c4-b9c3-2334d7b6c3b5"},u=i.a.create({baseURL:"https://api.thecatapi.com/".concat("v1"),headers:{"x-api-key":l.catApiKey}}),d=c(11),j=c(0),b=c(85),p=c(87),h=c(3),v=function(e){var t=e.children,c=e.position,n=e.delay,r=e.title,s=Object(j.useState)(!0),o=Object(a.a)(s,2),i=o[0],l=o[1];return Object(h.jsx)(b.a,{className:"p-3",position:null!==c&&void 0!==c?c:"top-start",children:Object(h.jsxs)(p.a,{show:i,onClose:function(){return l(!i)},delay:null!==n&&void 0!==n?n:3e3,autohide:!0,children:[Object(h.jsxs)(p.a.Header,{children:[Object(h.jsx)("img",{src:"holder.js/20x20?text=%20",className:"rounded me-2",alt:""}),Object(h.jsx)("strong",{className:"me-auto",children:r}),Object(h.jsx)("small",{children:"11 mins ago"})]}),Object(h.jsx)(p.a.Body,{children:t})]})})},O=c(20);t.default=function(e){var t,c,n=Object(j.useMemo)((function(){return{id:"",url:""}}),[]),o=Object(j.useState)(n),i=Object(a.a)(o,2),l=i[0],b=i[1],p=Object(O.c)((function(e){return e.catsReducer})),f=Object(O.b)();return console.log(e),console.log(e.match),console.log(e.match.params),Object(j.useEffect)((function(){var e;p["h19-vtIeX"]&&b(p["h19-vtIeX"]),p["h19-vtIeX"]||f((e="h19-vtIeX",function(){var t=Object(s.a)(r.a.mark((function t(c){var a,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/images/".concat(e));case 2:return a=t.sent,n=a.data,t.abrupt("return",c({type:d.a.GET_CAT,payload:n}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}),[f,p]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(v,{}),Object(h.jsx)("img",{src:null===l||void 0===l?void 0:l.url,height:"50%",width:"50%",alt:"Cat"}),null===l||void 0===l||null===(t=l.breeds)||void 0===t||null===(c=t[0])||void 0===c?void 0:c.name]})}}}]);
//# sourceMappingURL=5.6abf2409.chunk.js.map