/*! For license information please see 856.js.LICENSE.txt */
(self.webpackChunkDooTask=self.webpackChunkDooTask||[]).push([[856],{27856:function(e){e.exports=function(){"use strict";function e(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var t=Object.hasOwnProperty,n=Object.setPrototypeOf,r=Object.isFrozen,o=Object.getPrototypeOf,i=Object.getOwnPropertyDescriptor,a=Object.freeze,l=Object.seal,c=Object.create,s="undefined"!=typeof Reflect&&Reflect,u=s.apply,f=s.construct;u||(u=function(e,t,n){return e.apply(t,n)}),a||(a=function(e){return e}),l||(l=function(e){return e}),f||(f=function(t,n){return new(Function.prototype.bind.apply(t,[null].concat(e(n))))});var m=x(Array.prototype.forEach),p=x(Array.prototype.pop),d=x(Array.prototype.push),h=x(String.prototype.toLowerCase),g=x(String.prototype.match),y=x(String.prototype.replace),v=x(String.prototype.indexOf),b=x(String.prototype.trim),A=x(RegExp.prototype.test),T=w(TypeError);function x(e){return function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return u(e,t,r)}}function w(e){return function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return f(e,n)}}function S(e,t){n&&n(e,null);for(var o=t.length;o--;){var i=t[o];if("string"==typeof i){var a=h(i);a!==i&&(r(t)||(t[o]=a),i=a)}e[i]=!0}return e}function k(e){var n=c(null),r=void 0;for(r in e)u(t,e,[r])&&(n[r]=e[r]);return n}function D(e,t){for(;null!==e;){var n=i(e,t);if(n){if(n.get)return x(n.get);if("function"==typeof n.value)return x(n.value)}e=o(e)}function r(e){return console.warn("fallback value for",e),null}return r}var E=a(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),R=a(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),_=a(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),N=a(["animate","color-profile","cursor","discard","fedropshadow","feimage","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),O=a(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),L=a(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),M=a(["#text"]),F=a(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),C=a(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),I=a(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),z=a(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),U=l(/\{\{[\s\S]*|[\s\S]*\}\}/gm),H=l(/<%[\s\S]*|[\s\S]*%>/gm),j=l(/^data-[\-\w.\u00B7-\uFFFF]/),P=l(/^aria-[\-\w]+$/),B=l(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),W=l(/^(?:\w+script|data):/i),G=l(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function K(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var V=function(){return"undefined"==typeof window?null:window},Y=function(e,t){if("object"!==(void 0===e?"undefined":q(e))||"function"!=typeof e.createPolicy)return null;var n=null,r="data-tt-policy-suffix";t.currentScript&&t.currentScript.hasAttribute(r)&&(n=t.currentScript.getAttribute(r));var o="dompurify"+(n?"#"+n:"");try{return e.createPolicy(o,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+o+" could not be created."),null}};function X(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V(),t=function(e){return X(e)};if(t.version="2.2.9",t.removed=[],!e||!e.document||9!==e.document.nodeType)return t.isSupported=!1,t;var n=e.document,r=e.document,o=e.DocumentFragment,i=e.HTMLTemplateElement,l=e.Node,c=e.Element,s=e.NodeFilter,u=e.NamedNodeMap,f=void 0===u?e.NamedNodeMap||e.MozNamedAttrMap:u,x=e.Text,w=e.Comment,$=e.DOMParser,Z=e.trustedTypes,J=c.prototype,Q=D(J,"cloneNode"),ee=D(J,"nextSibling"),te=D(J,"childNodes"),ne=D(J,"parentNode");if("function"==typeof i){var re=r.createElement("template");re.content&&re.content.ownerDocument&&(r=re.content.ownerDocument)}var oe=Y(Z,n),ie=oe&&Ie?oe.createHTML(""):"",ae=r,le=ae.implementation,ce=ae.createNodeIterator,se=ae.createDocumentFragment,ue=n.importNode,fe={};try{fe=k(r).documentMode?r.documentMode:{}}catch(e){}var me={};t.isSupported="function"==typeof ne&&le&&void 0!==le.createHTMLDocument&&9!==fe;var pe=U,de=H,he=j,ge=P,ye=W,ve=G,be=B,Ae=null,Te=S({},[].concat(K(E),K(R),K(_),K(O),K(M))),xe=null,we=S({},[].concat(K(F),K(C),K(I),K(z))),Se=null,ke=null,De=!0,Ee=!0,Re=!1,_e=!1,Ne=!1,Oe=!1,Le=!1,Me=!1,Fe=!1,Ce=!0,Ie=!1,ze=!0,Ue=!0,He=!1,je={},Pe=S({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Be=null,We=S({},["audio","video","img","source","image","track"]),Ge=null,qe=S({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),Ke="http://www.w3.org/1998/Math/MathML",Ve="http://www.w3.org/2000/svg",Ye="http://www.w3.org/1999/xhtml",Xe=Ye,$e=!1,Ze=null,Je=r.createElement("form"),Qe=function(e){Ze&&Ze===e||(e&&"object"===(void 0===e?"undefined":q(e))||(e={}),e=k(e),Ae="ALLOWED_TAGS"in e?S({},e.ALLOWED_TAGS):Te,xe="ALLOWED_ATTR"in e?S({},e.ALLOWED_ATTR):we,Ge="ADD_URI_SAFE_ATTR"in e?S(k(qe),e.ADD_URI_SAFE_ATTR):qe,Be="ADD_DATA_URI_TAGS"in e?S(k(We),e.ADD_DATA_URI_TAGS):We,Se="FORBID_TAGS"in e?S({},e.FORBID_TAGS):{},ke="FORBID_ATTR"in e?S({},e.FORBID_ATTR):{},je="USE_PROFILES"in e&&e.USE_PROFILES,De=!1!==e.ALLOW_ARIA_ATTR,Ee=!1!==e.ALLOW_DATA_ATTR,Re=e.ALLOW_UNKNOWN_PROTOCOLS||!1,_e=e.SAFE_FOR_TEMPLATES||!1,Ne=e.WHOLE_DOCUMENT||!1,Me=e.RETURN_DOM||!1,Fe=e.RETURN_DOM_FRAGMENT||!1,Ce=!1!==e.RETURN_DOM_IMPORT,Ie=e.RETURN_TRUSTED_TYPE||!1,Le=e.FORCE_BODY||!1,ze=!1!==e.SANITIZE_DOM,Ue=!1!==e.KEEP_CONTENT,He=e.IN_PLACE||!1,be=e.ALLOWED_URI_REGEXP||be,Xe=e.NAMESPACE||Ye,_e&&(Ee=!1),Fe&&(Me=!0),je&&(Ae=S({},[].concat(K(M))),xe=[],!0===je.html&&(S(Ae,E),S(xe,F)),!0===je.svg&&(S(Ae,R),S(xe,C),S(xe,z)),!0===je.svgFilters&&(S(Ae,_),S(xe,C),S(xe,z)),!0===je.mathMl&&(S(Ae,O),S(xe,I),S(xe,z))),e.ADD_TAGS&&(Ae===Te&&(Ae=k(Ae)),S(Ae,e.ADD_TAGS)),e.ADD_ATTR&&(xe===we&&(xe=k(xe)),S(xe,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&S(Ge,e.ADD_URI_SAFE_ATTR),Ue&&(Ae["#text"]=!0),Ne&&S(Ae,["html","head","body"]),Ae.table&&(S(Ae,["tbody"]),delete Se.tbody),a&&a(e),Ze=e)},et=S({},["mi","mo","mn","ms","mtext"]),tt=S({},["foreignobject","desc","title","annotation-xml"]),nt=S({},R);S(nt,_),S(nt,N);var rt=S({},O);S(rt,L);var ot=function(e){var t=ne(e);t&&t.tagName||(t={namespaceURI:Ye,tagName:"template"});var n=h(e.tagName),r=h(t.tagName);if(e.namespaceURI===Ve)return t.namespaceURI===Ye?"svg"===n:t.namespaceURI===Ke?"svg"===n&&("annotation-xml"===r||et[r]):Boolean(nt[n]);if(e.namespaceURI===Ke)return t.namespaceURI===Ye?"math"===n:t.namespaceURI===Ve?"math"===n&&tt[r]:Boolean(rt[n]);if(e.namespaceURI===Ye){if(t.namespaceURI===Ve&&!tt[r])return!1;if(t.namespaceURI===Ke&&!et[r])return!1;var o=S({},["title","style","font","a","script"]);return!rt[n]&&(o[n]||!nt[n])}return!1},it=function(e){d(t.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=ie}catch(t){e.remove()}}},at=function(e,n){try{d(t.removed,{attribute:n.getAttributeNode(e),from:n})}catch(e){d(t.removed,{attribute:null,from:n})}if(n.removeAttribute(e),"is"===e&&!xe[e])if(Me||Fe)try{it(n)}catch(e){}else try{n.setAttribute(e,"")}catch(e){}},lt=function(e){var t=void 0,n=void 0;if(Le)e="<remove></remove>"+e;else{var o=g(e,/^[\r\n\t ]+/);n=o&&o[0]}var i=oe?oe.createHTML(e):e;if(Xe===Ye)try{t=(new $).parseFromString(i,"text/html")}catch(e){}if(!t||!t.documentElement){t=le.createDocument(Xe,"template",null);try{t.documentElement.innerHTML=$e?"":i}catch(e){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(r.createTextNode(n),a.childNodes[0]||null),Ne?t.documentElement:a},ct=function(e){return ce.call(e.ownerDocument||e,e,s.SHOW_ELEMENT|s.SHOW_COMMENT|s.SHOW_TEXT,null,!1)},st=function(e){return!(e instanceof x||e instanceof w||"string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof f&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute&&"string"==typeof e.namespaceURI&&"function"==typeof e.insertBefore)},ut=function(e){return"object"===(void 0===l?"undefined":q(l))?e instanceof l:e&&"object"===(void 0===e?"undefined":q(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},ft=function(e,n,r){me[e]&&m(me[e],(function(e){e.call(t,n,r,Ze)}))},mt=function(e){var n=void 0;if(ft("beforeSanitizeElements",e,null),st(e))return it(e),!0;if(g(e.nodeName,/[\u0080-\uFFFF]/))return it(e),!0;var r=h(e.nodeName);if(ft("uponSanitizeElement",e,{tagName:r,allowedTags:Ae}),!ut(e.firstElementChild)&&(!ut(e.content)||!ut(e.content.firstElementChild))&&A(/<[/\w]/g,e.innerHTML)&&A(/<[/\w]/g,e.textContent))return it(e),!0;if(!Ae[r]||Se[r]){if(Ue&&!Pe[r]){var o=ne(e)||e.parentNode,i=te(e)||e.childNodes;if(i&&o)for(var a=i.length-1;a>=0;--a)o.insertBefore(Q(i[a],!0),ee(e))}return it(e),!0}return e instanceof c&&!ot(e)?(it(e),!0):"noscript"!==r&&"noembed"!==r||!A(/<\/no(script|embed)/i,e.innerHTML)?(_e&&3===e.nodeType&&(n=e.textContent,n=y(n,pe," "),n=y(n,de," "),e.textContent!==n&&(d(t.removed,{element:e.cloneNode()}),e.textContent=n)),ft("afterSanitizeElements",e,null),!1):(it(e),!0)},pt=function(e,t,n){if(ze&&("id"===t||"name"===t)&&(n in r||n in Je))return!1;if(Ee&&A(he,t));else if(De&&A(ge,t));else{if(!xe[t]||ke[t])return!1;if(Ge[t]);else if(A(be,y(n,ve,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==v(n,"data:")||!Be[e])if(Re&&!A(ye,y(n,ve,"")));else if(n)return!1}return!0},dt=function(e){var n=void 0,r=void 0,o=void 0,i=void 0;ft("beforeSanitizeAttributes",e,null);var a=e.attributes;if(a){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:xe};for(i=a.length;i--;){var c=n=a[i],s=c.name,u=c.namespaceURI;if(r=b(n.value),o=h(s),l.attrName=o,l.attrValue=r,l.keepAttr=!0,l.forceKeepAttr=void 0,ft("uponSanitizeAttribute",e,l),r=l.attrValue,!l.forceKeepAttr&&(at(s,e),l.keepAttr))if(A(/\/>/i,r))at(s,e);else{_e&&(r=y(r,pe," "),r=y(r,de," "));var f=e.nodeName.toLowerCase();if(pt(f,o,r))try{u?e.setAttributeNS(u,s,r):e.setAttribute(s,r),p(t.removed)}catch(e){}}}ft("afterSanitizeAttributes",e,null)}},ht=function e(t){var n=void 0,r=ct(t);for(ft("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)ft("uponSanitizeShadowNode",n,null),mt(n)||(n.content instanceof o&&e(n.content),dt(n));ft("afterSanitizeShadowDOM",t,null)};return t.sanitize=function(r,i){var a=void 0,c=void 0,s=void 0,u=void 0,f=void 0;if(($e=!r)&&(r="\x3c!--\x3e"),"string"!=typeof r&&!ut(r)){if("function"!=typeof r.toString)throw T("toString is not a function");if("string"!=typeof(r=r.toString()))throw T("dirty is not a string, aborting")}if(!t.isSupported){if("object"===q(e.toStaticHTML)||"function"==typeof e.toStaticHTML){if("string"==typeof r)return e.toStaticHTML(r);if(ut(r))return e.toStaticHTML(r.outerHTML)}return r}if(Oe||Qe(i),t.removed=[],"string"==typeof r&&(He=!1),He);else if(r instanceof l)1===(c=(a=lt("\x3c!----\x3e")).ownerDocument.importNode(r,!0)).nodeType&&"BODY"===c.nodeName||"HTML"===c.nodeName?a=c:a.appendChild(c);else{if(!Me&&!_e&&!Ne&&-1===r.indexOf("<"))return oe&&Ie?oe.createHTML(r):r;if(!(a=lt(r)))return Me?null:ie}a&&Le&&it(a.firstChild);for(var m=ct(He?r:a);s=m.nextNode();)3===s.nodeType&&s===u||mt(s)||(s.content instanceof o&&ht(s.content),dt(s),u=s);if(u=null,He)return r;if(Me){if(Fe)for(f=se.call(a.ownerDocument);a.firstChild;)f.appendChild(a.firstChild);else f=a;return Ce&&(f=ue.call(n,f,!0)),f}var p=Ne?a.outerHTML:a.innerHTML;return _e&&(p=y(p,pe," "),p=y(p,de," ")),oe&&Ie?oe.createHTML(p):p},t.setConfig=function(e){Qe(e),Oe=!0},t.clearConfig=function(){Ze=null,Oe=!1},t.isValidAttribute=function(e,t,n){Ze||Qe({});var r=h(e),o=h(t);return pt(r,o,n)},t.addHook=function(e,t){"function"==typeof t&&(me[e]=me[e]||[],d(me[e],t))},t.removeHook=function(e){me[e]&&p(me[e])},t.removeHooks=function(e){me[e]&&(me[e]=[])},t.removeAllHooks=function(){me={}},t}return X()}()}}]);