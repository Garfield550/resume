(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0Gde":function(e,t,a){},"0Owq":function(e,t,a){},"11Cr":function(e,t,a){},"3nLz":function(e,t,a){"use strict";a("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("YbXK"),a("eMsz"),a("zTTH"),a("3nLz");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n,i=r(a("PJYZ")),o=r(a("VbXa")),s=r(a("8OQS")),l=r(a("pVnL")),c=r(a("q1tI")),d=r(a("17x9")),f=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},u=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed;return p(t||a).src},p=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(u);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=f(e),a=m(t);return g[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,E=v&&window.IntersectionObserver,y=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),c.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function N(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function O(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var j=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},C=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+c+o+s+a+r+t+i+n+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},T=c.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,n=e.generateSources,i=e.spreadProps,o=e.ariaHidden,s=c.default.createElement(I,(0,l.default)({ref:t,src:a},i,{ariaHidden:o}));return r.length>1?c.default.createElement("picture",null,n(r),s):s})),I=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,o=e.onLoad,d=e.onError,f=e.loading,u=e.draggable,m=e.ariaHidden,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,l.default)({"aria-hidden":m,sizes:a,srcSet:r,src:n},p,{onLoad:o,onError:d,ref:t,loading:f,draggable:u,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));I.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var L=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&E&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.placeholderRef=t.placeholderRef||c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=f(e),a=m(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=f(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,u=void 0===d?{}:d,m=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,E=e.Tag,y=e.itemProp,w=e.loading,O=e.draggable,j=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,l.default)({opacity:j?1:0,transition:L?"opacity "+v+"ms":"none"},s),P="boolean"==typeof b?"lightgray":b,A={transitionDelay:v+"ms"},k=(0,l.default)((0,l.default)((0,l.default)({opacity:this.state.imgLoaded?0:1},L&&A),s),u),z={title:t,alt:this.state.isVisible?"":a,style:k,className:m,itemProp:y};if(g){var G=g,M=p(g);return c.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},c.default.createElement(E,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),P&&c.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:P,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&A)}),M.base64&&c.default.createElement(T,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:z,imageVariants:G,generateSources:N}),M.tracedSVG&&c.default.createElement(T,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:z,imageVariants:G,generateSources:x}),this.state.isVisible&&c.default.createElement("picture",null,S(G),c.default.createElement(I,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:O})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,l.default)((0,l.default)({alt:a,title:t,loading:w},M),{},{imageVariants:G}))}}))}if(h){var V=h,H=p(h),q=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:H.width,height:H.height},i);return"inherit"===i.display&&delete q.display,c.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(H.srcSet)},P&&c.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:P,width:H.width,opacity:this.state.imgLoaded?0:1,height:H.height},L&&A)}),H.base64&&c.default.createElement(T,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:z,imageVariants:V,generateSources:N}),H.tracedSVG&&c.default.createElement(T,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:z,imageVariants:V,generateSources:x}),this.state.isVisible&&c.default.createElement("picture",null,S(V),c.default.createElement(I,{alt:a,title:t,width:H.width,height:H.height,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:O})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,l.default)((0,l.default)({alt:a,title:t,loading:w},H),{},{imageVariants:V}))}}))}return null},t}(c.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),P=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});L.propTypes={resolutions:R,sizes:P,fixed:d.default.oneOfType([R,d.default.arrayOf(R)]),fluid:d.default.oneOfType([P,d.default.arrayOf(P)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var A=L;t.default=A},C8Qj:function(e,t,a){"use strict";a("t+fG")("small",(function(e){return function(){return e(this,"small","","")}}))},Ct5j:function(e,t,a){},O9pe:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));a("U6Bt"),a("AqHK"),a("sc67"),a("+ar0"),a("xtjI"),a("JHok"),a("OeI1"),a("4DPX"),a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("R48M");function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s={focusable:"false",preserveAspectRatio:"xMidYMid meet"};function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width,a=e.height,r=e.viewBox,n=void 0===r?"0 0 ".concat(t," ").concat(a):r,l=o(e,["width","height","viewBox"]),c=l.tabindex,d=o(l,["tabindex"]),f=i({},s,{},d,{width:t,height:a,viewBox:n});return f["aria-label"]||f["aria-labelledby"]||f.title?(f.role="img",null!=c&&(f.focusable="true",f.tabindex=c)):f["aria-hidden"]=!0,f}},QeBL:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return k}));var r=a("q1tI"),n=a.n(r),i=a("ZY4D"),o=a("TSYQ"),s=a.n(o),l=(a("C8Qj"),a("cIY8"),function(e){var t=e.className,a=e.children,r=e.title,i=e.caption,o=e.small,l=void 0!==o&&o,c=s()("re--card",t),d=s()("re--card-title--heading-clip",{"re--card-title--productive-heading":r&&i,"re--card-title--heading":r&&!i}),f=s()("re--card-title--heading-clip",{"re--card-title--productive-heading-small":r}),u=s()({"re--card-title--caption":i&&!l,"re--card-title--caption-small":i&&l});return n.a.createElement("div",{className:c},n.a.createElement("div",{className:"re--card-title"},i&&!l&&n.a.createElement("p",{className:u},i),n.a.createElement("h2",{className:l?f:d},r),i&&l&&n.a.createElement("p",{className:u},i)),n.a.createElement("div",{className:"re--card-content"},a))});l.defaultProps={small:!1};var c=l,d=(a("6Hpx"),a("pJf4"),a("11Cr"),function(e){var t=e.className,a=e.name,r=e.grade,i=e.major,o=e.minor,l=void 0===o?"":o,c=e.startTime,d=e.endTime,f=void 0===d?"在读":d,u=e.desc,m=void 0===u?"":u,p=s()("re--educational-info",t);return n.a.createElement("div",{className:p},n.a.createElement("h3",{className:"re--educational-info--name"},a),n.a.createElement("p",{className:"re--educational-info--info"},r,n.a.createElement("span",{className:"re--educational-info--major"},"主修：",i,l&&"；辅修："+l),n.a.createElement("span",{className:"re--educational-info--time"},c,f&&" – "+f)),m&&n.a.createElement("p",{className:"re--educational-info--desc"},m))});d.defaultProps={minor:"",endTime:"在读",desc:""};var f=d,u=(a("0Owq"),function(e){var t=e.className,a=e.rate,r=void 0===a?0:a,o=e.max,l=void 0===o?5:o,c=function(e){for(var t=[],a=0;a<e;a++)t.push(a);return t},d=c(r),f=c(l-r),u=s()("re--rate",t);return n.a.createElement("div",{className:u},d.length&&d.map((function(e){return n.a.createElement(i.k,{key:"rate-"+e})})),f.length&&f.map((function(e){return n.a.createElement(i.j,{key:"un-rate-"+e})})))});u.defaultProps={rate:0,max:5};var m=u,p=(a("0Gde"),function(e){var t,a=e.className,r=e.title,i=e.rate,o=void 0===i?1:i,l=e.max,c=void 0===l?5:l,d=e.desc,f=void 0===d||d,u=(t=o)>2?"熟悉":t>4?"熟练":"了解",p=s()("re--experience-rate",a);return n.a.createElement("div",{className:p},n.a.createElement("p",{className:"re--experience-rate--title"},r,":"),n.a.createElement("div",{className:"re--experience-rate--info"},n.a.createElement(m,{rate:o,max:c}),f&&n.a.createElement("span",{className:"re--experience-rate--desc"},"(",u,")")))});p.defaultProps={rate:1,max:5,desc:!0};var g=p,h=a("fJxy"),b=(a("goLZ"),function(){var e=h.data,t=(new Date).getFullYear(),a=e.site.siteMetadata.author;return n.a.createElement("footer",{className:"re--footer"},"© ",t," ",a,", Built with"," ",n.a.createElement("a",{href:"https://www.carbondesignsystem.com/",target:"_blank",rel:"noopener noreferrer"},"Carbon Design System")," ","and"," ",n.a.createElement("a",{href:"https://www.gatsbyjs.org",target:"_blank",rel:"noopener noreferrer"},"Gatsby"),", hosted on"," ",n.a.createElement("a",{href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"},"GitHub Pages"),".")}),v=function(e){var t=e.className,a=e.children,r=e.condensed,i=void 0!==r&&r;return n.a.createElement("div",{className:s()("bx--grid",{"bx--grid--condensed":i},t)},a)};v.defaultProps={condensed:!1};var E=v,y=function(e){var t=e.className,a=e.children,r=e.condensed,i=void 0!==r&&r,o=e.noGutter,l=void 0!==o&&o,c=e.noGutterLeft,d=void 0!==c&&c,f=e.noGutterRight,u=void 0!==f&&f;return n.a.createElement("div",{className:s()("bx--row",{"bx--row--condensed":i,"bx--no-gutter":l,"bx--no-gutter--left":d,"bx--no-gutter--right":u},t)},a)};y.defaultProps={condensed:!1,noGutter:!1,noGutterLeft:!1,noGutterRight:!1};var S=y,w=(a("E5k/"),function(e){var t,a,r=e.className,i=e.children,o=e.offset,l=e.column,c=e.noGutter,d=void 0!==c&&c,f=e.noGutterLeft,u=void 0!==f&&f,m=e.noGutterRight,p={"bx--no-gutter":d},g={"bx--no-gutter--left":u},h={"bx--no-gutter--right":void 0!==m&&m},b=o&&((t={})["bx--offset-sm-"+o.sm]=o.sm,t["bx--offset-md-"+o.md]=o.md,t["bx--offset-lg-"+o.lg]=o.lg,t["bx--offset-xl-"+o.xl]=o.xl,t["bx--offset-max-"+o.max]=o.max,t),v=l?((a={})["bx--col-sm-"+l.sm]=l.sm,a["bx--col-md-"+l.md]=l.md,a["bx--col-lg-"+l.lg]=l.lg,a["bx--col-xl-"+l.xl]=l.xl,a["bx--col-lg-"+l.max]=l.max,a):{"bx--col":!0},E=s()(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},v),b),p),g),h),r);return n.a.createElement("div",{className:E},i)});w.defaultProps={noGutter:!1,noGutterLeft:!1,noGutterRight:!1};var x=w,N=(a("ezAz"),a("9eSz"),a("c2iA"),function(e){var t=e.className,a=e.children,r=e.title,i=e.content,o=e.href,l=void 0===o?"":o,c=e.isExternal,d=void 0!==c&&c,f=s()("re--info-bar",t);return n.a.createElement("div",{className:f},a,n.a.createElement("p",{className:"re--info-bar--title"},r,": "),i&&!l&&n.a.createElement("span",{className:"re--info-bar--content"},i),i&&l&&n.a.createElement("a",{className:"re--info-bar--content",href:l,target:d?"_blank":"_self",rel:d?"noopener noreferrer":""},i))});N.defaultProps={href:"",isExternal:!1};var O=N,j=(a("qCDi"),function(e){var t=e.className,a=e.name,r=e.desc,i=void 0===r?"":r,o=s()("re--work-info",t);return n.a.createElement("div",{className:o},n.a.createElement("h4",{className:"re--work-info--name"},a),i&&n.a.createElement("p",{className:"re--work-info--desc"},i))});j.defaultProps={desc:""};var C=j,T=(a("Ct5j"),function(e){var t=e.className,a=e.title,r=e.desc,i=void 0===r?"":r,o=e.startTime,l=void 0===o?"":o,c=e.endTime,d=void 0===c?"至今":c,f=e.workInfo,u=void 0===f?[]:f,m=s()("re--job-info",t);return n.a.createElement("div",{className:m},n.a.createElement("div",{className:"re--job-info--jobs"},n.a.createElement("h3",{className:"re--job-info--job-title"},a),n.a.createElement("p",{className:"re--job-info--job-desc"},i,l&&n.a.createElement("span",{className:"re--job-info--job-time"},l," – ",d))),u&&n.a.createElement("div",{className:"re--job-info--works"},u.map((function(e,t){return n.a.createElement(C,{className:"re--job-info--work-info",key:"work-info-"+t,name:e.name,desc:e.desc})}))))});T.defaultProps={desc:"",startTime:"",endTime:"至今",workInfo:[]};var I=T,L=a("Ac47"),R=(a("SMGj"),function(e){var t=e.className,a=e.children,r=e.name,i=e.href,o=void 0===i?"":i,l=e.desc,c=void 0===l?"":l,d=s()("re--project-info",t);return n.a.createElement("div",{className:d},o&&n.a.createElement("a",{className:"re--project-info--name",href:o,target:"_blank",rel:"noopener noreferrer"},r),!o&&n.a.createElement("h3",{className:"re--project-info--name"},r),(c||a)&&n.a.createElement("p",{className:"re--project-info--desc"},c,a))});R.defaultProps={href:"",desc:""};var P=R,A=a("PIHY");var k=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){return n.a.createElement(L.a,null,n.a.createElement(A.a,{title:"Home"}),n.a.createElement(E,null,n.a.createElement(S,null,n.a.createElement(x,{column:{lg:5}},n.a.createElement(c,{title:"个人信息"},n.a.createElement(O,{title:"姓名",content:"栗健智"},n.a.createElement(i.f,null)),n.a.createElement(O,{title:"学历",content:"大学专科"},n.a.createElement(i.b,null)),n.a.createElement(O,{title:"头衔",content:"初级前端工程师"},n.a.createElement(i.e,null)),n.a.createElement(O,{title:"工作经验",content:"一年半"},n.a.createElement(i.d,null))),n.a.createElement(c,{title:"联系信息"},n.a.createElement(O,{title:"地址",content:"上海市浦东新区"},n.a.createElement(i.g,null)),n.a.createElement(O,{title:"邮箱",content:"me@550.moe",href:"mailto:me@550.moe"},n.a.createElement(i.c,null)),n.a.createElement(O,{title:"微信",content:"@Garfield550"},n.a.createElement(i.a,null)),n.a.createElement(O,{title:"GitHub",content:"@Garfield550",href:"https://github.com/Garfield550",isExternal:!0},n.a.createElement(i.h,null)),n.a.createElement(O,{title:"Linkedin",content:"Garfield Lee",href:"https://www.linkedin.com/in/garfieldlee/",isExternal:!0},n.a.createElement(i.i,null))),n.a.createElement(c,{title:"技术经验"},n.a.createElement(g,{title:"HTML",rate:3}),n.a.createElement(g,{title:"CSS & SCSS",rate:3}),n.a.createElement(g,{title:"JavaScript",rate:3}),n.a.createElement(g,{title:"TypeScript",rate:2}),n.a.createElement(g,{title:"C#",rate:1}),n.a.createElement(g,{title:"React.js",rate:3}),n.a.createElement(g,{title:"Gatsby.js",rate:2}),n.a.createElement(g,{title:"Taro",rate:3}),n.a.createElement(g,{title:"微信小程序",rate:3}),n.a.createElement(g,{title:"Git",rate:3}),n.a.createElement(g,{title:"Webpack",rate:2}))),n.a.createElement(x,{column:{lg:11}},n.a.createElement(c,{title:"工作经历"},[{title:"上海哈益信息科技有限公司",desc:"前端开发工程师",startTime:"2018 年 11 月",workInfo:[{name:"春晖博爱基金会官网(二期)",desc:"春晖博爱(全称春晖博爱儿童救助公益基金会)的官网。由于一期存在手机展示效果差，页面结构混乱和无用资源加载多等问题，对网站进行了重构。使用了 Bootstrap 4 + jQuery 3 作为基础框架，抛弃了对 IE 全版本的兼容，布局大量使用了 flex。由于 OctoberCMS 存在缺陷，使用 Webpack + SCSS + PostCSS + TypeScript 进行样式和脚本的开发，解决了脚本与样式的兼容问题和代码压缩。引入了 PDF.js，使手机浏览器可以在线查看 PDF 文件。"},{name:"佳得乐俱乐部微信小程序",desc:"百事旗下品牌佳得乐运动饮料的会员微信小程序，核心功能包含个人中心，运动打卡，积分商城，积分抽奖，推广新闻等。抛弃了 WePY + Vue 语法，采用了 Taro + React 语法，使用 TypeScript 开发，样式预处理语言从 LESS 切换到 SCSS，使用 MobX 做状态管理，大部分的 API 调用使用了 async-await。"},{name:"哈公益行动加(+)微信小程序",desc:"行动+是公司开发的自有小程序。在工作中负责打卡模块的开发，初次接触微信小程序开发，使用了 WePY 和 LESS，并对已有的答题和捐步两个模块进行了 async-await 优化。"},{name:"普陀疾控中心艾滋检查活动结果查询页",desc:"艾滋检查活动的手机版查询页，使用了 React.js，Axios 和 SCSS。"}]},{title:"福州市嘀哩科技有限公司",desc:"开发实习生",startTime:"2017 年 8 月",endTime:"2018 年 2 月",workInfo:[{name:"图片反向代理",desc:"使用 .NET Core 和 C# 开发，运行良好。"}]}].map((function(e,t){return n.a.createElement(I,{key:"job-"+t,title:e.title,desc:e.desc,startTime:e.startTime,endTime:e.endTime,workInfo:e.workInfo})}))),n.a.createElement(c,{title:"参与开源"},n.a.createElement(P,{name:"DefinitelyTyped/DefinitelyTyped",href:"https://github.com/DefinitelyTyped/DefinitelyTyped/commits?author=Garfield550"},"在使用 Carbon-Components-React 时发现部分组件缺少类型定义，便向 DefinitelyTyped 提交了修补代码。"),n.a.createElement(P,{name:"NervJS/Taro",href:"https://github.com/NervJS/taro/commits?author=Garfield550"},"Taro 是由京东凹凸实验室开发的多端统一开发框架。自使用 Taro 开发以来，多次为 Taro 项目修复问题，完善文档，并积极帮助他人解决问题。"),n.a.createElement(P,{name:"NervJS/Taro UI",href:"https://github.com/NervJS/taro-ui/commits?author=Garfield550"},"Taro UI 是一款基于 Taro 框架开发的多端 UI 组件库。由于在 Taro 社区积极贡献，被邀请加入 Taro UI 项目进行日常维护和功能更新。"),n.a.createElement(P,{name:"MvvmCross/MvvmCross",href:"https://github.com/MvvmCross/MvvmCross/commits?author=Garfield550"},"MvvmCross 是一款使用 C# 编写的跨平台 MVVM 框架，几乎横跨所有 .Net 开发平台。2017 年接触该框架时，由于其文档站显示效果不佳，移动设备布局混乱，便主动为他们重构了",n.a.createElement("a",{href:"https://github.com/MvvmCross/MvvmCross/pull/1852",target:"_blank",rel:"noopener noreferrer"},"首页和文档站"),"，后续又为他们构建了"," ",n.a.createElement("a",{href:"https://github.com/MvvmCross/MvvmCross/pull/2111",target:"_blank",rel:"noopener noreferrer"},"Hackfest 2017 活动宣传页"),"。"),n.a.createElement(P,{name:"AOSC-Dev/aosc-os-abbs",href:"https://github.com/AOSC-Dev/aosc-os-abbs/commits?author=Garfield550"},"AOSC OS 是由一群国内年轻 Linux 开发者创造的 GNU/Linux 发行版，主打开发者友好和旧设备兼容。我为他们维护过一段时间的软件包更新。"),n.a.createElement(P,{name:"WeCase/wecase.github.com",href:"https://github.com/WeCase/wecase.github.com"},"WeCase 是一款 Linux 下易用的微博客户端(2017 年已停止开发)。我为他们的官网贡献过代码。")),n.a.createElement(c,{title:"教育经历"},n.a.createElement(f,{name:"山东信息职业技术学院",grade:"全日制大学专科",major:"软件工程",minor:"Web 前端",startTime:"2015 年 8 月",endTime:"2018 年 7 月"})))),n.a.createElement(S,null,n.a.createElement(x,null,n.a.createElement(b,null)))))},r}(n.a.Component)},SMGj:function(e,t,a){},c2iA:function(e,t,a){},cIY8:function(e,t,a){},ezAz:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/630fb/gatsby-astronaut.png","srcSet":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/5db04/gatsby-astronaut.png 75w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/6d161/gatsby-astronaut.png 150w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/630fb/gatsby-astronaut.png 300w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/62b1f/gatsby-astronaut.png 450w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/2a4de/gatsby-astronaut.png 600w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/ee604/gatsby-astronaut.png 800w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')},fJxy:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"author":"Garfield Lee"}}}}')},goLZ:function(e,t,a){},qCDi:function(e,t,a){},"t+fG":function(e,t,a){var r=a("P8UN"),n=a("96qb"),i=a("ap2Z"),o=/"/g,s=function(e,t,a,r){var n=String(i(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},zTTH:function(e,t,a){"use strict";var r=a("P8UN"),n=a("Wadk")(6),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),r(r.P+r.F*o,"Array",{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),a("Dq1/")(i)}}]);
//# sourceMappingURL=component---src-pages-index-tsx-21023b76a3cd26fc87e0.js.map