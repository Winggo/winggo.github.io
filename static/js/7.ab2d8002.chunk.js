(this["webpackJsonpwinggo.us"]=this["webpackJsonpwinggo.us"]||[]).push([[7],{105:function(e,t,a){e.exports=a.p+"static/media/serverSideRender.85424c15.gif"},106:function(e,t,a){e.exports=a.p+"static/media/clientSideRender.75c1c9a4.gif"},107:function(e,t,a){e.exports=a.p+"static/media/lazyLoading.1cdd3a35.png"},115:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(36),o=a.n(r),l=a(75),s=a.n(l),c=a(16),d=a.n(c),m=a(31),g=a(32),u=a(1),p=a(2),h=a(3),b=a.n(h),f=a(12),w=a.n(f),v=a(4),y=i.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,r=e.fluid,o=e.rounded,l=e.roundedCircle,s=e.thumbnail,c=Object(p.a)(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);a=Object(v.a)(a,"img");var d=b()(r&&a+"-fluid",o&&"rounded",l&&"rounded-circle",s&&a+"-thumbnail");return i.a.createElement("img",Object(u.a)({ref:t},c,{className:b()(n,d)}))}));y.displayName="Image",y.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1};var E=y,x={bsPrefix:w.a.string,fluid:w.a.bool,rounded:w.a.bool,roundedCircle:w.a.bool,thumbnail:w.a.bool},k=i.a.forwardRef((function(e,t){var a=e.className,n=Object(p.a)(e,["className"]);return i.a.createElement(E,Object(u.a)({ref:t},n,{className:b()(a,"figure-img")}))}));k.displayName="FigureImage",k.propTypes=x,k.defaultProps={fluid:!0};var C=k,I=Object(g.a)("figure-caption",{Component:"figcaption"}),N=Object(g.a)("figure",{Component:"figure"});N.Image=C,N.Caption=I;var _=N,R=a(78),S=a.n(R),z=a(70),A=a(6),P=a(105),T=a.n(P),j=a(106),J=a.n(j),O=a(107),W=a.n(O);t.default=function(){return document.title="Winggo Tse \u2014 Rearchitecture",i.a.createElement(z.a,null,i.a.createElement("div",null,i.a.createElement("div",{className:s.a.page},i.a.createElement(d.a,null,i.a.createElement("h1",{style:{textAlign:"center",marginTop:"20px"}},"Rearchitecting My Website's Frontend"),i.a.createElement("div",{className:s.a.picContainer},i.a.createElement("img",{src:o.a,className:s.a.frontPic,alt:"My website's front page."}))),i.a.createElement(d.a,null,i.a.createElement("div",{className:s.a.content},i.a.createElement("p",null,"In this post we'll take a look at the (1) why front-end apps are moving towards dynamic single page apps (PWA) and away from from what we've been doing so long using standard HTML/CSS/JS with server-side rendering. (2) I'll be sharing insights on my approach and outline the steps I took to move away from my legacy website codebase into a dynamic interface that takes advantage of modern browsers. And lastly, (3) there are some interesting technologies I can see myself adopting moving forward that are relevant in this area."),i.a.createElement("p",null,"It's 2019 and by now everyone knows that progessive web apps (PWA) are the standard moving forward. Everyone cares about the user experience, and just 2-3 seconds of wait time navigating from page to page can deter an interested user. PWAs focus on the user experience while providing reliability and engagement. And what better way to brush up on React with the introduction of v16.8 than to rearchitect my entire site?"),i.a.createElement("div",{style:{textAlign:"center",marginTop:"30px"}},i.a.createElement(_,null,i.a.createElement(_.Image,{style:{marginRight:"10px"},src:J.a,width:280,alt:"clientRender"}),i.a.createElement(_.Image,{style:{marginLeft:"10px"},src:T.a,width:280,alt:"clientRender"}),i.a.createElement(_.Caption,null,"Client-side render vs. Server-side render",i.a.createElement("br",null),"3.5s vs 6.9s"))),i.a.createElement("p",null,"Immediately the transitions between routes feels smoother and is at least 2x faster (>1s vs 2.2s load time) because instead of waiting for the server to respond with a new HTML page, the browser simply needs to run JavaScript to manipulate the DOM. Server communication is unnecessary."),i.a.createElement("p",null,"Additionally, I've optimized performance on inital load speed by taking advantage of lazy loading and code splitting introduced in React v16.6 used in conjunction with Webpack v4. Code-splitting works by loading the bare minimum JavaScript to make the webpage interactive, and downloading the rest of the JS code that's unnecessary at that moment while the browser is idle. By splitting my code into various bundles which can then be loaded on demand, the bundle the browser needs to download when hitting the landing page is reduced by a sizable fraction in size and therefore user wait time upon initalization is shrunk. Here is a glimpse of how it works in code."),i.a.createElement("br",null),i.a.createElement(S.a,{gist:"Winggo/8d834d72337cb8eccdf1442983bf50d7"}),i.a.createElement("br",null),i.a.createElement("p",null,"The following graphic provides a visual of lazy loading in action, as represented by individual chunks of JavaScript:"),i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement("img",{src:W.a,style:{width:"85%",marginBottom:"25px"},alt:"Network tab on Chrome DevTools."})),i.a.createElement("p",null,"I'll leave it here for now. There are some technologies I wish to look into, as optimization is always a work in development. I'm keen into researching more about the React-Loadable library to lazy load JavaScript bundles and compare it wth the method maintained by React."),i.a.createElement("div",{style:{textAlign:"right"}},i.a.createElement(A.b,{to:"/blog/typescript",style:{textDecorationColor:"grey"}},i.a.createElement("h2",{className:s.a.next},"Next \u2192")))))),i.a.createElement(d.a,null,i.a.createElement(m.a,{content:"There's always room for optimization."}))))}},75:function(e,t,a){e.exports={page:"blogs_page__3IXNm",picContainer:"blogs_picContainer__5v3o9",frontPic:"blogs_frontPic__3D8AV",content:"blogs_content__2GlGU",next:"blogs_next__2hXz4"}}}]);
//# sourceMappingURL=7.ab2d8002.chunk.js.map