(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[10],{101:function(e,n,t){},145:function(e,n,t){var o={"./About":[92,0,3],"./About.jsx":[92,0,3],"./Education":[93,9,4],"./Education.jsx":[93,9,4],"./Experience":[94,0,1,5],"./Experience.jsx":[94,0,1,5],"./FallbackSpinner":[29],"./FallbackSpinner.jsx":[29],"./Header":[88,8],"./Header.jsx":[88,8],"./Home":[46],"./Home.jsx":[46],"./NavBar":[42],"./NavBar.jsx":[42],"./Projects":[95,0,2],"./Projects.jsx":[95,0,2],"./Skills":[96,0,6],"./Skills.jsx":[96,0,6],"./Social":[47],"./Social.jsx":[47],"./ThemeToggler":[43],"./ThemeToggler.jsx":[43],"./projects/ProjectCard":[91,0,7],"./projects/ProjectCard.jsx":[91,0,7]};function r(e){if(!t.o(o,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=o[e],r=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(r)}))}r.keys=function(){return Object.keys(o)},r.id=145,e.exports=r},146:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),c=t(20),i=t.n(c),l=(t(101),t(90),t(102),t(32)),a=t(19),s=t(48),u=t(50),d=t(10),j=t(9),f=t(29),h=t(42),b=t(46),v=t(24),m=t(1);var O,g,x,p=function(){var e=Object(o.useState)(null),n=Object(d.a)(e,2),c=n[0],i=n[1];return Object(o.useEffect)((function(){fetch(v.a.routes,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return i(e)})).catch((function(e){return e}))}),[]),Object(m.jsxs)("div",{className:"MainApp",children:[Object(m.jsx)(h.default,{}),Object(m.jsx)("main",{className:"main",children:Object(m.jsx)(j.c,{children:Object(m.jsxs)(o.Suspense,{fallback:Object(m.jsx)(f.default,{}),children:[Object(m.jsx)(j.a,{exact:!0,path:"/",component:b.default}),c&&c.sections.map((function(e){var n=r.a.lazy((function(){return t(145)("./"+e.component)}));return Object(m.jsx)(j.a,{path:e.path,component:function(){return Object(m.jsx)(n,{header:e.headerTitle})}},e.headerTitle)}))]})})})]})},C=t(31),k=Object(a.c)(O||(O=Object(C.a)(["\n   body {\n     background: ",";\n     color: ",";\n     transition: all 0.50s linear; \n  }\n"])),(function(e){return e.theme.background}),(function(e){return e.theme.color})),y={background:"#fff",color:"#121212",accentColor:"#3D84C6",chronoTheme:{cardBgColor:"white",cardForeColor:"black",titleColor:"white"},timelineLineColor:"#ccc",cardBackground:"#fff",cardFooterBackground:"#f7f7f7",cardBorderColor:"#00000020",navbarTheme:{linkColor:"#dedede",linkHoverColor:"#fefefe",linkActiveColor:"#fefefe"},bsPrimaryVariant:"light",bsSecondaryVariant:"dark",socialIconBgColor:"#121212"},S={background:"#121212",color:"#eee",accentColor:"#3D84C6",chronoTheme:{cardBgColor:"#1B1B1B",cardForeColor:"#eee",titleColor:"black"},timelineLineColor:"#444",cardBackground:"#060606",cardFooterBackground:"#181818",cardBorderColor:"#ffffff20",navbarTheme:{linkColor:"#dedede",linkHoverColor:"#fefefe",linkActiveColor:"#fefefe"},bsPrimaryVariant:"dark",bsSecondaryVariant:"light",socialIconBgColor:"#fefefe"},T=null!==(g=null===(x=document.querySelector("base"))||void 0===x?void 0:x.getAttribute("href"))&&void 0!==g?g:"/";var B=function(){window.matchMedia=null;var e=Object(s.a)(!0);return Object(m.jsx)(u.a.Provider,{value:{darkMode:e},children:Object(m.jsxs)(a.b,{theme:e.value?S:y,children:[Object(m.jsx)(k,{}),Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(l.a,{basename:T,children:Object(m.jsx)(p,{})})})]})})},w=function(e){e&&e instanceof Function&&t.e(13).then(t.bind(null,172)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),o(e),r(e),c(e),i(e)}))};i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(B,{})}),document.getElementById("root")),w()},24:function(e,n,t){"use strict";n.a={navbar:"/profile/navbar.json",routes:"/profile/routes.json",home:"/profile/home.json",social:"/profile/social.json",about:"/profile/about.json",skills:"/profile/skills.json",education:"/profile/education.json",experiences:"/profile/experiences.json",projects:"/profile/projects.json"}},29:function(e,n,t){"use strict";t.r(n);t(0);var o=t(147),r=t(1),c={spinnerContainerStyle:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}};n.default=function(){return Object(r.jsx)("div",{style:c.spinnerContainerStyle,children:Object(r.jsx)(o.a,{animation:"grow"})})}},42:function(e,n,t){"use strict";t.r(n);var o,r,c=t(10),i=t(31),l=t(53),a=t(148),s=t(87),u=t(0),d=t(9),j=t(32),f=t(19),h=t(24),b=t(43),v=t(1),m={logoStyle:{width:50,height:40}},O=f.d.a(o||(o=Object(i.a)(["\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n  &::after {\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.navbarTheme.linkColor}),(function(e){return e.theme.navbarTheme.linkHoverColor}),(function(e){return e.theme.accentColor})),g=Object(f.d)(j.b)(r||(r=Object(i.a)(["\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n  &::after {\n    background-color: ",";\n  }\n  &.navbar__link--active {\n    color: ",";\n  }\n"])),(function(e){return e.theme.navbarTheme.linkColor}),(function(e){return e.theme.navbarTheme.linkHoverColor}),(function(e){return e.theme.accentColor}),(function(e){return e.theme.navbarTheme.linkActiveColor})),x=Object(d.f)((function(){var e,n,t,o,r,i,d=Object(u.useContext)(f.a),j=Object(u.useState)(null),x=Object(c.a)(j,2),p=x[0],C=x[1],k=Object(u.useState)(!1),y=Object(c.a)(k,2),S=y[0],T=y[1];return Object(u.useEffect)((function(){fetch(h.a.navbar,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return C(e)})).catch((function(e){return e}))}),[]),Object(v.jsx)(l.a,{fixed:"top",expand:"md",bg:"dark",variant:"dark",className:"navbar-custom",expanded:S,children:Object(v.jsxs)(a.a,{children:[(null===p||void 0===p?void 0:p.logo)&&Object(v.jsx)(l.a.Brand,{href:"/",children:Object(v.jsx)("img",{src:null===p||void 0===p||null===(e=p.logo)||void 0===e?void 0:e.source,className:"d-inline-block align-top",alt:"main logo",style:null!==p&&void 0!==p&&null!==(n=p.logo)&&void 0!==n&&n.height&&null!==p&&void 0!==p&&null!==(t=p.logo)&&void 0!==t&&t.width?{height:null===p||void 0===p||null===(o=p.logo)||void 0===o?void 0:o.height,width:null===p||void 0===p||null===(r=p.logo)||void 0===r?void 0:r.width}:m.logoStyle})}),Object(v.jsx)(l.a.Toggle,{"aria-controls":"responsive-navbar-nav",onClick:function(){return T(!S)}}),Object(v.jsxs)(l.a.Collapse,{id:"responsive-navbar-nav",children:[Object(v.jsx)(s.a,{className:"me-auto"}),Object(v.jsx)(s.a,{children:p&&(null===(i=p.sections)||void 0===i?void 0:i.map((function(e,n){return"link"===(null===e||void 0===e?void 0:e.type)?Object(v.jsx)(O,{href:e.href,target:"_blank",rel:"noopener noreferrer",onClick:function(){return T(!1)},className:"navbar__link",theme:d,children:e.title},e.title):Object(v.jsx)(g,{onClick:function(){return T(!1)},exact:0===n,activeClassName:"navbar__link--active",className:"navbar__link",to:e.href,theme:d,children:e.title},e.title)})))}),Object(v.jsx)(b.default,{onClick:function(){return T(!1)}})]})]})})}));n.default=x},43:function(e,n,t){"use strict";t.r(n);t(0);var o=t(76),r=t.n(o),c=t(50),i=t(1);function l(e){var n=e.onClick;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(c.a.Consumer,{children:function(e){return Object(i.jsx)("div",{style:{marginBottom:8},children:Object(i.jsx)(r.a,{onChange:function(){return e.darkMode.toggle(),void n()},checked:e.darkMode.value,size:50})})}})})}l.defaultProps={onClick:function(){}},n.default=l},46:function(e,n,t){"use strict";t.r(n);var o=t(10),r=t(0),c=t(83),i=t.n(c),l=t(63),a=t.n(l),s=t(24),u=t(47),d=t(29),j=t(85),f=t.n(j),h=t(48),b=t(1),v={nameStyle:{fontSize:"5em"},inlineChild:{display:"inline-block"},mainContainer:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}};n.default=function(e){var n=Object(r.useState)(0),t=Object(o.a)(n,2),c=t[0],l=t[1],j=Object(r.useRef)(null),m=Object(h.a)(),O=Object(r.useState)(null),g=Object(o.a)(O,2),x=g[0],p=g[1];return console.log("changed",j.current),Object(r.useEffect)((function(){return c||null===j.current||(console.log("Went in darkmode"),l(f()(m.value?{el:j.current,mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1,color:18102,backgroundColor:592137,points:12}:{el:j.current,mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1,color:9211135,backgroundColor:15990783,points:9}))),function(){c&&c.destroy(),console.log("destroyed")}}),[j]),Object(r.useEffect)((function(){fetch(s.a.home,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return p(e)})).catch((function(e){return e}))}),[]),x?Object(b.jsx)("div",{ref:j,children:Object(b.jsx)("div",{className:"homepage-container",children:Object(b.jsx)(a.a,{children:Object(b.jsxs)("div",{style:v.mainContainer,children:[Object(b.jsx)("h1",{style:v.nameStyle,children:null===x||void 0===x?void 0:x.name}),Object(b.jsxs)("div",{style:{flexDirection:"row"},children:[Object(b.jsx)("h2",{style:v.inlineChild,children:"I'm\xa0"}),Object(b.jsx)(i.a,{options:{loop:!0,autoStart:!0,strings:null===x||void 0===x?void 0:x.roles}})]}),Object(b.jsx)(u.default,{})]})})})}):Object(b.jsx)(d.default,{})}},47:function(e,n,t){"use strict";t.r(n);var o=t(10),r=t(0),c=t(84),i=t(19),l=t(24),a=t(1),s={iconStyle:{marginLeft:10,marginRight:10,marginBottom:10}};n.default=function(){var e=Object(r.useContext)(i.a),n=Object(r.useState)(null),t=Object(o.a)(n,2),u=t[0],d=t[1];return Object(r.useEffect)((function(){fetch(l.a.social,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return d(e)})).catch((function(e){return e}))}),[]),Object(a.jsx)("div",{className:"social",children:u?u.social.map((function(n){return Object(a.jsx)(c.SocialIcon,{style:s.iconStyle,url:n.href,network:n.network,bgColor:e.socialIconBgColor,target:"_blank",rel:"noopener"},n.network)})):null})}},50:function(e,n,t){"use strict";var o=t(0),r=t.n(o).a.createContext();n.a=r},90:function(e,n,t){}},[[146,11,12]]]);
//# sourceMappingURL=main.95b39616.chunk.js.map