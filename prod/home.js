function n(n,t){for(var i=0;i<t.length;i++){var o=t[i];o.t=o.t||!1,o.i=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function t(n,t,i){return t in n?Object.defineProperty(n,t,{value:i,t:!0,i:!0,writable:!0}):n[t]=i,n}var i=function(){function i(){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),t(this,"styleClassDefRef",void 0),t(this,"styleCompansationDefRef",void 0),t(this,"navClone",void 0),t(this,"navReal",void 0),t(this,"previousTop",window.scrollY),t(this,"currentTop",0),t(this,"viewportWidth",window.innerWidth),t(this,"scrollThreshold",25),this.o(),this.l(),this.u(),this.h(),this.v()}var o,e,s;return o=i,(e=[{key:"_createClassDefinitions",value:function(){var n="\n      .navigation-clone {\n        position: fixed;\n        top: 0;\n        left: 0;\n        right: 0;\n        background: transparent;\n        z-index: 1000;\n        border-bottom: 1px solid transparent;\n        pointer-events: none;\n        transition: all 100ms ease-in-out;\n      }\n      .navigation-clone:not(.sticky-nav-show) .navigation-layout {\n        box-shadow: none !important;\n      }\n      .navigation-clone .supernav {\n        opacity: 0;\n        transition: all 150ms ease-in-out;\n      }\n      .navigation-clone .banner {\n        pointer-events: auto;\n      }\n      .navigation-clone .logo-container {\n        opacity: 0;\n        transition: all 150ms ease-in-out;\n      }\n      \n      .sticky-nav-show {\n        background-color: white;\n        border-bottom-color: rgba(35, 31, 32, 0.10);\n        pointer-events: auto;\n      }\n      .sticky-nav-show.navigation-clone .supernav {\n        opacity: 1;\n      }\n      .sticky-nav-show.navigation-clone .logo-container {\n        opacity: 1;\n      }\n    ";this.p?this.p.innerHTML=n:(this.p=document.createElement("style"),this.p.type="text/css",this.p.innerHTML=n,document.getElementsByTagName("head")[0].appendChild(this.p))}},{key:"_siloFixes",value:function(){var n=document.querySelector(".banner").getBoundingClientRect().height,t=document.querySelector(".supernav").getBoundingClientRect().height,i=window.innerHeight,o="";o+="\n      @media (min-width: 1023px) {\n        #silo-container {\n          top: ".concat(16+n,"px !important;\n          max-height: ").concat(i-(32+n),"px !important;\n          transition: all 125ms ease-in-out;\n          overflow: overlay;\n        }\n\n\n        #silo-container.push-down {\n          top: ").concat(16+n+t,"px !important;\n          max-height: ").concat(i-(32+n+t),"px !important;\n        }\n      }\n    "),this.m?this.m.innerHTML=o:(this.m=document.createElement("style"),this.m.type="text/css",this.m.innerHTML=o,document.getElementsByTagName("head")[0].appendChild(this.m))}},{key:"_cloneNav",value:function(){var n=document.body,t=document.querySelector(".navigation-layout"),i=t.cloneNode(!0),o=document.createElement("nav");o.classList.add("navigation-clone"),t.parentElement.classList.add("navigation-real"),o.append(i),n.prepend(o),this.k=o,this.g=t.parentElement}},{key:"_autoHideNavigation",value:function(){var n=document.querySelector("#silo-container");this._=window.scrollY;var t=Math.abs(this.C-this._)>this.T;this._>=this.g.getBoundingClientRect().height?t&&(this.C>=this._?(this.k.classList.add("sticky-nav-show"),null==n||n.classList.add("push-down")):(this.k.classList.remove("sticky-nav-show"),null==n||n.classList.remove("push-down"))):(this.k.classList.remove("sticky-nav-show"),null==n||n.classList.remove("push-down")),this.C=this._}},{key:"_resizeHandler",value:function(){this.S!==window.innerWidth&&(this.o(),this.l(),this.S=window.innerWidth)}},{key:"_handleScroll",value:function(){var n=this;this.O(),window.addEventListener("scroll",(function(){return window.requestAnimationFrame?requestAnimationFrame(n.O.bind(n)):setTimeout(n.O.bind(n),250)}),{passive:!0})}},{key:"_handleResizing",value:function(){var n=this;this.j(),window.addEventListener("resize",(function(){return window.requestAnimationFrame?requestAnimationFrame(n.j.bind(n)):setTimeout(n.j.bind(n),250)}),{passive:!0})}}])&&n(o.prototype,e),s&&n(o,s),i}();try{new i}catch(n){console.error("Could not init Sticky Nav: ".concat(n))}function o(n,t){for(var i=0;i<t.length;i++){var o=t[i];o.t=o.t||!1,o.i=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function e(n,t,i){return t in n?Object.defineProperty(n,t,{value:i,t:!0,i:!0,writable:!0}):n[t]=i,n}var s,a,c,r,l=function(){function n(){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),e(this,"supernavs",void 0),e(this,"previousTop",window.scrollY),e(this,"currentTop",0),e(this,"viewportWidth",window.innerWidth),e(this,"scrollThreshold",25),this.A(),this.D(),this.h(),this.F()}var t,i,s;return t=n,(i=[{key:"_getSupernavs",value:function(){this.M=document.querySelectorAll(".supernav")}},{key:"_configureSuperNav",value:function(){var n=this;this.M.forEach((function(t){var i=t.querySelector(".menu-button"),o=t.querySelector(".level-1.small"),e=t.querySelectorAll(".with-children");i.addEventListener("click",(function(){o.classList.contains("show")&&n.N(o,e),o.classList.toggle("show")})),e.forEach((function(t){var i=t.querySelector(".dropdown"),s=t.querySelector(".level-2");i.addEventListener("click",(function(){return n.R(e,o,s)})),s.querySelector(".return-level-1").addEventListener("click",(function(){return n.q(o)}))}))}))}},{key:"_goDeeper",value:function(n,t,i){this.H(n),t.classList.add("nest"),i.classList.add("show")}},{key:"_goShallow",value:function(n){n.classList.remove("nest")}},{key:"_resetSubMenus",value:function(n){n.forEach((function(n){n.querySelector(".level-2").classList.remove("show")}))}},{key:"_resetAll",value:function(n,t){n.classList.remove("nest"),t.forEach((function(n){n.querySelector(".level-2").classList.remove("show")}))}},{key:"_handleScroll",value:function(){var n=this;document.addEventListener("scroll",(function(){return window.requestAnimationFrame?requestAnimationFrame(n.W.bind(n)):setTimeout(n.W.bind(n),250)}),{passive:!0})}},{key:"_hideOnScroll",value:function(){var n=this;this._=window.scrollY,Math.abs(this.C-this._)>this.T&&this.M.forEach((function(t){var i=t.querySelector(".level-1.small"),o=t.querySelectorAll(".with-children");i.classList.contains("show")&&n.N(i,o),i.classList.remove("show")})),this.C=this._}},{key:"_handleClickOutside",value:function(){var n=this;this.M.forEach((function(t){var i=t.querySelector(".menu-button"),o=t.querySelector(".level-1.small"),e=t.querySelectorAll(".with-children");document.addEventListener("click",(function(t){var s=t.composedPath().includes(o),a=t.composedPath().includes(i);s||a||(o.classList.contains("show")&&n.N(o,e),o.classList.remove("show"))}))}))}}])&&o(t.prototype,i),s&&o(t,s),n}();try{new l}catch(n){console.error("Could not init Mobile supernav: ".concat(n))}try{s=document.querySelector(".cred-wrapper"),a=EmblaCarousel(s,{loop:!0}),c=document.querySelector(".cred-section .prev-control"),r=document.querySelector(".cred-section .next-control"),c.addEventListener("click",(function(){a.B()})),r.addEventListener("click",(function(){a.G()}))}catch(n){console.log("Could not init Carousel: ".concat(n))}try{document.querySelector("body").classList.remove("preload")}catch(n){console.log("Could not add transitions back")}try{document.querySelectorAll(".logo-container video").forEach((function(n){n.addEventListener("mouseenter",(function(){n.currentTime=0,n.play()})),n.addEventListener("mouseleave",(function(){n.currentTime=0,n.pause()}))}))}catch(n){console.log("Could not init video logo: ".concat(n))}
//# sourceMappingURL=index.f2cdc8b4.js.map
