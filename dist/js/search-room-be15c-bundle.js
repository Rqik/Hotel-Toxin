(()=>{var e={108:(e,t,r)=>{"use strict";r(255),r(631),r(476),r(647);var n=r(638);class s{static init(){const e=n(".js-menu__item_with-list");n(".js-menu__burger").on("click",s.toggleMenuBurger),e.append('<i class="menu__icon"> expand_more </i>'),n(document).click(s.documentEvent),e.hover(s.handlerIn,s.handlerOut)}static documentEvent(e){n(e.target).closest(".js-menu__items").length||n(e.target).closest(".js-menu__burger").length||n(".js-menu__items").removeClass("menu__burger_active")}static handlerIn(e){n("ul",e.currentTarget).stop().slideDown(200)}static handlerOut(e){n("ul",e.currentTarget).stop().slideUp(200)}static toggleMenuBurger(e){n(e.currentTarget).siblings(".js-menu__items").toggleClass("menu__burger_active")}}r(638)((()=>{s.init()})),r(443),r(224),r(426);var i=r(205),a=r(403),o=r(803),l=r(296);i.Z.use([a.Z,o.Z,l.Z]);class u{constructor(e){this.selector=e,this.options={loop:!0,slidesPerView:1,direction:"horizontal",effect:"fade",pagination:{el:".swiper-pagination-img",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}init(){this.slider=new i.Z(this.selector,this.options)}}r(638)((()=>{new u(".js-swiper-slider").init()}))},631:(e,t,r)=>{var n=r(638);n((()=>{n(".js-search-page__panel-btn").on("click",(function(){n(".js-search-page__panel").toggleClass("search-page__panel_fixed")}))}))}},t={};function r(n){if(t[n])return t[n].exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}r.m=e,r.amdO={},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={769:0},t=[[108,587,248,399,255,772]],n=()=>{};function s(){for(var n,s=0;s<t.length;s++){for(var i=t[s],a=!0,o=1;o<i.length;o++){var l=i[o];0!==e[l]&&(a=!1)}a&&(t.splice(s--,1),n=r(r.s=i[0]))}return 0===t.length&&(r.x(),r.x=()=>{}),n}r.x=()=>{r.x=()=>{},a=a.slice();for(var e=0;e<a.length;e++)i(a[e]);return(n=s)()};var i=s=>{for(var i,a,[l,u,c,p]=s,g=0,h=[];g<l.length;g++)a=l[g],r.o(e,a)&&e[a]&&h.push(e[a][0]),e[a]=0;for(i in u)r.o(u,i)&&(r.m[i]=u[i]);for(c&&c(r),o(s);h.length;)h.shift()();return p&&t.push.apply(t,p),n()},a=self.webpackChunk=self.webpackChunk||[],o=a.push.bind(a);a.push=i})(),r.x()})();