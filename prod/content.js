!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function n(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}var o=function(){"use strict";function t(){e(this,t),this.previousTop=window.scrollY,this.currentTop=0,this.viewportWidth=window.innerWidth,this.scrollThreshold=25,this._createClassDefinitions(),this._siloFixes(),this._cloneNav(),this._handleScroll(),this._handleResizing()}return n(t,[{key:"_createClassDefinitions",value:function(){var e="\n      .navigation-clone {\n        position: fixed;\n        top: 0;\n        left: 0;\n        right: 0;\n        background: transparent;\n        z-index: 1005;\n        border-bottom: 1px solid transparent;\n        pointer-events: none;\n        transition: all 100ms ease-in-out;\n      }\n      .navigation-clone:not(.sticky-nav-show) .navigation-layout {\n        box-shadow: none !important;\n      }\n      .navigation-clone .supernav {\n        opacity: 0;\n        transition: all 150ms ease-in-out;\n      }\n      .navigation-clone .banner {\n        pointer-events: auto;\n      }\n      .navigation-clone .logo-container {\n        opacity: 0;\n        transition: all 150ms ease-in-out;\n      }\n      \n      .sticky-nav-show {\n        background-color: white;\n        border-bottom-color: rgba(35, 31, 32, 0.10);\n        pointer-events: auto;\n      }\n      .sticky-nav-show.navigation-clone .supernav {\n        opacity: 1;\n      }\n      .sticky-nav-show.navigation-clone .logo-container {\n        opacity: 1;\n      }\n    ";this.styleClassDefRef?this.styleClassDefRef.innerHTML=e:(this.styleClassDefRef=document.createElement("style"),this.styleClassDefRef.type="text/css",this.styleClassDefRef.innerHTML=e,document.getElementsByTagName("head")[0].appendChild(this.styleClassDefRef))}},{key:"_siloFixes",value:function(){var e=document.querySelector(".banner").getBoundingClientRect().height,t=document.querySelector(".supernav").getBoundingClientRect().height,n=window.innerHeight,o="";o+="\n      @media (min-width: 1023px) {\n        #silo-container {\n          top: ".concat(16+e,"px !important;\n          max-height: ").concat(n-(32+e),"px !important;\n          transition: all 125ms ease-in-out;\n          overflow: overlay;\n        }\n\n\n        #silo-container.push-down {\n          top: ").concat(16+e+t,"px !important;\n          max-height: ").concat(n-(32+e+t),"px !important;\n        }\n      }\n    "),this.styleCompansationDefRef?this.styleCompansationDefRef.innerHTML=o:(this.styleCompansationDefRef=document.createElement("style"),this.styleCompansationDefRef.type="text/css",this.styleCompansationDefRef.innerHTML=o,document.getElementsByTagName("head")[0].appendChild(this.styleCompansationDefRef))}},{key:"_cloneNav",value:function(){var e=document.body,t=document.querySelector(".navigation-layout"),n=t.cloneNode(!0),o=document.createElement("nav");o.classList.add("navigation-clone"),t.parentElement.classList.add("navigation-real"),o.append(n),e.prepend(o),this.navClone=o,this.navReal=t.parentElement}},{key:"_autoHideNavigation",value:function(){var e=document.querySelector("#silo-container");this.currentTop=window.scrollY;var t=Math.abs(this.previousTop-this.currentTop)>this.scrollThreshold;this.currentTop>=this.navReal.getBoundingClientRect().height?t&&(this.previousTop>=this.currentTop?(this.navClone.classList.add("sticky-nav-show"),null==e||e.classList.add("push-down")):(this.navClone.classList.remove("sticky-nav-show"),null==e||e.classList.remove("push-down"))):(this.navClone.classList.remove("sticky-nav-show"),null==e||e.classList.remove("push-down")),this.previousTop=this.currentTop}},{key:"_resizeHandler",value:function(){this.viewportWidth!==window.innerWidth&&(this._createClassDefinitions(),this._siloFixes(),this.viewportWidth=window.innerWidth)}},{key:"_handleScroll",value:function(){var e=this;this._autoHideNavigation();window.addEventListener("scroll",(function(){return window.requestAnimationFrame?requestAnimationFrame(e._autoHideNavigation.bind(e)):setTimeout(e._autoHideNavigation.bind(e),250)}),{passive:!0})}},{key:"_handleResizing",value:function(){var e=this;this._resizeHandler();window.addEventListener("resize",(function(){return window.requestAnimationFrame?requestAnimationFrame(e._resizeHandler.bind(e)):setTimeout(e._resizeHandler.bind(e),250)}),{passive:!0})}}]),t}();try{new o}catch(e){console.error("Could not init Sticky Nav: ".concat(e))}var i=function(){"use strict";function t(){e(this,t),this.previousTop=window.scrollY,this.currentTop=0,this.viewportWidth=window.innerWidth,this.scrollThreshold=25,this._getSupernavs(),this._configureSuperNav(),this._handleScroll(),this._handleClickOutside()}return n(t,[{key:"_getSupernavs",value:function(){this.supernavs=document.querySelectorAll(".supernav")}},{key:"_configureSuperNav",value:function(){var e=this;this.supernavs.forEach((function(t){var n=e,o=e,i=t.querySelector(".menu-button"),r=t.querySelector(".level-1.small"),a=t.querySelectorAll(".with-children");i.addEventListener("click",(function(){r.classList.contains("show")&&n._resetAll(r,a),r.classList.toggle("show")})),a.forEach((function(e){var t=o,n=o,i=e.querySelector(".dropdown"),c=e.querySelector(".level-2");i.addEventListener("click",(function(){return t._goDeeper(a,r,c)})),c.querySelector(".return-level-1").addEventListener("click",(function(){return n._goShallow(r)}))}))}))}},{key:"_goDeeper",value:function(e,t,n){this._resetSubMenus(e),t.classList.add("nest"),n.classList.add("show")}},{key:"_goShallow",value:function(e){e.classList.remove("nest")}},{key:"_resetSubMenus",value:function(e){e.forEach((function(e){e.querySelector(".level-2").classList.remove("show")}))}},{key:"_resetAll",value:function(e,t){e.classList.remove("nest"),t.forEach((function(e){e.querySelector(".level-2").classList.remove("show")}))}},{key:"_handleScroll",value:function(){var e=this;document.addEventListener("scroll",(function(){return window.requestAnimationFrame?requestAnimationFrame(e._hideOnScroll.bind(e)):setTimeout(e._hideOnScroll.bind(e),250)}),{passive:!0})}},{key:"_hideOnScroll",value:function(){var e=this;this.currentTop=window.scrollY,Math.abs(this.previousTop-this.currentTop)>this.scrollThreshold&&this.supernavs.forEach((function(t){var n=t.querySelector(".level-1.small"),o=t.querySelectorAll(".with-children");n.classList.contains("show")&&e._resetAll(n,o),n.classList.remove("show")})),this.previousTop=this.currentTop}},{key:"_handleClickOutside",value:function(){var e=this;this.supernavs.forEach((function(t){var n=e,o=t.querySelector(".menu-button"),i=t.querySelector(".level-1.small"),r=t.querySelectorAll(".with-children");document.addEventListener("click",(function(e){var t=e.composedPath().includes(i),a=e.composedPath().includes(o);t||a||(i.classList.contains("show")&&n._resetAll(i,r),i.classList.remove("show"))}))}))}}]),t}();try{new i}catch(e){console.error("Could not init Mobile supernav: ".concat(e))}var r,a,c=[];try{document.querySelectorAll(".accordion").forEach((function(e,t){c.push({container:e,activeElement:null}),e.querySelectorAll(".accordion-navigation").forEach((function(n){n.classList.contains("active")&&(c[t].activeElement=n),n.querySelector("a").onclick=function(t){t.preventDefault(),function(e,t){for(var n=0;n<c.length;n++)if(e===c[n].container){if(c[n].activeElement&&(c[n].activeElement.classList.remove("active"),c[n].activeElement===t)){c[n].activeElement=null;break}t.classList.add("active"),c[n].activeElement=t;break}}(e,n)}}))}))}catch(e){console.error("Could not init Accordion: ".concat(e))}try{r=document.querySelector("#silo-menu-button"),a=document.querySelector("#silo-container"),null==r||r.addEventListener("click",(function(){a.classList.toggle("show")}))}catch(e){console.error("Could not init Silo: ".concat(e))}
/*! medium-zoom 1.0.6 | MIT License | https://github.com/francoischalifour/medium-zoom */var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s=function(e){return"IMG"===e.tagName},d=function(e){return e&&1===e.nodeType},u=function(e){return".svg"===(e.currentSrc||e.src).substr(-4).toLowerCase()},m=function(e){try{return Array.isArray(e)?e.filter(s):function(e){return NodeList.prototype.isPrototypeOf(e)}(e)?[].slice.call(e).filter(s):d(e)?[e].filter(s):"string"==typeof e?[].slice.call(document.querySelectorAll(e)).filter(s):[]}catch(e){throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom")}},h=function(e){var t=document.createElement("div");return t.classList.add("medium-zoom-overlay"),t.style.background=e,t},v=function(e){var t=e.getBoundingClientRect(),n=t.top,o=t.left,i=t.width,r=t.height,a=e.cloneNode(),c=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,l=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return a.removeAttribute("id"),a.style.position="absolute",a.style.top=n+c+"px",a.style.left=o+l+"px",a.style.width=i+"px",a.style.height=r+"px",a.style.transform="",a},f=function(e,t){var n=l({bubbles:!1,cancelable:!1,detail:void 0},t);if("function"==typeof window.CustomEvent)return new CustomEvent(e,n);var o=document.createEvent("CustomEvent");return o.initCustomEvent(e,n.bubbles,n.cancelable,n.detail),o};!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&o.firstChild?o.insertBefore(i,o.firstChild):o.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}");var p,g=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=window.Promise||function(e){function t(){}e(t,t)},i=function(e){var t=e.target;t!==x?-1!==S.indexOf(t)&&L({target:t}):z()},r=function(){if(!q&&A.original){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(T-e)>H.scrollOffset&&setTimeout(z,150)}},a=function(e){var t=e.key||e.keyCode;"Escape"!==t&&"Esc"!==t&&27!==t||z()},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e;if(e.background&&(x.style.background=e.background),e.container&&e.container instanceof Object&&(t.container=l({},H.container,e.container)),e.template){var n=d(e.template)?e.template:document.querySelector(e.template);t.template=n}return H=l({},H,t),S.forEach((function(e){e.dispatchEvent(f("medium-zoom:update",{detail:{zoom:D}}))})),D},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e(l({},H,t))},p=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=t.reduce((function(e,t){return[].concat(e,m(t))}),[]);return o.filter((function(e){return-1===S.indexOf(e)})).forEach((function(e){S.push(e),e.classList.add("medium-zoom-image")})),_.forEach((function(e){var t=e.type,n=e.listener,i=e.options;o.forEach((function(e){e.addEventListener(t,n,i)}))})),D},g=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];A.zoomed&&z();var o=t.length>0?t.reduce((function(e,t){return[].concat(e,m(t))}),[]):S;return o.forEach((function(e){e.classList.remove("medium-zoom-image"),e.dispatchEvent(f("medium-zoom:detach",{detail:{zoom:D}}))})),S=S.filter((function(e){return-1===o.indexOf(e)})),D},y=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return S.forEach((function(o){o.addEventListener("medium-zoom:"+e,t,n)})),_.push({type:"medium-zoom:"+e,listener:t,options:n}),D},w=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return S.forEach((function(o){o.removeEventListener("medium-zoom:"+e,t,n)})),_=_.filter((function(n){return!(n.type==="medium-zoom:"+e&&n.listener.toString()===t.toString())})),D},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.target,n=function(){var e={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},t=void 0,n=void 0;if(H.container)if(H.container instanceof Object)t=(e=l({},e,H.container)).width-e.left-e.right-2*H.margin,n=e.height-e.top-e.bottom-2*H.margin;else{var o=(d(H.container)?H.container:document.querySelector(H.container)).getBoundingClientRect(),i=o.width,r=o.height,a=o.left,c=o.top;e=l({},e,{width:i,height:r,left:a,top:c})}t=t||e.width-2*H.margin,n=n||e.height-2*H.margin;var s=A.zoomedHd||A.original,m=u(s)?t:s.naturalWidth||t,h=u(s)?n:s.naturalHeight||n,v=s.getBoundingClientRect(),f=v.top,p=v.left,g=v.width,y=v.height,w=Math.min(m,t)/g,b=Math.min(h,n)/y,z=Math.min(w,b),L="scale("+z+") translate3d("+((t-g)/2-p+H.margin+e.left)/z+"px, "+((n-y)/2-f+H.margin+e.top)/z+"px, 0)";A.zoomed.style.transform=L,A.zoomedHd&&(A.zoomedHd.style.transform=L)};return new o((function(e){if(t&&-1===S.indexOf(t))e(D);else{if(A.zoomed)e(D);else{if(t)A.original=t;else{if(!(S.length>0))return void e(D);var o=S;A.original=o[0]}if(A.original.dispatchEvent(f("medium-zoom:open",{detail:{zoom:D}})),T=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,q=!0,A.zoomed=v(A.original),document.body.appendChild(x),H.template){var i=d(H.template)?H.template:document.querySelector(H.template);A.template=document.createElement("div"),A.template.appendChild(i.content.cloneNode(!0)),document.body.appendChild(A.template)}if(document.body.appendChild(A.zoomed),window.requestAnimationFrame((function(){document.body.classList.add("medium-zoom--opened")})),A.original.classList.add("medium-zoom-image--hidden"),A.zoomed.classList.add("medium-zoom-image--opened"),A.zoomed.addEventListener("click",z),A.zoomed.addEventListener("transitionend",(function t(){q=!1,A.zoomed.removeEventListener("transitionend",t),A.original.dispatchEvent(f("medium-zoom:opened",{detail:{zoom:D}})),e(D)})),A.original.getAttribute("data-zoom-src")){A.zoomedHd=A.zoomed.cloneNode(),A.zoomedHd.removeAttribute("srcset"),A.zoomedHd.removeAttribute("sizes"),A.zoomedHd.src=A.zoomed.getAttribute("data-zoom-src"),A.zoomedHd.onerror=function(){clearInterval(r),console.warn("Unable to reach the zoom image target "+A.zoomedHd.src),A.zoomedHd=null,n()};var r=setInterval((function(){A.zoomedHd.complete&&(clearInterval(r),A.zoomedHd.classList.add("medium-zoom-image--opened"),A.zoomedHd.addEventListener("click",z),document.body.appendChild(A.zoomedHd),n())}),10)}else if(A.original.hasAttribute("srcset")){A.zoomedHd=A.zoomed.cloneNode(),A.zoomedHd.removeAttribute("sizes"),A.zoomedHd.removeAttribute("loading");var a=A.zoomedHd.addEventListener("load",(function(){A.zoomedHd.removeEventListener("load",a),A.zoomedHd.classList.add("medium-zoom-image--opened"),A.zoomedHd.addEventListener("click",z),document.body.appendChild(A.zoomedHd),n()}))}else n()}}}))},z=function(){return new o((function(e){if(!q&&A.original){q=!0,document.body.classList.remove("medium-zoom--opened"),A.zoomed.style.transform="",A.zoomedHd&&(A.zoomedHd.style.transform=""),A.template&&(A.template.style.transition="opacity 150ms",A.template.style.opacity=0),A.original.dispatchEvent(f("medium-zoom:close",{detail:{zoom:D}})),A.zoomed.addEventListener("transitionend",(function t(){A.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(A.zoomed),A.zoomedHd&&document.body.removeChild(A.zoomedHd),document.body.removeChild(x),A.zoomed.classList.remove("medium-zoom-image--opened"),A.template&&document.body.removeChild(A.template),q=!1,A.zoomed.removeEventListener("transitionend",t),A.original.dispatchEvent(f("medium-zoom:closed",{detail:{zoom:D}})),A.original=null,A.zoomed=null,A.zoomedHd=null,A.template=null,e(D)}))}else e(D)}))},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.target;return A.original?z():b({target:t})},E=function(){return H},k=function(){return S},C=function(){return A.original},S=[],_=[],q=!1,T=0,H=n,A={original:null,zoomed:null,zoomedHd:null,template:null};"[object Object]"===Object.prototype.toString.call(t)?H=t:(t||"string"==typeof t)&&p(t),H=l({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},H);var x=h(H.background);document.addEventListener("click",i),document.addEventListener("keyup",a),document.addEventListener("scroll",r),window.addEventListener("resize",z);var D={open:b,close:z,toggle:L,update:c,clone:s,attach:p,detach:g,on:y,off:w,getOptions:E,getImages:k,getZoomedImage:C};return D},y=function(){"use strict";function t(){e(this,t),this.lightboxLinks=document.querySelectorAll(".lightbox"),this._configure(),this._run()}return n(t,[{key:"_configure",value:function(){var e=this;this.lightboxLinks.forEach((function(t){e._setHDLink(t),e._preventNavigation(t)}))}},{key:"_setHDLink",value:function(e){var t=e.querySelector("img"),n=e.href;t.setAttribute("data-zoom-src",n)}},{key:"_preventNavigation",value:function(e){null==e||e.addEventListener("click",(function(e){return e.preventDefault()}))}},{key:"_run",value:function(){g(".lightbox img",{background:"rgba(0, 0, 0, 0.75)",margin:32})}}]),t}();try{new y}catch(e){console.error("Could not init Lightbox: ".concat(e))}null==(p=document.querySelector("#related_page"))||p.addEventListener("change",(function(e){"0"!==p.value&&(window.location.href=p.value+"?cache=0&dev_template=1&test=1")}));var w=function(){"use strict";function t(){e(this,t),this.templateOptions={templateID:"zoom-template",imageContainerID:"zoom-container",contentID:"zoom-content"},this.colorLinks=document.querySelectorAll(".colorlink"),this._createTemplateItem(),this._configure(),this._run(),this._handleEvents()}return n(t,[{key:"_createTemplateItem",value:function(){var e=document.createElement("template");e.setAttribute("id",this.templateOptions.templateID),e.innerHTML='  \n      <div class="template-colorlink-wrapper">\n        <div class="colorlink-content">\n          <aside id="'.concat(this.templateOptions.imageContainerID,'"></aside>\n          <article id="').concat(this.templateOptions.contentID,'"></article>\n        </div>\n      </div>\n    '),document.querySelector("body").appendChild(e)}},{key:"_configure",value:function(){var e=this;this.colorLinks.forEach((function(t){e._preventNavigation(t),e._setHDLink(t),e._handleColorLinkAction(t)}))}},{key:"_handleColorLinkAction",value:function(e){var t=this;e.addEventListener("click",(function(n){var o=document.querySelector("".concat(e.getAttribute("href")," .popupimagetext"));t.activeColorLinkInnerHTML=o.innerHTML}))}},{key:"_preventNavigation",value:function(e){e.addEventListener("click",(function(e){return e.preventDefault()}))}},{key:"_setHDLink",value:function(e){var t=e.querySelector("img"),n=document.querySelector("".concat(e.getAttribute("href")," img")).src;t.setAttribute("data-zoom-src",n)}},{key:"_setColorLinkContent",value:function(){var e=this;setTimeout((function(){var t=document.querySelector("#".concat(e.templateOptions.contentID));t&&(t.innerHTML=e.activeColorLinkInnerHTML)}),0),document.body.style.overflow="hidden"}},{key:"_run",value:function(){this.zoomInstance=g(".colorlink img",{template:"#".concat(this.templateOptions.templateID),container:"#".concat(this.templateOptions.imageContainerID),background:"rgba(0, 0, 0, 0.75)",margin:32})}},{key:"_handleEvents",value:function(){var e,t;null===(e=this.zoomInstance)||void 0===e||e.on("open",this._setColorLinkContent.bind(this)),null===(t=this.zoomInstance)||void 0===t||t.on("closed",(function(){document.body.style.overflow="auto"}))}}]),t}();try{new w}catch(e){console.error("Could not init Colorlink: ".concat(e))}try{document.querySelector("body").classList.remove("preload")}catch(e){console.log("Could not add transitions back")}try{document.querySelectorAll(".logo-container video").forEach((function(e){e.addEventListener("mouseenter",(function(){e.currentTime=0,e.play()})),e.addEventListener("mouseleave",(function(){e.currentTime=e.duration-1,e.pause()}))}))}catch(e){console.log("Could not init video logo: ".concat(e))}var b=[];try{document.querySelectorAll(".qa-wrap").forEach((function(e,t){b.push({container:e,activeElement:null}),e.querySelectorAll(".qa-item").forEach((function(n){n.classList.contains("active")&&(b[t].activeElement=n),n.querySelector(".qa-header").onclick=function(t){!function(e,t){for(var n=0;n<b.length;n++)if(e===b[n].container){if(b[n].activeElement&&(b[n].activeElement.classList.remove("active"),b[n].activeElement===t)){b[n].activeElement=null;break}t.classList.add("active"),b[n].activeElement=t;break}}(e,n)}}))}))}catch(e){console.error("Could not init QA: ".concat(e))}try{!function(){var e=document.querySelector("#content_selector"),t=document.querySelector("#tabs-written"),n=document.querySelector("#tabs-video");null==e||e.addEventListener("change",(function(o){"video"===e.value&&(null==t||t.classList.add("hide"),null==n||n.classList.remove("hide")),"written"===e.value&&(null==t||t.classList.remove("hide"),null==n||n.classList.add("hide"))}))}()}catch(e){console.error("Could not init Content Selector: ".concat(e))}}();
//# sourceMappingURL=content_template.60d65d51.js.map
