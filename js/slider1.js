/*[PATH @digikala/supernova/node_modules/jquery/dist/jquery.min.js]*/
/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});



/*[PATH @digikala/supernova-digikala-desktop/assets/js/jquery.easing.1.3.min.js]*/
jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(n,e,t,u,a){return jQuery.easing[jQuery.easing.def](n,e,t,u,a)},easeInQuad:function(n,e,t,u,a){return u*(e/=a)*e+t},easeOutQuad:function(n,e,t,u,a){return-u*(e/=a)*(e-2)+t},easeInOutQuad:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e+t:-u/2*(--e*(e-2)-1)+t},easeInCubic:function(n,e,t,u,a){return u*(e/=a)*e*e+t},easeOutCubic:function(n,e,t,u,a){return u*((e=e/a-1)*e*e+1)+t},easeInOutCubic:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e+t:u/2*((e-=2)*e*e+2)+t},easeInQuart:function(n,e,t,u,a){return u*(e/=a)*e*e*e+t},easeOutQuart:function(n,e,t,u,a){return-u*((e=e/a-1)*e*e*e-1)+t},easeInOutQuart:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e*e+t:-u/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(n,e,t,u,a){return u*(e/=a)*e*e*e*e+t},easeOutQuint:function(n,e,t,u,a){return u*((e=e/a-1)*e*e*e*e+1)+t},easeInOutQuint:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e*e*e+t:u/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(n,e,t,u,a){return-u*Math.cos(e/a*(Math.PI/2))+u+t},easeOutSine:function(n,e,t,u,a){return u*Math.sin(e/a*(Math.PI/2))+t},easeInOutSine:function(n,e,t,u,a){return-u/2*(Math.cos(Math.PI*e/a)-1)+t},easeInExpo:function(n,e,t,u,a){return 0==e?t:u*Math.pow(2,10*(e/a-1))+t},easeOutExpo:function(n,e,t,u,a){return e==a?t+u:u*(1-Math.pow(2,-10*e/a))+t},easeInOutExpo:function(n,e,t,u,a){return 0==e?t:e==a?t+u:(e/=a/2)<1?u/2*Math.pow(2,10*(e-1))+t:u/2*(2-Math.pow(2,-10*--e))+t},easeInCirc:function(n,e,t,u,a){return-u*(Math.sqrt(1-(e/=a)*e)-1)+t},easeOutCirc:function(n,e,t,u,a){return u*Math.sqrt(1-(e=e/a-1)*e)+t},easeInOutCirc:function(n,e,t,u,a){return(e/=a/2)<1?-u/2*(Math.sqrt(1-e*e)-1)+t:u/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(1==(e/=a))return t+u;if(i||(i=.3*a),s<Math.abs(u)){s=u;r=i/4}else r=i/(2*Math.PI)*Math.asin(u/s);return-s*Math.pow(2,10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/i)+t},easeOutElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(1==(e/=a))return t+u;if(i||(i=.3*a),s<Math.abs(u)){s=u;r=i/4}else r=i/(2*Math.PI)*Math.asin(u/s);return s*Math.pow(2,-10*e)*Math.sin((e*a-r)*(2*Math.PI)/i)+u+t},easeInOutElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(2==(e/=a/2))return t+u;if(i||(i=a*(.3*1.5)),s<Math.abs(u)){s=u;r=i/4}else r=i/(2*Math.PI)*Math.asin(u/s);return e<1?s*Math.pow(2,10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/i)*-.5+t:s*Math.pow(2,-10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/i)*.5+u+t},easeInBack:function(n,e,t,u,a,r){return null==r&&(r=1.70158),u*(e/=a)*e*((r+1)*e-r)+t},easeOutBack:function(n,e,t,u,a,r){return null==r&&(r=1.70158),u*((e=e/a-1)*e*((r+1)*e+r)+1)+t},easeInOutBack:function(n,e,t,u,a,r){return null==r&&(r=1.70158),(e/=a/2)<1?u/2*(e*e*((1+(r*=1.525))*e-r))+t:u/2*((e-=2)*e*((1+(r*=1.525))*e+r)+2)+t},easeInBounce:function(n,e,t,u,a){return u-jQuery.easing.easeOutBounce(n,a-e,0,u,a)+t},easeOutBounce:function(n,e,t,u,a){return(e/=a)<1/2.75?u*(7.5625*e*e)+t:e<2/2.75?u*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?u*(7.5625*(e-=2.25/2.75)*e+.9375)+t:u*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(n,e,t,u,a){return e<a/2?.5*jQuery.easing.easeInBounce(n,2*e,0,u,a)+t:.5*jQuery.easing.easeOutBounce(n,2*e-a,0,u,a)+.5*u+t}});



/*[PATH @digikala/supernova/node_modules/jquery-validation/dist/jquery.validate.min.js]*/
/*! jQuery Validation Plugin - v1.17.0 - 7/29/2017
 * https://jqueryvalidation.org/
 * Copyright (c) 2017 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.submitButton=b.currentTarget,a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return c.submitButton&&(c.settings.submitHandler||c.formSubmitted)&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),!c.settings.submitHandler||(e=c.settings.submitHandler.call(c,c.currentForm,b),d&&d.remove(),void 0!==e&&e)}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0];if(null!=j&&(!j.form&&j.hasAttribute("contenteditable")&&(j.form=this.closest("form")[0],j.name=this.attr("name")),null!=j.form)){if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(a,b){i[b]=f[b],delete f[b]}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g)),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}}),a.extend(a.expr.pseudos||a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){var c=a(b).val();return null!==c&&!!a.trim(""+c)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||a.inArray(c.keyCode,d)!==-1||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){!this.form&&this.hasAttribute("contenteditable")&&(this.form=a(this).closest("form")[0],this.name=a(this).attr("name"));var c=a.data(this.form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!a(this).is(e.ignore)&&e[d].call(c,this,b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=g.check(e)&&h))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)void 0!==a[b]&&null!==a[b]&&a[b]!==!1&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.hasAttribute("contenteditable")&&(this.form=a(this).closest("form")[0],this.name=d),!(d in c||!b.objectLength(a(this).rules()))&&(c[d]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type;return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=b.hasAttribute("contenteditable")?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f,g=a(b).rules(),h=a.map(g,function(a,b){return b}).length,i=!1,j=this.elementValue(b);if("function"==typeof g.normalizer?f=g.normalizer:"function"==typeof this.settings.normalizer&&(f=this.settings.normalizer),f){if(j=f.call(b,j),"string"!=typeof j)throw new TypeError("The normalizer should return a string value.");delete g.normalizer}for(d in g){e={method:d,parameters:g[d]};try{if(c=a.validator.methods[d].call(this,j,b,e.parameters),"dependency-mismatch"===c&&1===h){i=!0;continue}if(i=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(k){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",k),k instanceof TypeError&&(k.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),k}}if(!i)return this.objectLength(g)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){"string"==typeof c&&(c={method:c});var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement.call(this,d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return!this.dependTypes[typeof a]||this.dependTypes[typeof a](a,b)},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.submitButton&&a("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b,c){return c="string"==typeof c&&c||"remote",a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0===e.param||e.param:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(d,e){b[d]=a.isFunction(e)&&"normalizer"!==d?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)},date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e<=d},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e,f=a(c).attr("type"),g="Step attribute on input type "+f+" is not supported.",h=["text","number","range"],i=new RegExp("\\b"+f+"\\b"),j=f&&!i.test(h.join()),k=function(a){var b=(""+a).match(/(?:\.(\d+))?$/);return b&&b[1]?b[1].length:0},l=function(a){return Math.round(a*Math.pow(10,e))},m=!0;if(j)throw new Error(g);return e=k(d),(k(b)>e||l(b)%l(d)!==0)&&(m=!1),this.optional(c)||m},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var b,c={};return a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)}),a});


/*[PATH @digikala/supernova/node_modules/jquery-validation/dist/additional-methods.js]*/
/*!
 * jQuery Validation Plugin v1.17.0
 *
 * https://jqueryvalidation.org/
 *
 * Copyright (c) 2017 Jörn Zaefferer
 * Released under the MIT license
 */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery", "./jquery.validate"], factory );
	} else if (typeof module === "object" && module.exports) {
		module.exports = factory( require( "jquery" ) );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

( function() {

	function stripHtml( value ) {

		// Remove html tags and space chars
		return value.replace( /<.[^<>]*?>/g, " " ).replace( /&nbsp;|&#160;/gi, " " )

		// Remove punctuation
		.replace( /[.(),;:!?%#$'\"_+=\/\-“”’]*/g, "" );
	}

	$.validator.addMethod( "maxWords", function( value, element, params ) {
		return this.optional( element ) || stripHtml( value ).match( /\b\w+\b/g ).length <= params;
	}, $.validator.format( "Please enter {0} words or less." ) );

	$.validator.addMethod( "minWords", function( value, element, params ) {
		return this.optional( element ) || stripHtml( value ).match( /\b\w+\b/g ).length >= params;
	}, $.validator.format( "Please enter at least {0} words." ) );

	$.validator.addMethod( "rangeWords", function( value, element, params ) {
		var valueStripped = stripHtml( value ),
			regex = /\b\w+\b/g;
		return this.optional( element ) || valueStripped.match( regex ).length >= params[ 0 ] && valueStripped.match( regex ).length <= params[ 1 ];
	}, $.validator.format( "Please enter between {0} and {1} words." ) );

}() );

// Accept a value from a file input based on a required mimetype
$.validator.addMethod( "accept", function( value, element, param ) {

	// Split mime on commas in case we have multiple types we can accept
	var typeParam = typeof param === "string" ? param.replace( /\s/g, "" ) : "image/*",
		optionalValue = this.optional( element ),
		i, file, regex;

	// Element is optional
	if ( optionalValue ) {
		return optionalValue;
	}

	if ( $( element ).attr( "type" ) === "file" ) {

		// Escape string to be used in the regex
		// see: https://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
		// Escape also "/*" as "/.*" as a wildcard
		typeParam = typeParam
				.replace( /[\-\[\]\/\{\}\(\)\+\?\.\\\^\$\|]/g, "\\$&" )
				.replace( /,/g, "|" )
				.replace( /\/\*/g, "/.*" );

		// Check if the element has a FileList before checking each file
		if ( element.files && element.files.length ) {
			regex = new RegExp( ".?(" + typeParam + ")$", "i" );
			for ( i = 0; i < element.files.length; i++ ) {
				file = element.files[ i ];

				// Grab the mimetype from the loaded file, verify it matches
				if ( !file.type.match( regex ) ) {
					return false;
				}
			}
		}
	}

	// Either return true because we've validated each file, or because the
	// browser does not support element.files and the FileList feature
	return true;
}, $.validator.format( "Please enter a value with a valid mimetype." ) );

$.validator.addMethod( "alphanumeric", function( value, element ) {
	return this.optional( element ) || /^\w+$/i.test( value );
}, "Letters, numbers, and underscores only please" );

/*
 * Dutch bank account numbers (not 'giro' numbers) have 9 digits
 * and pass the '11 check'.
 * We accept the notation with spaces, as that is common.
 * acceptable: 123456789 or 12 34 56 789
 */
$.validator.addMethod( "bankaccountNL", function( value, element ) {
	if ( this.optional( element ) ) {
		return true;
	}
	if ( !( /^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test( value ) ) ) {
		return false;
	}

	// Now '11 check'
	var account = value.replace( / /g, "" ), // Remove spaces
		sum = 0,
		len = account.length,
		pos, factor, digit;
	for ( pos = 0; pos < len; pos++ ) {
		factor = len - pos;
		digit = account.substring( pos, pos + 1 );
		sum = sum + factor * digit;
	}
	return sum % 11 === 0;
}, "Please specify a valid bank account number" );

$.validator.addMethod( "bankorgiroaccountNL", function( value, element ) {
	return this.optional( element ) ||
			( $.validator.methods.bankaccountNL.call( this, value, element ) ) ||
			( $.validator.methods.giroaccountNL.call( this, value, element ) );
}, "Please specify a valid bank or giro account number" );

/**
 * BIC is the business identifier code (ISO 9362). This BIC check is not a guarantee for authenticity.
 *
 * BIC pattern: BBBBCCLLbbb (8 or 11 characters long; bbb is optional)
 *
 * Validation is case-insensitive. Please make sure to normalize input yourself.
 *
 * BIC definition in detail:
 * - First 4 characters - bank code (only letters)
 * - Next 2 characters - ISO 3166-1 alpha-2 country code (only letters)
 * - Next 2 characters - location code (letters and digits)
 *   a. shall not start with '0' or '1'
 *   b. second character must be a letter ('O' is not allowed) or digit ('0' for test (therefore not allowed), '1' denoting passive participant, '2' typically reverse-billing)
 * - Last 3 characters - branch code, optional (shall not start with 'X' except in case of 'XXX' for primary office) (letters and digits)
 */
$.validator.addMethod( "bic", function( value, element ) {
    return this.optional( element ) || /^([A-Z]{6}[A-Z2-9][A-NP-Z1-9])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test( value.toUpperCase() );
}, "Please specify a valid BIC code" );

/*
 * Código de identificación fiscal ( CIF ) is the tax identification code for Spanish legal entities
 * Further rules can be found in Spanish on http://es.wikipedia.org/wiki/C%C3%B3digo_de_identificaci%C3%B3n_fiscal
 *
 * Spanish CIF structure:
 *
 * [ T ][ P ][ P ][ N ][ N ][ N ][ N ][ N ][ C ]
 *
 * Where:
 *
 * T: 1 character. Kind of Organization Letter: [ABCDEFGHJKLMNPQRSUVW]
 * P: 2 characters. Province.
 * N: 5 characters. Secuencial Number within the province.
 * C: 1 character. Control Digit: [0-9A-J].
 *
 * [ T ]: Kind of Organizations. Possible values:
 *
 *   A. Corporations
 *   B. LLCs
 *   C. General partnerships
 *   D. Companies limited partnerships
 *   E. Communities of goods
 *   F. Cooperative Societies
 *   G. Associations
 *   H. Communities of homeowners in horizontal property regime
 *   J. Civil Societies
 *   K. Old format
 *   L. Old format
 *   M. Old format
 *   N. Nonresident entities
 *   P. Local authorities
 *   Q. Autonomous bodies, state or not, and the like, and congregations and religious institutions
 *   R. Congregations and religious institutions (since 2008 ORDER EHA/451/2008)
 *   S. Organs of State Administration and regions
 *   V. Agrarian Transformation
 *   W. Permanent establishments of non-resident in Spain
 *
 * [ C ]: Control Digit. It can be a number or a letter depending on T value:
 * [ T ]  -->  [ C ]
 * ------    ----------
 *   A         Number
 *   B         Number
 *   E         Number
 *   H         Number
 *   K         Letter
 *   P         Letter
 *   Q         Letter
 *   S         Letter
 *
 */
$.validator.addMethod( "cifES", function( value, element ) {
	"use strict";

	if ( this.optional( element ) ) {
		return true;
	}

	var cifRegEx = new RegExp( /^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/gi );
	var letter  = value.substring( 0, 1 ), // [ T ]
		number  = value.substring( 1, 8 ), // [ P ][ P ][ N ][ N ][ N ][ N ][ N ]
		control = value.substring( 8, 9 ), // [ C ]
		all_sum = 0,
		even_sum = 0,
		odd_sum = 0,
		i, n,
		control_digit,
		control_letter;

	function isOdd( n ) {
		return n % 2 === 0;
	}

	// Quick format test
	if ( value.length !== 9 || !cifRegEx.test( value ) ) {
		return false;
	}

	for ( i = 0; i < number.length; i++ ) {
		n = parseInt( number[ i ], 10 );

		// Odd positions
		if ( isOdd( i ) ) {

			// Odd positions are multiplied first.
			n *= 2;

			// If the multiplication is bigger than 10 we need to adjust
			odd_sum += n < 10 ? n : n - 9;

		// Even positions
		// Just sum them
		} else {
			even_sum += n;
		}
	}

	all_sum = even_sum + odd_sum;
	control_digit = ( 10 - ( all_sum ).toString().substr( -1 ) ).toString();
	control_digit = parseInt( control_digit, 10 ) > 9 ? "0" : control_digit;
	control_letter = "JABCDEFGHI".substr( control_digit, 1 ).toString();

	// Control must be a digit
	if ( letter.match( /[ABEH]/ ) ) {
		return control === control_digit;

	// Control must be a letter
	} else if ( letter.match( /[KPQS]/ ) ) {
		return control === control_letter;
	}

	// Can be either
	return control === control_digit || control === control_letter;

}, "Please specify a valid CIF number." );

/*
 * Brazillian CPF number (Cadastrado de Pessoas Físicas) is the equivalent of a Brazilian tax registration number.
 * CPF numbers have 11 digits in total: 9 numbers followed by 2 check numbers that are being used for validation.
 */
$.validator.addMethod( "cpfBR", function( value ) {

	// Removing special characters from value
	value = value.replace( /([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g, "" );

	// Checking value to have 11 digits only
	if ( value.length !== 11 ) {
		return false;
	}

	var sum = 0,
		firstCN, secondCN, checkResult, i;

	firstCN = parseInt( value.substring( 9, 10 ), 10 );
	secondCN = parseInt( value.substring( 10, 11 ), 10 );

	checkResult = function( sum, cn ) {
		var result = ( sum * 10 ) % 11;
		if ( ( result === 10 ) || ( result === 11 ) ) {
			result = 0;
		}
		return ( result === cn );
	};

	// Checking for dump data
	if ( value === "" ||
		value === "00000000000" ||
		value === "11111111111" ||
		value === "22222222222" ||
		value === "33333333333" ||
		value === "44444444444" ||
		value === "55555555555" ||
		value === "66666666666" ||
		value === "77777777777" ||
		value === "88888888888" ||
		value === "99999999999"
	) {
		return false;
	}

	// Step 1 - using first Check Number:
	for ( i = 1; i <= 9; i++ ) {
		sum = sum + parseInt( value.substring( i - 1, i ), 10 ) * ( 11 - i );
	}

	// If first Check Number (CN) is valid, move to Step 2 - using second Check Number:
	if ( checkResult( sum, firstCN ) ) {
		sum = 0;
		for ( i = 1; i <= 10; i++ ) {
			sum = sum + parseInt( value.substring( i - 1, i ), 10 ) * ( 12 - i );
		}
		return checkResult( sum, secondCN );
	}
	return false;

}, "Please specify a valid CPF number" );

// https://jqueryvalidation.org/creditcard-method/
// based on https://en.wikipedia.org/wiki/Luhn_algorithm
$.validator.addMethod( "creditcard", function( value, element ) {
	if ( this.optional( element ) ) {
		return "dependency-mismatch";
	}

	// Accept only spaces, digits and dashes
	if ( /[^0-9 \-]+/.test( value ) ) {
		return false;
	}

	var nCheck = 0,
		nDigit = 0,
		bEven = false,
		n, cDigit;

	value = value.replace( /\D/g, "" );

	// Basing min and max length on
	// https://developer.ean.com/general_info/Valid_Credit_Card_Types
	if ( value.length < 13 || value.length > 19 ) {
		return false;
	}

	for ( n = value.length - 1; n >= 0; n-- ) {
		cDigit = value.charAt( n );
		nDigit = parseInt( cDigit, 10 );
		if ( bEven ) {
			if ( ( nDigit *= 2 ) > 9 ) {
				nDigit -= 9;
			}
		}

		nCheck += nDigit;
		bEven = !bEven;
	}

	return ( nCheck % 10 ) === 0;
}, "Please enter a valid credit card number." );

/* NOTICE: Modified version of Castle.Components.Validator.CreditCardValidator
 * Redistributed under the the Apache License 2.0 at http://www.apache.org/licenses/LICENSE-2.0
 * Valid Types: mastercard, visa, amex, dinersclub, enroute, discover, jcb, unknown, all (overrides all other settings)
 */
$.validator.addMethod( "creditcardtypes", function( value, element, param ) {
	if ( /[^0-9\-]+/.test( value ) ) {
		return false;
	}

	value = value.replace( /\D/g, "" );

	var validTypes = 0x0000;

	if ( param.mastercard ) {
		validTypes |= 0x0001;
	}
	if ( param.visa ) {
		validTypes |= 0x0002;
	}
	if ( param.amex ) {
		validTypes |= 0x0004;
	}
	if ( param.dinersclub ) {
		validTypes |= 0x0008;
	}
	if ( param.enroute ) {
		validTypes |= 0x0010;
	}
	if ( param.discover ) {
		validTypes |= 0x0020;
	}
	if ( param.jcb ) {
		validTypes |= 0x0040;
	}
	if ( param.unknown ) {
		validTypes |= 0x0080;
	}
	if ( param.all ) {
		validTypes = 0x0001 | 0x0002 | 0x0004 | 0x0008 | 0x0010 | 0x0020 | 0x0040 | 0x0080;
	}
	if ( validTypes & 0x0001 && /^(5[12345])/.test( value ) ) { // Mastercard
		return value.length === 16;
	}
	if ( validTypes & 0x0002 && /^(4)/.test( value ) ) { // Visa
		return value.length === 16;
	}
	if ( validTypes & 0x0004 && /^(3[47])/.test( value ) ) { // Amex
		return value.length === 15;
	}
	if ( validTypes & 0x0008 && /^(3(0[012345]|[68]))/.test( value ) ) { // Dinersclub
		return value.length === 14;
	}
	if ( validTypes & 0x0010 && /^(2(014|149))/.test( value ) ) { // Enroute
		return value.length === 15;
	}
	if ( validTypes & 0x0020 && /^(6011)/.test( value ) ) { // Discover
		return value.length === 16;
	}
	if ( validTypes & 0x0040 && /^(3)/.test( value ) ) { // Jcb
		return value.length === 16;
	}
	if ( validTypes & 0x0040 && /^(2131|1800)/.test( value ) ) { // Jcb
		return value.length === 15;
	}
	if ( validTypes & 0x0080 ) { // Unknown
		return true;
	}
	return false;
}, "Please enter a valid credit card number." );

/**
 * Validates currencies with any given symbols by @jameslouiz
 * Symbols can be optional or required. Symbols required by default
 *
 * Usage examples:
 *  currency: ["£", false] - Use false for soft currency validation
 *  currency: ["$", false]
 *  currency: ["RM", false] - also works with text based symbols such as "RM" - Malaysia Ringgit etc
 *
 *  <input class="currencyInput" name="currencyInput">
 *
 * Soft symbol checking
 *  currencyInput: {
 *     currency: ["$", false]
 *  }
 *
 * Strict symbol checking (default)
 *  currencyInput: {
 *     currency: "$"
 *     //OR
 *     currency: ["$", true]
 *  }
 *
 * Multiple Symbols
 *  currencyInput: {
 *     currency: "$,£,¢"
 *  }
 */
$.validator.addMethod( "currency", function( value, element, param ) {
    var isParamString = typeof param === "string",
        symbol = isParamString ? param : param[ 0 ],
        soft = isParamString ? true : param[ 1 ],
        regex;

    symbol = symbol.replace( /,/g, "" );
    symbol = soft ? symbol + "]" : symbol + "]?";
    regex = "^[" + symbol + "([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$";
    regex = new RegExp( regex );
    return this.optional( element ) || regex.test( value );

}, "Please specify a valid currency" );

$.validator.addMethod( "dateFA", function( value, element ) {
	return this.optional( element ) || /^[1-4]\d{3}\/((0?[1-6]\/((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?[1-9]))))$/.test( value );
}, $.validator.messages.date );

/**
 * Return true, if the value is a valid date, also making this formal check dd/mm/yyyy.
 *
 * @example $.validator.methods.date("01/01/1900")
 * @result true
 *
 * @example $.validator.methods.date("01/13/1990")
 * @result false
 *
 * @example $.validator.methods.date("01.01.1900")
 * @result false
 *
 * @example <input name="pippo" class="{dateITA:true}" />
 * @desc Declares an optional input element whose value must be a valid date.
 *
 * @name $.validator.methods.dateITA
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */
$.validator.addMethod( "dateITA", function( value, element ) {
	var check = false,
		re = /^\d{1,2}\/\d{1,2}\/\d{4}$/,
		adata, gg, mm, aaaa, xdata;
	if ( re.test( value ) ) {
		adata = value.split( "/" );
		gg = parseInt( adata[ 0 ], 10 );
		mm = parseInt( adata[ 1 ], 10 );
		aaaa = parseInt( adata[ 2 ], 10 );
		xdata = new Date( Date.UTC( aaaa, mm - 1, gg, 12, 0, 0, 0 ) );
		if ( ( xdata.getUTCFullYear() === aaaa ) && ( xdata.getUTCMonth() === mm - 1 ) && ( xdata.getUTCDate() === gg ) ) {
			check = true;
		} else {
			check = false;
		}
	} else {
		check = false;
	}
	return this.optional( element ) || check;
}, $.validator.messages.date );

$.validator.addMethod( "dateNL", function( value, element ) {
	return this.optional( element ) || /^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test( value );
}, $.validator.messages.date );

// Older "accept" file extension method. Old docs: http://docs.jquery.com/Plugins/Validation/Methods/accept
$.validator.addMethod( "extension", function( value, element, param ) {
	param = typeof param === "string" ? param.replace( /,/g, "|" ) : "png|jpe?g|gif";
	return this.optional( element ) || value.match( new RegExp( "\\.(" + param + ")$", "i" ) );
}, $.validator.format( "Please enter a value with a valid extension." ) );

/**
 * Dutch giro account numbers (not bank numbers) have max 7 digits
 */
$.validator.addMethod( "giroaccountNL", function( value, element ) {
	return this.optional( element ) || /^[0-9]{1,7}$/.test( value );
}, "Please specify a valid giro account number" );

/**
 * IBAN is the international bank account number.
 * It has a country - specific format, that is checked here too
 *
 * Validation is case-insensitive. Please make sure to normalize input yourself.
 */
$.validator.addMethod( "iban", function( value, element ) {

	// Some quick simple tests to prevent needless work
	if ( this.optional( element ) ) {
		return true;
	}

	// Remove spaces and to upper case
	var iban = value.replace( / /g, "" ).toUpperCase(),
		ibancheckdigits = "",
		leadingZeroes = true,
		cRest = "",
		cOperator = "",
		countrycode, ibancheck, charAt, cChar, bbanpattern, bbancountrypatterns, ibanregexp, i, p;

	// Check for IBAN code length.
	// It contains:
	// country code ISO 3166-1 - two letters,
	// two check digits,
	// Basic Bank Account Number (BBAN) - up to 30 chars
	var minimalIBANlength = 5;
	if ( iban.length < minimalIBANlength ) {
		return false;
	}

	// Check the country code and find the country specific format
	countrycode = iban.substring( 0, 2 );
	bbancountrypatterns = {
		"AL": "\\d{8}[\\dA-Z]{16}",
		"AD": "\\d{8}[\\dA-Z]{12}",
		"AT": "\\d{16}",
		"AZ": "[\\dA-Z]{4}\\d{20}",
		"BE": "\\d{12}",
		"BH": "[A-Z]{4}[\\dA-Z]{14}",
		"BA": "\\d{16}",
		"BR": "\\d{23}[A-Z][\\dA-Z]",
		"BG": "[A-Z]{4}\\d{6}[\\dA-Z]{8}",
		"CR": "\\d{17}",
		"HR": "\\d{17}",
		"CY": "\\d{8}[\\dA-Z]{16}",
		"CZ": "\\d{20}",
		"DK": "\\d{14}",
		"DO": "[A-Z]{4}\\d{20}",
		"EE": "\\d{16}",
		"FO": "\\d{14}",
		"FI": "\\d{14}",
		"FR": "\\d{10}[\\dA-Z]{11}\\d{2}",
		"GE": "[\\dA-Z]{2}\\d{16}",
		"DE": "\\d{18}",
		"GI": "[A-Z]{4}[\\dA-Z]{15}",
		"GR": "\\d{7}[\\dA-Z]{16}",
		"GL": "\\d{14}",
		"GT": "[\\dA-Z]{4}[\\dA-Z]{20}",
		"HU": "\\d{24}",
		"IS": "\\d{22}",
		"IE": "[\\dA-Z]{4}\\d{14}",
		"IL": "\\d{19}",
		"IT": "[A-Z]\\d{10}[\\dA-Z]{12}",
		"KZ": "\\d{3}[\\dA-Z]{13}",
		"KW": "[A-Z]{4}[\\dA-Z]{22}",
		"LV": "[A-Z]{4}[\\dA-Z]{13}",
		"LB": "\\d{4}[\\dA-Z]{20}",
		"LI": "\\d{5}[\\dA-Z]{12}",
		"LT": "\\d{16}",
		"LU": "\\d{3}[\\dA-Z]{13}",
		"MK": "\\d{3}[\\dA-Z]{10}\\d{2}",
		"MT": "[A-Z]{4}\\d{5}[\\dA-Z]{18}",
		"MR": "\\d{23}",
		"MU": "[A-Z]{4}\\d{19}[A-Z]{3}",
		"MC": "\\d{10}[\\dA-Z]{11}\\d{2}",
		"MD": "[\\dA-Z]{2}\\d{18}",
		"ME": "\\d{18}",
		"NL": "[A-Z]{4}\\d{10}",
		"NO": "\\d{11}",
		"PK": "[\\dA-Z]{4}\\d{16}",
		"PS": "[\\dA-Z]{4}\\d{21}",
		"PL": "\\d{24}",
		"PT": "\\d{21}",
		"RO": "[A-Z]{4}[\\dA-Z]{16}",
		"SM": "[A-Z]\\d{10}[\\dA-Z]{12}",
		"SA": "\\d{2}[\\dA-Z]{18}",
		"RS": "\\d{18}",
		"SK": "\\d{20}",
		"SI": "\\d{15}",
		"ES": "\\d{20}",
		"SE": "\\d{20}",
		"CH": "\\d{5}[\\dA-Z]{12}",
		"TN": "\\d{20}",
		"TR": "\\d{5}[\\dA-Z]{17}",
		"AE": "\\d{3}\\d{16}",
		"GB": "[A-Z]{4}\\d{14}",
		"VG": "[\\dA-Z]{4}\\d{16}"
	};

	bbanpattern = bbancountrypatterns[ countrycode ];

	// As new countries will start using IBAN in the
	// future, we only check if the countrycode is known.
	// This prevents false negatives, while almost all
	// false positives introduced by this, will be caught
	// by the checksum validation below anyway.
	// Strict checking should return FALSE for unknown
	// countries.
	if ( typeof bbanpattern !== "undefined" ) {
		ibanregexp = new RegExp( "^[A-Z]{2}\\d{2}" + bbanpattern + "$", "" );
		if ( !( ibanregexp.test( iban ) ) ) {
			return false; // Invalid country specific format
		}
	}

	// Now check the checksum, first convert to digits
	ibancheck = iban.substring( 4, iban.length ) + iban.substring( 0, 4 );
	for ( i = 0; i < ibancheck.length; i++ ) {
		charAt = ibancheck.charAt( i );
		if ( charAt !== "0" ) {
			leadingZeroes = false;
		}
		if ( !leadingZeroes ) {
			ibancheckdigits += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf( charAt );
		}
	}

	// Calculate the result of: ibancheckdigits % 97
	for ( p = 0; p < ibancheckdigits.length; p++ ) {
		cChar = ibancheckdigits.charAt( p );
		cOperator = "" + cRest + "" + cChar;
		cRest = cOperator % 97;
	}
	return cRest === 1;
}, "Please specify a valid IBAN" );

$.validator.addMethod( "integer", function( value, element ) {
	return this.optional( element ) || /^-?\d+$/.test( value );
}, "A positive or negative non-decimal number please" );

$.validator.addMethod( "ipv4", function( value, element ) {
	return this.optional( element ) || /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test( value );
}, "Please enter a valid IP v4 address." );

$.validator.addMethod( "ipv6", function( value, element ) {
	return this.optional( element ) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test( value );
}, "Please enter a valid IP v6 address." );

$.validator.addMethod( "lettersonly", function( value, element ) {
	return this.optional( element ) || /^[a-z]+$/i.test( value );
}, "Letters only please" );

$.validator.addMethod( "letterswithbasicpunc", function( value, element ) {
	return this.optional( element ) || /^[a-z\-.,()'"\s]+$/i.test( value );
}, "Letters or punctuation only please" );

$.validator.addMethod( "mobileNL", function( value, element ) {
	return this.optional( element ) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test( value );
}, "Please specify a valid mobile number" );

/* For UK phone functions, do the following server side processing:
 * Compare original input with this RegEx pattern:
 * ^\(?(?:(?:00\)?[\s\-]?\(?|\+)(44)\)?[\s\-]?\(?(?:0\)?[\s\-]?\(?)?|0)([1-9]\d{1,4}\)?[\s\d\-]+)$
 * Extract $1 and set $prefix to '+44<space>' if $1 is '44', otherwise set $prefix to '0'
 * Extract $2 and remove hyphens, spaces and parentheses. Phone number is combined $prefix and $2.
 * A number of very detailed GB telephone number RegEx patterns can also be found at:
 * http://www.aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers
 */
$.validator.addMethod( "mobileUK", function( phone_number, element ) {
	phone_number = phone_number.replace( /\(|\)|\s+|-/g, "" );
	return this.optional( element ) || phone_number.length > 9 &&
		phone_number.match( /^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/ );
}, "Please specify a valid mobile number" );

$.validator.addMethod( "netmask", function( value, element ) {
    return this.optional( element ) || /^(254|252|248|240|224|192|128)\.0\.0\.0|255\.(254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(254|252|248|240|224|192|128|0)/i.test( value );
}, "Please enter a valid netmask." );

/*
 * The NIE (Número de Identificación de Extranjero) is a Spanish tax identification number assigned by the Spanish
 * authorities to any foreigner.
 *
 * The NIE is the equivalent of a Spaniards Número de Identificación Fiscal (NIF) which serves as a fiscal
 * identification number. The CIF number (Certificado de Identificación Fiscal) is equivalent to the NIF, but applies to
 * companies rather than individuals. The NIE consists of an 'X' or 'Y' followed by 7 or 8 digits then another letter.
 */
$.validator.addMethod( "nieES", function( value, element ) {
	"use strict";

	if ( this.optional( element ) ) {
		return true;
	}

	var nieRegEx = new RegExp( /^[MXYZ]{1}[0-9]{7,8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/gi );
	var validChars = "TRWAGMYFPDXBNJZSQVHLCKET",
		letter = value.substr( value.length - 1 ).toUpperCase(),
		number;

	value = value.toString().toUpperCase();

	// Quick format test
	if ( value.length > 10 || value.length < 9 || !nieRegEx.test( value ) ) {
		return false;
	}

	// X means same number
	// Y means number + 10000000
	// Z means number + 20000000
	value = value.replace( /^[X]/, "0" )
		.replace( /^[Y]/, "1" )
		.replace( /^[Z]/, "2" );

	number = value.length === 9 ? value.substr( 0, 8 ) : value.substr( 0, 9 );

	return validChars.charAt( parseInt( number, 10 ) % 23 ) === letter;

}, "Please specify a valid NIE number." );

/*
 * The Número de Identificación Fiscal ( NIF ) is the way tax identification used in Spain for individuals
 */
$.validator.addMethod( "nifES", function( value, element ) {
	"use strict";

	if ( this.optional( element ) ) {
		return true;
	}

	value = value.toUpperCase();

	// Basic format test
	if ( !value.match( "((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)" ) ) {
		return false;
	}

	// Test NIF
	if ( /^[0-9]{8}[A-Z]{1}$/.test( value ) ) {
		return ( "TRWAGMYFPDXBNJZSQVHLCKE".charAt( value.substring( 8, 0 ) % 23 ) === value.charAt( 8 ) );
	}

	// Test specials NIF (starts with K, L or M)
	if ( /^[KLM]{1}/.test( value ) ) {
		return ( value[ 8 ] === "TRWAGMYFPDXBNJZSQVHLCKE".charAt( value.substring( 8, 1 ) % 23 ) );
	}

	return false;

}, "Please specify a valid NIF number." );

/*
 * Numer identyfikacji podatkowej ( NIP ) is the way tax identification used in Poland for companies
 */
$.validator.addMethod( "nipPL", function( value ) {
	"use strict";

	value = value.replace( /[^0-9]/g, "" );

	if ( value.length !== 10 ) {
		return false;
	}

	var arrSteps = [ 6, 5, 7, 2, 3, 4, 5, 6, 7 ];
	var intSum = 0;
	for ( var i = 0; i < 9; i++ ) {
		intSum += arrSteps[ i ] * value[ i ];
	}
	var int2 = intSum % 11;
	var intControlNr = ( int2 === 10 ) ? 0 : int2;

	return ( intControlNr === parseInt( value[ 9 ], 10 ) );
}, "Please specify a valid NIP number." );

$.validator.addMethod( "notEqualTo", function( value, element, param ) {
	return this.optional( element ) || !$.validator.methods.equalTo.call( this, value, element, param );
}, "Please enter a different value, values must not be the same." );

$.validator.addMethod( "nowhitespace", function( value, element ) {
	return this.optional( element ) || /^\S+$/i.test( value );
}, "No white space please" );

/**
* Return true if the field value matches the given format RegExp
*
* @example $.validator.methods.pattern("AR1004",element,/^AR\d{4}$/)
* @result true
*
* @example $.validator.methods.pattern("BR1004",element,/^AR\d{4}$/)
* @result false
*
* @name $.validator.methods.pattern
* @type Boolean
* @cat Plugins/Validate/Methods
*/
$.validator.addMethod( "pattern", function( value, element, param ) {
	if ( this.optional( element ) ) {
		return true;
	}
	if ( typeof param === "string" ) {
		param = new RegExp( "^(?:" + param + ")$" );
	}
	return param.test( value );
}, "Invalid format." );

/**
 * Dutch phone numbers have 10 digits (or 11 and start with +31).
 */
$.validator.addMethod( "phoneNL", function( value, element ) {
	return this.optional( element ) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test( value );
}, "Please specify a valid phone number." );

/* For UK phone functions, do the following server side processing:
 * Compare original input with this RegEx pattern:
 * ^\(?(?:(?:00\)?[\s\-]?\(?|\+)(44)\)?[\s\-]?\(?(?:0\)?[\s\-]?\(?)?|0)([1-9]\d{1,4}\)?[\s\d\-]+)$
 * Extract $1 and set $prefix to '+44<space>' if $1 is '44', otherwise set $prefix to '0'
 * Extract $2 and remove hyphens, spaces and parentheses. Phone number is combined $prefix and $2.
 * A number of very detailed GB telephone number RegEx patterns can also be found at:
 * http://www.aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers
 */

// Matches UK landline + mobile, accepting only 01-3 for landline or 07 for mobile to exclude many premium numbers
$.validator.addMethod( "phonesUK", function( phone_number, element ) {
	phone_number = phone_number.replace( /\(|\)|\s+|-/g, "" );
	return this.optional( element ) || phone_number.length > 9 &&
		phone_number.match( /^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/ );
}, "Please specify a valid uk phone number" );

/* For UK phone functions, do the following server side processing:
 * Compare original input with this RegEx pattern:
 * ^\(?(?:(?:00\)?[\s\-]?\(?|\+)(44)\)?[\s\-]?\(?(?:0\)?[\s\-]?\(?)?|0)([1-9]\d{1,4}\)?[\s\d\-]+)$
 * Extract $1 and set $prefix to '+44<space>' if $1 is '44', otherwise set $prefix to '0'
 * Extract $2 and remove hyphens, spaces and parentheses. Phone number is combined $prefix and $2.
 * A number of very detailed GB telephone number RegEx patterns can also be found at:
 * http://www.aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers
 */
$.validator.addMethod( "phoneUK", function( phone_number, element ) {
	phone_number = phone_number.replace( /\(|\)|\s+|-/g, "" );
	return this.optional( element ) || phone_number.length > 9 &&
		phone_number.match( /^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/ );
}, "Please specify a valid phone number" );

/**
 * Matches US phone number format
 *
 * where the area code may not start with 1 and the prefix may not start with 1
 * allows '-' or ' ' as a separator and allows parens around area code
 * some people may want to put a '1' in front of their number
 *
 * 1(212)-999-2345 or
 * 212 999 2344 or
 * 212-999-0983
 *
 * but not
 * 111-123-5434
 * and not
 * 212 123 4567
 */
$.validator.addMethod( "phoneUS", function( phone_number, element ) {
	phone_number = phone_number.replace( /\s+/g, "" );
	return this.optional( element ) || phone_number.length > 9 &&
		phone_number.match( /^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]([02-9]\d|1[02-9])-?\d{4}$/ );
}, "Please specify a valid phone number" );

/*
* Valida CEPs do brasileiros:
*
* Formatos aceitos:
* 99999-999
* 99.999-999
* 99999999
*/
$.validator.addMethod( "postalcodeBR", function( cep_value, element ) {
	return this.optional( element ) || /^\d{2}.\d{3}-\d{3}?$|^\d{5}-?\d{3}?$/.test( cep_value );
}, "Informe um CEP válido." );

/**
 * Matches a valid Canadian Postal Code
 *
 * @example jQuery.validator.methods.postalCodeCA( "H0H 0H0", element )
 * @result true
 *
 * @example jQuery.validator.methods.postalCodeCA( "H0H0H0", element )
 * @result false
 *
 * @name jQuery.validator.methods.postalCodeCA
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */
$.validator.addMethod( "postalCodeCA", function( value, element ) {
	return this.optional( element ) || /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ] *\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i.test( value );
}, "Please specify a valid postal code" );

/* Matches Italian postcode (CAP) */
$.validator.addMethod( "postalcodeIT", function( value, element ) {
	return this.optional( element ) || /^\d{5}$/.test( value );
}, "Please specify a valid postal code" );

$.validator.addMethod( "postalcodeNL", function( value, element ) {
	return this.optional( element ) || /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test( value );
}, "Please specify a valid postal code" );

// Matches UK postcode. Does not match to UK Channel Islands that have their own postcodes (non standard UK)
$.validator.addMethod( "postcodeUK", function( value, element ) {
	return this.optional( element ) || /^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test( value );
}, "Please specify a valid UK postcode" );

/*
 * Lets you say "at least X inputs that match selector Y must be filled."
 *
 * The end result is that neither of these inputs:
 *
 *	<input class="productinfo" name="partnumber">
 *	<input class="productinfo" name="description">
 *
 *	...will validate unless at least one of them is filled.
 *
 * partnumber:	{require_from_group: [1,".productinfo"]},
 * description: {require_from_group: [1,".productinfo"]}
 *
 * options[0]: number of fields that must be filled in the group
 * options[1]: CSS selector that defines the group of conditionally required fields
 */
$.validator.addMethod( "require_from_group", function( value, element, options ) {
	var $fields = $( options[ 1 ], element.form ),
		$fieldsFirst = $fields.eq( 0 ),
		validator = $fieldsFirst.data( "valid_req_grp" ) ? $fieldsFirst.data( "valid_req_grp" ) : $.extend( {}, this ),
		isValid = $fields.filter( function() {
			return validator.elementValue( this );
		} ).length >= options[ 0 ];

	// Store the cloned validator for future validation
	$fieldsFirst.data( "valid_req_grp", validator );

	// If element isn't being validated, run each require_from_group field's validation rules
	if ( !$( element ).data( "being_validated" ) ) {
		$fields.data( "being_validated", true );
		$fields.each( function() {
			validator.element( this );
		} );
		$fields.data( "being_validated", false );
	}
	return isValid;
}, $.validator.format( "Please fill at least {0} of these fields." ) );

/*
 * Lets you say "either at least X inputs that match selector Y must be filled,
 * OR they must all be skipped (left blank)."
 *
 * The end result, is that none of these inputs:
 *
 *	<input class="productinfo" name="partnumber">
 *	<input class="productinfo" name="description">
 *	<input class="productinfo" name="color">
 *
 *	...will validate unless either at least two of them are filled,
 *	OR none of them are.
 *
 * partnumber:	{skip_or_fill_minimum: [2,".productinfo"]},
 * description: {skip_or_fill_minimum: [2,".productinfo"]},
 * color:		{skip_or_fill_minimum: [2,".productinfo"]}
 *
 * options[0]: number of fields that must be filled in the group
 * options[1]: CSS selector that defines the group of conditionally required fields
 *
 */
$.validator.addMethod( "skip_or_fill_minimum", function( value, element, options ) {
	var $fields = $( options[ 1 ], element.form ),
		$fieldsFirst = $fields.eq( 0 ),
		validator = $fieldsFirst.data( "valid_skip" ) ? $fieldsFirst.data( "valid_skip" ) : $.extend( {}, this ),
		numberFilled = $fields.filter( function() {
			return validator.elementValue( this );
		} ).length,
		isValid = numberFilled === 0 || numberFilled >= options[ 0 ];

	// Store the cloned validator for future validation
	$fieldsFirst.data( "valid_skip", validator );

	// If element isn't being validated, run each skip_or_fill_minimum field's validation rules
	if ( !$( element ).data( "being_validated" ) ) {
		$fields.data( "being_validated", true );
		$fields.each( function() {
			validator.element( this );
		} );
		$fields.data( "being_validated", false );
	}
	return isValid;
}, $.validator.format( "Please either skip these fields or fill at least {0} of them." ) );

/* Validates US States and/or Territories by @jdforsythe
 * Can be case insensitive or require capitalization - default is case insensitive
 * Can include US Territories or not - default does not
 * Can include US Military postal abbreviations (AA, AE, AP) - default does not
 *
 * Note: "States" always includes DC (District of Colombia)
 *
 * Usage examples:
 *
 *  This is the default - case insensitive, no territories, no military zones
 *  stateInput: {
 *     caseSensitive: false,
 *     includeTerritories: false,
 *     includeMilitary: false
 *  }
 *
 *  Only allow capital letters, no territories, no military zones
 *  stateInput: {
 *     caseSensitive: false
 *  }
 *
 *  Case insensitive, include territories but not military zones
 *  stateInput: {
 *     includeTerritories: true
 *  }
 *
 *  Only allow capital letters, include territories and military zones
 *  stateInput: {
 *     caseSensitive: true,
 *     includeTerritories: true,
 *     includeMilitary: true
 *  }
 *
 */
$.validator.addMethod( "stateUS", function( value, element, options ) {
	var isDefault = typeof options === "undefined",
		caseSensitive = ( isDefault || typeof options.caseSensitive === "undefined" ) ? false : options.caseSensitive,
		includeTerritories = ( isDefault || typeof options.includeTerritories === "undefined" ) ? false : options.includeTerritories,
		includeMilitary = ( isDefault || typeof options.includeMilitary === "undefined" ) ? false : options.includeMilitary,
		regex;

	if ( !includeTerritories && !includeMilitary ) {
		regex = "^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$";
	} else if ( includeTerritories && includeMilitary ) {
		regex = "^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$";
	} else if ( includeTerritories ) {
		regex = "^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$";
	} else {
		regex = "^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$";
	}

	regex = caseSensitive ? new RegExp( regex ) : new RegExp( regex, "i" );
	return this.optional( element ) || regex.test( value );
}, "Please specify a valid state" );

// TODO check if value starts with <, otherwise don't try stripping anything
$.validator.addMethod( "strippedminlength", function( value, element, param ) {
	return $( value ).text().length >= param;
}, $.validator.format( "Please enter at least {0} characters" ) );

$.validator.addMethod( "time", function( value, element ) {
	return this.optional( element ) || /^([01]\d|2[0-3]|[0-9])(:[0-5]\d){1,2}$/.test( value );
}, "Please enter a valid time, between 00:00 and 23:59" );

$.validator.addMethod( "time12h", function( value, element ) {
	return this.optional( element ) || /^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test( value );
}, "Please enter a valid time in 12-hour am/pm format" );

// Same as url, but TLD is optional
$.validator.addMethod( "url2", function( value, element ) {
	return this.optional( element ) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test( value );
}, $.validator.messages.url );

/**
 * Return true, if the value is a valid vehicle identification number (VIN).
 *
 * Works with all kind of text inputs.
 *
 * @example <input type="text" size="20" name="VehicleID" class="{required:true,vinUS:true}" />
 * @desc Declares a required input element whose value must be a valid vehicle identification number.
 *
 * @name $.validator.methods.vinUS
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */
$.validator.addMethod( "vinUS", function( v ) {
	if ( v.length !== 17 ) {
		return false;
	}

	var LL = [ "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ],
		VL = [ 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 7, 9, 2, 3, 4, 5, 6, 7, 8, 9 ],
		FL = [ 8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2 ],
		rs = 0,
		i, n, d, f, cd, cdv;

	for ( i = 0; i < 17; i++ ) {
		f = FL[ i ];
		d = v.slice( i, i + 1 );
		if ( i === 8 ) {
			cdv = d;
		}
		if ( !isNaN( d ) ) {
			d *= f;
		} else {
			for ( n = 0; n < LL.length; n++ ) {
				if ( d.toUpperCase() === LL[ n ] ) {
					d = VL[ n ];
					d *= f;
					if ( isNaN( cdv ) && n === 8 ) {
						cdv = LL[ n ];
					}
					break;
				}
			}
		}
		rs += d;
	}
	cd = rs % 11;
	if ( cd === 10 ) {
		cd = "X";
	}
	if ( cd === cdv ) {
		return true;
	}
	return false;
}, "The specified vehicle identification number (VIN) is invalid." );

$.validator.addMethod( "zipcodeUS", function( value, element ) {
	return this.optional( element ) || /^\d{5}(-\d{4})?$/.test( value );
}, "The specified US ZIP Code is invalid" );

$.validator.addMethod( "ziprange", function( value, element ) {
	return this.optional( element ) || /^90[2-5]\d\{2\}-\d{4}$/.test( value );
}, "Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx" );
return $;
}));


/*[PATH @digikala/supernova-digikala-desktop/node_modules/js-cookie/src/js.cookie.js]*/
/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (typeof define === 'function' && define.amd) {
		define(factory);
		registeredInModuleLoader = true;
	}
	if (typeof exports === 'object') {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				// We're using "expires" because "max-age" is not supported by IE
				attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				var stringifiedAttributes = '';

				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
					}
					stringifiedAttributes += '=' + attributes[attributeName];
				}
				return (document.cookie = key + '=' + value + stringifiedAttributes);
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!this.json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));



/*[PATH @digikala/supernova-digikala-desktop/assets/js/jquery.swiper.min.js]*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Swiper=t()}(this,function(){"use strict";var f="undefined"==typeof window?{navigator:{userAgent:""},location:{},history:{},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{}},Image:function(){},Date:function(){}}:window,l=function(e){for(var t=0;t<e.length;t+=1)this[t]=e[t];return this.length=e.length,this};function I(e,t){var a=[],i=0;if(e&&!t&&e instanceof l)return e;if(e)if("string"==typeof e){var s,r,n=e.trim();if(0<=n.indexOf("<")&&0<=n.indexOf(">")){var o="div";for(0===n.indexOf("<li")&&(o="ul"),0===n.indexOf("<tr")&&(o="tbody"),0!==n.indexOf("<td")&&0!==n.indexOf("<th")||(o="tr"),0===n.indexOf("<tbody")&&(o="table"),0===n.indexOf("<option")&&(o="select"),(r=document.createElement(o)).innerHTML=n,i=0;i<r.childNodes.length;i+=1)a.push(r.childNodes[i])}else for(s=t||"#"!==e[0]||e.match(/[ .<>:~]/)?(t||document).querySelectorAll(e.trim()):[document.getElementById(e.trim().split("#")[1])],i=0;i<s.length;i+=1)s[i]&&a.push(s[i])}else if(e.nodeType||e===window||e===document)a.push(e);else if(0<e.length&&e[0].nodeType)for(i=0;i<e.length;i+=1)a.push(e[i]);return new l(a)}function r(e){for(var t=[],a=0;a<e.length;a+=1)-1===t.indexOf(e[a])&&t.push(e[a]);return t}I.fn=l.prototype,I.Class=l,I.Dom7=l;"resize scroll".split(" ");var t={addClass:function(e){if(void 0===e)return this;for(var t=e.split(" "),a=0;a<t.length;a+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i].classList&&this[i].classList.add(t[a]);return this},removeClass:function(e){for(var t=e.split(" "),a=0;a<t.length;a+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i].classList&&this[i].classList.remove(t[a]);return this},hasClass:function(e){return!!this[0]&&this[0].classList.contains(e)},toggleClass:function(e){for(var t=e.split(" "),a=0;a<t.length;a+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i].classList&&this[i].classList.toggle(t[a]);return this},attr:function(e,t){var a=arguments;if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var i=0;i<this.length;i+=1)if(2===a.length)this[i].setAttribute(e,t);else for(var s in e)this[i][s]=e[s],this[i].setAttribute(s,e[s]);return this},removeAttr:function(e){for(var t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},data:function(e,t){var a;if(void 0!==t){for(var i=0;i<this.length;i+=1)(a=this[i]).dom7ElementDataStorage||(a.dom7ElementDataStorage={}),a.dom7ElementDataStorage[e]=t;return this}if(a=this[0]){if(a.dom7ElementDataStorage&&e in a.dom7ElementDataStorage)return a.dom7ElementDataStorage[e];var s=a.getAttribute("data-"+e);return s||void 0}},transform:function(e){for(var t=0;t<this.length;t+=1){var a=this[t].style;a.webkitTransform=e,a.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var t=0;t<this.length;t+=1){var a=this[t].style;a.webkitTransitionDuration=e,a.transitionDuration=e}return this},on:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,i=e[0],r=e[1],n=e[2],s=e[3];function o(e){var t=e.target;if(t){var a=e.target.dom7EventData||[];if(a.unshift(e),I(t).is(r))n.apply(t,a);else for(var i=I(t).parents(),s=0;s<i.length;s+=1)I(i[s]).is(r)&&n.apply(i[s],a)}}function l(e){var t=e&&e.target&&e.target.dom7EventData||[];t.unshift(e),n.apply(this,t)}"function"==typeof e[1]&&(i=(a=e)[0],n=a[1],s=a[2],r=void 0),s||(s=!1);for(var d,p=i.split(" "),c=0;c<this.length;c+=1){var u=this[c];if(r)for(d=0;d<p.length;d+=1)u.dom7LiveListeners||(u.dom7LiveListeners=[]),u.dom7LiveListeners.push({type:i,listener:n,proxyListener:o}),u.addEventListener(p[d],o,s);else for(d=0;d<p.length;d+=1)u.dom7Listeners||(u.dom7Listeners=[]),u.dom7Listeners.push({type:i,listener:n,proxyListener:l}),u.addEventListener(p[d],l,s)}return this},off:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,i=e[0],s=e[1],r=e[2],n=e[3];"function"==typeof e[1]&&(i=(a=e)[0],r=a[1],n=a[2],s=void 0),n||(n=!1);for(var o=i.split(" "),l=0;l<o.length;l+=1)for(var d=0;d<this.length;d+=1){var p=this[d];if(s){if(p.dom7LiveListeners)for(var c=0;c<p.dom7LiveListeners.length;c+=1)r?p.dom7LiveListeners[c].listener===r&&p.removeEventListener(o[l],p.dom7LiveListeners[c].proxyListener,n):p.dom7LiveListeners[c].type===o[l]&&p.removeEventListener(o[l],p.dom7LiveListeners[c].proxyListener,n)}else if(p.dom7Listeners)for(var u=0;u<p.dom7Listeners.length;u+=1)r?p.dom7Listeners[u].listener===r&&p.removeEventListener(o[l],p.dom7Listeners[u].proxyListener,n):p.dom7Listeners[u].type===o[l]&&p.removeEventListener(o[l],p.dom7Listeners[u].proxyListener,n)}return this},trigger:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var a=e[0].split(" "),i=e[1],s=0;s<a.length;s+=1)for(var r=0;r<this.length;r+=1){var n=void 0;try{n=new window.CustomEvent(a[s],{detail:i,bubbles:!0,cancelable:!0})}catch(e){(n=document.createEvent("Event")).initEvent(a[s],!0,!0),n.detail=i}this[r].dom7EventData=e.filter(function(e,t){return 0<t}),this[r].dispatchEvent(n),this[r].dom7EventData=[],delete this[r].dom7EventData}return this},transitionEnd:function(t){var a,i=["webkitTransitionEnd","transitionend"],s=this;function r(e){if(e.target===this)for(t.call(this,e),a=0;a<i.length;a+=1)s.off(i[a],r)}if(t)for(a=0;a<i.length;a+=1)s.on(i[a],r);return this},outerWidth:function(e){if(0<this.length){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(0<this.length){if(e){var t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},offset:function(){if(0<this.length){var e=this[0],t=e.getBoundingClientRect(),a=document.body,i=e.clientTop||a.clientTop||0,s=e.clientLeft||a.clientLeft||0,r=e===window?window.scrollY:e.scrollTop,n=e===window?window.scrollX:e.scrollLeft;return{top:t.top+r-i,left:t.left+n-s}}return null},css:function(e,t){var a;if(1===arguments.length){if("string"!=typeof e){for(a=0;a<this.length;a+=1)for(var i in e)this[a].style[i]=e[i];return this}if(this[0])return window.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(a=0;a<this.length;a+=1)this[a].style[e]=t;return this}return this},each:function(e){if(!e)return this;for(var t=0;t<this.length;t+=1)if(!1===e.call(this[t],t,this[t]))return this;return this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:void 0;for(var t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(e){var t,a,i=this[0];if(!i||void 0===e)return!1;if("string"==typeof e){if(i.matches)return i.matches(e);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(e);if(i.msMatchesSelector)return i.msMatchesSelector(e);for(t=I(e),a=0;a<t.length;a+=1)if(t[a]===i)return!0;return!1}if(e===document)return i===document;if(e===window)return i===window;if(e.nodeType||e instanceof l){for(t=e.nodeType?[e]:e,a=0;a<t.length;a+=1)if(t[a]===i)return!0;return!1}return!1},index:function(){var e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;var t,a=this.length;return new l(a-1<e?[]:e<0?(t=a+e)<0?[]:[this[t]]:[this[e]])},append:function(){for(var e,t=[],a=arguments.length;a--;)t[a]=arguments[a];for(var i=0;i<t.length;i+=1){e=t[i];for(var s=0;s<this.length;s+=1)if("string"==typeof e){var r=document.createElement("div");for(r.innerHTML=e;r.firstChild;)this[s].appendChild(r.firstChild)}else if(e instanceof l)for(var n=0;n<e.length;n+=1)this[s].appendChild(e[n]);else this[s].appendChild(e)}return this},prepend:function(e){var t,a,i=this;for(t=0;t<this.length;t+=1)if("string"==typeof e){var s=document.createElement("div");for(s.innerHTML=e,a=s.childNodes.length-1;0<=a;a-=1)i[t].insertBefore(s.childNodes[a],i[t].childNodes[0])}else if(e instanceof l)for(a=0;a<e.length;a+=1)i[t].insertBefore(e[a],i[t].childNodes[0]);else i[t].insertBefore(e,i[t].childNodes[0]);return this},next:function(e){return 0<this.length?e?this[0].nextElementSibling&&I(this[0].nextElementSibling).is(e)?new l([this[0].nextElementSibling]):new l([]):this[0].nextElementSibling?new l([this[0].nextElementSibling]):new l([]):new l([])},nextAll:function(e){var t=[],a=this[0];if(!a)return new l([]);for(;a.nextElementSibling;){var i=a.nextElementSibling;e?I(i).is(e)&&t.push(i):t.push(i),a=i}return new l(t)},prev:function(e){if(0<this.length){var t=this[0];return e?t.previousElementSibling&&I(t.previousElementSibling).is(e)?new l([t.previousElementSibling]):new l([]):t.previousElementSibling?new l([t.previousElementSibling]):new l([])}return new l([])},prevAll:function(e){var t=[],a=this[0];if(!a)return new l([]);for(;a.previousElementSibling;){var i=a.previousElementSibling;e?I(i).is(e)&&t.push(i):t.push(i),a=i}return new l(t)},parent:function(e){for(var t=[],a=0;a<this.length;a+=1)null!==this[a].parentNode&&(e?I(this[a].parentNode).is(e)&&t.push(this[a].parentNode):t.push(this[a].parentNode));return I(r(t))},parents:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].parentNode;i;)e?I(i).is(e)&&t.push(i):t.push(i),i=i.parentNode;return I(r(t))},closest:function(e){var t=this;return void 0===e?new l([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].querySelectorAll(e),s=0;s<i.length;s+=1)t.push(i[s]);return new l(t)},children:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].childNodes,s=0;s<i.length;s+=1)e?1===i[s].nodeType&&I(i[s]).is(e)&&t.push(i[s]):1===i[s].nodeType&&t.push(i[s]);return new l(r(t))},remove:function(){for(var e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,i;for(a=0;a<e.length;a+=1){var s=I(e[a]);for(i=0;i<s.length;i+=1)this[this.length]=s[i],this.length+=1}return this},styles:function(){return this[0]?window.getComputedStyle(this[0],null):{}}};Object.keys(t).forEach(function(e){I.fn[e]=t[e]});var e,D={deleteProps:function(e){var t=e;Object.keys(t).forEach(function(e){try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}})},nextTick:function(e,t){return void 0===t&&(t=0),setTimeout(e,t)},now:function(){return Date.now()},getTranslate:function(e,t){var a,i,s;void 0===t&&(t="x");var r=f.getComputedStyle(e,null);return f.WebKitCSSMatrix?(6<(i=r.transform||r.webkitTransform).split(",").length&&(i=i.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),s=new f.WebKitCSSMatrix("none"===i?"":i)):a=(s=r.MozTransform||r.OTransform||r.MsTransform||r.msTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===t&&(i=f.WebKitCSSMatrix?s.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(i=f.WebKitCSSMatrix?s.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),i||0},parseUrlQuery:function(e){var t,a,i,s,r={},n=e||f.location.href;if("string"==typeof n&&n.length)for(s=(a=(n=-1<n.indexOf("?")?n.replace(/\S*\?/,""):"").split("&").filter(function(e){return""!==e})).length,t=0;t<s;t+=1)i=a[t].replace(/#\S+/g,"").split("="),r[decodeURIComponent(i[0])]=void 0===i[1]?void 0:decodeURIComponent(i[1])||"";return r},isObject:function(e){return"object"==typeof e&&null!==e&&e.constructor&&e.constructor===Object},extend:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var a=Object(e[0]),i=1;i<e.length;i+=1){var s=e[i];if(null!=s)for(var r=Object.keys(Object(s)),n=0,o=r.length;n<o;n+=1){var l=r[n],d=Object.getOwnPropertyDescriptor(s,l);void 0!==d&&d.enumerable&&(D.isObject(a[l])&&D.isObject(s[l])?D.extend(a[l],s[l]):!D.isObject(a[l])&&D.isObject(s[l])?(a[l]={},D.extend(a[l],s[l])):a[l]=s[l])}}return a}},h="undefined"==typeof document?{addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return{}},querySelectorAll:function(){return[]},createElement:function(){return{style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},location:{hash:""}}:document,O={touch:f.Modernizr&&!0===f.Modernizr.touch||!!("ontouchstart"in f||f.DocumentTouch&&h instanceof f.DocumentTouch),transforms3d:f.Modernizr&&!0===f.Modernizr.csstransforms3d||(e=h.createElement("div").style,"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e),flexbox:function(){for(var e=h.createElement("div").style,t="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),a=0;a<t.length;a+=1)if(t[a]in e)return!0;return!1}(),observer:"MutationObserver"in f||"WebkitMutationObserver"in f,passiveListener:function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});f.addEventListener("testPassiveListener",null,t)}catch(e){}return e}(),gestures:"ongesturestart"in f},a=function(e){void 0===e&&(e={});var t=this;t.params=e,t.eventsListeners={},t.params&&t.params.on&&Object.keys(t.params.on).forEach(function(e){t.on(e,t.params.on[e])})},i={components:{}};a.prototype.on=function(e,t){var a=this;return"function"!=typeof t||e.split(" ").forEach(function(e){a.eventsListeners[e]||(a.eventsListeners[e]=[]),a.eventsListeners[e].push(t)}),a},a.prototype.once=function(i,s){var r=this;if("function"!=typeof s)return r;return r.on(i,function e(){for(var t=[],a=arguments.length;a--;)t[a]=arguments[a];s.apply(r,t),r.off(i,e)})},a.prototype.off=function(e,i){var s=this;return e.split(" ").forEach(function(a){void 0===i?s.eventsListeners[a]=[]:s.eventsListeners[a].forEach(function(e,t){e===i&&s.eventsListeners[a].splice(t,1)})}),s},a.prototype.emit=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,i,s,r=this;return r.eventsListeners&&("string"==typeof e[0]||Array.isArray(e[0])?(a=e[0],i=e.slice(1,e.length),s=r):(a=e[0].events,i=e[0].data,s=e[0].context||r),(Array.isArray(a)?a:a.split(" ")).forEach(function(e){if(r.eventsListeners[e]){var t=[];r.eventsListeners[e].forEach(function(e){t.push(e)}),t.forEach(function(e){e.apply(s,i)})}})),r},a.prototype.useModulesParams=function(a){var i=this;i.modules&&Object.keys(i.modules).forEach(function(e){var t=i.modules[e];t.params&&D.extend(a,t.params)})},a.prototype.useModules=function(i){void 0===i&&(i={});var s=this;s.modules&&Object.keys(s.modules).forEach(function(e){var a=s.modules[e],t=i[e]||{};a.instance&&Object.keys(a.instance).forEach(function(e){var t=a.instance[e];s[e]="function"==typeof t?t.bind(s):t}),a.on&&s.on&&Object.keys(a.on).forEach(function(e){s.on(e,a.on[e])}),a.create&&a.create.bind(s)(t)})},i.components.set=function(e){this.use&&this.use(e)},a.installModule=function(t){for(var e=[],a=arguments.length-1;0<a--;)e[a]=arguments[a+1];var i=this;i.prototype.modules||(i.prototype.modules={});var s=t.name||Object.keys(i.prototype.modules).length+"_"+D.now();return(i.prototype.modules[s]=t).proto&&Object.keys(t.proto).forEach(function(e){i.prototype[e]=t.proto[e]}),t.static&&Object.keys(t.static).forEach(function(e){i[e]=t.static[e]}),t.install&&t.install.apply(i,e),i},a.use=function(e){for(var t=[],a=arguments.length-1;0<a--;)t[a]=arguments[a+1];var i=this;return Array.isArray(e)?(e.forEach(function(e){return i.installModule(e)}),i):i.installModule.apply(i,[e].concat(t))},Object.defineProperties(a,i);var s,n,o={updateSize:function(){var e,t,a=this,i=a.$el;e=void 0!==a.params.width?a.params.width:i[0].clientWidth,t=void 0!==a.params.height?a.params.height:i[0].clientHeight,0===e&&a.isHorizontal()||0===t&&a.isVertical()||(e=e-parseInt(i.css("padding-left"),10)-parseInt(i.css("padding-right"),10),t=t-parseInt(i.css("padding-top"),10)-parseInt(i.css("padding-bottom"),10),D.extend(a,{width:e,height:t,size:a.isHorizontal()?e:t}))},updateSlides:function(){var e=this,t=e.params,a=e.$wrapperEl,i=e.size,s=e.rtl,r=e.wrongRTL,n=a.children("."+e.params.slideClass),o=e.virtual&&t.virtual.enabled?e.virtual.slides.length:n.length,l=[],d=[],p=[],c=t.slidesOffsetBefore;"function"==typeof c&&(c=t.slidesOffsetBefore.call(e));var u=t.slidesOffsetAfter;"function"==typeof u&&(u=t.slidesOffsetAfter.call(e));var h=o,f=e.snapGrid.length,v=e.snapGrid.length,m=t.spaceBetween,g=-c,b=0,w=0;if(void 0!==i){var y,x;"string"==typeof m&&0<=m.indexOf("%")&&(m=parseFloat(m.replace("%",""))/100*i),e.virtualSize=-m,s?n.css({marginLeft:"",marginTop:""}):n.css({marginRight:"",marginBottom:""}),1<t.slidesPerColumn&&(y=Math.floor(o/t.slidesPerColumn)===o/e.params.slidesPerColumn?o:Math.ceil(o/t.slidesPerColumn)*t.slidesPerColumn,"auto"!==t.slidesPerView&&"row"===t.slidesPerColumnFill&&(y=Math.max(y,t.slidesPerView*t.slidesPerColumn)));for(var T,E=t.slidesPerColumn,S=y/E,C=S-(t.slidesPerColumn*S-o),M=0;M<o;M+=1){x=0;var z=n.eq(M);if(1<t.slidesPerColumn){var P=void 0,k=void 0,$=void 0;"column"===t.slidesPerColumnFill?($=M-(k=Math.floor(M/E))*E,(C<k||k===C&&$===E-1)&&E<=($+=1)&&($=0,k+=1),P=k+$*y/E,z.css({"-webkit-box-ordinal-group":P,"-moz-box-ordinal-group":P,"-ms-flex-order":P,"-webkit-order":P,order:P})):k=M-($=Math.floor(M/S))*S,z.css("margin-"+(e.isHorizontal()?"top":"left"),0!==$&&t.spaceBetween&&t.spaceBetween+"px").attr("data-swiper-column",k).attr("data-swiper-row",$)}"none"!==z.css("display")&&("auto"===t.slidesPerView?(x=e.isHorizontal()?z.outerWidth(!0):z.outerHeight(!0),t.roundLengths&&(x=Math.floor(x))):(x=(i-(t.slidesPerView-1)*m)/t.slidesPerView,t.roundLengths&&(x=Math.floor(x)),n[M]&&(e.isHorizontal()?n[M].style.width=x+"px":n[M].style.height=x+"px")),n[M]&&(n[M].swiperSlideSize=x),p.push(x),t.centeredSlides?(g=g+x/2+b/2+m,0===b&&0!==M&&(g=g-i/2-m),0===M&&(g=g-i/2-m),Math.abs(g)<.001&&(g=0),w%t.slidesPerGroup==0&&l.push(g),d.push(g)):(w%t.slidesPerGroup==0&&l.push(g),d.push(g),g=g+x+m),e.virtualSize+=x+m,b=x,w+=1)}if(e.virtualSize=Math.max(e.virtualSize,i)+u,s&&r&&("slide"===t.effect||"coverflow"===t.effect)&&a.css({width:e.virtualSize+t.spaceBetween+"px"}),O.flexbox&&!t.setWrapperSize||(e.isHorizontal()?a.css({width:e.virtualSize+t.spaceBetween+"px"}):a.css({height:e.virtualSize+t.spaceBetween+"px"})),1<t.slidesPerColumn&&(e.virtualSize=(x+t.spaceBetween)*y,e.virtualSize=Math.ceil(e.virtualSize/t.slidesPerColumn)-t.spaceBetween,e.isHorizontal()?a.css({width:e.virtualSize+t.spaceBetween+"px"}):a.css({height:e.virtualSize+t.spaceBetween+"px"}),t.centeredSlides)){T=[];for(var I=0;I<l.length;I+=1)l[I]<e.virtualSize+l[0]&&T.push(l[I]);l=T}if(!t.centeredSlides){T=[];for(var L=0;L<l.length;L+=1)l[L]<=e.virtualSize-i&&T.push(l[L]);l=T,1<Math.floor(e.virtualSize-i)-Math.floor(l[l.length-1])&&l.push(e.virtualSize-i)}0===l.length&&(l=[0]),0!==t.spaceBetween&&(e.isHorizontal()?s?n.css({marginLeft:m+"px"}):n.css({marginRight:m+"px"}):n.css({marginBottom:m+"px"})),D.extend(e,{slides:n,snapGrid:l,slidesGrid:d,slidesSizesGrid:p}),o!==h&&e.emit("slidesLengthChange"),l.length!==f&&e.emit("snapGridLengthChange"),d.length!==v&&e.emit("slidesGridLengthChange"),(t.watchSlidesProgress||t.watchSlidesVisibility)&&e.updateSlidesOffset()}},updateAutoHeight:function(){var e,t=this,a=[],i=0;if("auto"!==t.params.slidesPerView&&1<t.params.slidesPerView)for(e=0;e<Math.ceil(t.params.slidesPerView);e+=1){var s=t.activeIndex+e;if(s>t.slides.length)break;a.push(t.slides.eq(s)[0])}else a.push(t.slides.eq(t.activeIndex)[0]);for(e=0;e<a.length;e+=1)if(void 0!==a[e]){var r=a[e].offsetHeight;i=i<r?r:i}i&&t.$wrapperEl.css("height",i+"px")},updateSlidesOffset:function(){for(var e=this.slides,t=0;t<e.length;t+=1)e[t].swiperSlideOffset=this.isHorizontal()?e[t].offsetLeft:e[t].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this.translate||0);var t=this,a=t.params,i=t.slides,s=t.rtl;if(0!==i.length){void 0===i[0].swiperSlideOffset&&t.updateSlidesOffset();var r=-e;s&&(r=e),i.removeClass(a.slideVisibleClass);for(var n=0;n<i.length;n+=1){var o=i[n],l=(r+(a.centeredSlides?t.minTranslate():0)-o.swiperSlideOffset)/(o.swiperSlideSize+a.spaceBetween);if(a.watchSlidesVisibility){var d=-(r-o.swiperSlideOffset),p=d+t.slidesSizesGrid[n];(0<=d&&d<t.size||0<p&&p<=t.size||d<=0&&p>=t.size)&&i.eq(n).addClass(a.slideVisibleClass)}o.progress=s?-l:l}}},updateProgress:function(e){void 0===e&&(e=this.translate||0);var t=this,a=t.params,i=t.maxTranslate()-t.minTranslate(),s=t.progress,r=t.isBeginning,n=t.isEnd,o=r,l=n;0===i?n=r=!(s=0):(r=(s=(e-t.minTranslate())/i)<=0,n=1<=s),D.extend(t,{progress:s,isBeginning:r,isEnd:n}),(a.watchSlidesProgress||a.watchSlidesVisibility)&&t.updateSlidesProgress(e),r&&!o&&t.emit("reachBeginning toEdge"),n&&!l&&t.emit("reachEnd toEdge"),(o&&!r||l&&!n)&&t.emit("fromEdge"),t.emit("progress",s)},updateSlidesClasses:function(){var e,t=this,a=t.slides,i=t.params,s=t.$wrapperEl,r=t.activeIndex,n=t.realIndex,o=t.virtual&&i.virtual.enabled;a.removeClass(i.slideActiveClass+" "+i.slideNextClass+" "+i.slidePrevClass+" "+i.slideDuplicateActiveClass+" "+i.slideDuplicateNextClass+" "+i.slideDuplicatePrevClass),(e=o?t.$wrapperEl.find("."+i.slideClass+'[data-swiper-slide-index="'+r+'"]'):a.eq(r)).addClass(i.slideActiveClass),i.loop&&(e.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+n+'"]').addClass(i.slideDuplicateActiveClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+n+'"]').addClass(i.slideDuplicateActiveClass));var l=e.nextAll("."+i.slideClass).eq(0).addClass(i.slideNextClass);i.loop&&0===l.length&&(l=a.eq(0)).addClass(i.slideNextClass);var d=e.prevAll("."+i.slideClass).eq(0).addClass(i.slidePrevClass);i.loop&&0===d.length&&(d=a.eq(-1)).addClass(i.slidePrevClass),i.loop&&(l.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass),d.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass))},updateActiveIndex:function(e){var t,a=this,i=a.rtl?a.translate:-a.translate,s=a.slidesGrid,r=a.snapGrid,n=a.params,o=a.activeIndex,l=a.realIndex,d=a.snapIndex,p=e;if(void 0===p){for(var c=0;c<s.length;c+=1)void 0!==s[c+1]?i>=s[c]&&i<s[c+1]-(s[c+1]-s[c])/2?p=c:i>=s[c]&&i<s[c+1]&&(p=c+1):i>=s[c]&&(p=c);n.normalizeSlideIndex&&(p<0||void 0===p)&&(p=0)}if((t=0<=r.indexOf(i)?r.indexOf(i):Math.floor(p/n.slidesPerGroup))>=r.length&&(t=r.length-1),p!==o){var u=parseInt(a.slides.eq(p).attr("data-swiper-slide-index")||p,10);D.extend(a,{snapIndex:t,realIndex:u,previousIndex:o,activeIndex:p}),a.emit("activeIndexChange"),a.emit("snapIndexChange"),l!==u&&a.emit("realIndexChange"),a.emit("slideChange")}else t!==d&&(a.snapIndex=t,a.emit("snapIndexChange"))},updateClickedSlide:function(e){var t=this,a=t.params,i=I(e.target).closest("."+a.slideClass)[0],s=!1;if(i)for(var r=0;r<t.slides.length;r+=1)t.slides[r]===i&&(s=!0);if(!i||!s)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=i,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(I(i).attr("data-swiper-slide-index"),10):t.clickedIndex=I(i).index(),a.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}},d={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");var t=this.params,a=this.rtl,i=this.translate,s=this.$wrapperEl;if(t.virtualTranslate)return a?-i:i;var r=D.getTranslate(s[0],e);return a&&(r=-r),r||0},setTranslate:function(e,t){var a=this,i=a.rtl,s=a.params,r=a.$wrapperEl,n=a.progress,o=0,l=0;a.isHorizontal()?o=i?-e:e:l=e,s.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),s.virtualTranslate||(O.transforms3d?r.transform("translate3d("+o+"px, "+l+"px, 0px)"):r.transform("translate("+o+"px, "+l+"px)")),a.translate=a.isHorizontal()?o:l;var d=a.maxTranslate()-a.minTranslate();(0===d?0:(e-a.minTranslate())/d)!==n&&a.updateProgress(e),a.emit("setTranslate",a.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]}},p={setTransition:function(e,t){this.$wrapperEl.transition(e),this.emit("setTransition",e,t)},transitionStart:function(e){void 0===e&&(e=!0);var t=this,a=t.activeIndex,i=t.params,s=t.previousIndex;i.autoHeight&&t.updateAutoHeight(),t.emit("transitionStart"),e&&a!==s&&(t.emit("slideChangeTransitionStart"),s<a?t.emit("slideNextTransitionStart"):t.emit("slidePrevTransitionStart"))},transitionEnd:function(e){void 0===e&&(e=!0);var t=this,a=t.activeIndex,i=t.previousIndex;t.animating=!1,t.setTransition(0),t.emit("transitionEnd"),e&&a!==i&&(t.emit("slideChangeTransitionEnd"),i<a?t.emit("slideNextTransitionEnd"):t.emit("slidePrevTransitionEnd"))}},L={isSafari:(n=f.navigator.userAgent.toLowerCase(),0<=n.indexOf("safari")&&n.indexOf("chrome")<0&&n.indexOf("android")<0),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(f.navigator.userAgent),ie:f.navigator.pointerEnabled||f.navigator.msPointerEnabled,ieTouch:f.navigator.msPointerEnabled&&1<f.navigator.msMaxTouchPoints||f.navigator.pointerEnabled&&1<f.navigator.maxTouchPoints,lteIE9:(s=h.createElement("div"),s.innerHTML="\x3c!--[if lte IE 9]><i></i><![endif]--\x3e",1===s.getElementsByTagName("i").length)},c={slideTo:function(e,t,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===a&&(a=!0);var s=this,r=e;r<0&&(r=0);var n=s.params,o=s.snapGrid,l=s.slidesGrid,d=s.previousIndex,p=s.activeIndex,c=s.rtl,u=s.$wrapperEl,h=Math.floor(r/n.slidesPerGroup);h>=o.length&&(h=o.length-1),(p||n.initialSlide||0)===(d||0)&&a&&s.emit("beforeSlideChangeStart");var f=-o[h];if(s.updateProgress(f),n.normalizeSlideIndex)for(var v=0;v<l.length;v+=1)-Math.floor(100*f)>=Math.floor(100*l[v])&&(r=v);return!(!s.allowSlideNext&&f<s.translate&&f<s.minTranslate()||!s.allowSlidePrev&&f>s.translate&&f>s.maxTranslate()&&(p||0)!==r||(c&&-f===s.translate||!c&&f===s.translate?(s.updateActiveIndex(r),n.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),"slide"!==n.effect&&s.setTranslate(f),1):(0===t||L.lteIE9?(s.setTransition(0),s.setTranslate(f),s.updateActiveIndex(r),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,i),s.transitionStart(a),s.transitionEnd(a)):(s.setTransition(t),s.setTranslate(f),s.updateActiveIndex(r),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,i),s.transitionStart(a),s.animating||(s.animating=!0,u.transitionEnd(function(){s&&!s.destroyed&&s.transitionEnd(a)}))),0)))},slideNext:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.params,r=i.animating;return s.loop?!r&&(i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft,i.slideTo(i.activeIndex+s.slidesPerGroup,e,t,a)):i.slideTo(i.activeIndex+s.slidesPerGroup,e,t,a)},slidePrev:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.params,r=i.animating;return s.loop?!r&&(i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft,i.slideTo(i.activeIndex-1,e,t,a)):i.slideTo(i.activeIndex-1,e,t,a)},slideReset:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);return this.slideTo(this.activeIndex,e,t,a)},slideToClickedSlide:function(){var e,t=this,a=t.params,i=t.$wrapperEl,s="auto"===a.slidesPerView?t.slidesPerViewDynamic():a.slidesPerView,r=t.clickedIndex;if(a.loop){if(t.animating)return;e=parseInt(I(t.clickedSlide).attr("data-swiper-slide-index"),10),a.centeredSlides?r<t.loopedSlides-s/2||r>t.slides.length-t.loopedSlides+s/2?(t.loopFix(),r=i.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+a.slideDuplicateClass+")").eq(0).index(),D.nextTick(function(){t.slideTo(r)})):t.slideTo(r):r>t.slides.length-s?(t.loopFix(),r=i.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+a.slideDuplicateClass+")").eq(0).index(),D.nextTick(function(){t.slideTo(r)})):t.slideTo(r)}else t.slideTo(r)}},u={loopCreate:function(){var i=this,e=i.params,t=i.$wrapperEl;t.children("."+e.slideClass+"."+e.slideDuplicateClass).remove();var s=t.children("."+e.slideClass);if(e.loopFillGroupWithBlank){var a=e.slidesPerGroup-s.length%e.slidesPerGroup;if(a!==e.slidesPerGroup){for(var r=0;r<a;r+=1){var n=I(h.createElement("div")).addClass(e.slideClass+" "+e.slideBlankClass);t.append(n)}s=t.children("."+e.slideClass)}}"auto"!==e.slidesPerView||e.loopedSlides||(e.loopedSlides=s.length),i.loopedSlides=parseInt(e.loopedSlides||e.slidesPerView,10),i.loopedSlides+=e.loopAdditionalSlides,i.loopedSlides>s.length&&(i.loopedSlides=s.length);var o=[],l=[];s.each(function(e,t){var a=I(t);e<i.loopedSlides&&l.push(t),e<s.length&&e>=s.length-i.loopedSlides&&o.push(t),a.attr("data-swiper-slide-index",e)});for(var d=0;d<l.length;d+=1)t.append(I(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));for(var p=o.length-1;0<=p;p-=1)t.prepend(I(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass))},loopFix:function(){var e,t=this,a=t.params,i=t.activeIndex,s=t.slides,r=t.loopedSlides,n=t.allowSlidePrev,o=t.allowSlideNext;t.allowSlidePrev=!0,t.allowSlideNext=!0,i<r?(e=s.length-3*r+i,e+=r,t.slideTo(e,0,!1,!0)):("auto"===a.slidesPerView&&2*r<=i||i>s.length-2*a.slidesPerView)&&(e=-s.length+i+r,e+=r,t.slideTo(e,0,!1,!0)),t.allowSlidePrev=n,t.allowSlideNext=o},loopDestroy:function(){var e=this.$wrapperEl,t=this.params,a=this.slides;e.children("."+t.slideClass+"."+t.slideDuplicateClass).remove(),a.removeAttr("data-swiper-slide-index")}},v={setGrabCursor:function(e){if(!O.touch&&this.params.simulateTouch){var t=this.el;t.style.cursor="move",t.style.cursor=e?"-webkit-grabbing":"-webkit-grab",t.style.cursor=e?"-moz-grabbin":"-moz-grab",t.style.cursor=e?"grabbing":"grab"}},unsetGrabCursor:function(){O.touch||(this.el.style.cursor="")}},m={appendSlide:function(e){var t=this,a=t.$wrapperEl,i=t.params;if(i.loop&&t.loopDestroy(),"object"==typeof e&&"length"in e)for(var s=0;s<e.length;s+=1)e[s]&&a.append(e[s]);else a.append(e);i.loop&&t.loopCreate(),i.observer&&O.observer||t.update()},prependSlide:function(e){var t=this,a=t.params,i=t.$wrapperEl,s=t.activeIndex;a.loop&&t.loopDestroy();var r=s+1;if("object"==typeof e&&"length"in e){for(var n=0;n<e.length;n+=1)e[n]&&i.prepend(e[n]);r=s+e.length}else i.prepend(e);a.loop&&t.loopCreate(),a.observer&&O.observer||t.update(),t.slideTo(r,0,!1)},removeSlide:function(e){var t=this,a=t.params,i=t.$wrapperEl,s=t.activeIndex;a.loop&&(t.loopDestroy(),t.slides=i.children("."+a.slideClass));var r,n=s;if("object"==typeof e&&"length"in e){for(var o=0;o<e.length;o+=1)r=e[o],t.slides[r]&&t.slides.eq(r).remove(),r<n&&(n-=1);n=Math.max(n,0)}else r=e,t.slides[r]&&t.slides.eq(r).remove(),r<n&&(n-=1),n=Math.max(n,0);a.loop&&t.loopCreate(),a.observer&&O.observer||t.update(),a.loop?t.slideTo(n+t.loopedSlides,0,!1):t.slideTo(n,0,!1)},removeAllSlides:function(){for(var e=[],t=0;t<this.slides.length;t+=1)e.push(t);this.removeSlide(e)}},g=function(){var e=f.navigator.userAgent,t={ios:!1,android:!1,androidChrome:!1,desktop:!1,windows:!1,iphone:!1,ipod:!1,ipad:!1,cordova:f.cordova||f.phonegap,phonegap:f.cordova||f.phonegap},a=e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),i=e.match(/(Android);?[\s\/]+([\d.]+)?/),s=e.match(/(iPad).*OS\s([\d_]+)/),r=e.match(/(iPod)(.*OS\s([\d_]+))?/),n=!s&&e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);if(a&&(t.os="windows",t.osVersion=a[2],t.windows=!0),i&&!a&&(t.os="android",t.osVersion=i[2],t.android=!0,t.androidChrome=0<=e.toLowerCase().indexOf("chrome")),(s||n||r)&&(t.os="ios",t.ios=!0),n&&!r&&(t.osVersion=n[2].replace(/_/g,"."),t.iphone=!0),s&&(t.osVersion=s[2].replace(/_/g,"."),t.ipad=!0),r&&(t.osVersion=r[3]?r[3].replace(/_/g,"."):null,t.iphone=!0),t.ios&&t.osVersion&&0<=e.indexOf("Version/")&&"10"===t.osVersion.split(".")[0]&&(t.osVersion=e.toLowerCase().split("version/")[1].split(" ")[0]),t.desktop=!(t.os||t.android||t.webView),t.webView=(n||s||r)&&e.match(/.*AppleWebKit(?!.*Safari)/i),t.os&&"ios"===t.os){var o=t.osVersion.split("."),l=h.querySelector('meta[name="viewport"]');t.minimalUi=!t.webView&&(r||n)&&(1*o[0]==7?1<=1*o[1]:7<1*o[0])&&l&&0<=l.getAttribute("content").indexOf("minimal-ui")}return t.pixelRatio=f.devicePixelRatio||1,t}(),b=function(){var e=this,t=e.params,a=e.el,i=e.allowSlideNext,s=e.allowSlidePrev;if(!a||0!==a.offsetWidth){if(t.breakpoints&&e.setBreakpoint(),e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),t.freeMode){var r=Math.min(Math.max(e.translate,e.maxTranslate()),e.minTranslate());e.setTranslate(r),e.updateActiveIndex(),e.updateSlidesClasses(),t.autoHeight&&e.updateAutoHeight()}else e.updateSlidesClasses(),("auto"===t.slidesPerView||1<t.slidesPerView)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0);e.allowSlidePrev=s,e.allowSlideNext=i}};var w={init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!0,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0},y={update:o,translate:d,transition:p,slide:c,loop:u,grabCursor:v,manipulation:m,events:{attachEvents:function(){var e=this,t=e.params,a=e.touchEvents,i=e.el,s=e.wrapperEl;e.onTouchStart=function(e){var t=this,a=t.touchEventsData,i=t.params,s=t.touches,r=e;if(r.originalEvent&&(r=r.originalEvent),a.isTouchEvent="touchstart"===r.type,(a.isTouchEvent||!("which"in r)||3!==r.which)&&(!a.isTouched||!a.isMoved))if(i.noSwiping&&I(r.target).closest("."+i.noSwipingClass)[0])t.allowClick=!0;else if(!i.swipeHandler||I(r).closest(i.swipeHandler)[0]){s.currentX="touchstart"===r.type?r.targetTouches[0].pageX:r.pageX,s.currentY="touchstart"===r.type?r.targetTouches[0].pageY:r.pageY;var n=s.currentX,o=s.currentY;if(!(g.ios&&i.iOSEdgeSwipeDetection&&n<=i.iOSEdgeSwipeThreshold)){if(D.extend(a,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),s.startX=n,s.startY=o,a.touchStartTime=D.now(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,0<i.threshold&&(a.allowThresholdMove=!1),"touchstart"!==r.type){var l=!0;I(r.target).is(a.formElements)&&(l=!1),h.activeElement&&I(h.activeElement).is(a.formElements)&&h.activeElement.blur(),l&&r.preventDefault()}t.emit("touchStart",r)}}}.bind(e),e.onTouchMove=function(e){var t=this,a=t.touchEventsData,i=t.params,s=t.touches,r=t.rtl,n=e;if(n.originalEvent&&(n=n.originalEvent),!a.isTouchEvent||"mousemove"!==n.type){var o,l="touchmove"===n.type?n.targetTouches[0].pageX:n.pageX,d="touchmove"===n.type?n.targetTouches[0].pageY:n.pageY;if(n.preventedByNestedSwiper)return s.startX=l,void(s.startY=d);if(!t.allowTouchMove)return t.allowClick=!1,void(a.isTouched&&(D.extend(s,{startX:l,startY:d,currentX:l,currentY:d}),a.touchStartTime=D.now()));if(a.isTouchEvent&&i.touchReleaseOnEdges&&!i.loop)if(t.isVertical()){if(s.currentY<s.startY&&t.translate<=t.maxTranslate()||s.currentY>s.startY&&t.translate>=t.minTranslate())return}else if(s.currentX<s.startX&&t.translate<=t.maxTranslate()||s.currentX>s.startX&&t.translate>=t.minTranslate())return;if(a.isTouchEvent&&h.activeElement&&n.target===h.activeElement&&I(n.target).is(a.formElements))return a.isMoved=!0,void(t.allowClick=!1);if(a.allowTouchCallbacks&&t.emit("touchMove",n),!(n.targetTouches&&1<n.targetTouches.length)&&(s.currentX="touchmove"===n.type?n.targetTouches[0].pageX:n.pageX,s.currentY="touchmove"===n.type?n.targetTouches[0].pageY:n.pageY,void 0===a.isScrolling&&(t.isHorizontal()&&s.currentY===s.startY||t.isVertical()&&s.currentX===s.startX?a.isScrolling=!1:(o=180*Math.atan2(Math.abs(s.currentY-s.startY),Math.abs(s.currentX-s.startX))/Math.PI,a.isScrolling=t.isHorizontal()?o>i.touchAngle:90-o>i.touchAngle)),a.isScrolling&&t.emit("touchMoveOpposite",n),"undefined"==typeof startMoving&&(s.currentX===s.startX&&s.currentY===s.startY||(a.startMoving=!0)),a.isTouched))if(a.isScrolling)a.isTouched=!1;else if(a.startMoving){t.allowClick=!1,n.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&n.stopPropagation(),a.isMoved||(i.loop&&t.loopFix(),a.startTranslate=t.getTranslate(),t.setTransition(0),t.animating&&t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),a.allowMomentumBounce=!1,!i.grabCursor||!0!==t.allowSlideNext&&!0!==t.allowSlidePrev||t.setGrabCursor(!0),t.emit("sliderFirstMove",n)),t.emit("sliderMove",n),a.isMoved=!0;var p=t.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;s.diff=p,p*=i.touchRatio,r&&(p=-p),t.swipeDirection=0<p?"prev":"next",a.currentTranslate=p+a.startTranslate;var c=!0,u=i.resistanceRatio;if(i.touchReleaseOnEdges&&(u=0),0<p&&a.currentTranslate>t.minTranslate()?(c=!1,i.resistance&&(a.currentTranslate=t.minTranslate()-1+Math.pow(-t.minTranslate()+a.startTranslate+p,u))):p<0&&a.currentTranslate<t.maxTranslate()&&(c=!1,i.resistance&&(a.currentTranslate=t.maxTranslate()+1-Math.pow(t.maxTranslate()-a.startTranslate-p,u))),c&&(n.preventedByNestedSwiper=!0),!t.allowSlideNext&&"next"===t.swipeDirection&&a.currentTranslate<a.startTranslate&&(a.currentTranslate=a.startTranslate),!t.allowSlidePrev&&"prev"===t.swipeDirection&&a.currentTranslate>a.startTranslate&&(a.currentTranslate=a.startTranslate),0<i.threshold){if(!(Math.abs(p)>i.threshold||a.allowThresholdMove))return void(a.currentTranslate=a.startTranslate);if(!a.allowThresholdMove)return a.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,a.currentTranslate=a.startTranslate,void(s.diff=t.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY)}i.followFinger&&((i.freeMode||i.watchSlidesProgress||i.watchSlidesVisibility)&&(t.updateActiveIndex(),t.updateSlidesClasses()),i.freeMode&&(0===a.velocities.length&&a.velocities.push({position:s[t.isHorizontal()?"startX":"startY"],time:a.touchStartTime}),a.velocities.push({position:s[t.isHorizontal()?"currentX":"currentY"],time:D.now()})),t.updateProgress(a.currentTranslate),t.setTranslate(a.currentTranslate))}}}.bind(e),e.onTouchEnd=function(e){var t=this,a=t.touchEventsData,i=t.params,s=t.touches,r=t.rtl,n=t.$wrapperEl,o=t.slidesGrid,l=t.snapGrid,d=e;if(d.originalEvent&&(d=d.originalEvent),a.allowTouchCallbacks&&t.emit("touchEnd",d),a.allowTouchCallbacks=!1,a.isTouched){i.grabCursor&&a.isMoved&&a.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);var p,c=D.now(),u=c-a.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(d),t.emit("tap",d),u<300&&300<c-a.lastClickTime&&(a.clickTimeout&&clearTimeout(a.clickTimeout),a.clickTimeout=D.nextTick(function(){t&&!t.destroyed&&t.emit("click",d)},300)),u<300&&c-a.lastClickTime<300&&(a.clickTimeout&&clearTimeout(a.clickTimeout),t.emit("doubleTap",d))),a.lastClickTime=D.now(),D.nextTick(function(){t.destroyed||(t.allowClick=!0)}),!a.isTouched||!a.isMoved||!t.swipeDirection||0===s.diff||a.currentTranslate===a.startTranslate)return a.isTouched=!1,void(a.isMoved=!1);if(a.isTouched=!1,a.isMoved=!1,p=i.followFinger?r?t.translate:-t.translate:-a.currentTranslate,i.freeMode){if(p<-t.minTranslate())return void t.slideTo(t.activeIndex);if(p>-t.maxTranslate())return void(t.slides.length<l.length?t.slideTo(l.length-1):t.slideTo(t.slides.length-1));if(i.freeModeMomentum){if(1<a.velocities.length){var h=a.velocities.pop(),f=a.velocities.pop(),v=h.position-f.position,m=h.time-f.time;t.velocity=v/m,t.velocity/=2,Math.abs(t.velocity)<i.freeModeMinimumVelocity&&(t.velocity=0),(150<m||300<D.now()-h.time)&&(t.velocity=0)}else t.velocity=0;t.velocity*=i.freeModeMomentumVelocityRatio,a.velocities.length=0;var g=1e3*i.freeModeMomentumRatio,b=t.velocity*g,w=t.translate+b;r&&(w=-w);var y,x=!1,T=20*Math.abs(t.velocity)*i.freeModeMomentumBounceRatio;if(w<t.maxTranslate())i.freeModeMomentumBounce?(w+t.maxTranslate()<-T&&(w=t.maxTranslate()-T),y=t.maxTranslate(),x=!0,a.allowMomentumBounce=!0):w=t.maxTranslate();else if(w>t.minTranslate())i.freeModeMomentumBounce?(w-t.minTranslate()>T&&(w=t.minTranslate()+T),y=t.minTranslate(),x=!0,a.allowMomentumBounce=!0):w=t.minTranslate();else if(i.freeModeSticky){for(var E,S=0;S<l.length;S+=1)if(l[S]>-w){E=S;break}w=Math.abs(l[E]-w)<Math.abs(l[E-1]-w)||"next"===t.swipeDirection?l[E]:l[E-1],r||(w=-w)}if(0!==t.velocity)g=r?Math.abs((-w-t.translate)/t.velocity):Math.abs((w-t.translate)/t.velocity);else if(i.freeModeSticky)return void t.slideReset();i.freeModeMomentumBounce&&x?(t.updateProgress(y),t.setTransition(g),t.setTranslate(w),t.transitionStart(),t.animating=!0,n.transitionEnd(function(){t&&!t.destroyed&&a.allowMomentumBounce&&(t.emit("momentumBounce"),t.setTransition(i.speed),t.setTranslate(y),n.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))})):t.velocity?(t.updateProgress(w),t.setTransition(g),t.setTranslate(w),t.transitionStart(),t.animating||(t.animating=!0,n.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))):t.updateProgress(w),t.updateActiveIndex(),t.updateSlidesClasses()}(!i.freeModeMomentum||u>=i.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}else{for(var C=0,M=t.slidesSizesGrid[0],z=0;z<o.length;z+=i.slidesPerGroup)void 0!==o[z+i.slidesPerGroup]?p>=o[z]&&p<o[z+i.slidesPerGroup]&&(M=o[(C=z)+i.slidesPerGroup]-o[z]):p>=o[z]&&(C=z,M=o[o.length-1]-o[o.length-2]);var P=(p-o[C])/M;if(u>i.longSwipesMs){if(!i.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(P>=i.longSwipesRatio?t.slideTo(C+i.slidesPerGroup):t.slideTo(C)),"prev"===t.swipeDirection&&(P>1-i.longSwipesRatio?t.slideTo(C+i.slidesPerGroup):t.slideTo(C))}else{if(!i.shortSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&t.slideTo(C+i.slidesPerGroup),"prev"===t.swipeDirection&&t.slideTo(C)}}}}.bind(e),e.onClick=function(e){this.allowClick||(this.params.preventClicks&&e.preventDefault(),this.params.preventClicksPropagation&&this.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))}.bind(e);var r="container"===t.touchEventsTarget?i:s,n=!!t.nested;if(L.ie)r.addEventListener(a.start,e.onTouchStart,!1),(O.touch?r:h).addEventListener(a.move,e.onTouchMove,n),(O.touch?r:h).addEventListener(a.end,e.onTouchEnd,!1);else{if(O.touch){var o=!("onTouchStart"!==a.start||!O.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};r.addEventListener(a.start,e.onTouchStart,o),r.addEventListener(a.move,e.onTouchMove,n),r.addEventListener(a.end,e.onTouchEnd,o)}(t.simulateTouch&&!g.ios&&!g.android||t.simulateTouch&&!O.touch&&g.ios)&&(r.addEventListener("mousedown",e.onTouchStart,!1),h.addEventListener("mousemove",e.onTouchMove,n),h.addEventListener("mouseup",e.onTouchEnd,!1))}(t.preventClicks||t.preventClicksPropagation)&&r.addEventListener("click",e.onClick,!0),e.on("resize observerUpdate",b)},detachEvents:function(){var e=this,t=e.params,a=e.touchEvents,i=e.el,s=e.wrapperEl,r="container"===t.touchEventsTarget?i:s,n=!!t.nested;if(L.ie)r.removeEventListener(a.start,e.onTouchStart,!1),(O.touch?r:h).removeEventListener(a.move,e.onTouchMove,n),(O.touch?r:h).removeEventListener(a.end,e.onTouchEnd,!1);else{if(O.touch){var o=!("onTouchStart"!==a.start||!O.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};r.removeEventListener(a.start,e.onTouchStart,o),r.removeEventListener(a.move,e.onTouchMove,n),r.removeEventListener(a.end,e.onTouchEnd,o)}(t.simulateTouch&&!g.ios&&!g.android||t.simulateTouch&&!O.touch&&g.ios)&&(r.removeEventListener("mousedown",e.onTouchStart,!1),h.removeEventListener("mousemove",e.onTouchMove,n),h.removeEventListener("mouseup",e.onTouchEnd,!1))}(t.preventClicks||t.preventClicksPropagation)&&r.removeEventListener("click",e.onClick,!0),e.off("resize observerUpdate",b)}},breakpoints:{setBreakpoint:function(){var e=this,t=e.activeIndex,a=e.loopedSlides;void 0===a&&(a=0);var i=e.params,s=i.breakpoints;if(s&&(!s||0!==Object.keys(s).length)){var r=e.getBreakpoint(s);if(r&&e.currentBreakpoint!==r){var n=r in s?s[r]:e.originalParams,o=i.loop&&n.slidesPerView!==i.slidesPerView;if(D.extend(e.params,n),D.extend(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),e.currentBreakpoint=r,o){var l=t-a;e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(l+a,0,!1)}}}},getBreakpoint:function(e){if(e){var t=!1,a=[];Object.keys(e).forEach(function(e){a.push(e)}),a.sort(function(e,t){return parseInt(e,10)>parseInt(t,10)});for(var i=0;i<a.length;i+=1){var s=a[i];s>=f.innerWidth&&!t&&(t=s)}return t||"max"}}},classes:{addClasses:function(){var t=this.classNames,a=this.params,e=this.rtl,i=this.$el,s=[];s.push(a.direction),a.freeMode&&s.push("free-mode"),O.flexbox||s.push("no-flexbox"),a.autoHeight&&s.push("autoheight"),e&&s.push("rtl"),1<a.slidesPerColumn&&s.push("multirow"),g.android&&s.push("android"),g.ios&&s.push("ios"),(f.navigator.pointerEnabled||f.navigator.msPointerEnabled)&&s.push("wp8-"+a.direction),s.forEach(function(e){t.push(a.containerModifierClass+e)}),i.addClass(t.join(" "))},removeClasses:function(){var e=this.$el,t=this.classNames;e.removeClass(t.join(" "))}},images:{loadImage:function(e,t,a,i,s,r){var n;function o(){r&&r()}e.complete&&s?o():t?((n=new f.Image).onload=o,n.onerror=o,i&&(n.sizes=i),a&&(n.srcset=a),t&&(n.src=t)):o()},preloadImages:function(){var e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(var a=0;a<e.imagesToLoad.length;a+=1){var i=e.imagesToLoad[a];e.loadImage(i,i.currentSrc||i.getAttribute("src"),i.srcset||i.getAttribute("srcset"),i.sizes||i.getAttribute("sizes"),!0,t)}}}},x={},T=function(u){function h(){for(var e,s,t,a=[],i=arguments.length;i--;)a[i]=arguments[i];1===a.length&&a[0].constructor&&a[0].constructor===Object?s=a[0]:(e=(t=a)[0],s=t[1]);s||(s={}),s=D.extend({},s),e&&!s.el&&(s.el=e),u.call(this,s),Object.keys(y).forEach(function(t){Object.keys(y[t]).forEach(function(e){h.prototype[e]||(h.prototype[e]=y[t][e])})});var r=this;Object.keys(r.modules).forEach(function(e){var t=r.modules[e];if(t.params){var a=Object.keys(t.params)[0],i=t.params[a];if("object"!=typeof i)return;if(!(a in s&&"enabled"in i))return;!0===s[a]&&(s[a]={enabled:!0}),"object"!=typeof s[a]||"enabled"in s[a]||(s[a].enabled=!0),s[a]||(s[a]={enabled:!1})}});var n=D.extend({},w);r.useModulesParams(n),r.params=D.extend({},n,x,s),r.originalParams=D.extend({},r.params),r.passedParams=D.extend({},s);var o=I(r.params.el);if(e=o[0]){if(1<o.length){var l=[];return o.each(function(e,t){var a=D.extend({},s,{el:t});l.push(new h(a))}),l}e.swiper=r,o.data("swiper",r);var d,p,c=o.children("."+r.params.wrapperClass);return D.extend(r,{$el:o,el:e,$wrapperEl:c,wrapperEl:c[0],classNames:[],slides:I(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function(){return"horizontal"===r.params.direction},isVertical:function(){return"vertical"===r.params.direction},rtl:"horizontal"===r.params.direction&&("rtl"===e.dir.toLowerCase()||"rtl"===o.css("direction")),wrongRTL:"-webkit-box"===c.css("display"),activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,progress:0,velocity:0,animating:!1,allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEvents:(d=["touchstart","touchmove","touchend"],p=["mousedown","mousemove","mouseup"],f.navigator.pointerEnabled?p=["pointerdown","pointermove","pointerup"]:f.navigator.msPointerEnabled&&(p=["MSPointerDown","MsPointerMove","MsPointerUp"]),{start:O.touch||!r.params.simulateTouch?d[0]:p[0],move:O.touch||!r.params.simulateTouch?d[1]:p[1],end:O.touch||!r.params.simulateTouch?d[2]:p[2]}),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,formElements:"input, select, option, textarea, button, video",lastClickTime:D.now(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.useModules(),r.params.init&&r.init(),r}}u&&(h.__proto__=u);var e={extendedDefaults:{},defaults:{},Class:{},$:{}};return((h.prototype=Object.create(u&&u.prototype)).constructor=h).prototype.slidesPerViewDynamic=function(){var e=this,t=e.params,a=e.slides,i=e.slidesGrid,s=e.size,r=e.activeIndex,n=1;if(t.centeredSlides){for(var o,l=a[r].swiperSlideSize,d=r+1;d<a.length;d+=1)a[d]&&!o&&(n+=1,s<(l+=a[d].swiperSlideSize)&&(o=!0));for(var p=r-1;0<=p;p-=1)a[p]&&!o&&(n+=1,s<(l+=a[p].swiperSlideSize)&&(o=!0))}else for(var c=r+1;c<a.length;c+=1)i[c]-i[r]<s&&(n+=1);return n},h.prototype.update=function(){var e,t=this;t&&!t.destroyed&&(t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.params.freeMode?(a(),t.params.autoHeight&&t.updateAutoHeight()):(("auto"===t.params.slidesPerView||1<t.params.slidesPerView)&&t.isEnd&&!t.params.centeredSlides?t.slideTo(t.slides.length-1,0,!1,!0):t.slideTo(t.activeIndex,0,!1,!0))||a(),t.emit("update"));function a(){e=Math.min(Math.max(t.translate,t.maxTranslate()),t.minTranslate()),t.setTranslate(e),t.updateActiveIndex(),t.updateSlidesClasses()}},h.prototype.init=function(){var e=this;e.initialized||(e.emit("beforeInit"),e.params.breakpoints&&e.setBreakpoint(),e.addClasses(),e.params.loop&&e.loopCreate(),e.updateSize(),e.updateSlides(),e.params.grabCursor&&e.setGrabCursor(),e.params.preloadImages&&e.preloadImages(),e.params.loop?e.slideTo(e.params.initialSlide+e.loopedSlides,0,e.params.runCallbacksOnInit):e.slideTo(e.params.initialSlide,0,e.params.runCallbacksOnInit),e.attachEvents(),e.initialized=!0,e.emit("init"))},h.prototype.destroy=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);var a=this,i=a.params,s=a.$el,r=a.$wrapperEl,n=a.slides;a.emit("beforeDestroy"),a.initialized=!1,a.detachEvents(),i.loop&&a.loopDestroy(),t&&(a.removeClasses(),s.removeAttr("style"),r.removeAttr("style"),n&&n.length&&n.removeClass([i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")),a.emit("destroy"),Object.keys(a.eventsListeners).forEach(function(e){a.off(e)}),!1!==e&&(a.$el[0].swiper=null,a.$el.data("swiper",null),D.deleteProps(a)),a.destroyed=!0},h.extendDefaults=function(e){D.extend(x,e)},e.extendedDefaults.get=function(){return x},e.defaults.get=function(){return w},e.Class.get=function(){return u},e.$.get=function(){return I},Object.defineProperties(h,e),h}(a),E={name:"device",proto:{device:g},static:{device:g}},S={name:"support",proto:{support:O},static:{support:O}},C={name:"browser",proto:{browser:L},static:{browser:L}},M={name:"resize",create:function(){var e=this;D.extend(e,{resize:{resizeHandler:function(){e&&!e.destroyed&&e.initialized&&(e.emit("beforeResize"),e.emit("resize"))},orientationChangeHandler:function(){e&&!e.destroyed&&e.initialized&&e.emit("orientationchange")}}})},on:{init:function(){f.addEventListener("resize",this.resize.resizeHandler),f.addEventListener("orientationchange",this.resize.orientationChangeHandler)},destroy:function(){f.removeEventListener("resize",this.resize.resizeHandler),f.removeEventListener("orientationchange",this.resize.orientationChangeHandler)}}},z={func:f.MutationObserver||f.WebkitMutationObserver,attach:function(e,t){void 0===t&&(t={});var a=this,i=new z.func(function(e){e.forEach(function(e){a.emit("observerUpdate",e)})});i.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),a.observer.observers.push(i)},init:function(){var e=this;if(O.observer&&e.params.observer){if(e.params.observeParents)for(var t=e.$el.parents(),a=0;a<t.length;a+=1)e.observer.attach(t[a]);e.observer.attach(e.$el[0],{childList:!1}),e.observer.attach(e.$wrapperEl[0],{attributes:!1})}},destroy:function(){this.observer.observers.forEach(function(e){e.disconnect()}),this.observer.observers=[]}},P={name:"observer",params:{observer:!1,observeParents:!1},create:function(){D.extend(this,{observer:{init:z.init.bind(this),attach:z.attach.bind(this),destroy:z.destroy.bind(this),observers:[]}})},on:{init:function(){this.observer.init()},destroy:function(){this.observer.destroy()}}},k={update:function(e){var t=this,a=t.params,i=a.slidesPerView,s=a.slidesPerGroup,r=a.centeredSlides,n=t.virtual,o=n.from,l=n.to,d=n.slides,p=n.slidesGrid,c=n.renderSlide,u=n.offset;t.updateActiveIndex();var h,f,v,m=t.activeIndex||0;h=t.rtl&&t.isHorizontal()?"right":t.isHorizontal()?"left":"top",r?(f=Math.floor(i/2)+s,v=Math.floor(i/2)+s):(f=i+(s-1),v=s);var g=Math.max((m||0)-v,0),b=Math.min((m||0)+f,d.length-1),w=(t.slidesGrid[g]||0)-(t.slidesGrid[0]||0);function y(){t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.lazy&&t.params.lazy.enabled&&t.lazy.load()}if(D.extend(t.virtual,{from:g,to:b,offset:w,slidesGrid:t.slidesGrid}),o===g&&l===b&&!e)return t.slidesGrid!==p&&w!==u&&t.slides.css(h,w+"px"),void t.updateProgress();if(t.params.virtual.renderExternal)return t.params.virtual.renderExternal.call(t,{offset:w,from:g,to:b,slides:function(){for(var e=[],t=g;t<=b;t+=1)e.push(d[t]);return e}()}),void y();var x=[],T=[];if(e)t.$wrapperEl.find("."+t.params.slideClass).remove();else for(var E=o;E<=l;E+=1)(E<g||b<E)&&t.$wrapperEl.find("."+t.params.slideClass+'[data-swiper-slide-index="'+E+'"]').remove();for(var S=0;S<d.length;S+=1)g<=S&&S<=b&&(void 0===l||e?T.push(S):(l<S&&T.push(S),S<o&&x.push(S)));T.forEach(function(e){t.$wrapperEl.append(c(d[e],e))}),x.sort(function(e,t){return e<t}).forEach(function(e){t.$wrapperEl.prepend(c(d[e],e))}),t.$wrapperEl.children(".swiper-slide").css(h,w+"px"),y()},renderSlide:function(e,t){var a=this,i=a.params.virtual;if(i.cache&&a.virtual.cache[t])return a.virtual.cache[t];var s=i.renderSlide?I(i.renderSlide.call(a,e,t)):I('<div class="'+a.params.slideClass+'" data-swiper-slide-index="'+t+'">'+e+"</div>");return s.attr("data-swiper-slide-index")||s.attr("data-swiper-slide-index",t),i.cache&&(a.virtual.cache[t]=s),s},appendSlide:function(e){this.virtual.slides.push(e),this.virtual.update(!0)},prependSlide:function(e){var t=this;if(t.virtual.slides.unshift(e),t.params.virtual.cache){var a=t.virtual.cache,i={};Object.keys(a).forEach(function(e){i[e+1]=a[e]}),t.virtual.cache=i}t.virtual.update(!0),t.slideNext(0)}},A={name:"virtual",params:{virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null}},create:function(){var e=this;D.extend(e,{virtual:{update:k.update.bind(e),appendSlide:k.appendSlide.bind(e),prependSlide:k.prependSlide.bind(e),renderSlide:k.renderSlide.bind(e),slides:e.params.virtual.slides,cache:{}}})},on:{beforeInit:function(){var e=this;if(e.params.virtual.enabled){e.classNames.push(e.params.containerModifierClass+"virtual");var t={watchSlidesProgress:!0};D.extend(e.params,t),D.extend(e.originalParams,t),e.virtual.update()}},setTranslate:function(){this.params.virtual.enabled&&this.virtual.update()}}},H={handle:function(e){var t=this,a=e;a.originalEvent&&(a=a.originalEvent);var i=a.keyCode||a.charCode;if(!t.allowSlideNext&&(t.isHorizontal()&&39===i||t.isVertical()&&40===i))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&37===i||t.isVertical()&&38===i))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||h.activeElement&&h.activeElement.nodeName&&("input"===h.activeElement.nodeName.toLowerCase()||"textarea"===h.activeElement.nodeName.toLowerCase()))){if(37===i||39===i||38===i||40===i){var s=!1;if(0<t.$el.parents("."+t.params.slideClass).length&&0===t.$el.parents("."+t.params.slideActiveClass).length)return;var r=f.pageXOffset,n=f.pageYOffset,o=f.innerWidth,l=f.innerHeight,d=t.$el.offset();t.rtl&&(d.left-=t.$el[0].scrollLeft);for(var p=[[d.left,d.top],[d.left+t.width,d.top],[d.left,d.top+t.height],[d.left+t.width,d.top+t.height]],c=0;c<p.length;c+=1){var u=p[c];u[0]>=r&&u[0]<=r+o&&u[1]>=n&&u[1]<=n+l&&(s=!0)}if(!s)return}t.isHorizontal()?(37!==i&&39!==i||(a.preventDefault?a.preventDefault():a.returnValue=!1),(39===i&&!t.rtl||37===i&&t.rtl)&&t.slideNext(),(37===i&&!t.rtl||39===i&&t.rtl)&&t.slidePrev()):(38!==i&&40!==i||(a.preventDefault?a.preventDefault():a.returnValue=!1),40===i&&t.slideNext(),38===i&&t.slidePrev()),t.emit("keyPress",i)}},enable:function(){this.keyboard.enabled||(I(h).on("keydown",this.keyboard.handle),this.keyboard.enabled=!0)},disable:function(){this.keyboard.enabled&&(I(h).off("keydown",this.keyboard.handle),this.keyboard.enabled=!1)}},X={name:"keyboard",params:{keyboard:{enabled:!1}},create:function(){D.extend(this,{keyboard:{enabled:!1,enable:H.enable.bind(this),disable:H.disable.bind(this),handle:H.handle.bind(this)}})},on:{init:function(){this.params.keyboard.enabled&&this.keyboard.enable()},destroy:function(){this.keyboard.enabled&&this.keyboard.disable()}}};var N={lastScrollTime:D.now(),event:-1<f.navigator.userAgent.indexOf("firefox")?"DOMMouseScroll":function(){var e="onwheel",t=e in h;if(!t){var a=h.createElement("div");a.setAttribute(e,"return;"),t="function"==typeof a[e]}return!t&&h.implementation&&h.implementation.hasFeature&&!0!==h.implementation.hasFeature("","")&&(t=h.implementation.hasFeature("Events.wheel","3.0")),t}()?"wheel":"mousewheel",normalize:function(e){var t=0,a=0,i=0,s=0;return"detail"in e&&(a=e.detail),"wheelDelta"in e&&(a=-e.wheelDelta/120),"wheelDeltaY"in e&&(a=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=a,a=0),i=10*t,s=10*a,"deltaY"in e&&(s=e.deltaY),"deltaX"in e&&(i=e.deltaX),(i||s)&&e.deltaMode&&(1===e.deltaMode?(i*=40,s*=40):(i*=800,s*=800)),i&&!t&&(t=i<1?-1:1),s&&!a&&(a=s<1?-1:1),{spinX:t,spinY:a,pixelX:i,pixelY:s}},handle:function(e){var t=e,a=this,i=a.params.mousewheel;t.originalEvent&&(t=t.originalEvent);var s=0,r=a.rtl?-1:1,n=N.normalize(t);if(i.forceToAxis)if(a.isHorizontal()){if(!(Math.abs(n.pixelX)>Math.abs(n.pixelY)))return!0;s=n.pixelX*r}else{if(!(Math.abs(n.pixelY)>Math.abs(n.pixelX)))return!0;s=n.pixelY}else s=Math.abs(n.pixelX)>Math.abs(n.pixelY)?-n.pixelX*r:-n.pixelY;if(0===s)return!0;if(i.invert&&(s=-s),a.params.freeMode){var o=a.getTranslate()+s*i.sensitivity,l=a.isBeginning,d=a.isEnd;if(o>=a.minTranslate()&&(o=a.minTranslate()),o<=a.maxTranslate()&&(o=a.maxTranslate()),a.setTransition(0),a.setTranslate(o),a.updateProgress(),a.updateActiveIndex(),a.updateSlidesClasses(),(!l&&a.isBeginning||!d&&a.isEnd)&&a.updateSlidesClasses(),a.params.freeModeSticky&&(clearTimeout(a.mousewheel.timeout),a.mousewheel.timeout=D.nextTick(function(){a.slideReset()},300)),a.emit("scroll",t),a.params.autoplay&&a.params.autoplayDisableOnInteraction&&a.stopAutoplay(),0===o||o===a.maxTranslate())return!0}else{if(60<D.now()-a.mousewheel.lastScrollTime)if(s<0)if(a.isEnd&&!a.params.loop||a.animating){if(i.releaseOnEdges)return!0}else a.slideNext(),a.emit("scroll",t);else if(a.isBeginning&&!a.params.loop||a.animating){if(i.releaseOnEdges)return!0}else a.slidePrev(),a.emit("scroll",t);a.mousewheel.lastScrollTime=(new f.Date).getTime()}return t.preventDefault?t.preventDefault():t.returnValue=!1,!1},enable:function(){var e=this;if(!N.event)return!1;if(e.mousewheel.enabled)return!1;var t=e.$el;return"container"!==e.params.mousewheel.eventsTarged&&(t=I(e.params.mousewheel.eventsTarged)),t.on(N.event,e.mousewheel.handle),e.mousewheel.enabled=!0},disable:function(){var e=this;if(!N.event)return!1;if(!e.mousewheel.enabled)return!1;var t=e.$el;return"container"!==e.params.mousewheel.eventsTarged&&(t=I(e.params.mousewheel.eventsTarged)),t.off(N.event,e.mousewheel.handle),!(e.mousewheel.enabled=!1)}},Y={name:"mousewheel",params:{mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarged:"container"}},create:function(){D.extend(this,{mousewheel:{enabled:!1,enable:N.enable.bind(this),disable:N.disable.bind(this),handle:N.handle.bind(this),lastScrollTime:D.now()}})},on:{init:function(){this.params.mousewheel.enabled&&this.mousewheel.enable()},destroy:function(){this.mousewheel.enabled&&this.mousewheel.disable()}}},G={update:function(){var e=this,t=e.params.navigation;if(!e.params.loop){var a=e.navigation,i=a.$nextEl,s=a.$prevEl;s&&0<s.length&&(e.isBeginning?s.addClass(t.disabledClass):s.removeClass(t.disabledClass)),i&&0<i.length&&(e.isEnd?i.addClass(t.disabledClass):i.removeClass(t.disabledClass))}},init:function(){var e,t,a=this,i=a.params.navigation;(i.nextEl||i.prevEl)&&(i.nextEl&&(e=I(i.nextEl),a.params.uniqueNavElements&&"string"==typeof i.nextEl&&1<e.length&&1===a.$el.find(i.nextEl).length&&(e=a.$el.find(i.nextEl))),i.prevEl&&(t=I(i.prevEl),a.params.uniqueNavElements&&"string"==typeof i.prevEl&&1<t.length&&1===a.$el.find(i.prevEl).length&&(t=a.$el.find(i.prevEl))),e&&0<e.length&&e.on("click",function(e){e.preventDefault(),a.isEnd&&!a.params.loop||a.slideNext()}),t&&0<t.length&&t.on("click",function(e){e.preventDefault(),a.isBeginning&&!a.params.loop||a.slidePrev()}),D.extend(a.navigation,{$nextEl:e,nextEl:e&&e[0],$prevEl:t,prevEl:t&&t[0]}))},destroy:function(){var e=this.navigation,t=e.$nextEl,a=e.$prevEl;t&&t.length&&(t.off("click"),t.removeClass(this.params.navigation.disabledClass)),a&&a.length&&(a.off("click"),a.removeClass(this.params.navigation.disabledClass))}},B={name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden"}},create:function(){D.extend(this,{navigation:{init:G.init.bind(this),update:G.update.bind(this),destroy:G.destroy.bind(this)}})},on:{init:function(){this.navigation.init(),this.navigation.update()},toEdge:function(){this.navigation.update()},fromEdge:function(){this.navigation.update()},destroy:function(){this.navigation.destroy()},click:function(e){var t=this.navigation,a=t.$nextEl,i=t.$prevEl;!this.params.navigation.hideOnClick||I(e.target).is(i)||I(e.target).is(a)||(a&&a.toggleClass(this.params.navigation.hiddenClass),i&&i.toggleClass(this.params.navigation.hiddenClass))}}},V={update:function(){var e=this,t=e.rtl,i=e.params.pagination;if(i.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var s,a=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,r=e.pagination.$el,n=e.params.loop?Math.ceil((a-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?((s=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup))>a-1-2*e.loopedSlides&&(s-=a-2*e.loopedSlides),n-1<s&&(s-=n),s<0&&"bullets"!==e.params.paginationType&&(s=n+s)):s=void 0!==e.snapIndex?e.snapIndex:e.activeIndex||0,"bullets"===i.type&&e.pagination.bullets&&0<e.pagination.bullets.length){var o=e.pagination.bullets;if(i.dynamicBullets&&(e.pagination.bulletSize=o.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),r.css(e.isHorizontal()?"width":"height",5*e.pagination.bulletSize+"px")),o.removeClass(i.bulletActiveClass+" "+i.bulletActiveClass+"-next "+i.bulletActiveClass+"-next-next "+i.bulletActiveClass+"-prev "+i.bulletActiveClass+"-prev-prev"),1<r.length)o.each(function(e,t){var a=I(t);a.index()===s&&(a.addClass(i.bulletActiveClass),i.dynamicBullets&&(a.prev().addClass(i.bulletActiveClass+"-prev").prev().addClass(i.bulletActiveClass+"-prev-prev"),a.next().addClass(i.bulletActiveClass+"-next").next().addClass(i.bulletActiveClass+"-next-next")))});else{var l=o.eq(s);l.addClass(i.bulletActiveClass),i.dynamicBullets&&(l.prev().addClass(i.bulletActiveClass+"-prev").prev().addClass(i.bulletActiveClass+"-prev-prev"),l.next().addClass(i.bulletActiveClass+"-next").next().addClass(i.bulletActiveClass+"-next-next"))}if(i.dynamicBullets){var d=Math.min(o.length,5),p=(e.pagination.bulletSize*d-e.pagination.bulletSize)/2-s*e.pagination.bulletSize,c=t?"right":"left";o.css(e.isHorizontal()?c:"top",p+"px")}}if("fraction"===i.type&&(r.find("."+i.currentClass).text(s+1),r.find("."+i.totalClass).text(n)),"progressbar"===i.type){var u=(s+1)/n,h=u,f=1;e.isHorizontal()||(f=u,h=1),r.find("."+i.progressbarFillClass).transform("translate3d(0,0,0) scaleX("+h+") scaleY("+f+")").transition(e.params.speed)}"custom"===i.type&&i.renderCustom?(r.html(i.renderCustom(e,s+1,n)),e.emit("paginationRender",e,r[0])):e.emit("paginationUpdate",e,r[0])}},render:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var a=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,i=e.pagination.$el,s="";if("bullets"===t.type){for(var r=e.params.loop?Math.ceil((a-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length,n=0;n<r;n+=1)t.renderBullet?s+=t.renderBullet.call(e,n,t.bulletClass):s+="<"+t.bulletElement+' class="'+t.bulletClass+'"></'+t.bulletElement+">";i.html(s),e.pagination.bullets=i.find("."+t.bulletClass)}"fraction"===t.type&&(s=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):'<span class="'+t.currentClass+'"></span> / <span class="'+t.totalClass+'"></span>',i.html(s)),"progressbar"===t.type&&(s=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):'<span class="'+t.progressbarFillClass+'"></span>',i.html(s)),"custom"!==t.type&&e.emit("paginationRender",e.pagination.$el[0])}},init:function(){var a=this,e=a.params.pagination;if(e.el){var t=I(e.el);0!==t.length&&(a.params.uniqueNavElements&&"string"==typeof e.el&&1<t.length&&1===a.$el.find(e.el).length&&(t=a.$el.find(e.el)),"bullets"===e.type&&e.clickable&&t.addClass(e.clickableClass),t.addClass(e.modifierClass+e.type),"bullets"===e.type&&e.dynamicBullets&&t.addClass(""+e.modifierClass+e.type+"-dynamic"),e.clickable&&t.on("click","."+e.bulletClass,function(e){e.preventDefault();var t=I(this).index()*a.params.slidesPerGroup;a.params.loop&&(t+=a.loopedSlides),a.slideTo(t)}),D.extend(a.pagination,{$el:t,el:t[0]}))}},destroy:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var a=e.pagination.$el;a.removeClass(t.hiddenClass),a.removeClass(t.modifierClass+t.type),e.pagination.bullets&&e.pagination.bullets.removeClass(t.bulletActiveClass),t.clickable&&a.off("click","."+t.bulletClass)}}},R={name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,type:"bullets",dynamicBullets:!1,bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",clickableClass:"swiper-pagination-clickable"}},create:function(){var e=this;D.extend(e,{pagination:{init:V.init.bind(e),render:V.render.bind(e),update:V.update.bind(e),destroy:V.destroy.bind(e)}})},on:{init:function(){this.pagination.init(),this.pagination.render(),this.pagination.update()},activeIndexChange:function(){this.params.loop?this.pagination.update():void 0===this.snapIndex&&this.pagination.update()},snapIndexChange:function(){this.params.loop||this.pagination.update()},slidesLengthChange:function(){this.params.loop&&(this.pagination.render(),this.pagination.update())},snapGridLengthChange:function(){this.params.loop||(this.pagination.render(),this.pagination.update())},destroy:function(){this.pagination.destroy()},click:function(e){var t=this;t.params.pagination.el&&t.params.pagination.hideOnClick&&0<t.pagination.$el.length&&!I(e.target).hasClass(t.params.pagination.bulletClass)&&t.pagination.$el.toggleClass(t.params.pagination.hiddenClass)}}},W={setTranslate:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var t=e.scrollbar,a=e.rtl,i=e.progress,s=t.dragSize,r=t.trackSize,n=t.$dragEl,o=t.$el,l=e.params.scrollbar,d=s,p=(r-s)*i;a&&e.isHorizontal()?0<(p=-p)?(d=s-p,p=0):r<-p+s&&(d=r+p):p<0?(d=s+p,p=0):r<p+s&&(d=r-p),e.isHorizontal()?(O.transforms3d?n.transform("translate3d("+p+"px, 0, 0)"):n.transform("translateX("+p+"px)"),n[0].style.width=d+"px"):(O.transforms3d?n.transform("translate3d(0px, "+p+"px, 0)"):n.transform("translateY("+p+"px)"),n[0].style.height=d+"px"),l.hide&&(clearTimeout(e.scrollbar.timeout),o[0].style.opacity=1,e.scrollbar.timeout=setTimeout(function(){o[0].style.opacity=0,o.transition(400)},1e3))}},setTransition:function(e){this.params.scrollbar.el&&this.scrollbar.el&&this.scrollbar.$dragEl.transition(e)},updateSize:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var t=e.scrollbar,a=t.$dragEl,i=t.$el;a[0].style.width="",a[0].style.height="";var s,r=e.isHorizontal()?i[0].offsetWidth:i[0].offsetHeight,n=e.size/e.virtualSize,o=n*(r/e.size);s="auto"===e.params.scrollbar.dragSize?r*n:parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?a[0].style.width=s+"px":a[0].style.height=s+"px",i[0].style.display=1<=n?"none":"",e.params.scrollbarHide&&(i[0].style.opacity=0),D.extend(t,{trackSize:r,divider:n,moveDivider:o,dragSize:s})}},setDragPosition:function(e){var t=this,a=t.scrollbar,i=a.$el,s=a.dragSize,r=a.moveDivider,n=(t.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY)-i.offset()[t.isHorizontal()?"left":"top"]-s/2,o=-t.minTranslate()*r,l=-t.maxTranslate()*r;n<o?n=o:l<n&&(n=l),t.rtl&&(n=l-n),n=-n/r,t.updateProgress(n),t.setTranslate(n),t.updateActiveIndex(),t.updateSlidesClasses()},onDragStart:function(e){var t=this,a=t.params.scrollbar,i=t.scrollbar,s=t.$wrapperEl,r=i.$el,n=i.$dragEl;t.scrollbar.isTouched=!0,e.preventDefault(),e.stopPropagation(),s.transition(100),n.transition(100),i.setDragPosition(e),clearTimeout(t.scrollbar.dragTimeout),r.transition(0),a.hide&&r.css("opacity",1),t.emit("scrollbarDragStart",e)},onDragMove:function(e){var t=this.scrollbar,a=this.$wrapperEl,i=t.$el,s=t.$dragEl;this.scrollbar.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,t.setDragPosition(e),a.transition(0),i.transition(0),s.transition(0),this.emit("scrollbarDragMove",e))},onDragEnd:function(e){var t=this,a=t.params.scrollbar,i=t.scrollbar.$el;t.scrollbar.isTouched&&(t.scrollbar.isTouched=!1,a.hide&&(clearTimeout(t.scrollbar.dragTimeout),t.scrollbar.dragTimeout=D.nextTick(function(){i.css("opacity",0),i.transition(400)},1e3)),t.emit("scrollbarDragEnd",e),a.snapOnRelease&&t.slideReset())},enableDraggable:function(){var e=this;if(e.params.scrollbar.el){var t=e.scrollbar.$el,a=O.touch?t[0]:document;t.on(e.scrollbar.dragEvents.start,e.scrollbar.onDragStart),I(a).on(e.scrollbar.dragEvents.move,e.scrollbar.onDragMove),I(a).on(e.scrollbar.dragEvents.end,e.scrollbar.onDragEnd)}},disableDraggable:function(){var e=this;if(e.params.scrollbar.el){var t=e.scrollbar.$el,a=O.touch?t[0]:document;t.off(e.scrollbar.dragEvents.start),I(a).off(e.scrollbar.dragEvents.move),I(a).off(e.scrollbar.dragEvents.end)}},init:function(){var e=this;if(e.params.scrollbar.el){var t=e.scrollbar,a=e.$el,i=e.touchEvents,s=e.params.scrollbar,r=I(s.el);e.params.uniqueNavElements&&"string"==typeof s.el&&1<r.length&&1===a.find(s.el).length&&(r=a.find(s.el));var n=r.find(".swiper-scrollbar-drag");0===n.length&&(n=I('<div class="swiper-scrollbar-drag"></div>'),r.append(n)),e.scrollbar.dragEvents=!1!==e.params.simulateTouch||O.touch?i:{start:"mousedown",move:"mousemove",end:"mouseup"},D.extend(t,{$el:r,el:r[0],$dragEl:n,dragEl:n[0]}),s.draggable&&t.enableDraggable()}},destroy:function(){this.scrollbar.disableDraggable()}},F={name:"scrollbar",params:{scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0}},create:function(){var e=this;D.extend(e,{scrollbar:{init:W.init.bind(e),destroy:W.destroy.bind(e),updateSize:W.updateSize.bind(e),setTranslate:W.setTranslate.bind(e),setTransition:W.setTransition.bind(e),enableDraggable:W.enableDraggable.bind(e),disableDraggable:W.disableDraggable.bind(e),setDragPosition:W.setDragPosition.bind(e),onDragStart:W.onDragStart.bind(e),onDragMove:W.onDragMove.bind(e),onDragEnd:W.onDragEnd.bind(e),isTouched:!1,timeout:null,dragTimeout:null}})},on:{init:function(){this.scrollbar.init(),this.scrollbar.updateSize(),this.scrollbar.setTranslate()},update:function(){this.scrollbar.updateSize()},resize:function(){this.scrollbar.updateSize()},observerUpdate:function(){this.scrollbar.updateSize()},setTranslate:function(){this.scrollbar.setTranslate()},setTransition:function(e){this.scrollbar.setTransition(e)},destroy:function(){this.scrollbar.destroy()}}},j={setTransform:function(e,t){var a=this.rtl,i=I(e),s=a?-1:1,r=i.attr("data-swiper-parallax")||"0",n=i.attr("data-swiper-parallax-x"),o=i.attr("data-swiper-parallax-y"),l=i.attr("data-swiper-parallax-scale"),d=i.attr("data-swiper-parallax-opacity");if(n||o?(n=n||"0",o=o||"0"):this.isHorizontal()?(n=r,o="0"):(o=r,n="0"),n=0<=n.indexOf("%")?parseInt(n,10)*t*s+"%":n*t*s+"px",o=0<=o.indexOf("%")?parseInt(o,10)*t+"%":o*t+"px",null!=d){var p=d-(d-1)*(1-Math.abs(t));i[0].style.opacity=p}if(null==l)i.transform("translate3d("+n+", "+o+", 0px)");else{var c=l-(l-1)*(1-Math.abs(t));i.transform("translate3d("+n+", "+o+", 0px) scale("+c+")")}},setTranslate:function(){var i=this,e=i.$el,t=i.slides,s=i.progress,r=i.snapGrid;e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e,t){i.parallax.setTransform(t,s)}),t.each(function(e,t){var a=t.progress;1<i.params.slidesPerGroup&&"auto"!==i.params.slidesPerView&&(a+=Math.ceil(e/2)-s*(r.length-1)),a=Math.min(Math.max(a,-1),1),I(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e,t){i.parallax.setTransform(t,a)})})},setTransition:function(s){void 0===s&&(s=this.params.speed);this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e,t){var a=I(t),i=parseInt(a.attr("data-swiper-parallax-duration"),10)||s;0===s&&(i=0),a.transition(i)})}},q={name:"parallax",params:{parallax:{enabled:!1}},create:function(){D.extend(this,{parallax:{setTransform:j.setTransform.bind(this),setTranslate:j.setTranslate.bind(this),setTransition:j.setTransition.bind(this)}})},on:{beforeInit:function(){this.params.watchSlidesProgress=!0},init:function(){this.params.parallax&&this.parallax.setTranslate()},setTranslate:function(){this.params.parallax&&this.parallax.setTranslate()},setTransition:function(e){this.params.parallax&&this.parallax.setTransition(e)}}},K={getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var t=e.targetTouches[0].pageX,a=e.targetTouches[0].pageY,i=e.targetTouches[1].pageX,s=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(i-t,2)+Math.pow(s-a,2))},onGestureStart:function(e){var t=this,a=t.params.zoom,i=t.zoom,s=i.gesture;if(i.fakeGestureTouched=!1,i.fakeGestureMoved=!1,!O.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;i.fakeGestureTouched=!0,s.scaleStart=K.getDistanceBetweenTouches(e)}s.$slideEl&&s.$slideEl.length||(s.$slideEl=I(this),0===s.$slideEl.length&&(s.$slideEl=t.slides.eq(t.activeIndex)),s.$imageEl=s.$slideEl.find("img, svg, canvas"),s.$imageWrapEl=s.$imageEl.parent("."+a.containerClass),s.maxRatio=s.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,0!==s.$imageWrapEl.length)?(s.$imageEl.transition(0),t.zoom.isScaling=!0):s.$imageEl=void 0},onGestureChange:function(e){var t=this.params.zoom,a=this.zoom,i=a.gesture;if(!O.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;a.fakeGestureMoved=!0,i.scaleMove=K.getDistanceBetweenTouches(e)}i.$imageEl&&0!==i.$imageEl.length&&(O.gestures?this.zoom.scale=e.scale*a.currentScale:a.scale=i.scaleMove/i.scaleStart*a.currentScale,a.scale>i.maxRatio&&(a.scale=i.maxRatio-1+Math.pow(a.scale-i.maxRatio+1,.5)),a.scale<t.minRatio&&(a.scale=t.minRatio+1-Math.pow(t.minRatio-a.scale+1,.5)),i.$imageEl.transform("translate3d(0,0,0) scale("+a.scale+")"))},onGestureEnd:function(e){var t=this.params.zoom,a=this.zoom,i=a.gesture;if(!O.gestures){if(!a.fakeGestureTouched||!a.fakeGestureMoved)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!g.android)return;a.fakeGestureTouched=!1,a.fakeGestureMoved=!1}i.$imageEl&&0!==i.$imageEl.length&&(a.scale=Math.max(Math.min(a.scale,i.maxRatio),t.minRatio),i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale("+a.scale+")"),a.currentScale=a.scale,a.isScaling=!1,1===a.scale&&(i.$slideEl=void 0))},onTouchStart:function(e){var t=this.zoom,a=t.gesture,i=t.image;a.$imageEl&&0!==a.$imageEl.length&&(i.isTouched||(g.android&&e.preventDefault(),i.isTouched=!0,i.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,i.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))},onTouchMove:function(e){var t=this,a=t.zoom,i=a.gesture,s=a.image,r=a.velocity;if(i.$imageEl&&0!==i.$imageEl.length&&(t.allowClick=!1,s.isTouched&&i.$slideEl)){s.isMoved||(s.width=i.$imageEl[0].offsetWidth,s.height=i.$imageEl[0].offsetHeight,s.startX=D.getTranslate(i.$imageWrapEl[0],"x")||0,s.startY=D.getTranslate(i.$imageWrapEl[0],"y")||0,i.slideWidth=i.$slideEl[0].offsetWidth,i.slideHeight=i.$slideEl[0].offsetHeight,i.$imageWrapEl.transition(0),t.rtl&&(s.startX=-s.startX),t.rtl&&(s.startY=-s.startY));var n=s.width*a.scale,o=s.height*a.scale;if(!(n<i.slideWidth&&o<i.slideHeight)){if(s.minX=Math.min(i.slideWidth/2-n/2,0),s.maxX=-s.minX,s.minY=Math.min(i.slideHeight/2-o/2,0),s.maxY=-s.minY,s.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!s.isMoved&&!a.isScaling){if(t.isHorizontal()&&(Math.floor(s.minX)===Math.floor(s.startX)&&s.touchesCurrent.x<s.touchesStart.x||Math.floor(s.maxX)===Math.floor(s.startX)&&s.touchesCurrent.x>s.touchesStart.x))return void(s.isTouched=!1);if(!t.isHorizontal()&&(Math.floor(s.minY)===Math.floor(s.startY)&&s.touchesCurrent.y<s.touchesStart.y||Math.floor(s.maxY)===Math.floor(s.startY)&&s.touchesCurrent.y>s.touchesStart.y))return void(s.isTouched=!1)}e.preventDefault(),e.stopPropagation(),s.isMoved=!0,s.currentX=s.touchesCurrent.x-s.touchesStart.x+s.startX,s.currentY=s.touchesCurrent.y-s.touchesStart.y+s.startY,s.currentX<s.minX&&(s.currentX=s.minX+1-Math.pow(s.minX-s.currentX+1,.8)),s.currentX>s.maxX&&(s.currentX=s.maxX-1+Math.pow(s.currentX-s.maxX+1,.8)),s.currentY<s.minY&&(s.currentY=s.minY+1-Math.pow(s.minY-s.currentY+1,.8)),s.currentY>s.maxY&&(s.currentY=s.maxY-1+Math.pow(s.currentY-s.maxY+1,.8)),r.prevPositionX||(r.prevPositionX=s.touchesCurrent.x),r.prevPositionY||(r.prevPositionY=s.touchesCurrent.y),r.prevTime||(r.prevTime=Date.now()),r.x=(s.touchesCurrent.x-r.prevPositionX)/(Date.now()-r.prevTime)/2,r.y=(s.touchesCurrent.y-r.prevPositionY)/(Date.now()-r.prevTime)/2,Math.abs(s.touchesCurrent.x-r.prevPositionX)<2&&(r.x=0),Math.abs(s.touchesCurrent.y-r.prevPositionY)<2&&(r.y=0),r.prevPositionX=s.touchesCurrent.x,r.prevPositionY=s.touchesCurrent.y,r.prevTime=Date.now(),i.$imageWrapEl.transform("translate3d("+s.currentX+"px, "+s.currentY+"px,0)")}}},onTouchEnd:function(){var e=this.zoom,t=e.gesture,a=e.image,i=e.velocity;if(t.$imageEl&&0!==t.$imageEl.length){if(!a.isTouched||!a.isMoved)return a.isTouched=!1,void(a.isMoved=!1);a.isTouched=!1,a.isMoved=!1;var s=300,r=300,n=i.x*s,o=a.currentX+n,l=i.y*r,d=a.currentY+l;0!==i.x&&(s=Math.abs((o-a.currentX)/i.x)),0!==i.y&&(r=Math.abs((d-a.currentY)/i.y));var p=Math.max(s,r);a.currentX=o,a.currentY=d;var c=a.width*e.scale,u=a.height*e.scale;a.minX=Math.min(t.slideWidth/2-c/2,0),a.maxX=-a.minX,a.minY=Math.min(t.slideHeight/2-u/2,0),a.maxY=-a.minY,a.currentX=Math.max(Math.min(a.currentX,a.maxX),a.minX),a.currentY=Math.max(Math.min(a.currentY,a.maxY),a.minY),t.$imageWrapEl.transition(p).transform("translate3d("+a.currentX+"px, "+a.currentY+"px,0)")}},onTransitionEnd:function(){var e=this.zoom,t=e.gesture;t.$slideEl&&this.previousIndex!==this.activeIndex&&(t.$imageEl.transform("translate3d(0,0,0) scale(1)"),t.$imageWrapEl.transform("translate3d(0,0,0)"),t.$slideEl=void 0,t.$imageEl=void 0,t.$imageWrapEl=void 0,e.scale=1,e.currentScale=1)},toggle:function(e){var t=this.zoom;t.scale&&1!==t.scale?t.out():t.in(e)},in:function(e){var t,a,i,s,r,n,o,l,d,p,c,u,h,f,v,m,g=this,b=g.zoom,w=g.params.zoom,y=b.gesture,x=b.image;(y.$slideEl||(y.$slideEl=g.clickedSlide?I(g.clickedSlide):g.slides.eq(g.activeIndex),y.$imageEl=y.$slideEl.find("img, svg, canvas"),y.$imageWrapEl=y.$imageEl.parent("."+w.containerClass)),y.$imageEl&&0!==y.$imageEl.length)&&(y.$slideEl.addClass(""+w.zoomedSlideClass),void 0===x.touchesStart.x&&e?(t="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,a="touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(t=x.touchesStart.x,a=x.touchesStart.y),b.scale=y.$imageWrapEl.attr("data-swiper-zoom")||w.maxRatio,b.currentScale=y.$imageWrapEl.attr("data-swiper-zoom")||w.maxRatio,e?(v=y.$slideEl[0].offsetWidth,m=y.$slideEl[0].offsetHeight,i=y.$slideEl.offset().left+v/2-t,s=y.$slideEl.offset().top+m/2-a,o=y.$imageEl[0].offsetWidth,l=y.$imageEl[0].offsetHeight,d=o*b.scale,p=l*b.scale,h=-(c=Math.min(v/2-d/2,0)),f=-(u=Math.min(m/2-p/2,0)),(r=i*b.scale)<c&&(r=c),h<r&&(r=h),(n=s*b.scale)<u&&(n=u),f<n&&(n=f)):n=r=0,y.$imageWrapEl.transition(300).transform("translate3d("+r+"px, "+n+"px,0)"),y.$imageEl.transition(300).transform("translate3d(0,0,0) scale("+b.scale+")"))},out:function(){var e=this,t=e.zoom,a=e.params.zoom,i=t.gesture;i.$slideEl||(i.$slideEl=e.clickedSlide?I(e.clickedSlide):e.slides.eq(e.activeIndex),i.$imageEl=i.$slideEl.find("img, svg, canvas"),i.$imageWrapEl=i.$imageEl.parent("."+a.containerClass)),i.$imageEl&&0!==i.$imageEl.length&&(t.scale=1,t.currentScale=1,i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),i.$slideEl.removeClass(""+a.zoomedSlideClass),i.$slideEl=void 0)},enable:function(){var i=this,s=i.zoom;if(!s.enabled){s.enabled=!0;var e=i.slides,t=!("touchstart"!==i.touchEvents.start||!O.passiveListener||!i.params.passiveListeners)&&{passive:!0,capture:!1};O.gestures?(e.on("gesturestart",s.onGestureStart,t),e.on("gesturechange",s.onGestureChange,t),e.on("gestureend",s.onGestureEnd,t)):"touchstart"===i.touchEvents.start&&(e.on(i.touchEvents.start,s.onGestureStart,t),e.on(i.touchEvents.move,s.onGestureChange,t),e.on(i.touchEvents.end,s.onGestureEnd,t)),i.slides.each(function(e,t){var a=I(t);0<a.find("."+i.params.zoom.containerClass).length&&a.on(i.touchEvents.move,s.onTouchMove)})}},disable:function(){var i=this,s=i.zoom;if(s.enabled){i.zoom.enabled=!1;var e=i.slides,t=!("touchstart"!==i.touchEvents.start||!O.passiveListener||!i.params.passiveListeners)&&{passive:!0,capture:!1};O.gestures?(e.off("gesturestart",s.onGestureStart,t),e.off("gesturechange",s.onGestureChange,t),e.off("gestureend",s.onGestureEnd,t)):"touchstart"===i.touchEvents.start&&(e.off(i.touchEvents.start,s.onGestureStart,t),e.off(i.touchEvents.move,s.onGestureChange,t),e.off(i.touchEvents.end,s.onGestureEnd,t)),i.slides.each(function(e,t){var a=I(t);0<a.find("."+i.params.zoom.containerClass).length&&a.off(i.touchEvents.move,s.onTouchMove)})}}},U={name:"zoom",params:{zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}},create:function(){var t=this,a={enabled:!1,scale:1,currentScale:1,isScaling:!1,gesture:{$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0}};"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(e){a[e]=K[e].bind(t)}),D.extend(t,{zoom:a})},on:{init:function(){this.params.zoom.enabled&&this.zoom.enable()},destroy:function(){this.zoom.disable()},touchStart:function(e){this.zoom.enabled&&this.zoom.onTouchStart(e)},touchEnd:function(e){this.zoom.enabled&&this.zoom.onTouchEnd(e)},doubleTap:function(e){this.params.zoom.enabled&&this.zoom.enabled&&this.params.zoom.toggle&&this.zoom.toggle(e)},transitionEnd:function(){this.zoom.enabled&&this.params.zoom.enabled&&this.zoom.onTransitionEnd()}}},_={loadInSlide:function(e,l){void 0===l&&(l=!0);var d=this,p=d.params.lazy;if(void 0!==e&&0!==d.slides.length){var i=$(window),s=$(d.$el),c=function(){if(!s.is(":hidden")){var e=i.scrollTop(),t=e+i.height(),a=s.offset().top;return a+s.height()>=e-i.height()/2&&a<=t+i.height()/2}}(),u=d.virtual&&d.params.virtual.enabled?d.$wrapperEl.children("."+d.params.slideClass+'[data-swiper-slide-index="'+e+'"]'):d.slides.eq(e),t=u.find("."+p.elementClass+":not(."+p.loadedClass+"):not(."+p.loadingClass+")");!u.hasClass(p.elementClass)||u.hasClass(p.loadedClass)||u.hasClass(p.loadingClass)||(t=t.add(u[0])),0!==t.length&&t.each(function(e,t){var i=I(t);i.addClass(p.loadingClass);var s=i.attr("data-background"),r=i.attr("data-src-swiper"),n=i.attr("data-srcset"),o=i.attr("data-sizes");d.loadImage(i[0],r||s,n,o,!1,function(){if(null!=d&&d&&(!d||d.params)&&!d.destroyed){if(s?(i.css("background-image",'url("'+s+'")'),i.removeAttr("data-background")):(n&&(i.attr("srcset",n),i.removeAttr("data-srcset")),o&&(i.attr("sizes",o),i.removeAttr("data-sizes")),r&&(i.attr(c?"src":"data-src",r),i.removeAttr("data-src-swiper"))),i.addClass(p.loadedClass).removeClass(p.loadingClass),u.find("."+p.preloaderClass).remove(),d.params.loop&&l){var e=u.attr("data-swiper-slide-index");if(u.hasClass(d.params.slideDuplicateClass)){var t=d.$wrapperEl.children('[data-swiper-slide-index="'+e+'"]:not(.'+d.params.slideDuplicateClass+")");d.lazy.loadInSlide(t.index(),!1)}else{var a=d.$wrapperEl.children("."+d.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');d.lazy.loadInSlide(a.index(),!1)}}d.emit("lazyImageReady",u[0],i[0])}}),d.emit("lazyImageLoad",u[0],i[0])})}},load:function(){var i=this,t=i.$wrapperEl,a=i.params,s=i.slides,e=i.activeIndex,r=i.virtual&&a.virtual.enabled,n=a.lazy,o=a.slidesPerView;function l(e){if(r){if(t.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]').length)return!0}else if(s[e])return!0;return!1}function d(e){return r?I(e).attr("data-swiper-slide-index"):I(e).index()}if("auto"===o&&(o=0),i.lazy.initialImageLoaded||(i.lazy.initialImageLoaded=!0),i.params.watchSlidesVisibility)t.children("."+a.slideVisibleClass).each(function(e,t){var a=r?I(t).attr("data-swiper-slide-index"):I(t).index();i.lazy.loadInSlide(a)});else if(1<o)for(var p=e;p<e+o;p+=1)l(p)&&i.lazy.loadInSlide(p);else i.lazy.loadInSlide(e);if(n.loadPrevNext)if(1<o||n.loadPrevNextAmount&&1<n.loadPrevNextAmount){for(var c=n.loadPrevNextAmount,u=o,h=Math.min(e+u+Math.max(c,u),s.length),f=Math.max(e-Math.max(u,c),0),v=e+o;v<h;v+=1)l(v)&&i.lazy.loadInSlide(v);for(var m=f;m<e;m+=1)l(m)&&i.lazy.loadInSlide(m)}else{var g=t.children("."+a.slideNextClass);0<g.length&&i.lazy.loadInSlide(d(g));var b=t.children("."+a.slidePrevClass);0<b.length&&i.lazy.loadInSlide(d(b))}}},Z={name:"lazy",params:{lazy:{enabled:!0,loadPrevNext:!0,loadPrevNextAmount:1,loadOnTransitionStart:!1,elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}},create:function(){D.extend(this,{lazy:{initialImageLoaded:!1,load:_.load.bind(this),loadInSlide:_.loadInSlide.bind(this)}})},on:{beforeInit:function(){this.params.preloadImages&&(this.params.preloadImages=!1)},init:function(){this.params.lazy.enabled&&!this.params.loop&&0===this.params.initialSlide&&this.lazy.load()},scroll:function(){this.params.freeMode&&!this.params.freeModeSticky&&this.lazy.load()},resize:function(){this.params.lazy.enabled&&this.lazy.load()},scrollbarDragMove:function(){this.params.lazy.enabled&&this.lazy.load()},transitionStart:function(){var e=this;e.params.lazy.enabled&&(e.params.lazy.loadOnTransitionStart||!e.params.lazy.loadOnTransitionStart&&!e.lazy.initialImageLoaded)&&e.lazy.load()},transitionEnd:function(){this.params.lazy.enabled&&!this.params.lazy.loadOnTransitionStart&&this.lazy.load()}}},Q={LinearSpline:function(e,t){var a,i,s,r,n,o=function(e,t){for(i=-1,a=e.length;1<a-i;)e[s=a+i>>1]<=t?i=s:a=s;return a};return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(n=o(this.x,e),r=n-1,(e-this.x[r])*(this.y[n]-this.y[r])/(this.x[n]-this.x[r])+this.y[r]):0},this},getInterpolateFunction:function(e){var t=this;t.controller.spline||(t.controller.spline=t.params.loop?new Q.LinearSpline(t.slidesGrid,e.slidesGrid):new Q.LinearSpline(t.snapGrid,e.snapGrid))},setTranslate:function(e,t){var a,i,s=this,r=s.controller.control;function n(e){var t=e.rtl&&"horizontal"===e.params.direction?-s.translate:s.translate;"slide"===s.params.controller.by&&(s.controller.getInterpolateFunction(e),i=-s.controller.spline.interpolate(-t)),i&&"container"!==s.params.controller.by||(a=(e.maxTranslate()-e.minTranslate())/(s.maxTranslate()-s.minTranslate()),i=(t-s.minTranslate())*a+e.minTranslate()),s.params.controller.inverse&&(i=e.maxTranslate()-i),e.updateProgress(i),e.setTranslate(i,s),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(r))for(var o=0;o<r.length;o+=1)r[o]!==t&&r[o]instanceof T&&n(r[o]);else r instanceof T&&t!==r&&n(r)},setTransition:function(t,e){var a,i=this,s=i.controller.control;function r(e){e.setTransition(t,i),0!==t&&(e.transitionStart(),e.$wrapperEl.transitionEnd(function(){s&&(e.params.loop&&"slide"===i.params.controller.by&&e.loopFix(),e.transitionEnd())}))}if(Array.isArray(s))for(a=0;a<s.length;a+=1)s[a]!==e&&s[a]instanceof T&&r(s[a]);else s instanceof T&&e!==s&&r(s)}},J={name:"controller",params:{controller:{control:void 0,inverse:!1,by:"slide"}},create:function(){var e=this;D.extend(e,{controller:{control:e.params.controller.control,getInterpolateFunction:Q.getInterpolateFunction.bind(e),setTranslate:Q.setTranslate.bind(e),setTransition:Q.setTransition.bind(e)}})},on:{update:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},resize:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},observerUpdate:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},setTranslate:function(e,t){this.controller.control&&this.controller.setTranslate(e,t)},setTransition:function(e,t){this.controller.control&&this.controller.setTransition(e,t)}}},ee={makeElFocusable:function(e){return e.attr("tabIndex","0"),e},addElRole:function(e,t){return e.attr("role",t),e},addElLabel:function(e,t){return e.attr("aria-label",t),e},disableEl:function(e){return e.attr("aria-disabled",!0),e},enableEl:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){var t=this,a=t.params.a11y;if(13===e.keyCode){var i=I(e.target);t.navigation&&t.navigation.$nextEl&&i.is(t.navigation.$nextEl)&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?t.a11y.notify(a.lastSlideMessage):t.a11y.notify(a.nextSlideMessage)),t.navigation&&t.navigation.$prevEl&&i.is(t.navigation.$prevEl)&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?t.a11y.notify(a.firstSlideMessage):t.a11y.notify(a.prevSlideMessage)),t.pagination&&i.is("."+t.params.pagination.bulletClass)&&i[0].click()}},notify:function(e){var t=this.a11y.liveRegion;0!==t.length&&(t.html(""),t.html(e))},updateNavigation:function(){var e=this;if(!e.params.loop){var t=e.navigation,a=t.$nextEl,i=t.$prevEl;i&&0<i.length&&(e.isBeginning?e.a11y.disableEl(i):e.a11y.enableEl(i)),a&&0<a.length&&(e.isEnd?e.a11y.disableEl(a):e.a11y.enableEl(a))}},updatePagination:function(){var i=this,s=i.params.a11y;i.pagination&&i.params.pagination.clickable&&i.pagination.bullets&&i.pagination.bullets.length&&i.pagination.bullets.each(function(e,t){var a=I(t);i.a11y.makeElFocusable(a),i.a11y.addElRole(a,"button"),i.a11y.addElLabel(a,s.paginationBulletMessage.replace(/{{index}}/,a.index()+1))})},init:function(){var e=this;e.$el.append(e.a11y.liveRegion);var t,a,i=e.params.a11y;e.navigation&&e.navigation.$nextEl&&(t=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(a=e.navigation.$prevEl),t&&(e.a11y.makeElFocusable(t),e.a11y.addElRole(t,"button"),e.a11y.addElLabel(t,i.nextSlideMessage),t.on("keydown",e.a11y.onEnterKey)),a&&(e.a11y.makeElFocusable(a),e.a11y.addElRole(a,"button"),e.a11y.addElLabel(a,i.prevSlideMessage),a.on("keydown",e.a11y.onEnterKey)),e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.$el.on("keydown","."+e.params.pagination.bulletClass,e.a11y.onEnterKey)},destroy:function(){var e,t,a=this;a.a11y.liveRegion&&0<a.a11y.liveRegion.length&&a.a11y.liveRegion.remove(),a.navigation&&a.navigation.$nextEl&&(e=a.navigation.$nextEl),a.navigation&&a.navigation.$prevEl&&(t=a.navigation.$prevEl),e&&e.off("keydown",a.a11y.onEnterKey),t&&t.off("keydown",a.a11y.onEnterKey),a.pagination&&a.params.pagination.clickable&&a.pagination.bullets&&a.pagination.bullets.length&&a.pagination.$el.off("keydown","."+a.params.pagination.bulletClass,a.a11y.onEnterKey)}},te={name:"a11y",params:{a11y:{enabled:!1,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}"}},create:function(){var t=this;D.extend(t,{a11y:{liveRegion:I('<span class="'+t.params.a11y.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>')}}),Object.keys(ee).forEach(function(e){t.a11y[e]=ee[e].bind(t)})},on:{init:function(){this.params.a11y.enabled&&(this.a11y.init(),this.a11y.updateNavigation())},toEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},fromEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},paginationUpdate:function(){this.params.a11y.enabled&&this.a11y.updatePagination()},destroy:function(){this.params.a11y.enabled&&this.a11y.destroy()}}},ae={init:function(){var e=this;if(e.params.history){if(!f.history||!f.history.pushState)return e.params.history.enabled=!1,void(e.params.hashNavigation.enabled=!0);var t=e.history;t.initialized=!0,t.paths=ae.getPathValues(),(t.paths.key||t.paths.value)&&(t.scrollToSlide(0,t.paths.value,e.params.runCallbacksOnInit),e.params.history.replaceState||f.addEventListener("popstate",e.history.setHistoryPopState))}},destroy:function(){this.params.history.replaceState||f.removeEventListener("popstate",this.history.setHistoryPopState)},setHistoryPopState:function(){this.history.paths=ae.getPathValues(),this.history.scrollToSlide(this.params.speed,this.history.paths.value,!1)},getPathValues:function(){var e=f.location.pathname.slice(1).split("/"),t=e.length;return{key:e[t-2],value:e[t-1]}},setHistory:function(e,t){if(this.history.initialized&&this.params.history.enabled){var a=this.slides.eq(t),i=ae.slugify(a.attr("data-history"));f.location.pathname.includes(e)||(i=e+"/"+i);var s=f.history.state;s&&s.value===i||(this.params.history.replaceState?f.history.replaceState({value:i},null,i):f.history.pushState({value:i},null,i))}},slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,t,a){var i=this;if(t)for(var s=0,r=i.slides.length;s<r;s+=1){var n=i.slides.eq(s);if(ae.slugify(n.attr("data-history"))===t&&!n.hasClass(i.params.slideDuplicateClass)){var o=n.index();i.slideTo(o,e,a)}}else i.slideTo(0,e,a)}},ie={name:"history",params:{history:{enabled:!1,replaceState:!1,key:"slides"}},create:function(){var e=this;D.extend(e,{history:{init:ae.init.bind(e),setHistory:ae.setHistory.bind(e),setHistoryPopState:ae.setHistoryPopState.bind(e),scrollToSlide:ae.scrollToSlide.bind(e)}})},on:{init:function(){this.params.history.enabled&&this.history.init()},destroy:function(){this.params.history.enabled&&this.history.destroy()},transitionEnd:function(){this.history.initialized&&this.history.setHistory(this.params.history.key,this.activeIndex)}}},se={onHashCange:function(){var e=this,t=h.location.hash.replace("#","");t!==e.slides.eq(e.activeIndex).attr("data-hash")&&e.slideTo(e.$wrapperEl.children("."+e.params.slideClass+'[data-hash="'+t+'"]').index())},setHash:function(){var e=this;if(e.hashNavigation.initialized&&e.params.hashNavigation.enabled)if(e.params.hashNavigation.replaceState&&f.history&&f.history.replaceState)f.history.replaceState(null,null,"#"+e.slides.eq(e.activeIndex).attr("data-hash")||"");else{var t=e.slides.eq(e.activeIndex),a=t.attr("data-hash")||t.attr("data-history");h.location.hash=a||""}},init:function(){var e=this;if(!(!e.params.hashNavigation.enabled||e.params.history&&e.params.history.enabled)){e.hashNavigation.initialized=!0;var t=h.location.hash.replace("#","");if(t)for(var a=0,i=e.slides.length;a<i;a+=1){var s=e.slides.eq(a);if((s.attr("data-hash")||s.attr("data-history"))===t&&!s.hasClass(e.params.slideDuplicateClass)){var r=s.index();e.slideTo(r,0,e.params.runCallbacksOnInit,!0)}}e.params.hashNavigation.watchState&&I(f).on("hashchange",e.hashNavigation.onHashCange)}},destroy:function(){this.params.hashNavigation.watchState&&I(f).off("hashchange",this.hashNavigation.onHashCange)}},re={name:"hash-navigation",params:{hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}},create:function(){var e=this;D.extend(e,{hashNavigation:{initialized:!1,init:se.init.bind(e),destroy:se.destroy.bind(e),setHash:se.setHash.bind(e),onHashCange:se.onHashCange.bind(e)}})},on:{init:function(){this.params.hashNavigation.enabled&&this.hashNavigation.init()},destroy:function(){this.params.hashNavigation.enabled&&this.hashNavigation.destroy()},transitionEnd:function(){this.hashNavigation.initialized&&this.hashNavigation.setHash()}}},ne={run:function(){var e=this,t=e.slides.eq(e.activeIndex),a=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(a=t.attr("data-swiper-autoplay")||e.params.autoplay.delay);var i=e.lastSwipeTime,s=e.pauseTime||e.lastSwipeTime,r=Math.abs(s-i);r=r<=a?r:0,e.pauseTime=0,e.autoplay.timeout=D.nextTick(function(){e.params.loop?(e.loopFix(),e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(0,e.params.speed,!0,!0),e.emit("autoplay")):(e.slideNext(e.params.speed,!0,!0),e.emit("autoplay"))},a-r%a)},start:function(){var e=this;return void 0===e.autoplay.timeout&&(!e.autoplay.running&&(e.autoplay.running=!0,e.emit("autoplayStart"),e.autoplay.run(),!0))},stop:function(){var e=this;return!!e.autoplay.running&&(void 0!==e.autoplay.timeout&&(e.autoplay.timeout&&(clearTimeout(e.autoplay.timeout),e.autoplay.timeout=void 0),e.autoplay.running=!1,e.emit("autoplayStop"),!0))},pause:function(e){var t=this;t.autoplay.running&&(t.autoplay.paused||(t.autoplay.timeout&&clearTimeout(t.autoplay.timeout),t.autoplay.paused=!0,0===e?(t.autoplay.paused=!1,t.autoplay.run()):t.$wrapperEl.transitionEnd(function(){t&&!t.destroyed&&(t.autoplay.paused=!1,t.autoplay.running?t.autoplay.run():t.autoplay.stop())})))}},oe={name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,disableOnInteraction:!0,stopOnLastSlide:!1}},create:function(){var e=this;D.extend(e,{autoplay:{running:!1,paused:!1,run:ne.run.bind(e),start:ne.start.bind(e),stop:ne.stop.bind(e),pause:ne.pause.bind(e)}})},on:{init:function(){this.params.autoplay.enabled&&this.autoplay.start()},beforeTransitionStart:function(e,t){this.autoplay.running&&(t||!this.params.autoplay.disableOnInteraction?this.autoplay.pause(e):this.autoplay.stop())},sliderFirstMove:function(){this.autoplay.running&&(this.params.autoplay.disableOnInteraction?this.autoplay.stop():this.autoplay.pause())},destroy:function(){this.autoplay.running&&this.autoplay.stop()}}},le={setTranslate:function(){for(var e=this,t=e.slides,a=0;a<t.length;a+=1){var i=e.slides.eq(a),s=-i[0].swiperSlideOffset;e.params.virtualTranslate||(s-=e.translate);var r=0;e.isHorizontal()||(r=s,s=0);var n=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(i[0].progress),0):1+Math.min(Math.max(i[0].progress,-1),0);i.css({opacity:n}).transform("translate3d("+s+"px, "+r+"px, 0px)")}},setTransition:function(e){var a=this,t=a.slides,i=a.$wrapperEl;if(t.transition(e),a.params.virtualTranslate&&0!==e){var s=!1;t.transitionEnd(function(){if(!s&&a&&!a.destroyed){s=!0,a.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],t=0;t<e.length;t+=1)i.trigger(e[t])}})}}},de={name:"effect-fade",params:{fadeEffect:{crossFade:!1}},create:function(){D.extend(this,{fadeEffect:{setTranslate:le.setTranslate.bind(this),setTransition:le.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;if("fade"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"fade");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};D.extend(e.params,t),D.extend(e.originalParams,t)}},setTranslate:function(){"fade"===this.params.effect&&this.fadeEffect.setTranslate()},setTransition:function(e){"fade"===this.params.effect&&this.fadeEffect.setTransition(e)}}},pe={setTranslate:function(){var e,t=this,a=t.$el,i=t.$wrapperEl,s=t.slides,r=t.width,n=t.height,o=t.rtl,l=t.size,d=t.params.cubeEffect,p=t.isHorizontal(),c=t.virtual&&t.params.virtual.enabled,u=0;d.shadow&&(p?(0===(e=i.find(".swiper-cube-shadow")).length&&(e=I('<div class="swiper-cube-shadow"></div>'),i.append(e)),e.css({height:r+"px"})):0===(e=a.find(".swiper-cube-shadow")).length&&(e=I('<div class="swiper-cube-shadow"></div>'),a.append(e)));for(var h=0;h<s.length;h+=1){var f=s.eq(h),v=h;c&&(v=parseInt(f.attr("data-swiper-slide-index"),10));var m=90*v,g=Math.floor(m/360);o&&(m=-m,g=Math.floor(-m/360));var b=Math.max(Math.min(f[0].progress,1),-1),w=0,y=0,x=0;v%4==0?(w=4*-g*l,x=0):(v-1)%4==0?(w=0,x=4*-g*l):(v-2)%4==0?(w=l+4*g*l,x=l):(v-3)%4==0&&(w=-l,x=3*l+4*l*g),o&&(w=-w),p||(y=w,w=0);var T="rotateX("+(p?0:-m)+"deg) rotateY("+(p?m:0)+"deg) translate3d("+w+"px, "+y+"px, "+x+"px)";if(b<=1&&-1<b&&(u=90*v+90*b,o&&(u=90*-v-90*b)),f.transform(T),d.slideShadows){var E=p?f.find(".swiper-slide-shadow-left"):f.find(".swiper-slide-shadow-top"),S=p?f.find(".swiper-slide-shadow-right"):f.find(".swiper-slide-shadow-bottom");0===E.length&&(E=I('<div class="swiper-slide-shadow-'+(p?"left":"top")+'"></div>'),f.append(E)),0===S.length&&(S=I('<div class="swiper-slide-shadow-'+(p?"right":"bottom")+'"></div>'),f.append(S)),E.length&&(E[0].style.opacity=Math.max(-b,0)),S.length&&(S[0].style.opacity=Math.max(b,0))}}if(i.css({"-webkit-transform-origin":"50% 50% -"+l/2+"px","-moz-transform-origin":"50% 50% -"+l/2+"px","-ms-transform-origin":"50% 50% -"+l/2+"px","transform-origin":"50% 50% -"+l/2+"px"}),d.shadow)if(p)e.transform("translate3d(0px, "+(r/2+d.shadowOffset)+"px, "+-r/2+"px) rotateX(90deg) rotateZ(0deg) scale("+d.shadowScale+")");else{var C=Math.abs(u)-90*Math.floor(Math.abs(u)/90),M=1.5-(Math.sin(2*C*Math.PI/360)/2+Math.cos(2*C*Math.PI/360)/2),z=d.shadowScale,P=d.shadowScale/M,k=d.shadowOffset;e.transform("scale3d("+z+", 1, "+P+") translate3d(0px, "+(n/2+k)+"px, "+-n/2/P+"px) rotateX(-90deg)")}var $=L.isSafari||L.isUiWebView?-l/2:0;i.transform("translate3d(0px,0,"+$+"px) rotateX("+(t.isHorizontal()?0:u)+"deg) rotateY("+(t.isHorizontal()?-u:0)+"deg)")},setTransition:function(e){var t=this.$el;this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),this.params.cubeEffect.shadow&&!this.isHorizontal()&&t.find(".swiper-cube-shadow").transition(e)}},ce={name:"effect-cube",params:{cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}},create:function(){D.extend(this,{cubeEffect:{setTranslate:pe.setTranslate.bind(this),setTransition:pe.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;if("cube"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"cube"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0};D.extend(e.params,t),D.extend(e.originalParams,t)}},setTranslate:function(){"cube"===this.params.effect&&this.cubeEffect.setTranslate()},setTransition:function(e){"cube"===this.params.effect&&this.cubeEffect.setTransition(e)}}},ue={setTranslate:function(){for(var e=this,t=e.slides,a=0;a<t.length;a+=1){var i=t.eq(a),s=i[0].progress;e.params.flipEffect.limitRotation&&(s=Math.max(Math.min(i[0].progress,1),-1));var r=-180*s,n=0,o=-i[0].swiperSlideOffset,l=0;if(e.isHorizontal()?e.rtl&&(r=-r):(l=o,n=-r,r=o=0),i[0].style.zIndex=-Math.abs(Math.round(s))+t.length,e.params.flipEffect.slideShadows){var d=e.isHorizontal()?i.find(".swiper-slide-shadow-left"):i.find(".swiper-slide-shadow-top"),p=e.isHorizontal()?i.find(".swiper-slide-shadow-right"):i.find(".swiper-slide-shadow-bottom");0===d.length&&(d=I('<div class="swiper-slide-shadow-'+(e.isHorizontal()?"left":"top")+'"></div>'),i.append(d)),0===p.length&&(p=I('<div class="swiper-slide-shadow-'+(e.isHorizontal()?"right":"bottom")+'"></div>'),i.append(p)),d.length&&(d[0].style.opacity=Math.max(-s,0)),p.length&&(p[0].style.opacity=Math.max(s,0))}i.transform("translate3d("+o+"px, "+l+"px, 0px) rotateX("+n+"deg) rotateY("+r+"deg)")}},setTransition:function(e){var a=this,t=a.slides,i=a.activeIndex,s=a.$wrapperEl;if(t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),a.params.virtualTranslate&&0!==e){var r=!1;t.eq(i).transitionEnd(function(){if(!r&&a&&!a.destroyed){r=!0,a.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],t=0;t<e.length;t+=1)s.trigger(e[t])}})}}},he={name:"effect-flip",params:{flipEffect:{slideShadows:!0,limitRotation:!0}},create:function(){D.extend(this,{flipEffect:{setTranslate:ue.setTranslate.bind(this),setTransition:ue.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;if("flip"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"flip"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};D.extend(e.params,t),D.extend(e.originalParams,t)}},setTranslate:function(){"flip"===this.params.effect&&this.flipEffect.setTranslate()},setTransition:function(e){"flip"===this.params.effect&&this.flipEffect.setTransition(e)}}},fe={setTranslate:function(){for(var e=this,t=e.width,a=e.height,i=e.slides,s=e.$wrapperEl,r=e.slidesSizesGrid,n=e.params.coverflowEffect,o=e.isHorizontal(),l=e.translate,d=o?t/2-l:a/2-l,p=o?n.rotate:-n.rotate,c=n.depth,u=0,h=i.length;u<h;u+=1){var f=i.eq(u),v=r[u],m=(d-f[0].swiperSlideOffset-v/2)/v*n.modifier,g=o?p*m:0,b=o?0:p*m,w=-c*Math.abs(m),y=o?0:n.stretch*m,x=o?n.stretch*m:0;Math.abs(x)<.001&&(x=0),Math.abs(y)<.001&&(y=0),Math.abs(w)<.001&&(w=0),Math.abs(g)<.001&&(g=0),Math.abs(b)<.001&&(b=0);var T="translate3d("+x+"px,"+y+"px,"+w+"px)  rotateX("+b+"deg) rotateY("+g+"deg)";if(f.transform(T),f[0].style.zIndex=1-Math.abs(Math.round(m)),n.slideShadows){var E=o?f.find(".swiper-slide-shadow-left"):f.find(".swiper-slide-shadow-top"),S=o?f.find(".swiper-slide-shadow-right"):f.find(".swiper-slide-shadow-bottom");0===E.length&&(E=I('<div class="swiper-slide-shadow-'+(o?"left":"top")+'"></div>'),f.append(E)),0===S.length&&(S=I('<div class="swiper-slide-shadow-'+(o?"right":"bottom")+'"></div>'),f.append(S)),E.length&&(E[0].style.opacity=0<m?m:0),S.length&&(S[0].style.opacity=0<-m?-m:0)}}L.ie&&(s[0].style.perspectiveOrigin=d+"px 50%")},setTransition:function(e){this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}},ve={name:"effect-coverflow",params:{coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},create:function(){D.extend(this,{coverflowEffect:{setTranslate:fe.setTranslate.bind(this),setTransition:fe.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;"coverflow"===e.params.effect&&(e.classNames.push(e.params.containerModifierClass+"coverflow"),e.classNames.push(e.params.containerModifierClass+"3d"),e.params.watchSlidesProgress=!0)},setTranslate:function(){"coverflow"===this.params.effect&&this.coverflowEffect.setTranslate()},setTransition:function(e){"coverflow"===this.params.effect&&this.coverflowEffect.setTransition(e)}}};return T.components=[E,S,C,M,P,A,X,Y,B,R,F,q,U,Z,J,te,ie,re,oe,de,ce,he,ve],T});



/*[PATH @digikala/supernova-digikala-desktop/assets/js/nouislider.min.js]*/
/*! nouislider - 10.0.0 - 2017-05-28 14:52:49 */

!function(a){"function"==typeof define&&define.amd?define([],a):"object"==typeof exports?module.exports=a():window.noUiSlider=a()}(function(){"use strict";function a(a){return"object"==typeof a&&"function"==typeof a.to&&"function"==typeof a.from}function b(a){a.parentElement.removeChild(a)}function c(a){a.preventDefault()}function d(a){return a.filter(function(a){return this[a]?!1:this[a]=!0},{})}function e(a,b){return Math.round(a/b)*b}function f(a,b){var c=a.getBoundingClientRect(),d=a.ownerDocument,e=d.documentElement,f=o(d);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(f.x=0),b?c.top+f.y-e.clientTop:c.left+f.x-e.clientLeft}function g(a){return"number"==typeof a&&!isNaN(a)&&isFinite(a)}function h(a,b,c){c>0&&(l(a,b),setTimeout(function(){m(a,b)},c))}function i(a){return Math.max(Math.min(a,100),0)}function j(a){return Array.isArray(a)?a:[a]}function k(a){a=String(a);var b=a.split(".");return b.length>1?b[1].length:0}function l(a,b){a.classList?a.classList.add(b):a.className+=" "+b}function m(a,b){a.classList?a.classList.remove(b):a.className=a.className.replace(new RegExp("(^|\\b)"+b.split(" ").join("|")+"(\\b|$)","gi")," ")}function n(a,b){return a.classList?a.classList.contains(b):new RegExp("\\b"+b+"\\b").test(a.className)}function o(a){var b=void 0!==window.pageXOffset,c="CSS1Compat"===(a.compatMode||""),d=b?window.pageXOffset:c?a.documentElement.scrollLeft:a.body.scrollLeft,e=b?window.pageYOffset:c?a.documentElement.scrollTop:a.body.scrollTop;return{x:d,y:e}}function p(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function q(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,b)}catch(c){}return a}function r(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function s(a,b){return 100/(b-a)}function t(a,b){return 100*b/(a[1]-a[0])}function u(a,b){return t(a,a[0]<0?b+Math.abs(a[0]):b-a[0])}function v(a,b){return b*(a[1]-a[0])/100+a[0]}function w(a,b){for(var c=1;a>=b[c];)c+=1;return c}function x(a,b,c){if(c>=a.slice(-1)[0])return 100;var d,e,f,g,h=w(c,a);return d=a[h-1],e=a[h],f=b[h-1],g=b[h],f+u([d,e],c)/s(f,g)}function y(a,b,c){if(c>=100)return a.slice(-1)[0];var d,e,f,g,h=w(c,b);return d=a[h-1],e=a[h],f=b[h-1],g=b[h],v([d,e],(c-f)*s(f,g))}function z(a,b,c,d){if(100===d)return d;var f,g,h=w(d,a);return c?(f=a[h-1],g=a[h],d-f>(g-f)/2?g:f):b[h-1]?a[h-1]+e(d-a[h-1],b[h-1]):d}function A(a,b,c){var d;if("number"==typeof b&&(b=[b]),"[object Array]"!==Object.prototype.toString.call(b))throw new Error("noUiSlider ("+$+"): 'range' contains invalid value.");if(d="min"===a?0:"max"===a?100:parseFloat(a),!g(d)||!g(b[0]))throw new Error("noUiSlider ("+$+"): 'range' value isn't numeric.");c.xPct.push(d),c.xVal.push(b[0]),d?c.xSteps.push(isNaN(b[1])?!1:b[1]):isNaN(b[1])||(c.xSteps[0]=b[1]),c.xHighestCompleteStep.push(0)}function B(a,b,c){if(!b)return!0;c.xSteps[a]=t([c.xVal[a],c.xVal[a+1]],b)/s(c.xPct[a],c.xPct[a+1]);var d=(c.xVal[a+1]-c.xVal[a])/c.xNumSteps[a],e=Math.ceil(Number(d.toFixed(3))-1),f=c.xVal[a]+c.xNumSteps[a]*e;c.xHighestCompleteStep[a]=f}function C(a,b,c){this.xPct=[],this.xVal=[],this.xSteps=[c||!1],this.xNumSteps=[!1],this.xHighestCompleteStep=[],this.snap=b;var d,e=[];for(d in a)a.hasOwnProperty(d)&&e.push([a[d],d]);for(e.sort(e.length&&"object"==typeof e[0][0]?function(a,b){return a[0][0]-b[0][0]}:function(a,b){return a[0]-b[0]}),d=0;d<e.length;d++)A(e[d][1],e[d][0],this);for(this.xNumSteps=this.xSteps.slice(0),d=0;d<this.xNumSteps.length;d++)B(d,this.xNumSteps[d],this)}function D(b){if(a(b))return!0;throw new Error("noUiSlider ("+$+"): 'format' requires 'to' and 'from' methods.")}function E(a,b){if(!g(b))throw new Error("noUiSlider ("+$+"): 'step' is not numeric.");a.singleStep=b}function F(a,b){if("object"!=typeof b||Array.isArray(b))throw new Error("noUiSlider ("+$+"): 'range' is not an object.");if(void 0===b.min||void 0===b.max)throw new Error("noUiSlider ("+$+"): Missing 'min' or 'max' in 'range'.");if(b.min===b.max)throw new Error("noUiSlider ("+$+"): 'range' 'min' and 'max' cannot be equal.");a.spectrum=new C(b,a.snap,a.singleStep)}function G(a,b){if(b=j(b),!Array.isArray(b)||!b.length)throw new Error("noUiSlider ("+$+"): 'start' option is incorrect.");a.handles=b.length,a.start=b}function H(a,b){if(a.snap=b,"boolean"!=typeof b)throw new Error("noUiSlider ("+$+"): 'snap' option must be a boolean.")}function I(a,b){if(a.animate=b,"boolean"!=typeof b)throw new Error("noUiSlider ("+$+"): 'animate' option must be a boolean.")}function J(a,b){if(a.animationDuration=b,"number"!=typeof b)throw new Error("noUiSlider ("+$+"): 'animationDuration' option must be a number.")}function K(a,b){var c,d=[!1];if("lower"===b?b=[!0,!1]:"upper"===b&&(b=[!1,!0]),b===!0||b===!1){for(c=1;c<a.handles;c++)d.push(b);d.push(!1)}else{if(!Array.isArray(b)||!b.length||b.length!==a.handles+1)throw new Error("noUiSlider ("+$+"): 'connect' option doesn't match handle count.");d=b}a.connect=d}function L(a,b){switch(b){case"horizontal":a.ort=0;break;case"vertical":a.ort=1;break;default:throw new Error("noUiSlider ("+$+"): 'orientation' option is invalid.")}}function M(a,b){if(!g(b))throw new Error("noUiSlider ("+$+"): 'margin' option must be numeric.");if(0!==b&&(a.margin=a.spectrum.getMargin(b),!a.margin))throw new Error("noUiSlider ("+$+"): 'margin' option is only supported on linear sliders.")}function N(a,b){if(!g(b))throw new Error("noUiSlider ("+$+"): 'limit' option must be numeric.");if(a.limit=a.spectrum.getMargin(b),!a.limit||a.handles<2)throw new Error("noUiSlider ("+$+"): 'limit' option is only supported on linear sliders with 2 or more handles.")}function O(a,b){if(!g(b))throw new Error("noUiSlider ("+$+"): 'padding' option must be numeric.");if(0!==b){if(a.padding=a.spectrum.getMargin(b),!a.padding)throw new Error("noUiSlider ("+$+"): 'padding' option is only supported on linear sliders.");if(a.padding<0)throw new Error("noUiSlider ("+$+"): 'padding' option must be a positive number.");if(a.padding>=50)throw new Error("noUiSlider ("+$+"): 'padding' option must be less than half the range.")}}function P(a,b){switch(b){case"ltr":a.dir=0;break;case"rtl":a.dir=1;break;default:throw new Error("noUiSlider ("+$+"): 'direction' option was not recognized.")}}function Q(a,b){if("string"!=typeof b)throw new Error("noUiSlider ("+$+"): 'behaviour' must be a string containing options.");var c=b.indexOf("tap")>=0,d=b.indexOf("drag")>=0,e=b.indexOf("fixed")>=0,f=b.indexOf("snap")>=0,g=b.indexOf("hover")>=0;if(e){if(2!==a.handles)throw new Error("noUiSlider ("+$+"): 'fixed' behaviour must be used with 2 handles");M(a,a.start[1]-a.start[0])}a.events={tap:c||f,drag:d,fixed:e,snap:f,hover:g}}function R(a,b){if(b!==!1)if(b===!0){a.tooltips=[];for(var c=0;c<a.handles;c++)a.tooltips.push(!0)}else{if(a.tooltips=j(b),a.tooltips.length!==a.handles)throw new Error("noUiSlider ("+$+"): must pass a formatter for all handles.");a.tooltips.forEach(function(a){if("boolean"!=typeof a&&("object"!=typeof a||"function"!=typeof a.to))throw new Error("noUiSlider ("+$+"): 'tooltips' must be passed a formatter or 'false'.")})}}function S(a,b){a.ariaFormat=b,D(b)}function T(a,b){a.format=b,D(b)}function U(a,b){if(void 0!==b&&"string"!=typeof b&&b!==!1)throw new Error("noUiSlider ("+$+"): 'cssPrefix' must be a string or `false`.");a.cssPrefix=b}function V(a,b){if(void 0!==b&&"object"!=typeof b)throw new Error("noUiSlider ("+$+"): 'cssClasses' must be an object.");if("string"==typeof a.cssPrefix){a.cssClasses={};for(var c in b)b.hasOwnProperty(c)&&(a.cssClasses[c]=a.cssPrefix+b[c])}else a.cssClasses=b}function W(a,b){if(b!==!0&&b!==!1)throw new Error("noUiSlider ("+$+"): 'useRequestAnimationFrame' option should be true (default) or false.");a.useRequestAnimationFrame=b}function X(a){var b={margin:0,limit:0,padding:0,animate:!0,animationDuration:300,ariaFormat:_,format:_},c={step:{r:!1,t:E},start:{r:!0,t:G},connect:{r:!0,t:K},direction:{r:!0,t:P},snap:{r:!1,t:H},animate:{r:!1,t:I},animationDuration:{r:!1,t:J},range:{r:!0,t:F},orientation:{r:!1,t:L},margin:{r:!1,t:M},limit:{r:!1,t:N},padding:{r:!1,t:O},behaviour:{r:!0,t:Q},ariaFormat:{r:!1,t:S},format:{r:!1,t:T},tooltips:{r:!1,t:R},cssPrefix:{r:!1,t:U},cssClasses:{r:!1,t:V},useRequestAnimationFrame:{r:!1,t:W}},d={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",cssPrefix:"noUi-",cssClasses:{target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",ltr:"ltr",rtl:"rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},useRequestAnimationFrame:!0};a.format&&!a.ariaFormat&&(a.ariaFormat=a.format),Object.keys(c).forEach(function(e){if(void 0===a[e]&&void 0===d[e]){if(c[e].r)throw new Error("noUiSlider ("+$+"): '"+e+"' is required.");return!0}c[e].t(b,void 0===a[e]?d[e]:a[e])}),b.pips=a.pips;var e=[["left","top"],["right","bottom"]];return b.style=e[b.dir][b.ort],b.styleOposite=e[b.dir?0:1][b.ort],b}function Y(a,e,g){function k(a,b){var c=xa.createElement("div");return b&&l(c,b),a.appendChild(c),c}function s(a,b){var c=k(a,e.cssClasses.origin),d=k(c,e.cssClasses.handle);return d.setAttribute("data-handle",b),d.setAttribute("tabindex","0"),d.setAttribute("role","slider"),d.setAttribute("aria-orientation",e.ort?"vertical":"horizontal"),0===b?l(d,e.cssClasses.handleLower):b===e.handles-1&&l(d,e.cssClasses.handleUpper),c}function t(a,b){return b?k(a,e.cssClasses.connect):!1}function u(a,b){ia=[],ja=[],ja.push(t(b,a[0]));for(var c=0;c<e.handles;c++)ia.push(s(b,c)),ra[c]=c,ja.push(t(b,a[c+1]))}function v(a){l(a,e.cssClasses.target),0===e.dir?l(a,e.cssClasses.ltr):l(a,e.cssClasses.rtl),0===e.ort?l(a,e.cssClasses.horizontal):l(a,e.cssClasses.vertical),ha=k(a,e.cssClasses.base)}function w(a,b){return e.tooltips[b]?k(a.firstChild,e.cssClasses.tooltip):!1}function x(){var a=ia.map(w);ea("update",function(b,c,d){if(a[c]){var f=b[c];e.tooltips[c]!==!0&&(f=e.tooltips[c].to(d[c])),a[c].innerHTML=f}})}function y(){ea("update",function(a,b,c,d,f){ra.forEach(function(a){var b=ia[a],d=S(qa,a,0,!0,!0,!0),g=S(qa,a,100,!0,!0,!0),h=f[a],i=e.ariaFormat.to(c[a]);b.children[0].setAttribute("aria-valuemin",d.toFixed(1)),b.children[0].setAttribute("aria-valuemax",g.toFixed(1)),b.children[0].setAttribute("aria-valuenow",h.toFixed(1)),b.children[0].setAttribute("aria-valuetext",i)})})}function z(a,b,c){if("range"===a||"steps"===a)return ta.xVal;if("count"===a){if(!b)throw new Error("noUiSlider ("+$+"): 'values' required for mode 'count'.");var d,e=100/(b-1),f=0;for(b=[];(d=f++*e)<=100;)b.push(d);a="positions"}return"positions"===a?b.map(function(a){return ta.fromStepping(c?ta.getStep(a):a)}):"values"===a?c?b.map(function(a){return ta.fromStepping(ta.getStep(ta.toStepping(a)))}):b:void 0}function A(a,b,c){function e(a,b){return(a+b).toFixed(7)/1}var f={},g=ta.xVal[0],h=ta.xVal[ta.xVal.length-1],i=!1,j=!1,k=0;return c=d(c.slice().sort(function(a,b){return a-b})),c[0]!==g&&(c.unshift(g),i=!0),c[c.length-1]!==h&&(c.push(h),j=!0),c.forEach(function(d,g){var h,l,m,n,o,p,q,r,s,t,u=d,v=c[g+1];if("steps"===b&&(h=ta.xNumSteps[g]),h||(h=v-u),u!==!1&&void 0!==v)for(h=Math.max(h,1e-7),l=u;v>=l;l=e(l,h)){for(n=ta.toStepping(l),o=n-k,r=o/a,s=Math.round(r),t=o/s,m=1;s>=m;m+=1)p=k+m*t,f[p.toFixed(5)]=["x",0];q=c.indexOf(l)>-1?1:"steps"===b?2:0,!g&&i&&(q=0),l===v&&j||(f[n.toFixed(5)]=[l,q]),k=n}}),f}function B(a,b,c){function d(a,b){var c=b===e.cssClasses.value,d=c?j:m,f=c?h:i;return b+" "+d[e.ort]+" "+f[a]}function f(a,f){f[1]=f[1]&&b?b(f[0],f[1]):f[1];var h=k(g,!1);h.className=d(f[1],e.cssClasses.marker),h.style[e.style]=a+"%",f[1]&&(h=k(g,!1),h.className=d(f[1],e.cssClasses.value),h.style[e.style]=a+"%",h.innerText=c.to(f[0]))}var g=xa.createElement("div"),h=[e.cssClasses.valueNormal,e.cssClasses.valueLarge,e.cssClasses.valueSub],i=[e.cssClasses.markerNormal,e.cssClasses.markerLarge,e.cssClasses.markerSub],j=[e.cssClasses.valueHorizontal,e.cssClasses.valueVertical],m=[e.cssClasses.markerHorizontal,e.cssClasses.markerVertical];return l(g,e.cssClasses.pips),l(g,0===e.ort?e.cssClasses.pipsHorizontal:e.cssClasses.pipsVertical),Object.keys(a).forEach(function(b){f(b,a[b])}),g}function C(){la&&(b(la),la=null)}function D(a){C();var b=a.mode,c=a.density||1,d=a.filter||!1,e=a.values||!1,f=a.stepped||!1,g=z(b,e,f),h=A(c,b,g),i=a.format||{to:Math.round};return la=pa.appendChild(B(h,d,i))}function E(){var a=ha.getBoundingClientRect(),b="offset"+["Width","Height"][e.ort];return 0===e.ort?a.width||ha[b]:a.height||ha[b]}function F(a,b,c,d){var f=function(b){return pa.hasAttribute("disabled")?!1:n(pa,e.cssClasses.tap)?!1:(b=G(b,d.pageOffset))?a===ma.start&&void 0!==b.buttons&&b.buttons>1?!1:d.hover&&b.buttons?!1:(oa||b.preventDefault(),b.calcPoint=b.points[e.ort],void c(b,d)):!1},g=[];return a.split(" ").forEach(function(a){b.addEventListener(a,f,oa?{passive:!0}:!1),g.push([a,f])}),g}function G(a,b){var c,d,e=0===a.type.indexOf("touch"),f=0===a.type.indexOf("mouse"),g=0===a.type.indexOf("pointer");if(0===a.type.indexOf("MSPointer")&&(g=!0),e){if(a.touches.length>1)return!1;c=a.changedTouches[0].pageX,d=a.changedTouches[0].pageY}return b=b||o(xa),(f||g)&&(c=a.clientX+b.x,d=a.clientY+b.y),a.pageOffset=b,a.points=[c,d],a.cursor=f||g,a}function H(a){var b=a-f(ha,e.ort),c=100*b/E();return e.dir?100-c:c}function I(a){var b=100,c=!1;return ia.forEach(function(d,e){if(!d.hasAttribute("disabled")){var f=Math.abs(qa[e]-a);b>f&&(c=e,b=f)}}),c}function J(a,b,c,d){var e=c.slice(),f=[!a,a],g=[a,!a];d=d.slice(),a&&d.reverse(),d.length>1?d.forEach(function(a,c){var d=S(e,a,e[a]+b,f[c],g[c],!1);d===!1?b=0:(b=d-e[a],e[a]=d)}):f=g=[!0];var h=!1;d.forEach(function(a,d){h=W(a,c[a]+b,f[d],g[d])||h}),h&&d.forEach(function(a){K("update",a),K("slide",a)})}function K(a,b,c){Object.keys(va).forEach(function(d){var f=d.split(".")[0];a===f&&va[d].forEach(function(a){a.call(ka,ua.map(e.format.to),b,ua.slice(),c||!1,qa.slice())})})}function L(a,b){"mouseout"===a.type&&"HTML"===a.target.nodeName&&null===a.relatedTarget&&N(a,b)}function M(a,b){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===a.buttons&&0!==b.buttonsProperty)return N(a,b);var c=(e.dir?-1:1)*(a.calcPoint-b.startCalcPoint),d=100*c/b.baseSize;J(c>0,d,b.locations,b.handleNumbers)}function N(a,b){sa&&(m(sa,e.cssClasses.active),sa=!1),a.cursor&&(za.style.cursor="",za.removeEventListener("selectstart",c)),wa.forEach(function(a){ya.removeEventListener(a[0],a[1])}),m(pa,e.cssClasses.drag),V(),b.handleNumbers.forEach(function(a){K("change",a),K("set",a),K("end",a)})}function O(a,b){if(1===b.handleNumbers.length){var d=ia[b.handleNumbers[0]];if(d.hasAttribute("disabled"))return!1;sa=d.children[0],l(sa,e.cssClasses.active)}a.stopPropagation();var f=F(ma.move,ya,M,{startCalcPoint:a.calcPoint,baseSize:E(),pageOffset:a.pageOffset,handleNumbers:b.handleNumbers,buttonsProperty:a.buttons,locations:qa.slice()}),g=F(ma.end,ya,N,{handleNumbers:b.handleNumbers}),h=F("mouseout",ya,L,{handleNumbers:b.handleNumbers});wa=f.concat(g,h),a.cursor&&(za.style.cursor=getComputedStyle(a.target).cursor,ia.length>1&&l(pa,e.cssClasses.drag),za.addEventListener("selectstart",c,!1)),b.handleNumbers.forEach(function(a){K("start",a)})}function P(a){a.stopPropagation();var b=H(a.calcPoint),c=I(b);return c===!1?!1:(e.events.snap||h(pa,e.cssClasses.tap,e.animationDuration),W(c,b,!0,!0),V(),K("slide",c,!0),K("update",c,!0),K("change",c,!0),K("set",c,!0),void(e.events.snap&&O(a,{handleNumbers:[c]})))}function Q(a){var b=H(a.calcPoint),c=ta.getStep(b),d=ta.fromStepping(c);Object.keys(va).forEach(function(a){"hover"===a.split(".")[0]&&va[a].forEach(function(a){a.call(ka,d)})})}function R(a){a.fixed||ia.forEach(function(a,b){F(ma.start,a.children[0],O,{handleNumbers:[b]})}),a.tap&&F(ma.start,ha,P,{}),a.hover&&F(ma.move,ha,Q,{hover:!0}),a.drag&&ja.forEach(function(b,c){if(b!==!1&&0!==c&&c!==ja.length-1){var d=ia[c-1],f=ia[c],g=[b];l(b,e.cssClasses.draggable),a.fixed&&(g.push(d.children[0]),g.push(f.children[0])),g.forEach(function(a){F(ma.start,a,O,{handles:[d,f],handleNumbers:[c-1,c]})})}})}function S(a,b,c,d,f,g){return ia.length>1&&(d&&b>0&&(c=Math.max(c,a[b-1]+e.margin)),f&&b<ia.length-1&&(c=Math.min(c,a[b+1]-e.margin))),ia.length>1&&e.limit&&(d&&b>0&&(c=Math.min(c,a[b-1]+e.limit)),f&&b<ia.length-1&&(c=Math.max(c,a[b+1]-e.limit))),e.padding&&(0===b&&(c=Math.max(c,e.padding)),b===ia.length-1&&(c=Math.min(c,100-e.padding))),c=ta.getStep(c),c=i(c),c!==a[b]||g?c:!1}function T(a){return a+"%"}function U(a,b){qa[a]=b,ua[a]=ta.fromStepping(b);var c=function(){ia[a].style[e.style]=T(b),Y(a),Y(a+1)};window.requestAnimationFrame&&e.useRequestAnimationFrame?window.requestAnimationFrame(c):c()}function V(){ra.forEach(function(a){var b=qa[a]>50?-1:1,c=3+(ia.length+b*a);ia[a].childNodes[0].style.zIndex=c})}function W(a,b,c,d){return b=S(qa,a,b,c,d,!1),b===!1?!1:(U(a,b),!0)}function Y(a){if(ja[a]){var b=0,c=100;0!==a&&(b=qa[a-1]),a!==ja.length-1&&(c=qa[a]),ja[a].style[e.style]=T(b),ja[a].style[e.styleOposite]=T(100-c)}}function Z(a,b){null!==a&&a!==!1&&("number"==typeof a&&(a=String(a)),a=e.format.from(a),a===!1||isNaN(a)||W(b,ta.toStepping(a),!1,!1))}function _(a,b){var c=j(a),d=void 0===qa[0];b=void 0===b?!0:!!b,c.forEach(Z),e.animate&&!d&&h(pa,e.cssClasses.tap,e.animationDuration),ra.forEach(function(a){W(a,qa[a],!0,!1)}),V(),ra.forEach(function(a){K("update",a),null!==c[a]&&b&&K("set",a)})}function aa(a){_(e.start,a)}function ba(){var a=ua.map(e.format.to);return 1===a.length?a[0]:a}function ca(){for(var a in e.cssClasses)e.cssClasses.hasOwnProperty(a)&&m(pa,e.cssClasses[a]);for(;pa.firstChild;)pa.removeChild(pa.firstChild);delete pa.noUiSlider}function da(){return qa.map(function(a,b){var c=ta.getNearbySteps(a),d=ua[b],e=c.thisStep.step,f=null;e!==!1&&d+e>c.stepAfter.startValue&&(e=c.stepAfter.startValue-d),f=d>c.thisStep.startValue?c.thisStep.step:c.stepBefore.step===!1?!1:d-c.stepBefore.highestStep,100===a?e=null:0===a&&(f=null);var g=ta.countStepDecimals();return null!==e&&e!==!1&&(e=Number(e.toFixed(g))),null!==f&&f!==!1&&(f=Number(f.toFixed(g))),[f,e]})}function ea(a,b){va[a]=va[a]||[],va[a].push(b),"update"===a.split(".")[0]&&ia.forEach(function(a,b){K("update",b)})}function fa(a){var b=a&&a.split(".")[0],c=b&&a.substring(b.length);Object.keys(va).forEach(function(a){var d=a.split(".")[0],e=a.substring(d.length);b&&b!==d||c&&c!==e||delete va[a]})}function ga(a,b){var c=ba(),d=["margin","limit","padding","range","animate","snap","step","format"];d.forEach(function(b){void 0!==a[b]&&(g[b]=a[b])});var f=X(g);d.forEach(function(b){void 0!==a[b]&&(e[b]=f[b])}),ta=f.spectrum,e.margin=f.margin,e.limit=f.limit,e.padding=f.padding,e.pips&&D(e.pips),qa=[],_(a.start||c,b)}var ha,ia,ja,ka,la,ma=p(),na=r(),oa=na&&q(),pa=a,qa=[],ra=[],sa=!1,ta=e.spectrum,ua=[],va={},wa=null,xa=a.ownerDocument,ya=xa.documentElement,za=xa.body;if(pa.noUiSlider)throw new Error("noUiSlider ("+$+"): Slider was already initialized.");return v(pa),u(e.connect,ha),ka={destroy:ca,steps:da,on:ea,off:fa,get:ba,set:_,reset:aa,__moveHandles:function(a,b,c){J(a,b,qa,c)},options:g,updateOptions:ga,target:pa,removePips:C,pips:D},R(e.events),_(e.start),e.pips&&D(e.pips),e.tooltips&&x(),y(),ka}function Z(a,b){if(!a||!a.nodeName)throw new Error("noUiSlider ("+$+"): create requires a single element, got: "+a);var c=X(b,a),d=Y(a,c,b);return a.noUiSlider=d,d}var $="10.0.0";C.prototype.getMargin=function(a){var b=this.xNumSteps[0];if(b&&a/b%1!==0)throw new Error("noUiSlider ("+$+"): 'limit', 'margin' and 'padding' must be divisible by step.");return 2===this.xPct.length?t(this.xVal,a):!1},C.prototype.toStepping=function(a){return a=x(this.xVal,this.xPct,a)},C.prototype.fromStepping=function(a){return y(this.xVal,this.xPct,a)},C.prototype.getStep=function(a){return a=z(this.xPct,this.xSteps,this.snap,a)},C.prototype.getNearbySteps=function(a){var b=w(a,this.xPct);return{stepBefore:{startValue:this.xVal[b-2],step:this.xNumSteps[b-2],highestStep:this.xHighestCompleteStep[b-2]},thisStep:{startValue:this.xVal[b-1],step:this.xNumSteps[b-1],highestStep:this.xHighestCompleteStep[b-1]},stepAfter:{startValue:this.xVal[b-0],step:this.xNumSteps[b-0],highestStep:this.xHighestCompleteStep[b-0]}}},C.prototype.countStepDecimals=function(){var a=this.xNumSteps.map(k);return Math.max.apply(null,a)},C.prototype.convert=function(a){return this.getStep(this.toStepping(a))};var _={to:function(a){return void 0!==a&&a.toFixed(2)},from:Number};return{version:$,create:Z}});


/*[PATH @digikala/supernova-digikala-desktop/assets/local/js/scarab.min.js]*/
(_scq=_scq||[]).push(["setMerchantId","123DB8D9CCA58C7C"]);var _scdiscovery=_scdiscovery||{visible:!1,config:{alwaysShowAssistantbar:!1,desktopDisabled:!1,tabletDisabled:!0,mobileDisabled:!0,forceDiscoDrag:!1,textAlign:"right",disabledDefs:{type:"urlDoesNotContain",patterns:["/Shipping","/Review","/cart","/Payment"]},color:"#FF5252",background:"#46A349",lang:"fa",currency:"IRT",font:"'yekan', 'B Koodak', 'X Koodak', 'Koodak', Arial",position:{desktop:"left"}}},ScarabArrays=function(){var i=function(t,e,r){if(Array.prototype.forEach)return t.forEach(e,r);for(var n=0,i=t.length;n<i;++n)e.call(r,t[n],n,this)},r=function(t,r){if(Array.prototype.map)return t.map(r);var n=[];return i(t,function(t,e){n.push(r(t,e))}),n};return{forEach:i,map:r,flatmap:function(t,e){return[].concat.apply([],r(t,e))},filter:function(t,e){if(Array.prototype.filter)return t.filter(e);var r=[];return i(t,function(t){e(t)&&r.push(t)}),r},findIndex:function(t,e){if(Array.prototype.findIndex)return t.findIndex(e);for(var r=0,n=t.length;r<n;r++)if(e(t[r]))return r;return-1}}}(),ScarabUtil=function(){var t,r=function(t){if(t&&"string"==typeof t){if("["===t[0]){var e="[]"===t?[]:t.substring(2,t.length-2).split("},{");return ScarabArrays.map(e,function(t){var r={};return ScarabArrays.forEach(t.substring(1,t.length-1).split('","'),function(t){var e=t.split('":"');if(2!==e.length)throw"invalid json";r[e[0]]=e[1]}),r})}return'"'===t[0]?t.substring(1,t.length-1):void 0}},u=function(t,e){e=e||window;var r=t&&(t.disabledDefs||t.config&&t.config.disabledDefs)||{},n=r.type,i=r.patterns||[],a=function(){return!1};return"customFunction"===n?function(){return(t&&t.customDisabled||a).apply(e,arguments)}:"urlDoesNotContain"===n?function(){return 0<ScarabArrays.filter(i,function(t){return-1!==e.location.href.indexOf(t)}).length}:a},a=function(t,e,r,n,i){return"http://recommender.scarabresearch.com/merchants/"+e+"/?v="+encodeURIComponent("i:"+r+",t:"+n+",c:"+i)+"&redirect_to="+encodeURIComponent(t)},o=function(t,e,r){return n(t,{sc_feature:e,sc_cohort:r})},n=function(t,e){var r=[];for(var n in e)e.hasOwnProperty(n)&&void 0!==e[n]&&r.push({n:n,v:e[n]});if(0===r.length)return t;var i=ScarabArrays.map(r.sort(function(t,e){return t.n.localeCompare(e.n)}),function(t){return t.n+"="+encodeURIComponent(t.v)}).join("&"),a=t.indexOf("#"),o="";0<=a&&(o=t.substring(a),t=t.substring(0,a));var s=0<=t.indexOf("?")?"&":"?";return t+s+i+o},e=function(t){for(var e={},r=(t=t.substring(1)).split("&"),n=0;n<r.length;n++)if(""!==r[n]){var i=r[n].split("="),a=i[0],o=1<i.length?i[1]:"";try{var s=decodeURIComponent(o.replace(/\+/g,"%20"));if(void 0===e[a])e[a]=s;else if("string"==typeof e[a]){var c=[e[a],s];e[a]=c}else e[a].push(s)}catch(t){}}return e},l=function(t){return(t=t||window)&&t.location&&t.location.hash&&""!==t.location.hash?e(t.location.hash):{}},d=function(t){return null!==h(t)},h=function(t){for(var e=t+"=",r=document.cookie.split(";"),n=0;n<r.length;n++){for(var i=r[n];" "===i.charAt(0);)i=i.substring(1,i.length);if(0===i.indexOf(e))return decodeURIComponent(i.substring(e.length,i.length));if(t===i)return""}return null},i=function(t){if(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(t))return t;var e=t.split("."),r=e.length,n=Math.min(r,2);return(2<r&&("co"===e[r-2]||"com"===e[r-2]||"azurewebsites"===e[r-2]&&"net"===e[r-1])||"cloudfront"===e[r-2]&&"net"===e[r-1])&&(n=3),"."+e.slice(r-n).join(".")},s=function(){var t,e,r,n=arguments.length,i={};for(t=0;t<n;t++)if(e=arguments[t])for(r in e)e.hasOwnProperty(r)&&(i[r]=e[r]);return i};t=Number.isNaN?Number.isNaN:function(t){return t!=t};var c,f,p,m,g,v=function(t,e){for(var r in e=e||{},t)t.hasOwnProperty(r)&&(null!==t[r]&&"object"==typeof t[r]?(e[r]=t[r].constructor===Array?[]:{},v(t[r],e[r])):e[r]=t[r]);return e},b=function(t){return String.prototype.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},S=function(t){var e=Object(t);if(!Object.keys){var r=[];if("string"==typeof t)for(var n=0;n<e.length;n++)r.push(""+n);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&r.push(i);return r}return Object.keys(e)},y=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},w=function(t){return Object(t)===t&&!y(t)},I=I||function(s,t){var e={},r=e.lib={},n=function(){},i=r.Base={extend:function(t){n.prototype=this;var e=new n;return t&&e.mixIn(t),e.hasOwnProperty("init")||(e.init=function(){e.$super.init.apply(this,arguments)}),(e.init.prototype=e).$super=this,e},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},c=r.WordArray=i.extend({init:function(t,e){t=this.words=t||[],this.sigBytes=null!=e?e:4*t.length},toString:function(t){return(t||o).stringify(this)},concat:function(t){var e=this.words,r=t.words,n=this.sigBytes;if(t=t.sigBytes,this.clamp(),n%4)for(var i=0;i<t;i++)e[n+i>>>2]|=(r[i>>>2]>>>24-i%4*8&255)<<24-(n+i)%4*8;else if(65535<r.length)for(i=0;i<t;i+=4)e[n+i>>>2]=r[i>>>2];else e.push.apply(e,r);return this.sigBytes+=t,this},clamp:function(){var t=this.words,e=this.sigBytes;t[e>>>2]&=4294967295<<32-e%4*8,t.length=s.ceil(e/4)},clone:function(){var t=i.clone.call(this);return t.words=this.words.slice(0),t},random:function(t){for(var e=[],r=0;r<t;r+=4)e.push(4294967296*s.random()|0);return new c.init(e,t)}}),a=e.enc={},o=a.Hex={stringify:function(t){var e=t.words;t=t.sigBytes;for(var r=[],n=0;n<t;n++){var i=e[n>>>2]>>>24-n%4*8&255;r.push((i>>>4).toString(16)),r.push((15&i).toString(16))}return r.join("")},parse:function(t){for(var e=t.length,r=[],n=0;n<e;n+=2)r[n>>>3]|=parseInt(t.substr(n,2),16)<<24-n%8*4;return new c.init(r,e/2)}},u=a.Latin1={stringify:function(t){var e=t.words;t=t.sigBytes;for(var r=[],n=0;n<t;n++)r.push(String.fromCharCode(e[n>>>2]>>>24-n%4*8&255));return r.join("")},parse:function(t){for(var e=t.length,r=[],n=0;n<e;n++)r[n>>>2]|=(255&t.charCodeAt(n))<<24-n%4*8;return new c.init(r,e)}},l=a.Utf8={stringify:function(t){try{return decodeURIComponent(escape(u.stringify(t)))}catch(t){throw Error("Malformed UTF-8 data")}},parse:function(t){return u.parse(unescape(encodeURIComponent(t)))}},d=r.BufferedBlockAlgorithm=i.extend({reset:function(){this._data=new c.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=l.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(t){var e=this._data,r=e.words,n=e.sigBytes,i=this.blockSize,a=n/(4*i);if(t=(a=t?s.ceil(a):s.max((0|a)-this._minBufferSize,0))*i,n=s.min(4*t,n),t){for(var o=0;o<t;o+=i)this._doProcessBlock(r,o);o=r.splice(0,t),e.sigBytes-=n}return new c.init(o,n)},clone:function(){var t=i.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0});r.Hasher=d.extend({cfg:i.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){d.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(r){return function(t,e){return new r.init(e).finalize(t)}},_createHmacHelper:function(r){return function(t,e){return new h.HMAC.init(r,e).finalize(t)}}});var h=e.algo={};return e}(Math);f=(g=(c=I).lib).WordArray,p=g.Hasher,m=[],g=c.algo.SHA1=p.extend({_doReset:function(){this._hash=new f.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(t,e){for(var r=this._hash.words,n=r[0],i=r[1],a=r[2],o=r[3],s=r[4],c=0;c<80;c++){if(c<16)m[c]=0|t[e+c];else{var u=m[c-3]^m[c-8]^m[c-14]^m[c-16];m[c]=u<<1|u>>>31}u=(n<<5|n>>>27)+s+m[c],u=c<20?u+(1518500249+(i&a|~i&o)):c<40?u+(1859775393+(i^a^o)):c<60?u+((i&a|i&o|a&o)-1894007588):u+((i^a^o)-899497514),s=o,o=a,a=i<<30|i>>>2,i=n,n=u}r[0]=r[0]+n|0,r[1]=r[1]+i|0,r[2]=r[2]+a|0,r[3]=r[3]+o|0,r[4]=r[4]+s|0},_doFinalize:function(){var t=this._data,e=t.words,r=8*this._nDataBytes,n=8*t.sigBytes;return e[n>>>5]|=128<<24-n%32,e[14+(n+64>>>9<<4)]=Math.floor(r/4294967296),e[15+(n+64>>>9<<4)]=r,t.sigBytes=4*e.length,this._process(),this._hash},clone:function(){var t=p.clone.call(this);return t._hash=this._hash.clone(),t}}),c.SHA1=p._createHelper(g),c.HmacSHA1=p._createHmacHelper(g);var U=function(t){return I.SHA1(t).toString(I.enc.Hex)},C=function(t){return"//cdn.scarabresearch.com/static"+t},_=function(t){return"//static.scarabresearch.com"+t},A=function(t){return"http://local.scarabresearch.com:3000"+t},k={sc_inspector:{path:C("/inspector/scarab-inspector.min.js"),devPath:A("/build/scarab-inspector.js"),durationSeconds:86400},emarsys_hooked:{path:C("/hooked/scarab-hooked.js"),devPath:A("/hooked/build/scarab-hooked.js"),durationSeconds:604800},emarsys_discovery:{aliases:["sc_assistant","sc_discodrag","sc_mobildisco","sc_discovery"],desktop:{path:C("/assistant/scarab-assistant.js"),devPath:A("/build/scarab-assistant.js")},mobile:{path:_("/discodrag/build.js"),devPath:A("/dist/build.js"),stagingPath:_("/discodragstaging/build.js")},legacyMobile:{path:C("/mobildisco/build.js"),devPath:A("/build/build.js")},moduleConfig:"_scdiscovery",durationSeconds:86400},emarsys_webpersonalization:{aliases:["sc_webpersonalization"],es6:{path:_("/wpjs/wpes6.js"),devPath:A("/dist/wpes6.js")},es5:{path:_("/wpjs/wpes5.js"),devPath:A("/dist/wpes5.js")},loader:{path:_("/wpjs/wploader.js"),devPath:A("/dist/wploader.js")},durationSeconds:86400},emarsys_instantsearch:{aliases:["sc_instantsearch"],path:_("/instantsearch/build.js"),devPath:A("/dist/build.js"),moduleConfig:"_scinstant",durationSeconds:86400},emarsys_webpush:{path:_("/web-push-client/emarsys-web-push.js"),devPath:A("/emarsys-web-push.js"),durationSeconds:86400}},P={inspector:{path:C("/inspector/scarab-inspector.min.js"),devPath:A("/build/scarab-inspector.js")},discovery:{path:C("/discovery/scarab-discovery.js")},assistant:{path:C("/assistant/scarab-assistant.js"),devPath:A("/build/scarab-assistant.js"),durationSeconds:86400},mobildisco:{path:C("/mobildisco/build.js"),devPath:A("/build/build.js"),durationSeconds:86400},discodrag:{path:_("/discodrag/build.js"),devPath:A("/dist/build.js"),stagingPath:_("/discodragstaging/build.js"),durationSeconds:86400},instantsearch:{path:_("/instantsearch/build.js"),devPath:A("/dist/build.js"),durationSeconds:86400},horus:{path:C("/horus/horus.js"),devPath:A("/build/horus.js"),durationSeconds:604800},hooked:{path:C("/hooked/scarab-hooked.js"),devPath:A("/hooked/build/scarab-hooked.js")},develop:{}},O=function(t,r,n){if(!window.ScarabTrustIssues&&"develop"!==t){var i="scarab-"+t;if(!document.getElementById(i)){var e=P[t].path;if(n&&n.staging&&P[t].stagingPath&&(e=P[t].stagingPath),n&&n.dev&&(e=P[t].devPath),n&&n.devSsl&&(e=P[t].devPath.replace(/http:\/\/local.scarabresearch.com:3000/g,"https://dafay6v9gkf6n.cloudfront.net")),n&&n.devPort){var a=parseInt(n.devPort||"3000",10);if(a!=a||a<0||65535<a)return;e=P[t].devPath.replace(/local.scarabresearch.com:3000/g,"build.dev.scarabresearch.com:"+a)}ScarabUtil.script=ScarabUtil.script||{};var o=function(t){if(r&&t){var e=r;r=null,e(t,n)}};ScarabUtil.scriptCb=ScarabUtil.scriptCb||{},ScarabUtil.scriptCb[i]=o;var s=document.createElement("script");s.id=i,s.src=e,s.charset="utf-8";var c=document.getElementsByTagName("script")[0],u=function(t,e){ScarabUtil.script[i]||("loaded"===t.readyState||"completed"===t.readyState?e():setTimeout(function(){u(t,e)},100))};s.onload=function(){o(ScarabUtil.script[i])},u(s,function(){o(ScarabUtil.script[i])}),c.parentNode.insertBefore(s,c)}}},E=function(t){return t=t||window,/iPhone|iPod/.test(t.navigator.userAgent)&&!t.MSStream},N=function(e,r){return ScarabArrays.map(["redirectStart","fetchStart","domainLookupStart","connectStart","secureConnectionStart","requestStart","responseStart","responseEnd","renderEnd","goStart"],function(t){return e[t]?e[t].toFixed(0):r[t]?r[t].toFixed(0):""}).join(",")};return{makeDisableFunction:u,prettyPrice:function(t){for(var e=(t+="").split("."),r=e[0],n=1<e.length?"."+e[1]:"",i=/(\d+)(\d{3})/;i.test(r);)r=r.replace(i,"$1 $2");return r+n},redirect:a,sc_params:o,addTrackingParams:function(t,e){return s(e,{sc_feature:t.recommender.f,sc_cohort:t.cohort})},appendParams:n,getCookie:function(t){var e=h(t);if(null===e)return[];try{return JSON.parse(e)}catch(t){return r(e)}},getCookieWithoutCrazyness:h,hasCookie:d,topDomainToCookie:function(t){return"localhost"===t?"":"domain="+i(t)},getTopDomain:i,redirectWithScParams:function(t,e,r,n,i){return a(o(t,n,i),e,r,n,i)},parseQueryString:function(t){return(t=t||window)&&t.location&&t.location.search&&""!==t.location.search?e(t.location.search):{}},parseHashString:l,merge:s,isNaN:t,indexOf:function(t,e,r){if(Array.prototype.indexOf)return t.indexOf(e,r);var n;if(null==t)throw new TypeError('"this" is null or not defined');var i=Object(t),a=i.length>>>0;if(0===a)return-1;var o=+r||0;if(Math.abs(o)===1/0&&(o=0),a<=o)return-1;for(n=Math.max(0<=o?o:a-Math.abs(o),0);n<a;){if(n in i&&i[n]===e)return n;n++}return-1},indexOfItem:function(t,e,r){var n,i;if(!t||t&&!t.length)return-1;for(i=t.length,n=0;n<i;n++)if("string"==typeof e){if(void 0!==t[n]&&t[n][r]===e)return n}else if(void 0!==t[n]&&e.equal(t[n]))return n;return-1},deepCopy:v,augment:function(){var t,e=arguments.length,r=arguments[0];for(t=1;t<e;t++)arguments[t].call(r.prototype)},bind:function(e,r){return function(){var t=r;e.apply(t,arguments)}},sha1:U,trim:b,keys:S,isArray:y,isObject:w,containsPrimitivesOnly:function(t){return w(t)&&function(t){for(var e,r,n=S(t),i=0,a=n.length;i<a;i++){var o=n[i];if(Object.prototype.hasOwnProperty.call(t,o)&&(e=t[o],"string"!=(r=typeof e)&&"number"!==r&&"boolean"!==r&&null!==e))return!1}return!0}(t)},isEmpty:function(t){return 0===S(t).length},findLocalizedTopic:function(t,e,r){if(!r)return e;var n,i,a=(i=r,(n=t)&&n.category?n["category_"+i]||n["c_category_"+i]:null);if(!a||!e)return"";var o=ScarabArrays.findIndex(t.category.split("|"),function(t){return 0===t.indexOf(e)});if(-1===o)return"";var s=a.split("|"),c=s[Math.min(o,s.length-1)],u=e.split(">").length,l=c.split(">");return l.length===u?c:l.slice(0,u).join(">")},playQueue:function(a,t){var r=function(t){if(!(t instanceof Array)){if(t instanceof r)return;throw new SyntaxError("Scarab Queue is not an array")}for(var e=0;e<t.length;++e)this.push(t[e])};return r.prototype.push=function(){for(var t=0;t<arguments.length;++t){var e=arguments[t];if(!(e instanceof Array)&&0<e.length)throw new SyntaxError("command should be a non-empty array: "+e);for(var r=e[0],n=[],i=1;i<e.length;++i)n.push(e[i]);if(!a.hasOwnProperty(r))throw new SyntaxError("unknown command: "+r);a[r].apply(null,n)}},new r(t)},script:{},modules:P,loader:O,loadModules:function(t,e){e=e||window;var r=l(e);if(window.JSON){var n=function(t){t.go()};for(var i in P)if(P.hasOwnProperty(i)){var a="sc_"+i;if(void 0!==r[a]){var o=r[a]||"{}";try{JSON.parse(o)}catch(t){e.console&&e.console.error&&console.error("Hash config for",a,"is not a valid JSON: ",t);continue}var s=new Date;s.setSeconds(s.getSeconds()+(P[i].durationSeconds||1800)),document.cookie=a+"="+encodeURIComponent(o)+";expires="+s.toUTCString()+";path=/"}var c=h(a);if(null!==c){try{(c=JSON.parse(c)).serverUrl&&(c.serverUrl=null),P[i].config=c}catch(t){e.console&&e.console.error&&console.error("Bad hash config found in cookie",a,":",t);continue}t[i]?t[i](c):O(i,n,c)}}}},isMobile:function(t){var e=(t=t||window).innerWidth,r=t.innerHeight,n=t.navigator;return t.matchMedia?t.matchMedia("only screen and (max-device-width : 480px)").matches&&n.userAgent&&-1<n.userAgent.search("Mobi"):e&&r&&n&&n.userAgent&&Math.min(e,r)<=480&&-1<n.userAgent.search("Mobi")},isIPhone:E,isIpad:function(t){return t=t||window,/iPad/.test(t.navigator.userAgent)&&!t.MSStream},isSafari:function(t){return t=t||window,/WebKit/i.test(t.navigator.userAgent)&&!/(CriOS|FxiOS|OPiOS|mercury)/i.test(t.navigator.userAgent)},isChromeForIPhone:function(t){return t=t||window,E(t)&&t.navigator.userAgent.match("CriOS")},isChromeForAndroid:function(t){return!!(t=t||window).navigator.userAgent.match(/Android.*Chrome\/[0-9].*Mobile/i)&&!t.navigator.userAgent.match(/Version\/[0-9]/i)},JSONParser:r,clientTimings:function(t,e,r,n){if((t=t||window).performance&&t.performance.timing&&t.performance.getEntriesByType){e.domContentLoaded=Math.max(0,t.performance.timing.domContentLoadedEventEnd-t.performance.timing.navigationStart),e.domInteractive=Math.max(0,t.performance.timing.domInteractive-t.performance.timing.navigationStart),e.loadStart=Math.max(0,t.performance.timing.loadEventStart-t.performance.timing.navigationStart),e.loadEnd=Math.max(0,t.performance.timing.loadEventEnd-t.performance.timing.navigationStart);var i,a=t.performance.getEntriesByType("resource"),o=ScarabArrays.filter(a,function(t){return 0<=t.name.indexOf("scarab-v2.js")}),s=ScarabArrays.filter(a,function(t){return 0<=t.name.indexOf(r)&&-1===t.name.indexOf("DISCO")});if(1===s.length&&1===o.length)return["2,"+(i=e,ScarabArrays.map(["initStart","domContentLoaded","domInteractive","loadStart","loadEnd"],function(t){return i[t]?i[t].toFixed(0):""}).join(",")),"l,"+N(o[0],{}),(n?"r,":"d,")+N(s[0],e)].join("|")}},createCORSRequest:function(t,e){var r=new XMLHttpRequest;return"withCredentials"in r?(r.open(t,e,!0),r):null},createJSONPRequest:function(t,e,r){if(!window.ScarabTrustIssues)if(t=t+"&callback="+e,""===e)(new Image).src=t;else{var n=document.createElement("script");n.src=t,n.id=(r||"scarab-jsonp")+"-"+e,n.type="text/javascript",n.charset="UTF-8",document.getElementsByTagName("head")[0].appendChild(n)}},hashEmail:function(t){return U(b(t).toLowerCase()).substring(0,16)+"1"},emarsysModules:k,loadedModules:{},checkModules:function(e,t){if(function(n){var i=l(n);if(n.JSON)for(var a in k)k.hasOwnProperty(a)&&ScarabArrays.forEach([a].concat(k[a].aliases||[]),function(e){if(i[e]||""===i[e]){try{if(""!==i[e]){var t=n.JSON.parse(i[e]);t.serverUrl&&delete t.serverUrl,i[e]=n.JSON.stringify(t)}}catch(t){return void(n.console&&n.console.error&&n.console.error("Hash config for",e,"is not a valid JSON: ",i[e]))}var r=new Date;r.setSeconds(r.getSeconds()+k[a].durationSeconds),document.cookie=e+"="+encodeURIComponent(i[e])+";expires="+r.toUTCString()+";path=/"}})}(e=e||window),e.JSON)for(var r in k)if(k.hasOwnProperty(r))try{var n=h(r),i=n?e.JSON.parse(n):{},a=e[k[r].moduleConfig]||{config:{}},o=ScarabUtil.merge(a.config||a,i);if(o.disabled=u(o),o.cookieMode=d(r),a.visible||o.cookieMode)t(r,o);else if(k[r].aliases)for(var s=0;s<k[r].aliases.length;s++){var c=k[r].aliases[s];i=(n=h(c))?e.JSON.parse(n):{},(o=ScarabUtil.merge(a.config,i)).disabled=u(o),o.cookieMode=d(c),(a.visible||o.cookieMode)&&t(r,o)}}catch(t){e.console&&e.console.error&&e.console.error('error preparing "'+r+'" config',t);continue}},loadModule:function(e,r,n,t,i){if(!(e=e||window).ScarabTrustIssues&&k[r]&&!k[r].status){k[r].status="loading";var a=t&&k[r][t]?k[r][t]:k[r],o=a.path;if(n&&n.staging&&a.stagingPath&&(o=a.stagingPath),n&&n.dev&&(o=a.devPath),n&&n.devSsl&&(o=a.devPath.replace(/http:\/\/local.scarabresearch.com:3000/g,"https://dafay6v9gkf6n.cloudfront.net")),n&&n.devPort){var s=parseInt(n.devPort||"3000",10);if(s!=s||s<0||65535<s)return void delete k[r].status;o=a.devPath.replace(/local.scarabresearch.com:3000/g,"build.dev.scarabresearch.com:"+s)}ScarabUtil.loadedModules[r]={config:n,callback:function(t){if("loaded"!==k[r].status){ScarabUtil.loadedModules[r].instance=t,k[r].status="loaded";try{if(!t)return void(e.console&&e.console.error&&e.console.error("no module instance passed in callback",r,n));t.go&&t.go(n),i&&i()}catch(t){e.console&&e.console.error&&e.console.error('error launching "'+r+'" with config',n,t)}}else e.console&&e.console.error&&e.console.error("module already loaded",r,n)}};var c=document.createElement("script");c.module=r,c.id=r,c.src=o,c.charset="utf-8";var u=document.getElementsByTagName("script")[0];u.parentNode.insertBefore(c,u)}},getCohort:function(t,e,r,n){if((t=t||window).JSON&&t.JSON.parse){var i=(e?e+"/merchants/":("file:"===document.location.protocol?"http:":document.location.protocol)+"//recommender.scarabresearch.com/merchants/")+r,a=ScarabUtil.createCORSRequest("GET",i);a&&(a.onload=function(){var t=JSON.parse(a.responseText);n(t.cohort)},a.onerror=function(){t.console&&t.console.error&&t.console.error("Error determining cohort from url:",i),n()},a.withCredentials=!0,a.send())}},isLocalStorageSupported:function(t){try{var e="scarabTestKey",r=t.localStorage;return r.setItem(e,"1234567890abcdefghijklmnopq"),r.removeItem(e),!0}catch(t){return!1}}}}();"undefined"!=typeof window&&(window.ScarabArrays=ScarabArrays),"undefined"!=typeof window&&(window.ScarabUtil=ScarabUtil);var ScarabModule=function(t,m){m=m||{};var l,d,h,f,p,g,v,b,S,y,w,e,n,I,r,i,a,U,C=t||window,_=ScarabUtil.isLocalStorageSupported(C),A=(ScarabUtil.hasCookie("sc_develop"),{initStart:C.performance&&C.performance.now?C.performance.now():null,goStart:null,renderEnd:null}),s="scarab.mayViewed",o="scarab.mayAdd",k="scarab.visitor",P="scarab.profile",O="sc_timings",c="__no_container__",E={v:"views",ai:"addedItems",ca:"cart",wl:"wishlist",co:"checkouts",k:"keywords",q:"searchTerm",vc:"category",cp:"compactProducts",lang:"language",currency:"currency",az:"availabilityZone"},u={pageview:1,addView:2,checkAddedItem:3,addAddedItem:4,addCartItem:5,setCart:6,setWishlist:7,addCheckoutItem:8,setPurchase:9,commit:10},N={RELATED:{trigger:"view",validate:function(t){return t.views&&0<t.views.length}},ALSO_BOUGHT:{trigger:"view",validate:function(t){return t.views&&0<t.views.length}},CART:{trigger:"cart",validate:function(t){return t.cart&&0<t.cart.length||t.cart&&0<t.cart.v}}},M={},x=0,R=[],j={},T=[],L=null,D=null,q=!1,B=0,F=!1,H=!1,z={};ScarabUtil.inspector&&!m.doNotInspect&&(ScarabUtil.inspector.FEATURETRIGGERS=N);var J,V=J={version:"0.1.0",templateSettings:{begin:"{{",end:"}}",varname:"it"},template:function(t,e){var r,n,i="",a=(e=e||J.templateSettings).begin,o=e.end,s=t.replace(/\s*<!\[CDATA\[\s*|\s*\]\]>\s*|[\r\n\t]|(\/\*[\s\S]*?\*\/)/g,"").split(a).join(o+"").split(o);for(n=s.length,r=0;r<n;r++)i+=""!==s[r].charAt(0)?"out+='"+s[r].replace(/(\\|["'])/g,"\\$1")+"'":"="===s[r].charAt(1)?";out+=("+s[r].substr(2)+");":"!"===s[r].charAt(1)?";out+=("+s[r].substr(2)+").toString().replace(/&(?!\\w+;)/g, '&#38;').split('<').join('&#60;').split('>').join('&#62;').split('\"').join('&#34;').split(\"'\").join('&#39;');":";"+s[r].substr(1);i="try{"+('var out="";'+i+";return out;").split("out+='';").join("").split('var out="";out+=').join("var out=")+'} catch(e){e.type="TemplateExecutionError";e.args=arguments;e.template=arguments.callee.toString();throw new SyntaxError("Error in Scarab template.");}';try{return new Function(e.varname,i)}catch(t){throw window.console&&console.warn&&console.warn("Could not create a template function: "+i,t),new SyntaxError("Error in Scarab template.")}}};V.templateSettings={begin:"{{",end:"}}",varname:"SC"};var G,W,Q,K=(G=function(){var t,e,r=[],n=this.serializableProperties,i=n.length;for(t=0;t<i;t++)e=n[t],this.hasOwnProperty(e)&&(this[e]||0===this[e])&&r.push(e+":"+this[e]);return r.join(",")},function(){this.serialize=G}),$=(W=function(t){return this.compare(t)},function(){this.equal=W}),Z=(Q=function(){var t,e,r,n=arguments.length;for(t=0;t<n;t++)for(r in e=arguments[t])e.hasOwnProperty(r)&&(this[r]=e[r])},function(){this.merge=Q}),X=function(t){this.i=encodeURIComponent(t.i+"")||null,this.t=t.t||null,this.p=0===t.p?0:t.p||null,this.q=t.q||null,this.c=t.c||null,this.ct=t.ct||null};ScarabUtil.augment(X,K,$,Z),X.prototype.serializableProperties=["i","t","p","q","c"],X.prototype.compare=function(t){return this.i===t.i};var Y=function(t){this.f=t.f||null,this.l=t.l||null,this.o=void 0===t.o?null:t.o,this.t=t.t?encodeURIComponent(t.t):null,this.hasMore=!1,this.cohort="",this.merchants=[],this.containerId=t.containerId||null,this.parent=this.containerId?document.getElementById(this.containerId):null,this.template=t.template||null,this.pages=t.pages||[],this.currentPage=null,this.attachedListeners=t.attachedListeners||!1,this.transaction=null,this.pi=null,this.cust=t.cust||null,this.requestSent=!1};ScarabUtil.augment(Y,K,$),Y.prototype.serializableProperties=["f","l","o","t","cust"],Y.prototype.compare=function(t){return this.f===t.f},Y.prototype.getProducts=function(){var t,e,r=this.pages.length,n=[];for(t=0;t<r;t++)e=this.pages[t],n=n.concat(e.products);return n},Y.prototype.purgePagesCache=function(){this.pages=[],this.currentPage=null};var tt=function(t){var e=[];if(void 0!==t.getAttribute){var r=t.getAttribute("data-scarabitem");r&&e.push(r)}if(0===t.childNodes.length)return e;for(var n=0;n<t.childNodes.length;++n){var i=tt(t.childNodes[n]);e=e.concat(i)}return e};Y.prototype.findProducts=function(){if("undefined"==typeof NodeFilter)return tt(this.parent);for(var t,e=document.createTreeWalker(this.parent,NodeFilter.SHOW_ELEMENT,null,!1),r=[];(t=e.currentNode.getAttribute("data-scarabitem"))&&r.push(t),e.nextNode(););return r},Y.prototype.setProducts=function(t){this.pi=t},Y.prototype.setPage=function(t){var r=this;this.parent=document.getElementById(this.containerId),this.containerId!==c&&!this.parent&&window.console&&console.error&&console.error('container not found: "'+this.containerId+'"');var e,n=function(t,e){return r.render(t,e)};if(this.currentPage=t,e=this.getDataForRendering(),L&&L(e),this.successCallback)try{this.successCallback(e,n)}catch(t){window.console&&console.warn&&console.warn("Error in successCallback.",t)}else q||Et.invokeRendering(e,n);this.attachListeners(),D&&D(e)},Y.prototype.addPage=function(t){this.pages.push(t),this.setPage(t)},Y.prototype.previousPage=function(){var t=ScarabUtil.indexOfItem(this.pages,this.currentPage);0<t&&this.setPage(this.pages[t-1])},Y.prototype.nextPage=function(){var t=ScarabUtil.indexOfItem(this.pages,this.currentPage);-1!==t&&(t<this.pages.length-1?this.setPage(this.pages[t+1]):this.hasMore&&(this.o+=this.l,Et.setCohortId(this.cohort),this.requestSent=!1,this.transaction.sendRequest()))},Y.prototype.getDataForRendering=function(){var t={};return t.page=ScarabUtil.deepCopy(this.currentPage),t.topic=this.topicLabel,t.topicLocalized=this.transaction.language&&this.transaction.language[0]?ScarabUtil.findLocalizedTopic(t.page.products[0],this.topicLabel,this.transaction.language[0]):this.topicLabel,t.recommender={},t.recommender.f=this.f,t.recommender.limit=this.l,t.recommender.container=this.parent,t.cohort=this.cohort,t.merchants=this.merchants,t};var et=function(t,e){for(var r=function(t,e){if(t.getElementsByClassName)return t.getElementsByClassName(e);for(var r=t.getElementsByTagName("*"),n=[],i=0;i<r.length;i++)r[i].className===e&&n.push(r[i]);return n}(t,e),n=0;n<r.length;++n){var i=r[n].className;r[n].className=i+" scarab-disabled-button"}};Y.prototype.render=function(t,e){var r=this.parent;if("function"==typeof this.template&&!e){if(!r)throw'DOM element "'+this.containerId+'" not found "';r!==document.getElementById(r.id)&&(r=document.getElementById(r.id),this.parent=r,this.attachedListeners=!1),r.innerHTML=this.template(t);var n=ScarabUtil.indexOfItem(this.pages,this.currentPage);0===n&&et(r,"scarab-prev"),n!==this.pages.length-1||this.hasMore||et(r,"scarab-next")}},Y.prototype.attachListeners=function(){if(!this.attachedListeners){this.attachedListeners=!0,Ct(this);var t=this.parent;this.elistener=function(t,e,r,n){var i;if(t)return t.addEventListener?(i=ScarabUtil.bind(r,n),t.addEventListener(e,i,!1)):t.attachEvent&&(i=ScarabUtil.bind(r,n),t.attachEvent("on"+e,i)),i}(t,"click",this.eventListener,this)}},Y.prototype.eventListener=function(t){var e,r,n,i,a=t.srcElement||t.target,o=[];do{if(i=a.getAttribute?a.getAttribute("data-scarabitem"):null)return Y.eventsHandlers["scarab-item"].call(this,i,this.f,this.cohort);for(n=(o=(e=a.className||"").split?e.split(" "):"").length,r=0;r<n;r++)if(o[r]in Y.eventsHandlers)return Y.eventsHandlers[o[r]].call(this,a);a=a.parentNode}while(a&&a!==this.parent);return!0},Y.eventsHandlers={"scarab-item":function(t,e,r){Et.itemClick(t,e,r)},"scarab-prev":function(){this.previousPage()},"scarab-next":function(){this.nextPage()}},ScarabUtil.inspector&&!m.doNotInspect&&ScarabUtil.inspector.trackObjectFunctions("Feature",Y.prototype);var rt=function(){this.products=[]};ScarabUtil.augment(rt,$),rt.prototype.compare=function(t){return t===this},rt.prototype.addProduct=function(t){this.products.push(t)},rt.prototype.removeProduct=function(){};var nt=function(t){this.isPlaying=!1,this.tick=null,this.events=[],this.transaction=t,this.playcounter=0};nt.prototype.add=function(t){this.events.push(t),this.events.sort(this.compareEvent)},nt.prototype.compareEvent=function(t,e){return t.item&&e.item&&t.item.i&&e.item.i&&t.item.i!==e.item.i?t.item.i<e.item.i?-1:1:u[t.event]===u[e.event]?0:u[t.event]<u[e.event]?-1:1},nt.prototype.hasNonTrivialEvents=function(){for(var t=0;t<this.events.length;t++)if("commit"!==this.events[t].event||this.events[t].forceSend)return!0;return!1},nt.prototype.shouldSend=function(){return this.hasNonTrivialEvents()||h||p||v||S||y||b||0<this.transaction.features.length||this.transaction.keywords&&0<this.transaction.keywords.length||this.transaction.searchTerm&&0<this.transaction.searchTerm.length||this.transaction.category&&0<this.transaction.category.length||this.transaction.tags&&0<this.transaction.tags.length||this.transaction.tagsWithAttributes&&0<this.transaction.tagsWithAttributes.length||this.transaction.errors&&0<this.transaction.errors.length},nt.prototype._play=function(){var t,e=this.transaction;for(this.isPlaying=!0,this.shouldSend()||this.clear();this.events.length;)t=this.events.shift(),e.eventHandlers[t.event].call(e,t.item);this.isPlaying=!1},nt.prototype.play=function(t){if(this.isPlaying)return!0;this.tick&&C.clearTimeout(this.tick),t?this._play():this.tick=C.setTimeout(ScarabUtil.bind(this._play,this),100)},nt.prototype.clear=function(){this.events=[]};var it=function(t,e,r){F?(C.document.cookie=t+"=; path=/;"+ScarabUtil.topDomainToCookie(C.document.domain)+"; expires=Thu, 01 Jan 1970 00:00:01 GMT;",C.document.cookie=t+"="+encodeURIComponent(e)+"; path=/; domain="+C.document.domain+(r?" ; expires="+r+";":"")):C.document.cookie=t+"="+encodeURIComponent(e)+"; path=/;"+ScarabUtil.topDomainToCookie(C.document.domain)+(r?" ; expires="+r+";":"")},at=function(t,e){var r,n,i,a,o="[";for(i=[],a=0;a<e.length;a++){for(r in n=[],e[a])e[a].hasOwnProperty(r)&&(e[a][r]||0===e[a][r])&&n.push('"'+r+'":"'+e[a][r]+'"');n.length&&i.push("{"+n.join(",")+"}")}i.length&&(o+=i.join(",")),it(t,o+="]")},ot=function(t,e){var r,n=ScarabUtil.getCookie(t),i=n.length;for(r=0;r<i;r++)if(r in n&&e.equal(n[r]))return n[r];return null},st=function(t){return(new Date).getTime()-t<3e4},ct=function(t,e){var r=ScarabUtil.getCookie(t),n=ScarabUtil.indexOfItem(r,e);-1<n&&r.splice(n,1),at(t,r)},ut=function(t,e){var r=ScarabUtil.getCookie(t),n=ScarabUtil.indexOfItem(r,e);9<r.length&&r.shift(),-1===n&&(r.push(e),at(t,r))},lt=function(t){this.name=ht(t),this.views=null,this.addedItems=null,this.cart=null,this.features=[],this.productIds=[],this.checkouts=null,this.orderId="",this.callbackName="",this.events=new nt(this),this.keywords=null,this.searchTerm=null,this.category=null,this.tags=null,this.tagsWithAttributes=null,this.exclude=[],this.compactProducts=["1"],this.id=t,this.errors=null,this.language=null,this.currency=null,this.availabilityZone=null,this.isNewPageView=!1,this.wishlist=null};lt.prototype={eventHandlers:{addView:function(t){this.views=this.views||[],this.views&&0<this.views.length&&this.error({t:"MULTIPLE_CALL",c:"view",m:"Multiple calls of view command"});var e=function(t){var e,r=ScarabUtil.getCookie(t),n=r.length,i={ct:Number.MAX_VALUE};for(e=0;e<n;e++)e in r&&r[e].ct&&r[e].ct<i.ct&&st(r[e].ct)&&(i=r[e]);if(i.ct!==Number.MAX_VALUE){var a=new X({i:i.i});return a.merge(i),a}return null}(s);e&&(t.t=e.t,t.c=e.c,ct(s,e)),function(t,e){var r,n=ScarabUtil.getCookie(t),i=n.length,a=!1;for(r=0;r<i;r++)if(r in n&&n[r].ct&&!st(n[r].ct)){a=!0;var o=new X({i:n[r].i});o.merge(n[r]),ct(s,o)}a&&e.error({t:"MISSING_ARG",c:"view",m:"There was no view command after widget clicked"})}(s,Ut()),i&&(t.t=i),a&&(t.c=a),this.views.push(t),ut(o,t)},pageview:function(t){null==t?(this.isNewPageView=!0,t=mt()):this.isNewPageView=!1,pt(t)},checkAddedItem:function(t){ot(s,t)&&this.addView(t)},addAddedItem:function(t){this.addedItems=this.addedItems||[];var e=ot(o,t);e&&(t.merge(e),ct(o,t)),this.addedItems.push(t)},addCartItem:function(t){this.cart=this.cart||[],0<this.cart.v?window.console&&console.warn&&console.warn('Do not mix the deprecated "cartItem" and the prefered "cart" calls.'):this.cart.push(t)},setCart:function(t){this.cart&&this.error({t:"MULTIPLE_CALL",c:"cart",m:"Multiple calls of cart command"}),this.cart=t,this.cart.v=1},setWishlist:function(t){this.wishlist&&this.error({t:"MULTIPLE_CALL",c:"wishlist",m:"Multiple calls of wishlist command"}),this.wishlist=t},addCheckoutItem:function(t){this.checkouts=this.checkouts||[],this.checkouts.push(t)},setPurchase:function(t){this.checkouts&&this.error({t:"MULTIPLE_CALL",c:"purchase",m:"Multiple calls of purchase command"}),this.checkouts=t.items,t.orderId&&(this.orderId=t.orderId)},commit:function(){var e=this;e.merchantId=gt(),e.pageViewId=ft(),e.emailHash=p,e.customerId=h,ScarabArrays.forEach(R,function(t){try{t(e)}catch(t){e.error({t:"INVALID_ARG",c:"addTransactionListener",m:"transaction listener threw an exception: "+t})}}),this.sendRequest(),_t()}},highlightFeatures:function(){if(I)for(var t=0;t<T.length;++t){var e=document.createElement("span");e.textContent=T[t].f,e.style.background="red",T[t].parent.appendChild(e),T[t].parent.style.border="5px solid red"}},setOrderId:function(t){this.orderId=t},addView:function(t){this.events.add({item:t,event:"addView"})},pageview:function(t){this.events.add({item:t,event:"pageview"})},addAddedItem:function(t){this.events.add({item:t,event:"checkAddedItem"}),this.events.add({item:t,event:"addAddedItem"})},addCartItem:function(t){this.events.add({item:t,event:"addCartItem"})},setCart:function(t){for(var e=0,r=t.length;e<r;e++)this.events.add({item:t[e],event:"checkAddedItem"});this.events.add({item:t,event:"setCart"})},setWishlist:function(t){this.events.add({item:t,event:"setWishlist"})},addCheckoutItem:function(t){this.events.add({item:t,event:"addCheckoutItem"})},setPurchase:function(t){this.events.add({item:t,event:"setPurchase"})},addKeyword:function(t){this.keywords=this.keywords||[],this.keywords.push(t)},addSearchTerm:function(t){this.searchTerm=this.searchTerm||[],this.searchTerm.push(t)},addCategory:function(t){this.category=this.category||[],this.category.push(t)},addTag:function(e,t){var r=ScarabUtil.bind(function(t){this.error({t:"INVALID_ARG",c:"tag",m:'Invalid attribute for tag "'+e+'". '+t})},this);void 0===t?(this.tags=this.tags||[],this.tags.push(e)):ScarabUtil.isObject(t)?ScarabUtil.containsPrimitivesOnly(t)?ScarabUtil.isEmpty(t)?r("Attributes can not be empty (or should be omitted entirely)."):(this.tagsWithAttributes=this.tagsWithAttributes||[],this.tagsWithAttributes.push({name:e,attributes:t})):r("Individual attributes can only be values of type string, number or boolean."):r("Attributes must be specified as an object.")},addExcludeRule:function(t){this.exclude.push(t)},setAvailabilityZone:function(t){this.availabilityZone=[t]},setLanguage:function(t){this.language=[t]},setCurrency:function(t){this.currency=[t]},error:function(t,e){this.errors=this.errors||[],this.errors.push(t),window.console&&console.error&&!e&&console.error(t)},go:function(t,e){this.time=(new Date).getTime(),!n&&!m.disableMultiGoCheck&&1<this.id&&Math.abs(M[ht(this.id)].time-M[ht(this.id-1)].time)<500&&this.error({t:"MULTIPLE_CALL",c:"go",m:"Multiple calls of go command"});var r=function(t,e){for(var r=0;r<e.length;++r)if(e[r].event===t)return!0;return!1};i&&a&&!r("addView",this.events.events)&&Et.view("scarab/click",0,0,i,a),1!==this.id||r("pageview",this.events.events)||this.events.add({item:null,event:"pageview"}),this.events.add({item:null,event:"commit",forceSend:e}),this.events.play(t)},registerFeature:function(t){(t.transaction=this).features.push(t)},serializeList:function(t){var e,r=t.length,n=[];for(e=0;e<r;e++)t[e].serialize?n.push(t[e].serialize()):n.push(t[e]);return n.join("|")},serializeContext:function(){var t,e=[];e.push("pv="+ft()),!m.isNotNewPageView&&this.isNewPageView&&e.push("xp=1");var r=ScarabArrays.filter(this.features,function(t){return!t.requestSent});0<r.length&&e.push("f="+encodeURIComponent(this.serializeList(r)));var n=this;for(s in ScarabArrays.forEach(r,function(t){for(var e in t.requestSent=!0,N)if(!t.t&&t.f&&0===t.f.indexOf(e)){var r=N[e];r&&"function"==typeof r.validate&&r.validate(n)}}),E)E.hasOwnProperty(s)&&(t=this[E[s]],"cart"===E[s]&&t&&t.v&&0<t.v&&e.push("cv="+t.v),null==t||(0===t.length?e.push(s+"="):0<t.length&&e.push(s+"="+encodeURIComponent(this.serializeList(t)))));for(s=0;s<this.features.length;s++)this.features[s].pi&&0<this.features[s].pi.length&&(t=Array.prototype.concat([this.features[s].f],this.features[s].pi),e.push("pi="+encodeURIComponent(this.serializeList(t))));if(l&&e.push("s="+encodeURIComponent(l)),d&&e.push("vi="+encodeURIComponent(d)),f&&e.push("p="+encodeURIComponent(f)),h&&e.push("ci="+encodeURIComponent(h)),p&&e.push("eh="+encodeURIComponent(p)),g&&e.push("es="+encodeURIComponent(g)),v&&/^email_/.test(v)){var i=v.replace(/^email_/,"");i&&(isNaN(i)?this.error({t:"INVALID_ARG",c:"sc_src",m:"Invalid argument in email campaign id"}):e.push("ecid="+encodeURIComponent(i)))}if(S&&(isNaN(S)?this.error({t:"INVALID_ARG",c:"sc_lid",m:"Invalid argument in sc_lid"}):e.push("elid="+encodeURIComponent(S))),y&&(isNaN(y)?this.error({t:"INVALID_ARG",c:"sc_llid",m:"Invalid argument in sc_llid"}):e.push("ellid="+encodeURIComponent(y))),b&&e.push("euid="+encodeURIComponent(b)),w&&e.push("fields="+encodeURIComponent(this.serializeList(w))),0<this.exclude.length)try{e.push("ex="+encodeURIComponent(JSON.stringify(this.exclude)))}catch(t){}if(n.tags&&ScarabArrays.forEach(n.tags,function(t){e.push("t="+encodeURIComponent(t))}),n.tagsWithAttributes&&ScarabArrays.forEach(n.tagsWithAttributes,function(t){e.push("ta="+encodeURIComponent(JSON.stringify(t)))}),U&&e.push("fc="+encodeURIComponent(U)),this.orderId&&e.push("oi="+encodeURIComponent(this.orderId)),wt()&&e.push("test=true"),I&&e.push("debug="+I),document.referrer&&e.push("prev_url="+encodeURIComponent(document.referrer)),this.errors){var a="";try{a=JSON.stringify(this.errors)}catch(t){for(var o=[],s=0,c=this.errors.length;s<c;s++)o.push('{"t":"'+this.errors[s].t+'","c":"'+this.errors[s].c+'","m":"'+this.errors[s].m+'"}');a="["+o.join(",")+"]"}e.push("error="+encodeURIComponent(a))}if(m.timingsEnabled&&_&&C.JSON&&C.JSON.parse){var u=C.localStorage.getItem(O);if(u){C.localStorage.removeItem(O);try{u=JSON.parse(u),(new Date).getTime()-u.ts<18e5&&e.push("ti="+encodeURIComponent(u.t))}catch(t){}}}return e.join("&")},checkRequest:function(){return!0},getHost:function(){if(It())return It()+"/merchants/";var t=document.location.protocol;return"file:"===t&&(t="http:"),t+"//recommender.scarabresearch.com/merchants/"},generateUrl:function(){if(!this.checkRequest())return!1;var t=this.serializeContext();return this.getHost()+gt()+"/?"+t},sendRequest:function(){var e=this.generateUrl(),t=this;if(window.JSON&&window.JSON.parse){var r=ScarabUtil.createCORSRequest("GET",e);if(r)return r.onload=function(){t.callback(JSON.parse(r.responseText))},r.onerror=function(t){window.console&&console.error&&console.error("XHR ERROR: Scarab request failed",e,t)},r.withCredentials=!0,void r.send()}ScarabUtil.createJSONPRequest(e,t.callbackName,m.jsonpStem)},findFeature:function(t){if(!this.features||0===this.features.length)return null;for(var e=0,r=this.features.length;e<r;e++)if(this.features[e].f===t)return this.features[e];return null},callback:function(t){if(t.trace&&window.console&&console.log&&console.log("SCARAB SERVER: "+t.trace),t.schema&&t.products)for(var e in t.products){for(var r={},n=0;n<t.schema.length;n++)r[t.schema[n]]=t.products[e][n];t.products[e]=r}t.products&&(j=ScarabUtil.merge(j,t.products));var i=!1;if(t.features)for(var a in t.features)if(t.features.hasOwnProperty(a)){var o=this.findFeature(a);if(o){i=!0;for(var s=t.features[a].items,c=new rt,u=0;u<s.length;u++){var l=ScarabUtil.merge(s[u],j[s[u].id]);l.trackingCode=a,c.addProduct(l)}o.hasMore=t.features[a].hasMore,o.topicLabel=t.features[a].topicLabel,o.cohort=t.cohort,o.merchants=t.features[a].merchants,o.addPage(c)}}if(this.highlightFeatures(),_&&C.performance&&C.performance.getEntriesByType&&C.JSON&&C.JSON.stringify&&2===x&&m.timingsEnabled){A.renderEnd=C.performance.now?C.performance.now():null;var d=ScarabUtil.clientTimings(C,A,this.getHost(),i);if(d)try{C.localStorage.setItem(O,C.JSON.stringify({ts:(new Date).getTime(),t:d}))}catch(t){}}var h=new Date;h.setFullYear(h.getFullYear()+1);var f=t.visitor;f&&(vt(f),it(k,'"'+f+'"',h.toUTCString()));var p=t.profile;p&&(bt(p),it(P,'"'+p+'"',h.toUTCString()))}},ScarabUtil.inspector&&!m.doNotInspect&&(ScarabUtil.inspector.trackObjectFunctions("Transaction",lt.prototype),ScarabUtil.inspector.trackObjectFunctions("EventHandlers",lt.prototype.eventHandlers));var dt=function(t){return T.push(t),t},ht=function(t){return"tx"+(void 0===t?x:t)},ft=function(){return B},pt=function(t){return B=t},mt=function(){return Math.floor(Math.random()*Math.pow(2,31))},gt=function(){if(e)return e;var t=document.getElementById("scarab-js-api");return t&&t.src&&-1!==(e=t.src.substring(t.src.indexOf("/js/")+"/js/".length)).indexOf("/")&&(e=e.substr(0,e.indexOf("/"))),e},vt=function(t){d=t},bt=function(t){f=t},St=function(t){var e=Ut();Pt(e,"setEmail",t,"email","string")&&(t.indexOf("@")<0?e.error({t:"INVALID_ARG",c:"setEmail",m:t+" is not a valid email address"}):yt(ScarabUtil.hashEmail(t)))},yt=function(t){p=t},wt=function(){return n},It=function(){return r},Ut=function(){var t=ht();return t in M?M[t]:null},Ct=function(t){for(var e in M){var r=M[e];for(var n in r.features){var i=r.features[n];i!==t&&i.attachedListeners&&i.containerId===t.containerId&&(i.parent&&i.parent.addEventListener&&i.elistener?(i.parent.removeEventListener("click",i.elistener),i.elistener=null):i.parent&&i.parent.attachEvent&&i.elistener&&(i.parent.detachEvent("click",i.elistener),i.elistener=null))}}},_t=function(){x++,M[ht()]=new lt(x)},At=function(t,e){A.goStart=C.performance&&C.performance.now?C.performance.now():null;var r=ht(),n=M[r],i="cb_"+(m.jsonpStem||"")+r;return Scarab[i]=function(t){M[r].callback(t)},n.callbackName="Scarab."+i,n.go(!t,e),n},kt=function(t){return ScarabUtil.isArray(t)?t[t.length-1]:t};!function(){var t=ScarabUtil.parseQueryString(C);i=t.sc_feature,a=t.sc_cohort,h=kt(t.sc_customer),I=t.sc_debug,v=kt(t.sc_src),p=kt(t.sc_eh),b=kt(t.sc_uid),y=kt(t.sc_llid),S=kt(t.sc_lid);var e=ScarabUtil.getCookie(k);e&&0<e.length&&vt(e);var r=ScarabUtil.getCookie(P);r&&0<r.length&&bt(r)}(),_t();var Pt=function(t,e,r,n,i,a,o){var s=ScarabUtil.isArray(r)?"array":null===r?"null":typeof r;return n=n||"",i="string"==typeof i?[i]:i||[],a="string"==typeof a?[a]:a||[],o&&r&&r.length>o&&t&&t.error({t:"INVALID_ARG",c:e,m:"Invalid argument in "+e+": "+n+" length must be less than "+o}),-1!==ScarabUtil.indexOf(i,s)?"string"===s&&""===ScarabUtil.trim(r)?(t&&t.error({t:"INVALID_ARG",c:e,m:"Invalid argument in "+e+": "+n+" should not be an empty string"}),!1):"number"!==s||!ScarabUtil.isNaN(r)||(t&&t.error({t:"INVALID_ARG",c:e,m:"Invalid argument in "+e+": "+n+" should not be a NaN"}),!1):-1!==ScarabUtil.indexOf(a,s)?(t&&t.error({t:"INVALID_ARG",c:e,m:"Invalid argument in "+e+": "+n+" should be a "+i.join(" or ")+", not a "+s}),!0):("undefined"===s?t&&t.error({t:"MISSING_ARG",c:e,m:"Missing argument in "+e+": "+n}):t&&t.error({t:"INVALID_ARG",c:e,m:"Invalid argument in "+e+": "+n+" should be a "+i.join(" or ")}),!1)},Ot=function(e,r,t,n){var i=ScarabUtil.parseHashString(e),a={};if(void 0!==i[r]){var o=i[r]||"{}";try{a=e.JSON.parse(o),e.sessionStorage&&e.sessionStorage.setItem(r,o)}catch(t){e.console&&e.console.error&&e.console.error("Hash config for",r,"is not a valid JSON: ",t)}}var s=null;e.sessionStorage&&e.sessionStorage.getItem(r)&&(s=e.JSON.parse(e.sessionStorage.getItem(r)));var c={merchantId:gt(),cb:function(){var e;z[e=r]&&ScarabUtil.loadedModules[e]&&ScarabUtil.loadedModules[e].instance&&ScarabArrays.forEach(z[e],function(t){t(ScarabUtil.loadedModules[e].instance)})}};ScarabUtil.loadModule(e,r,ScarabUtil.merge(c,t||{},s||a),n,c.cb)},Et={defaultTemplate:'<![CDATA[ {{ if(SC.page.products.length) { }}<div class="scarab-itemlist"><div class="scarab-prev">◀</div>{{ for(var i=0;i<SC.page.products.length;i++) { }}<span data-scarabitem="{{= SC.page.products[i].id }}" class="scarab-item"><a href="{{= SC.page.products[i].link }}"><img src="{{= SC.page.products[i].image }}">{{= SC.page.products[i].title }}</a></span>{{ } }}<div class="scarab-next">▶</div></div>{{ } }} ]]>',testMode:function(){n=!0},setMerchantId:function(t){e=t},setSessionId:function(t){l=t},setVisitorId:vt,setCustomerId:function(t){var e=Ut();Pt(e,"setCustomerId",t,"customer ID","string")&&("undefined"!==t&&"null"!==t&&"_"!==t?h=t:e.error({t:"INVALID_ARG",c:"setCustomerId",m:t+" is not a valid customer ID"}))},setEmail:St,setEmailHash:yt,email:St,setEmailSign:function(t){g=t},setFields:function(t){w=t},setCohortId:function(t){U=t},availabilityZone:function(t){Ut().setAvailabilityZone(t)},language:function(t){Ut().setLanguage(t)},currency:function(t){Ut().setCurrency(t)},displayCurrency:function(t){Et.currency(t)},setOrderId:function(t){Ut().setOrderId(t)},addKeyword:function(t){Ut().addKeyword(t)},searchTerm:function(t){Ut().addSearchTerm(t)},category:function(t){Ut().addCategory(t)},tag:function(t,e){Ut().addTag(t,e)},pageview:function(t){Ut().pageview(t)},view:function(t,e,r,n,i){var a=Ut();Pt(a,"view",t,"itemId",["string","number"],null,256)&&a.addView(new X({i:t,p:r,q:e,t:n,c:i}))},addToCart:function(t,e,r){Ut().addAddedItem(new X({i:t,p:r,q:e}))},cartItem:function(t,e,r){Ut().addCartItem(new X({i:t,p:r,q:e}))},cart:function(t){var e=Ut();if(Pt(e,"cart",t,"cartItems","array")){for(var r=[],n=0,i=t.length;n<i;n++){if(!Pt(e,"cart",t[n].item,"item",["string","number"],null,256))return;Pt(e,"cart",t[n].price,"price","number","string"),Pt(e,"cart",t[n].quantity,"quantity","number","string"),r.push(new X({i:t[n].item,p:t[n].price,q:t[n].quantity}))}e.setCart(r)}},wishlist:function(t){var e=Ut();if(Pt(e,"wishlist",t,"wishlistItems","array")){for(var r=[],n=0,i=t.length;n<i;n++){if(!Pt(e,"wishlist",t[n].item,"item",["string","number"],null,256))return;var a={i:t[n].item};t[n].price&&(Pt(e,"wishlist",t[n].price,"price","number","string"),a.p=t[n].price),t[n].quantity&&(Pt(e,"wishlist",t[n].quantity,"quantity","number","string"),a.q=t[n].quantity),t[n].feature&&(Pt(e,"wishlist",t[n].feature,"feature","string","number"),a.t=t[n].feature),r.push(new X(a))}e.setWishlist(r)}},checkOut:function(t,e,r){Ut().addCheckoutItem(new X({i:t,p:r,q:e}))},purchase:function(t){var e=Ut();if(Pt(e,"purchase",t,"decriptor","object")&&Pt(e,"purchase",t.items,"items","array")){var r={};for(var n in t)if("orderId"===n)Pt(e,"purchase",t.orderId,"orderId",["string","number"],null,256)&&(r.orderId=t.orderId);else if("items"===n){if(0===t.items.length)return void e.error({t:"MISSING_ARG",c:"purchase",m:"Missing argument in purchase: items is an empty array"});r.items=[];for(var i=0,a=t.items.length;i<a;i++){if(!Pt(e,"purchase",t.items[i].item,"item",["string","number"],null,256)||!Pt(e,"purchase",t.items[i].price,"price","number",["string","undefined","null"])||!Pt(e,"purchase",t.items[i].quantity,"quantity","number",["string","undefined","null"]))return;r.items.push(new X({i:t.items[i].item,p:t.items[i].price,q:t.items[i].quantity}))}}else window.console&&console.warn&&console.warn("unknown property in purchase",n);e.setPurchase(r)}},include:function(t,e,r){Et.exclude(t,e,r,!0)},exclude:function(t,e,r,n){void 0===r&&(r=e,e="is");var i={is:"IS",has:"HAS",in:"IN",overlaps:"OVERLAPS","is not":"IS","has not":"HAS","not in":"IN"};if(void 0===i[e])throw new Error("unknown exclude rule: "+e);-1!==e.indexOf("not")&&(n=!0),"string"!=typeof r&&(r=r.join("|")),n=n||!1,Ut().addExcludeRule({f:t,r:i[e],v:r,n:n})},updateTemplate:function(t,e){var r=Ut().findFeature(t);r&&(r.template=V.template(e))},recommend:function(t,e,r,n,i,a,o){var s=t;if("object"==typeof t&&null!==t){if(s=t.logic,e=t.containerId,r=t.limit,t.templateStr)n=t.templateStr;else if(t.templateId){var c=document.getElementById(t.templateId);if(null===c)throw new ReferenceError("Template element does not exist: "+t.templateId);n=c.innerHTML}else n=Et.defaultTemplate;i=t.baseline,a=t.success,o=t.trigger}var u=Ut();if(Pt(u,"recommend",s,"logic","string")){Pt(u,"recommend",e,"containerId","string");var l=u.findFeature(s);return l||(l=new Y({f:s,o:t.offset||0,l:parseInt(r,10)||5,t:o,containerId:e,template:V.template(n||Et.defaultTemplate),pages:[]}),i&&l.setProducts(i),dt(l),l.successCallback=a),l.requestSent=!1,l.purgePagesCache(),u.registerFeature(l),l}},invokeRendering:function(t,e){e(t)},beforeRenderingAsync:function(t){Et.invokeRendering=t},beforeRendering:function(t){t&&"function"==typeof t&&(L=t)},afterRendering:function(t){t&&"function"==typeof t&&(D=t)},skipRendering:function(){q=!0},itemClick:function(t,e,r){var n=(new Date).getTime();ut(s,new X({i:t,t:e,c:r,ct:n}))},myFeature:function(t,e){if(!document.getElementById(e))throw new ReferenceError('Error in Scarab.myFeature() call: element "'+e+'" does not exist.');var r=Ut(),n=dt(new Y({f:t,containerId:e,attachedListeners:!0,cust:1}));n.attachListeners(),n.setProducts(n.findProducts()),r.registerFeature(n)},go:function(t){At(!1,t)},goAsync:function(t){At(!0,t)},setServerUrl:function(t){r=t},addTransactionListener:function(t){if(t&&"function"==typeof t){R.push(t);for(var e=1;e<x;e++)try{t(M[ht(e)])}catch(t){Ut().error({t:"INVALID_ARG",c:"addTransactionListener",m:"transaction listener threw an exception: "+t})}}},removeTransactionListener:function(t){if(t&&"function"==typeof t){var e=ScarabUtil.indexOf(R,t);-1<e&&R.splice(e,1)}},discovery:function(e){ScarabUtil.loader("discovery",function(t){t.go(e)})},blockDiscovery:function(){Et.__discoveryBlocked=!0,Et.__discoveryModule&&Et.__discoveryModule.block(),ScarabUtil.loadModules.emarsys_discovery&&ScarabUtil.loadModules.emarsys_discovery.instance&&ScarabUtil.loadModules.emarsys_discovery.instance.block()},assistant:function(e){if(!H){H=!0,"object"!=typeof e&&(e={}),(e=ScarabUtil.merge(e,ScarabUtil.modules.assistant.config)).merchantId=gt(),e.serverUrl=It();var t=!e.mobileDisabled||ScarabUtil.hasCookie("sc_assistant"),r=ScarabUtil.isIPhone(C)&&ScarabUtil.isSafari(C),n=ScarabUtil.isChromeForAndroid(C);if((e.forceDiscoDrag&&ScarabUtil.isMobile(C)||e.forceDebugDiscoDrag)&&(r||n||ScarabUtil.hasCookie("sc_assistant")||ScarabUtil.hasCookie("sc_discodrag")))if(e.enableMobileABtest){var i;if(It())i=It()+"/merchants/";else{var a=document.location.protocol;"file:"===a&&(a="http:"),i=a+"//recommender.scarabresearch.com/merchants/"}var o=i+gt();if(window.JSON&&window.JSON.parse){var s=ScarabUtil.createCORSRequest("GET",o);s&&(s.onload=function(){var t=JSON.parse(s.responseText);console.log("Cohort: ",t.cohort),"NEWDISCO"===t.cohort?ScarabUtil.loader("discodrag",function(t){t.go(e)},e):"OLDDISCO"===t.cohort&&ScarabUtil.loader("mobildisco",function(t){t.go(e)},e)},s.onerror=function(){console.error("Cohort error")},s.withCredentials=!0,s.send())}}else ScarabUtil.loader("discodrag",function(t){t.go(e)},e);else e.forceMobile||ScarabUtil.isMobile(C)&&t?ScarabUtil.loader("mobildisco",function(t){t.go(e)},e):ScarabUtil.loader("assistant",function(t){t.go(e),Et.__discoveryModule=t},e)}},instantSearch:function(e){e.merchantId=gt(),e=ScarabUtil.merge(e,ScarabUtil.modules.instantsearch.config),ScarabUtil.loader("instantsearch",function(t){t.go(e)},e)},emarsys_instantsearch:function(t){t.merchantId=gt(),ScarabUtil.loadModule(C,"emarsys_instantsearch",t)},emarsys_webpush:function(t){Ot(C,"emarsys_webpush",t)},webpersonalization:function(t){ScarabUtil.loadedModules.emarsys_webpersonalization||Ot(C,"emarsys_webpersonalization",t,"loader")},noTopDomain:function(){F=!0},developMode:function(){!0},enableCORS:function(){},onModuleAvailable:function(t,e){C.ScarabUtil.loadedModules[t]&&C.ScarabUtil.loadedModules[t].instance?e(C.ScarabUtil.loadedModules[t].instance):(z[t]=z[t]||[],-1!==ScarabArrays.findIndex(z[t],function(t){return t===e})||z[t].push(e))},errorMessage:function(t,e){Ut().error({t:"USER",c:"errorMessage",m:t},e)},emarsys_discovery:function(e){"object"!=typeof e&&(e={}),e.merchantId=gt(),e.serverUrl=It();var t=ScarabUtil.hasCookie("emarsys_discovery");e.forceDiscoDrag=!(!t||e.forceLegacyMobile)||e.forceDiscoDrag;var r=!e.mobileDisabled||t,n=ScarabUtil.isIPhone(C)&&ScarabUtil.isSafari(C),i=ScarabUtil.isChromeForAndroid(C),a="";if((e.forceDiscoDrag&&ScarabUtil.isMobile(C)||e.forceDebugDiscoDrag)&&(n||i||t)){if(e.enableMobileABtest)return void ScarabUtil.getCohort(C,e.serverUrl,e.merchantId,function(t){"NEWDISCO"===t?ScarabUtil.loadModule(C,"emarsys_discovery",e,"mobile"):"OLDDISCO"===t&&ScarabUtil.loadModule(C,"emarsys_discovery",e,"legacyMobile")});a="mobile"}else a=e.forceMobile||ScarabUtil.isMobile(C)&&r?"legacyMobile":"desktop";ScarabUtil.loadModule(C,"emarsys_discovery",e,a)}};return ScarabUtil.inspector&&!m.doNotInspect&&ScarabUtil.inspector.trackObjectFunctions("ScarabModule",Et),Et},_scq=_scq||[],ScarabQueue=ScarabQueue||[],Scarab=Scarab||null;!function(){var r=function(){Scarab=Scarab||ScarabModule(window,{timingsEnabled:!0}),"undefined"!=typeof window&&(window.Scarab=Scarab),_scq=ScarabUtil.playQueue(Scarab,_scq),ScarabQueue=ScarabUtil.playQueue(Scarab,ScarabQueue)};try{var t;if(window.ScarabUtil.hasCookie("emarsys_newloader"))ScarabUtil.checkModules(window,function(t,e){"sc_inspector"===t?ScarabUtil.loadModule(window,"sc_inspector",e,void 0,r):ScarabQueue.push([t,e])}),ScarabUtil.hasCookie("sc_inspector")||r();else ScarabUtil.loadModules({assistant:function(t){setTimeout(function(){ScarabQueue.push(["assistant",t])},100)},mobildisco:function(t){t.forceMobile=!0,ScarabUtil.modules.assistant.config=t,setTimeout(function(){ScarabQueue.push(["assistant",t])},100)},discodrag:function(t){t.forceDiscoDrag=!0,ScarabUtil.modules.assistant.config=t,setTimeout(function(){ScarabQueue.push(["assistant",t])},100)},instantsearch:function(t){setTimeout(function(){ScarabQueue.push(["instantSearch",t])},100)},inspector:function(t){ScarabUtil.loader("inspector",function(){r()},t)}}),window._scdiscovery&&window.ScarabUtil&&(window._scdiscovery.visible||window.ScarabUtil.hasCookie("sc_assistant")||window.ScarabUtil.hasCookie("sc_discodrag"))&&((t=window._scdiscovery.config||{}).disabled=ScarabUtil.makeDisableFunction(window._scdiscovery),ScarabQueue.push(["assistant",t])),window._scinstant&&window.ScarabUtil&&(window._scinstant.visible||window.ScarabUtil.hasCookie("sc_instantsearch"))&&((t=window._scinstant||{}).disabledDefs&&(t.disabled=ScarabUtil.makeDisableFunction(t)),ScarabQueue.push(["instantSearch",t])),window._scwebpersonalization&&window.ScarabUtil&&ScarabQueue.push(["webpersonalization",window._scwebpersonalization]),ScarabUtil.hasCookie("sc_inspector")||r()}catch(t){window.console&&console.error&&console.error("error during scarab initialization: ",t),r()}}();



/*[PATH @digikala/supernova-digikala-desktop/assets/js/wNumb.min.js]*/
!function(e){"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?module.exports=e():window.wNumb=e()}(function(){"use strict";var o=["decimals","thousand","mark","prefix","suffix","encoder","decoder","negativeBefore","negative","edit","undo"];function y(e){return e.split("").reverse().join("")}function g(e,t){return e.substring(0,t.length)===t}function f(e,t,n){if((e[t]||e[n])&&e[t]===e[n])throw new Error(t)}function b(e){return"number"==typeof e&&isFinite(e)}function n(e,t,n,r,i,o,f,u,s,a,c,p){var d,l,h,g,v,m=p,w="",x="";return o&&(p=o(p)),!!b(p)&&(!1!==e&&0===parseFloat(p.toFixed(e))&&(p=0),p<0&&(d=!0,p=Math.abs(p)),!1!==e&&(v=e,g=(g=p).toString().split("e"),p=(+((g=(g=Math.round(+(g[0]+"e"+(g[1]?+g[1]+v:v)))).toString().split("e"))[0]+"e"+(g[1]?+g[1]-v:-v))).toFixed(v)),-1!==(p=p.toString()).indexOf(".")?(h=(l=p.split("."))[0],n&&(w=n+l[1])):h=p,t&&(h=y((h=y(h).match(/.{1,3}/g)).join(y(t)))),d&&u&&(x+=u),r&&(x+=r),d&&s&&(x+=s),x+=h,x+=w,i&&(x+=i),a&&(x=a(x,m)),x)}function r(e,t,n,r,i,o,f,u,s,a,c,p){var d,l,h="";return c&&(p=c(p)),!(!p||"string"!=typeof p)&&(u&&g(p,u)&&(p=p.replace(u,""),d=!0),r&&g(p,r)&&(p=p.replace(r,"")),s&&g(p,s)&&(p=p.replace(s,""),d=!0),i&&(l=i,p.slice(-1*l.length)===l)&&(p=p.slice(0,-1*i.length)),t&&(p=p.split(t).join("")),n&&(p=p.replace(n,".")),d&&(h+="-"),""!==(h=(h+=p).replace(/[^0-9\.\-.]/g,""))&&(h=Number(h),f&&(h=f(h)),!!b(h)&&h))}function i(e,t,n){var r,i=[];for(r=0;r<o.length;r+=1)i.push(e[o[r]]);return i.push(n),t.apply("",i)}return function e(t){if(!(this instanceof e))return new e(t);"object"==typeof t&&(t=function(e){var t,n,r,i={};for(void 0===e.suffix&&(e.suffix=e.postfix),t=0;t<o.length;t+=1)if(void 0===(r=e[n=o[t]]))"negative"!==n||i.negativeBefore?"mark"===n&&"."!==i.thousand?i[n]=".":i[n]=!1:i[n]="-";else if("decimals"===n){if(!(0<=r&&r<8))throw new Error(n);i[n]=r}else if("encoder"===n||"decoder"===n||"edit"===n||"undo"===n){if("function"!=typeof r)throw new Error(n);i[n]=r}else{if("string"!=typeof r)throw new Error(n);i[n]=r}return f(i,"mark","thousand"),f(i,"prefix","negative"),f(i,"prefix","negativeBefore"),i}(t),this.to=function(e){return i(t,n,e)},this.from=function(e){return i(t,r,e)})}});



/*[PATH @digikala/supernova-digikala-desktop/assets/js/jquery.countdown.min.js]*/
!function(l){l.fn.countdown=function(e){var g=31557600,T=2629800,p=604800,x=86400,y=3600,w=/%y|%m|%w|%d|%h|%i|%s|%ty|%tm|%tw|%td|%th|%ti|%ts/g,r=/\d/g,v=function(e,a){var t=e.toString().match(r),n="";return l.each(t,function(e,t){t=Number(t),n+=""+a.digits[t]||""+t}),n},j=function(e){var t=new Date,a=e.data("jcdData");return a?(null!==a.offset&&(t=n(a.offset)),t.setMilliseconds(0),t):new Date},n=function(e){var t,a,n,r=new Date;return null!==e&&(t=36e5*e,n=r.getTime()- -r.getTimezoneOffset()/60*36e5+t,a=r.setTime(n)),new Date(a)},i=function(e,t){t.onStart&&e.on("start.jcdevt",t.onStart),t.onChange&&e.on("change.jcdevt",t.onChange),t.onComplete&&e.on("complete.jcdevt",t.onComplete),t.onPause&&e.on("pause.jcdevt",t.onPause),t.onResume&&e.on("resume.jcdevt",t.onResume),t.onLocaleChange&&e.on("locale.jcdevt",t.onLocaleChange)},L=function(e){var t=e.template,a=e.yearsLeft,n=e.monthsLeft,r=e.weeksLeft,o=e.daysLeft,i=e.hrsLeft,s=e.minsLeft,l=e.secLeft,d=!1,u=!1,c=!1,m=!1,h=!1,f=!1;return e.isRTL&&(t=e.rtlTemplate),e.omitZero&&(e.yearsAndMonths&&(e.yearsLeft||(d=!0),e.monthsLeft||(u=!0)),e.weeks&&(e.yearsAndMonths&&u&&!e.weeksLeft||!e.yearsAndMonths&&!e.weeksLeft)&&(c=!0),c&&!o&&(m=!0),m&&!i&&(h=!0),h&&!s&&(f=!0)),e.leadingZero&&(a<10&&(a="0"+a),n<10&&(n="0"+n),r<10&&(r="0"+r),o<10&&(o="0"+o),i<10&&(i="0"+i),s<10&&(s="0"+s),l<10&&(l="0"+l)),a=v(a,e),n=v(n,e),r=v(r,e),o=v(o,e),i=v(i,e),s=v(s,e),l=v(l,e),e.yearsAndMonths&&(e.omitZero&&d||(t=(t=t.replace("%y",a)).replace("%ty",1==a&&e.yearSingularText?e.yearSingularText:e.yearText)),(!e.omitZero||!d&&n||!d&&!u)&&(t=(t=t.replace("%m",n)).replace("%tm",1==n&&e.monthSingularText?e.monthSingularText:e.monthText))),e.weeks&&!c&&(t=(t=t.replace("%w",r)).replace("%tw",1==r&&e.weekSingularText?e.weekSingularText:e.weekText)),m||(t=(t=t.replace("%d",o)).replace("%td",1==o&&e.daySingularText?e.daySingularText:e.dayText)),h||(t=(t=t.replace("%h",i)).replace("%th",1==i&&e.hourSingularText?e.hourSingularText:e.hourText)),f||(t=(t=t.replace("%i",s)).replace("%ti",1==s&&e.minSingularText?e.minSingularText:e.minText)),t=(t=(t=t.replace("%s",l)).replace("%ts",1==l&&e.secSingularText?e.secSingularText:e.secText)).replace(w,"")},s=function(){var e,t,a,n,r,o,i,s,l=this,d=0,u=0,c=0,m="",h=function(e){var t;return t=Math.floor(s/e),s-=t*e,t},f=l.data("jcdData");if(!f)return!1;e=j(l),(t=null!==f.serverDiff?new Date(f.serverDiff+f.clientdateNow.getTime()):f.dateObj).setMilliseconds(0),a="down"===f.direction?t.getTime()-e.getTime():e.getTime()-t.getTime(),s=Math.round(a/1e3),n=h(x),r=h(y),o=h(60),i=h(1),f.yearsAndMonths&&(s+=n*x,d=h(g),u=h(T),n=h(x)),f.weeks&&(s+=n*x,c=h(p),n=h(x)),(f.hoursOnly||f.minsOnly||f.secsOnly)&&(f.yearsAndMonths&&(s+=d*g,s+=u*T,d=u=0),f.weeks&&(s+=c*p,c=0)),f.hoursOnly&&(s+=n*x,s+=r*y,r=h(y)),f.minsOnly&&(s+=n*x,s+=r*y,r=n=0,s+=60*o,o=h(60)),f.secsOnly&&(s+=n*x,s+=r*y,s+=60*o,o=r=n=0,s+=i,i=h(1)),f.yearsLeft=d,f.monthsLeft=u,f.weeksLeft=c,f.daysLeft=n,f.hrsLeft=r,f.minsLeft=o,f.secLeft=i,l.data("jcdData",f),"down"===f.direction&&(e<t||f.minus)||"up"===f.direction&&(t<e||f.minus)?m=L(f):(f.yearsLeft=f.monthsLeft=f.weeksLeft=f.daysLeft=f.hrsLeft=f.minsLeft=f.secLeft=0,m=L(f),f.hasCompleted=!0),l.html(m).triggerMulti("change.jcdevt,countChange",[f]),f.hasCompleted&&(l.triggerMulti("complete.jcdevt,countComplete"),clearInterval(f.timer))},t={init:function(a){var n,r=l.extend({},l.fn.countdown.defaults,a),o={};return this.each(function(){var e,t=l(this);if(t.data("jcdData")&&(t.countdown("changeSettings",a,!0),r=t.data("jcdData")),null===r.date&&null===r.dataAttr)return l.error("No Date passed to jCountdown. date option is required."),!0;n=r.date?r.date:t.attr("data-"+r.dataAttr),"Invalid Date"===new Date(n).toString()&&l.error("Invalid Date passed to jCountdown: "+n),i(t,a),(o=l.extend({},r)).dom={},o.dom.$time=l("<"+o.timeWrapElement+">").addClass(o.timeWrapClass),o.dom.$text=l("<"+o.textWrapElement+">").addClass(o.textWrapClass),o.clientdateNow=new Date,o.clientdateNow.setMilliseconds(0),o.originalHTML=t.html(),o.dateObj=new Date(n),o.dateObj.setMilliseconds(0),o.hasCompleted=!1,o.timer=0,o.yearsLeft=o.monthsLeft=o.weeksLeft=o.daysLeft=o.hrsLeft=o.minsLeft=o.secLeft=0,o.difference=null,e=l.proxy(s,t),o.timer=setInterval(e,o.updateTime),t.data("jcdData",o).triggerMulti("start.jcdevt,countStart",[o]),e()})},changeSettings:function(n,r){return this.each(function(){var e,t=l(this),a=l.proxy(s,t);if(!t.data("jcdData"))return!0;e=l.extend({},t.data("jcdData"),n),n.hasOwnProperty("date")&&"Invalid Date"===new Date(n.date).toString()&&l.error("Invalid Date passed to jCountdown: "+n.date),e.completed=!1,e.dateObj=new Date(n.date),clearInterval(e.timer),t.off(".jcdevt").data("jcdData",e),r||(i(t,e),e.timer=setInterval(a,e.updateTime),t.data("jcdData",e),a()),e=null})},resume:function(){return this.each(function(){var e=l(this),t=e.data("jcdData"),a=l.proxy(s,e);if(!t)return!0;if(e.data("jcdData",t).triggerMulti("resume.jcdevt,countResume",[t]),!t.hasCompleted){if(t.timer=setInterval(a,t.updateTime),t.stopwatch&&"up"===t.direction){var n=j(e).getTime()-t.pausedAt.getTime(),r=new Date;r.setTime(t.dateObj.getTime()+n),t.dateObj=r}a()}})},pause:function(){return this.each(function(){var e=l(this),t=e.data("jcdData");if(!t)return!0;t.stopwatch&&(t.pausedAt=j(e)),clearInterval(t.timer),e.data("jcdData",t).triggerMulti("pause.jcdevt,countPause",[t])})},complete:function(){return this.each(function(){var e=l(this),t=e.data("jcdData");if(!t)return!0;clearInterval(t.timer),t.hasCompleted=!0,e.data("jcdData",t).triggerMulti("complete.jcdevt,countComplete",[t])})},destroy:function(){return this.each(function(){var e=l(this),t=e.data("jcdData");if(!t)return!0;clearInterval(t.timer),e.off(".jcdevt").removeData("jcdData").html(t.originalHTML)})},getSettings:function(e){var t=l(this).data("jcdData");return e&&t?t.hasOwnProperty(e)?t[e]:void 0:t},changeLocale:function(e){var t=l(this),a=t.data("jcdData");return l.fn.countdown.locale[e]?(l.extend(a,l.fn.countdown.locale[e]),t.data("jcdData",a).triggerMulti("locale.jcdevt,localeChange",[a]),!0):(l.error("Locale '"+e+"' does not exist"),!1)}};return t[e]?t[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void l.error("Method "+e+" does not exist in the jCountdown Plugin"):t.init.apply(this,arguments)},l.fn.countdown.defaults={date:null,dataAttr:null,updateTime:1e3,yearText:"years",monthText:"months",weekText:"weeks",dayText:"days",hourText:"hours",minText:"mins",secText:"sec",yearSingularText:"year",monthSingularText:"month",weekSingularText:"week",daySingularText:"day",hourSingularText:"hour",minSingularText:"min",secSingularText:"sec",digits:[0,1,2,3,4,5,6,7,8,9],isRTL:!1,minus:!1,onStart:null,onChange:null,onComplete:null,onResume:null,onPause:null,onLocaleChange:null,leadingZero:!1,offset:null,serverDiff:null,hoursOnly:!1,minsOnly:!1,secsOnly:!1,weeks:!1,hours:!1,yearsAndMonths:!1,direction:"down",stopwatch:!1,omitZero:!1,rtlTemplate:"%ts %s : %ti %i : %th %h : %tm %m : %ty %y",template:"%y %ty : %m %tm : %h %th : %i %ti : %s %ts"},l.fn.countdown.locale=[],l.fn.countdown.locale.en={yearText:"years",monthText:"months",weekText:"weeks",dayText:"days",hourText:"hours",minText:"mins",secText:"sec",yearSingularText:"year",monthSingularText:"month",weekSingularText:"week",daySingularText:"day",hourSingularText:"hour",minSingularText:"min",secSingularText:"sec",isRTL:!1},l.fn.triggerMulti=function(e,a){var n=e.split(",");return this.each(function(){for(var e=l(this),t=0;t<n.length;t++)e.trigger(n[t],a)})}}(jQuery),$.fn.countdown.locale.ar={yearText:"سال",monthText:"ماه",weekText:"هفته",dayText:"روز",hourText:"ساعت",digits:["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"],minText:"دقیقه",secText:"ثانیه",isRTL:!0},$.extend($.fn.countdown.defaults,$.fn.countdown.locale.ar);



/*[PATH @digikala/supernova-digikala-desktop/assets/js/jquery.animate.min.js]*/
$.fn.extend({animateCss:function(n,i){return this.addClass("animated "+n).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(this).removeClass("animated "+n),i&&i()}),this}});



/*[PATH @digikala/supernova-digikala-desktop/assets/js/jquery.selectric.min.js]*/
!function(s){"function"==typeof define&&define.amd?define(["jquery"],s):"object"==typeof module&&module.exports?module.exports=function(e,t){return void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),s(t),t}:s(jQuery)}(function(c){"use strict";var t=c(document),r=c(window),p="selectric",s=".sl",l=["a","e","i","o","u","n","c","y"],i=[/[\xE0-\xE5]/g,/[\xE8-\xEB]/g,/[\xEC-\xEF]/g,/[\xF2-\xF6]/g,/[\xF9-\xFC]/g,/[\xF1]/g,/[\xE7]/g,/[\xFD-\xFF]/g],n=function(e,t){var s=this;s.element=e,s.$element=c(e),s.state={multiple:!!s.$element.attr("multiple"),enabled:!1,opened:!1,currValue:-1,selectedIdx:-1,highlightedIdx:-1},s.eventTriggers={open:s.open,close:s.close,destroy:s.destroy,refresh:s.refresh,init:s.init},s.init(t)};n.prototype={utils:{isMobile:function(){return/android|ip(hone|od|ad)/i.test(navigator.userAgent)},escapeRegExp:function(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")},replaceDiacritics:function(e){for(var t=i.length;t--;)e=e.toLowerCase().replace(i[t],l[t]);return e},format:function(e){var l=arguments;return(""+e).replace(/\{(?:(\d+)|(\w+))\}/g,function(e,t,s){return s&&l[1]?l[1][s]:l[t]})},nextEnabledItem:function(e,t){for(;e[t=(t+1)%e.length].hidden;);return t},previousEnabledItem:function(e,t){for(;e[t=(0<t?t:e.length)-1].hidden;);return t},toDash:function(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()},triggerCallback:function(e,t){var s=t.element,l=t.options["on"+e],i=[s].concat([].slice.call(arguments).slice(1));c.isFunction(l)&&l.apply(s,i),c(s).trigger(p+"-"+this.toDash(e),i)},arrayToClassname:function(e){var t=c.grep(e,function(e){return!!e});return c.trim(t.join(" "))}},init:function(e){var t=this;if(t.options=c.extend(!0,{},c.fn[p].defaults,t.options,e),t.utils.triggerCallback("BeforeInit",t),t.destroy(!0),t.options.disableOnMobile&&t.utils.isMobile())t.disableOnMobile=!0;else{t.classes=t.getClassNames();var s=c("<input/>",{class:t.options.hasSearch?"dk-selectric-input":"u-hidden",readonly:t.utils.isMobile()}),l=c("<div/>",{class:t.classes.items,tabindex:-1}),i=c("<div/>",{class:t.classes.scroll}),n=c("<div/>",{class:t.classes.prefix,html:t.options.arrowButtonMarkup}),a=c("<span/>",{class:"label"}),o=t.$element.wrap("<div/>").parent().append(n.prepend(a),l,s),r=c("<div/>",{class:t.classes.hideselect});t.elements={input:s,items:l,itemsScroll:i,wrapper:n,label:a,outerWrapper:o},t.options.nativeOnMobile&&t.utils.isMobile()&&(t.elements.input=void 0,r.addClass(t.classes.prefix+"-is-native"),t.$element.on("change",function(){t.refresh()})),t.$element.on(t.eventTriggers).wrap(r),t.originalTabindex=t.$element.prop("tabindex"),t.$element.prop("tabindex",-1),t.populate(),t.activate(),t.utils.triggerCallback("Init",t)}},activate:function(){var e=this,t=e.elements.items.closest(":visible").children(":hidden").addClass(e.classes.tempshow),s=e.$element.width();t.removeClass(e.classes.tempshow),e.utils.triggerCallback("BeforeActivate",e),e.elements.outerWrapper.prop("class",e.utils.arrayToClassname([e.classes.wrapper,e.$element.prop("class").replace(/\S+/g,e.classes.prefix+"-$&"),e.options.responsive?e.classes.responsive:""])),e.options.inheritOriginalWidth&&0<s&&e.elements.outerWrapper.width(s),e.unbindEvents(),e.$element.prop("disabled")?(e.elements.outerWrapper.addClass(e.classes.disabled),e.elements.input&&e.elements.input.prop("disabled",!0)):(e.state.enabled=!0,e.elements.outerWrapper.removeClass(e.classes.disabled),e.$li=e.elements.items.removeAttr("style").find("li"),e.bindEvents()),e.utils.triggerCallback("Activate",e)},getClassNames:function(){var l=this,i=l.options.customClass,n={};return c.each("Input Items Open Disabled TempShow HideSelect Wrapper Focus Hover Responsive Above Below Scroll Group GroupLabel".split(" "),function(e,t){var s=i.prefix+t;n[t.toLowerCase()]=i.camelCase?s:l.utils.toDash(s)}),n.prefix=i.prefix,n},setLabel:function(){var s=this,t=s.options.labelBuilder;if(s.state.multiple){var e=c.isArray(s.state.currValue)?s.state.currValue:[s.state.currValue];e=0===e.length?[0]:e;var l=c.map(e,function(t){return c.grep(s.lookupItems,function(e){return e.index===t})[0]});l=c.grep(l,function(e){return 1<l.length||0===l.length?""!==c.trim(e.value):e}),l=c.map(l,function(e){return c.isFunction(t)?t(e):s.utils.format(t,e)}),s.options.multiple.maxLabelEntries&&(l.length>=s.options.multiple.maxLabelEntries+1?(l=l.slice(0,s.options.multiple.maxLabelEntries)).push(c.isFunction(t)?t({text:"..."}):s.utils.format(t,{text:"..."})):l.slice(l.length-1)),s.elements.label.html(l.join(s.options.multiple.separator))}else{var i=s.lookupItems[s.state.currValue];i.element.hasClass("placeholder")?s.elements.label.addClass("placeholder"):s.elements.label.removeClass("placeholder"),s.elements.label.html(c.isFunction(t)?t(i):s.utils.format(t,i))}},populate:function(){var l=this,e=l.$element.children(),t=l.$element.find("option"),s=t.filter(":selected"),i=t.index(s),n=0,a=l.state.multiple?[]:0;1<s.length&&l.state.multiple&&(i=[],s.each(function(){i.push(c(this).index())})),l.state.currValue=~i?i:a,l.state.selectedIdx=l.state.currValue,l.state.highlightedIdx=l.state.currValue,l.items=[],l.lookupItems=[],e.length&&(e.each(function(e){var t=c(this);if(t.is("optgroup")){var s={element:t,label:t.prop("label"),groupDisabled:t.prop("disabled"),items:[]};t.children().each(function(e){var t=c(this);s.items[e]=l.getItemData(n,t,s.groupDisabled||t.prop("disabled")),l.lookupItems[n]=s.items[e],n++}),l.items[e]=s}else l.items[e]=l.getItemData(n,t,t.prop("disabled")),l.lookupItems[n]=l.items[e],n++}),l.setLabel(),l.options.hasSearch&&l.elements.items.append(l.elements.input).addClass("selectric-has-search"),l.elements.items.append(l.elements.itemsScroll.html(l.getItemsMarkup(l.items))))},getItemData:function(e,t,s){return{index:e,element:t,value:t.val(),className:t.prop("class"),text:t.html(),slug:c.trim(this.utils.replaceDiacritics(t.html())),alt:t.attr("data-alt"),selected:t.prop("selected"),disabled:s}},getItemsMarkup:function(e){var s=this,l="<ul>";return c.isFunction(s.options.listBuilder)&&s.options.listBuilder&&(e=s.options.listBuilder(e)),c.each(e,function(e,t){void 0!==t.label?(l+=s.utils.format('<ul class="{1}"><li class="{2}">{3}</li>',s.utils.arrayToClassname([s.classes.group,t.groupDisabled?"disabled":"",t.element.prop("class")]),s.classes.grouplabel,t.element.prop("label")),c.each(t.items,function(e,t){l+=s.getItemMarkup(t.index,t)}),l+="</ul>"):l+=s.getItemMarkup(t.index,t)}),l+"</ul>"},getItemMarkup:function(e,t){var s=this,l=s.options.optionsItemBuilder,i={value:t.value,text:t.text,slug:t.slug,index:t.index};return s.utils.format('<li data-index="{1}" class="{2}">{3}</li>',e,s.utils.arrayToClassname([t.className,e===s.items.length-1?"last":"",t.disabled?"disabled":"",t.selected?"selected":""]),c.isFunction(l)?s.utils.format(l(t,this.$element,e),t):s.utils.format(l,i))},unbindEvents:function(){var e=this;e.elements.input&&e.elements.input.off(),e.elements.wrapper.add(e.$element).add(e.elements.outerWrapper).off(s)},bindEvents:function(){var l=this;l.elements.outerWrapper.on("mouseenter.sl mouseleave"+s,function(e){c(this).toggleClass(l.classes.hover,"mouseenter"===e.type),l.options.openOnHover&&(clearTimeout(l.closeTimer),"mouseleave"===e.type?l.closeTimer=setTimeout(c.proxy(l.close,l),l.options.hoverIntentTimeout):l.open())}),l.elements.wrapper.on("click"+s,function(e){l.state.opened?l.close():l.open(e)}),l.options.nativeOnMobile&&l.utils.isMobile()||(l.$element.on("focus"+s,function(){l.elements.input.focus()}),l.elements.input.prop({tabindex:l.originalTabindex,disabled:!1}).on("click"+s,function(e){e.stopPropagation()}).on("keydown"+s,c.proxy(l.handleKeys,l)).on("focusin"+s,function(e){l.elements.outerWrapper.addClass(l.classes.focus),l.elements.input.one("blur",function(){l.elements.input.blur()}),l.options.openOnFocus&&!l.state.opened&&l.open(e)}).on("focusout"+s,function(){l.elements.outerWrapper.removeClass(l.classes.focus),l.$li.removeClass("u-hidden"),l.elements.itemsScroll.scrollTop(0),l.highlight(0)}).on("input propertychange change",function(){var s=l.elements.input.val()||"";0<s.length?c.each(l.items,function(e,t){t.disabled||(0!==t.slug.indexOf(s.trim())?(l.$li.filter("[data-index="+t.index+"]").addClass("u-hidden"),t.hidden=!0):(l.$li.filter("[data-index="+t.index+"]").removeClass("u-hidden"),t.hidden=!1,l.highlight(t.index)))}):(l.$li.removeClass("u-hidden"),l.elements.itemsScroll.scrollTop(0))})),l.$li.on({mousedown:function(e){e.preventDefault(),e.stopPropagation()},click:function(){return l.select(c(this).data("index")),!1}})},handleKeys:function(e){var t=this,s=e.which,l=t.options.keys,i=-1<c.inArray(s,l.previous),n=-1<c.inArray(s,l.next),a=-1<c.inArray(s,l.select),o=-1<c.inArray(s,l.open),r=t.state.highlightedIdx,p=i&&0===r||n&&r+1===t.items.length,u=0;if(13===s&&e.preventDefault(),i||n){if(!t.options.allowWrap&&p)return;i&&(u=t.utils.previousEnabledItem(t.lookupItems,r),e.preventDefault()),n&&(u=t.utils.nextEnabledItem(t.lookupItems,r),e.preventDefault()),t.highlight(u)}if(a&&t.state.opened)return t.select(r),void(t.state.multiple&&t.options.multiple.keepMenuOpen||t.close());o&&!t.state.opened&&t.open()},refresh:function(){this.populate(),this.activate(),this.utils.triggerCallback("Refresh",this)},setOptionsDimensions:function(){var e=this,t=e.elements.items.closest(":visible").children(":hidden").addClass(e.classes.tempshow),s=e.options.maxHeight,l=e.elements.items.outerWidth(),i=e.elements.wrapper.outerWidth()-(l-e.elements.items.width());!e.options.expandToItemText||l<i?e.finalWidth=i:(e.elements.items.css("overflow","scroll"),e.elements.outerWrapper.width(9e4),e.finalWidth=e.elements.items.width(),e.elements.items.css("overflow",""),e.elements.outerWrapper.width("")),e.elements.items.width(e.finalWidth).height()>s&&e.elements.items.height(s),t.removeClass(e.classes.tempshow)},isInViewport:function(){var e=this;if(!0===e.options.forceRenderAbove)e.elements.outerWrapper.addClass(e.classes.above);else if(!0===e.options.forceRenderBelow)e.elements.outerWrapper.addClass(e.classes.below);else{var t=r.scrollTop(),s=r.height(),l=e.elements.outerWrapper.offset().top,i=l+e.elements.outerWrapper.outerHeight()+e.itemsHeight<=t+s,n=l-e.itemsHeight>t,a=!i&&n,o=!a;e.elements.outerWrapper.toggleClass(e.classes.above,a),e.elements.outerWrapper.toggleClass(e.classes.below,o)}},detectItemVisibility:function(e){var t=this,s=t.$li.filter("[data-index]");t.state.multiple&&(e=c.isArray(e)&&0===e.length?0:e,e=c.isArray(e)?Math.min.apply(Math,e):e);var l=s.eq(e).outerHeight(),i=s[e].offsetTop,n=t.elements.itemsScroll.scrollTop(),a=i+2*l;t.elements.itemsScroll.scrollTop(a>n+t.itemsHeight?a-t.itemsHeight:i-l<n?i-l:n)},open:function(e){var i=this;if(i.options.nativeOnMobile&&i.utils.isMobile())return!1;i.utils.triggerCallback("BeforeOpen",i),e&&(e.preventDefault(),i.options.stopPropagation&&e.stopPropagation()),i.state.enabled&&(i.setOptionsDimensions(),c("."+i.classes.hideselect,"."+i.classes.open).children()[p]("close"),i.state.opened=!0,i.itemsHeight=i.elements.items.outerHeight(),i.itemsInnerHeight=i.elements.items.height(),i.elements.outerWrapper.addClass(i.classes.open),i.elements.input.val(""),e&&"focusin"!==e.type&&i.elements.input.focus(),setTimeout(function(){t.on("click"+s,c.proxy(i.close,i)).on("scroll"+s,c.proxy(i.isInViewport,i))},1),i.isInViewport(),i.options.preventWindowScroll&&t.on("mousewheel.sl DOMMouseScroll"+s,"."+i.classes.scroll,function(e){var t=e.originalEvent,s=c(this).scrollTop(),l=0;"detail"in t&&(l=-1*t.detail),"wheelDelta"in t&&(l=t.wheelDelta),"wheelDeltaY"in t&&(l=t.wheelDeltaY),"deltaY"in t&&(l=-1*t.deltaY),(s===this.scrollHeight-i.itemsInnerHeight&&l<0||0===s&&0<l)&&e.preventDefault()}),i.detectItemVisibility(i.state.selectedIdx),i.highlight(i.state.multiple?-1:i.state.selectedIdx),i.utils.triggerCallback("Open",i))},close:function(){var e=this;e.utils.triggerCallback("BeforeClose",e),t.off(s),e.elements.outerWrapper.removeClass(e.classes.open),e.state.opened=!1,e.utils.triggerCallback("Close",e)},change:function(){var s=this;s.utils.triggerCallback("BeforeChange",s),s.state.multiple?(c.each(s.lookupItems,function(e){s.lookupItems[e].selected=!1,s.$element.find("option").prop("selected",!1)}),c.each(s.state.selectedIdx,function(e,t){s.lookupItems[t].selected=!0,s.$element.find("option").eq(t).prop("selected",!0)}),s.state.currValue=s.state.selectedIdx,s.setLabel(),s.utils.triggerCallback("Change",s)):s.state.currValue!==s.state.selectedIdx&&(s.$element.prop("selectedIndex",s.state.currValue=s.state.selectedIdx).data("value",s.lookupItems[s.state.selectedIdx].text),s.setLabel(),s.utils.triggerCallback("Change",s))},highlight:function(e){var t=this,s=t.$li.filter("[data-index]").removeClass("highlighted");t.utils.triggerCallback("BeforeHighlight",t),void 0===e||-1===e||t.lookupItems[e].disabled||(s.eq(t.state.highlightedIdx=e).addClass("highlighted"),t.detectItemVisibility(e),t.utils.triggerCallback("Highlight",t))},select:function(e){var t=this,s=t.$li.filter("[data-index]");if(t.utils.triggerCallback("BeforeSelect",t,e),void 0!==e&&-1!==e&&!t.lookupItems[e].disabled){if(t.state.multiple){t.state.selectedIdx=c.isArray(t.state.selectedIdx)?t.state.selectedIdx:[t.state.selectedIdx];var l=c.inArray(e,t.state.selectedIdx);-1!==l?t.state.selectedIdx.splice(l,1):t.state.selectedIdx.push(e),s.removeClass("selected").filter(function(e){return-1!==c.inArray(e,t.state.selectedIdx)}).addClass("selected")}else s.removeClass("selected").eq(t.state.selectedIdx=e).addClass("selected");t.state.multiple&&t.options.multiple.keepMenuOpen||t.close(),t.change(),t.close(),t.utils.triggerCallback("Select",t,e)}},destroy:function(e){var t=this;t.state&&t.state.enabled&&(t.elements.items.add(t.elements.wrapper).add(t.elements.input).remove(),e||t.$element.removeData(p).removeData("value"),t.$element.prop("tabindex",t.originalTabindex).off(s).off(t.eventTriggers).unwrap().unwrap(),t.state.enabled=!1)}},c.fn[p]=function(t){return this.each(function(){var e=c.data(this,p);e&&!e.disableOnMobile?"string"==typeof t&&e[t]?e[t]():e.init(t):c.data(this,p,new n(this,t))})},c.fn[p].defaults={onChange:function(e){c(e).change()},maxHeight:300,keySearchTimeout:500,arrowButtonMarkup:'<b class="button">&#x25be;</b>',disableOnMobile:!1,nativeOnMobile:!0,openOnFocus:!0,openOnHover:!1,hoverIntentTimeout:500,expandToItemText:!1,responsive:!1,preventWindowScroll:!0,inheritOriginalWidth:!1,allowWrap:!0,forceRenderAbove:!1,forceRenderBelow:!1,stopPropagation:!0,optionsItemBuilder:"{text}",labelBuilder:"{text}",listBuilder:!1,hasSearch:!1,keys:{previous:[38],next:[40],select:[9,13,27],open:[13,32,37,38,39,40],close:[9,27]},customClass:{prefix:p,camelCase:!1},multiple:{separator:", ",keepMenuOpen:!0,maxLabelEntries:!1}}});



/*[PATH @digikala/supernova-digikala-desktop/assets/js/jquery.remodal.min.js]*/
!function(n,e){"function"==typeof define&&define.amd?define(["jquery"],function(t){return e(n,t)}):"object"==typeof exports?e(n,require("jquery")):e(n,n.jQuery||n.Zepto)}(this,function(t,s){"use strict";var n,a,e,o="remodal",i=t.REMODAL_GLOBALS&&t.REMODAL_GLOBALS.NAMESPACE||o,r=s.map(["animationstart","webkitAnimationStart","MSAnimationStart","oAnimationStart"],function(t){return t+"."+i}).join(" "),d=s.map(["animationend","webkitAnimationEnd","MSAnimationEnd","oAnimationEnd"],function(t){return t+"."+i}).join(" "),c=s.extend({hashTracking:!1,closeOnConfirm:!0,closeOnCancel:!0,closeOnEscape:!0,closeOnOutsideClick:!0,modifier:"",appendTo:null},t.REMODAL_GLOBALS&&t.REMODAL_GLOBALS.DEFAULTS),l={CLOSING:"closing",CLOSED:"closed",OPENING:"opening",OPENED:"opened"},p="confirmation",m="cancellation",u=void 0!==(n=document.createElement("div").style).animationName||void 0!==n.WebkitAnimationName||void 0!==n.MozAnimationName||void 0!==n.msAnimationName||void 0!==n.OAnimationName,f=/iPad|iPhone|iPod/.test(navigator.platform);function g(t){if(u&&"none"===t.css("animation-name")&&"none"===t.css("-webkit-animation-name")&&"none"===t.css("-moz-animation-name")&&"none"===t.css("-o-animation-name")&&"none"===t.css("-ms-animation-name"))return 0;var n,e,a,i,o=t.css("animation-duration")||t.css("-webkit-animation-duration")||t.css("-moz-animation-duration")||t.css("-o-animation-duration")||t.css("-ms-animation-duration")||"0s",s=t.css("animation-delay")||t.css("-webkit-animation-delay")||t.css("-moz-animation-delay")||t.css("-o-animation-delay")||t.css("-ms-animation-delay")||"0s",r=t.css("animation-iteration-count")||t.css("-webkit-animation-iteration-count")||t.css("-moz-animation-iteration-count")||t.css("-o-animation-iteration-count")||t.css("-ms-animation-iteration-count")||"1";for(o=o.split(", "),s=s.split(", "),r=r.split(", "),i=0,e=o.length,n=Number.NEGATIVE_INFINITY;i<e;i++)n<(a=parseFloat(o[i])*parseInt(r[i],10)+parseFloat(s[i]))&&(n=a);return n}function h(){if(s(document).height()<=s(window).height())return 0;var t,n,e=document.createElement("div"),a=document.createElement("div");return e.style.visibility="hidden",e.style.width="100px",document.body.appendChild(e),t=e.offsetWidth,e.style.overflow="scroll",a.style.width="100%",e.appendChild(a),n=a.offsetWidth,e.parentNode.removeChild(e),t-n}function v(){if(!f){var t,n,e=s("html"),a=O("is-locked");e.hasClass(a)&&(n=s(document.body),t=parseInt(n.css("padding-right"),10)-h(),n.css("padding-right",t+"px"),e.removeClass(a))}}function $(t,n,e,a){var i=O("is",n),o=[O("is",l.CLOSING),O("is",l.OPENING),O("is",l.CLOSED),O("is",l.OPENED)].join(" ");t.$bg.removeClass(o).addClass(i),t.$overlay.removeClass(o).addClass(i),t.$wrapper.removeClass(o).addClass(i),t.$modal.removeClass(o).addClass(i),t.state=n,!e&&t.$modal.trigger({type:n,reason:a},[{reason:a}])}function C(t,n,e){var a=0,i=function(t){t.target===this&&a++},o=function(t){t.target===this&&0==--a&&(s.each(["$bg","$overlay","$wrapper","$modal"],function(t,n){e[n].off(r+" "+d)}),n())};s.each(["$bg","$overlay","$wrapper","$modal"],function(t,n){e[n].on(r,i).on(d,o)}),t(),0===g(e.$bg)&&0===g(e.$overlay)&&0===g(e.$wrapper)&&0===g(e.$modal)&&(s.each(["$bg","$overlay","$wrapper","$modal"],function(t,n){e[n].off(r+" "+d)}),n())}function y(e){e.state!==l.CLOSED&&(s.each(["$bg","$overlay","$wrapper","$modal"],function(t,n){e[n].off(r+" "+d)}),e.$bg.removeClass(e.settings.modifier),e.$overlay.removeClass(e.settings.modifier).hide(),e.$wrapper.hide(),v(),$(e,l.CLOSED,!0))}function O(){for(var t=i,n=0;n<arguments.length;++n)t+="-"+arguments[n];return t}function E(){var t,n,e=location.hash.replace("#","");if(e){try{n=s("[data-"+o+'-id="'+e+'"]')}catch(t){}n&&n.length&&(t=s[o].lookup[n.data(o)])&&t.settings.hashTracking&&t.open()}else a&&a.state===l.OPENED&&a.settings.hashTracking&&a.close()}function w(t,n){var e=s(document.body),a=this;a.settings=s.extend({},c,n),a.index=s[o].lookup.push(a)-1,a.state=l.CLOSED,a.$overlay=s("."+O("overlay")),null!==a.settings.appendTo&&a.settings.appendTo.length&&(e=s(a.settings.appendTo)),a.$overlay.length||(a.$overlay=s("<div>").addClass(O("overlay")+" "+O("is",l.CLOSED)).hide(),e.append(a.$overlay)),a.$bg=s("."+O("bg")).addClass(O("is",l.CLOSED)),a.$modal=t.addClass(i+" "+O("is-initialized")+" "+a.settings.modifier+" "+O("is",l.CLOSED)).attr("tabindex","-1"),a.$wrapper=s("<div>").addClass(O("wrapper")+" "+a.settings.modifier+" "+O("is",l.CLOSED)).hide().append(a.$modal),e.append(a.$wrapper),a.$wrapper.on("click."+i,"[data-"+o+'-action="close"]',function(t){t.preventDefault(),a.close()}),a.$wrapper.on("click."+i,"[data-"+o+'-action="cancel"]',function(t){t.preventDefault(),a.$modal.trigger(m),a.settings.closeOnCancel&&a.close(m)}),a.$wrapper.on("click."+i,"[data-"+o+'-action="confirm"]',function(t){t.preventDefault(),a.$modal.trigger(p),a.settings.closeOnConfirm&&a.close(p)}),a.$wrapper.on("click."+i,function(t){s(t.target).hasClass(O("wrapper"))&&a.settings.closeOnOutsideClick&&a.close()})}w.prototype.open=function(){var t,n=this;n.state!==l.OPENING&&n.state!==l.CLOSING&&((t=n.$modal.attr("data-"+o+"-id"))&&n.settings.hashTracking&&(e=s(window).scrollTop(),location.hash=t),a&&a!==n&&y(a),a=n,function(){if(!f){var t,n,e=s("html"),a=O("is-locked");e.hasClass(a)||(n=s(document.body),t=parseInt(n.css("padding-right"),10)+h(),n.css("padding-right",t+"px"),e.addClass(a))}}(),n.$bg.addClass(n.settings.modifier),n.$overlay.addClass(n.settings.modifier).show(),n.$wrapper.show().scrollTop(0),n.$modal.focus(),C(function(){$(n,l.OPENING)},function(){$(n,l.OPENED)},n))},w.prototype.close=function(t){var n=this;n.state!==l.OPENING&&n.state!==l.CLOSING&&n.state!==l.CLOSED&&(n.settings.hashTracking&&n.$modal.attr("data-"+o+"-id")===location.hash.substr(1)&&(location.hash="",s(window).scrollTop(e)),C(function(){$(n,l.CLOSING,!1,t)},function(){n.$bg.removeClass(n.settings.modifier),n.$overlay.removeClass(n.settings.modifier).hide(),n.$wrapper.hide(),v(),$(n,l.CLOSED,!1,t)},n))},w.prototype.getState=function(){return this.state},w.prototype.destroy=function(){var t=s[o].lookup;y(this),this.$wrapper.remove(),delete t[this.index],0===s.grep(t,function(t){return!!t}).length&&(this.$overlay.remove(),this.$bg.removeClass(O("is",l.CLOSING)+" "+O("is",l.OPENING)+" "+O("is",l.CLOSED)+" "+O("is",l.OPENED)))},s[o]={lookup:[]},s.fn[o]=function(e){var a,i;return this.each(function(t,n){null==(i=s(n)).data(o)?(a=new w(i,e),i.data(o,a.index),a.settings.hashTracking&&i.attr("data-"+o+"-id")===location.hash.substr(1)&&a.open()):a=s[o].lookup[i.data(o)]}),a},s(document).ready(function(){s(document).on("click","[data-"+o+"-target]",function(t){t.preventDefault();var n=t.currentTarget.getAttribute("data-"+o+"-target"),e=s("[data-"+o+'-id="'+n+'"]');s[o].lookup[e.data(o)].open()}),s(document).find("."+i).each(function(t,n){var e=s(n),a=e.data(o+"-options");a?("string"==typeof a||a instanceof String)&&(a=function(t){var n,e,a,i,o={};for(i=0,e=(n=(t=t.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,",")).split(",")).length;i<e;i++)n[i]=n[i].split(":"),("string"==typeof(a=n[i][1])||a instanceof String)&&(a="true"===a||"false"!==a&&a),("string"==typeof a||a instanceof String)&&(a=isNaN(a)?a:+a),o[n[i][0]]=a;return o}(a)):a={},e[o](a)}),s(document).on("keydown."+i,function(t){a&&a.settings.closeOnEscape&&a.state===l.OPENED&&27===t.keyCode&&a.close()}),s(window).on("hashchange."+i,E)})});



/*[PATH @digikala/supernova-digikala-desktop/assets/js/jquery.menu-aim.min.js]*/
!function(b,t,i,s){var n="menuAim",o={triggerEvent:"hover",rowSelector:"> li",handle:"> a",submenuSelector:"*",submenuDirection:"right",openClassName:"open",tolerance:75,activationDelay:300,mouseLocsTracked:3,defaultDelay:300,enterCallback:b.noop,activateCallback:b.noop,deactivateCallback:b.noop,exitCallback:b.noop,exitMenuCallback:b.noop};function a(t,i){this.el=t,this.options=b.extend({},o,i),this._defaults=o,this._name=n,this.init()}a.prototype={init:function(){this.activeRow=null,this.mouseLocs=[],this.lastDelayLoc=null,this.timeoutId=null,this.openDelayId=null,this.isOnClick=-1<b.inArray(this.options.triggerEvent,["both","click"]),this.isOnHover=-1<b.inArray(this.options.triggerEvent,["both","hover"]),this.isOnHover&&this._hoverTriggerOn(),this.isOnClick&&this._clickTriggerOn()},_mouseMoveDocument:function(t){obj=t.data.obj,obj.mouseLocs.push({x:t.pageX,y:t.pageY}),obj.mouseLocs.length>obj.options.mouseLocsTracked&&obj.mouseLocs.shift()},_mouseLeaveMenu:function(t){obj=t.data.obj,obj.timeoutId&&clearTimeout(obj.timeoutId),obj.openDelayId&&clearTimeout(obj.openDelayId),obj._possiblyDeactivate(obj.activeRow),obj.options.exitMenuCallback(this)},_mouseEnterRow:function(t){obj=t.data.obj,obj.timeoutId&&clearTimeout(obj.timeoutId),obj.options.enterCallback(this),obj._possiblyActivate(this)},_mouseLeaveRow:function(t){t.data.obj.options.exitCallback(this)},_clickRow:function(t){obj=t.data.obj,obj._activate(this),b(obj.el).find(obj.options.rowSelector).find(obj.options.handle).on("click",{obj:obj},obj._clickRowHandle)},_clickRowHandle:function(t){obj=t.data.obj,b(this).closest("li").hasClass(obj.options.openClassName)&&(obj._deactivate(),t.stopPropagation())},_activate:function(t){var i=this;t!=this.activeRow&&(this.openDelayId&&clearTimeout(this.openDelayId),0<parseInt(i.options.activationDelay,0)&&i.isOnHover?i.activeRow?i._activateWithoutDelay(t):this.openDelayId=setTimeout(function(){i._activateWithoutDelay(t)},i.options.activationDelay):i._activateWithoutDelay(t))},_activateWithoutDelay:function(t){this.activeRow&&this.options.deactivateCallback(this.activeRow),this.options.activateCallback(t),this.activeRow=t},_deactivate:function(){this.openDelayId&&clearTimeout(this.openDelayId),this.activeRow&&(this.options.deactivateCallback(this.activeRow),this.activeRow=null)},_possiblyActivate:function(t){var i=this._activationDelay(),o=this;i?this.timeoutId=setTimeout(function(){o._possiblyActivate(t)},i):this._activate(t)},_possiblyDeactivate:function(t){var i=this._activationDelay(),o=this;i?this.timeoutId=setTimeout(function(){o._possiblyDeactivate(t)},i):(this.options.deactivateCallback(t),this.activeRow=null)},_activationDelay:function(){if(!this.activeRow||!b(this.activeRow).is(this.options.submenuSelector))return 0;var t=b(this.el).offset(),i={x:t.left,y:t.top-this.options.tolerance},o={x:t.left+b(this.el).outerWidth(),y:i.y},e={x:t.left,y:t.top+b(this.el).outerHeight()+this.options.tolerance},s={x:t.left+b(this.el).outerWidth(),y:e.y},n=this.mouseLocs[this.mouseLocs.length-1],a=this.mouseLocs[0];if(!n)return 0;if(a||(a=n),a.x<t.left||a.x>s.x||a.y<t.top||a.y>s.y)return 0;if(this.lastDelayLoc&&n.x==this.lastDelayLoc.x&&n.y==this.lastDelayLoc.y)return 0;function c(t,i){return(i.y-t.y)/(i.x-t.x)}var l=o,h=s;"left"==this.options.submenuDirection?(l=e,h=i):"below"==this.options.submenuDirection?(l=s,h=e):"above"==this.options.submenuDirection&&(l=i,h=o);var u=c(n,l),r=c(n,h),v=c(a,l),f=c(a,h);return u<v&&f<r?(this.lastDelayLoc=n,this.options.defaultDelay):(this.lastDelayLoc=null,0)},_outsideMenuClick:function(t){var i=t.data.obj;b(i.el).not(t.target)&&0===b(i.el).has(t.target).length&&(i.options.deactivateCallback(i.activeRow),i.activeRow=null)},_hoverTriggerOn:function(){b(this.el).on("mouseleave",{obj:this},this._mouseLeaveMenu).find(this.options.rowSelector).on("mouseenter",{obj:this},this._mouseEnterRow).on("mouseleave",{obj:this},this._mouseLeaveRow),b(t).on("blur",{obj:this},this._mouseLeaveMenu),b(i).on("mousemove",{obj:this},this._mouseMoveDocument)},_hoverTriggerOff:function(){b(this.el).off("mouseleave",this._mouseLeaveMenu).find(this.options.rowSelector).off("mouseenter",this._mouseEnterRow).off("mouseleave",this._mouseLeaveRow),b(t).off("blur",this._mouseLeaveMenu),b(i).off("mousemove",{obj:this},this._mouseMoveDocument)},_clickTriggerOn:function(){b(this.el).find(this.options.rowSelector).on("click",{obj:this},this._clickRow),b(i).on("click",{obj:this},this._outsideMenuClick)},_clickTriggerOff:function(){b(this.el).find(this.options.rowSelector).off("click",this._clickRow),b(i).off("click",this._outsideMenuClick)},switchToHover:function(){this._clickTriggerOff(),this._hoverTriggerOn(),this.isOnHover=!0,this.isOnClick=!1},switchToClick:function(){this._hoverTriggerOff(),this._clickTriggerOn(),this.isOnHover=!1,this.isOnClick=!0}},b.fn[n]=function(i){var o,e=arguments;return i===s||"object"==typeof i?this.each(function(){b.data(this,"plugin_"+n)||b.data(this,"plugin_"+n,new a(this,i))}):"string"==typeof i&&"_"!==i[0]&&"init"!==i?(this.each(function(){var t=b.data(this,"plugin_"+n);t instanceof a&&"function"==typeof t[i]&&(o=t[i].apply(t,Array.prototype.slice.call(e,1))),"destroy"===i&&b.data(this,"plugin_"+n,null)}),o!==s?o:this):void 0}}(jQuery,window,document);



/*[PATH @digikala/supernova-digikala-desktop/assets/js/enquire.min.js]*/
/*!
 * enquire.js v2.1.6 - Awesome Media Queries in JavaScript
 * Copyright (c) 2017 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT */

!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.enquire=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){function d(a,b){this.query=a,this.isUnconditional=b,this.handlers=[],this.mql=window.matchMedia(a);var c=this;this.listener=function(a){c.mql=a.currentTarget||a,c.assess()},this.mql.addListener(this.listener)}var e=a(3),f=a(4).each;d.prototype={constuctor:d,addHandler:function(a){var b=new e(a);this.handlers.push(b),this.matches()&&b.on()},removeHandler:function(a){var b=this.handlers;f(b,function(c,d){if(c.equals(a))return c.destroy(),!b.splice(d,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){f(this.handlers,function(a){a.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var a=this.matches()?"on":"off";f(this.handlers,function(b){b[a]()})}},b.exports=d},{3:3,4:4}],2:[function(a,b,c){function d(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}var e=a(1),f=a(4),g=f.each,h=f.isFunction,i=f.isArray;d.prototype={constructor:d,register:function(a,b,c){var d=this.queries,f=c&&this.browserIsIncapable;return d[a]||(d[a]=new e(a,f)),h(b)&&(b={match:b}),i(b)||(b=[b]),g(b,function(b){h(b)&&(b={match:b}),d[a].addHandler(b)}),this},unregister:function(a,b){var c=this.queries[a];return c&&(b?c.removeHandler(b):(c.clear(),delete this.queries[a])),this}},b.exports=d},{1:1,4:4}],3:[function(a,b,c){function d(a){this.options=a,!a.deferSetup&&this.setup()}d.prototype={constructor:d,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(a){return this.options===a||this.options.match===a}},b.exports=d},{}],4:[function(a,b,c){function d(a,b){var c=0,d=a.length;for(c;c<d&&b(a[c],c)!==!1;c++);}function e(a){return"[object Array]"===Object.prototype.toString.apply(a)}function f(a){return"function"==typeof a}b.exports={isFunction:f,isArray:e,each:d}},{}],5:[function(a,b,c){var d=a(2);b.exports=new d},{2:2}]},{},[5])(5)});


/*[PATH @digikala/supernova/assets/local/package/framework.js]*/
function __(variable) {
    return variable;
}

function __digits(variable) {
    return variable;
}

var Framework = {
    xhrPool: [],
    xhrPoolSame: [],
    localStorageBinds: [],

    ajaxGETRequestHTML: function (url, params, callbackStatusTrue, loggedOnly, showLoader, duplicateMode, duplicateUrl, async) {
        this.ajaxRequest('GET', url, params, callbackStatusTrue, null, loggedOnly, showLoader, duplicateMode, duplicateUrl, 'HTML', async);
    },

    ajaxPOSTRequestHTML: function (url, params, callbackStatusTrue, loggedOnly, showLoader, duplicateMode, duplicateUrl, async) {
        this.ajaxRequest('POST', url, params, callbackStatusTrue, null, loggedOnly, showLoader, duplicateMode, duplicateUrl, 'HTML', async);
    },

    ajaxGETRequestJSON: function (url, params, callbackStatusTrue, callbackStatusFalse, loggedOnly, showLoader, duplicateMode, duplicateUrl, async) {
        this.ajaxRequest('GET', url, params, callbackStatusTrue, callbackStatusFalse, loggedOnly, showLoader, duplicateMode, duplicateUrl, 'JSON', async);
    },

    ajaxPOSTRequestJSON: function (url, params, callbackStatusTrue, callbackStatusFalse, loggedOnly, showLoader, duplicateMode, duplicateUrl, async) {
        this.ajaxRequest('POST', url, params, callbackStatusTrue, callbackStatusFalse, loggedOnly, showLoader, duplicateMode, duplicateUrl, 'JSON', async);
    },

    ajaxRequest: function (method, url, params, callbackStatusTrue, callbackStatusFalse, loggedOnly, showLoader, duplicateMode, duplicateUrl, responseType, async) {
        var thiz = this;
        if (method === 'undefined' || (method !== 'POST' && method !== 'GET') || url === 'undefined') {
            return;
        }

        if (loggedOnly !== 'undefined' && loggedOnly === true && !thiz.checkUserLogged()) {
            return;
        }

        //none, stop, execute
        duplicateMode = duplicateMode || 'none';
        duplicateUrl = duplicateUrl || url;
        async = typeof async !== 'undefined' ? async : true;
        $.ajax({
            duplicateMode: duplicateMode,
            duplicateUrl: duplicateUrl,
            type: method,
            url: url,
            data: params,
            async: async,
            beforeSend: function (jqXHR, settings) {
                thiz.ajaxBeforeSendCallback(jqXHR, settings);
                thiz.ajaxBeforeSendCallbackFramework(jqXHR, settings);
                if (showLoader) {
                    thiz.showLoader();
                }
            },
            success: function (response) {
                if (showLoader) {
                    thiz.hideLoader();
                }

                if (responseType === 'HTML') {
                    if (response.length === 0) {
                        console.log(response, 'Please use AjaxHTMLResponse response!');
                        return;
                    }

                    callbackStatusTrue(response);
                    return;
                }

                if (response.status === 'undefined' && response.data === 'undefined') {
                    console.log(response, 'Please use AjaxJsonResponse response!');
                    return;
                }
                if (response.status === true) {
                    if (typeof callbackStatusTrue !== 'undefined' && callbackStatusTrue !== null) {
                        callbackStatusTrue(response.data);
                    } else {
                        console.log('Please define default true callback');
                    }
                } else if (response.status === false) {
                    if (typeof callbackStatusFalse !== 'undefined' && callbackStatusFalse !== null) {
                        callbackStatusFalse(response.data);
                    } else {
                        thiz.ajaxCallbackStatusFalse(response.data);
                    }
                } else {
                    console.log('Please use AjaxJsonResponse response!');
                }


            },
            error: function (jqXHR) {
                if (showLoader) {
                    thiz.hideLoader();
                }

                switch (jqXHR.status) {
                    case 0:
                        break;
                    case 401:
                        thiz.ajaxError401Response(jqXHR);
                        break;
                    case 403:
                    case 404:
                    case 422:
                    case 500:
                        thiz.ajaxErrorDefaultResponse(jqXHR);
                        break;
                    case 503:
                        thiz.ajaxError503Response(jqXHR);
                        break;
                    default:
                        thiz.ajaxErrorDefaultResponse(jqXHR);
                        break;
                }

            },
            complete: function () {
                if (showLoader) {
                    thiz.hideLoader();
                }
            }
        });
    },
    checkUserLogged: function () {
        return true;
    },
    ajaxError401Response: function (jqXHR) {

    },
    ajaxError503Response: function (jqXHR) {
        alert('We are deploying new version of the platform. Please try again in a minutes');
    },
    ajaxErrorDefaultResponse: function (jqXHR) {
        console.log('Please define default error callback. Code #' + jqXHR.status);
        alert('Error!');
    },
    ajaxBeforeSendCallback: function (jqXHR, settings) {

    },
    ajaxBeforeSendCallbackFramework: function (jqXHR, settings) {
        var thiz = this;
        if (settings.duplicateMode === 'execute') {
            jqXHR.url = settings.duplicateUrl || settings.url;
            $.each(thiz.xhrPool, function (k, v) {
                if (v.url === jqXHR.url) {
                    v.abort();
                }
            });
            thiz.xhrPool = $.grep(thiz.xhrPool, function (v) {
                return (v.url === jqXHR.url) || (v.readyState === 4);
            }, true);
            thiz.xhrPool.push(jqXHR);
        } else if (settings.duplicateMode === 'stop') {
            jqXHR.url = settings.duplicateUrl || settings.url;
            thiz.xhrPoolSame = $.grep(thiz.xhrPool, function (v) {
                return v.url === jqXHR.url && v.readyState !== 4;
            });
            if (thiz.xhrPoolSame.length) {
                jqXHR.abort();
            } else {
                thiz.xhrPool.push(jqXHR);
            }
        }
    },
    ajaxCallbackStatusFalse: function (data) {

    },
    showLoader: function () {
        if ($('[data-remodal-id="loader"]').length) {
            $('[data-remodal-id="loader"]').remodal().open();
        }
    },
    hideLoader: function () {
        setTimeout(function () {
            if ($('[data-remodal-id="loader"]').length) {
                $('[data-remodal-id="loader"]').remodal().close();
            }
        }, 500);
    },
    initLazyLocalStorage: function () {
        var thiz = this;
        var $divs = $('div.sn-local-storage');

        function clearCached(md5, code) {
            localStorage.removeItem(code + '_' + md5);
            localStorage.removeItem(code + '_' + md5 + '_expire');
        }

        function saveCache(md5, data, code) {
            localStorage.setItem(code + '_' + md5, data);
        }

        function clearTrashCaches(code, currentMd5) {
            var keys = Object.keys(localStorage);
            for (var i = 0; i < keys.length; ++i) {
                var item = keys[i];
                if ((new RegExp(code + '.*', 'g').test(item) || new RegExp(code + '_.*_expire$').test(item))
                    && item.replace('_expire', '').replace(code + '_', '') !== currentMd5)
                    localStorage.removeItem(item);
            }
        }

        $divs.each(function () {
            var $this = $(this);
            var md5 = $this.data('md5');
            var path = $this.data('path');
            var code = $this.data('code');
            var content = localStorage.getItem(code + '_' + md5);
            var contentExpire = localStorage.getItem(code + '_' + md5 + '_expire'),
                contentExpireTime = new Date(parseInt(contentExpire) || contentExpire) || null;
            clearTrashCaches(code, md5);
            if (!content || !contentExpireTime || new Date() > contentExpireTime) {
                $this.parent().load('/local/storage/' + md5 + '/' + path + '/', function (data, status) {
                    if (status === 'success') {
                        saveCache(md5, data, code);
                        if (thiz.localStorageBinds[code] !== undefined) {
                            thiz.localStorageBinds[code]();
                        }
                    } else {
                        clearCached(md5, code);
                        window.location.reload(true);
                    }
                });
            } else {
                $this.parent().html(content);
                if (thiz.localStorageBinds[code] !== undefined) {
                    thiz.localStorageBinds[code]();
                }
            }
        });
    },
    registerLazyLocalStorageBinder: function (code, func) {
        this.localStorageBinds[code] = func;
    },

    getUrlSearchParams: function () {
        return new URLSearchParams(window.location.search);
    },
    isModuleActive: function(moduleName) {
        return !!window['module_' + moduleName];
    },
    initGlobalModuleChecker: function() {
        window.isModuleActive = Framework.isModuleActive
    }
};


$(function () {
    Framework.initLazyLocalStorage();
    Framework.initGlobalModuleChecker();
});


/*[PATH @digikala/supernova/assets/local/package/sntracker.js]*/
var SnTracker = {
    storage: {
        data: {},
        save: function () {
            var storage = SnTracker.storage;
            if (localStorage)
                try {
                    localStorage.setItem('snevents', JSON.stringify(storage.data));
                } catch (e) {
                }
            return storage;
        },
        clear: function (list) {
            var storage = SnTracker.storage;
            if (list)
                if (!storage.data.hasOwnProperty(list)) return;
                else storage.data[list] = [];
            else
                storage.data = {};
            storage.save();

            return storage;
        },
        set: function (name, value) {
            var storage = SnTracker.storage;
            storage.data[name] = value;
            storage.save();

            return storage;
        },
        add: function (list, object) {
            var storage = SnTracker.storage;
            if (!storage.get(list)) storage.data[list] = [];
            storage.data[list].push(object);
            storage.save();

            return storage;
        },
        get: function (name) {
            var storage = SnTracker.storage;
            if (!storage.data.hasOwnProperty(name) || !storage.data[name]) return null;
            return storage.data[name];
        }
    },
    init: function () {
        var fns = [
            this.initStorage,
            this.globalDefine,
            this.sendEvents,
            this.initTimer,
            this.initDOMAttributeListeners
        ], self = this;
        for (var i = 0; i < fns.length; ++i)
            try {
                fns[i].bind(self)();
            } catch (e) {
                console.warn('Tracker', e);
            }
    },
    initStorage: function () {
        this.storage.data = localStorage ? JSON.parse(localStorage.getItem('snevents')) || {} : {};
    },
    globalDefine: function () {
        window.tracker = window.tracker || this;
        window.snt = window.snt || this.sendEvent.bind(this);

    },
    createEventObject: function (eventName, eventParams) {
        var globalParams = !!window.snTrackerGlobals ? window.snTrackerGlobals || {} : {};
        return {
            name: eventName,
            params: Object.assign(globalParams, eventParams || {}) || {},
            time: new Date().getTime() + new Date().getTimezoneOffset() * 60000,
            url: window.location.href
        }
    },
    sendEvent: function (eventName, eventParams, immediate) {
        if (!eventName) return;
        if (window.location.href.indexOf('/landings/') >= 0) return;
        var event = this.createEventObject(eventName, eventParams);
        if (immediate) return this.storage.add('events', event) && this.sendEvents([event]);
        this.storage.add('events', event);
    },
    sendEvents: function (events) {
        var self = this;
        events = events || this.storage.get('events');
        if (!events || !events.length) return;
        $.ajax(
            {
                url: '/tracker/events/',
                type: 'POST',
                data: {
                    events: events,
                    version: 1
                },
                success: function () {
                    self.storage.clear('events');
                },
                error: function () {
                    console.warn('Tracker Send Failed');
                }
            }
        )
    },
    initTimer: function () {
        var self = this;
        setInterval(function () {
            if (!self.storage.get('events') || !self.storage.get('events').length) return;
            self.sendEvents();
        }, 5000);
    },
    initDOMAttributeListeners: function () {
        $(document).on('click', '[data-snt-event][data-snt-trigger="click"], [data-snt-event]:not([data-snt-trigger])', function () {
            snt($(this).data('snt-event'), $(this).data('snt-params'));
        });
        // var impressionComponents = $('[data-snt-event][data-snt-impression]');
        // var $w = $(window);
        // $w.scroll(function () {
        //     (function ($w) {
        //         var inview = impressionComponents.filter(function () {
        //             var $e = $(this);
        //             if ($e.is(":hidden")) return;
        //             var wt = $w.scrollTop(),
        //                 wb = wt + $w.height(),
        //                 et = $e.offset().top,
        //                 eb = et + $e.height();
        //             return eb >= wt - 5 && et <= wb + 5;
        //         });
        //         inview.each(function () {
        //             snt($(this).data('snt-event'), $(this).data('snt-params'));
        //         });
        //         impressionComponents = impressionComponents.not(inview);
        //     }).bind(this, $w)();
        // }).scroll();
    }
};

$(function () {
    SnTracker.init();
});



/*[PATH @digikala/supernova-digikala-desktop/assets/local/js/user.js]*/
UserClass = function()  {
    var $addressFormInited = false;
    this.loggedUserMetaData = null;

    this.getLoggedUserMetaData = function () {
        if (this.loggedUserMetaData !== null) {
            return this.loggedUserMetaData;
        }
        let $metaData = $('#ESILogged');

        if (!$metaData.length) {
            return null;
        }

        this.loggedUserMetaData = $metaData;

        return this.loggedUserMetaData;
    };

    this.checkLogged = function () {
        let $loggedUserMetaData = this.getLoggedUserMetaData();

        if ($loggedUserMetaData === null) {
            return false;
        }

        return $loggedUserMetaData.data('logged') === 1;
    };

    this.getEmail = function () {
        let $loggedUserMetaData = this.getLoggedUserMetaData();

        if ($loggedUserMetaData === null) {
            return false;
        }

        return $loggedUserMetaData.data('email');
    };

    this.getMobilePhone = function () {
        let $loggedUserMetaData = this.getLoggedUserMetaData();

        if ($loggedUserMetaData === null) {
            return '';
        }

        return $loggedUserMetaData.data('mobile_phone');
    };

    this.getLoginPhone = function () {
        let $loggedUserMetaData = this.getLoggedUserMetaData();

        if ($loggedUserMetaData === null) {
            return '';
        }

        return $loggedUserMetaData.data('login_phone');
    };

    this.getDefaultPhone = function () {
        let $loggedUserMetaData = this.getLoggedUserMetaData();

        if ($loggedUserMetaData === null) {
            return '';
        }

        return $loggedUserMetaData.data('default_phone');
    };

    this.displayLoginForm = function (msg) {
        $('#login-form-msg').hide();

        var modal = $('[data-remodal-id=login]').remodal();
        $('#loginFormModal').validate().resetForm();
        $('#loginFormError').hide();
        modal.open();

        $(document).on('opened', '[data-remodal-id=login]', function () {
            if(msg !== undefined && msg.length > 0){
                $('#login-form-msg').text(msg);
                $('#login-form-msg').show();
            }
        });

        $(document).on('closed', '[data-remodal-id=login]', function () {
            $('#login-form-msg').hide();
        });
    };

    this.ObservedForm = {
        display : function () {
            var modal = $('[data-remodal-id=observed]').remodal();
            modal.open();
            return this;
        },
        clean : function () {
            $('.js-observe-modal-errors').addClass('u-hidden-visually');
            $('.js-observe-modal-errors .js-form-error-items').empty();
            return this;
        },
        addError : function (errorMsg) {
            let $errorItems = $('.js-observe-modal-errors');
            $errorItems.removeClass('u-hidden-visually');
            $errorItems.find('.js-form-error-items').append('<p>' + __(errorMsg) + '</p>');
            return this;
        }
    };

    this.displayAddressForm = function ($addressId) {
        if (!this.isLogged()) {
            return;
        }

        if (!$addressFormInited) {

            var $form = $('#addressForm');

            if (!$form.length) {
                return;
            }

            //TODO move to user class or make it smarter
            $('#manage-address').on('beforeshow', function(){
                    $form.validate().resetForm();
                }
            );

            $('#lbSave').click(function(){
                if (!$form.valid()) {
                    return false;
                }

                $.ajax({
                    type: 'POST',
                    url: '/profile/address/save',
                    success: function(response) {
                        if (response.status == 'error') {
                            $.each(response.errors, function( key, value ) {
                                $('#' + key).html(value);
                            });
                        }
                    },
                    data: $form.serialize()
                });
            });

            $form.find('input').first().focus();

            $form.validate({
                rules : {
                    'address[full_name]' : {
                        required : true,
                        maxlength : 10
                    },
                    'address[mobile_phone]' : {
                        required : true,
                        digits: true,
                        minlength : 11,
                        maxlength : 11,
                        mobile_phone : true
                    },
                    'address[phone_code]' : {
                        required : true,
                        digits: true,
                        minlength : 4,
                        maxlength : 4
                    },
                    'address[phone]' : {
                        required : true,
                        digits: true,
                        minlength : 8,
                        maxlength : 11
                    },
                    'address[address]' : {
                        required : true,
                        minlength: 4,
                        maxlength : 350
                    },
                    'address[post_code]' : {
                        required : true,
                        digits: true,
                        minlength: 4,
                        maxlength : 10
                    }
                },
                messages : {
                    'address[full_name]' : {
                        'required' : 'نام و نام خانوادگی تکمیل نشده است',
                        'maxlength' : 'نام و نام خانوادگی طولانی است'
                    },
                    'address[mobile_phone]' : {
                        'required' : 'شماره موبایل وارد نشده است',
                        'digits' : 'شماره موبایل را درست وارد نمایید',
                        'minlength' : 'شماره موبایل را کامل وارد نمایید',
                        'maxlength' : 'شماره موبایل را درست وارد نمایید',
                        'mobile_phone' : 'شماره موبایل نامعتبر است'
                    },
                    'address[phone_code]' : {
                        'required' : 'کد تلفن را وارد نمایید',
                        'digits' : 'کد را درست وارد نمایید',
                        'minlength' : 'کد تلفن را کامل وارد نمایید',
                        'maxlength' : 'کد تلفن را درست وارد نمایید'
                    },
                    'address[phone]' : {
                        'required' : 'شماره تلفن را وارد نمایید',
                        'digits' : 'شماره تلفن را درست وارد نمایید',
                        'minlength' : 'شماره تلفن را درست وارد نمایید',
                        'maxlength' : 'شماره تلفن را درست وارد نمایید'
                    },
                    'address[address]' : {
                        'required' : 'آدرس را وارد نمایید',
                        'minlength' : 'آدرس وارد شده کوتاه است',
                        'maxlength' : 'لطفا آدرس را کوتاه‌تر وارد نمایید'
                    }
                }
            });

            $addressFormInited = true;
        }

        if ($addressId) {
            $.ajax({
                type: 'POST',
                url: '/profile/address/get',
                success: function(response) {
                    //prefill
                },
                data: {
                    "address[id]": $addressId
                }
            });
        }

        let $modal = $('#manage-address');

        if ($modal.length) {
            UIkit.modal($modal).show();
        }
    };
};

UserClass.prototype.isLogged = function() {
    return this.checkLogged();
};
UserClass.prototype.getEmail = function() {
    return this.getEmail();
};
UserClass.prototype.getDefaultPhone = function () {
    return this.getDefaultPhone();
};
UserClass.prototype.getMobilePhone = function () {
    return this.getMobilePhone();
};
UserClass.prototype.getLoginPhone = function () {
    return this.getLoginPhone();
};
UserClass.prototype.showLoginForm = function(msg) {
    return this.displayLoginForm(msg);
};
UserClass.prototype.showObservedForm = function() {
    return this.ObservedForm.clean().display();
};
UserClass.prototype.showAddressForm = function() {
    return this.displayAddressForm();
};


/*[PATH @digikala/supernova-digikala-desktop/assets/local/js/services.js]*/
var Services =  $.extend(Framework, {
    ajaxError401Response: function () {
        this.user = new UserClass();
        this.getUser().showLoginForm();
    },

    checkUserLogged : function () {
        var $userClass = new UserClass();
        if (!$userClass.isLogged()) {
            $userClass.showLoginForm();
            return false;
        }

        return true;
    },

    /**
     * convert En number to Fa number
     *
     * @method convertToFaDigit
     * @return {String}
     */
    convertToFaDigit: function (a) {
        var b = '' + a;
        for (var c = 48; c <= 57; c++) {
            var d = String.fromCharCode(c);
            var e = String.fromCharCode(c + 1728);
            b = b.replace(new RegExp(d.toString(), "g"), e.toString())
        }
        return b;
    },

    /**
     * Seprate numbers
     *
     * @method AutoSeparateValue
     * @return {String}
     */
    autoSeparateValue: function (a) {
        var b, c, d, g;
        var e, f;
        b = a;
        b = b.replace(/,/g, "");
        if (b != "") c = b.charAt(0);
        if (c != "-") c = "";
        else b = b.replace(/-/g, "");
        if (b.indexOf(".") == -1) {
            if (b.length > 3) {
                d = "";
                while (b.length > 3) {
                    g = b.substr(0, b.length - 3);
                    var h = b.substr(b.length - 3);
                    var i = "," + h;
                    d = i + d;
                    b = b.substr(0, b.length - 3)
                }
                d = c + g + d
            } else d = c + b
        } else {
            e = b.substring(0, b.indexOf("."));
            f = b.substring(b.indexOf("."));
            if (e.length > 3) {
                d = "";
                while (e.length > 3) {
                    g = e.substr(0, e.length - 3);
                    h = e.substr(e.length - 3);
                    i = "," + h;
                    d = i + d;
                    e = e.substr(0, e.length - 3)
                }
                if (f != ".00") {
                    d = c + g + d + f
                } else d = c + g + d
            } else if (f != ".00") {
                d = c + e + f
            } else d = c + e
        }
        return d
    },

    /**
     * Format Currency
     *
     * @method formatCurrency
     * @return {String}
     */
    formatCurrency: function (num, isRial, symbol) {
        num = num.toString().replace(/\$|\,/g, "");
        if (isNaN(num)) num = "0";
        var sign = (num == (num = Math.abs(num)));
        num = Math.round(num * 100 + 0.50000000001);
        num = Math.round(num / (isRial ? 1000 : 100)).toString();
        for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3) ; i++)
            num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
        return (((sign) ? "" : "-") + num + " " + symbol);
    },

    /**
     * Convert Persion Number to English Number
     *
     * @method convertToEnDigit
     * @return {String}
     */
    convertToEnDigit: function (str) {
        return str
            .replace(/۰/g, '0')
            .replace(/۱/g, '1')
            .replace(/۲/g, '2')
            .replace(/۳/g, '3')
            .replace(/۴/g, '4')
            .replace(/۵/g, '5')
            .replace(/۶/g, '6')
            .replace(/۷/g, '7')
            .replace(/۸/g, '8')
            .replace(/۹/g, '9')
            .replace(/٠/g, '0')
            .replace(/١/g, '1')
            .replace(/٢/g, '2')
            .replace(/٣/g, '3')
            .replace(/٤/g, '4')
            .replace(/٥/g, '5')
            .replace(/٦/g, '6')
            .replace(/٧/g, '7')
            .replace(/٨/g, '8')
            .replace(/٩/g, '9');

    },

    setCookie: function (cookieName, cookieValue, expireDays) {
        var d = new Date();
        d.setTime(d.getTime() + (expireDays * 24 * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
    },

    getCookie: function getCookie(cookieName) {
        var name = cookieName + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    },

    checkCookie: function (cookieName) {
        var name = this.getCookie(cookieName);
        if (name !== "") {
            return true;
        } else {
            return false;
        }
    }
});


/*[PATH @digikala/supernova-digikala-desktop/assets/local/js/main.js]*/
var Main = {
    trends: [],
    init: function () {
        this.user = new UserClass();
        var functions = [
            this.initStatic,
            this.initHomeTopBox,
            this.initSelects,
            this.initCounter,
            this.initBox,
            this.initSwiper,
            this.extendValidator,
            this.initMainSearchBar,
            this.initLoginFormModal,
            this.initNewsletter,
            this.initEmarsys,
            this.initFooter,
            this.initCart,
            this.initRemoveFromCart,
            this.initDropdownMenus,
            this.initResetModalForm,
            this.initGeneralAlertModal,
            this.initGeneralInformationModal,
            this.initErrorMessages,
            this.initLazyLoading,
            this.initGoogleAnalyticsEvents,
            this.initATInternetEvents,
            this.initBackButtons,
            this.overrideServerErrors,
            this.initBrowserBackHandler,
            this.initBrandsSwiper,
            this.initSNTracker
        ];

        if (isModuleActive('fmcg')) {
            this.fastShoppingConfirmCookieName = 'fast-shopping-confirm';
            functions.push(this.initQuickView);
            // functions.push(this.intiShowFMCGModal);
            functions.push(this.initFastShoppingConfirmModal);
            functions.push(this.initAddToCart);
        }

        var self = this;
        $(functions).map(function (index, item) {
            item = item.bind(self);
            try {
                item();
            } catch (e) {
                console.log("Error: " + e);
            }
        });
    },

    intiShowFMCGModal: function () {
        var modal = $('[data-remodal-id="fmcg-modal"]');
        modal.find('.js-fmcg-modal-reject').on('click', function () {
            modal.remodal().close();
        });
        window.showFMCGModal = function (productAddURL) {
            modal.find('.js-fmcg-modal-approve').on('click', function () {
                window.open(productAddURL);
                modal.remodal().close();
            });
            modal.remodal().open();
        };
    },

    initSNTracker: function () {
        window.snt = window.snt || function () {
        };
        var $w = $(window);
        var banners = $('.c-adplacement__item');
        var bannerClickHandler = function (e) {
            snt('dkBannerClicked', {bannerId: $(this).data('id')});
        };
        banners.on('click', bannerClickHandler);
        $('.js-main-page-slider-image').on('click', bannerClickHandler);
        $w.scroll(function () {
            (function ($w) {
                var inview = banners.filter(function () {
                    var $e = $(this);
                    if ($e.is(":hidden")) return;
                    var wt = $w.scrollTop(),
                        wb = wt + $w.height(),
                        et = $e.offset().top,
                        eb = et + $e.height();
                    return eb >= wt - 5 && et <= wb + 5;
                });
                inview.each(function () {
                    snt('dkBannerViewed', {bannerId: $(this).data('id')});
                });
                banners = banners.not(inview);
            }).bind(this, $w)();
        }).scroll();
    },

    initBrowserBackHandler: function () {
        window.addEventListener("pageshow", function (event) {
            var historyTraversal =
                (typeof window.performance !== typeof undefined &&
                    window.performance.navigation.type === window.performance.navigation.TYPE_BACK_FORWARD);
            if (historyTraversal) {
                $('.js-product-compare-btn :checkbox').prop('checked', false);
            }
        });
    },

    overrideServerErrors: function () {
        window.alert = console.log.bind(console);
    },

    initSelects: function () {
        $('.js-ui-select').selectric();
        $('.js-ui-select-search').selectric({hasSearch: true});
    },

    initLazyLoading: function () {
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
        var observer = new MutationObserver(function (mutations, observer) {
            var images = $('img:not(img[src])');
            images.lazy($(window).height());
        });

        observer.observe(document, {
            childList: true,
            subtree: true
        });

        setTimeout(function () {
            var timingLazyLoad = setInterval(function () {
                var images = $('img[data-src]:not(img[src])');
                if (!images || images.length === 0) clearInterval(timingLazyLoad);
                images.splice(0, 10).map(function (item, index) {
                    $(item).attr('src', $(item).attr('data-src'));
                })
            }, 1000);
        }, 3000);
    },

    initATInternetEvents: function () {
        $('[at-internet]').on('click', function (e) {
            var attrs = this.attributes;
            var attrNames = Object.values(attrs);
            var atAttrs = {};

            for (var i = 0; i < attrNames.length; ++i) {
                if (/^at-internet-.*/gi.test(attrNames[i].name)) {
                    atAttrs[attrNames[i].name.replace('at-internet-', '')] = attrNames[i].value;
                }
            }

            var tag = new ATInternet.Tracker.Tag();
            tag.click.send(atAttrs);
        });
    },

    initGoogleAnalyticsEvents: function () {
        $('[data-event]').on('click', function () {

            var event = $(this).data('event');
            var eventCategory = $(this).data('event-category');
            var eventLabel = $(this).data('event-label');
            var eventValue = $(this).data('event-value');

            Main.sendGoogleAnalyticEvent(event, eventCategory, eventLabel, eventValue);
        });
    },

    sendGoogleAnalyticEvent: function (event, eventCategory, eventLabel, eventValue) {
        var data = {};

        if (eventCategory) {
            data['event_category'] = eventCategory;
        }

        if (eventLabel) {
            data['event_label'] = eventLabel;
        }

        if (eventValue) {
            data['value'] = eventValue;
        }

        gtag('event', event, data);
    },

    initStatic: function () {
        var $overlay = $('.js-menu-overlay'),
            $naviOverlay = $('.js-navi-overlay'),
            $newCategories = $('.js-navi-new-list-categories'),
            $newCategoryItem = $('.js-navi-new-list-category'),
            $hoverEffect = $('.js-navi-new-list-category-hover'),
            allCategoriesButton = $('.js-navi-new-list__all-links'),
            sentBanners = [];

        this.openCategories = false;
        var mainJs = this;

        $('.js-navi').hover(function () {
            $(this).find('img[data-src]').each(function (item) {
                $(this).attr('src', $(this).attr('data-src')).removeAttr('data-src');
            });
        });

        // TODO @MasoudAlali Needs Performance Optimization

        var moveHover = function (self) {
            var parent = self.parent().parent().parent();
            $hoverEffect.css('width', self.width()).css('right', parent.width() - (self.offset().left + self.width()) + parent.offset().left);
            if (isModuleActive('fmcg')) {
                if ($(this).hasClass('is-fmcg')) {
                    $hoverEffect.addClass('is-fmcg')
                } else {
                    $hoverEffect.removeClass('is-fmcg');
                }
            }
            $hoverEffect.css('transform', 'scaleX(1)');
        };

        var removeHover = function () {
            $hoverEffect.css('transform', 'scaleX(0)');
        };

        var handlerHover = function () {
            clearTimeout(this.closeTimer);
            var self = $(this);
            this.timer = setTimeout(function () {
                $('body').click();
                $naviOverlay.addClass('is-active');
                self.addClass('can-show-menu');
                self.siblings('.js-navi-new-list-category').addClass('can-show-menu');
                self.find('.js-navi-new-list-category').addClass('can-show-menu');
                mainJs.openCategories = true;
                var id = self.find('.c-adplacement__item').data('id');
                if (id && sentBanners.indexOf(id) < 0) {
                    snt('dkBannerViewed', {bannerId: id});
                    sentBanners.push(id);
                }
                $('.js-search-results').removeClass('is-active');
            }, 200);
            if (self.hasClass('js-navi-new-list-category')) {
                moveHover.call(this, self);
            }
        };
        var handlerOut = function () {
            clearTimeout(this.timer);
            var self = this;
            this.closeTimer = setTimeout(function () {
                if ($('.js-search-results').hasClass('is-active'))
                    return;
                $(self).hasClass('js-navi-new-list-categories') ?
                    $naviOverlay.removeClass('is-active') : '';
                $(self).find('.js-navi-new-list-category').removeClass('can-show-menu');
                $(self).hasClass('can-show-menu') ? $(self).removeClass('can-show-menu') : '';
                mainJs.openCategories = false;
            }, 200);
            removeHover();
        };

        // $('.js-navi-list-promotion-item').hover(function () {
        //     moveHover.call(this, $(this));
        // }, removeHover);

        var $w = $(window),
            lastY = $w.scrollTop();
        $(window).scroll(function () {
            var currentPosition = $w.scrollTop();
            if (!mainJs.openCategories) {
                return lastY = currentPosition;
            }
            if (currentPosition - lastY < -5) {
                var e = jQuery.Event('mouseout');
                $newCategories.trigger(e);
                $newCategoryItem.trigger(e);
            }
            lastY = currentPosition;
        });

        $newCategories.hover(handlerHover, handlerOut);
        $newCategoryItem.hover(handlerHover, handlerOut);
        allCategoriesButton.hover(function (e) {
            e.stopPropagation();
            e.preventDefault();
            $naviOverlay.removeClass('is-active');
        });
        $newCategories.on('click', function (e) {
            e.stopPropagation();
        });
        $overlay.hover(function () {
            if (!$(this).is('.is-active')) return true;
        });

        // disable first level item click
        $('.js-navi-new-list-categories > ul > li > a').click(function (e) {
            e.preventDefault();
        });

        $('.js-expert-article-button').on('click', function (e) {
            var $this = $(this),
                $article = $this.closest('.js-expert-article');
            if ($article.hasClass('is-active')) {
                $article.removeClass('is-active');
            } else {
                $article.addClass('is-active');
            }

            e.preventDefault();

            window.dispatchEvent(new Event('scroll'));
        });

        var $deliveryLabels = $('.js-delivery-label');

        $deliveryLabels.click(function () {
            var $this = $(this);

            if ($this.hasClass('is-read-only')) {
                return;
            }

            $deliveryLabels.removeClass('is-selected');
            $this.addClass('is-selected');
        });

        $deliveryLabels.each(function () {
            var $this = $(this);
            var $radio = $this.find('input[type="radio"]');

            if ($radio.is(':checked')) {
                $this.addClass('is-selected');
            }
        });
    },

    initNewsletter: function () {
        var $subscriptionForm = $('#SubscribeNewsletter');

        $subscriptionForm.validate({
            rules: {
                'subscribe[email]': {
                    required: true,
                    email: true,
                    maxlength: 255
                }
            },
            messages: {
                'subscribe[email]': {
                    'required': 'ایمیل وارد نشده است',
                    'email': 'ایمیل نامعتبر است',
                    'maxlength': 'ایمیل طولانی است'
                }
            }
        });


        $subscriptionForm.on('submit', function (e) {
            e.preventDefault();

            if (!$subscriptionForm.valid()) {
                DKAlert('ایمیل نامعتبر است');
                return;
            }

            $.ajax({
                type: 'POST',
                url: '/newsletter/',
                data: $subscriptionForm.serialize(),
                success: function (response) {
                    if (response.status === 'error') {
                        DKAlert(response.errors);
                    } else {
                        DKAlert('ایمیل شما برای ارسال خبرنامه ثبت شد.');
                        $subscriptionForm.find('input').val('');
                    }

                }
            });
        });
    },

    initEmarsys: function () {
        // (function (subdomain, id) {
        //     if (!$("#" + id).length) {
        //         var script = $("<script></script>").prop('id', id).prop('src', subdomain + '.scarabresearch.com/js/123DB8D9CCA58C7C/scarab-v2.js');
        //         $("script:first").before(script);
        //     }
        // })('https:' == document.location.protocol ? 'https://recommender' : 'http://cdn', 'scarab-js-api');
        window.ScarabQueue = window.ScarabQueue || [];
        if (this.user.isLogged()) {
            ScarabQueue.push(['setEmail', this.user.getEmail().indexOf('@') > 0 ? this.user.getEmail() : this.user.getEmail() + '@digikala.com']);
        }
        //TODO BRANCHMERGE ScarabQueue.push(['cart', userCart]);
        $(document).ready(function () {
            ScarabQueue.push(['go']);
        });
    },

    extendValidator: function () {
        $.validator.setDefaults({
            errorPlacement: function (error, element) {
                if (element.parent().is('label')) {
                    error.appendTo(element.parent()).addClass('c-ui-feedback-hint');
                    element.parent().addClass('has-error');
                    element.closest('.js-valid-row').addClass('has-error');

                } else if (element.parent().hasClass('selectric-hide-select')) {
                    element.parent().parent().addClass('has-error');
                    element.parent().parent().append(error.addClass('c-ui-feedback-hint'));
                }
            },
            highlight: function (element) {
                element = $(element);
                if (element.parent().is('label')) {
                    element.closest('.js-valid-row').addClass('has-error');
                    element.parent().addClass('has-error');

                } else if (element.parent().hasClass('selectric-hide-select')) {
                    element.parent().parent().addClass('has-error');
                }
            },
            unhighlight: function (element) {
                element = $(element);
                if (element.parent().is('label')) {
                    element.closest('.js-valid-row').removeClass('has-error');
                    element.parent().removeClass('has-error');

                } else if (element.parent().hasClass('selectric-hide-select')) {
                    element.parent().parent().removeClass('has-error');
                }
            },
            errorElement: "div",
            // ignoreTitle : true,
            ignore: ':hidden:not(.force-validation)'
        });

        $.extend($.validator.prototype, {
            showBackendErrors: function () {
                if (typeof jsFormErrors === 'undefined') {
                    return;
                }

                var $form = $(this.currentForm);

                var $formErrorsIndex = $form.data('name');

                if (typeof jsFormErrors[$formErrorsIndex] === 'undefined') {
                    return;
                }

                this.showErrors(jsFormErrors[$formErrorsIndex]);
            }
        });

        $.validator.addMethod("national_identity_number", function (value, element) {
            value = Services.convertToEnDigit(value);
            var regex = new RegExp(/^(?!(\d)\1{9})\d{10}$/);

            if (!regex.test(value)) {
                return false;
            }

            var s = 0;
            var c = parseInt(value.substr(9, 1), 10);

            for (var i = 0; i < 9; i++) {
                s += parseInt(value.substr(i, 1), 10) * (10 - i);
            }

            s = s % 11;

            return ((s < 2 && c == s) || (s >= 2 && c == (11 - s)));

        }, 'کد ملی نامعتبر است');

        $.validator.addMethod("mobile_phone", function (value, element) {
            var phone = Services.convertToEnDigit(value);

            var pattern = new RegExp('^(?:(?:(?:\\+?|00)(98))|(0))?((?:90|91|92|93|99)[0-9]{8})$', 'i');

            return pattern.test(phone);

        }, 'شماره موبایل نامعتبر است');

        $.validator.addMethod("bank_card_number", function (value, element) {
            var number = Services.convertToEnDigit(value);

            if (number.length === 0) {
                return true;
            }

            return /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}(-[0-9]{3})?$/i.test(number);

        }, 'شماره کارت بانکی نامعتبر است');

        // Implemented by @masoudalali
        $.validator.addMethod('digits', function (value, element) {
            if (!!value && value.length > 0 && value.trim().length > 0)
                return /^[\u06F0-\u06F9\u0660-\u06690-9]+$/i.test(value);
            return true;
        });

        $.validator.addMethod("company_economic_number", function (value, element) {
            value = Services.convertToEnDigit(value);
            var regex = new RegExp(/^(?!(\d)\1{9})\d{12}$/);

            if (!regex.test(value)) {
                return false;
            }

            return value.substring(0, 3) == "411";

        }, 'کد اقتصادی نادرست است.');

        $.validator.addMethod("company_national_identity_number", function (value, element) {
            value = Services.convertToEnDigit(value);
            var regex = new RegExp(/^(?!(\d)\1{10})\d{11}$/);

            if (!regex.test(value)) {
                return false;
            }

            if (parseInt(value.substr(3, 6), 10) != 0) {

                var c = parseInt(value.substr(10, 1), 10);
                var d = parseInt(value.substr(9, 1), 10) + 2;
                var z = [29, 27, 23, 19, 17];
                var s = 0;

                for (var i = 0; i < 10; i++) {
                    s += (d + parseInt(value.substr(i, 1), 10)) * z[i % 5];
                }

                s = s % 11;

                if (s == 10)
                    s = 0;

                return (c == s);

            } else {
                return false;
            }

        }, 'کد ملی نامعتبر است');

        // $.validator.addMethod('mobile_phone', function(value, element) {
        //     if ($.trim(value).length == 0) {
        //         return true;
        //     }
        //
        //     if ($('#add-email').length && $('#add-email').val() && $.validator.methods.email.call(this, $('#add-email').val(), element)) {
        //         var pattern = new RegExp('^[0-9]+$', 'i');
        //     } else {
        //         var pattern = new RegExp(window.mobileNumberPatternJs, 'i');
        //     }
        //
        //     return pattern.test(value);
        // }, 'Invalid phone format SMS');

        $.validator.addMethod('email', function (value, element) {
            if ($.trim(value).length === 0) {
                return true;
            }


            return /^(([^<>()\[\]\\\.,;:\s@"]+(\.[^<>()\[\]\\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(value);
        });

        $.validator.addMethod('email_phone', function (value, element) {
            if ($.trim(value).length === 0) {
                return true;
            }

            if ($.validator.methods.mobile_phone.call(this, value, element)) {
                return true;
            }
            return $.validator.methods.email.call(this, value, element);
        }, 'ایمیل یا شماره تلفن نامعتبر است');
        $.validator.addMethod('selectric', function (value, element) {
            if ($.trim(value).length === 0)
                return false;

            return $(element).val() !== "";

        }, 'سلام بر همه دوستان عزیز');

        // trim white spaces before validation
        $.each($.validator.methods, function (key, value) {
            $.validator.methods[key] = function () {
                if (arguments.length > 0) {
                    arguments[0] = $.trim(arguments[0]);
                }

                return value.apply(this, arguments);
            };
        });
    },

    initCounter: function () {
        var $counter = $('.js-counter');
        var $counterCarts = $('.js-counter-carts');

        $counter.each(function () {
            var $this = $(this), seconds = $(this).data('countdownseconds'), now;

            if (!!$this.attr('data-countdownseconds') && !!seconds) {
                now = new Date();
                now.setSeconds(now.getSeconds() + seconds);
            } else {
                now = ('' + $(this).data('countdown')).replace(/-/g, '/');
            }

            if (!now) return;

            $this.countdown({
                date: now,
                hoursOnly: true,
                rtlTemplate: '%h:%i:%s',
                template: '%h:%i:%s',
                leadingZero: true
            });
        });

        $counterCarts.each(function () {
            var $this = $(this), seconds = $(this).data('countdownseconds'), now;

            if (!!$this.attr('data-countdownseconds') && !!seconds) {
                now = new Date();
                now.setSeconds(now.getSeconds() + seconds);
            } else {
                now = ('' + $(this).data('countdown')).replace(/-/g, '/');
            }

            if (!now) return;

            $this.countdown({
                date: now,
                hoursOnly: true,
                rtlTemplate: '<span>%s</span> : <span>%i</span> : <span>%h</span>',
                template: '<span>%h</span> : <span>%i</span> : <span>%s</span>'
            });
        });
    },

    initBox: function () {
        $(document).on('click', '.js-box-toggle', function (e) {
            var $this = $(this);
            var $content = $('.js-box-content');

            if ($this.hasClass('is-hidden')) {
                $this.removeClass('is-hidden');
                $this.next($content).slideDown();
            } else {
                $this.addClass('is-hidden');
                $this.next($content).slideUp();
            }

            var SearchAction = SearchAction || null;
            setTimeout(function () {
                if (!!SearchAction) {
                    SearchAction.stickySideBar.trigger("sticky_kit:recalc");
                    SearchAction.stickySidebar.calcDimensions();
                    SearchAction.stickySidebar.updateSticky();
                }
            }, 200);

            e.preventDefault();
        });
    },

    initHomeTopBox: function () {
        var swiperPromoBoxPager = $('<div />');

        $('.js-promo-box .swiper-slide').each(function (i) {
            swiperPromoBoxPager.append('<div class="swiper-pagination__item">' + $(this).data('title') + '</div>');
        });

        var swiperPromoBox = new Swiper('.js-promo-box', {
            slidesPerView: 1,
            paginationClickable: true,
            autoplay: {
                delay: 3000
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'custom',
                renderCustom: function (swiper, current) {
                    swiperPromoBoxPager.find('div').removeClass('is-active');
                    swiperPromoBoxPager.find('div:eq(' + (current - 1) + ')').addClass('is-active');

                    return swiperPromoBoxPager.html();
                }
            }
        });

        var featuresBox = new Swiper('.js-promo-single-features', {
            slidesPerView: 1,
            autoplay: {
                delay: 3000
            },
            free: false,
            loop: true,
            pagination: {
                clickable: true,
                el: '.js-promo-single-features-pagination'
            }
        });

        $('.swiper-pagination').on('click', '.swiper-pagination__item', function (e) {
            swiperPromoBox.slideTo($(this).index());
            e.preventDefault();
        });
    },

    initBrandsSwiper: function () {
        new Swiper('.js-swiper-brands', {
            slidesPerView: 6,
            slidesPerGroup: 6,
            navigation: {
                nextEl: '.js-swiper-button-next',
                prevEl: '.js-swiper-button-prev'
            },
            breakpoints: {
                1679: {
                    slidesPerView: 5,
                    spaceBetweenSlides: 1
                }
            }
        });
    },

    initSwiper: function () {
        new Swiper('.js-swiper-products', {
            slidesPerView: 6,
            slidesPerGroup: 5,
            lazy: {
                enabled: true
            },
            navigation: {
                nextEl: '.js-swiper-button-next',
                prevEl: '.js-swiper-button-prev'
            },
            keyboard: {
                enabled: true,
                onlyInViewport: true
            },
            breakpoints: {
                1367: {
                    slidesPerView: 4,
                    slidesPerGroup: 3,
                    spaceBetweenSlides: 1
                },
                1679: {
                    slidesPerView: 5,
                    slidesPerGroup: 4,
                    spaceBetweenSlides: 1
                }
            },
            on: {
                reachEnd: function () {
                    var activeInstance = this;
                    var carouselType = activeInstance.$el.closest('.swiper-products-container').attr('data-type');
                    if (typeof carouselType == 'undefined') {
                        console.log('containers are empty');
                        return;
                    }
                    var pageNo = 'pageNo' in activeInstance ? activeInstance.pageNo : 2;
                    activeInstance.pageNo = pageNo + 1;

                    // Services.ajaxGETRequestJSON(
                    //     '/ajax/carousel/' + carouselType,
                    //     {
                    //         'pageno': pageNo
                    //     },
                    //     function (data) {
                    //         if (data.products) {
                    //             var template = self.createSliderItemTemplate(data.products);
                    //             self.appendNewItemsToSliderInstance(activeInstance, template);
                    //         }
                    //     },
                    //     null, null, null,
                    //     'execute'
                    // );
                }
            }
        });

        new Swiper('.js-swiper-related', {
            slidesPerView: 6,
            slidesPerGroup: 5,
            navigation: {
                nextEl: '.js-swiper-button-next',
                prevEl: '.js-swiper-button-prev'
            },
            breakpoints: {
                1367: {
                    slidesPerView: 4,
                    slidesPerGroup: 3,
                    spaceBetweenSlides: 1
                },
                1679: {
                    slidesPerView: 5,
                    slidesPerGroup: 4,
                    spaceBetweenSlides: 1
                }
            }
        });

        // this.initBrandsSwiper();
    },

    appendNewItemsToSliderInstance: function ($swiper, items) {
        $swiper.appendSlide(items);
    },

    createSliderItemTemplate: function (data) {
        var items = [];

        $.each(data, function (k, v) {
            var tmpl = '<div class="swiper-slide">' +
            '<div class="c-product-box" > ' +
            '<a class="c-product-box__img js-url" href="' + v.url + '"> ' +
            '<img alt="' + v.title + '" src="' + v.image + '"> ' +
            '</a> ' +
            '<div class="c-product-box__title" >' + v.title + '</div> ' +
            '<div class="c-price"> ' +
            '<div class="c-price__value"> ' +
            v.defautlAmount + '<span class="c-price__currency">تومان</span> ' +
            '<del>' + v.defaultListPrice ? v.defaultListPrice : '' + '</del>' +
                '</div> ';
            if (v.discount && v.discount.length) {
                tmpl += '<div class="c-price__discount">';
                if (v.discount.type == 'percent') {
                    tmpl += '%' + v.discount.value + '<span>تخفیف</span>';
                } else {
                    tmpl += v.discount.value + '<span>تومان</span>';
                }
                tmpl += '</div>';
            }
            tmpl += '</div></div>';

            items.push(tmpl);
        });

        return items;

    },

    initMainSearchBar: function () {
        var overlay = $('.js-navi-overlay'),
            searchInput = $('.js-search-input'),
            searchResults = $('.js-search-results'),
            searchKeyword = $('.js-search-keyword'),
            searchKeywordLink = $('.js-search-keyword-link');

        var search = function (val) {
            if (!!val && val.length > 0)
                window.location = '/search/?q=' + encodeURIComponent(val);
        };

        var ServicesAutoSuggest = $.extend(false, Services, {
            ajaxBeforeSendCallback: function (jqXHR, settings) {
                settings.duplicateUrl = '/ajax/autosuggest/';
            }
        });

        var self = this;
        self.lastSearch = '';
        self.lastSearchResponse = null;
        self.lastFocusedItem = -1;

        searchInput.off();

        searchInput.on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
        });

        searchResults.on('click', function (e) {
            e.stopPropagation();
        });

        searchInput.on("focus click", function (e) {
            var trendsList = $('.js-trends-results');

            if ($(this).val().trim().length === 0) {
                suggestionList
                    .hide()
                    .empty();
                resultList
                    .hide()
                    .empty();
            }

            if (!!$(this).val() && $(this).val().length) {
                searchInput.trigger(jQuery.Event('keyup'));
                return;
            }

            function showTrends(trends_result) {
                trendsList.empty();

                $.map(trends_result, function (element) {
                    trendsList.append('<li><a href="' + element.url + '">' + element.label + '</a></li>');
                });
                searchResults.addClass('is-active').parent('.js-search').addClass('is-active');
                overlay.addClass('is-active');
                overlay.on('click', function () {
                    overlay.removeClass('is-active');
                    searchResults.removeClass('is-active').parent('.js-search').removeClass('is-active');
                });
                $(".js-autosuggest-empty-list").hide();
                $(".js-trends-results").addClass("no-border").show().parent().show();
            }

            if (!!self.trends && self.trends.length > 0) {
                showTrends(self.trends);
                return;
            }

            ServicesAutoSuggest.ajaxGETRequestJSON(
                '/ajax/autosuggest/',
                {
                    'q': ''
                },
                function (data) {
                    if (!!data && "trends_result" in data) {
                        if (data.trends_result.length > 0) {
                            self.trends = data.trends_result;
                            showTrends(data.trends_result);
                        }
                        else {
                            trendsList.hide().parent().hide();
                        }
                    }
                },
                null, null, null, 'execute');
        });

        $('.js-header-search-button, .js-search-keyword-link').on('click', function () {
            var e = jQuery.Event("keyup");
            e.which = 13;
            e.keyCode = 13;
            searchInput.trigger(e);
        });

        $(document).click(function () {
            searchResults.removeClass('is-active').parent('.js-search').removeClass('is-active');
            overlay.removeClass('is-active');
        });


        var resultList = $('.js-autosuggest-results-list'),
            suggestionList = $('.js-results-list'),
            trendsList = $('.js-trends-results'),
            emptyList = $('.js-autosuggest-empty-list');
        var up = 38, down = 40, esc = 27, ent = 13;

        searchInput.on('keyup', function (e) {
            var processResponse = function (data) {
                self.lastSearch = data.query;
                self.lastSearchResponse = data;
                self.lastFocusedItem = -1;
                trendsList.hide().parent().hide();

                if ("auto_complete" in data && "search_result" in data && "advance_links" in data) {
                    if (data.auto_complete.length === 0 && data.search_result.length === 0 && data.advance_links.length === 0) {
                        suggestionList
                            .hide()
                            .empty();
                        resultList
                            .hide()
                            .empty();
                        emptyList.show();
                    } else {
                        if (data.auto_complete.length > 0)
                            suggestionList
                                .empty()
                                .show();
                        if (data.search_result.length > 0 || data.advance_links.length > 0)
                            resultList
                                .empty()
                                .show();

                        emptyList.hide();

                        $.map(data.search_result, function (element) {
                            resultList.append('<li><a href="' + element.url + '"><span class="c-search__result-item">' + element.label + ' </span><span class="c-search__result-item--category">' + element.category_name + '</span></a></li>');
                        });

                        $.map(data.advance_links, function (element) {
                            resultList.append('<li><a href="' + element.url + '"><span class="c-search__result-item">' + element.title_prefix + ' </span><span class="c-search__result-item--category">' + element.title + '</span></a></li>');
                        });

                        $.map(data.auto_complete, function (element) {
                            suggestionList.append('<li><a href="' + element.url + '">' + element.label + '</a></li>');
                        });
                    }
                }
                else {
                    suggestionList
                        .hide()
                        .empty();
                    resultList
                        .hide()
                        .empty();
                }

                if ("trends_result" in data && data.trends_result.length > 0) {
                    self.trends = data.trends_result;
                }
            };

            var key = e.which;

            if (key === up || key === down || key === esc) return;

            if (key === ent) {
                if (val = $(this).val()) {
                    search(val);
                }
            } else {
                var searchInputValue = $(this).val();
                var searchInputValueL = searchInputValue.length;
                searchKeyword.text(searchInputValue);
                searchKeywordLink.attr('href', '/search/?q=' + searchInputValue);
                if (searchInputValueL > 1) {
                    if (searchResults.not('.is-active')) {
                        searchResults.addClass('is-active').parent('.js-search').addClass('is-active');
                        overlay.addClass('is-active');
                    }
                    if (self.lastSearch === searchInputValue && !!self.lastSearchResponse)
                        return processResponse(self.lastSearchResponse);

                    ServicesAutoSuggest.ajaxGETRequestJSON(
                        '/ajax/autosuggest/',
                        {
                            'q': searchInputValue
                        },
                        processResponse
                        ,
                        null, null, null,
                        'execute'
                    );
                } else {
                    searchResults.removeClass('is-active').parent('.js-search').removeClass('is-active');
                    $('.js-autosuggest-results-list')
                        .hide()
                        .empty();
                    overlay.removeClass('is-active');
                }
            }
        });

        searchInput.on('keydown', function (e) {
            var key = e.which;

            if ([up, down, ent].indexOf(key) === -1) return;

            e.preventDefault();
            e.stopPropagation();

            var lists = resultList.find('li').add(suggestionList.find('li'));

            if (key === ent && lists.filter('.is-hover').length > 0) {
                searchInput.off('keyup');
                return window.location.href = lists.filter('.is-hover').find('a').attr('href');
            } else if (key === ent) {
                return;
            }

            if (key === up || key === down) lists.removeClass('is-hover');

            var shouldGoTo = self.lastFocusedItem;

            if (key === up) {
                shouldGoTo = shouldGoTo - 1;
                if (shouldGoTo < 0) shouldGoTo = lists.length - 1;
            } else if (key === down) {
                shouldGoTo = (shouldGoTo + 1) % lists.length;
            }

            self.lastFocusedItem = shouldGoTo;

            var focusedItem = lists.eq(shouldGoTo);
            focusedItem.addClass('is-hover');
            searchInput.val(focusedItem.parent().is(suggestionList) ? focusedItem.find('a').text() : searchKeyword.text());
        });
    },

    initLoginFormModal: function () {
        var $form = $('#loginFormModal');

        if (!$form.length) {
            return false;
        }

        $('.login-button-js').click(function () {
            if (!$form.valid()) {
                return false;
            }

            $.ajax({
                type: 'POST',
                url: '/users/login/?json=1',
                success: function (response) {
                    if (response.status == 'error') {
                        $('#loginFormError').show();
                        return false;
                    }

                    location.reload();
                },
                data: $form.serialize()
            });

            return false;
        });

        $form.find('input').first().focus();

        $form.validate({
            rules: {
                'login[email_phone]': {
                    required: true,
                    email_phone: true,
                    maxlength: 255
                },
                'login[password]': {
                    required: true,
                    minlength: 4,
                    maxlength: 50
                }
            },
            messages: {
                'login[email_phone]': {
                    'required': 'ایمیل یا شماره تلفن را وارد نمایید',
                    'email_phone': 'ایمیل یا شماره تلفن نامعتبر است',
                    'maxlength': 'ایمیل طولانی است'
                },
                'login[password]': {
                    'required': 'رمز عبور را وارد نمایید',
                    'minlength': 'رمز عبور باید بیش از ۶ حرف یا عدد باشد',
                    'maxlength': 'رمز عبور وارد شده طولانی است'
                }
            }
        });
    },

    ajaxError401Response: function () {
        this.getUser().showLoginForm();
    },

    initCart: function () {
        var userCart = [];

        if (this.user.isLogged()) {
            var $metaData = $('#topBarMeta');

            if (!$metaData.length) {
                return;
            }
            userCart = $metaData.data('cart_items');
        } else {
            var cartItemsCookie = Cookies.get('cart_items');
            if (cartItemsCookie) {
                userCart = $.parseJSON(cartItemsCookie);
            }
        }

        if (!!userCart && userCart.length > 0) {
            for (var i = 0; i < userCart.length; ++i) {
                userCart[i].item = '' + userCart[i].item;
            }
        }

        window.ScarabQueue = window.ScarabQueue || [];
        ScarabQueue.push(['cart', userCart]);
    },

    initRemoveFromCart: function () {
        var thiz = this,
            cartButton = $('.c-header__btn-adding.js-dropdown-toggle');
        $(document).on('click', "#mini-cart", function (e) {
            e.stopPropagation();
        });

        $(document).on('click', '.js-mini-cart-remove-item', function (e) {
            e.preventDefault();

            var id = $(this).attr('data-id');
            var variantData = $(this).data('enhanced-ecommerce');

            DKConfirm('آیا مایل به حذف این کالا هستید؟', function () {
                Services.ajaxGETRequestJSON(
                    '/ajax/cart/remove/' + id + '/',
                    null,
                    function (response) {
                        $('#mini-cart').html(response.data);
                        thiz.initDropdownMenus();
                    },
                    function (data) {
                        if (data.errors !== undefined) {
                            DKAlert(data.errors);
                        }
                    },
                    false,
                    true
                );

                console.log(variantData);

                ga('ec:addProduct', variantData);
                ga("ec:setAction", 'remove');
                ga("send", 'event', "ecommerce", "remove from cart", "remove from mini cart");
            }, function () {
                cartButton.click();
            });
        });
    },

    initFooter: function () {
        $('#enamad').on('click', function (e) {
            e.preventDefault();
            window.open("https://trustseal.enamad.ir/Verify.aspx?id=19077&p=nbpdjzpgdrfsqgwlqgwl",
                "Popup", "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30");
        });

        $('#resaneh').on('click', function (e) {
            e.preventDefault();
            window.open("https://logo.samandehi.ir/Verify.aspx?id=28177&p=uiwkmcsirfthjyoejyoe",
                "Popup", "toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30");
        });

        $("#js-footer-readmore").on("click", function (e) {
            e.preventDefault();
            var readMoreContentElem = $("#js-footer-readmore-content");
            if (readMoreContentElem.is(":visible")) {
                readMoreContentElem.hide();
                $(this).text("مشاهده بیشتر");
            } else {
                readMoreContentElem.show();
                $(this).text("بستن");
            }
        });

        $("#js-jump-to-top").on("click", function (e) {
            e.preventDefault();
            // $("html,body").animate({scrollTop: 0}, 500);
            $("html,body").scrollTop(0);
        });
    },

    initDropdownMenus: function () {
        var dropDowns = $('.js-dropdown-toggle');
        dropDowns.off('click');
        dropDowns.on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $('.js-dropdown-menu').not($(this).next('.js-dropdown-menu')).hide();
            if ($(this).next('.js-dropdown-menu').is(':visible'))
                $(this).next('.js-dropdown-menu').hide();
            else
                $(this).next('.js-dropdown-menu').show();
        });

        $(document).click(function () {
            jQuery('.js-dropdown-menu').hide();
        });
    },

    initResetModalForm: function () {
        $(document).on('opening', '[data-remodal-id]', function () {
            if ($(this).find('form').length) {
                // $(this).find('form').validate().resetForm();
                $('.js-valid-row .error').removeClass('error');
                $('.js-valid-row, .selectric-wrapper').removeClass('has-error');
                // $('.js-ui-select').prop('selectedIndex', 0).selectric('refresh');
            }
        });
    },

    renderMaskText: function () {

        var $maskWrapper = $('.js-mask');

        $maskWrapper.each(function () {
            var $this = $(this),
                $text = $this.find('.js-mask__text'),
                $handler = $this.find('.js-mask_handler');

            if ($this.is('.is-masked'))
                return;

            var maxHeight = 0;
            try {
                maxHeight = parseInt($text.css('max-height').replace('px', ''));
            } catch (e) {
                maxHeight = 0;
            }
            $text.css('max-height', 'unset');
            $text.css('height', 'unset');
            var height = $text.outerHeight();
            if (height <= maxHeight) return;
            $text.css('max-height', maxHeight);
            $this.addClass('is-masked');
            $handler.show();
            $handler.on('click', function (e) {
                var $this = $(this);
                e.preventDefault();
                $text.toggleClass('is-active');
                $this.toggleClass('is-active');
                if (!$this.hasClass('is-active')) {
                    $text.css('max-height', maxHeight);
                } else {
                    $text.css('max-height', 'unset');
                }
                $this.text(function (i, text) {
                    return text.trim() === "ادامه مطلب" ? "بستن" : "ادامه مطلب";
                });
            });
        });
    },

    convertToFaDigit: function (a) {
        var b = a;
        for (var c = 48; c <= 57; c++) {
            var d = String.fromCharCode(c);
            var e = String.fromCharCode(c + 1728);
            b = b.replace(new RegExp(d.toString(), "g"), e.toString());
        }
        return b;
    },

    initGeneralInformationModal: function () {
        var generalInformationModal = $('[data-remodal-id=information]').remodal();

        window.DKAlert = function (message, buttonText) {
            message = message || '';
            buttonText = buttonText || 'باشه';

            var modalText = $('.js-remodal-general-information__text'),
                modalApprove = $('.js-remodal-general-information__button--approve');

            modalText.text(message);
            modalApprove.text(buttonText);

            modalApprove.on('click', function () {
                generalInformationModal.close();
            });
            generalInformationModal.open();

        };
    },

    initGeneralAlertModal: function () {
        var generalAlertModal = $('[data-remodal-id=alert]').remodal();

        window.DKConfirm = function (message, approveCallback, rejectCallback, approveText, rejectText) {
            message = message || '';
            approveCallback = approveCallback || function () {
            };
            rejectCallback = rejectCallback || function () {
            };
            approveText = approveText || "بله";
            rejectText = rejectText || "خیر";

            var modalText = $('.js-remodal-general-alert__text'),
                modalCancel = $('.js-remodal-general-alert__button--cancel'),
                modalApprove = $('.js-remodal-general-alert__button--approve');

            modalText.text(message);
            modalCancel.text(rejectText);
            modalApprove.text(approveText);

            modalCancel.off('click');
            modalApprove.off('click');

            modalCancel.on('click', function () {
                generalAlertModal.close();
                rejectCallback();
            });
            modalApprove.on('click', function () {
                generalAlertModal.close();
                approveCallback();
            });
            generalAlertModal.open();
        };
    },

    initErrorMessages: function () {
        var errorButton = $('.js-message-error-button');
        errorButton.on('click', function () {
            $(this).closest('.js-message-error').hide();
        });

        $('.js-notice-button').on('click', function () {
            $(this).closest('.js-notice').hide();
            if (this.timer) clearTimeout(this.timer);
        });

        $('.js-notice').each(function (index, item) {
            this.timer = setTimeout(function () {
                $(item).fadeOut(300);
            }, 4000);
        });
    },

    initBackButtons: function () {
        var documentReferrer = document.referrer;
        var referrerHost = !!documentReferrer ? $('<a>').prop('href', documentReferrer).prop('hostname') : '';
        var referrerPort = !!documentReferrer ? $('<a>').prop('href', documentReferrer).prop('port') : '';
        var backButtonIsActive = location.hostname + location.port === referrerHost + referrerPort;
        var $backButton = $('.js-back-history-button');
        if (!backButtonIsActive) {
            $backButton.addClass('disabled');
        }
        $backButton.on('click', function () {
            if (backButtonIsActive) {
                window.history.back();
            }
        });
    },

    initFastShoppingConfirmModal: function () {
        var fastShoppingConfirmModal = $('[data-remodal-id="fmcg-modal"]').remodal();

        window.fastShoppingConfirm = function (approveCallback, rejectCallback, approveText, rejectText) {
            approveCallback = approveCallback || function () {
            };
            rejectCallback = rejectCallback || function () {
            };
            approveText = approveText || "بله";
            rejectText = rejectText || "خیر";

            var modalCancel = $('.js-fmcg-modal-reject'),
                modalApprove = $('.js-fmcg-modal-approve');

            modalCancel.text(rejectText);
            modalApprove.text(approveText);

            modalCancel.off('click');
            modalApprove.off('click');

            modalCancel.on('click', function () {
                fastShoppingConfirmModal.close();
                rejectCallback();
            });
            modalApprove.on('click', function () {
                fastShoppingConfirmModal.close();
                approveCallback();
            });
            fastShoppingConfirmModal.open();
        };
    },

    initQuickView: function () {
        var thiz = this;

        $(document).on('click', '.js-quick-view-more-variants-button', function () {
            var variants = $(this).closest('.js-product-variants').find('.js-c-ui-variant--extra');
            variants.toggleClass('c-ui-variant--hide');
            if (variants.hasClass('c-ui-variant--hide')) {
                $(this).text('+ ' + $(this).data('length') + ' ' + $(this).data('title') + ' دیگر');
            } else {
                $(this).text('نمایش کمتر');
            }
        });

        thiz.quickViewCacheEnabled = false;
        thiz.quickViewCache = {};

        if (thiz.quickViewCacheEnabled) {
            $(document).on('closed', '[data-remodal-id=quick-view]', function () {
                var $this = $(this), s = $this.find('select'), sv = s.val();
                $this.find('option').attr('selected', false);
                $this.find('option[value="' + sv + '"]').attr('selected', true);
                $this.find('.js-ui-select').selectric('destroy');
                thiz.quickViewCache[thiz.targetProductId] = $this.find('.js-quick-view-section').html();
            });
        }

        $(document).on('click', '.js-fast-shopping.has-more', function (e) {
            var $this = $(this);
            e.stopPropagation();
            e.preventDefault();

            if ($this.hasClass('js-fast-shopping-confirm') && $this.find('.is-added').length === 0 && !Services.checkCookie(thiz.fastShoppingConfirmCookieName)) {
                fastShoppingConfirm(function () {
                    thiz.handleQuickView($this);
                    Services.setCookie(thiz.fastShoppingConfirmCookieName, 'yes', 30);
                }, function () {});
            } else {
                thiz.handleQuickView($this);
            }
        });
    },

    handleQuickView: function (productElement) {
        var thiz = this;

        thiz.targetElement = productElement;
        thiz.targetProductId = productElement.data('id');

        var productId = productElement.data('id');

        if (thiz.quickViewCacheEnabled && !!thiz.quickViewCache[productId]) {
            var $quickViewSection = $('.js-quick-view-section');
            $quickViewSection.html(thiz.quickViewCache[productId]);
            var a = $quickViewSection.empty().append(thiz.quickViewCache[productId]);
            a.find('select').val(a.find('option[selected]').attr('value'));
            $quickViewSection.find('select').selectric('init');
            $('[data-remodal-id=quick-view]').remodal().open();
            return;
        }

        Services.ajaxGETRequestHTML('/ajax/product/quick-view/' + productId + '/', {}, function (html) {
            var $quickViewSection = $('.js-quick-view-section');
            $quickViewSection.html(html);
            if (thiz.quickViewCacheEnabled) {
                thiz.quickViewCache[productId] = html;
            }
            $quickViewSection.find('select').selectric('init');
            $('[data-remodal-id=quick-view]').remodal().open();
        }, false, true);
    },

    initAddToCart: function () {
        /*$('.js-add-to-cart').on('click', function (e) {
            $(this).closest('.js-add-to-cart-container').addClass('is-added');
            e.preventDefault();
        });*/

        /*$('.js-order-amount').on('change', function () {
            var $selectedOption = $(this).find(':selected');

            if ($selectedOption.hasClass('js-cancel-product')) {
                $(this).closest('.js-add-to-cart-container').removeClass('is-added');
                $(this).val(1);
                $(this).selectric('init');
            }
        });*/

        var thiz = this;

        $(document).on('click', '.js-product-add-to-card', function (e) {
            e.preventDefault();
            var $this = $(this);

            if ($this.hasClass('js-fast-shopping-confirm') && !$this.hasClass('is-added') && !Services.checkCookie(thiz.fastShoppingConfirmCookieName)) {
                fastShoppingConfirm(function () {
                    thiz.handleListPageAddToCart($this);
                    Services.setCookie(thiz.fastShoppingConfirmCookieName, 'yes', 30);
                }, function () {});
            } else {
                thiz.handleListPageAddToCart($this);
            }
        });

        $(document).on('click', '.js-product-page-add-to-card', function (e) {
            e.preventDefault();
            var $this = $(this);

            if ($this.parent('.js-add-to-cart-container').hasClass('js-fast-shopping-confirm') && !$this.parent('.js-add-to-cart-container').hasClass('is-added') && !Services.checkCookie(thiz.fastShoppingConfirmCookieName)) {
                fastShoppingConfirm(function () {
                    thiz.handleProductPageAddToCart($this);
                    Services.setCookie(thiz.fastShoppingConfirmCookieName, 'yes', 30);
                }, function () {});
            } else {
                thiz.handleProductPageAddToCart($this);
            }
        });

        $(document).on('click', '.js-product-quick-filter', function (e) {
            var $this = $(this);
            e.stopPropagation();
            e.preventDefault();

            var productId = $this.data('product');
            var variantId = $this.data('variant');
            var dropUpContainer = $this.closest('.is-detailed');
            dropUpContainer.fadeTo(250, .3);
            Services.ajaxGETRequestHTML('/ajax/product/quick-view/' + productId + '/?variant_id=' + variantId, {}, function (html) {
                $('.js-quick-view-section').html(html);
                $('.js-quick-view-section').find('select').selectric('init');
            }, false, false);
        });

        $(document).on('change', '.js-quick-add-to-cart', function () {
            var $this = $(this);
            var quantity = parseInt($this.val() || $this.find('option:selected').attr('value'));
            var variantId = $this.data('variant');

            if (quantity === 0) {
                DKConfirm('آیا مایل به حذف این کالا هستید؟', function () {
                    Services.ajaxGETRequestJSON(
                        '/ajax/cart/remove/' + $this.data('cart-item') + '/' + '?is_quick_view=true',
                        {},
                        function (response) {
                            $this.data('mode', 'add');
                            // $(':selected', $this).addClass('u-hidden');

                            window.cart = response.cartData;
                            /*if (!!window.cart.itemCount) {
                                $('.js-cart-count').attr('data-counter', Services.convertToFaDigit(window.cart.itemCount));
                            } else {
                                $('.js-cart-count').attr('data-counter', Services.convertToFaDigit(0));
                            }*/

                            var $parent = $this.closest('.js-fast-shopping');
                            $parent.removeClass('is-added');
                            $parent.find('.js-select-quantity').hide();
                            $parent.find('.js-select-quantity select').selectric('init');
                            $parent.find('.js-product-add-to-card').show().css('display', 'inline-flex');
                            $('.js-product-page-add-to-card').show();

                            $('.js-added-notice').addClass('u-hidden');

                            thiz.updateQuickViewProduct(response);
                            thiz.updateMiniCart(response);

                            /*if (!!window.cart.variants[variantId] && !!thiz.quickViewCache[window.cart[variantId].productId]) {
                                delete thiz.quickViewCache[window.cart[variantId].productId];
                            }*/
                        }, function (response) {
                            if (response.errors !== undefined) {
                                DKAlert(response.errors[0]);
                            }
                        },
                        false,
                        false
                    );
                });

                return;
            }

            var url = $this.data('mode') === 'add' ?
                '/cart/add/' + variantId + '/' + quantity  + '/?is_quick_view=true' :
                '/cart/change/' + variantId + '/' + quantity + '/?is_quick_view=true';
            Services.ajaxGETRequestJSON(
                url,
                {},
                function (response) {
                    // $('.u-hidden', $this).removeClass('u-hidden');
                    $this.data('mode', 'change');
                    $this.data('cart-item', response.cartItemId);
                    window.cart = response.cartData;
                    $('.js-added-notice').removeClass('u-hidden');

                    /*if (!!response.cartData.itemCount) {
                        $('.js-cart-count').attr('data-counter', Services.convertToFaDigit(window.cart.itemCount));
                    } else {
                        $('.js-cart-count').attr('data-counter', Services.convertToFaDigit(0));
                    }*/

                    thiz.updateQuickViewProduct(response);
                    thiz.updateMiniCart(response);
                }, function (response) {
                    if (response.errors !== undefined) {
                        DKAlert(response.errors[0]);
                    }
                },
                false,
                false
            );
        });
    },

    handleListPageAddToCart: function (buttonElement) {
        // buttonElement.closest('.js-add-to-cart-container').addClass('is-added');
        var select = buttonElement.parent().find('.js-select-quantity select');
        buttonElement.hide();
        select.val(select.find('option').first().attr('value'));
        buttonElement.parent().find('.js-select-quantity').show().css('display', 'flex');
        select.change();
        select.selectric('init');
    },

    handleProductPageAddToCart: function (buttonElement) {
        buttonElement.parent().find('.js-select-quantity').show().css('display', 'flex');
        var select = buttonElement.parent().find('.js-select-quantity select');
        buttonElement.hide();
        select.val(select.find('option').first().attr('value'));
        // buttonElement.parent().find('.js-select-quantity').show().css('display', 'flex');
        buttonElement.closest('.js-add-to-cart-container').addClass('is-added');
        // select.parent().show().css('display', 'flex');
        select.change();
        select.selectric('init');
    },

    updateQuickViewProduct: function (data) {
        var thiz = this;
        if (!!thiz.targetElement && thiz.targetElement.find('.js-product-show-more').length > 0) {
            if (!!data.cartData.products[thiz.targetProductId] &&
                data.cartData.products[thiz.targetProductId].quantity > 0) {
                var select = thiz.targetElement.find('.js-product-show-more-select').find('select');
                select.find('option').first()
                    .text(Services.convertToFaDigit(data.cartData.products[thiz.targetProductId].quantity));
                select.selectric('init');
                thiz.targetElement.find('.js-add-to-cart-container').addClass('is-added');
                thiz.targetElement.find('.js-product-show-more-select').removeClass('u-hidden');
                thiz.targetElement.find('.js-product-show-more-button').addClass('u-hidden');
            } else {
                thiz.targetElement.find('.js-add-to-cart-container').removeClass('is-added');
                thiz.targetElement.find('.js-product-show-more-select').addClass('u-hidden');
                thiz.targetElement.find('.js-product-show-more-button').removeClass('u-hidden');
            }
        }
    },

    updateMiniCart: function (response) {
        $('#mini-cart').html(response.miniCartData);
        this.initDropdownMenus();
    }
};

$(function () {
    Main.init();
});


/*[PATH @digikala/supernova-digikala-desktop/assets/local/js/smarttag.min.js]*/
;(function(){var dfltPluginCfg={"sourceFile":"download","info":true};var dfltGlobalCfg={"site":595431,"log":"logw340","logSSL":"logws1340","domain":"ati-host.net","secure":false,"pixelPath":"/hit.xiti","disableCookie":false,"cookieSecure":false,"cookieDomain":"","preview":false,"plgs":["Campaigns","Clicks","ClientSideUserId","ContextVariables","IdentifiedVisitor","InternalSearch","MvTesting","Offline","OnSiteAds","Page","RichMedia","SalesTracker"],"lazyLoadingPath":"","documentLevel":"document","redirect":false,"activateCallbacks":true,"medium":"","ignoreEmptyChapterValue":true,"base64Storage":false};(function(a,b){a.ATInternet=a.ATInternet||{};a.ATInternet.Tracker=a.ATInternet.Tracker||{};a.ATInternet.Tracker.Plugins=a.ATInternet.Tracker.Plugins||{}})(window);
var Utils=function(){function a(g){var b=typeof g;if("object"!==b||null===g)return"string"===b&&(g='"'+g+'"'),String(g);var k,c,m=[],e=g&&g.constructor===Array;for(k in g)g.hasOwnProperty(k)&&(c=g[k],b=typeof c,"function"!==b&&"undefined"!==b&&("string"===b?c='"'+c.replace(/[^\\]"/g,'\\"')+'"':"object"===b&&null!==c&&(c=a(c)),m.push((e?"":'"'+k+'":')+String(c))));return(e?"[":"{")+String(m)+(e?"]":"}")}var b=this;b.cloneSimpleObject=function n(a,c){if("object"!==typeof a||null===a||a instanceof Date)return a;
var m=new a.constructor||a.constructor(),e;for(e in a)a.hasOwnProperty(e)&&(void 0===e||c&&void 0===a[e]||(m[e]=n(a[e])));return m};b.jsonSerialize=function(b){return"undefined"!==typeof JSON&&JSON.stringify?JSON.stringify(b):a(b)};b.jsonParse=function(a){try{if("undefined"!==typeof JSON&&JSON.parse)return JSON.parse(a);var b;b=null===a?a:"string"===typeof a?(new Function("return "+a))():!1;return b}catch(c){return null}};b.arrayIndexOf=function(a,b){return Array.indexOf?a.indexOf(b):function(a){if(null==
this)throw new TypeError;var b=Object(this),e=b.length>>>0;if(0===e)return-1;var f=0;1<arguments.length&&(f=Number(arguments[1]),f!=f?f=0:0!=f&&Infinity!=f&&-Infinity!=f&&(f=(0<f||-1)*Math.floor(Math.abs(f))));if(f>=e)return-1;for(f=0<=f?f:Math.max(e-Math.abs(f),0);f<e;f++)if(f in b&&b[f]===a)return f;return-1}.apply(a,[b])};b.uuid=function(){return{v4:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return("x"===a?b:b&3|8).toString(16)})},
num:function(a){var b=new Date,c=function(a){a-=100*Math.floor(a/100);return 10>a?"0"+a:a};return c(b.getHours())+""+c(b.getMinutes())+""+c(b.getSeconds())+""+function(a){return Math.floor((9*Math.random()+1)*Math.pow(10,a-1))}(a-6)}}};b.getObjectKeys=function(a){var b=[],c;for(c in a)a.hasOwnProperty(c)&&b.push(c);return b};b.completeFstLevelObj=function(a,b,c){if(a){if(b)for(var m in b)!b.hasOwnProperty(m)||a[m]&&!c||(a[m]=b[m])}else a=b;return a};b.isPreview=function(){return window.navigator&&
"preview"===window.navigator.loadPurpose};b.isPrerender=function(a){var d,c=!1,m=["webkit","ms"];if("prerender"===document.visibilityState)d="visibilitychange";else for(var e=0;e<m.length;e++)"prerender"===document[m[e]+"VisibilityState"]&&(d=m[e]+"visibilitychange");if("undefined"!==typeof d){var f=function(c){a(c);b.removeEvtListener(document,d,f)};b.addEvtListener(document,d,f);c=!0}return c};var h=b.addEvtListener=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+
b,c)},d=b.removeEvtListener=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)};b.loadScript=function(a,b){var c;b=b||function(){};c=document.createElement("script");c.type="text/javascript";c.src=a.url;c.async=!1;c.defer=!1;c.onload=c.onreadystatechange=function(a){a=a||window.event;if("load"===a.type||/loaded|complete/.test(c.readyState)&&(!document.documentMode||9>document.documentMode))c.onload=c.onreadystatechange=c.onerror=null,b(null,
a)};c.onerror=function(a,f,m){c.onload=c.onreadystatechange=c.onerror=null;b({msg:"script not loaded",event:a})};var m=document.head||document.getElementsByTagName("head")[0];m.insertBefore(c,m.lastChild)};b.hashcode=function(a){var b=0;if(0===a.length)return b;for(var c=0;c<a.length;c++)var m=a.charCodeAt(c),b=(b<<5)-b+m,b=b&b;return b};b.setLocation=function(a){var b=a.location;a=window[a.target]||window;b&&(a.location.href=b)};b.dispatchCallbackEvent=function(a){var b;"function"===typeof window.Event?
b=new Event("ATCallbackEvent"):(b=document.createEvent("Event"),b.initEvent&&b.initEvent("ATCallbackEvent",!0,!0));b&&(b.name=a,document.dispatchEvent(b))};b.addCallbackEvent=function(a){h(document,"ATCallbackEvent",a)};(function(){function a(b,c){c=c||{bubbles:!1,cancelable:!1,detail:void 0};var m=document.createEvent("CustomEvent");m.initCustomEvent(b,c.bubbles,c.cancelable,c.detail);return m}if("function"===typeof window.CustomEvent)return!1;a.prototype=window.Event.prototype;window.CustomEvent=
a})();b.addOptOutEvent=function(a,d){b.ATOptOutEvent=new CustomEvent("ATOptOutEvent",{detail:{name:"clientsideuserid",id:d}});h(document,"ATOptOutEvent",a)};b.removeOptOutEvent=function(a){d(document,"ATOptOutEvent",a)};b.dispatchOptOutEvent=function(a){b.optedOut=a;b.ATOptOutEvent=b.ATOptOutEvent||new CustomEvent("ATOptOutEvent",{detail:{name:"clientsideuserid",id:-1}});document.dispatchEvent(b.ATOptOutEvent)};b.userOptedOut=function(){b.dispatchOptOutEvent(!0)};b.userOptedIn=function(){b.dispatchOptOutEvent(!1)};
b.isOptedOut=function(){return!!b.optedOut};b.optedOut=null;b.ATOptOutEvent=null};window.ATInternet.Utils=new Utils;
var BuildManager=function(a){var b=this,h=function(a,c,f){a="&"+a+"=";return{param:a,paramSize:a.length,str:c,strSize:c.length,truncate:f}},d=function(c,b){var f="",g=0,p=!0,l;for(l in c)if(c.hasOwnProperty(l)){var q=c[l];if(q){var p=!1,d=b-g;if(q.strSize+q.paramSize<d)f+=q.param+q.str,g+=q.strSize+q.paramSize,c[l]=void 0,p=!0;else{q.truncate?(f+=q.param+q.str.substr(0,d),c[l].str=q.str.substr(d,q.strSize-1),c[l].strSize=c[l].str.length):q.strSize+q.paramSize>b&&(a.emit("Tracker:Hit:Build:Error",
{lvl:"ERROR",msg:'Too long parameter "'+q.param+'"',details:{value:q.str}}),c[l].str=c[l].str.substr(0,b-q.paramSize-1),c[l].strSize=c[l].str.length);break}}else p=!0}return[f,p?null:c]},g=["ati","atc","pdtl","stc","dz"],n=function(c,b,f){var r=function(a){if(a==={})return"";var l=[],c;c={};var b=0,f=!1,p=void 0,e,m,r;for(r in a)if(a.hasOwnProperty(r)){var k=a[r].value;"function"===typeof k&&(k=k());k=k instanceof Array?k.join(a[r].options.separator||","):"object"===typeof k?window.ATInternet.Utils.jsonSerialize(k):
"undefined"===typeof k?"undefined":k.toString();a[r].options.encode&&(k=encodeURIComponent(k));var n=h(r,k,-1<window.ATInternet.Utils.arrayIndexOf(g,r)),b=b+(n.paramSize+n.strSize);if(a[r].options.last)1490<k.length&&k.substr(0,1490),e=r,m=n;else if(c[r]=n,1500<c[r].paramSize+c[r].strSize&&!c[r].truncate){f=!0;p=r;break}}e&&(c[e]=m);c=[c,b,f,p];a=c[0];if(c[2])c=c[3],a=a[c],a.str=a.str.substr(0,1450),a.strSize=1450,b={},b.mherr=h("mherr","1",!1),b[c]=a,l.push(d(b,1500)[0]);else if(c=d(a,1500),null===
c[1])l=c[0];else for(l.push(c[0]);null!==c[1];)c=d(a,1500),l.push(c[0]);return l},p="";a.buffer.presentInFilters(b,"hitType")||(b=a.buffer.addInFilters(b,"hitType",["page"]));b=a.buffer.addInFilters(b,"hitType",["all"]);var l;if(c){b=a.buffer.addInFilters(b,"permanent",!0);b=a.buffer.get(b,!0);for(l in c)c.hasOwnProperty(l)&&(b[l]={value:c[l],options:{}});p=r(b)}else for(l in b=a.buffer.get(b,!0),p=r(b),b)b.hasOwnProperty(l)&&!b[l].options.permanent&&a.buffer.del(l);f&&f(p)},k=function(c){var b=a.getConfig("secure"),
f="https:"===document.location.protocol,f=b||f?a.getConfig("logSSL"):a.getConfig("log"),g=a.getConfig("baseURL"),p=a.getConfig("domain"),l=a.getConfig("pixelPath"),q=a.getConfig("site");(g||f&&p&&l)&&q?c&&c(null,(g?g:(b?"https://":"//")+f+("."+p)+l)+("?s="+q)):c&&c({message:"Config error"})},c=function(a,c,b){k(function(g,p){g?b&&b(g):n(a,c,function(a){var c=[],g=ATInternet.Utils.uuid().num(13);if(a instanceof Array)if(1===a.length)c.push(p+"&mh=1-2-"+g+a[0]);else for(var e=1;e<=a.length;e++)c.push(p+
"&mh="+e+"-"+a.length+"-"+g+a[e-1]);else c.push(p+a);b&&b(null,c)})})};b.send=function(g,e){c(g,e,function(c,g){if(c)a.emit("Tracker:Hit:Build:Error",{lvl:"ERROR",msg:c.message,details:{hits:g}});else for(var p=0;p<g.length;p++)b.sendUrl(g[p])})};b.sendUrl=function(c){var b=function(c,b){return function(){return function(l){a.emit(c,{lvl:-1===c.indexOf("Error")?"INFO":"ERROR",details:{hit:b,event:l}})}}()},f=new Image;f.onload=b("Tracker:Hit:Sent:Ok",c);f.onerror=b("Tracker:Hit:Sent:Error",c);f.src=
c}},TriggersManager=function(){function a(a,b,d){for(var c=[],m=0;m<a.length;m++)a[m].callback(b,d),a[m].singleUse||c.push(a[m]);return c}function b(a,d,k,c){var m=a.shift();if("*"===m)return d["*"]=d["*"]||[],d["*"].push({callback:k,singleUse:c}),d["*"].length-1;if(0===a.length)return b([m,"*"],d,k,c);d["*"]=d["*"]||[];d[m]=d[m]||{};return b(a,d[m],k,c)}function h(b,d,k,c){var m=d.shift();"*"!==m&&(0===d.length?h(b,[m,"*"],k,c):k[m]&&(k[m]["*"]=a(k[m]["*"],b,c),h(b,d,k[m],c)))}var d={};this.on=function(a,
n,k){k=k||!1;return b(a.split(":"),d,n,k)};this.emit=function(b,n){d["*"]&&(d["*"]=a(d["*"],b,n));h(b,b.split(":"),d,n)}},PluginsManager=function(a){var b={},h={},d=0,g={},n=0,k=this.load=function(l,f){"function"===typeof f?"undefined"===typeof a.getConfig.plgAllowed||0===a.getConfig.plgAllowed.length||-1<a.getConfig.plgAllowed.indexOf(l)?(b[l]=new f(a),h[l]&&b[l]&&(h[l]=!1,d--,b[l+"_ll"]&&c(l+"_ll"),0===d&&a.emit("Tracker:Plugin:Lazyload:File:Complete",{lvl:"INFO",msg:"LazyLoading triggers are finished"})),
a.emit("Tracker:Plugin:Load:"+l+":Ok",{lvl:"INFO"})):a.emit("Tracker:Plugin:Load:"+l+":Error",{lvl:"ERROR",msg:"Plugin not allowed",details:{}}):a.emit("Tracker:Plugin:Load:"+l+":Error",{lvl:"ERROR",msg:"not a function",details:{obj:f}});return a},c=this.unload=function(c){b[c]?(b[c]=void 0,a.emit("Tracker:Plugin:Unload:"+c+":Ok",{lvl:"INFO"})):a.emit("Tracker:Plugin:Unload:"+c+":Error",{lvl:"ERROR",msg:"not a known plugin"});return a},m=this.isLazyloading=function(a){return a?!0===h[a]:0!==d},e=
function(a){return r(a)?(f(a),!0):!1},f=function(c){h[c]=!0;d++;ATInternet.Utils.loadScript({url:a.getConfig("lazyLoadingPath")+c+".js"})},r=function(a){return!b[a]&&!m(a)&&(b[a+"_ll"]?!0:!1)},p=function(a){g[a]?g[a]++:g[a]=1;n++};this.isExecWaitingLazyloading=function(){return 0!==n};a.exec=this.exec=function(c,q,d,e){var k=null,h=function(a,c,f,l){c=c.split(".");b[a]&&b[a][c[0]]&&(k=1<c.length&&b[a][c[0]][c[1]]?b[a][c[0]][c[1]].apply(b[a],f):b[a][c[0]].apply(b[a],f));l&&l(k)},w=function(c,b,f,l){p(c);
a.onTrigger("Tracker:Plugin:Load:"+c+":Ok",function(){h(c,b,f,function(b){g[c]--;n--;0===n&&a.emit("Tracker:Plugin:Lazyload:Exec:Complete",{lvl:"INFO",msg:"All exec waiting for lazyloading are done"});l&&l(b)})},!0)};r(c)?(w(c,q,d,e),f(c)):m(c)?w(c,q,d,e):h(c,q,d,e)};this.waitForDependencies=function(c,f){var d=function(a){for(var c={mcount:0,plugins:{}},f=0;f<a.length;f++)b.hasOwnProperty(a[f])||(c.mcount++,c.plugins[a[f]]=!0);return c}(c);if(0===d.mcount)a.emit("Tracker:Plugin:Dependencies:Loaded",
{lvl:"INFO",details:{dependencies:c}}),f();else for(var p in d.plugins)d.plugins.hasOwnProperty(p)&&(a.emit("Tracker:Plugin:Dependencies:Error",{lvl:"WARNING",msg:"Missing plugin "+p}),a.onTrigger("Tracker:Plugin:Load:"+p,function(a,c){var b=a.split(":"),l=b[3];"Ok"===b[4]&&(d.plugins[l]=!1,d.mcount--,0===d.mcount&&f())},!0),e(p))};this.init=function(){for(var a in ATInternet.Tracker.pluginProtos)ATInternet.Tracker.pluginProtos.hasOwnProperty(a)&&k(a,ATInternet.Tracker.pluginProtos[a])}},CallbacksManager=
function(a){var b={};this.init=function(){if(a.getConfig("activateCallbacks")){var d=a.getConfig("callbacks");(function(){if("undefined"!==typeof d&&d.include instanceof Array)for(var a=0;a<d.include.length;a++)ATInternet.Callbacks&&ATInternet.Callbacks.hasOwnProperty(d.include[a])&&(b[d.include[a]]={"function":ATInternet.Callbacks[d.include[a]]},ATInternet.Tracker.callbackProtos[d.include[a]]||(ATInternet.Tracker.callbackProtos[d.include[a]]=b[d.include[a]]));else for(a in ATInternet.Callbacks)ATInternet.Callbacks.hasOwnProperty(a)&&
(b[a]={"function":ATInternet.Callbacks[a]},ATInternet.Tracker.callbackProtos[a]||(ATInternet.Tracker.callbackProtos[a]=b[a]));if("undefined"!==typeof d&&d.exclude instanceof Array)for(a=0;a<d.exclude.length;a++)b[d.exclude[a]]&&(b[d.exclude[a]]=void 0);for(var n in b)b.hasOwnProperty(n)&&b[n]&&h(n,b[n]["function"])})();ATInternet.Utils.addCallbackEvent(function(a){if(a.name){var b=!0;"undefined"!==typeof d&&(d.include instanceof Array&&-1===ATInternet.Utils.arrayIndexOf(d.include,a.name)&&(b=!1),
d.exclude instanceof Array&&-1!==ATInternet.Utils.arrayIndexOf(d.exclude,a.name)&&(b=!1));if(ATInternet.Callbacks&&ATInternet.Callbacks.hasOwnProperty(a.name)){var k={};k[a.name]={"function":ATInternet.Callbacks[a.name]};b&&h(a.name,k[a.name]["function"]);ATInternet.Tracker.callbackProtos[a.name]||(ATInternet.Tracker.callbackProtos[a.name]=k[a.name])}}})}};var h=this.load=function(b,g){"function"===typeof g?(new g(a),a.emit("Tracker:Callback:Load:"+b+":Ok",{lvl:"INFO",details:{obj:g}})):a.emit("Tracker:Callback:Load:"+
b+":Error",{lvl:"ERROR",msg:"not a function",details:{obj:g}});return a}},BufferManager=function(a){var b={};this.set=function(a,d,k){k=k||{};k.hitType=k.hitType||["page"];b[a]={value:d,options:k}};var h=function(a,b,d){return(a=window.ATInternet.Utils.cloneSimpleObject(a[b]))&&!d?a.value:a},d=function n(a,c){if(!(a&&c instanceof Array&&a instanceof Array))return[];if(0===a.length)return c;var d=a[0],e,f=[],r=window.ATInternet.Utils.cloneSimpleObject(a);r.shift();for(var p=0;p<c.length;p++)if("object"!==
typeof d[1])b[c[p]]&&b[c[p]].options[d[0]]===d[1]&&f.push(c[p]);else{e=d[1].length;for(var l=0;l<e;l++)if(b[c[p]]&&b[c[p]].options[d[0]]instanceof Array&&0<=window.ATInternet.Utils.arrayIndexOf(b[c[p]].options[d[0]],d[1][l])){f.push(c[p]);break}}return n(r,f)};this.get=function(a,k){var c={};if("string"===typeof a)c=h(b,a,k);else for(var m=d(a,window.ATInternet.Utils.getObjectKeys(b)),e=0;e<m.length;e++)c[m[e]]=h(b,m[e],k);return c};this.presentInFilters=function k(a,b){return a&&0!==a.length?a[0][0]===
b?!0:k(a.slice(1),b):!1};this.addInFilters=function c(a,b,f,d){if(!a||0===a.length)return d?[]:[[b,f]];var p=a[0][0],l=a[0][1];p===b&&(l instanceof Array&&!(-1<window.ATInternet.Utils.arrayIndexOf(l,f[0]))&&l.push(f[0]),d=!0);return[[p,l]].concat(c(a.slice(1),b,f,d))};this.del=function(a){b[a]=void 0};this.clear=function(){b={}}},Tag=function(a,b,h){b=b||{};var d=this;d.version="5.11.2";var g=window.ATInternet.Utils.cloneSimpleObject(b);d.triggers=new TriggersManager(d);d.emit=d.triggers.emit;d.onTrigger=
d.triggers.on;var n=window.ATInternet.Utils.cloneSimpleObject(dfltGlobalCfg)||{},k;for(k in a)a.hasOwnProperty(k)&&(n[k]=a[k]);d.getConfig=function(a){return n[a]};d.setConfig=function(a,b,e){void 0!==n[a]&&e||(d.emit("Tracker:Config:Set:"+a,{lvl:"INFO",details:{bef:n[a],aft:b}}),n[a]=b)};d.configPlugin=function(a,b,e){n[a]=n[a]||{};for(var f in b)b.hasOwnProperty(f)&&void 0===n[a][f]&&(n[a][f]=b[f]);e&&(e(n[a]),d.onTrigger("Tracker:Config:Set:"+a,function(a,c){e(c.details.aft)}));return n[a]};d.getContext=
function(a){return g[a]};d.setContext=function(a,b){d.emit("Tracker:Context:Set:"+a,{lvl:"INFO",details:{bef:g[a],aft:b}});g[a]=b};d.delContext=function(a,b){d.emit("Tracker:Context:Deleted:"+a+":"+b,{lvl:"INFO",details:{key1:a,key2:b}});if(a)g.hasOwnProperty(a)&&(b?g[a]&&g[a].hasOwnProperty(b)&&(g[a][b]=void 0):g[a]=void 0);else if(b)for(var e in g)g.hasOwnProperty(e)&&g[e]&&g[e].hasOwnProperty(b)&&(g[e][b]=void 0)};d.plugins=new PluginsManager(d);d.buffer=new BufferManager(d);d.setParam=d.buffer.set;
d.getParams=function(a){return d.buffer.get(a,!1)};d.getParam=d.buffer.get;d.delParam=d.buffer.del;d.builder=new BuildManager(d);d.sendHit=d.builder.send;d.sendUrl=d.builder.sendUrl;d.callbacks=new CallbacksManager(d);d.setParam("ts",function(){return(new Date).getTime()},{permanent:!0,hitType:["all"]});d.getConfig("disableCookie")&&d.setParam("idclient","xxxxxx-NO",{permanent:!0,hitType:["all"]});d.getConfig("medium")&&d.setParam("medium",d.getConfig("medium"),{permanent:!0,hitType:["all"]});d.plugins.init();
d.callbacks.init();ATInternet.Tracker.instances.push(d);d.emit("Tracker:Ready",{lvl:"INFO",msg:"Tracker initialized",details:{tracker:d,args:{config:a,context:b,callback:h}}});h&&h(d)};ATInternet.Tracker.Tag=Tag;ATInternet.Tracker.instances=[];ATInternet.Tracker.pluginProtos={};
ATInternet.Tracker.addPlugin=function(a,b){b=b||ATInternet.Tracker.Plugins[a];if(!ATInternet.Tracker.pluginProtos[a]){ATInternet.Tracker.pluginProtos[a]=b;for(var h=0;h<ATInternet.Tracker.instances.length;h++)ATInternet.Tracker.instances[h].plugins.load(a,b)}};ATInternet.Tracker.delPlugin=function(a){if(ATInternet.Tracker.pluginProtos[a]){ATInternet.Tracker.pluginProtos[a]=void 0;for(var b=0;b<ATInternet.Tracker.instances.length;b++)ATInternet.Tracker.instances[b].plugins.unload(a)}};
ATInternet.Tracker.callbackProtos={};
}).call(window);;(function(){var dfltPluginCfg={"lifetime":30,"lastPersistence":true,"listEventsForExec":[],"domainAttribution":true,"info":true};var dfltGlobalCfg={"visitLifetime":30,"redirectionLifetime":30};window.ATInternet.Tracker.Plugins.Campaigns=function(a){a.setConfig("visitLifetime",dfltGlobalCfg.visitLifetime,!0);a.setConfig("redirectionLifetime",dfltGlobalCfg.redirectionLifetime,!0);var b={},h,d;a.configPlugin("Campaigns",dfltPluginCfg||{},function(a){b=a});var g,n,k,c,m,e,f,r,p,l,q,u,z,y=function(b,c,f){var l=null;a.plugins.exec(b,c,f,function(a){l=a});return l},s=function(a,b){return y("Cookies",a,b)},w=function(a,b){return y("Utils",a,b)},x=function(a,b){var c=s(d,[a]);if(null!==c)return"object"===
typeof c&&!(c instanceof Array);s(h,[a,{},b]);return!0},A=function(b,c){var f=a.getContext("campaigns")||{};f[b]=c;a.setContext("campaigns",f)},v=function(y){h="set"+(b.domainAttribution?"":"Private");d="get"+(b.domainAttribution?"":"Private");g=s(d,[["atredir","gopc"]]);n=s(d,[["atredir","gopc_err"]]);k=s(d,[["atredir","camp"]]);s("del",[["atredir","gopc"]]);s("del",[["atredir","gopc_err"]]);s("del",[["atredir","camp"]]);c=s(d,[["atsession","histo_camp"]]);m=s(d,[["atreman","camp"]]);e=s(d,[["atreman",
"date"]]);var t=w("getLocation",[]);f=w("getQueryStringValue",["xtor",t]);r=w("getQueryStringValue",["xtdt",t]);p=w("getQueryStringValue",["xts",t]);l=a.getContext("forcedCampaign");q=!!a.getConfig("redirect");if(u=f&&r&&p?!0:!1)t=(new Date).getTime()/6E4,z=!q&&p!==a.getConfig("site")||0>t-r||t-r>=a.getConfig("visitLifetime")?!0:!1;t=l||k||f;q&&t&&x("atredir",{path:"/",end:a.getConfig("redirectionLifetime")})&&(s(h,[["atredir","camp"],t]),s(h,[["atredir","gopc"],l?!1:k?g:u?!0:!1]),s(h,[["atredir",
"gopc_err"],l?!1:k?n:z?!0:!1]));!q&&m&&(A("xtor",m),t=(new Date).getTime()/36E5,t=Math.floor(t-e),A("roinbh",0<=t?t:0));q||(t=void 0,t=k?g?l||t:l||k:u?l||t:l||f||t,c&&c instanceof Array&&-1<c.indexOf(t)&&(t=void 0),t&&A("xto",t));if(!q&&!l){var v;k?n&&(v=k):z&&(v=f);v&&A("pgt",v)}q||!(v=k?l||k:l||f||void 0)||!l&&!k&&u&&z||!l&&k&&g&&n||((!c||c instanceof Array&&0>c.indexOf(v))&&x("atsession",{path:"/",session:60*a.getConfig("visitLifetime")})&&s(h,[["atsession","histo_camp"],c&&c.push(v)?c:[v]]),m&&
!b.lastPersistence||!x("atreman",{path:"/",session:86400*b.lifetime})||(s(h,[["atreman","camp"],v]),s(h,[["atreman","date"],(new Date).getTime()/36E5])));a.emit("Campaigns:"+y,{lvl:"INFO"})};(function(){var b=["Cookies","Utils"];if(-1===ATInternet.Utils.arrayIndexOf(a.getConfig("plgs"),"BackwardCompat"))a.plugins.waitForDependencies(b,function(){v("process2:done")});else a.onTrigger("BackCampaigns:process2:done",function(c,f){a.plugins.waitForDependencies(b,function(){v("process1:done")})},!0)})()};
window.ATInternet.Tracker.addPlugin("Campaigns");
}).call(window);;(function(){var dfltPluginCfg={"info":true};var dfltGlobalCfg={};window.ATInternet.Tracker.Plugins.Clicks=function(a){var b=function(a){var b="";switch(a){case "exit":b="S";break;case "download":b="T";break;case "action":b="A";break;case "navigation":b="N"}return b},h=function(b){var d=b.name;a.exec("Utils","manageChapters",[b,"chapter",3],function(a){d=a+(d?d:"")});return d},d=function(d){var n={p:h(d),s2:d.level2||"",click:b(d.type)||""},k=a.getContext("page")||{};n.pclick=h(k);n.s2click=k.level2||"";d.customObject&&a.exec("Utils","customObjectToString",[d.customObject],
function(a){n.stc=a});a.sendHit(n,[["hitType",["click"]]])};a.click={};a.clickListener=this.clickListener={};a.click.send=this.send=function(b){var n=!0;a.plugins.exec("TechClicks","manageClick",[b.elem,b.event,b.callback],function(a){n=a});d(b);return n};a.clickListener.send=this.clickListener.send=function(b){if(b.elem){var n;a.plugins.exec("TechClicks","isFormSubmit",[b.elem],function(a){n=a?"submit":"click"});ATInternet.Utils.addEvtListener(b.elem,n,function(k){a.plugins.exec("TechClicks","manageClick",
[b.elem,k,b.callback]);d(b)})}};a.click.set=this.set=function(d){a.dispatchSubscribe("click");a.setContext("click",{name:h(d),level2:d.level2||"",customObject:d.customObject});a.setParam("click",b(d.type)||"",{hitType:["click"]})};a.click.onDispatch=this.onDispatch=function(){var b={hitType:["click"]};a.setParam("p",a.getContext("click").name,b);a.setParam("s2",a.getContext("click").level2,b);var d=a.getContext("click").customObject;d&&a.setParam("stc",d,{hitType:["click"],encode:!0});d=a.getContext("page")||
{};a.setParam("pclick",h(d),b);a.setParam("s2click",d.level2||"",b);a.sendHit(null,[["hitType",["click"]]]);a.setContext("click",void 0)}};window.ATInternet.Tracker.addPlugin("Clicks");
}).call(window);;(function(){var dfltPluginCfg={"clientSideMode":"always","userIdCookieDuration":397,"userIdExpirationMode":"fixed","optOut":"OPT-OUT","userIdCookieName":"atuserid","optOutCookieName":"atoptedout","info":true};var dfltGlobalCfg={};window.ATInternet.Tracker.Plugins.ClientSideUserId=function(a){var b={},h=void 0,d=null,g=-1,n=!1;a.configPlugin("ClientSideUserId",dfltPluginCfg||{},function(a){b=a});var k=function(){h=a.getContext("userIdentifier");a.exec("Cookies","get",["atuserid"],function(a){d=a})},c=function(b,c,f){a.setParam("idclient",b,{permanent:!0,hitType:["all"]});m(f,b,c)},m=function(c,f,q){if("relative"===b.userIdExpirationMode||"fixed"===b.userIdExpirationMode&&null===d||q){var e=new Date;e.setTime(e.getTime()+864E5*
b.userIdCookieDuration);a.exec("Cookies","set",[c,f,{end:e,path:"/"}]);a.exec("Cookies","get",[c,!0],function(b){q||f===b||a.setParam("idclient",f+"-NO",{permanent:!0,hitType:["all"]})})}},e=function(){var c=!1,f=null,q=ATInternet.Utils.optedOut;!1===q&&(a.exec("Cookies","set",["atoptedout",null,{path:"/"}]),a.getParam("idclient")===b.optOut&&a.delParam("idclient"));a.exec("Cookies","get",["atoptedout",!0],function(a){f=a});if(!0===q||f===b.optOut)c=!0;c&&(ATInternet.Utils.optedOut=!0);return c},
f=function(a){a&&(a=a.detail)&&"clientsideuserid"===a.name&&a.id===g&&r()},r=function(){k();var f,l=!1;if("required"===b.clientSideMode){if(f=navigator.userAgent,/Safari/.test(f)&&!/Chrome/.test(f)||/iPhone|iPod|iPad/.test(f))l=!0}else"always"===b.clientSideMode&&(l=!0);f=l;l="undefined"!==typeof h;n=e();if(f||l||n){var q="";f=!1;var u=b.userIdCookieName;n?(q=b.optOut,f=!0,u=b.optOutCookieName):l?(q=h,f=!0):q=null!==d?d:ATInternet.Utils.uuid().v4();c(q,f,u)}a.emit("ClientSideUserId:Ready",{lvl:"INFO",
details:{clientSideMode:b.clientSideMode,userIdCookieDuration:b.userIdCookieDuration,userIdExpirationMode:b.userIdExpirationMode,userIdFromContext:h,userIdFromCookie:d,userId:q}})};(function(){a.plugins.waitForDependencies(["Cookies"],function(){var a=ATInternet.Utils.uuid();g=parseInt(a.num(8));ATInternet.Utils.removeOptOutEvent(f);ATInternet.Utils.addOptOutEvent(f,g);r()})})();a.clientSideUserId={};a.clientSideUserId.set=function(a){var f=b.userIdCookieName;n&&(a=b.optOut,f=b.optOutCookieName);
c(a,!0,f)}};window.ATInternet.Tracker.addPlugin("ClientSideUserId");
}).call(window);;(function(){var dfltPluginCfg={"domainAttribution":true,"info":true};var dfltGlobalCfg={"redirectionLifetime":30};window.ATInternet.Tracker.Plugins.ContextVariables=function(a){var b="",h=null,d,g="",n="",k={};a.configPlugin("ContextVariables",dfltPluginCfg||{},function(a){k=a});a.setConfig("redirectionLifetime",dfltGlobalCfg.redirectionLifetime,!0);var c=function(b,c,f){var d=null;a.plugins.exec(b,c,f,function(a){d=a});return d},m=function(a,b){return c("Utils",a,b)},e=function(b,c){var f=null;a.plugins.exec("Cookies",b,c,function(a){f=a});return f},f=function(){a.setParam("hl",function(){var a=new Date;return a.getHours()+
"x"+a.getMinutes()+"x"+a.getSeconds()},{permanent:!0,hitType:["all"]})},r=function(a){var c="",c=d?d:"acc_dir"===b?"":null!=b?b:"acc_dir"===h?"":h?h:a.referrer;return c.replace(/[<>]/g,"").substring(0,1600).replace(/&/g,"$")};a.plugins.waitForDependencies(["Cookies","Utils"],function(){g="set"+(k.domainAttribution?"":"Private");n="get"+(k.domainAttribution?"":"Private");var c=m("getLocation",[]);b=m("getQueryStringValue",["xtref",c]);void 0===b&&(b="");d=a.getContext("forcedReferer");if(a.getConfig("redirect")){var c=
m("getDocumentLevel",[]),c=d?d:null!=b?b:c.referrer||"acc_dir",l;if(l=c){l={path:"/",end:a.getConfig("redirectionLifetime")};var q=e(n,["atredir"]);null!==q?l="object"===typeof q&&!(q instanceof Array):(e(g,["atredir",{},l]),l=!0)}l&&e(g,[["atredir","ref"],c])}else{h=e(n,[["atredir","ref"]]);e("del",[["atredir","ref"]]);a.setParam("vtag",a.version,{permanent:!0,hitType:["all"]});a.setParam("ptag","js",{permanent:!0,hitType:["all"]});c="";try{c+=window.screen.width+"x"+window.screen.height+"x"+window.screen.pixelDepth+
"x"+window.screen.colorDepth}catch(u){}a.setParam("r",c,{permanent:!0,hitType:["all"]});c="";window.innerWidth?c+=window.innerWidth+"x"+window.innerHeight:document.body&&document.body.offsetWidth&&(c+=document.body.offsetWidth+"x"+document.body.offsetHeight);a.setParam("re",c,{permanent:!0,hitType:["all"]});f();a.setParam("lng",navigator.language||navigator.userLanguage,{permanent:!0,hitType:["all"]});c=ATInternet.Utils.uuid().num(13);a.setParam("idp",c,{permanent:!0,hitType:["page","clickzone"]});
a.setParam("jv",navigator.javaEnabled()?"1":"0",{hitType:["page"]});c=m("getDocumentLevel",[]);a.setParam("ref",r(c),{permanent:!0,last:!0,hitType:["page"]})}a.emit("ContextVariables:Ready",{lvl:"INFO"})})};window.ATInternet.Tracker.addPlugin("ContextVariables");
}).call(window);;(function(){var dfltPluginCfg={"info":false};var dfltGlobalCfg={};window.ATInternet.Tracker.Plugins.Cookies=function(a){var b={},h={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(a){var b="",c,f,d,e,p,k,m=0;for(a=h._utf8_encode(a);m<a.length;)c=a.charCodeAt(m++),f=a.charCodeAt(m++),d=a.charCodeAt(m++),e=c>>2,c=(c&3)<<4|f>>4,p=(f&15)<<2|d>>6,k=d&63,isNaN(f)?p=k=64:isNaN(d)&&(k=64),b=b+this._keyStr.charAt(e)+this._keyStr.charAt(c)+this._keyStr.charAt(p)+this._keyStr.charAt(k);return b},decode:function(a){var b="",c,f,d,
e,p,k=0;for(a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");k<a.length;)c=this._keyStr.indexOf(a.charAt(k++)),f=this._keyStr.indexOf(a.charAt(k++)),e=this._keyStr.indexOf(a.charAt(k++)),p=this._keyStr.indexOf(a.charAt(k++)),c=c<<2|f>>4,f=(f&15)<<4|e>>2,d=(e&3)<<6|p,b+=String.fromCharCode(c),64!=e&&(b+=String.fromCharCode(f)),64!=p&&(b+=String.fromCharCode(d));return b=h._utf8_decode(b)},_utf8_encode:function(a){a=a.replace(/\r\n/g,"\n");for(var b="",c=0;c<a.length;c++){var f=a.charCodeAt(c);128>f?b+=String.fromCharCode(f):
(127<f&&2048>f?b+=String.fromCharCode(f>>6|192):(b+=String.fromCharCode(f>>12|224),b+=String.fromCharCode(f>>6&63|128)),b+=String.fromCharCode(f&63|128))}return b},_utf8_decode:function(a){for(var b="",c=0,f,d,e;c<a.length;)f=a.charCodeAt(c),128>f?(b+=String.fromCharCode(f),c++):191<f&&224>f?(d=a.charCodeAt(c+1),b+=String.fromCharCode((f&31)<<6|d&63),c+=2):(d=a.charCodeAt(c+1),e=a.charCodeAt(c+2),b+=String.fromCharCode((f&15)<<12|(d&63)<<6|e&63),c+=3);return b}},d=this.getCookie=function(b){return!a.getConfig("disableCookie")&&
b&&"string"===typeof b&&(b=RegExp("(?:^| )"+b+"=([^;]+)").exec(document.cookie)||null)?(b=b[1],b=a.getConfig("base64Storage")?h.decode(b):decodeURIComponent(b),b):null},g=this.setCookie=function(b,c,f){if(!a.getConfig("disableCookie")&&b&&"string"===typeof b&&"string"===typeof c){var d=a.getConfig("cookieDomain");b+="=";c=a.getConfig("base64Storage")?h.encode(c):encodeURIComponent(c);c=b+c;b=!1;if(f){b=f.secure;var e=f.end,p=f.domain;f=f.path;c+=e?"function"===typeof e.toGMTString?";expires="+e.toGMTString():
"number"===typeof e?";max-age="+e.toString():"":"";c=c+(d||p?";domain="+(p?p:d):"")+(f&&"string"===typeof f?";path="+f:"")}d=a.getConfig("cookieSecure")||b;c+=d&&"boolean"===typeof d?";secure":"";document.cookie=c;return!0}return null},n=function(a){var b=null;(a=d(a))&&(b=ATInternet.Utils.jsonParse(a));return b},k=function(a){return g(a.name,ATInternet.Utils.jsonSerialize(a),a.options)?a:null},c=function(a,c,f){var d=null;if(!f&&b[a])d=b[a];else if(d=n(a))d.options.session&&k(d),b[a]=d;return d?
c?(a=null,!d||"object"!==typeof d.val||d.val instanceof Array||void 0===d.val[c]||(a=d.val[c]),a):d.val:null},m=function(a,c,f,d){var e=null;if(c){if(e=n(a))d=e,!d||"object"!==typeof d.val||d.val instanceof Array?e=null:(d.val[c]=f,e=d),e&&(e=k(e))}else c=d=d||{},d={},d.name=a,d.val=f,c.session&&"number"===typeof c.session&&(c.end=c.session),d.options=c,e=k(d);e&&(b[a]=e);return e?e.val:null},e=function(a,c){c?m(a,c,void 0):(b[a]=void 0,g(a,"",{end:0}))},f=this.get=function(a,b){b=b||!1;return a instanceof
Array&&2===a.length?c(a[0],a[1],b):c(a,void 0,b)};this.getPrivate=function(b,c){c=c||!1;b instanceof Array?b[0]+=a.getConfig("site"):b+=a.getConfig("site");return f(b,c)};var r=this.set=function(a,b,c){return a instanceof Array?m(a[0],a[1],b):m(a,null,b,c)};this.setPrivate=function(b,c,f){b instanceof Array?b[0]+=a.getConfig("site"):b+=a.getConfig("site");return r(b,c,f)};var p=this.del=function(a){return a instanceof Array?e(a[0],a[1]):e(a)};this.delPrivate=function(b){b instanceof Array?b[0]+=a.getConfig("site"):
b+=a.getConfig("site");return p(b)};this.cacheInvalidation=function(){b={}}};window.ATInternet.Tracker.addPlugin("Cookies");
}).call(window);;(function(){var dfltPluginCfg={"lifetime":182,"domainAttribution":true,"info":true};var dfltGlobalCfg={"redirectionLifetime":30};window.ATInternet.Tracker.Plugins.IdentifiedVisitor=function(a){var b=null,h=null,d=null,g=null,n="",k="",c=null,m=null,e="",f="",r={};a.configPlugin("IdentifiedVisitor",dfltPluginCfg||{},function(a){r=a});a.setConfig("redirectionLifetime",dfltGlobalCfg.redirectionLifetime,!0);var p=function(b,c,f){var d=null;a.plugins.exec(b,c,f,function(a){d=a});return d},l=function(a,b){return p("Utils",a,b)},q=function(b,c){var f=null;a.plugins.exec("Cookies",b,c,function(a){f=a});return f},u=function(a,b){var c=
q(f,[a]);if(null!==c)return"object"===typeof c&&!(c instanceof Array);q(e,[a,{},b]);return!0},z=function(){var f=function(a,b){/-/.test(b)?(a.category=b.split("-")[0],a.id=b.split("-")[1]):a.id=b},e={category:"",id:""};f(e,k||m);var q={category:"",id:""};f(q,n||c);q.id?(q.category&&s("ac",q.category),s("at",q.id)):b&&a.setParam("at",b,{hitType:["all"],permanent:!0});e.id?(e.category&&s("ac",e.category),s("an",e.id)):h&&a.setParam("anc",d+"-"+h,{hitType:["all"],permanent:!0})},y=function(a,b){u("atidvisitor",
{path:"/",session:86400*r.lifetime})&&q(e,[["atidvisitor",a],b])},s=function(b,c){a.setParam(b,c,{hitType:["all"],permanent:!0});y(b,c)};a.plugins.waitForDependencies(["Cookies","Utils"],function(){e="set"+(r.domainAttribution?"":"Private");f="get"+(r.domainAttribution?"":"Private");var p=l("getLocation",[]);n=l("getQueryStringValue",["xtat",p]);k=l("getQueryStringValue",["xtan",p]);a.getConfig("redirect")?(n||k)&&u("atredir",{path:"/",end:a.getConfig("redirectionLifetime")})&&(k&&q(e,[["atredir",
"an"],k]),n&&q(e,[["atredir","at"],n])):(c=q(f,[["atredir","at"]]),m=q(f,[["atredir","an"]]),q("del",[["atredir","at"]]),q("del",[["atredir","an"]]),b=q(f,[["atidvisitor","at"]]),h=q(f,[["atidvisitor","an"]]),d=q(f,[["atidvisitor","ac"]]),g=q(f,[["atidvisitor","vrn"]]),z(),p="-"+a.getConfig("site")+"-",RegExp(p).test(g)||(g=(g||"")+p,y("vrn",g),p=a.getContext("page")||{},p.vrn=1,a.setContext("page",p)));a.emit("IdentifiedVisitor:Ready",{lvl:"INFO",details:{cookieRedirectTextual:c,cookieRedirectNumeric:m,
cookieTextual:b,cookieNumeric:h,cookieCategory:d,cookieVrn:g}})});a.identifiedVisitor={};a.identifiedVisitor.set=this.set=function(a){var b=a.id;a=a.category;"number"===typeof b?s("an",b.toString()):s("at",b);"undefined"!==typeof a&&s("ac",a)};a.identifiedVisitor.unset=this.unset=function(){for(var b=["an","at","ac"],c=0;c<b.length;c++)a.exec("Cookies","set",[["atidvisitor",b[c]],void 0]),a.delParam(b[c]);a.delParam("anc")}};window.ATInternet.Tracker.addPlugin("IdentifiedVisitor");
}).call(window);;(function(){var dfltPluginCfg={"urlKeyword":"","urlResultPageNumber":"","urlResultPosition":"","info":true};var dfltGlobalCfg={};window.ATInternet.Tracker.Plugins.InternalSearch=function(a){var b={};a.configPlugin("InternalSearch",dfltPluginCfg||{},function(a){b=a});var h=function(b){var g={np:"undefined"!==typeof b.resultPageNumber?b.resultPageNumber:"1",click:"IS"};b.hasOwnProperty("keyword")&&(g.mc=b.keyword);b.hasOwnProperty("resultPosition")&&(g.mcrg=b.resultPosition);a.sendHit(g,[["hitType",["InternalSearch"]]])};a.internalSearch={};a.internalSearch.set=this.set=function(b){var g={},h=g;b.hasOwnProperty("keyword")&&(h.keyword=
b.keyword);h=g;b.hasOwnProperty("resultPageNumber")&&(h.resultPageNumber=b.resultPageNumber);b=a.getContext("InternalSearch")||{};g=ATInternet.Utils.completeFstLevelObj(g,b);"undefined"===typeof g.resultPageNumber&&(g.resultPageNumber="1");a.setContext("InternalSearch",g)};a.internalSearch.send=this.send=function(b){var g=!0;a.plugins.exec("TechClicks","manageClick",[b.elem,b.event,b.callback],function(a){g=a});h(b);return g};a.plugins.waitForDependencies(["Utils"],function(){var d;if(b.urlKeyword){var g=
document.location.href;d={};a.plugins.exec("Utils","getQueryStringValue",[b.urlKeyword,g],function(h){h&&(d.keyword=h);b.urlResultPageNumber&&a.plugins.exec("Utils","getQueryStringValue",[b.urlResultPageNumber,g],function(a){d.resultPageNumber=a||"1"})})}d&&a.setContext("InternalSearch",d);a.emit("InternalSearch:Ready",{lvl:"INFO",details:{config:{urlKeyword:b.urlKeyword,urlResultPageNumber:b.urlResultPageNumber},url:g,data:d}})})};window.ATInternet.Tracker.addPlugin("InternalSearch");
}).call(window);;(function(){var dfltPluginCfg={"info":true};var dfltGlobalCfg={};window.ATInternet.Tracker.Plugins.MvTesting=function(a){var b=0,h=function(a,b){var d="";a.hasOwnProperty(b)&&(d=a[b],d=void 0===d?"":d+"");return d},d=function(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0},g=function(a){return"object"===typeof a&&!(a instanceof Array)},n=function(b){var c=b.name;a.exec("Utils","manageChapters",[b,"chapter",3],function(a){c=a+(c?c:"")});return c};a.mvTesting={};a.mvTesting.set=function(b){if(g(b)&&!d(b)){a.dispatchSubscribe("mvTesting");var c=h(b,"test"),
m=h(b,"waveId");b=h(b,"creation");a.setParam("abmvc",c+"-"+m+"-"+b,{hitType:["mvtesting"]})}};a.mvTesting.add=function(k){if(g(k)&&!d(k)){a.dispatchSubscribe("mvTesting");var c=h(k,"variable");k=h(k,"version");b++;a.setParam("abmv"+b,c+"-"+k,{hitType:["mvtesting"]})}};a.mvTesting.onDispatch=function(){var b=a.getContext("page")||{};a.setParam("p",n(b),{hitType:["mvtesting"]});a.setParam("s2",b.level2||"",{hitType:["mvtesting"]});a.setParam("type","mvt",{hitType:["mvtesting"]});a.sendHit(null,[["hitType",
["mvtesting"]]])}};window.ATInternet.Tracker.addPlugin("MvTesting");
}).call(window);;(function(){var dfltPluginCfg={"storageCapacity":1,"storageMode":"required","timeout":500,"info":true};var dfltGlobalCfg={};window.ATInternet.Tracker.Plugins.Offline=function(a){var b={};a.configPlugin("Offline",dfltPluginCfg||{},function(a){b=a});var h=function(){var a=localStorage.getItem("ATOffline"),b={hits:[],length:0};if(a){var d=ATInternet.Utils.jsonParse(a)||{hits:[]};b.hits=d.hits;b.length=a.length}return b},d=function(a){try{localStorage.setItem("ATOffline",ATInternet.Utils.jsonSerialize(a))}catch(b){}},g=function(){return h().hits},n=function(c){if(navigator.onLine){var m=g();if(0<m.length){var e=m.shift();
d({hits:m});a.onTrigger("Tracker:Hit:Sent:Ok",function(a,b){n(c)},!0);a.onTrigger("Tracker:Hit:Sent:Error",function(){n(c)},!0);a.sendUrl(e)}else if(c){var f=null;a.plugins.exec("Utils","getQueryStringValue",["a",c],function(a){f=a});f?setTimeout(function(){a.sendUrl(c)},b.timeout):a.sendUrl(c)}}},k=function(c){a.builder.sendUrl=function(a){if(c||!navigator.onLine){if(a){a=a.split(/&ref=\.*/i);var e="&cn=offline&olt="+String(Math.floor((new Date).getTime()/1E3));a=a[0]+e+"&ref="+(a[1]||"")}var e=
h(),f=a.length,g=!0;if(4*((e.length||11)+f)>1048576*b.storageCapacity){var g=!1,p=e.hits.shift();if("undefined"!==typeof p)for(var g=!0,l=p.length;l<f;)if(p=e.hits.shift(),"undefined"!==typeof p)l+=p.length;else{g=!1;break}}g&&(e.hits.push(a),d({hits:e.hits}))}else n(a)}};a.offline={};a.offline.getLength=function(){return 4*h().length};a.offline.remove=function(){d({hits:[]})};a.offline.get=g;a.offline.send=function(){n(null)};a.plugins.waitForDependencies(["Utils"],function(){var c;try{var d=window.localStorage;
d.setItem("__storage_test__","__storage_test__");d.removeItem("__storage_test__");c=!0}catch(e){c=!1}d=navigator.onLine;c&&"undefined"!==typeof d&&("required"===b.storageMode?k(!1):"always"===b.storageMode&&k(!0));a.emit("Offline:Ready",{lvl:"INFO",details:{isLocalStorageAvailable:c,storageMode:b.storageMode,isOnline:d}})})};window.ATInternet.Tracker.addPlugin("Offline");
}).call(window);;(function(){var dfltPluginCfg={"info":true};var dfltGlobalCfg={};window.ATInternet.Tracker.Plugins.OnSiteAds=function(a){var b="",h=function(b){var c=b.name;a.exec("Utils","manageChapters",[b,"chapter",3],function(a){c=a+(c?c:"")});return c},d=function(a,b){return a[b]?a[b]:""},g=function(a,b){var c=d(a,b);if(c){var e=d(a,"prefix");if(c.campaignId){var e=e||"PUB",q=d(c,"campaignId"),g=d(c,"creation"),k=d(c,"variant"),m=d(c,"format"),h=d(c,"generalPlacement"),n=d(c,"detailedPlacement"),x=d(c,"advertiserId"),c=d(c,"url");return e+"-"+q+"-"+g+"-"+k+"-"+m+"-"+h+"-"+
n+"-"+x+"-"+c}if(c.adId)return e=e||"INT",q=d(c,"adId"),g=d(c,"format"),c=d(c,"productId"),e+"-"+q+"-"+g+"||"+c}},n=function(b){var c=a.getContext("page")||{};a.sendHit({atc:g(b,"click"),type:"AT",patc:h(c),s2atc:c.level2||"",stc:b.customObject||""},[["hitType",["onSiteAdsClick"]]])},k=function(b){a.sendHit({ati:g(b,"impression"),type:"AT",stc:b.customObject||""},[["hitType",["onSiteAdsImpression"]]])},c=function(b,c){var d=a.buffer.get("ati",!0)||{};d.value="string"===typeof d.value?[d.value]:d.value||
[];d.options=d.options||{hitType:[c,"page"]};d.value.push(b);a.buffer.set("ati",d.value,d.options)},m=function(b,c){b.click?a.setParam("atc",g(b,"click"),{hitType:[c,"page"]}):b.impression&&a.setParam("ati",g(b,"impression"),{hitType:[c,"page"]});if(b.customObject){a.setContext("onsiteads",{customObject:b.customObject});var d=a.getContext("page")||{};d.customObject=ATInternet.Utils.completeFstLevelObj(d.customObject,b.customObject,!1);a.setContext("page",d)}a.dispatchSubscribe("onSiteAds")};a.selfPromotion=
this.selfPromotion={};a.publisher=this.publisher={};a.publisher.set=this.publisher.set=function(a){m(a,"publisher")};a.selfPromotion.set=this.selfPromotion.set=function(a){m(a,"selfPromotion")};a.publisher.add=this.publisher.add=function(b){c(g(b,"impression"),"publisher");a.dispatchSubscribe("onSiteAds")};a.selfPromotion.add=this.selfPromotion.add=function(b){c(g(b,"impression"),"selfPromotion");a.dispatchSubscribe("onSiteAds")};var e=this.advertEvent=function(b){var c=!0;a.exec("TechClicks","manageClick",
[b.elem,b.event,b.callback],function(a){c=a});b.click?n(b):b.impression&&k(b);return c};a.publisher.send=this.publisher.send=function(a){return e(a)};a.selfPromotion.send=this.selfPromotion.send=function(a){return e(a)};a.onSiteAds={};a.onSiteAds.onDispatch=this.onDispatch=function(){if(!a.dispatchSubscribed("page")){var b=a.getContext("page")||{};a.setParam("type","AT",{hitType:["publisher","selfPromotion"]});a.getParam("atc")&&(a.setParam("patc",h(b),{hitType:["publisher","selfPromotion"]}),a.setParam("s2atc",
b.level2||"",{hitType:["publisher","selfPromotion"]}));(b=a.getContext("onsiteads"))&&b.customObject&&a.setParam("stc",b.customObject,{encode:!0,hitType:["publisher","selfPromotion"]});a.sendHit(null,[["hitType",["publisher","selfPromotion"]]])}};a.plugins.waitForDependencies(["Utils","TechClicks"],function(){b=document.location.href;a.plugins.exec("Utils","getQueryStringValue",["xtatc",b],function(b){b&&a.setParam("atc",b,{hitType:["publisher","selfPromotion","page"]})});a.emit("OnSiteAds:Ready",
{lvl:"INFO",details:{href:b}})})};window.ATInternet.Tracker.addPlugin("OnSiteAds");
}).call(window);;(function(){var dfltPluginCfg={"info":true};var dfltGlobalCfg={};window.ATInternet.Tracker.Plugins.Page=function(a){var b=["pageId","chapterLabel","update"],h=["pid","pchap","pidt"],d=["page","site"],g=["f","x"],n=function(b){var c=b.name;a.exec("Utils","manageChapters",[b,"chapter",3],function(a){c=a+(c?c:"")});return c},k=function(a,b,c){b?a=b:a||"undefined"===typeof c||(a=c);return a},c=function(a,b,c){b.hasOwnProperty(c)&&(a[c]=k(a[c],b[c]))},m=function(b){if(!ATInternet.Utils.isPreview()||a.getConfig("preview"))ATInternet.Utils.isPrerender(function(a){b(a)})||
b()},e=function(b,c,f){if(c)for(var e=0;e<d.length;e++)if(c.hasOwnProperty(d[e])&&c[d[e]])for(var l in c[d[e]])c[d[e]].hasOwnProperty(l)&&(f?b[g[e]+l]=c[d[e]][l]:a.setParam(g[e]+l,c[d[e]][l]))},f=function(c,f,d){if(f){a.exec("Utils","manageChapters",[f,"chapter",3],function(a){a&&(f.chapterLabel=a.replace(/::$/gi,""))});for(var e=0;e<h.length;e++)f.hasOwnProperty(b[e])&&(d?c[h[e]]=f[b[e]]:a.setParam(h[e],f[b[e]]))}},r=function(b,c,f){if(c&&c.keywords instanceof Array){var d=c.keywords.length;if(0<
d){for(var e="",g=0;g<d;g++)e+="["+c.keywords[g]+"]"+(g<d-1?"|":"");f?b.tag=e:a.setParam("tag",e)}}},p=function(b,c,f){if(c){var d,e=function(a){return a?a:"0"};d=""+(e(c.category1)+"-");d+=e(c.category2)+"-";d+=e(c.category3);f?b.ptype=d:a.setParam("ptype",d)}},l=function(b,c,f){if(c)for(var d in c)c.hasOwnProperty(d)&&"undefined"!==typeof c[d]&&(f?b[d]=c[d]:a.setParam(d,c[d]))};a.customVars=this.customVars={};a.customVars.set=this.customVars.set=function(b){var c=a.getContext("page")||{},f=c.customVars;
if(f){if(b)for(var d in b)b.hasOwnProperty(d)&&(f[d]=ATInternet.Utils.completeFstLevelObj(f[d],b[d],!0))}else f=b;c.customVars=f;a.setContext("page",c)};a.dynamicLabel=this.dynamicLabel={};a.dynamicLabel.set=this.dynamicLabel.set=function(b){var c=a.getContext("page")||{};c.dynamicLabel=ATInternet.Utils.completeFstLevelObj(c.dynamicLabel,b,!0);a.setContext("page",c)};a.tags=this.tags={};a.tags.set=this.tags.set=function(b){var c=a.getContext("page")||{};c.tags=ATInternet.Utils.completeFstLevelObj(c.tags,
b,!0);a.setContext("page",c)};a.customTreeStructure=this.customTreeStructure={};a.customTreeStructure.set=this.customTreeStructure.set=function(b){var c=a.getContext("page")||{};c.customTreeStructure=ATInternet.Utils.completeFstLevelObj(c.customTreeStructure,b,!0);a.setContext("page",c)};a.page={};a.page.reset=this.reset=function(){a.setContext("page",void 0)};a.page.set=this.set=function(b){a.dispatchSubscribe("page");var f=a.getContext("page")||{};f.name=k(f.name,b.name,"");f.level2=k(f.level2,
b.level2,"");c(f,b,"chapter1");c(f,b,"chapter2");c(f,b,"chapter3");f.customObject=ATInternet.Utils.completeFstLevelObj(f.customObject,b.customObject,!0);a.setContext("page",f)};a.page.send=this.send=function(b){var d={p:n(b),s2:b.level2||""},g=!0,h=b.customObject;if(h){var s=a.getParam("stc",!0);if(s&&s.options.permanent){var w=s?s.options.hitType:[],x=ATInternet.Utils.arrayIndexOf;if(-1!=x(w,"page")||-1!=x(w,"all"))h=ATInternet.Utils.completeFstLevelObj(s.value||{},h,!0)}a.exec("Utils","customObjectToString",
[h],function(a){d.stc=a})}h=a.getContext("page")||{};h.vrn&&(d.vrn=h.vrn,h.vrn=void 0,a.setContext("page",h));s=a.getContext("InternalSearch")||{};"undefined"!=typeof s.keyword&&(d.mc=ATInternet.Utils.cloneSimpleObject(s.keyword),"undefined"!=typeof s.resultPageNumber&&(d.np=ATInternet.Utils.cloneSimpleObject(s.resultPageNumber)),a.setContext("InternalSearch",void 0));ATInternet.Utils.isPreview()&&a.getConfig("preview")&&(d.pvw=1);e(d,b.customVars,!0);f(d,b.dynamicLabel,!0);r(d,b.tags,!0);p(d,b.customTreeStructure,
!0);s=a.getContext("campaigns")||{};l(d,s,!0);a.setContext("campaigns",void 0);a.exec("TechClicks","manageClick",[b.elem,b.event,b.callback],function(a){g=a});m(function(){a.sendHit(d)});h.name=k(h.name,b.name,"");h.level2=k(h.level2,b.level2,"");c(h,b,"chapter1");c(h,b,"chapter2");c(h,b,"chapter3");a.setContext("page",h);return g};a.page.onDispatch=this.onDispatch=function(){var b=a.getContext("page")||{},c=a.getContext("InternalSearch")||{};a.setParam("p",n(b));a.setParam("s2",b.level2||"");b.vrn&&
(a.setParam("vrn",b.vrn),b.vrn=void 0,a.setContext("page",b));"undefined"!=typeof c.keyword&&(a.setParam("mc",ATInternet.Utils.cloneSimpleObject(c.keyword)),"undefined"!=typeof c.resultPageNumber&&a.setParam("np",ATInternet.Utils.cloneSimpleObject(c.resultPageNumber)),a.setContext("InternalSearch",void 0));ATInternet.Utils.isPreview()&&a.getConfig("preview")&&a.setParam("pvw",1);e(null,b.customVars,!1);f(null,b.dynamicLabel,!1);r(null,b.tags,!1);p(null,b.customTreeStructure,!1);c=a.getContext("campaigns")||
{};l(null,c,!1);a.setContext("campaigns",void 0);var b=b.customObject,d=[["hitType",["page"]]];if(b)if(c=a.getParam("stc",!0)){var g=c.options.hitType||[],k=ATInternet.Utils.arrayIndexOf,k=-1!=k(g,"page")||-1!=k(g,"all"),g=c.options.permanent;k?(k=ATInternet.Utils.cloneSimpleObject(c),k.value=ATInternet.Utils.completeFstLevelObj(k.value||{},b,!0),a.setParam("stc",k.value,{encode:!0}),m(function(){a.sendHit(null,d)}),g&&a.setParam("stc",c.value,c.options)):(a.setParam("stc",b,{encode:!0}),m(function(){a.sendHit(null,
d)}),a.setParam("stc",c.value,c.options))}else a.setParam("stc",b,{encode:!0}),m(function(){a.sendHit(null,d)});else m(function(){a.sendHit(null,d)})}};window.ATInternet.Tracker.addPlugin("Page");
}).call(window);;(function(){var dfltPluginCfg={"info":true};var dfltGlobalCfg={};window.ATInternet.Tracker.Plugins.RichMedia=function(a){var b=new function(){this._timeout={};this.setTimeout=function(b,c,d){this._timeout[b]=this._timeout[b]||{};window.clearTimeout(this._timeout[b][c]);this._timeout[b][c]=window.setTimeout(function(){a.richMedia.send({action:"refresh",playerId:b,mediaLabel:c})},1E3*d)};this.setTimeoutObject=function(b,c,d,e){this._timeout[b]=this._timeout[b]||{};if("undefined"===typeof this._timeout[b][c]){var g=[],h;for(h in d)d.hasOwnProperty(h)&&g.push({delay:k(h,
0),refresh:k(d[h],5)});g.sort(function(a,b){return a.delay<b.delay?-1:a.delay>b.delay?1:0});this._timeout[b][c]={arrObj:g,arrObjSave:ATInternet.Utils.cloneSimpleObject(g)}}d=this._timeout[b][c];if(0<d.arrObj.length&&(g=d.arrObj[0].delay,h=d.arrObj[0].refresh,"number"===typeof g&&"number"===typeof h&&0<h)){d[g]=d[g]||{};var m=void 0;"undefined"!==typeof d.arrObj[1]&&(m=d.arrObj[1].delay);var n=0;"undefined"===typeof m?n=1:"number"===typeof d[g].num?n="refresh"===e?Math.max(d[g].num-1,0):d[g].num:"number"===
typeof m&&(n=Math.floor(60*(m-g)/h)-1);d[g].num=n;window.clearTimeout(d[g].timeout);0<n?d[g].timeout=window.setTimeout(function(){a.richMedia.send({action:"refresh",playerId:b,mediaLabel:c})},1E3*h):(d[g].num=void 0,d[g].timeout=void 0,d.arrObj.splice(0,1),window.setTimeout(function(){a.richMedia.send({action:"refresh",playerId:b,mediaLabel:c})},1E3*h));this._timeout[b][c]=d}};this.clearTimeout=function(a,b,c){this._timeout[a]=this._timeout[a]||{};if("object"===typeof this._timeout[a][b]){for(var d in this._timeout[a][b])if(this._timeout[a][b].hasOwnProperty(d)){var e=
this._timeout[a][b][d].num;"undefined"!==typeof e&&0<e&&(window.clearTimeout(this._timeout[a][b][d].timeout),this._timeout[a][b][d].timeout=void 0)}c&&(this._timeout[a][b].arrObj=ATInternet.Utils.cloneSimpleObject(this._timeout[a][b].arrObjSave))}else window.clearTimeout(this._timeout[a][b])};this.removePlayer=function(b){for(var c in this._timeout[b])this._timeout[b].hasOwnProperty(c)&&(this.clearTimeout(b,c,!1),a.richMedia.send({action:"stop",playerId:b,mediaLabel:c}));this._timeout[b]={}};this.removeAll=
function(){for(var a in this._timeout)this._timeout.hasOwnProperty(a)&&this.removePlayer(a);this._timeout={}}},h=new function(){this._media=function(){this.type=void 0;this.plyr=0;this.clnk=this.s2=void 0;this.p="";this.m9=this.m6=this.m5=this.m1=this.rfsh=this.buf=this.a=void 0};this._mediaAll={};this.setMediaProperty=function(a,b,c,d){this._mediaAll[a]=this._mediaAll[a]||{};this._mediaAll[a][b]=this._mediaAll[a][b]||new this._media;this._mediaAll[a][b][c]=d};this.getMediaProperty=function(a,b,c){if(this._mediaAll[a]&&
this._mediaAll[a][b])return this._mediaAll[a][b][c]};this.removePlayer=function(a){this._mediaAll[a]={}};this.removeAll=function(){this._mediaAll={}}},d=function(b,c,d){var e=b[d]||"";a.exec("Utils","manageChapters",[b,c,3],function(a){e=a+e});return e},g=function(a,b,c,d){var e=a[b];"boolean"===typeof a[b]&&(e=a[b]?d:c);return e},n=function(a){var b=0;/^(\-|\+)?([0-9]+)$/.test(a)&&(b=Number(a));return b},k=function(a,b){var c=parseInt(a,10);return c?Math.max(c,b):0},c=function(a,b,c,d,e){b=h.getMediaProperty(b,
c,d);"undefined"!==typeof b&&(a[d]=e?encodeURIComponent(b):b)},m=function(a,b,c){"undefined"!==typeof c&&(a[b]=c)},e=function(a,b,c,d){"undefined"!==typeof d&&h.setMediaProperty(a,b,c,d)};a.richMedia={};a.richMedia.add=this.add=function(a){a=a||{};var b=n(a.playerId),c=d(a,"mediaTheme","mediaLabel"),k=g(a,"isEmbedded","int","ext");e(b,c,"plyr",b);e(b,c,"type",a.mediaType);e(b,c,"s2",a.mediaLevel2);e(b,c,"p",c);e(b,c,"clnk",a.linkedContent||a.previousMedia);e(b,c,"a",a.action);e(b,c,"rfsh",a.refreshDuration);
e(b,c,"m1",a.duration);e(b,c,"m5",k);e(b,c,"m6",a.broadcastMode);e(b,c,"m9",a.webdomain)};a.richMedia.remove=this.remove=function(a){b.removePlayer(a);h.removePlayer(a)};a.richMedia.removeAll=this.removeAll=function(){b.removeAll();h.removeAll()};a.richMedia.send=this.send=function(e){e=e||{};var r=n(e.playerId),p=d(e,"mediaTheme","mediaLabel"),l={};l.plyr=r;l.p=p;e.action&&(l.a=e.action);c(l,r,p,"type",!1);c(l,r,p,"s2",!1);c(l,r,p,"m1",!1);c(l,r,p,"m5",!1);c(l,r,p,"m6",!1);if("play"===l.a||"info"===
l.a){e=g(e,"isBuffering","0","1");m(l,"buf",e);e=a.getContext("page")||{};var q=d(e,"chapter","name")||void 0;m(l,"prich",q);m(l,"s2rich",e.level2||void 0);c(l,r,p,"clnk",!1);c(l,r,p,"m9",!0)}a.sendHit(l,[["hitType",["richmedia"]]]);"pause"===l.a?b.clearTimeout(r,p,!1):"stop"===l.a&&b.clearTimeout(r,p,!0);if("play"===l.a||"refresh"===l.a)e=h.getMediaProperty(r,p,"rfsh"),"object"===typeof e?b.setTimeoutObject(r,p,e,l.a):(l=k(e,5),0!==l&&b.setTimeout(r,p,l))}};window.ATInternet.Tracker.addPlugin("RichMedia");
}).call(window);;(function(){var dfltPluginCfg={"info":true};var dfltGlobalCfg={};window.ATInternet.Tracker.Plugins.SalesTracker=function(a){var b=function(b,d,e){b.hasOwnProperty(e)&&(b=b[e],a.setParam(d,void 0===b?"":b+"",{hitType:["page"]}))},h=function(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0},d=function(a){return"object"===typeof a&&!(a instanceof Array)},g=function(b){var d="";a.exec("Utils","manageChapters",[b,"category",6],function(a){a&&(d=a)});d+=b.productId;b=a.getContext("product")||{};b.viewedProducts?b.viewedProducts.push(d):b.viewedProducts=[d];
a.setContext("product",b)},n=0,k=function(b){var d=b.productId?b.productId:"",e=b.category?b.category+"::":"";a.exec("Utils","manageChapters",[b,"category",6],function(a){a&&(e=a)});return e+d};a.order=this.order={};a.cart=this.cart={};a.aisle=this.aisle={};a.salesTracker={};a.product=this.product={};a.order.set=this.order.set=function(c){var g=!1;if(d(c)&&!h(c)){g=!0;a.dispatchSubscribe("page");a.dispatchSubscribe("salesTracker");b(c,"cmd","orderId");b(c,"roimt","turnover");b(c,"st","status");"boolean"===
typeof c.newCustomer?a.setParam("newcus",c.newCustomer?"1":"0",{hitType:["page"]}):c.newCustomer&&"undefined"===typeof a.getParams("newcus")&&a.setParam("newcus","0",{hitType:["page"]});var e=c.amount;d(e)&&(b(e,"mtht","amountTaxFree"),b(e,"mtttc","amountTaxIncluded"),b(e,"tax","taxAmount"));e=c.delivery;d(e)&&(b(e,"fp","shippingFeesTaxIncluded"),b(e,"fpht","shippingFeesTaxFree"),b(e,"dl","deliveryMethod"));b(c,"mp","paymentMethod");e=c.discount;d(e)&&(b(e,"dsc","discountTaxIncluded"),b(e,"dscht",
"discountTaxFree"),b(e,"pcd","promotionalCode"));"boolean"===typeof c.confirmationRequired?a.setParam("tp",c.confirmationRequired?"pre1":"",{hitType:["page"]}):c.confirmationRequired&&"undefined"===typeof a.getParams("tp")&&a.setParam("tp","",{hitType:["page"]});c=c.orderCustomVariables;if(c instanceof Array)for(e=0;e<c.length;e++)b(c,"o"+(e+1),e)}return g};a.cart.set=this.cart.set=function(c){var g=!1;d(c)&&!h(c)&&(g=!0,a.dispatchSubscribe("page"),a.dispatchSubscribe("salesTracker"),b(c,"idcart",
"cartId"),"boolean"===typeof c.isBasketPage?"pre1"!==a.getParams("tp")&&a.setParam("tp",c.isBasketPage?"cart":"",{hitType:["page"]}):c.isBasketPage&&"undefined"===typeof a.getParams("tp")&&a.setParam("tp","",{hitType:["page"]}));return g};a.cart.add=this.cart.add=function(c){var g=!1;if(d(c)&&!h(c)&&(g=!0,c=c.product,d(c))){n++;var e=n,f=k(c);a.setParam("pdt"+e,f,{hitType:["page"]});b(c,"qte"+e,"quantity");b(c,"mt"+e,"unitPriceTaxIncluded");b(c,"mtht"+e,"unitPriceTaxFree");b(c,"dsc"+e,"discountTaxIncluded");
b(c,"dscht"+e,"discountTaxFree");b(c,"pcode"+e,"promotionalCode")}return g};a.aisle.set=this.aisle.set=function(b){var g=!1;if(d(b)&&!h(b)){g=!0;a.dispatchSubscribe("page");var e="";a.exec("Utils","manageChapters",[b,"level",6],function(a){e=a});e=e.replace(/::$/gi,"");a.setParam("aisl",e,{hitType:["page"]})}return g};a.product.add=this.product.add=function(b){var k=!1,e;if(e=d(b))if(e=!h(b)){a:{e=["productId"];for(var f=0;f<e.length;f++)if(void 0===b[e[f]]){e=!0;break a}e=!1}e=!e}e&&(k=!0,g(b),a.dispatchSubscribe("salesTracker"));
return k};a.salesTracker.onDispatch=this.onDispatch=function(){a.getParams("cmd");a.getParams("idcart")||"cart"!==a.getParams("tp")&&a.getParams("tp");var b=a.getContext("product");b&&b.viewedProducts&&0<b.viewedProducts.length&&(a.setParam("pdtl",b.viewedProducts.join("|"),{hitType:["product"]}),a.setParam("type","pdt",{hitType:["product"]}),a.sendHit(null,[["hitType",["product"]]]))}};window.ATInternet.Tracker.addPlugin("SalesTracker");
}).call(window);;(function(){var dfltPluginCfg={"clicksAutoManagementEnabled":true,"clicksAutoManagementTimeout":500,"info":false};var dfltGlobalCfg={};window.ATInternet.Tracker.Plugins.TechClicks=function(a){var b,h;a.configPlugin("TechClicks",dfltPluginCfg||{},function(a){b=a.clicksAutoManagementEnabled;h=a.clicksAutoManagementTimeout});this.deactivateAutoManagement=function(){b=!1};var d=function(a){switch(a.target){case "_top":window.top.location.href=a.url;break;case "_parent":window.parent.location.href=a.url;break;default:window.location.href=a.url}},g=function(a){var b=a.timeout;a.mailto?setTimeout(function(){window.location.href=a.mailto},
b):a.form?setTimeout(function(){a.form.submit()},b):a.url&&setTimeout(function(){d({url:a.url,target:a.target})},b)},n=function(b){for(var c,k="_self",m=b.timeoutonly;b;){if(b.href&&0===b.href.indexOf("http")){c=b.href.split('"').join('\\"');k=b.target?b.target:k;break}b=b.parentNode}if(c){if(!m)a.onTrigger("Tracker:Hit:Sent:Ok",function(){d({url:c,target:k})});g({url:c,target:k,timeout:h})}},k=function(b){var c=b;for(b=c.timeoutonly;c&&"FORM"!==c.nodeName;)c=c.parentNode;if(c){if(!b)a.onTrigger("Tracker:Hit:Sent:Ok",
function(){c.submit()});g({form:c,timeout:h})}},c=function(b){var c=b;for(b=c.timeoutonly;c&&!(c.href&&0<=c.href.indexOf("mailto:"));)c=c.parentNode;if(c){if(!b)a.onTrigger("Tracker:Hit:Sent:Ok",function(){window.location.href=c.href});g({mailto:c.href,timeout:h})}},m=function(a){for(;a;){if(a.href){if(0<=a.href.indexOf("mailto:"))return"mailto";if(0===a.href.indexOf("http"))return"redirection"}else if("FORM"===a.nodeName)return"form";a=a.parentNode}return!1};this.manageClick=function(a,d,g){var h=
!0;if(b&&a){var l;a:{for(l=a;l;){if("function"===typeof l.getAttribute&&("_blank"===l.getAttribute("target")||"no"===l.getAttribute("data-atclickmanagement"))){l=!0;break a}l=l.parentNode}l=a;for(var q=window.location.href,u;l;){if((u=l.href)&&0<u.indexOf("#")&&q.substring(0,0<q.indexOf("#")?q.indexOf("#"):q.length)===u.substring(0,u.indexOf("#"))){l=!0;break a}l=l.parentNode}l=!1}q=m(a);if(!l&&q)switch(q){case "mailto":c(a);h=!1;break;case "form":k(a);h=!1;break;case "redirection":n(a),h=!1}}d&&
(a=d.defaultPrevented,"function"===typeof d.isDefaultPrevented&&(a=d.isDefaultPrevented()),a||d.preventDefault&&d.preventDefault());g&&g();return h}};window.ATInternet.Tracker.addPlugin("TechClicks");
}).call(window);;(function(){var dfltPluginCfg={"info":false};var dfltGlobalCfg={};window.ATInternet.Tracker.Plugins.Utils=function(a){var b=this,h={};b.getQueryStringValue=function(a,b){var d=window.ATInternet.Utils.hashcode(b).toString();if(!h[d]){h[d]={};var c=RegExp("[&#?]{1}([^&=#?]*)=([^&#]*)?","g"),m=c.exec(b);if(null!==m)for(;null!==m;)h[d][m[1]]=m[2],m=c.exec(b)}return h[d].hasOwnProperty(a)?h[d][a]:null};b.customObjectToString=function(a){return encodeURIComponent(window.ATInternet.Utils.jsonSerialize(a))};b.manageChapters=function(b,d,h){var c=a.getConfig("ignoreEmptyChapterValue"),
m="";if(b){h=parseInt(h,10);for(var e=1;e<h+1;e++)var f=b[d+e]||"",m=c?m+(f?f+"::":""):m+(b.hasOwnProperty(d+e)?f+"::":"")}return m};b.getDocumentLevel=function(){var b=a.getConfig("documentLevel");if(0>b.indexOf("."))return window[b]||document;b=b.split(".");return window[b[0]][b[1]]||document};b.getLocation=function(){return b.getDocumentLevel().location.href};a.dispatchIndex={};a.dispatchStack=[];a.dispatchEventFor={};var d=0;a.dispatchSubscribe=function(b){return a.dispatchIndex[b]?!1:(a.dispatchStack.push(b),
a.dispatchIndex[b]=!0)};a.dispatchSubscribed=function(b){return!0===a.dispatchIndex[b]};a.addSpecificDispatchEventFor=function(b){return a.dispatchEventFor[b]?!1:(a.dispatchEventFor[b]=!0,d++,!0)};a.processSpecificDispatchEventFor=function(b){a.dispatchEventFor[b]&&(a.dispatchEventFor[b]=!1,d--,0===d&&(a.dispatchEventFor={},a.emit("Tracker:Plugin:SpecificEvent:Exec:Complete",{lvl:"INFO"})))};a.dispatch=function(){var b=function(){for(;0<a.dispatchStack.length;){var b=a.dispatchStack.pop();a[b].onDispatch()}a.dispatchIndex=
{};a.delContext(void 0,"customObject")},h=function(){if(a.plugins.isExecWaitingLazyloading())a.onTrigger("Tracker:Plugin:Lazyload:Exec:Complete",function(){b()},!0);else b()};if(0===d)h();else a.onTrigger("Tracker:Plugin:SpecificEvent:Exec:Complete",function(){h()},!0)};a.dispatchRedirect=function(b){var d=!0;b&&b.elem&&(b.elem.timeoutonly=!0,a.plugins.exec("TechClicks","manageClick",[b.elem,b.event,b.callback],function(a){d=a}));a.dispatch();return d}};window.ATInternet.Tracker.addPlugin("Utils");
}).call(window);
if(typeof window.ATInternet.onTrackerLoad==='function'){window.ATInternet.onTrackerLoad();}


/*[PATH @digikala/supernova-digikala-desktop/assets/local/js/lazyLoad.min.js]*/
!function(u){u.fn.lazy=function(t,i){var e,n=u(window),s=t||200,r=1<window.devicePixelRatio?"data-src-retina":"data-src",o=this;function a(){var t=o.filter(function(){var t=u(this);if(!t.is(":hidden")){var i=n.scrollTop(),e=i+n.height(),r=t.offset().top,o=r+t.height();return i-s<=o&&r<=e+s}});"function"==typeof i&&t&&0<t.length&&i(t),e=t.trigger("lazy"),o=o.not(e)}return this.one("lazy",function(){var t=this,i=this.getAttribute(r);(i=i||this.getAttribute("data-src"))&&setTimeout(function(){t.setAttribute("src",i),t.removeAttribute(r)},200);var e=this.getAttribute("data-srcset");e&&setTimeout(function(){t.setAttribute("srcset",e)},200)}),n.off("scroll.lazy lookup.lazy resize.lazy"),n.on("scroll.lazy resize.lazy lookup.lazy",a),a(),this}}(window.jQuery);



/*[PATH @digikala/supernova-digikala-desktop/assets/local/js/chatClient.js]*/
(function ($) {
    $.fn.Chatcenter = function (options) {

        var IFRAME_URL = "";
        var settings = $.extend({
            ReadyToChatText: '', //
            CloseIcon: 'https://ucservice.digikala.com/supernovachatcenter/img/close.png', //
            ExpandIcon: 'https://ucservice.digikala.com/supernovachatcenter/img/expand.png', //
            HeaderColor: '#eee', //
            expandChatcloseEase: 400,
            ShowExapnd: false, //
            ShowClose: false, //
            FormChatFile: 'https://ucservice.digikala.com/supernovachatcenter/Chatbox.html', //
            LogoUrl: 'https://ucservice.digikala.com/supernovachatcenter/img/digikala-logo.png', //
            BackgroundColor: null, //
            FormCustomCss: null, //
            FormSubmitBackground: null, //
            FormSubmitTextColor: null, //
            FormCoverImage: null, //
            FormWaitingMessage: null, //
            FormAgentTimeOutMessage: null, //
            FormNoAgentMessage: null, //
            OnlyAllowExpand: true, //
            UserName: null, //
            UserEmail: null, //
            UserPhone: null, //
            GUIDCookieName: null, //
            GUID: null

        }, options);

        return this.each(function () {
            if (settings.FormChatFile)
                IFRAME_URL += settings.FormChatFile;
            IFRAME_URL += '?';
            if (settings.BackgroundColor)
                IFRAME_URL += 'bg=' + settings.BackgroundColor;

            if (settings.FormCustomCss)
                IFRAME_URL += '&' + 'frmcss=' + settings.FormCustomCss;

            if (settings.FormSubmitBackground)
                IFRAME_URL += '&' + 'sbmbg=' + settings.FormSubmitBackground;

            if (settings.FormSubmitTextColor)
                IFRAME_URL += '&' + 'sbtc=' + settings.FormSubmitTextColor;

            if (settings.FormCoverImage)
                IFRAME_URL += '&' + 'cimg=' + settings.FormCoverImage;

            if (settings.LogoUrl)
                IFRAME_URL += '&' + 'logourl=' + settings.LogoUrl;

            if (settings.FormWaitingMessage)
                IFRAME_URL += '&' + 'wmsg=' + settings.FormWaitingMessage;

            if (settings.FormAgentTimeOutMessage)
                IFRAME_URL += '&' + 'agtmsg=' + settings.FormAgentTimeOutMessage;

            if (settings.FormNoAgentMessage)
                IFRAME_URL += '&' + 'nagmsg=' + settings.FormNoAgentMessage;

            if (settings.UserName)
                IFRAME_URL += '&' + 'UN=' + settings.UserName;

            if (settings.UserEmail)
                IFRAME_URL += '&' + 'UE=' + settings.UserEmail;

            if (settings.UserPhone)
                IFRAME_URL += '&' + 'UP=' + settings.UserPhone;

            var body = '<div class="title chat-top" id="chatPopupExecute"';

            if (settings.OnlyAllowExpand) {
                body += ' onclick="PopUpValidClick(' + "'" + IFRAME_URL + "'" + ')"><div class="chatlive-errobox">شما هم اکنون درحال گفتگو می باشید</div>';
                window.localStorage.setItem("expand", "true");
            }
            else
                body += '>';

            body += '<span>پشتیبان آنلاین</span>';


            $(this).text(settings.text);


            if (settings.ShowExapnd || settings.ShowClose) {

                body += '<div class="box" style="background-color:';
                if (settings.HeaderColor)
                    body += settings.HeaderColor;
                body += '"><span>';

                if (settings.ReadyToChatText)
                    body += settings.ReadyToChatText + '</span>';


                if (settings.ShowClose) {
                    body += '<span id="embedded-close" onclick="embdedClose()" class="box-close" title="بستن"><img src="';
                    if (settings.CloseIcon)
                        body += settings.CloseIcon;
                    body += '" />';
                }

                if (settings.ShowExapnd) {
                    body += '</span><span id="embedded-expanded" onclick="expand(';
                    if (settings.expandChatcloseEase)
                        body += settings.expandChatcloseEase;
                    body += ')" class="box-expand" title="صفحه جدید"><img src="';

                    if (settings.ExpandIcon)
                        body += settings.ExpandIcon;
                    body += '" /></span>';
                }
                body += '</div>';
            }

            if (!settings.OnlyAllowExpand) {
                body += '<iframe class="chatbox" id="iwlkq" allowtransparency="true" src="' + IFRAME_URL + '">';
            }

            body += '</iframe></div>';

            $(this).append('<div class="chat-mainbox" id="chatbox" name="jclsw">');
            $("#chatbox").append(body);
            // $('head').append('<link rel="stylesheet" href="https://ucservice.digikala.com/dkchatcenter/ChatCenter.css" type="text/css" />');
        });
    };
}(jQuery));


function PopUpValidClick(url) {
    var popupClicked = localStorage.getItem("popupClicked");
    if (localStorage.getItem("popupClicked") === null || (!popupClicked || popupClicked === false || popupClicked === "false"))
        winPopup = window.open(url, '_blank', 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=460, height=490, popup=yes,dependent=yes');
    else
        $('.chatlive-errobox').fadeIn('fast').delay(1000).fadeOut('fast');
}

$(document).ready(function () {
    var popupClicked = localStorage.getItem("popupClicked");
    if (!!popupClicked && (popupClicked === "true" || popupClicked === true))
        $("#chatPopupExecute").addClass("chating-live");
});


function embdedWindowTitle() {
    if (localStorage.getItem("chatbox") !== "expand")
        if ($("#embedded-window-titled").hasClass("cl-box") && getCookie("chatbox") !== "expand")
            openChat(400);

        else {
            var iframe = $(".chatbox").attr("src");
            openPopup(iframe);
        }
}

function openPopup(url) {
    winPopup = window.open(url, '_blank', 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=460, height=520, popup=yes, dependent=yes');
    winPopup.onbeforeunload = function () {
        localStorage.setItem('chatbox', 'closed');
    };
}

$(window).bind('storage', function (e) {
    var popupClicked = localStorage.getItem("popupClicked");
    if (!!popupClicked && (popupClicked === "true" || popupClicked === true))
        $("#chatPopupExecute").addClass("chating-live");
    else
        $("#chatPopupExecute").removeClass("chating-live");
});

function closeChat(ease) {
    $(".chat-mainbox").animate({
        "height": "32px"
    }, ease, function () {
        var $windowTitle = $("#embedded-window-title");
        $(".chatbox").css("display", "none");
        $("#embedded-close").hide();
        $windowTitle.show();
        $windowTitle.addClass("cl-box");
    });
}