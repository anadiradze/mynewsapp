(this.webpackJsonpnews=this.webpackJsonpnews||[]).push([[0],{35:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(8),a=n(27),s=n.n(a),i=(n(35),n(2)),o=n(9),u=n.n(o),j=n(13),l=n(11),d=n(1),h=function(e){var t=e.title,n=e.id,c=e.url,a=e.content;return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("img",{src:c,className:"image",alt:"icon"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{children:t}),Object(d.jsx)("p",{children:a})]})]}),Object(d.jsx)(r.b,{to:{state:e,pathname:"/article/".concat(n)},className:"note",onClick:function(e){return e.stopPropagation()},children:"See more"})]})},b=function(){return Object(d.jsx)("p",{children:"loading ..."})},p=function(e){var t=e.title,n=e.id,c=e.onClick;return Object(d.jsx)("div",{className:"card-container",onClick:function(){return c(n)},children:Object(d.jsx)("p",{children:t})})},O=n(30),x=n.n(O).a.create({baseURL:"https://newsapi.org/v2/",headers:{"x-api-key":"1edd742288934699b927933f30ae17d7"}}),f=function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.get("top-headlines/sources",{headers:{"Access-Control-Allow-Origin":"*"},proxy:{host:"104.236.174.88",port:3128},params:{category:"technology",country:"us",language:"en"}});case 3:return t=e.sent,e.abrupt("return",t.data.sources);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n,c,r,a=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:[],n=a.length>1&&void 0!==a[1]?a[1]:"",c={pageSize:30,qInTitle:n,sources:t},e.prev=3,e.next=6,x.get("everything",{params:c});case 6:return r=e.sent,e.abrupt("return",r.data.articles);case 10:throw e.prev=10,e.t0=e.catch(3),e.t0;case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),s=Object(l.a)(a,2),i=s[0],o=s[1],O=Object(c.useState)(!1),x=Object(l.a)(O,2),m=x[0],g=x[1],w=Object(c.useState)([]),N=Object(l.a)(w,2),k=N[0],y=N[1],C=Object(c.useState)(!1),S=Object(l.a)(C,2),F=S[0],I=S[1],P=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,c,r=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:"",e.prev=1,I(!0),e.next=5,v(t,n);case 5:c=e.sent,y(c),I(!1),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(1),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){g(!0),f().then((function(e){r(e),g(!1)})).catch((function(){return g(!1)}))}),[]),Object(c.useEffect)((function(){if(n){var e=n.map((function(e){return e.id}));o(e),P(e)}}),[n]);var T=function(e){P([e])};return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"content",children:m?Object(d.jsx)(b,{}):Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"row",children:n.map((function(e){return Object(d.jsx)(p,{title:e.name,id:e.id,onClick:T},e.id)}))}),Object(d.jsx)("div",{id:"gradient",children:Object(d.jsxs)("form",{class:"searchbox",children:[Object(d.jsx)("input",{onChange:function(e){var t=e.target.value;P(i,t)},placeholder:"search",className:"input"}),Object(d.jsx)("button",{type:"submit",value:"search",children:"\xa0"})]})}),Object(d.jsx)("div",{children:F||!n.length?Object(d.jsx)(b,{}):Object(d.jsx)("div",{className:"articles-container",children:k.length?k.map((function(e,t){return Object(d.jsx)(h,{id:t,title:e.title,url:e.urlToImage,content:e.content,description:e.description},t)})):Object(d.jsx)("p",{children:"No article"})})})]})})})},g=function(){var e=Object(i.f)().state,t=e.title,n=e.url,c=e.content,r=e.description;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:t}),Object(d.jsx)("img",{src:n,alt:"no img"}),Object(d.jsx)("p",{children:c}),Object(d.jsx)("p",{children:r})]})},w=function(){return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)(r.b,{to:"/",children:"Page is not found"})})};n(64);var N=function(){return Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{exact:!0,path:"/",component:m}),Object(d.jsx)(i.a,{exact:!0,path:"/article/:id",component:g}),Object(d.jsx)(i.a,{path:"*",component:w})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(d.jsx)(r.a,{children:Object(d.jsx)(N,{})}),document.getElementById("root")),k()}},[[65,1,2]]]);
//# sourceMappingURL=main.122c8e2c.chunk.js.map