!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){function n(e,t={},n,r=[]){let o=document.createElement(e);for(let e in t)o.setAttribute(e,t[e]);n&&(o.textContent=n);for(let e=0;e<r.length;e++)o.appendChild(r[e]);return o}function r(){let e=document.getElementById("menuLeft"),t=document.querySelector(".mainRight > .content"),n=function(){let e=0,t="";return function n(r){let o=r.children;for(let r=0;r<o.length;r++){let i=`${"\t".repeat(e)}<${o[r].tagName}> \n`,u=`${"\t".repeat(e)}</${o[r].tagName}> \n`;t+=i,o[r].textContent&&0==o[r].children.length&&(t+="\t".repeat(e+1)+o[r].textContent+"\n"),0!==o[r].children.length&&(++e,n(o[r])),t+=u}return e=1,t}}();return e.textContent=t?n(t):""}function o(e,t){return document.querySelector(e).addEventListener("click",t)}function i(){return document.querySelector(".active")}function u(){return!!i()}function l(){return document.getElementById("textField").value}function c(e){return i().appendChild(n(e,{class:"menuItem"},"DEFAULT TEXT",[]))}!function(e){let t=document.body,n=t.querySelector("script");t.insertBefore(e,n)}(n("div",{class:"container"},"",[n("div",{class:"mainDiv mainLeft"},"",[n("div",{class:"content",id:"menuLeft"},"",[]),n("div",{class:"footer"},"",[n("div",{class:"footerBox"},"",[n("input",{type:"text",id:"textField",value:""},"",[]),n("button",{class:"button",id:"setText"},"Set text",[]),n("button",{class:"button",id:"createTag"},"Create tag",[]),n("button",{class:"button",id:"remove"},"Remove",[])])])]),n("div",{class:"mainDiv mainRight"},"",[n("div",{class:"content",id:"menuRight"},"",[]),n("div",{class:"footer"},"",[n("div",{class:""},"",[n("h3",{id:"currentTag"},"Current tag: ",[])])])])])),function(){let e=document.getElementById("menuRight");(function(e,t){t.appendChild(e)})(n("div",{class:"menuItem"},"",[n("ul",{class:"menuItem"},"",[n("li",{class:"menuItem"},"hello",[]),n("li",{class:"menuItem"},"world",[])])]),e)}(),r(),o("#menuRight",function(){let e;return function(t){let n=t.target;if(n!=e&&u()){let e=i();e.classList.remove("active")}t.target.classList.toggle("active"),function(e){if(!i())return document.getElementById("currentTag").textContent="Current tag: ";document.getElementById("currentTag").textContent="Current tag: "+e.tagName}(t.target),e=t.target}}()),o("#remove",function(){if(u){let e=i(),t=e.parentElement;t.removeChild(e),document.getElementById("currentTag").textContent="Current tag: "}return void r()}),o("#setText",function(){let e=l();u&&(i().textContent=e);return void r()}),o("#createTag",function(){if(u){!function(){let e;for(let t=0;t<i().childNodes.length;t++)1==i().childNodes[t].nodeType&&(e=!0);if(!e)i().textContent=""}();let e=l(),t=e+" tag is not allowed. Choose one of: li, div, h1, h2, h3, h4, h5, h6, ul, ol, p";switch(e){case"div":c("div");break;case"p":c("p");break;case"h1":c("h1");break;case"h2":c("h2");break;case"h3":c("h3");break;case"h4":c("h4");break;case"h5":c("h5");break;case"h6":c("h6");break;case"ul":c("ul");break;case"ol":c("ol");break;case"li":c("li");break;default:alert(t)}return void r()}})}]);