!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,n){"use strict";t.a=n.p+"f44fab7f35fabff7cf585bcac0a0f958.png"},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(i=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),a=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([r]).join("\n")}var i,c,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);o&&r[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){"use strict";t.a=n.p+"30ba27e2993c5a7a20d69a3613b7fb4c.png"},function(e,t,n){"use strict";t.a=n.p+"a627337abc2fa92162fb4e0570c7d0a2.png"},function(e,t,n){"use strict";t.a=n.p+"b442c993e2328efee815208317ec3515.png"},function(e,t,n){var o=n(7),r=n(8);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};o(r,a);e.exports=r.locals||{}},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},o=[],r=0;r<e.length;r++){var a=e[r],s=t.base?a[0]+t.base:a[0],d=n[s]||0,u="".concat(s," ").concat(d);n[s]=d+1;var l=c(u),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==l?(i[l].references++,i[l].updater(p)):i.push({identifier:u,updater:b(p,t),references:1}),o.push(u)}return o}function d(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var u,l=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function p(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=l(t,r);else{var a=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function m(e,t,n){var o=n.css,r=n.media,a=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,h=0;function b(e,t){var n,o,r;if(t.singleton){var a=h++;n=f||(f=d(t)),o=p.bind(null,n,a,!1),r=p.bind(null,n,a,!0)}else n=d(t),o=m.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=c(n[o]);i[r].references--}for(var a=s(e,t),d=0;d<n.length;d++){var u=c(n[d]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=a}}}},function(e,t,n){"use strict";n.r(t);var o=n(2),r=n.n(o),a=n(0),i=n.n(a),c=n(3),s=n(4),d=n(1),u=n(5),l=r()(!1),p=i()(c.a),m=i()(s.a),f=i()(d.a),h=i()(u.a);l.push([e.i,'body,html,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font:inherit;font-size:100%;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote::before,blockquote::after,q::before,q::after{content:"";content:none}table{border-collapse:collapse;border-spacing:0}*,*::after,*::before{box-sizing:border-box}#art-about-us{position:relative;padding-top:70px;text-align:start;background-image:url('+p+');background-position:center;background-repeat:repeat;background-size:cover}#art-about-us .art-about-us-sect{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);padding:4%;max-width:45%;background-color:rgba(255,255,255,.9)}#art-about-us .art-about-us-sect h1{margin-bottom:30px;font-size:3.7rem;font-family:"Amiri",serif}#art-about-us .art-about-us-sect p{margin-bottom:30px;font-size:1.3rem;line-height:1.6rem}#art-about-us .art-about-us-sect button{padding:2% 4% 1% 4%;font-size:1.5rem;font-family:"Baloo Tamma 2",cursive;border:none;color:#fff;background-color:#333;outline:none}#art-about-us .art-about-us-sect button:hover{color:#333;background-color:transparent;cursor:pointer}#art-contact{margin-top:4%}#art-contact h1{font-size:2.5rem;font-family:"Amiri",serif;text-align:center}#art-contact form{padding:5vh;min-width:30%;max-width:40%;margin:0 auto;display:flex;flex-direction:column;justify-content:center;align-items:flex-start}#art-contact form #name,#art-contact form #email,#art-contact form #comment{width:100%}#art-contact form #name,#art-contact form #email{margin-bottom:20px}#art-contact form #comment{height:100px}#art-contact form button{margin:20px auto;padding-top:.5vh;width:15vw;height:5vh;border:none;font-family:"Baloo Tamma 2",cursive;font-size:1.2rem;color:#fff;background-color:#333}#art-contact form button:hover{color:#333;background-color:transparent;cursor:pointer}#art-home{display:flex;flex-direction:row;justify-content:space-between;align-items:center}#art-home .art-home-sect:nth-child(1){height:100%;flex:2 1 50%;background-image:url('+m+');background-position:center;background-repeat:no-repeat;background-size:80%}#art-home .art-home-sect:nth-child(2){height:100%;padding-right:4vw;flex:1 2 45%;display:flex;flex-direction:column;justify-content:center;align-items:flex-start}#art-home .art-home-sect:nth-child(2) h1{margin-bottom:20px;font-family:"Amiri",serif;font-size:3.3rem}#art-home .art-home-sect:nth-child(2) p{margin-bottom:20px;font-size:1.3rem;line-height:1.9rem}#art-home .art-home-sect:nth-child(2) button{padding:12px 21px 8px 21px;font-size:1.6rem;font-weight:500;border:none;font-family:"Baloo Tamma 2",cursive;color:#fff;background-color:#333}#art-home .art-home-sect:nth-child(2) button:hover{background-color:#e8e9e5;color:#333;cursor:pointer}#art-menu .art-menu-sect:nth-child(1){margin-top:4%;margin-bottom:3%;display:flex;flex-direction:column;justify-content:space-around;align-items:center}#art-menu .art-menu-sect:nth-child(1) h1{font-size:2.5rem;font-family:"Amiri",serif}#art-menu .art-menu-sect:nth-child(1) ul{width:30%;margin-top:5%;display:flex;flex-direction:row;justify-content:space-between;align-items:center}#art-menu .art-menu-sect:nth-child(1) ul li{font-size:1.2rem}#art-menu .art-menu-sect:nth-child(1) ul li:hover{color:#c3c2b9;cursor:pointer}#art-menu .art-menu-sect:nth-child(2){height:70%;width:60%;margin:auto;display:grid;grid-gap:2vh;grid-template-columns:repeat(4, 1fr);grid-template-rows:repeat(3, 1fr)}#art-menu .art-menu-sect:nth-child(2) .menu-salad-info{padding:10%;display:flex;flex-direction:column;justify-content:space-around;align-items:flex-start}#art-menu .art-menu-sect:nth-child(2) .menu-salad-info h3{font-size:1.1rem;font-family:"Amiri",serif}#art-menu .art-menu-sect:nth-child(2) .menu-salad-bg{padding:10%;background-position:center;background-repeat:no-repeat;background-size:cover}#art-promotions{padding:4% 30px;display:flex;flex-direction:row;justify-content:space-between;align-items:center}#art-promotions .art-promotions-sect{position:relative;height:100%;padding:0 60px}#art-promotions .art-promotions-sect:nth-child(1){position:relative;width:60%;background-image:url('+f+');background-position:center;background-repeat:no-repeat;background-size:contain}#art-promotions .art-promotions-sect:nth-child(1) p{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);padding:2.5vh;max-width:50%;text-align:center;font-size:1.7rem;font-family:"Amiri",serif;background-color:rgba(255,255,255,.85)}#art-promotions .art-promotions-sect:nth-child(2){width:40%}#art-promotions .art-promotions-sect:nth-child(2) ul{position:absolute;top:50%;transform:translateY(-50%)}#art-promotions .art-promotions-sect:nth-child(2) ul li{max-width:75%;height:13vh;padding-right:5%;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}#art-promotions .art-promotions-sect:nth-child(2) ul li div{min-width:15%}#art-promotions .art-promotions-sect:nth-child(2) ul li p{font-size:1.2rem;font-family:"Amiri",serif}#art-promotions .art-promotions-sect:nth-child(2) ul li:hover{color:#c3c2b9;cursor:pointer}#art-promotions .art-promotions-sect:nth-child(2) ul li:nth-child(-n+3){border-bottom:1px solid #666563}#content{margin:auto;display:grid;grid-template-columns:1fr minmax(768px, 1366px) 1fr;grid-template-rows:100px repeat(auto, minmax(500px, 45vw));font-family:"Baloo Tamma 2",cursive;color:#333}header{grid-column:2/3;grid-row:1/2;z-index:2;margin:20px 0;line-height:100px;font-weight:500}header nav{max-width:850px;margin:auto}header nav ul{display:flex;flex-direction:row;justify-content:space-around;align-items:center}header nav ul a{width:120px;text-align:center;text-decoration:none;font-size:1.2rem;white-space:nowrap;color:#333}header nav ul a:hover{height:100px;border-bottom:solid 5px #666563}header nav #home-logo{height:100px;min-width:100px;background-image:url('+h+");background-position:center;background-repeat:no-repeat;background-size:contain}header nav #home-logo:hover{cursor:pointer}main{grid-column:2/3;grid-row:2/3}main article{height:80vh;width:100%}.hidden{display:none}",""]),t.default=l},function(e,t,n){"use strict";n.r(t);n(6);function o(e,t,n){const o=document.createElement(""+t);return"append"===n?e.appendChild(o):e.insertBefore(o,n),o}function r(e,t){const n=o(e,"article","append");return n.setAttribute("id","art-"+t),n}function a(e,t){for(let n=0;n<t;n+=1){const t=o(e,"section","append");t.setAttribute("class",e.id+"-sect");const n=o(t,"h2","append");n.setAttribute("class","hidden"),n.innerHTML="Hidden"}return e.children}function i(e,t,n){const r=o(e,"li","append");r.setAttribute("id","nav-li"+n),r.innerHTML=""+t}var c=n.p+"c30d273c98167e7cf2e22fc4a28683e7.png",s=n.p+"5e82512964c2b9eccb46aeab63a269cd.png",d=n.p+"6a39f560a4a271e8aaa6626848a860fb.png",u=n.p+"f28f15c9392822402a8121db1620516f.png",l=n.p+"383990043f3f71d64d77ccb6d30fa1cc.png",p=n.p+"5cad1040287e97290cfdd2c54aaaa2c7.png",m=n.p+"10f53a5644ddf63d8923ea353be37f3c.png",f=n.p+"b312a8ded33dae621d3d20d197182b3f.png",h=n.p+"2c3886e711b40cda3e3c342ecb9cfb16.png",b=n.p+"a000bfd81904de9ad4e2dc28dc219782.png",g=n.p+"903fdf70d9c118ecf555a8118e8ff2e3.png",v=n.p+"974000d11e68dfd485067f1f97f9c5cc.png";const y={"01":"Classics","02":"Our Specials"},x={"menu-cat0":[c,s,d,u,l,p],"menu-cat1":[m,f,h,b,g,v]},w={"menu-cat0":["House Salad","Fajita Chicken with Avocado","Blackberry Lime Fruit","Asian Crab and Cucumber","Thai Steak","Winter Fruit","Caesar with Chicken"],"menu-cat1":["Parma Ham slivers with cubes of Melon","Goat cheese and Mozzarella Fritters","Summer Asian Slaw","Tuscan bread and Tomato with Chilly","Rainbow Orzo Salad","Heirloom Tomato Fattoush"]};function k(e,t,n){e.setAttribute("class","menu-salad-info");o(e,"h3","append").innerHTML=n;o(e,"p","append").innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit.";const r=o(e,"p","append");r.setAttribute("class","menu-price"),r.innerHTML="FROM: $10.00"}function T(e,t,n){e.setAttribute("class","menu-salad-bg"),e.style.backgroundImage=`url('${n}')`}function A(e,t,n,r){e.forEach(e=>{e.addEventListener("click",a=>{const i=a.target.id,c=document.querySelectorAll('[class^="menu-salad"]');var s;c.length&&c.forEach(e=>{e.parentNode.removeChild(e)}),e.style.color="#333",s=e,document.querySelectorAll("[id^=menu-cat]").forEach(e=>{e.id!==s.id&&(e.style.color="#c3c2b9")}),function(e,t,n){for(let r=0;r<6;r+=1)if(2===r||3===r){const a=o(e[1],"div","append"),i=o(e[1],"div","append");T(a,0,n[r]),k(i,0,t[r])}else{const a=o(e[1],"div","append"),i=o(e[1],"div","append");k(a,0,t[r]),T(i,0,n[r])}}(t,n[i],r[i])})})}function M(e,t,n,r){const a=function(e,t){const n=o(e,"article","append");return n.setAttribute("id","art-"+t),n}(e,"menu"),i=function(e,t){for(let n=0;n<t;n+=1){const t=o(e,"section","append");t.setAttribute("class",e.id+"-sect");const n=o(t,"h2","append");n.setAttribute("class","hidden"),n.innerHTML="Hidden"}return e.children}(a,t);return A(function(e,t){const n=o(e[0],"h1","append"),r=o(e[0],"ul","append");n.innerHTML="THE SALAD BAR TABLE";for(let e=1;e<3;e+=1){const n=o(r,"li","append");n.innerHTML=t["0"+e],n.setAttribute("id","menu-cat"+(e-1))}return r.childNodes}(i,y),i,n,r),a}function L(e,t){e.addEventListener("click",()=>{const e=document.getElementsByTagName("main")[0];document.getElementById(""+t).remove(),M(e,2,w,x),document.getElementById("menu-cat0").click()})}function S(e,t,n){const i=r(e,t);return a(i,n),function(e){const t=e.children[1];o(t,"h1","append").innerHTML="Pellentesque dignissim enim sit amet venenatis.",o(t,"p","append").innerHTML="Sed egestas egestas fringilla phasellus faucibus. Sed pulvinar proin gravida hendrerit lectus a.";const n=o(t,"button","append");n.innerHTML="GET PRICES",L(n,"art-home")}(i),i}var E=n(1),H=n.p+"d752b9c118b8b3aeb32d6466e22c0861.png",z=n.p+"6dc8bada67dc11319b7b1e9ff2be056a.png",B=n.p+"7c1300813f7b365f2b303dc34177ba66.png";const j={"promo-menu0":"Make Store-Bought Tomato Sauce Taste 10x Better","promo-menu1":"The $3.99 Lunch Our Editor-in-Chief Swears By","promo-menu2":"Red Leaf Salad with Tofu and Sesame Dressing","promo-menu3":"Set Your Kitchen, Save Your Body"},C={"promo-menu0":E.a,"promo-menu1":H,"promo-menu2":z,"promo-menu3":B};function N(e,t){const n=o(e[0],"p","append");return function(e,t){const n=o(e,"ul","append");for(let e=0;e<4;e+=1){const r=o(n,"li","append");r.setAttribute("id","promo-menu"+e);o(r,"div","append").innerHTML="0"+(e+1);o(r,"p","append").innerHTML=t["promo-menu"+e]}}(e[1],t),n}function O(e,t,n){document.getElementsByTagName("ul")[1].childNodes.forEach(o=>{o.addEventListener("click",()=>{document.getElementsByClassName("art-promotions-sect")[0].style.backgroundImage=`url('${e[o.id]}')`,o.childNodes[0].style.color="#333",o.childNodes[1].style.color="#c3c2b9",function(e){document.querySelectorAll("[id^=promo-menu]").forEach(t=>{t.id!==e.id&&(t.childNodes[0].style.color="#c3c2b9",t.childNodes[1].style.color="#333")})}(o),n.innerHTML=t[""+o.id]})})}var q=function(e,t){const n=r(e,"about-us");return function(e){const t=e[0];o(t,"h1","append").innerHTML="THE SALAD BAR",o(t,"p","append").innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";const n=o(t,"button","append");n.innerHTML="Discover our Menu",L(n,"art-about-us")}(a(n,t)),n};function I(e,t,n,o=""){e.setAttribute("id",""+t),e.setAttribute("type",""+n),e.setAttribute("name",""+t),"textarea"!==n&&e.setAttribute("pattern",""+o),e.required=!0}var R=function(e){const t=r(e,"contact");return o(t,"h1","append").innerHTML="Contact Us",function(e){const t=o(e,"form","append"),n=o(t,"label","append");n.setAttribute("for","username"),n.innerHTML="Full Name:",I(o(t,"input","append"),"name","text","\\w{4,15}");const r=o(t,"label","append");r.setAttribute("for","email"),r.innerHTML="E-mail:",I(o(t,"input","append"),"email","email","[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$");const a=o(t,"label","append");a.setAttribute("for","comment"),a.innerHTML="Message:",I(o(t,"textarea","append"),"comment","text","\\.{20,500}");const i=o(t,"button","append");i.setAttribute("type","submit"),i.innerHTML="SUBMIT"}(t),t};const U=document.getElementById("content");!function(e,t){const n=o(e,"header");(function(e,t){const n=[...t],r=o(e,"ul","append");for(let e=0;e<4;e+=1){if(2===e){o(r,"div","append").setAttribute("id","home-logo")}const t=o(r,"a","append");t.href=("#"+n[e]).toLowerCase(),i(t,n[e],e)}e.children})(o(n,"nav"),t)}(U,["MENU","PROMOTIONS","ABOUT US","CONTACT"]);const _=o(U,"main");S(_,"home",2);const F=document.getElementsByTagName("ul")[0];F.children[0].addEventListener("click",()=>{_.childNodes[0].remove(),M(_,2,w,x),document.getElementById("menu-cat0").click()}),document.getElementById("home-logo").addEventListener("click",()=>{_.childNodes[0].remove(),S(_,"home",2)}),F.children[1].addEventListener("click",()=>{_.childNodes[0].remove(),function(e,t,n,o){const i=r(e,"promotions");O(o,n,N(a(i,t),n))}(_,2,j,C),document.getElementById("promo-menu0").click()}),F.children[3].addEventListener("click",()=>{_.childNodes[0].remove(),q(_,1)}),F.children[4].addEventListener("click",()=>{_.childNodes[0].remove(),R(_)})}]);