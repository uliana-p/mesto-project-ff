/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function r(e,r,n){return(r=function(e){var r=function(e){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=t(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(r)?r:r+""}(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var n="https://mesto.nomoreparties.co/v1/".concat("wff-cohort-26","/"),o=function(t,o){return fetch(new URL(t,n),function(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?e(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}({headers:{authorization:"c6fa7421-7a71-449f-b535-7d0a1f5f22f8","Content-Type":"application/json"}},o)).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))},i=function(t){return o("cards/likes/".concat(t),{method:"PUT"})};function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(){c=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),c=new P(n||[]);return o(a,"_invoke",{value:j(t,r,c)}),a}function y(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var d="suspendedStart",v="suspendedYield",h="executing",m="completed",b={};function g(){}function _(){}function S(){}var w={};f(w,u,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(T([])));E&&E!==r&&n.call(E,u)&&(w=E);var x=S.prototype=g.prototype=Object.create(w);function k(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,c,u){var l=y(t[o],t,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==a(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return r("throw",t,c,u)}))}u(l.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function j(e,r,n){var o=d;return function(i,a){if(o===h)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=q(c,n);if(u){if(u===b)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=h;var l=y(e,r,n);if("normal"===l.type){if(o=n.done?m:v,l.arg===b)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=m,n.method="throw",n.arg=l.arg)}}}function q(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,q(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var i=y(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,b;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,b):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[u];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(a(e)+" is not iterable")}return _.prototype=S,o(x,"constructor",{value:S,configurable:!0}),o(S,"constructor",{value:_,configurable:!0}),_.displayName=f(S,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,f(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},k(O.prototype),f(O.prototype,l,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new O(p(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(x),f(x,s,"Generator"),f(x,u,(function(){return this})),f(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,b):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),b}},e}function u(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function l(t,e,r,n,o){var i,a,c=document.querySelector("#card-template").content.querySelector(".places__item").cloneNode(!0),u=c.querySelector(".card__image");u.src=t.link,u.alt=t.name,u.addEventListener("click",(function(){n(t)})),c.querySelector(".card__likes-counter").textContent=null!==(i=null===(a=t.likes)||void 0===a?void 0:a.length)&&void 0!==i?i:0,c.querySelector(".card__title").textContent=t.name;var l=c.querySelector(".card__delete-button");t.owner._id!==o?l.remove():l.addEventListener("click",(function(){e(c,t)}));var s=c.querySelector(".card__like-button");return s.classList.toggle("card__like-button_is-active",function(t,e){var r;return null===(r=t.likes)||void 0===r?void 0:r.some((function(t){return t._id===e}))}(t,o)),s.addEventListener("click",(function(){r(c,s,t)})),c}function s(t,e){var r;(r=e._id,o("cards/".concat(r),{method:"DELETE"})).then((function(){t.remove()})).catch(console.error)}function f(t,e,r){return p.apply(this,arguments)}function p(){var t;return t=c().mark((function t(e,r,n){var a,u,l,s;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=r.classList.contains("card__like-button_is-active"),t.prev=1,!a){t.next=9;break}return t.next=5,c=n._id,o("cards/likes/".concat(c),{method:"DELETE"});case 5:s=t.sent,r.classList.remove("card__like-button_is-active"),t.next=13;break;case 9:return t.next=11,i(n._id);case 11:s=t.sent,r.classList.add("card__like-button_is-active");case 13:e.querySelector(".card__likes-counter").textContent=null!==(u=null===(l=s.likes)||void 0===l?void 0:l.length)&&void 0!==u?u:0,t.next=19;break;case 16:t.prev=16,t.t0=t.catch(1),console.error(t.t0);case 19:case"end":return t.stop()}var c}),t,null,[[1,16]])})),p=function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){u(i,n,o,a,c,"next",t)}function c(t){u(i,n,o,a,c,"throw",t)}a(void 0)}))},p.apply(this,arguments)}function y(t){t.classList.add("popup_is-opened"),document.addEventListener("keydown",h)}function d(t){t.classList.remove("popup_is-opened"),document.removeEventListener("keydown",h)}function v(t){var e=t.querySelector(".popup__button"),r=e.textContent;return e.textContent="Сохранение",function(){e.textContent=r}}function h(t){"Escape"===t.key&&d(document.querySelector(".popup_is-opened"))}function m(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=b(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function b(t,e){if(t){if("string"==typeof t)return g(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(t,e):void 0}}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var _,S=function(t){return'[data-input="'.concat(t.name,'"]')},w=function(t,e,r){t.classList.remove(r.inputErrorClass),e.querySelector(S(t)).textContent=""},L=function(t,e){var r=t.querySelector(e.submitButtonSelector),n=!function(t,e){return(r=t.querySelectorAll(e.inputSelector),function(t){if(Array.isArray(t))return g(t)}(r)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||b(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).every((function(t){return t.validity.valid}));var r}(t,e);r.classList.toggle(e.inactiveButtonClass,n),r.disabled=n},E=function(t,e,r){var n=t.currentTarget,o=function(t){return t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid}(n);o?w(n,e,r):function(t,e,r){t.classList.add(r.inputErrorClass),e.querySelector(S(t)).textContent=t.validationMessage}(n,e,r),L(e,r)},x=function(t,e){var r,n=m(t.querySelectorAll(e.inputSelector));try{for(n.s();!(r=n.n()).done;)r.value.addEventListener("input",(function(r){return E(r,t,e)}))}catch(t){n.e(t)}finally{n.f()}},k=function(t,e){var r,n=t.querySelectorAll(e.inputSelector),o=t.querySelector(e.submitButtonSelector),i=m(n);try{for(i.s();!(r=i.n()).done;){var a=r.value;w(a,t,e),o.classList.remove(e.inactiveButtonClass),o.disabled=!0}}catch(t){i.e(t)}finally{i.f()}};function O(t,e){if(t){if("string"==typeof t)return j(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?j(t,e):void 0}}function j(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var q=document.querySelector(".places__list"),C=document.querySelector(".profile__image"),A=document.querySelector(".popup_type_update-avatar"),P=document.forms.update_avatar,T=P.querySelector(".popup__input_type_url"),I=document.forms.edit_profile,N=I.elements.name,D=I.elements.description,G=document.forms["new-place"],B=G.elements["place-name"],F=G.elements.link,M=document.querySelector(".profile__title"),U=document.querySelector(".profile__description"),J=document.querySelector(".popup_type_edit"),H=document.querySelector(".popup_type_new-card"),V=document.querySelector(".popup_type_image"),Y=document.querySelector(".popup__image"),$=document.querySelector(".popup__caption"),z=document.querySelector(".profile__edit-button"),R=document.querySelector(".profile__add-button"),K=document.querySelectorAll(".popup"),Q={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function W(t){Y.src=t.link,$.textContent=t.name,y(V)}K.forEach((function(t){t.querySelector(".popup__close").addEventListener("click",(function(){d(t)})),t.addEventListener("mousedown",(function(e){e.target.classList.contains("popup")&&d(t)}))})),C.addEventListener("click",(function(){T.value="",k(P,Q),y(A)})),P.addEventListener("submit",(function(t){t.preventDefault();var e,r=v(A);(e=T.value,o("users/me/avatar",{method:"PATCH",body:JSON.stringify({avatar:e})})).then((function(t){C.style='background-image: url("'.concat(t.avatar,'")'),d(A)})).catch(console.error).finally(r)})),z.addEventListener("click",(function(){N.value=M.textContent,D.value=U.textContent,k(I,Q),y(J)})),R.addEventListener("click",(function(){B.value="",F.value="",k(G,Q),y(H)})),G.addEventListener("submit",(function(t){t.preventDefault();var e,r={name:B.value,link:F.value},n=v(H);(e=r,o("cards",{method:"POST",body:JSON.stringify(e)})).then((function(){q.prepend(l(r,s,f,W,_)),G.reset(),d(H)})).catch(console.error).finally(n)})),I.addEventListener("submit",(function(t){t.preventDefault();var e,r=v(J);(e={name:N.value,about:D.value},o("users/me",{method:"PATCH",body:JSON.stringify(e)})).then((function(){M.textContent=N.value,U.textContent=D.value,d(J)})).catch(console.error).finally(r)})),function(t){var e,r=m(document.querySelectorAll(t.formSelector));try{for(r.s();!(e=r.n()).done;){var n=e.value;x(n,t)}}catch(t){r.e(t)}finally{r.f()}}(Q),Promise.all([o("cards"),o("users/me")]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(e,r)||O(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];_=i._id,M.textContent=i.name,U.textContent=i.about,C.style='background-image: url("'.concat(i.avatar,'")');var a,c=function(t){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=O(t))){e&&(t=e);var r=0,n=function(){};return{s:n,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,a=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return i=t.done,t},e:function(t){a=!0,o=t},f:function(){try{i||null==e.return||e.return()}finally{if(a)throw o}}}}(o);try{for(c.s();!(a=c.n()).done;){var u=a.value;q.append(l(u,s,f,W,_))}}catch(t){c.e(t)}finally{c.f()}}))})();