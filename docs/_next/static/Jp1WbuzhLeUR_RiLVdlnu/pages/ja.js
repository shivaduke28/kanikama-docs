(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"7ljp":function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return s})),n.d(t,"MDXProvider",(function(){return d})),n.d(t,"mdx",(function(){return h})),n.d(t,"useMDXComponents",(function(){return m})),n.d(t,"withMDXComponents",(function(){return p}));var r=n("q1tI"),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){return function(t){var n=m(t.components);return(a.a.createElement(e,i({},t,{components:n})))}},m=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"===typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=m(e.components);return(a.a.createElement(s.Provider,{value:t},e.children))},b="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=m(n),p=r,d=s["".concat(i,".").concat(p)]||s[p]||f[p]||o;return n?a.a.createElement(d,l(l({ref:t},c),{},{components:n})):a.a.createElement(d,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var o=n.length,i=new Array(o);i[0]=O;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[b]="string"===typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},Ff2n:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},dLbL:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var r=n("wx14"),a=n("Ff2n"),o=n("q1tI"),i=n.n(o),c=n("7ljp"),l=(i.a.createElement,{}),u="wrapper";function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.mdx)(u,Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("div",{align:"center"},Object(c.mdx)("br",null),Object(c.mdx)("img",{alt:"logo",src:"/static/images/kanikama_logo.png",width:"420"}),Object(c.mdx)("br",null),Object(c.mdx)("br",null),"\ud83e\udd80\ud83d\udca1 KanikamaGI \ud83d\udca1\ud83e\udd80",Object(c.mdx)("br",null),Object(c.mdx)("br",null)),Object(c.mdx)("p",null,"KanikamaGI is an asset for VRChat to update lightmaps at runtime, powered by ",Object(c.mdx)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/vrchat-community/UdonSharp"}),"UdonSharp"),"."),Object(c.mdx)("h2",{id:"features"},"Features"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"Updates lightmaps every frame accurately."),Object(c.mdx)("li",{parentName:"ul"},"Works with regular static lightmaps."),Object(c.mdx)("li",{parentName:"ul"},"A Standard shader with Kanikama functionality."),Object(c.mdx)("li",{parentName:"ul"},"Supports Directional lightmaps and Directional Specular."),Object(c.mdx)("li",{parentName:"ul"},"Supports Bakery.")),Object(c.mdx)("h3",{id:"light-sources"},"Light Sources"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"Light components (Baked/Mixed)"),Object(c.mdx)("li",{parentName:"ul"},"Renderers with emissive materials"),Object(c.mdx)("li",{parentName:"ul"},"Ambient lights"),Object(c.mdx)("li",{parentName:"ul"},"Monitors (texture lights with movies)")),Object(c.mdx)("h2",{id:"comparison-with-realtime-gi"},"Comparison with Realtime GI"),Object(c.mdx)("h3",{id:"advantages"},"Advantages"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"No frame delay in updating GI."),Object(c.mdx)("li",{parentName:"ul"},"Less CPU load.")),Object(c.mdx)("h3",{id:"disadvantages"},"Disadvantages"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"The position and angle of light sources cannot be changed."),Object(c.mdx)("li",{parentName:"ul"},"Can not update light probes."),Object(c.mdx)("li",{parentName:"ul"},"Need to bake lightmaps per light sources, that increases Scene capacity and VRAM load.")),Object(c.mdx)("h2",{id:"when-should-i-use-it"},"When should I use it?"),Object(c.mdx)("p",null,"When there are a lot of flickering of light sources, such as screen showing VJ\u2019s image in club worlds, RealtimeGI will not be able to update GI without delay. Also, if your world may have a lot of players and you can\u2019t handle the CPU load of RealtimeGI, then KanikamaGI may be an option."),Object(c.mdx)("p",null,"Notice that it will increase the number of textures and the cost of drawing the static objects that GI will reflect."))}s.isMDXComponent=!0,s.frontmatter={}},"m/l8":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ja",function(){return n("dLbL")}])},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))}},[["m/l8",0,1]]]);