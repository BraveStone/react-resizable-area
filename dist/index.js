!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.ReactResizeableArea=t(require("react")):e.ReactResizeableArea=t(e.React)}("undefined"!=typeof self?self:this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}([function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function i(e){if(p===setTimeout)return setTimeout(e,0);if((p===n||!p)&&setTimeout)return p=setTimeout,setTimeout(e,0);try{return p(e,0)}catch(t){try{return p.call(null,e,0)}catch(t){return p.call(this,e,0)}}}function o(e){if(l===clearTimeout)return clearTimeout(e);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}function a(){m&&h&&(m=!1,h.length?d=h.concat(d):y=-1,d.length&&u())}function u(){if(!m){var e=i(a);m=!0;for(var t=d.length;t;){for(h=d,d=[];++y<t;)h&&h[y].run();y=-1,t=d.length}h=null,m=!1,o(e)}}function c(e,t){this.fun=e,this.array=t}function s(){}var p,l,f=e.exports={};!function(){try{p="function"==typeof setTimeout?setTimeout:n}catch(e){p=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(e){l=r}}();var h,d=[],m=!1,y=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];d.push(new c(e,t)),1!==d.length||m||i(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=s,f.addListener=s,f.once=s,f.off=s,f.removeListener=s,f.removeAllListeners=s,f.emit=s,f.prependListener=s,f.prependOnceListener=s,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},function(e,t,n){"use strict";function r(e){return function(){return e}}var i=function(){};i.thatReturns=r,i.thatReturnsFalse=r(!1),i.thatReturnsTrue=r(!0),i.thatReturnsNull=r(null),i.thatReturnsThis=function(){return this},i.thatReturnsArgument=function(e){return e},e.exports=i},function(e,t,n){"use strict";(function(t){function n(e,t,n,i,o,a,u,c){if(r(t),!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var p=[n,i,o,a,u,c],l=0;s=new Error(t.replace(/%s/g,function(){return p[l++]})),s.name="Invariant Violation"}throw s.framesToPop=1,s}}var r=function(e){};"production"!==t.env.NODE_ENV&&(r=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")}),e.exports=n}).call(t,n(0))},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";(function(t){var r=n(1),i=r;if("production"!==t.env.NODE_ENV){var o=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=0,o="Warning: "+e.replace(/%s/g,function(){return n[i++]});"undefined"!=typeof console&&console.error(o);try{throw new Error(o)}catch(e){}};i=function(e,t){if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==t.indexOf("Failed Composite propType: ")&&!e){for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];o.apply(void 0,[t].concat(r))}}}e.exports=i}).call(t,n(0))},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.ResizableArea=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(6),p=r(s),l=n(7),f=r(l),h=t.ResizableArea=function(e){function t(){var e,n,r,a;i(this,t);for(var c=arguments.length,s=Array(c),p=0;p<c;p++)s[p]=arguments[p];return n=r=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.state={width:u({},r.props.initWidth,{tempPx:0}),height:u({},r.props.initHeight,{tempPx:0})},r.mapSizeOptionToCSS=function(e){var t=e.px,n=e.tempPx,r=e.percent;return"calc("+((t||0)+(n||0))+"px "+(r<0?"-":"+")+" "+Math.abs(r||0)+"%)"},r.calcCurrentSize=function(e){var t=e.width,n=e.height,i=r.props,o=i.initWidth,a=i.initHeight,u=i.maximumWidth,c=i.minimumWidth,s=i.maximumHeight,p=i.minimumHeight,l=i.usePercentageResize,f=r,h=f.parentWidth,d=f.parentHeight,m=l.width?{px:o.px,percent:(u.px-o.px)/h*100+u.percent}:{px:(u.percent-o.percent)/100*h+u.px,percent:o.px},y=l.width?{px:o.px,percent:(c.px-o.px)/h*100+c.percent}:{px:(c.percent-o.percent)/100*h+c.px,percent:o.px},v=l.height?{px:o.px,percent:(s.px-a.px)/d*100+s.percent}:{px:(s.percent-a.percent)/100*d+s.px,percent:o.px},g=l.height?{px:o.px,percent:(p.px-a.px)/d*100+p.percent}:{px:(p.percent-a.percent)/100*d+p.px,percent:o.px},b=h*m.percent+m.px,x=h*y.percent+y.px,w=h*t.percent+t.px+t.tempPx,O=d*v.percent+v.px,T=d*g.percent+g.px,E=d*n.percent+n.px+n.tempPx,S={width:t,height:n};return w>b&&(S.width=m),w<x&&(S.width=y),E>O&&(S.height=n),E<T&&(S.height=g),S},r.handleDragStartFactory=function(e){return function(t){t.preventDefault();var n=r.props,i=n.disable,o=n.parentContainer;if(r.handler={width:!i.width&&e.width,height:!i.height&&e.height},r.handler.width||r.handler.height){r.startX=t.clientX,r.startY=t.clientY,document.addEventListener("mousemove",r.handleMouseMove),document.addEventListener("mouseup",r.handleMouseUp);var a=o.getBoundingClientRect(),u=a.width,c=a.height;r.parentWidth=u,r.parentHeight=c;var s=r.calcCurrentSize(r.state);r.curState=s,r.start=!0,requestAnimationFrame(r.tick)}}},r.handleMouseMove=function(e){e.preventDefault();var t=e.clientX-r.startX,n=e.clientY-r.startY;r.startX=e.clientX,r.startY=e.clientY;var i=u({},r.state),o=i.width,a=i.height,c=r.props.usePercentageResize;r.handler.width&&(o=c.width?u({},o,{percent:o.percent+t/r.parentWidth*100}):u({},o,{px:o.px+t})),r.handler.height&&(a=c.height?u({},a,{percent:a.percent+n/r.parentHeight*100}):u({},a,{px:a.px+n}));var s=r.calcCurrentSize({width:o,height:a}),p=u({},r.state,s);r.curState=p,r.props.onResizing(p)},r.handleMouseUp=function(e){e.preventDefault(),document.removeEventListener("mousemove",r.handleMouseMove),document.removeEventListener("mouseup",r.handleMouseUp),r.props.onResized(r.curState),r.start=!1},r.tick=function(e){r.setState(r.curState),r.start&&requestAnimationFrame(r.tick)},a=n,o(r,a)}return a(t,e),c(t,[{key:"render",value:function(){var e={width:this.mapSizeOptionToCSS(this.state.width),height:this.mapSizeOptionToCSS(this.state.height),maxWidth:this.mapSizeOptionToCSS(this.props.maximumWidth),minWidth:this.mapSizeOptionToCSS(this.props.minimumWidth),maxHeight:this.mapSizeOptionToCSS(this.props.maximumHeight),minHeight:this.mapSizeOptionToCSS(this.props.minimumHeight),position:"relative"},t={position:"absolute",right:-5,top:0,height:"100%",width:10,cursor:"ew-resize"},n={position:"absolute",left:0,bottom:-5,height:10,width:"100%",cursor:"ns-resize"},r={position:"absolute",right:-5,bottom:-5,height:10,width:10,cursor:"nwse-resize"};return p.default.createElement("div",{id:this.props.id,className:"resizable-component "+this.props.className,style:e},this.props.children,p.default.createElement("div",{onMouseDown:this.handleDragStartFactory({width:!0,height:!1}),onDoubleClick:this.handleRightDoubleClick,className:"resize-handle-right",style:t}),p.default.createElement("div",{onMouseDown:this.handleDragStartFactory({width:!1,height:!0}),onDoubleClick:this.handleBottomDoubleClick,className:"resize-handle-bottom",style:n}),p.default.createElement("div",{onMouseDown:this.handleDragStartFactory({width:!0,height:!0}),onDoubleClick:this.handleCornerDoubleClick,className:"resize-handle-corner",style:r}))}}]),t}(s.Component);h.propTypes={id:f.default.string,className:f.default.string,children:f.default.node,disable:f.default.shape({width:f.default.bool,height:f.default.bool}),usePercentageResize:f.default.shape({width:f.default.bool,height:f.default.bool}),parentContainer:f.default.node,minimumWidth:f.default.shape({px:f.default.number,percent:f.default.number}),minimumHeight:f.default.shape({px:f.default.number,percent:f.default.number}),maximumWidth:f.default.shape({px:f.default.number,percent:f.default.number}),maximumHeight:f.default.shape({px:f.default.number,percent:f.default.number}),initWidth:f.default.shape({px:f.default.number,percent:f.default.number}),initHeight:f.default.shape({px:f.default.number,percent:f.default.number}),onResizing:f.default.func,onResized:f.default.func},h.defaultProps={disable:{width:!1,height:!1},usePercentageResize:{width:!0,height:!0},parentContainer:document.body,minimumWidth:{px:150,percent:0},minimumHeight:{px:350,percent:0},maximumWidth:{px:0,percent:100},maximumHeight:{px:0,percent:100},initWidth:{px:0,percent:30},initHeight:{px:0,percent:100},onResizing:function(e){return null},onResized:function(e){return null}}},function(t,n){t.exports=e},function(e,t,n){(function(t){if("production"!==t.env.NODE_ENV){var r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,i=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r};e.exports=n(8)(i,!0)}else e.exports=n(11)()}).call(t,n(0))},function(e,t,n){"use strict";(function(t){var r=n(1),i=n(2),o=n(4),a=n(9),u=n(3),c=n(10);e.exports=function(e,n){function s(e){var t=e&&(R&&e[R]||e[P]);if("function"==typeof t)return t}function p(e,t){return e===t?0!==e||1/e==1/t:e!==e&&t!==t}function l(e){this.message=e,this.stack=""}function f(e){function r(r,s,p,f,h,d,m){if(f=f||N,d=d||p,m!==u)if(n)i(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("production"!==t.env.NODE_ENV&&"undefined"!=typeof console){var y=f+":"+p;!a[y]&&c<3&&(o(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",d,f),a[y]=!0,c++)}return null==s[p]?r?new l(null===s[p]?"The "+h+" `"+d+"` is marked as required in `"+f+"`, but its value is `null`.":"The "+h+" `"+d+"` is marked as required in `"+f+"`, but its value is `undefined`."):null:e(s,p,f,h,d)}if("production"!==t.env.NODE_ENV)var a={},c=0;var s=r.bind(null,!1);return s.isRequired=r.bind(null,!0),s}function h(e){function t(t,n,r,i,o,a){var u=t[n];if(T(u)!==e)return new l("Invalid "+i+" `"+o+"` of type `"+E(u)+"` supplied to `"+r+"`, expected `"+e+"`.");return null}return f(t)}function d(e){function t(t,n,r,i,o){if("function"!=typeof e)return new l("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var a=t[n];if(!Array.isArray(a)){return new l("Invalid "+i+" `"+o+"` of type `"+T(a)+"` supplied to `"+r+"`, expected an array.")}for(var c=0;c<a.length;c++){var s=e(a,c,r,i,o+"["+c+"]",u);if(s instanceof Error)return s}return null}return f(t)}function m(e){function t(t,n,r,i,o){if(!(t[n]instanceof e)){var a=e.name||N;return new l("Invalid "+i+" `"+o+"` of type `"+j(t[n])+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}return null}return f(t)}function y(e){function n(t,n,r,i,o){for(var a=t[n],u=0;u<e.length;u++)if(p(a,e[u]))return null;return new l("Invalid "+i+" `"+o+"` of value `"+a+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}return Array.isArray(e)?f(n):("production"!==t.env.NODE_ENV&&o(!1,"Invalid argument supplied to oneOf, expected an instance of array."),r.thatReturnsNull)}function v(e){function t(t,n,r,i,o){if("function"!=typeof e)return new l("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var a=t[n],c=T(a);if("object"!==c)return new l("Invalid "+i+" `"+o+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var s in a)if(a.hasOwnProperty(s)){var p=e(a,s,r,i,o+"."+s,u);if(p instanceof Error)return p}return null}return f(t)}function g(e){function n(t,n,r,i,o){for(var a=0;a<e.length;a++){if(null==(0,e[a])(t,n,r,i,o,u))return null}return new l("Invalid "+i+" `"+o+"` supplied to `"+r+"`.")}if(!Array.isArray(e))return"production"!==t.env.NODE_ENV&&o(!1,"Invalid argument supplied to oneOfType, expected an instance of array."),r.thatReturnsNull;for(var i=0;i<e.length;i++){var a=e[i];if("function"!=typeof a)return o(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",S(a),i),r.thatReturnsNull}return f(n)}function b(e){function t(t,n,r,i,o){var a=t[n],c=T(a);if("object"!==c)return new l("Invalid "+i+" `"+o+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var s in e){var p=e[s];if(p){var f=p(a,s,r,i,o+"."+s,u);if(f)return f}}return null}return f(t)}function x(e){function t(t,n,r,i,o){var c=t[n],s=T(c);if("object"!==s)return new l("Invalid "+i+" `"+o+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");var p=a({},t[n],e);for(var f in p){var h=e[f];if(!h)return new l("Invalid "+i+" `"+o+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var d=h(c,f,r,i,o+"."+f,u);if(d)return d}return null}return f(t)}function w(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(w);if(null===t||e(t))return!0;var n=s(t);if(!n)return!1;var r,i=n.call(t);if(n!==t.entries){for(;!(r=i.next()).done;)if(!w(r.value))return!1}else for(;!(r=i.next()).done;){var o=r.value;if(o&&!w(o[1]))return!1}return!0;default:return!1}}function O(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function T(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":O(t,e)?"symbol":t}function E(e){if(void 0===e||null===e)return""+e;var t=T(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function S(e){var t=E(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function j(e){return e.constructor&&e.constructor.name?e.constructor.name:N}var R="function"==typeof Symbol&&Symbol.iterator,P="@@iterator",N="<<anonymous>>",k={array:h("array"),bool:h("boolean"),func:h("function"),number:h("number"),object:h("object"),string:h("string"),symbol:h("symbol"),any:function(){return f(r.thatReturnsNull)}(),arrayOf:d,element:function(){function t(t,n,r,i,o){var a=t[n];if(!e(a)){return new l("Invalid "+i+" `"+o+"` of type `"+T(a)+"` supplied to `"+r+"`, expected a single ReactElement.")}return null}return f(t)}(),instanceOf:m,node:function(){function e(e,t,n,r,i){return w(e[t])?null:new l("Invalid "+r+" `"+i+"` supplied to `"+n+"`, expected a ReactNode.")}return f(e)}(),objectOf:v,oneOf:y,oneOfType:g,shape:b,exact:x};return l.prototype=Error.prototype,k.checkPropTypes=c,k.PropTypes=k,k}}).call(t,n(0))},function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,u,c=r(e),s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var p in n)o.call(n,p)&&(c[p]=n[p]);if(i){u=i(n);for(var l=0;l<u.length;l++)a.call(n,u[l])&&(c[u[l]]=n[u[l]])}}return c}},function(e,t,n){"use strict";(function(t){function r(e,n,r,c,s){if("production"!==t.env.NODE_ENV)for(var p in e)if(e.hasOwnProperty(p)){var l;try{i("function"==typeof e[p],"%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.",c||"React class",r,p,typeof e[p]),l=e[p](n,p,c,r,null,a)}catch(e){l=e}if(o(!l||l instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",c||"React class",r,p,typeof l),l instanceof Error&&!(l.message in u)){u[l.message]=!0;var f=s?s():"";o(!1,"Failed %s type: %s%s",r,l.message,null!=f?f:"")}}}if("production"!==t.env.NODE_ENV)var i=n(2),o=n(4),a=n(3),u={};e.exports=r}).call(t,n(0))},function(e,t,n){"use strict";var r=n(1),i=n(2),o=n(3);e.exports=function(){function e(e,t,n,r,a,u){u!==o&&i(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}}])});