(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[2,7,8],{102:function(e,a,t){"use strict";t.r(a);var c=t(7),r=t(0),n=t(156),s=t(177),o=t(75),i=t.n(o),l=t(95),d=t(27),b=t(98),j=t(33),f=t(1),u={containerStyle:{marginBottom:25},showMoreStyle:{margin:25}};a.default=function(e){var a=e.header,t=Object(r.useState)(null),o=Object(c.a)(t,2),O=o[0],x=o[1];return Object(r.useEffect)((function(){fetch(d.a.projects,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return x(e)})).catch((function(e){return e}))}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(l.default,{title:a}),O?Object(f.jsx)("div",{className:"section-content-container",children:Object(f.jsx)(n.a,{style:u.containerStyle,children:Object(f.jsx)(s.a,{xs:1,sm:1,md:2,lg:3,className:"g-4",children:O.projects.map((function(e){return Object(f.jsx)(i.a,{children:Object(f.jsx)(b.default,{project:e})},e.title)}))})})}):Object(f.jsx)(j.default,{})]})}},171:function(e,a,t){"use strict";var c=t(7),r=t(3),n=t(6),s=t(8),o=t.n(s),i=t(0),l=t(10),d=t(1),b=["as","bsPrefix","className"],j=["className"],f=["xxl","xl","lg","md","sm","xs"];var u=i.forwardRef((function(e,a){var t=function(e){var a=e.as,t=e.bsPrefix,c=e.className,s=Object(n.a)(e,b);t=Object(l.a)(t,"col");var i=[],d=[];return f.forEach((function(e){var a,c,r,n=s[e];delete s[e],"object"===typeof n&&null!=n?(a=n.span,c=n.offset,r=n.order):a=n;var o="xs"!==e?"-".concat(e):"";a&&i.push(!0===a?"".concat(t).concat(o):"".concat(t).concat(o,"-").concat(a)),null!=r&&d.push("order".concat(o,"-").concat(r)),null!=c&&d.push("offset".concat(o,"-").concat(c))})),[Object(r.a)(Object(r.a)({},s),{},{className:o.a.apply(void 0,[c].concat(i,d))}),{as:a,bsPrefix:t,spans:i}]}(e),s=Object(c.a)(t,2),i=s[0],u=i.className,O=Object(n.a)(i,j),x=s[1],m=x.as,p=void 0===m?"div":m,v=x.bsPrefix,h=x.spans;return Object(d.jsx)(p,Object(r.a)(Object(r.a)({},O),{},{ref:a,className:o()(u,!h.length&&v)}))}));u.displayName="Col",a.a=u},177:function(e,a,t){"use strict";var c=t(3),r=t(6),n=t(8),s=t.n(n),o=t(0),i=t(10),l=t(1),d=["bsPrefix","className","as"],b=["xxl","xl","lg","md","sm","xs"],j=o.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=e.as,j=void 0===o?"div":o,f=Object(r.a)(e,d),u=Object(i.a)(t,"row"),O="".concat(u,"-cols"),x=[];return b.forEach((function(e){var a,t=f[e];delete f[e],a=null!=t&&"object"===typeof t?t.cols:t;var c="xs"!==e?"-".concat(e):"";null!=a&&x.push("".concat(O).concat(c,"-").concat(a))})),Object(l.jsx)(j,Object(c.a)(Object(c.a)({ref:a},f),{},{className:s.a.apply(void 0,[n,u].concat(x))}))}));j.displayName="Row",a.a=j},95:function(e,a,t){"use strict";t.r(a);t(0),t(97);var c=t(1);a.default=function(e){var a=e.title;return Object(c.jsx)("div",{className:"header",children:a})}},98:function(e,a,t){"use strict";t.r(a);var c=t(3),r=t(0),n=t(171),s=t(6),o=t(8),i=t.n(o),l=t(10),d=t(28),b=t(73),j=t(1),f=["bsPrefix","className","variant","as"],u=r.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,n=e.variant,o=e.as,d=void 0===o?"img":o,b=Object(s.a)(e,f),u=Object(l.a)(t,"card-img");return Object(j.jsx)(d,Object(c.a)({ref:a,className:i()(n?"".concat(u,"-").concat(n):u,r)},b))}));u.displayName="CardImg";var O=u,x=t(74),m=["bsPrefix","className","as"],p=r.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=e.as,d=void 0===o?"div":o,b=Object(s.a)(e,m),f=Object(l.a)(t,"card-header"),u=Object(r.useMemo)((function(){return{cardHeaderBsPrefix:f}}),[f]);return Object(j.jsx)(x.a.Provider,{value:u,children:Object(j.jsx)(d,Object(c.a)(Object(c.a)({ref:a},b),{},{className:i()(n,f)}))})}));p.displayName="CardHeader";var v=p,h=["bsPrefix","className","bg","text","border","body","children","as"],y=Object(b.a)("h5"),g=Object(b.a)("h6"),N=Object(d.a)("card-body"),P=Object(d.a)("card-title",{Component:y}),S=Object(d.a)("card-subtitle",{Component:g}),w=Object(d.a)("card-link",{Component:"a"}),C=Object(d.a)("card-text",{Component:"p"}),k=Object(d.a)("card-footer"),B=Object(d.a)("card-img-overlay"),T=r.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,n=e.bg,o=e.text,d=e.border,b=e.body,f=e.children,u=e.as,O=void 0===u?"div":u,x=Object(s.a)(e,h),m=Object(l.a)(t,"card");return Object(j.jsx)(O,Object(c.a)(Object(c.a)({ref:a},x),{},{className:i()(r,m,n&&"bg-".concat(n),o&&"text-".concat(o),d&&"border-".concat(d)),children:b?Object(j.jsx)(N,{children:f}):f}))}));T.displayName="Card",T.defaultProps={body:!1};var R=Object.assign(T,{Img:O,Title:P,Subtitle:S,Body:N,Link:w,Text:C,Header:v,Footer:k,ImgOverlay:B}),E=t(7),F=t(43),I=["as","bsPrefix","variant","size","active","className"],V=r.forwardRef((function(e,a){var t=e.as,r=e.bsPrefix,n=e.variant,o=e.size,d=e.active,b=e.className,f=Object(s.a)(e,I),u=Object(l.a)(r,"btn"),O=Object(F.b)(Object(c.a)({tagName:t},f)),x=Object(E.a)(O,2),m=x[0],p=x[1].tagName;return Object(j.jsx)(p,Object(c.a)(Object(c.a)(Object(c.a)({},f),m),{},{ref:a,className:i()(b,u,d&&"active",n&&"".concat(u,"-").concat(n),o&&"".concat(u,"-").concat(o),f.href&&f.disabled&&"disabled")}))}));V.displayName="Button",V.defaultProps={variant:"primary",active:!1,disabled:!1};var z=V,H=["bsPrefix","bg","pill","text","className","as"],J=r.forwardRef((function(e,a){var t=e.bsPrefix,r=e.bg,n=e.pill,o=e.text,d=e.className,b=e.as,f=void 0===b?"span":b,u=Object(s.a)(e,H),O=Object(l.a)(t,"badge");return Object(j.jsx)(f,Object(c.a)(Object(c.a)({ref:a},u),{},{className:i()(d,O,n&&"rounded-pill",o&&"text-".concat(o),r&&"bg-".concat(r))}))}));J.displayName="Badge",J.defaultProps={bg:"primary",pill:!1};var L=J,M=t(21),A=t(191),D={badgeStyle:{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,margin:5},cardStyle:{borderRadius:10},cardTitleStyle:{fontSize:24,fontWeight:700},cardTextStyle:{textAlign:"left"},linkStyle:{textDecoration:"none",padding:10},buttonStyle:{margin:5}};a.default=function(e){var a,t,s=Object(r.useContext)(M.a),o=e.project;return Object(j.jsx)(n.a,{children:Object(j.jsxs)(R,{style:Object(c.a)(Object(c.a)({},D.cardStyle),{},{backgroundColor:s.cardBackground,borderColor:s.cardBorderColor}),text:s.bsSecondaryVariant,children:[Object(j.jsx)(R.Img,{variant:"top",src:window.location.pathname+(null===o||void 0===o?void 0:o.image)}),Object(j.jsxs)(R.Body,{children:[Object(j.jsx)(R.Title,{style:D.cardTitleStyle,children:o.title}),Object(j.jsx)(R.Text,{style:D.cardTextStyle,children:(t=o.bodyText,Object(j.jsx)(A.a,{children:t}))})]}),Object(j.jsx)(R.Body,{children:null===o||void 0===o||null===(a=o.links)||void 0===a?void 0:a.map((function(e){return Object(j.jsx)(z,{style:D.buttonStyle,variant:"outline-"+s.bsSecondaryVariant,onClick:function(){return window.open(e.href,"_blank")},children:e.text},e.href)}))}),o.tags&&Object(j.jsx)(R.Footer,{style:{backgroundColor:s.cardFooterBackground},children:o.tags.map((function(e){return Object(j.jsx)(L,{pill:!0,bg:s.bsSecondaryVariant,text:s.bsPrimaryVariant,style:D.badgeStyle,children:e},e)}))})]})})}}}]);
//# sourceMappingURL=2.c71b3226.chunk.js.map