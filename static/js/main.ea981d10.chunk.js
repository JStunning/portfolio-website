(this["webpackJsonpportfolio-website"]=this["webpackJsonpportfolio-website"]||[]).push([[0],{67:function(e,c,t){},68:function(e,c,t){},82:function(e,c,t){"use strict";t.r(c);var s=t(2),j=t(1),n=t.n(j),a=t(8),i=t.n(a),r=(t(67),t(68),t(16)),l=t(113),o=t(114),b=t(115),h=t(108),d=t(110),O=t(112),x=t(118),u=t(119),m=t(53),p=t.n(m),g=Object(h.a)((function(e){return{menuButton:{color:"white"}}})),f=function(e){var c=g(),t=Object(j.useState)(null),n=Object(r.a)(t,2),a=n[0],i=n[1],l=function(){i(null)};return Object(s.jsxs)("div",{children:[Object(s.jsx)(d.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){i(e.currentTarget)},children:Object(s.jsx)(O.a,{edge:"start","aria-label":"menu",children:Object(s.jsx)(p.a,{className:c.menuButton})})}),Object(s.jsxs)(x.a,{id:"simple-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:l,children:[Object(s.jsx)(u.a,{onClick:l,children:"Projects"}),Object(s.jsx)(u.a,{onClick:l,children:"Calculator"}),Object(s.jsx)(u.a,{onClick:l,children:"Clock"}),Object(s.jsx)(u.a,{onClick:function(){e.CatFactActivity(!0),l()},children:"Cat Fact"})]})]})},v=t(54),N=t.n(v),C=function(e){var c=Object(j.useState)(null),t=Object(r.a)(c,2),n=t[0],a=t[1],i=Object(j.useState)(!1),l=Object(r.a)(i,2),o=l[0],b=l[1],h=Object(j.useState)([]),d=Object(r.a)(h,2),O=d[0],x=d[1],u=Object(j.useState)(!1),m=Object(r.a)(u,2),p=m[0],g=m[1],f=Object(j.useState)(0),v=Object(r.a)(f,2),C=v[0],k=v[1];return console.log("imageCount",C),!0===e.props&&!0!==p&&g(!0),!1===e.props&&!1!==p&&g(!1),Object(j.useEffect)((function(){fetch("https://cat-fact.herokuapp.com/facts").then((function(e){return e.json()})).then((function(e){b(!0),x(e)}),(function(e){b(!0),a(e),console.log("error")}))}),[]),n?Object(s.jsxs)("div",{children:["Error: ",n.message]}):o?!0===p?Object(s.jsx)(N.a,{children:Object(s.jsx)("div",{className:"cat-fact-div",children:Object(s.jsx)("ul",{className:"cat-facts",children:Object(s.jsxs)("li",{className:"cat-fact",children:[Object(s.jsx)("div",{className:"cat-fact-x-button-div",children:Object(s.jsx)("button",{className:"cat-fact-x-button",onClick:function(){e.setClose(!1),k(4===C?0:C+1)},children:Object(s.jsx)("span",{className:"cat-fact-x-button-text",children:"x"})})}),Object(s.jsx)("div",{className:"cat-fact-text",children:O[C].text})]},O[C]._id)})})}):null:Object(s.jsx)("div",{children:"Loading..."})},k=function(){var e=Object(j.useState)(!1),c=Object(r.a)(e,2),t=c[0],n=c[1],a=function(e){n(e)};return Object(s.jsxs)("div",{children:[Object(s.jsx)(l.a,{position:"fixed",children:Object(s.jsxs)(o.a,{variant:"dense",className:"Toolbar",children:[Object(s.jsx)(f,{CatFactActivity:a,closeCat:t}),Object(s.jsx)(b.a,{variant:"h6",color:"inherit",children:"Stunning"})]})}),Object(s.jsx)("div",{children:Object(s.jsx)(C,{props:t,setClose:a})})]})},S=t(55),w=function(){return Object(s.jsx)("div",{className:"App-showcase",children:Object(s.jsxs)("div",{className:"showcase-overlay",children:[Object(s.jsxs)("h1",{children:["Hi, I'm Jack Dunning.",Object(s.jsx)("br",{})," I'm a Web Developer currently looking for a job in Seattle."]}),Object(s.jsx)("p",{children:"Interested in working together? Feel free to contact me for any project or collaboration."}),Object(s.jsx)("a",{id:"chevron",href:"#chevron",children:Object(s.jsx)(S.a,{})})]})})},J=t(116),F=t(117),y=function(){return Object(s.jsxs)("div",{id:"Skills",className:"Skills",children:[Object(s.jsx)("h2",{children:"Skills"}),Object(s.jsxs)("div",{className:"Skills-cards",children:[Object(s.jsx)(J.a,{className:"skill",children:Object(s.jsxs)(F.a,{children:[Object(s.jsx)("h3",{children:"Languages"}),Object(s.jsx)(b.a,{children:"Javascript"}),Object(s.jsx)(b.a,{children:"HTML"}),Object(s.jsx)(b.a,{children:"CSS"}),Object(s.jsx)(b.a,{children:"C#"}),Object(s.jsx)(b.a,{children:"Python"})]})}),Object(s.jsx)(J.a,{className:"skill",children:Object(s.jsxs)(F.a,{children:[Object(s.jsx)("h3",{children:"Other Technologies"}),Object(s.jsx)(b.a,{children:"React"}),Object(s.jsx)(b.a,{children:"Jquery"}),Object(s.jsx)(b.a,{children:"Sass"}),Object(s.jsx)(b.a,{children:"GraphQL"}),Object(s.jsx)(b.a,{children:"SQL"}),Object(s.jsx)(b.a,{children:"MongoDB"})]})})]})]})},P=function(){return Object(s.jsxs)("div",{className:"Jobs",children:[Object(s.jsx)("h2",{children:"Jobs"}),Object(s.jsxs)("div",{className:"jobs-cards",children:[Object(s.jsx)(J.a,{className:"job",children:Object(s.jsxs)(F.a,{children:[Object(s.jsx)("h3",{children:"Anywhere.com"}),Object(s.jsx)("p",{children:"2020"}),Object(s.jsx)("h4",{children:"Intern Web Developer"}),Object(s.jsx)(b.a,{children:"Javascript"}),Object(s.jsx)(b.a,{children:"React"}),Object(s.jsx)(b.a,{children:"GraphQL"}),Object(s.jsx)(b.a,{children:"AgGrid"})]})}),Object(s.jsx)(J.a,{className:"job",children:Object(s.jsxs)(F.a,{children:[Object(s.jsx)("h3",{children:"Target"}),Object(s.jsx)("p",{children:"2017-2019"}),Object(s.jsx)("h4",{children:"Tech Consultant"}),Object(s.jsx)(b.a,{children:"Sales"}),Object(s.jsx)(b.a,{children:"Costumer Service"})]})}),Object(s.jsx)(J.a,{className:"job",children:Object(s.jsxs)(F.a,{children:[Object(s.jsx)("h3",{children:"Kauai Nut Roasters"}),Object(s.jsx)("p",{children:"2014-2017"}),Object(s.jsx)("h4",{children:"Roaster"}),Object(s.jsx)(b.a,{children:"Cooking"}),Object(s.jsx)(b.a,{children:"Cleaning"})]})})]})]})},I=function(){return Object(s.jsxs)("div",{className:"Projects",children:[Object(s.jsx)("h2",{children:"Projects"}),Object(s.jsxs)("div",{className:"project-cards",children:[Object(s.jsx)(J.a,{className:"project",children:Object(s.jsxs)(F.a,{children:[Object(s.jsx)("h3",{children:"Adventureon"}),Object(s.jsx)("a",{href:"https://jackstunning.github.io/textAdventure/",children:Object(s.jsx)("img",{className:"project-img",src:"https://i.imgur.com/fmM8ShI.jpeg",alt:"code"})}),Object(s.jsx)(b.a,{children:"Html"}),Object(s.jsx)(b.a,{children:"Css"}),Object(s.jsx)(b.a,{children:"Jquery"})]})}),Object(s.jsx)(J.a,{className:"project",children:Object(s.jsxs)(F.a,{children:[Object(s.jsx)("h3",{children:"Project Name"}),Object(s.jsx)("img",{className:"project-img",src:"https://www.gettingsmart.com/wp-content/uploads/2017/06/Program-Code-Feature-Image.jpg",alt:"code"}),Object(s.jsx)(b.a,{children:"Javascript"})]})}),Object(s.jsx)(J.a,{className:"project",children:Object(s.jsxs)(F.a,{children:[Object(s.jsx)("h3",{children:"Project Name"}),Object(s.jsx)("img",{className:"project-img",src:"https://www.gettingsmart.com/wp-content/uploads/2017/06/Program-Code-Feature-Image.jpg",alt:"code"}),Object(s.jsx)(b.a,{children:"Javascript"})]})})]})]})},A=t(41),L=function(){return Object(s.jsxs)("div",{className:"Footer",children:[Object(s.jsx)("a",{className:"icon",href:"https://github.com/JackStunning",children:Object(s.jsx)(A.a,{size:50})}),Object(s.jsx)("a",{className:"icon",href:"https://www.linkedin.com/in/jackstunning/",children:Object(s.jsx)(A.b,{size:50})})]})};var T=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(k,{}),Object(s.jsx)(w,{}),Object(s.jsx)("div",{children:Object(s.jsx)(y,{})}),Object(s.jsx)("div",{children:Object(s.jsx)(P,{})}),Object(s.jsx)("div",{children:Object(s.jsx)(I,{})}),Object(s.jsx)(L,{})]})},B=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,121)).then((function(c){var t=c.getCLS,s=c.getFID,j=c.getFCP,n=c.getLCP,a=c.getTTFB;t(e),s(e),j(e),n(e),a(e)}))};i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(T,{})}),document.getElementById("root")),B()}},[[82,1,2]]]);
//# sourceMappingURL=main.ea981d10.chunk.js.map