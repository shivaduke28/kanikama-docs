(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"7ljp":function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return s})),n.d(t,"MDXProvider",(function(){return m})),n.d(t,"mdx",(function(){return O})),n.d(t,"useMDXComponents",(function(){return f})),n.d(t,"withMDXComponents",(function(){return l}));var r=n("q1tI"),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){return function(t){var n=f(t.components);return(o.a.createElement(e,c({},t,{components:n})))}},f=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"===typeof e?e(t):u(u({},t),e)),n},m=function(e){var t=f(e.components);return(o.a.createElement(s.Provider,{value:t},e.children))},b="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},y=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),s=f(n),l=r,m=s["".concat(c,".").concat(l)]||s[l]||d[l]||a;return n?o.a.createElement(m,u(u({ref:t},i),{},{components:n})):o.a.createElement(m,u({ref:t},i))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var a=n.length,c=new Array(a);c[0]=y;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[b]="string"===typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},Ff2n:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},cEg4:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var r=n("wx14"),o=n("Ff2n"),a=n("q1tI"),c=n.n(a),i=n("7ljp"),u=(c.a.createElement,{}),p="wrapper";function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.mdx)(p,Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"kanikamaunityskylight"},"KanikamaUnitySkyLight"),Object(i.mdx)("p",null,"Use the ",Object(i.mdx)("strong",{parentName:"p"},"KanikamaUnitySkyLight")," component when you want to update the Ambient Light's effect to lightmaps at runtime.",Object(i.mdx)("br",{parentName:"p"}),"\n","Create an empty object in your scene and add this component, and then specify it to the \u201cKanikama Lights\u201d field of the KanikamaSceneDesciptor component."),Object(i.mdx)("p",null,"Note that this component requires a Light object that ",Object(i.mdx)("strong",{parentName:"p"},"usually can be disabled"),"."),Object(i.mdx)("p",null,"The light object is not used on baking.",Object(i.mdx)("br",{parentName:"p"}),"\n","At runtime, the light object's ",Object(i.mdx)("strong",{parentName:"p"},"color")," and ",Object(i.mdx)("strong",{parentName:"p"},"intensity")," fields are used to store the current color of the ambient light.",Object(i.mdx)("br",{parentName:"p"}),"\n","You can change these fields by custom Udon scripts and Animations."),Object(i.mdx)("p",null,Object(i.mdx)("img",Object(r.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/45098240/143771606-a1d12404-2a1d-4f53-a2f1-0b6304898856.png",alt:"image"}))))}s.isMDXComponent=!0,s.frontmatter={title:"KanikamaUnitySkyLight"}},kI1J:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/runtime/kanikama-unity-sky-light",function(){return n("cEg4")}])},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))}},[["kI1J",0,1]]]);