(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,a,t){},108:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(43),i=t.n(r);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=t(9),c=(t(53),t(16)),s=t(17),m=t(19),d=t(18),p=t(20),u=t(11),b=t(10),f=t(8),h=t.n(f),g=t(1),v=t.n(g),E=o.a.createContext(),w=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(d.a)(a).call(this,e))).state={show:!1,activeLink:null},t.toggleSidenav=t.toggleSidenav.bind(Object(u.a)(Object(u.a)(t))),t.handleRouteChange=t.handleRouteChange.bind(Object(u.a)(Object(u.a)(t))),t}return Object(p.a)(a,e),Object(s.a)(a,[{key:"toggleSidenav",value:function(){this.setState(function(e){return{show:!e.show}})}},{key:"handleRouteChange",value:function(e){this.setState({activeLink:e})}},{key:"render",value:function(){return o.a.createElement(E.Provider,{value:{show:this.state.show,activeLink:this.state.activeLink,toggleSidenav:this.toggleSidenav,onRouteChange:this.handleRouteChange}},this.props.children)}}]),a}(o.a.Component),x=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(s.a)(a,[{key:"componentWillMount",value:function(){var e=this;this.unsubscribe=this.props.history.listen(function(a){e.props.onRouteChange(a.pathname)}),this.props.onRouteChange(this.props.history.location.pathname)}},{key:"componentWillUnmount",value:function(){this.unsubscribe&&this.unsubscribe()}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.show,n=e.activeLink;return o.a.createElement("nav",{style:t?{opacity:1}:{},className:v()(a.sidenavContainer,"position-fixed h-100 pt-5 pb-4")},o.a.createElement("img",{src:"https://uploads.codesandbox.io/uploads/user/ace28234-a8f6-4bad-ac46-ad90b1fe37b9/RYdr-avatar.png",alt:"Avatar",className:v()(a.roundedAvatar,"img-fluid mb-4")}),o.a.createElement("div",{className:v()("list-group",a.navItems)},o.a.createElement(l.b,{to:"/about",activeClassName:a._active,className:v()(a.listGroupItem,"my-2 rounded-0",{"pl-5 border-0":"/about"!==n})},o.a.createElement("strong",null,"About")),o.a.createElement(l.b,{to:"/portfolio/",exact:!0,activeClassName:a._active,className:v()(a.listGroupItem,"my-2 rounded-0",{"pl-5 border-0":"/portfolio/"!==n})},o.a.createElement("strong",null,"Works")),o.a.createElement(l.b,{to:"/contact",activeClassName:a._active,className:v()(a.listGroupItem,"my-2 rounded-0",{"pl-5 border-0":"/contact"!==n})},o.a.createElement("strong",null,"Contact"))),o.a.createElement("ul",{className:v()(a.stayConnected,"list-unstyled d-flex justify-content-between m-0 px-5")},o.a.createElement("li",{className:""},o.a.createElement("a",{href:"https://www.behance.net/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"fab fa-behance"}))),o.a.createElement("li",{className:""},o.a.createElement("a",{href:"https://dribbble.com/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"fab fa-dribbble"}))),o.a.createElement("li",{className:""},o.a.createElement("a",{href:"https://twitter.com/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"fab fa-twitter-square"}))),o.a.createElement("li",{className:""},o.a.createElement("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"fab fa-github"})))))}}]),a}(o.a.Component),N=h()({sidenavContainer:{top:"0",left:"0",width:"240px",overflowY:"auto",overflowX:"hidden",opacity:"0",transition:"all 0.2s ease-in-out","-webkit-transition":"all 0.2s ease-in-out","-webkit-overflow-scrolling":"touch"},roundedAvatar:{padding:"0 4.2em 0 3em"},navItems:{minHeight:"560px"},_active:{"&, &:active":{border:"0",paddingLeft:"calc(3rem - 9px) !important",borderLeft:"9px solid #ff4ba8"},"& strong":{color:"#ff4ba8"}},listGroupItem:{color:"#fff",fontWeight:"300",fontSize:"20.4px",padding:".75rem 1.25rem",backgroundColor:"rgba(10, 17, 42, 0)","&:hover":{color:"#fff",backgroundColor:"rgba(255, 255, 255, 0.03)",textDecoration:"none"}},stayConnected:{opacity:"0.16","& a":{color:"#fff"},"& a:hover, a:active":{color:"#ff4ba8"}},"@media (min-width: 768px)":{sidenavContainer:{opacity:"1"}}})(Object(b.e)(x)),k=(t(107),h()({aboutContainer:{transition:"all 0.5s ease-in-out","-webkit-transition":"all 0.5s ease-in-out"},pageTitle:{fontWeight:"300",fontSize:"33.2px",borderBottom:"3px solid #ff4ba8"},name:{fontWeight:"300","& span":{fontWeight:"100"}},role:{color:"#ff4ba8"},description:{fontWeight:"100",opacity:"0.58",fontSize:"1em","& span":{color:"#5d96ff"}},buttons:{minHeight:"150px"},hireButton:{backgroundColor:"#ff4ba8","&, &:hover":{color:"#fff"}},knowButton:{backgroundColor:"rgba(255, 255, 255, 0.06)","&, &:hover":{color:"#fff"}},quoteText:{position:"relative",bottom:"1.5em","& img":{position:"absolute",top:"0",width:"62px"},"& p":{fontSize:"1.1em",position:"absolute",top:"16px",left:"2.4em",fontWeight:"300",opacity:"0.24"}},"@media (min-width: 576px)":{name:{fontSize:"4em"},role:{fontSize:"2em"},description:{fontSize:"1.5em"},quoteText:{"& img":{width:"62px"},"& p":{fontSize:"1.5em",top:"13px",left:"1.7em"}}},"@media (min-width: 768px)":{name:{fontSize:"3em"},role:{fontSize:"1.8em"},description:{fontSize:"1.25em"},buttons:{minHeight:"180px"}},"@media (min-width: 1200px)":{name:{fontSize:"4em"},role:{fontSize:"2em"},description:{fontSize:"1.5em"}}})(function(e){var a=e.classes,t=e.toggleSidenav;return o.a.createElement("div",{className:v()(a.aboutContainer,"container px-4 px-lg-5 pb-5")},o.a.createElement("button",{className:"btn btn-link d-md-none p-0 my-5 text-white",onClick:t},o.a.createElement("i",{className:"fas fa-bars"})),o.a.createElement("div",{className:"d-block mb-5 mt-md-5"},o.a.createElement("span",{className:v()(a.pageTitle,"pb-1")},"About")),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12 col-lg-6 position-relative"},o.a.createElement("h1",{className:v()(a.name,"m-0")},"Syarif ",o.a.createElement("span",null,"Dairani")),o.a.createElement("h2",{className:v()(a.role,"mb-4")},"Web Developer"),o.a.createElement("p",{className:v()(a.description,"mb-4")},"I create a creative and modern web application, I always stay up to date in the web development industry, I love to code on"," ",o.a.createElement("span",{className:"font-weight-normal"},"Python")," and"," ",o.a.createElement("span",{className:"font-weight-normal"},"JavaScript"),"."),o.a.createElement("div",{className:v()(a.buttons)},o.a.createElement("button",{className:v()(a.hireButton,"btn mr-4 px-4 rounded-0")},"Hire me"),o.a.createElement("button",{className:v()(a.knowButton,"btn px-4 rounded-0")},"Know more")),o.a.createElement("div",{className:v()(a.quoteText,"w-100")},o.a.createElement("img",{src:"https://uploads.codesandbox.io/uploads/user/ace28234-a8f6-4bad-ac46-ad90b1fe37b9/xAWj-q.png",alt:"Stay hungry. Stay foolish."}),o.a.createElement("p",{className:"font-weight-light"},"Stay Hungry. Stay Foolish")))))})),y=h()({workContainer:{transition:"all 0.5s ease-in-out","-webkit-transition":"all 0.5s ease-in-out"},pageTitle:{fontWeight:"300",fontSize:"33.2px",borderBottom:"3px solid #ff4ba8"},cardBodyBackground:{backgroundColor:"#1e1a34","& h4":{fontWeight:"300",fontSize:"18.4px"},"& p":{opacity:"0.18",fontWeight:"300",fontSize:"13.2px"},"& a":{color:"#ff4ba8",fontWeight:"300",fontSize:"10.2px"}},"@media (min-width: 768px)":{cardBodyBackground:{"& h4":{fontWeight:"300",fontSize:"18.4px"}}}})(function(e){var a=e.classes,t=e.toggleSidenav;return o.a.createElement("div",{className:v()(a.workContainer,"container px-4 px-lg-5")},o.a.createElement("button",{className:"btn btn-link d-md-none p-0 my-5 text-white",onClick:t},o.a.createElement("i",{className:"fas fa-bars"})),o.a.createElement("div",{className:"d-block mb-5 mt-md-5"},o.a.createElement("span",{className:v()(a.pageTitle,"pb-1")},"Labs")),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12 col-md-6 mb-5"},o.a.createElement("picture",null,o.a.createElement("source",{srcSet:"https://uploads.codesandbox.io/uploads/user/ace28234-a8f6-4bad-ac46-ad90b1fe37b9/t9Tq-lab-1.webp",type:"image/webp"}),o.a.createElement("img",{className:"img-fluid w-100",src:"https://uploads.codesandbox.io/uploads/user/ace28234-a8f6-4bad-ac46-ad90b1fe37b9/BVUl-lab-1.png",alt:"Card cap"})),o.a.createElement("div",{className:v()(a.cardBodyBackground,"p-4 pb-3")},o.a.createElement("h4",{className:"m-0 mb-2"},"colorsup"),o.a.createElement("p",{className:"mb-2 text-truncate"},"Grasp8 is in pre production phase. More details coming soon"),o.a.createElement("a",{href:"https://uploads.codesandbox.io/uploads/user/ace28234-a8f6-4bad-ac46-ad90b1fe37b9/BVUl-lab-1.png"},"Check now"))),o.a.createElement("div",{className:"col-12 col-md-6 mb-5"},o.a.createElement("picture",null,o.a.createElement("source",{srcSet:"https://uploads.codesandbox.io/uploads/user/ace28234-a8f6-4bad-ac46-ad90b1fe37b9/UfVR-lab-2.webp",type:"image/webp"}),o.a.createElement("img",{className:"img-fluid w-100",src:"https://uploads.codesandbox.io/uploads/user/ace28234-a8f6-4bad-ac46-ad90b1fe37b9/Wg2w-lab-2.png",alt:"Card cap"})),o.a.createElement("div",{className:v()(a.cardBodyBackground,"p-4 pb-3")},o.a.createElement("h4",{className:"m-0 mb-2"},"Project Grasp8"),o.a.createElement("p",{className:"mb-2 text-truncate"},"Curated color palate inspiration on your fingure tip"),o.a.createElement("a",{href:"https://uploads.codesandbox.io/uploads/user/ace28234-a8f6-4bad-ac46-ad90b1fe37b9/Wg2w-lab-2.png"},"More screens")))))}),C=h()({contactContainer:{transition:"all 0.5s ease-in-out","-webkit-transition":"all 0.5s ease-in-out"},pageTitle:{fontWeight:"300",fontSize:"33.2px",borderBottom:"3px solid #ff4ba8"},headerText:{fontSize:"24.03px",fontWeight:"100"},input:{backgroundColor:"rgba(30, 26, 52, 0.33)",borderWidth:"1px",borderColor:"rgba(79, 75, 104, 0.33)",color:"#fff",borderRadius:0,"&::-webkit-input-placeholder":{fontSize:"14.2px",opacity:"0.33"},"&::-moz-placeholder, :-ms-input-placeholder":{fontSize:"14.2px"}},descriptionTextarea:{height:"244px",extend:"input"},contactBtn:{color:"#fff",backgroundColor:"#ff4ba8",borderColor:"#ff4ba8"}})(function(e){var a=e.classes,t=e.toggleSidenav;return o.a.createElement("div",{className:v()(a.contactContainer,"container mb-5")},o.a.createElement("button",{className:"btn btn-link d-md-none p-0 my-5 text-white",onClick:t},o.a.createElement("i",{className:"fas fa-bars"})),o.a.createElement("div",{className:"d-block mb-5 mt-md-5"},o.a.createElement("span",{className:v()(a.pageTitle,"pb-1")},"Contact")),o.a.createElement("h1",{className:v()(a.headerText,"mb-4")},"Project brief description"),o.a.createElement("textarea",{className:v()(a.descriptionTextarea,"w-100 mb-4 p-3"),name:"description",placeholder:"Project Type, Target customer, timeline, estimate etc"}),o.a.createElement("h1",{className:v()(a.headerText,"mb-4")},"About You"),o.a.createElement("div",{className:"row mb-4"},o.a.createElement("div",{className:"col-12 col-md-6"},o.a.createElement("input",{className:v()(a.input,"w-100 mb-3 p-2"),id:"fullname",type:"text",placeholder:"Full Name"})),o.a.createElement("div",{className:"col-12 col-md-6"},o.a.createElement("input",{className:v()(a.input,"w-100 mb-3 p-2"),id:"email",type:"text",placeholder:"Email Address"})),o.a.createElement("div",{className:"col-12 col-md-6"},o.a.createElement("input",{className:v()(a.input,"w-100 mb-3 p-2"),id:"company",type:"text",placeholder:"Company Name"})),o.a.createElement("div",{className:"col-12 col-md-6"},o.a.createElement("input",{className:v()(a.input,"w-100 mb-3 p-2"),id:"position",type:"text",placeholder:"Position"}))),o.a.createElement("button",{className:v()(a.contactBtn,"btn btn-sm rounded-0")},"Request a Quote"))}),S=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:v()(e.mainContainer,"container-fluid p-0 h-100")},o.a.createElement("div",{className:v()(e.firstGlassContainer,"d-flex h-100")},o.a.createElement(E.Consumer,null,function(a){var t=a.show,r=a.toggleSidenav,i=a.activeLink,l=a.onRouteChange;return o.a.createElement(n.Fragment,null,o.a.createElement(N,{show:t,activeLink:i,onRouteChange:l}),o.a.createElement("section",{style:t?{marginLeft:"240px"}:{},className:v()(e.contentContainer,"position-relative w-100")},o.a.createElement(b.c,null,o.a.createElement(b.a,{path:"/about",render:function(e){return o.a.createElement(k,Object.assign({},e,{toggleSidenav:r}))}}),o.a.createElement(b.a,{path:"/contact",render:function(e){return o.a.createElement(C,Object.assign({},e,{toggleSidenav:r}))}}),o.a.createElement(b.a,{path:"/portfolio/",render:function(e){return o.a.createElement(y,Object.assign({},e,{toggleSidenav:r}))}}))))})))}}]),a}(o.a.Component),j=h()({mainContainer:{backgroundImage:"url(https://uploads.codesandbox.io/uploads/user/ace28234-a8f6-4bad-ac46-ad90b1fe37b9/wdJW-blurred_bg.png)",backgroundSize:"cover",overflow:"hidden"},firstGlassContainer:{backgroundColor:"rgba(10, 17, 42, 0.6)"},contentContainer:{minWidth:"320px",marginLeft:"0",overflowX:"hidden",backgroundColor:"rgba(10, 17, 42, 0.7)",transition:"all 0.2s ease-in-out","-webkit-transition":"all 0.2s ease-in-out","-webkit-overflow-scrolling":"touch"},"@media (min-width: 768px)":{contentContainer:{marginLeft:"240px"}}})(Object(b.e)(S));i.a.render(o.a.createElement(w,null,o.a.createElement(l.a,null,o.a.createElement(j,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},48:function(e,a,t){e.exports=t(108)},53:function(e,a,t){}},[[48,1,2]]]);
//# sourceMappingURL=main.4c9f5d21.chunk.js.map