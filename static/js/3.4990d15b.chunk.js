(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[3,8],{153:function(e,t,a){"use strict";var c=a(10),n=a(2),s=a(3),r=a(4),o=a.n(r),i=a(0),l=a(7),f=a(1),u=["as","bsPrefix","className"],j=["className"],b=["xxl","xl","lg","md","sm","xs"];var d=i.forwardRef((function(e,t){var a=function(e){var t=e.as,a=e.bsPrefix,c=e.className,r=Object(s.a)(e,u);a=Object(l.a)(a,"col");var i=[],f=[];return b.forEach((function(e){var t,c,n,s=r[e];delete r[e],"object"===typeof s&&null!=s?(t=s.span,c=s.offset,n=s.order):t=s;var o="xs"!==e?"-".concat(e):"";t&&i.push(!0===t?"".concat(a).concat(o):"".concat(a).concat(o,"-").concat(t)),null!=n&&f.push("order".concat(o,"-").concat(n)),null!=c&&f.push("offset".concat(o,"-").concat(c))})),[Object(n.a)(Object(n.a)({},r),{},{className:o.a.apply(void 0,[c].concat(i,f))}),{as:t,bsPrefix:a,spans:i}]}(e),r=Object(c.a)(a,2),i=r[0],d=i.className,x=Object(s.a)(i,j),p=r[1],m=p.as,O=void 0===m?"div":m,h=p.bsPrefix,v=p.spans;return Object(f.jsx)(O,Object(n.a)(Object(n.a)({},x),{},{ref:t,className:o()(d,!v.length&&h)}))}));d.displayName="Col",t.a=d},159:function(e,t,a){"use strict";var c=a(2),n=a(3),s=a(4),r=a.n(s),o=a(0),i=a(7),l=a(1),f=["bsPrefix","className","as"],u=["xxl","xl","lg","md","sm","xs"],j=o.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,o=e.as,j=void 0===o?"div":o,b=Object(n.a)(e,f),d=Object(i.a)(a,"row"),x="".concat(d,"-cols"),p=[];return u.forEach((function(e){var t,a=b[e];delete b[e],t=null!=a&&"object"===typeof a?a.cols:a;var c="xs"!==e?"-".concat(e):"";null!=t&&p.push("".concat(x).concat(c,"-").concat(t))})),Object(l.jsx)(j,Object(c.a)(Object(c.a)({ref:t},b),{},{className:r.a.apply(void 0,[s,d].concat(p))}))}));j.displayName="Row",t.a=j},88:function(e,t,a){"use strict";a.r(t);a(0),a(90);var c=a(1);t.default=function(e){var t=e.title;return Object(c.jsx)("div",{className:"header",children:t})}},92:function(e,t,a){"use strict";a.r(t);var c=a(10),n=a(0),s=a(173),r=a(148),o=a(159),i=a(153),l=a(62),f=a.n(l),u=a(88),j=a(24),b=a(29),d=a(1),x={introTextContainer:{margin:10,flexDirection:"column",whiteSpace:"pre-wrap",textAlign:"left",fontSize:"1.2em",fontWeight:500},introImageContainer:{margin:10,justifyContent:"center",alignItems:"center",display:"flex"}};t.default=function(e){var t,a=e.header,l=Object(n.useState)(null),p=Object(c.a)(l,2),m=p[0],O=p[1];return Object(n.useEffect)((function(){fetch(j.a.about,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return O(e)})).catch((function(e){return e}))}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u.default,{title:a}),Object(d.jsx)("div",{className:"section-content-container",children:Object(d.jsx)(r.a,{children:m?Object(d.jsx)(f.a,{children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(i.a,{style:x.introTextContainer,children:(t=m.about,Object(d.jsx)(s.a,{children:t}))}),Object(d.jsx)(i.a,{style:x.introImageContainer,children:Object(d.jsx)("img",{className:"about-img",src:null===m||void 0===m?void 0:m.imageSource,alt:"profile"})})]})}):Object(d.jsx)(b.default,{})})})]})}}}]);
//# sourceMappingURL=3.4990d15b.chunk.js.map