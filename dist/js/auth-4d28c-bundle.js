(()=>{"use strict";var e={517:(e,t,r)=>{r(255),r(587);var n=r(638);r(638)((()=>{(class{static init(){n(".js-field_text[name*=email]").mask("A",{translation:{A:{pattern:/[\w@\-.+]/,recursive:!0}}}),n(".js-field_text[name*=name]").mask("A",{translation:{A:{pattern:/[\w+]/,recursive:!0}}}),n(".js-field_text[name*=date]").mask("00.00.0000")}}).init()}));var s=r(638);class a{static init(){const e=s(".js-menu__item_more");s(".js-menu__burger").on("click",a.toggleMenuBurger),e.append('<i class="icon"> expand_more </i>'),s(document).click(a.documentEvent),e.hover(a.handlerIn,a.handlerOut)}static documentEvent(e){s(e.target).closest(".js-menu__items").length||s(e.target).closest(".js-menu__burger").length||s(".js-menu__items").removeClass("menu__burger_active")}static handlerIn(e){s("ul",e.currentTarget).stop().slideDown(200)}static handlerOut(e){s("ul",e.currentTarget).stop().slideUp(200)}static toggleMenuBurger(e){s(e.currentTarget).siblings(".js-menu__items").toggleClass("menu__burger_active")}}r(638)((()=>{a.init()}))}},t={};function r(n){if(t[n])return t[n].exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}r.m=e,r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={818:0},t=[[517,587,255]],n=()=>{};function s(){for(var n,s=0;s<t.length;s++){for(var a=t[s],i=!0,l=1;l<a.length;l++){var u=a[l];0!==e[u]&&(i=!1)}i&&(t.splice(s--,1),n=r(r.s=a[0]))}return 0===t.length&&(r.x(),r.x=()=>{}),n}r.x=()=>{r.x=()=>{},i=i.slice();for(var e=0;e<i.length;e++)a(i[e]);return(n=s)()};var a=s=>{for(var a,i,[u,o,c,m]=s,g=0,p=[];g<u.length;g++)i=u[g],r.o(e,i)&&e[i]&&p.push(e[i][0]),e[i]=0;for(a in o)r.o(o,a)&&(r.m[a]=o[a]);for(c&&c(r),l(s);p.length;)p.shift()();return m&&t.push.apply(t,m),n()},i=self.webpackChunk=self.webpackChunk||[],l=i.push.bind(i);i.push=a})(),r.x()})();