!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).htmlToImage={})}(this,(function(t){"use strict";function e(t,e,n,r){return new(n||(n=Promise))((function(o,i){function c(t){try{a(r.next(t))}catch(t){i(t)}}function u(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,u)}a((r=r.apply(t,e||[])).next())}))}function n(t,e){var n,r,o,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},c=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return c.next=u(0),c.throw=u(1),c.return=u(2),"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function u(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;c&&(c=0,u[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=e.call(t,i)}catch(t){u=[6,t],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}}"function"==typeof SuppressedError&&SuppressedError;var r,o=(r=0,function(){return r+=1,"u".concat("0000".concat((Math.random()*Math.pow(36,4)|0).toString(36)).slice(-4)).concat(r)});function i(t){for(var e=[],n=0,r=t.length;n<r;n++)e.push(t[n]);return e}function c(t,e){var n=(t.ownerDocument.defaultView||window).getComputedStyle(t).getPropertyValue(e);return n?parseFloat(n.replace("px","")):0}function u(t,e){void 0===e&&(e={});var n,r,o,i=e.width||(r=c(n=t,"border-left-width"),o=c(n,"border-right-width"),n.clientWidth+r+o),u=e.height||function(t){var e=c(t,"border-top-width"),n=c(t,"border-bottom-width");return t.clientHeight+e+n}(t);return{width:i,height:u}}var a=16384;function s(t,e){return void 0===e&&(e={}),t.toBlob?new Promise((function(n){t.toBlob(n,e.type?e.type:"image/png",e.quality?e.quality:1)})):new Promise((function(n){for(var r=window.atob(t.toDataURL(e.type?e.type:void 0,e.quality?e.quality:void 0).split(",")[1]),o=r.length,i=new Uint8Array(o),c=0;c<o;c+=1)i[c]=r.charCodeAt(c);n(new Blob([i],{type:e.type?e.type:"image/png"}))}))}function l(t){return new Promise((function(e,n){var r=new Image;r.onload=function(){e(r)},r.onerror=n,r.crossOrigin="anonymous",r.decoding="async",r.src=t}))}function f(t){return e(this,void 0,void 0,(function(){return n(this,(function(e){return[2,Promise.resolve().then((function(){return(new XMLSerializer).serializeToString(t)})).then(encodeURIComponent).then((function(t){return"data:image/svg+xml;charset=utf-8,".concat(t)}))]}))}))}function h(t,r,o){return e(this,void 0,void 0,(function(){var e,i,c;return n(this,(function(n){return e="http://www.w3.org/2000/svg",i=document.createElementNS(e,"svg"),c=document.createElementNS(e,"foreignObject"),i.setAttribute("width","".concat(r)),i.setAttribute("height","".concat(o)),i.setAttribute("viewBox","0 0 ".concat(r," ").concat(o)),c.setAttribute("width","100%"),c.setAttribute("height","100%"),c.setAttribute("x","0"),c.setAttribute("y","0"),c.setAttribute("externalResourcesRequired","true"),i.appendChild(c),c.appendChild(t),[2,f(i)]}))}))}var d=function(t,e){if(t instanceof e)return!0;var n=Object.getPrototypeOf(t);return null!==n&&(n.constructor.name===e.name||d(n,e))};function v(t,e,n){var r=".".concat(t,":").concat(e),o=n.cssText?function(t){var e=t.getPropertyValue("content");return"".concat(t.cssText," content: '").concat(e.replace(/'|"/g,""),"';")}(n):function(t){return i(t).map((function(e){var n=t.getPropertyValue(e),r=t.getPropertyPriority(e);return"".concat(e,": ").concat(n).concat(r?" !important":"",";")})).join(" ")}(n);return document.createTextNode("".concat(r,"{").concat(o,"}"))}function g(t,e,n){var r=window.getComputedStyle(t,n),i=r.getPropertyValue("content");if(""!==i&&"none"!==i){var c=o();try{e.className="".concat(e.className," ").concat(c)}catch(t){return}var u=document.createElement("style");u.appendChild(v(c,n,r)),e.appendChild(u)}}var p="application/font-woff",m="image/jpeg",w={woff:p,woff2:p,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:m,jpeg:m,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function b(t){var e=function(t){var e=/\.([^./]*?)$/g.exec(t);return e?e[1]:""}(t).toLowerCase();return w[e]||""}function y(t){return-1!==t.search(/^(data:)/)}function S(t,e){return"data:".concat(e,";base64,").concat(t)}function x(t,r,o){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){switch(n.label){case 0:return[4,fetch(t,r)];case 1:if(404===(e=n.sent()).status)throw new Error('Resource "'.concat(e.url,'" not found'));return[4,e.blob()];case 2:return i=n.sent(),[2,new Promise((function(t,n){var r=new FileReader;r.onerror=n,r.onloadend=function(){try{t(o({res:e,result:r.result}))}catch(t){n(t)}},r.readAsDataURL(i)}))]}}))}))}var E={};function C(t,r,o){return e(this,void 0,void 0,(function(){var e,i,c,u,a;return n(this,(function(n){switch(n.label){case 0:if(e=function(t,e,n){var r=t.replace(/\?.*/,"");return n&&(r=t),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\//,"")),e?"[".concat(e,"]").concat(r):r}(t,r,o.includeQueryParams),o.cacheBust)t+=(/\?/.test(t)?"&":"?")+(new Date).getTime();else if(null!=E[e])return[2,E[e]];n.label=1;case 1:return n.trys.push([1,3,,4]),[4,x(t,o.fetchRequestInit,(function(t){var e=t.res,n=t.result;return r||(r=e.headers.get("Content-Type")||""),function(t){return t.split(/,/)[1]}(n)}))];case 2:return c=n.sent(),i=S(c,r),[3,4];case 3:return u=n.sent(),i=o.imagePlaceholder||"",a="Failed to fetch resource: ".concat(t),u&&(a="string"==typeof u?u:u.message),a&&console.warn(a),[3,4];case 4:return E[e]=i,[2,i]}}))}))}function P(t){return e(this,void 0,void 0,(function(){var e;return n(this,(function(n){return"data:,"===(e=t.toDataURL())?[2,t.cloneNode(!1)]:[2,l(e)]}))}))}function R(t,r){return e(this,void 0,void 0,(function(){var e,o,i,c;return n(this,(function(n){switch(n.label){case 0:return t.currentSrc?(e=document.createElement("canvas"),o=e.getContext("2d"),e.width=t.clientWidth,e.height=t.clientHeight,null==o||o.drawImage(t,0,0,e.width,e.height),[2,l(e.toDataURL())]):(i=t.poster,c=b(i),[4,C(i,c,r)]);case 1:return[2,l(n.sent())]}}))}))}function T(t){var r;return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),(null===(r=null==t?void 0:t.contentDocument)||void 0===r?void 0:r.body)?[4,A(t.contentDocument.body,{},!0)]:[3,2];case 1:return[2,e.sent()];case 2:return[3,4];case 3:return e.sent(),[3,4];case 4:return[2,t.cloneNode(!1)]}}))}))}var I=function(t){return null!=t.tagName&&"SLOT"===t.tagName.toUpperCase()};function L(t,e){return d(e,Element)&&(function(t,e){var n=e.style;if(n){var r=window.getComputedStyle(t);r.cssText?(n.cssText=r.cssText,n.transformOrigin=r.transformOrigin):i(r).forEach((function(o){var i=r.getPropertyValue(o);if("font-size"===o&&i.endsWith("px")){var c=Math.floor(parseFloat(i.substring(0,i.length-2)))-.1;i="".concat(c,"px")}d(t,HTMLIFrameElement)&&"display"===o&&"inline"===i&&(i="block"),"d"===o&&e.getAttribute("d")&&(i="path(".concat(e.getAttribute("d"),")")),n.setProperty(o,i,r.getPropertyPriority(o))}))}}(t,e),function(t,e){g(t,e,":before"),g(t,e,":after")}(t,e),function(t,e){d(t,HTMLTextAreaElement)&&(e.innerHTML=t.value),d(t,HTMLInputElement)&&e.setAttribute("value",t.value)}(t,e),function(t,e){if(d(t,HTMLSelectElement)){var n=e,r=Array.from(n.children).find((function(e){return t.value===e.getAttribute("value")}));r&&r.setAttribute("selected","")}}(t,e)),e}function A(t,r,o){return e(this,void 0,void 0,(function(){return n(this,(function(c){return o||!r.filter||r.filter(t)?[2,Promise.resolve(t).then((function(t){return function(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){return d(t,HTMLCanvasElement)?[2,P(t)]:d(t,HTMLVideoElement)?[2,R(t,r)]:d(t,HTMLIFrameElement)?[2,T(t)]:[2,t.cloneNode(!1)]}))}))}(t,r)})).then((function(o){return function(t,r,o){var c,u;return e(this,void 0,void 0,(function(){var e;return n(this,(function(n){switch(n.label){case 0:return e=[],0===(e=I(t)&&t.assignedNodes?i(t.assignedNodes()):d(t,HTMLIFrameElement)&&(null===(c=t.contentDocument)||void 0===c?void 0:c.body)?i(t.contentDocument.body.childNodes):i((null!==(u=t.shadowRoot)&&void 0!==u?u:t).childNodes)).length||d(t,HTMLVideoElement)?[2,r]:[4,e.reduce((function(t,e){return t.then((function(){return A(e,o)})).then((function(t){t&&r.appendChild(t)}))}),Promise.resolve())];case 1:return n.sent(),[2,r]}}))}))}(t,o,r)})).then((function(e){return L(t,e)})).then((function(t){return function(t,r){return e(this,void 0,void 0,(function(){var e,o,i,c,u,a,s,l,f,h,d,v,g;return n(this,(function(n){switch(n.label){case 0:if(0===(e=t.querySelectorAll?t.querySelectorAll("use"):[]).length)return[2,t];o={},g=0,n.label=1;case 1:return g<e.length?(i=e[g],(c=i.getAttribute("xlink:href"))?(u=t.querySelector(c),a=document.querySelector(c),u||!a||o[c]?[3,3]:(s=o,l=c,[4,A(a,r,!0)])):[3,3]):[3,4];case 2:s[l]=n.sent(),n.label=3;case 3:return g++,[3,1];case 4:if((f=Object.values(o)).length){for(h="http://www.w3.org/1999/xhtml",(d=document.createElementNS(h,"svg")).setAttribute("xmlns",h),d.style.position="absolute",d.style.width="0",d.style.height="0",d.style.overflow="hidden",d.style.display="none",v=document.createElementNS(h,"defs"),d.appendChild(v),g=0;g<f.length;g++)v.appendChild(f[g]);t.appendChild(d)}return[2,t]}}))}))}(t,r)}))]:[2,null]}))}))}var N=/url\((['"]?)([^'"]+?)\1\)/g,k=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,D=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function M(t,r,o,i,c){return e(this,void 0,void 0,(function(){var e,u,a,s;return n(this,(function(n){switch(n.label){case 0:return n.trys.push([0,5,,6]),e=o?function(t,e){if(t.match(/^[a-z]+:\/\//i))return t;if(t.match(/^\/\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i))return t;var n=document.implementation.createHTMLDocument(),r=n.createElement("base"),o=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(o),e&&(r.href=e),o.href=t,o.href}(r,o):r,u=b(r),a=void 0,c?[4,c(e)]:[3,2];case 1:return s=n.sent(),a=S(s,u),[3,4];case 2:return[4,C(e,u,i)];case 3:a=n.sent(),n.label=4;case 4:return[2,t.replace((l=r,f=l.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1"),new RegExp("(url\\(['\"]?)(".concat(f,")(['\"]?\\))"),"g")),"$1".concat(a,"$3"))];case 5:return n.sent(),[3,6];case 6:return[2,t]}var l,f}))}))}function H(t){return-1!==t.search(N)}function j(t,r,o){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){return H(t)?(e=function(t,e){var n=e.preferredFontFormat;return n?t.replace(D,(function(t){for(;;){var e=k.exec(t)||[],r=e[0],o=e[2];if(!o)return"";if(o===n)return"src: ".concat(r,";")}})):t}(t,o),i=function(t){var e=[];return t.replace(N,(function(t,n,r){return e.push(r),t})),e.filter((function(t){return!y(t)}))}(e),[2,i.reduce((function(t,e){return t.then((function(t){return M(t,e,r,o)}))}),Promise.resolve(e))]):[2,t]}))}))}function F(t,r,o){var i;return e(this,void 0,void 0,(function(){var e,c;return n(this,(function(n){switch(n.label){case 0:return(e=null===(i=r.style)||void 0===i?void 0:i.getPropertyValue(t))?[4,j(e,null,o)]:[3,2];case 1:return c=n.sent(),r.style.setProperty(t,c,r.style.getPropertyPriority(t)),[2,!0];case 2:return[2,!1]}}))}))}function V(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,F("background",t,r)];case 1:return e.sent()?[3,3]:[4,F("background-image",t,r)];case 2:e.sent(),e.label=3;case 3:return[4,F("mask",t,r)];case 4:return e.sent()?[3,6]:[4,F("mask-image",t,r)];case 5:e.sent(),e.label=6;case 6:return[2]}}))}))}function O(t,r){return e(this,void 0,void 0,(function(){var e,o,i;return n(this,(function(n){switch(n.label){case 0:return console.log("chạy vào embedImageNode"),(e=d(t,HTMLImageElement))&&!y(t.src)||d(t,SVGImageElement)&&!y(t.href.baseVal)?[4,C(o=e?t.src:t.href.baseVal,b(o),r)]:(console.log("chạy vào if embedImageNode"),[2]);case 1:return i=n.sent(),console.log("dataURL_Html_image",i),[4,new Promise((function(n,r){t.onload=n,t.onerror=r;var o=t;o.decode&&(o.decode=n),"lazy"===o.loading&&(o.loading="eager"),e?(t.srcset="",t.src=i):t.href.baseVal=i}))];case 2:return n.sent(),[2]}}))}))}function U(t,r){return e(this,void 0,void 0,(function(){var e,o;return n(this,(function(n){switch(n.label){case 0:return e=i(t.childNodes),o=e.map((function(t){return q(t,r)})),[4,Promise.all(o).then((function(){return t}))];case 1:return n.sent(),[2]}}))}))}function q(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return d(t,Element)?(console.log("chạy vào embedImages"),[4,V(t,r)]):[3,4];case 1:return e.sent(),[4,O(t,r)];case 2:return e.sent(),[4,U(t,r)];case 3:e.sent(),e.label=4;case 4:return[2]}}))}))}var B={};function z(t){return e(this,void 0,void 0,(function(){var e,r;return n(this,(function(n){switch(n.label){case 0:return null!=(e=B[t])?[2,e]:[4,fetch(t)];case 1:return[4,n.sent().text()];case 2:return r=n.sent(),e={url:t,cssText:r},B[t]=e,[2,e]}}))}))}function W(t,r){return e(this,void 0,void 0,(function(){var o,i,c,u,a=this;return n(this,(function(s){return o=t.cssText,i=/url\(["']?([^"')]+)["']?\)/g,c=o.match(/url\([^)]+\)/g)||[],u=c.map((function(c){return e(a,void 0,void 0,(function(){var e;return n(this,(function(n){return(e=c.replace(i,"$1")).startsWith("https://")||(e=new URL(e,t.url).href),[2,x(e,r.fetchFontRequestInit,(function(t){var e=t.result;return o=o.replace(c,"url(".concat(e,")")),[c,e]}))]}))}))})),[2,Promise.all(u).then((function(){return o}))]}))}))}function $(t){if(null==t)return[];for(var e=[],n=t.replace(/(\/\*[\s\S]*?\*\/)/gi,""),r=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");;){if(null===(c=r.exec(n)))break;e.push(c[0])}n=n.replace(r,"");for(var o=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,i=new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})","gi");;){var c;if(null===(c=o.exec(n))){if(null===(c=i.exec(n)))break;o.lastIndex=i.lastIndex}else i.lastIndex=o.lastIndex;e.push(c[0])}return e}function _(t,r){return e(this,void 0,void 0,(function(){var e,o;return n(this,(function(n){return e=[],o=[],t.forEach((function(e){if("cssRules"in e)try{i(e.cssRules||[]).forEach((function(t,n){if(t.type===CSSRule.IMPORT_RULE){var i=n+1,c=z(t.href).then((function(t){return W(t,r)})).then((function(t){return $(t).forEach((function(t){try{e.insertRule(t,t.startsWith("@import")?i+=1:e.cssRules.length)}catch(e){console.error("Error inserting rule from remote css",{rule:t,error:e})}}))})).catch((function(t){console.error("Error loading remote css",t.toString())}));o.push(c)}}))}catch(i){var n=t.find((function(t){return null==t.href}))||document.styleSheets[0];null!=e.href&&o.push(z(e.href).then((function(t){return W(t,r)})).then((function(t){return $(t).forEach((function(t){n.insertRule(t,e.cssRules.length)}))})).catch((function(t){console.error("Error loading remote stylesheet",t)}))),console.error("Error inlining remote css file",i)}})),[2,Promise.all(o).then((function(){return t.forEach((function(t){if("cssRules"in t)try{i(t.cssRules||[]).forEach((function(t){e.push(t)}))}catch(e){console.error("Error while reading CSS rules from ".concat(t.href),e)}})),e}))]}))}))}function G(t){return t.filter((function(t){return t.type===CSSRule.FONT_FACE_RULE})).filter((function(t){return H(t.style.getPropertyValue("src"))}))}function J(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:if(null==t.ownerDocument)throw new Error("Provided element is not within a Document");return[4,_(i(t.ownerDocument.styleSheets),r)];case 1:return[2,G(e.sent())]}}))}))}function Q(t,r){return e(this,void 0,void 0,(function(){var e;return n(this,(function(n){switch(n.label){case 0:return[4,J(t,r)];case 1:return e=n.sent(),[4,Promise.all(e.map((function(t){var e=t.parentStyleSheet?t.parentStyleSheet.href:null;return j(t.cssText,e,r)})))];case 2:return[2,n.sent().join("\n")]}}))}))}function X(t,r){return e(this,void 0,void 0,(function(){var e,o,i,c,u;return n(this,(function(n){switch(n.label){case 0:return null==r.fontEmbedCSS?[3,1]:(o=r.fontEmbedCSS,[3,5]);case 1:return r.skipFonts?(i=null,[3,4]):[3,2];case 2:return[4,Q(t,r)];case 3:i=n.sent(),n.label=4;case 4:o=i,n.label=5;case 5:return(e=o)&&(c=document.createElement("style"),u=document.createTextNode(e),c.appendChild(u),t.firstChild?t.insertBefore(c,t.firstChild):t.appendChild(c)),[2]}}))}))}function K(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){var e,o,i,c;return n(this,(function(n){switch(n.label){case 0:return e=u(t,r),o=e.width,i=e.height,[4,A(t,r,!0)];case 1:return[4,q(c=n.sent(),r)];case 2:return n.sent(),[4,X(c,r)];case 3:return n.sent(),function(t,e){var n=t.style;e.backgroundColor&&(n.backgroundColor=e.backgroundColor),e.width&&(n.width="".concat(e.width,"px")),e.height&&(n.height="".concat(e.height,"px"));var r=e.style;null!=r&&Object.keys(r).forEach((function(t){n[t]=r[t]}))}(c,r),[4,h(c,o,i)];case 4:return[2,n.sent()]}}))}))}function Y(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){var e,o,i,c,s,f,h,d,v;return n(this,(function(n){switch(n.label){case 0:return e=u(t,r),o=e.width,i=e.height,[4,K(t,r)];case 1:return[4,l(n.sent())];case 2:return c=n.sent(),[4,new Promise((function(t){return setTimeout(t,3e3)}))];case 3:return n.sent(),s=document.createElement("canvas"),f=s.getContext("2d"),h=r.pixelRatio||function(){var t,e;try{e=process}catch(t){}var n=e&&e.env?e.env.devicePixelRatio:null;return n&&(t=parseInt(n,10),Number.isNaN(t)&&(t=1)),t||window.devicePixelRatio||1}(),d=r.canvasWidth||o,v=r.canvasHeight||i,s.width=d*h,s.height=v*h,r.skipAutoScale||function(t){(t.width>a||t.height>a)&&(t.width>a&&t.height>a?t.width>t.height?(t.height*=a/t.width,t.width=a):(t.width*=a/t.height,t.height=a):t.width>a?(t.height*=a/t.width,t.width=a):(t.width*=a/t.height,t.height=a))}(s),s.style.width="".concat(d),s.style.height="".concat(v),r.backgroundColor&&(f.fillStyle=r.backgroundColor,f.fillRect(0,0,s.width,s.height)),f.drawImage(c,0,0,s.width,s.height),[2,s]}}))}))}t.getFontEmbedCSS=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){return[2,Q(t,r)]}))}))},t.toBlob=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,Y(t,r)];case 1:return[4,s(e.sent())];case 2:return[2,e.sent()]}}))}))},t.toCanvas=Y,t.toJpeg=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,Y(t,r)];case 1:return[2,e.sent().toDataURL("image/jpeg",r.quality||1)]}}))}))},t.toPixelData=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){var e,o,i,c;return n(this,(function(n){switch(n.label){case 0:return e=u(t,r),o=e.width,i=e.height,[4,Y(t,r)];case 1:return c=n.sent(),[2,c.getContext("2d").getImageData(0,0,o,i).data]}}))}))},t.toPng=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){var e;return n(this,(function(n){switch(n.label){case 0:return[4,Y(t,r)];case 1:return e=n.sent(),console.log("helllo"),[2,e.toDataURL()]}}))}))},t.toSvg=K}));
//# sourceMappingURL=html-to-image.js.map
