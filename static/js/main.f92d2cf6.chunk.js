(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[10],{101:function(e,n,t){},145:function(e,n,t){var o={"./About":[92,0,3],"./About.jsx":[92,0,3],"./Education":[93,9,4],"./Education.jsx":[93,9,4],"./Experience":[94,0,1,5],"./Experience.jsx":[94,0,1,5],"./FallbackSpinner":[29],"./FallbackSpinner.jsx":[29],"./Header":[88,8],"./Header.jsx":[88,8],"./Home":[46],"./Home.jsx":[46],"./NavBar":[42],"./NavBar.jsx":[42],"./Projects":[95,0,2],"./Projects.jsx":[95,0,2],"./Skills":[96,0,6],"./Skills.jsx":[96,0,6],"./Social":[47],"./Social.jsx":[47],"./ThemeToggler":[43],"./ThemeToggler.jsx":[43],"./projects/ProjectCard":[91,0,7],"./projects/ProjectCard.jsx":[91,0,7]};function r(e){if(!t.o(o,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=o[e],r=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(r)}))}r.keys=function(){return Object.keys(o)},r.id=145,e.exports=r},146:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),c=t(20),i=t.n(c),a=(t(101),t(90),t(102),t(32)),l=t(19),s=t(74),u=t(49),d=t(10),f=t(9),j=t(29),h=t(42),b=t(46),v=t(24),m=t(1);var O,x,g,p=function(){var e=Object(o.useState)(null),n=Object(d.a)(e,2),c=n[0],i=n[1];return Object(o.useEffect)((function(){fetch(v.a.routes,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return i(e)})).catch((function(e){return e}))}),[]),Object(m.jsxs)("div",{className:"MainApp",children:[Object(m.jsx)(h.default,{}),Object(m.jsx)("main",{className:"main",children:Object(m.jsx)(f.c,{children:Object(m.jsxs)(o.Suspense,{fallback:Object(m.jsx)(j.default,{}),children:[Object(m.jsx)(f.a,{exact:!0,path:"/",component:b.default}),c&&c.sections.map((function(e){var n=r.a.lazy((function(){return t(145)("./"+e.component)}));return Object(m.jsx)(f.a,{path:e.path,component:function(){return Object(m.jsx)(n,{header:e.headerTitle})}},e.headerTitle)}))]})})})]})},C=t(31),k=Object(l.c)(O||(O=Object(C.a)(["\n   body {\n     background: ",";\n     color: ",";\n     transition: all 0.50s linear; \n  }\n"])),(function(e){return e.theme.background}),(function(e){return e.theme.color})),y={background:"#fff",color:"#121212",accentColor:"#3D84C6",chronoTheme:{cardBgColor:"white",cardForeColor:"black",titleColor:"white"},timelineLineColor:"#ccc",cardBackground:"#fff",cardFooterBackground:"#f7f7f7",cardBorderColor:"#00000020",navbarTheme:{linkColor:"#dedede",linkHoverColor:"#fefefe",linkActiveColor:"#fefefe"},bsPrimaryVariant:"light",bsSecondaryVariant:"dark",socialIconBgColor:"#121212"},S={background:"#121212",color:"#eee",accentColor:"#3D84C6",chronoTheme:{cardBgColor:"#1B1B1B",cardForeColor:"#eee",titleColor:"black"},timelineLineColor:"#444",cardBackground:"#060606",cardFooterBackground:"#181818",cardBorderColor:"#ffffff20",navbarTheme:{linkColor:"#dedede",linkHoverColor:"#fefefe",linkActiveColor:"#fefefe"},bsPrimaryVariant:"dark",bsSecondaryVariant:"light",socialIconBgColor:"#fefefe"},T=null!==(x=null===(g=document.querySelector("base"))||void 0===g?void 0:g.getAttribute("href"))&&void 0!==x?x:"/";var B=function(){window.matchMedia=null;var e=Object(s.a)(!0);return Object(m.jsx)(u.a.Provider,{value:{darkMode:e},children:Object(m.jsxs)(l.b,{theme:e.value?S:y,children:[Object(m.jsx)(k,{}),Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(a.a,{basename:T,children:Object(m.jsx)(p,{})})})]})})},w=function(e){e&&e instanceof Function&&t.e(13).then(t.bind(null,172)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),o(e),r(e),c(e),i(e)}))};i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(B,{})}),document.getElementById("root")),w()},24:function(e,n,t){"use strict";n.a={navbar:"profile/navbar.json",routes:"profile/routes.json",home:"profile/home.json",social:"profile/social.json",about:"profile/about.json",skills:"profile/skills.json",education:"profile/education.json",experiences:"profile/experiences.json",projects:"profile/projects.json"}},29:function(e,n,t){"use strict";t.r(n);t(0);var o=t(147),r=t(1),c={spinnerContainerStyle:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}};n.default=function(){return Object(r.jsx)("div",{style:c.spinnerContainerStyle,children:Object(r.jsx)(o.a,{animation:"grow"})})}},42:function(e,n,t){"use strict";t.r(n);var o,r,c=t(10),i=t(31),a=t(52),l=t(148),s=t(87),u=t(0),d=t(9),f=t(32),j=t(19),h=t(24),b=t(43),v=t(1),m={logoStyle:{width:50,height:40}},O=j.d.a(o||(o=Object(i.a)(["\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n  &::after {\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.navbarTheme.linkColor}),(function(e){return e.theme.navbarTheme.linkHoverColor}),(function(e){return e.theme.accentColor})),x=Object(j.d)(f.b)(r||(r=Object(i.a)(["\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n  &::after {\n    background-color: ",";\n  }\n  &.navbar__link--active {\n    color: ",";\n  }\n"])),(function(e){return e.theme.navbarTheme.linkColor}),(function(e){return e.theme.navbarTheme.linkHoverColor}),(function(e){return e.theme.accentColor}),(function(e){return e.theme.navbarTheme.linkActiveColor})),g=Object(d.f)((function(){var e,n,t,o,r,i,d=Object(u.useContext)(j.a),f=Object(u.useState)(null),g=Object(c.a)(f,2),p=g[0],C=g[1],k=Object(u.useState)(!1),y=Object(c.a)(k,2),S=y[0],T=y[1];return Object(u.useEffect)((function(){fetch(h.a.navbar,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return C(e)})).catch((function(e){return e}))}),[]),Object(v.jsx)(a.a,{fixed:"top",expand:"md",bg:"dark",variant:"dark",className:"navbar-custom",expanded:S,children:Object(v.jsxs)(l.a,{children:[(null===p||void 0===p?void 0:p.logo)&&Object(v.jsx)(a.a.Brand,{href:"/",children:Object(v.jsx)("img",{src:null===p||void 0===p||null===(e=p.logo)||void 0===e?void 0:e.source,className:"d-inline-block align-top",alt:"main logo",style:null!==p&&void 0!==p&&null!==(n=p.logo)&&void 0!==n&&n.height&&null!==p&&void 0!==p&&null!==(t=p.logo)&&void 0!==t&&t.width?{height:null===p||void 0===p||null===(o=p.logo)||void 0===o?void 0:o.height,width:null===p||void 0===p||null===(r=p.logo)||void 0===r?void 0:r.width}:m.logoStyle})}),Object(v.jsx)(a.a.Toggle,{"aria-controls":"responsive-navbar-nav",onClick:function(){return T(!S)}}),Object(v.jsxs)(a.a.Collapse,{id:"responsive-navbar-nav",children:[Object(v.jsx)(s.a,{className:"me-auto"}),Object(v.jsx)(s.a,{children:p&&(null===(i=p.sections)||void 0===i?void 0:i.map((function(e,n){return"link"===(null===e||void 0===e?void 0:e.type)?Object(v.jsx)(O,{href:e.href,target:"_blank",rel:"noopener noreferrer",onClick:function(){return T(!1)},className:"navbar__link",theme:d,children:e.title},e.title):Object(v.jsx)(x,{onClick:function(){return T(!1)},exact:0===n,activeClassName:"navbar__link--active",className:"navbar__link",to:e.href,theme:d,children:e.title},e.title)})))}),Object(v.jsx)(b.default,{onClick:function(){return T(!1)}})]})]})})}));n.default=g},43:function(e,n,t){"use strict";t.r(n);t(0);var o=t(76),r=t.n(o),c=t(49),i=t(1);function a(e){var n=e.onClick;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(c.a.Consumer,{children:function(e){return Object(i.jsx)("div",{style:{marginBottom:8},children:Object(i.jsx)(r.a,{onChange:function(){return e.darkMode.toggle(),void n()},checked:e.darkMode.value,size:50})})}})})}a.defaultProps={onClick:function(){}},n.default=a},46:function(e,n,t){"use strict";t.r(n);var o=t(10),r=t(0),c=t(83),i=t.n(c),a=t(62),l=t.n(a),s=t(24),u=t(47),d=t(29),f=t(85),j=t.n(f),h=t(1),b={nameStyle:{fontSize:"5em"},inlineChild:{display:"inline-block"},mainContainer:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}};n.default=function(){var e=Object(r.useRef)(null),n=Object(r.useState)(null),t=Object(o.a)(n,2),c=t[0],a=t[1],f=Object(r.useState)(0),v=Object(o.a)(f,2),m=v[0],O=v[1];return Object(r.useEffect)((function(){return m||null===e.current||(console.log("went inside",e),O(j()({el:e.current,mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1,color:18102,backgroundColor:592137,points:12}))),function(){m&&m.destroy(),console.log("destroyed")}}),[e.current]),Object(r.useEffect)((function(){fetch(s.a.home,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return a(e)})).catch((function(e){return e}))}),[]),c?Object(h.jsx)("div",{ref:e,className:"homepage-container",children:Object(h.jsx)(l.a,{children:Object(h.jsxs)("div",{style:b.mainContainer,children:[Object(h.jsx)("h1",{style:b.nameStyle,children:null===c||void 0===c?void 0:c.name}),Object(h.jsxs)("div",{style:{flexDirection:"row"},children:[Object(h.jsx)("h2",{style:b.inlineChild,children:"I'm\xa0"}),Object(h.jsx)(i.a,{options:{loop:!0,autoStart:!0,strings:null===c||void 0===c?void 0:c.roles}})]}),Object(h.jsx)(u.default,{})]})})}):Object(h.jsx)(d.default,{})}},47:function(e,n,t){"use strict";t.r(n);var o=t(10),r=t(0),c=t(84),i=t(19),a=t(24),l=t(1),s={iconStyle:{marginLeft:10,marginRight:10,marginBottom:10}};n.default=function(){var e=Object(r.useContext)(i.a),n=Object(r.useState)(null),t=Object(o.a)(n,2),u=t[0],d=t[1];return Object(r.useEffect)((function(){fetch(a.a.social,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return d(e)})).catch((function(e){return e}))}),[]),Object(l.jsx)("div",{className:"social",children:u?u.social.map((function(n){return Object(l.jsx)(c.SocialIcon,{style:s.iconStyle,url:n.href,network:n.network,bgColor:e.socialIconBgColor,target:"_blank",rel:"noopener"},n.network)})):null})}},49:function(e,n,t){"use strict";var o=t(0),r=t.n(o).a.createContext();n.a=r},90:function(e,n,t){}},[[146,11,12]]]);
//# sourceMappingURL=main.f92d2cf6.chunk.js.map