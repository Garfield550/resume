(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"84bF":function(e,t,a){"use strict";a("OGtf")("small",(function(e){return function(){return e(this,"small","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n,i=r(a("PJYZ")),l=r(a("VbXa")),o=r(a("8OQS")),c=r(a("pVnL")),s=r(a("q1tI")),d=r(a("17x9")),f=function(e){var t=(0,c.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},u=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed;return p(t||a).src},p=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(u);if(-1!==t)return e[t]}return e[0]},h=Object.create({}),g=function(e){var t=f(e),a=m(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,E=v&&window.IntersectionObserver,y=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return s.default.createElement(s.default.Fragment,{key:t},r&&s.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),s.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return s.default.createElement("source",{key:t,media:a,srcSet:r})}))}function O(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return s.default.createElement("source",{key:t,media:a,srcSet:r})}))}function N(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var H=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},V=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",s=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?N(e,!0):"")+N(e)})).join("")+"<img "+s+l+o+a+r+t+i+n+c+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},j=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=e.ariaHidden,l=s.default.createElement(L,(0,c.default)({src:t},n,{ariaHidden:i}));return a.length>1?s.default.createElement("picture",null,r(a),l):l},L=s.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,l=e.onLoad,d=e.onError,f=e.loading,u=e.draggable,m=e.ariaHidden,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return s.default.createElement("img",(0,c.default)({"aria-hidden":m,sizes:a,srcSet:r,src:n},p,{onLoad:l,onError:d,ref:t,loading:f,draggable:u,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));L.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var A=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&E&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=s.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=H(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=f(e),a=m(t),h[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=f(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,l=e.imgStyle,o=void 0===l?{}:l,d=e.placeholderStyle,u=void 0===d?{}:d,m=e.placeholderClassName,h=e.fluid,g=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,E=e.Tag,y=e.itemProp,S=e.loading,N=e.draggable,H=!1===this.state.fadeIn||this.state.imgLoaded,A=!0===this.state.fadeIn&&!this.state.imgCached,M=(0,c.default)({opacity:H?1:0,transition:A?"opacity "+v+"ms":"none"},o),C="boolean"==typeof b?"lightgray":b,I={transitionDelay:v+"ms"},P=(0,c.default)({opacity:this.state.imgLoaded?0:1},A&&I,{},o,{},u),T={title:t,alt:this.state.isVisible?"":a,style:P,className:m,itemProp:y};if(h){var z=h,R=p(h);return s.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(R.srcSet)},s.default.createElement(E,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/R.aspectRatio+"%"}}),C&&s.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},A&&I)}),R.base64&&s.default.createElement(j,{ariaHidden:!0,src:R.base64,spreadProps:T,imageVariants:z,generateSources:O}),R.tracedSVG&&s.default.createElement(j,{ariaHidden:!0,src:R.tracedSVG,spreadProps:T,imageVariants:z,generateSources:x}),this.state.isVisible&&s.default.createElement("picture",null,w(z),s.default.createElement(L,{alt:a,title:t,sizes:R.sizes,src:R.src,crossOrigin:this.props.crossOrigin,srcSet:R.srcSet,style:M,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:N})),this.addNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:V((0,c.default)({alt:a,title:t,loading:S},R,{imageVariants:z}))}}))}if(g){var k=g,G=p(g),B=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:G.width,height:G.height},i);return"inherit"===i.display&&delete B.display,s.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:B,ref:this.handleRef,key:"fixed-"+JSON.stringify(G.srcSet)},C&&s.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:C,width:G.width,opacity:this.state.imgLoaded?0:1,height:G.height},A&&I)}),G.base64&&s.default.createElement(j,{ariaHidden:!0,src:G.base64,spreadProps:T,imageVariants:k,generateSources:O}),G.tracedSVG&&s.default.createElement(j,{ariaHidden:!0,src:G.tracedSVG,spreadProps:T,imageVariants:k,generateSources:x}),this.state.isVisible&&s.default.createElement("picture",null,w(k),s.default.createElement(L,{alt:a,title:t,width:G.width,height:G.height,sizes:G.sizes,src:G.src,crossOrigin:this.props.crossOrigin,srcSet:G.srcSet,style:M,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:N})),this.addNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:V((0,c.default)({alt:a,title:t,loading:S},G,{imageVariants:k}))}}))}return null},t}(s.default.Component);A.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var M=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),C=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});A.propTypes={resolutions:M,sizes:C,fixed:d.default.oneOfType([M,d.default.arrayOf(M)]),fluid:d.default.oneOfType([C,d.default.arrayOf(C)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var I=A;t.default=I},INYr:function(e,t,a){"use strict";var r=a("XKFU"),n=a("CkkT")(6),i="findIndex",l=!0;i in[]&&Array(1)[i]((function(){l=!1})),r(r.P+r.F*l,"Array",{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(i)},OGtf:function(e,t,a){var r=a("XKFU"),n=a("eeVq"),i=a("vhPU"),l=/"/g,o=function(e,t,a,r){var n=String(i(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(l,"&quot;")+'"'),o+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},QeBL:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r);a("V+eJ"),a("WLL4"),a("jm62"),a("8+KV"),a("0l/t"),a("ioFf"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("91GP"),a("HAE/"),a("DNiP"),a("bWfx");function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s={focusable:"false",preserveAspectRatio:"xMidYMid meet"};function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width,a=e.height,r=e.viewBox,n=void 0===r?"0 0 ".concat(t," ").concat(a):r,i=c(e,["width","height","viewBox"]),l=i.tabindex,d=c(i,["tabindex"]),f=o({},s,{},d,{width:t,height:a,viewBox:n});return f["aria-label"]||f["aria-labelledby"]||f.title?(f.role="img",null!=l&&(f.focusable="true",f.tabindex=l)):f["aria-hidden"]=!0,f}var f=a("17x9"),u=a.n(f);function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){m(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var v={willChange:"transform"},E=n.a.forwardRef((function(e,t){var a=e.className,r=e.children,i=e.style,l=void 0===i?{}:i,o=e.tabIndex,c=d(g({},b(e,["className","children","style","tabIndex"]),{tabindex:o})),s=c.tabindex,f=b(c,["tabindex"]);return a&&(f.className=a),null!=s&&(f.tabIndex=s),t&&(f.ref=t),f.style=g({},v,{},l),n.a.createElement("svg",f,r)}));E.displayName="Icon",E.propTypes={"aria-hidden":u.a.string,"aria-label":u.a.string,"aria-labelledby":u.a.string,className:u.a.string,children:u.a.node,height:u.a.number,preserveAspectRatio:u.a.string,tabIndex:u.a.string,viewBox:u.a.string,width:u.a.number,xmlns:u.a.string},E.defaultProps={xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet"};var y=n.a.forwardRef((function(e,t){return n.a.createElement(E,p({width:16,height:16,viewBox:"0 0 16 16",ref:t},e),n.a.createElement("path",{d:"M14,3H2C1.4,3,1,3.4,1,4v8c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1V4C15,3.4,14.6,3,14,3z M12.9,4L8,7.4L3.1,4H12.9z M2,12V4.5\tl5.7,4c0.2,0.1,0.4,0.1,0.6,0l5.7-4V12H2z"}),e.children)})),w=n.a.forwardRef((function(e,t){return n.a.createElement(E,p({width:16,height:16,viewBox:"0 0 16 16",ref:t},e),n.a.createElement("path",{d:"M8,1L5.7,5.6L0.6,6.3l3.7,3.6L3.5,15L8,12.6l4.6,2.4l-0.9-5.1l3.7-3.6l-5.1-0.7L8,1z"}),e.children)})),S=n.a.forwardRef((function(e,t){return n.a.createElement(E,p({width:16,height:16,viewBox:"0 0 16 16",ref:t},e),n.a.createElement("path",{d:"M8,3.3l1.4,2.8l0.2,0.5l0.5,0.1l3.1,0.4L11,9.2l-0.4,0.4l0.1,0.5l0.5,3.1l-2.8-1.4L8,11.5l-0.5,0.2l-2.8,1.4l0.5-3.1\tl0.1-0.5L5,9.2L2.8,7l3.1-0.4l0.5-0.1L6.6,6L8,3.3 M8,1L5.7,5.6L0.6,6.3l3.7,3.6L3.5,15L8,12.6l4.6,2.4l-0.9-5.1l3.7-3.6l-5.1-0.7\tL8,1z"}),e.children)})),x=n.a.forwardRef((function(e,t){return n.a.createElement(E,p({width:16,height:16,viewBox:"0 0 32 32",ref:t},e),n.a.createElement("path",{d:"M17.74,30,16,29l4-7h6a2,2,0,0,0,2-2V8a2,2,0,0,0-2-2H6A2,2,0,0,0,4,8V20a2,2,0,0,0,2,2h9v2H6a4,4,0,0,1-4-4V8A4,4,0,0,1,6,4H26a4,4,0,0,1,4,4V20a4,4,0,0,1-4,4H21.16Z"}),n.a.createElement("path",{d:"M8 10H24V12H8zM8 16H18V18H8z"}),e.children)})),O=n.a.forwardRef((function(e,t){return n.a.createElement(E,p({width:16,height:16,viewBox:"0 0 32 32",ref:t},e),n.a.createElement("path",{d:"M26 30H24V27a5.0059 5.0059 0 00-5-5H13a5.0059 5.0059 0 00-5 5v3H6V27a7.0082 7.0082 0 017-7h6a7.0082 7.0082 0 017 7zM5 6A1 1 0 004 7v9H6V7A1 1 0 005 6z"}),n.a.createElement("path",{d:"M4,2V4H9v7a7,7,0,0,0,14,0V4h5V2Zm7,2H21V7H11Zm5,12a5,5,0,0,1-5-5V9H21v2A5,5,0,0,1,16,16Z"}),e.children)})),N=n.a.forwardRef((function(e,t){return n.a.createElement(E,p({width:16,height:16,viewBox:"0 0 32 32",ref:t},e),n.a.createElement("path",{d:"M8 8H10V12H8zM8 14H10V18H8zM14 8H16V12H14zM14 14H16V18H14zM8 20H10V24H8zM14 20H16V24H14z"}),n.a.createElement("path",{d:"M30,14a2,2,0,0,0-2-2H22V4a2,2,0,0,0-2-2H4A2,2,0,0,0,2,4V30H30ZM4,4H20V28H4ZM22,28V14h6V28Z"}),e.children)})),H=n.a.forwardRef((function(e,t){return n.a.createElement(E,p({width:16,height:16,viewBox:"0 0 32 32",ref:t},e),n.a.createElement("path",{d:"M16,24a8,8,0,0,0,6.85-3.89l-1.71-1a6,6,0,0,1-10.28,0l-1.71,1A8,8,0,0,0,16,24Z"}),n.a.createElement("path",{d:"M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,2a12,12,0,0,1,10.89,7H25a1,1,0,0,0-1-1H8a1,1,0,0,0-1,1H5.11A12,12,0,0,1,16,4Zm0,24A12,12,0,0,1,4,16a11.86,11.86,0,0,1,.4-3H7v2a2,2,0,0,0,2,2h3.31a2,2,0,0,0,2-1.67L14.83,12h2.34l.55,3.33a2,2,0,0,0,2,1.67H23a2,2,0,0,0,2-2V13h2.6a11.86,11.86,0,0,1,.4,3A12,12,0,0,1,16,28Z"}),e.children)})),V=n.a.forwardRef((function(e,t){return n.a.createElement(E,p({width:16,height:16,viewBox:"0 0 32 32",ref:t},e),n.a.createElement("path",{d:"M28,6V26H4V6H28m0-2H4A2,2,0,0,0,2,6V26a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V6a2,2,0,0,0-2-2Z"}),n.a.createElement("path",{d:"M6 10H13V12H6zM6 14H10V16H6zM23 18H17a3 3 0 00-3 3v2h2V21a1 1 0 011-1h6a1 1 0 011 1v2h2V21A3 3 0 0023 18zM20 17a4 4 0 10-4-4A4 4 0 0020 17zm0-6a2 2 0 11-2 2A2 2 0 0120 11z"}),e.children)})),j=n.a.forwardRef((function(e,t){return n.a.createElement(E,p({width:16,height:16,viewBox:"0 0 32 32",ref:t},e),n.a.createElement("path",{d:"M16,10a3,3,0,1,1-3,3,3,3,0,0,1,3-3m0-2a5,5,0,1,0,5,5A5,5,0,0,0,16,8Z"}),n.a.createElement("path",{d:"M16,4a8.88,8.88,0,0,1,9,8.71,8.47,8.47,0,0,1-1.79,5.21l0,0,0,0L16,28.46,8.85,18l0,0,0,0A8.47,8.47,0,0,1,7,12.71,8.88,8.88,0,0,1,16,4m0-2A10.86,10.86,0,0,0,5,12.71a10.53,10.53,0,0,0,2.2,6.43L16,32l8.8-12.86A10.53,10.53,0,0,0,27,12.71,10.86,10.86,0,0,0,16,2Z"}),e.children)})),L=n.a.forwardRef((function(e,t){return n.a.createElement(E,p({width:16,height:16,viewBox:"0 0 32 32",ref:t},e),n.a.createElement("path",{fillRule:"evenodd",d:"M16,2a14,14,0,0,0-4.43,27.28c.7.13,1-.3,1-.67s0-1.21,0-2.38c-3.89.84-4.71-1.88-4.71-1.88A3.71,3.71,0,0,0,6.24,22.3c-1.27-.86.1-.85.1-.85A2.94,2.94,0,0,1,8.48,22.9a3,3,0,0,0,4.08,1.16,2.93,2.93,0,0,1,.88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4,5.4,0,0,1,1.44-3.76,5,5,0,0,1,.14-3.7s1.17-.38,3.85,1.43a13.3,13.3,0,0,1,7,0c2.67-1.81,3.84-1.43,3.84-1.43a5,5,0,0,1,.14,3.7,5.4,5.4,0,0,1,1.44,3.76c0,5.38-3.27,6.56-6.39,6.91a3.33,3.33,0,0,1,.95,2.59c0,1.87,0,3.38,0,3.84s.25.81,1,.67A14,14,0,0,0,16,2Z"}),e.children)})),A=n.a.forwardRef((function(e,t){return n.a.createElement(E,p({width:16,height:16,viewBox:"0 0 32 32",ref:t},e),n.a.createElement("path",{d:"M26.21,4H5.79A1.78,1.78,0,0,0,4,5.73V26.2a1.77,1.77,0,0,0,1.79,1.73H26.21A1.77,1.77,0,0,0,28,26.2V5.73A1.78,1.78,0,0,0,26.21,4ZM11.11,24.41H7.59V13h3.52Zm-1.72-13A2.07,2.07,0,0,1,7.32,9.39,2,2,0,0,1,9.39,7.32a2.07,2.07,0,0,1,0,4.13ZM24.48,24.34H21V18.76c0-1.33,0-3.06-1.86-3.06S17,17.16,17,18.63v5.65H13.44V13h3.32V14.5h.07a3.72,3.72,0,0,1,3.39-1.86c3.59,0,4.26,2.4,4.26,5.45Z"}),e.children)})),M=a("TSYQ"),C=a.n(M),I=(a("84bF"),a("cIY8"),function(e){var t=e.className,a=e.children,r=e.title,i=e.caption,l=e.small,o=void 0!==l&&l,c=C()("re--card",t),s=C()("re--card-title--heading-clip",{"re--card-title--productive-heading":r&&i,"re--card-title--heading":r&&!i}),d=C()("re--card-title--heading-clip",{"re--card-title--productive-heading-small":r}),f=C()({"re--card-title--caption":i&&!o,"re--card-title--caption-small":i&&o});return n.a.createElement("div",{className:c},n.a.createElement("div",{className:"re--card-title"},i&&!o&&n.a.createElement("p",{className:f},i),n.a.createElement("h2",{className:o?d:s},r),i&&o&&n.a.createElement("p",{className:f},i)),n.a.createElement("div",{className:"re--card-content"},a))});I.defaultProps={small:!1};var P=I,T=(a("6Hpx"),a("f3/d"),a("11Cr"),function(e){var t=e.className,a=e.name,r=e.grade,i=e.major,l=e.minor,o=void 0===l?"":l,c=e.startTime,s=e.endTime,d=void 0===s?"在读":s,f=e.desc,u=void 0===f?"":f,m=C()("re--educational-info",t);return n.a.createElement("div",{className:m},n.a.createElement("h3",{className:"re--educational-info--name"},a),n.a.createElement("p",{className:"re--educational-info--info"},r,n.a.createElement("span",{className:"re--educational-info--major"},"主修：",i,o&&"；辅修："+o),n.a.createElement("span",{className:"re--educational-info--time"},c,d&&" – "+d)),u&&n.a.createElement("p",{className:"re--educational-info--desc"},u))});T.defaultProps={minor:"",endTime:"在读",desc:""};var z=T,R=(a("0Owq"),function(e){var t=e.className,a=e.rate,r=void 0===a?0:a,i=e.max,l=void 0===i?5:i,o=function(e){for(var t=[],a=0;a<e;a++)t.push(a);return t},c=o(r),s=o(l-r),d=C()("re--rate",t);return n.a.createElement("div",{className:d},c.length&&c.map((function(e){return n.a.createElement(w,{key:"rate-"+e})})),s.length&&s.map((function(e){return n.a.createElement(S,{key:"un-rate-"+e})})))});R.defaultProps={rate:0,max:5};var k=R,G=(a("0Gde"),function(e){var t,a=e.className,r=e.title,i=e.rate,l=void 0===i?1:i,o=e.max,c=void 0===o?5:o,s=e.desc,d=void 0===s||s,f=(t=l)>2?"熟悉":t>4?"熟练":"了解",u=C()("re--experience-rate",a);return n.a.createElement("div",{className:u},n.a.createElement("p",{className:"re--experience-rate--title"},r,":"),n.a.createElement("div",{className:"re--experience-rate--info"},n.a.createElement(k,{rate:l,max:c}),d&&n.a.createElement("span",{className:"re--experience-rate--desc"},"(",f,")")))});G.defaultProps={rate:1,max:5,desc:!0};var B=G,W=a("fJxy"),q=(a("goLZ"),function(){var e=W.data,t=(new Date).getFullYear(),a=e.site.siteMetadata.author;return n.a.createElement("footer",{className:"re--footer"},"© ",t," ",a,", Built with"," ",n.a.createElement("a",{href:"https://www.carbondesignsystem.com/",target:"_blank",rel:"noopener noreferrer"},"Carbon Design System")," ","and"," ",n.a.createElement("a",{href:"https://www.gatsbyjs.org",target:"_blank",rel:"noopener noreferrer"},"Gatsby"),", hosted on"," ",n.a.createElement("a",{href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"},"GitHub Pages"),".")}),D=function(e){var t=e.className,a=e.children,r=e.condensed,i=void 0!==r&&r;return n.a.createElement("div",{className:C()("bx--grid",{"bx--grid--condensed":i},t)},a)};D.defaultProps={condensed:!1};var Z=D,J=function(e){var t=e.className,a=e.children,r=e.condensed,i=void 0!==r&&r,l=e.noGutter,o=void 0!==l&&l,c=e.noGutterLeft,s=void 0!==c&&c,d=e.noGutterRight,f=void 0!==d&&d;return n.a.createElement("div",{className:C()("bx--row",{"bx--row--condensed":i,"bx--no-gutter":o,"bx--no-gutter--left":s,"bx--no-gutter--right":f},t)},a)};J.defaultProps={condensed:!1,noGutter:!1,noGutterLeft:!1,noGutterRight:!1};var Y=J,U=function(e){var t,a,r=e.className,i=e.children,l=e.offset,o=e.column,c=e.noGutter,s=void 0!==c&&c,d=e.noGutterLeft,f=void 0!==d&&d,u=e.noGutterRight,m={"bx--no-gutter":s},p={"bx--no-gutter--left":f},h={"bx--no-gutter--right":void 0!==u&&u},g=l&&((t={})["bx--offset-sm-"+l.sm]=l.sm,t["bx--offset-md-"+l.md]=l.md,t["bx--offset-lg-"+l.lg]=l.lg,t["bx--offset-xl-"+l.xl]=l.xl,t["bx--offset-max-"+l.max]=l.max,t),b=o?((a={})["bx--col-sm-"+o.sm]=o.sm,a["bx--col-md-"+o.md]=o.md,a["bx--col-lg-"+o.lg]=o.lg,a["bx--col-xl-"+o.xl]=o.xl,a["bx--col-lg-"+o.max]=o.max,a):{"bx--col":!0},v=C()(Object.assign({},b,{},g,{},m,{},p,{},h),r);return n.a.createElement("div",{className:v},i)};U.defaultProps={noGutter:!1,noGutterLeft:!1,noGutterRight:!1};var F=U,K=(a("ezAz"),a("9eSz"),a("c2iA"),function(e){var t=e.className,a=e.children,r=e.title,i=e.content,l=e.href,o=void 0===l?"":l,c=e.isExternal,s=void 0!==c&&c,d=C()("re--info-bar",t);return n.a.createElement("div",{className:d},a,n.a.createElement("p",{className:"re--info-bar--title"},r,": "),i&&!o&&n.a.createElement("span",{className:"re--info-bar--content"},i),i&&o&&n.a.createElement("a",{className:"re--info-bar--content",href:o,target:s?"_blank":"_self",rel:s?"noopener noreferrer":""},i))});K.defaultProps={href:"",isExternal:!1};var X=K,Q=(a("qCDi"),function(e){var t=e.className,a=e.name,r=e.desc,i=void 0===r?"":r,l=C()("re--work-info",t);return n.a.createElement("div",{className:l},n.a.createElement("h4",{className:"re--work-info--name"},a),i&&n.a.createElement("p",{className:"re--work-info--desc"},i))});Q.defaultProps={desc:""};var _=Q,$=(a("Ct5j"),function(e){var t=e.className,a=e.title,r=e.desc,i=void 0===r?"":r,l=e.startTime,o=void 0===l?"":l,c=e.endTime,s=void 0===c?"至今":c,d=e.workInfo,f=void 0===d?[]:d,u=C()("re--job-info",t);return n.a.createElement("div",{className:u},n.a.createElement("div",{className:"re--job-info--jobs"},n.a.createElement("h3",{className:"re--job-info--job-title"},a),n.a.createElement("p",{className:"re--job-info--job-desc"},i,o&&n.a.createElement("span",{className:"re--job-info--job-time"},o," – ",s))),f&&n.a.createElement("div",{className:"re--job-info--works"},f.map((function(e,t){return n.a.createElement(_,{className:"re--job-info--work-info",key:"work-info-"+t,name:e.name,desc:e.desc})}))))});$.defaultProps={desc:"",startTime:"",endTime:"至今",workInfo:[]};var ee=$,te=a("Ac47"),ae=(a("SMGj"),function(e){var t=e.className,a=e.children,r=e.name,i=e.href,l=void 0===i?"":i,o=e.desc,c=void 0===o?"":o,s=C()("re--project-info",t);return n.a.createElement("div",{className:s},l&&n.a.createElement("a",{className:"re--project-info--name",href:l,target:"_blank",rel:"noopener noreferrer"},r),!l&&n.a.createElement("h3",{className:"re--project-info--name"},r),(c||a)&&n.a.createElement("p",{className:"re--project-info--desc"},c,a))});ae.defaultProps={href:"",desc:""};var re=ae,ne=a("PIHY");a.d(t,"default",(function(){return ie}));var ie=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){return n.a.createElement(te.a,null,n.a.createElement(ne.a,{title:"Home"}),n.a.createElement(Z,null,n.a.createElement(Y,null,n.a.createElement(F,{column:{lg:5}},n.a.createElement(P,{title:"个人信息"},n.a.createElement(X,{title:"姓名",content:"栗健智"},n.a.createElement(V,null)),n.a.createElement(X,{title:"学历",content:"大学专科"},n.a.createElement(O,null)),n.a.createElement(X,{title:"头衔",content:"初级前端工程师"},n.a.createElement(H,null)),n.a.createElement(X,{title:"工作经验",content:"一年半"},n.a.createElement(N,null))),n.a.createElement(P,{title:"联系信息"},n.a.createElement(X,{title:"地址",content:"上海市浦东新区"},n.a.createElement(j,null)),n.a.createElement(X,{title:"邮箱",content:"me@550.moe",href:"mailto:me@550.moe"},n.a.createElement(y,null)),n.a.createElement(X,{title:"微信",content:"@Garfield550"},n.a.createElement(x,null)),n.a.createElement(X,{title:"GitHub",content:"@Garfield550",href:"https://github.com/Garfield550",isExternal:!0},n.a.createElement(L,null)),n.a.createElement(X,{title:"Linkedin",content:"Garfield Lee",href:"https://www.linkedin.com/in/garfieldlee/",isExternal:!0},n.a.createElement(A,null))),n.a.createElement(P,{title:"技术经验"},n.a.createElement(B,{title:"HTML",rate:3}),n.a.createElement(B,{title:"CSS & SCSS",rate:3}),n.a.createElement(B,{title:"JavaScript",rate:3}),n.a.createElement(B,{title:"TypeScript",rate:2}),n.a.createElement(B,{title:"C#",rate:1}),n.a.createElement(B,{title:"React.js",rate:3}),n.a.createElement(B,{title:"Gatsby.js",rate:2}),n.a.createElement(B,{title:"Taro",rate:3}),n.a.createElement(B,{title:"微信小程序",rate:3}),n.a.createElement(B,{title:"Git",rate:3}),n.a.createElement(B,{title:"Webpack",rate:2}))),n.a.createElement(F,{column:{lg:11}},n.a.createElement(P,{title:"工作经历"},[{title:"上海哈益信息科技有限公司",desc:"前端开发工程师",startTime:"2018 年 11 月",workInfo:[{name:"春晖博爱基金会官网(二期)",desc:"春晖博爱(全称春晖博爱儿童救助公益基金会)的官网。由于一期存在手机展示效果差，页面结构混乱和无用资源加载多等问题，对网站进行了重构。使用了 Bootstrap 4 + jQuery 3 作为基础框架，抛弃了对 IE 全版本的兼容，布局大量使用了 flex。由于 OctoberCMS 存在缺陷，使用 Webpack + SCSS + PostCSS + TypeScript 进行样式和脚本的开发，解决了脚本与样式的兼容问题和代码压缩。引入了 PDF.js，使手机浏览器可以在线查看 PDF 文件。"},{name:"佳得乐俱乐部微信小程序",desc:"百事旗下品牌佳得乐运动饮料的会员微信小程序，核心功能包含个人中心，运动打卡，积分商城，积分抽奖，推广新闻等。抛弃了 WePY + Vue 语法，采用了 Taro + React 语法，使用 TypeScript 开发，样式预处理语言从 LESS 切换到 SCSS，使用 MobX 做状态管理，大部分的 API 调用使用了 async-await。"},{name:"哈公益行动加(+)微信小程序",desc:"行动+是公司开发的自有小程序。在工作中负责打卡模块的开发，初次接触微信小程序开发，使用了 WePY 和 LESS，并对已有的答题和捐步两个模块进行了 async-await 优化。"},{name:"普陀疾控中心艾滋检查活动结果查询页",desc:"艾滋检查活动的手机版查询页，使用了 React.js，Axios 和 SCSS。"}]},{title:"福州市嘀哩科技有限公司",desc:"开发实习生",startTime:"2017 年 8 月",endTime:"2018 年 2 月",workInfo:[{name:"图片反向代理",desc:"使用 .NET Core 和 C# 开发，运行良好。"}]}].map((function(e,t){return n.a.createElement(ee,{key:"job-"+t,title:e.title,desc:e.desc,startTime:e.startTime,endTime:e.endTime,workInfo:e.workInfo})}))),n.a.createElement(P,{title:"参与开源"},n.a.createElement(re,{name:"DefinitelyTyped/DefinitelyTyped",href:"https://github.com/DefinitelyTyped/DefinitelyTyped/commits?author=Garfield550"},"在使用 Carbon-Components-React 时发现部分组件缺少类型定义，便向 DefinitelyTyped 提交了修补代码。"),n.a.createElement(re,{name:"NervJS/Taro",href:"https://github.com/NervJS/taro/commits?author=Garfield550"},"Taro 是由京东凹凸实验室开发的多端统一开发框架。自使用 Taro 开发以来，多次为 Taro 项目修复问题，完善文档，并积极帮助他人解决问题。"),n.a.createElement(re,{name:"NervJS/Taro UI",href:"https://github.com/NervJS/taro-ui/commits?author=Garfield550"},"Taro UI 是一款基于 Taro 框架开发的多端 UI 组件库。由于在 Taro 社区积极贡献，被邀请加入 Taro UI 项目进行日常维护和功能更新。"),n.a.createElement(re,{name:"MvvmCross/MvvmCross",href:"https://github.com/MvvmCross/MvvmCross/commits?author=Garfield550"},"MvvmCross 是一款使用 C# 编写的跨平台 MVVM 框架，几乎横跨所有 .Net 开发平台。2017 年接触该框架时，由于其文档站显示效果不佳，移动设备布局混乱，便主动为他们重构了",n.a.createElement("a",{href:"https://github.com/MvvmCross/MvvmCross/pull/1852",target:"_blank",rel:"noopener noreferrer"},"首页和文档站"),"，后续又为他们构建了"," ",n.a.createElement("a",{href:"https://github.com/MvvmCross/MvvmCross/pull/2111",target:"_blank",rel:"noopener noreferrer"},"Hackfest 2017 活动宣传页"),"。"),n.a.createElement(re,{name:"AOSC-Dev/aosc-os-abbs",href:"https://github.com/AOSC-Dev/aosc-os-abbs/commits?author=Garfield550"},"AOSC OS 是由一群国内年轻 Linux 开发者创造的 GNU/Linux 发行版，主打开发者友好和旧设备兼容。我为他们维护过一段时间的软件包更新。"),n.a.createElement(re,{name:"WeCase/wecase.github.com",href:"https://github.com/WeCase/wecase.github.com"},"WeCase 是一款 Linux 下易用的微博客户端(2017 年已停止开发)。我为他们的官网贡献过代码。")),n.a.createElement(P,{title:"教育经历"},n.a.createElement(z,{name:"山东信息职业技术学院",grade:"全日制大学专科",major:"软件工程",minor:"Web 前端",startTime:"2015 年 8 月",endTime:"2018 年 7 月"})))),n.a.createElement(Y,null,n.a.createElement(F,null,n.a.createElement(q,null)))))},r}(n.a.Component)},ezAz:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/630fb/gatsby-astronaut.png","srcSet":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/5db04/gatsby-astronaut.png 75w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/6d161/gatsby-astronaut.png 150w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/630fb/gatsby-astronaut.png 300w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/62b1f/gatsby-astronaut.png 450w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/2a4de/gatsby-astronaut.png 600w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/ee604/gatsby-astronaut.png 800w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')},fJxy:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"author":"Garfield Lee"}}}}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-943dbd2a5e31bc732624.js.map