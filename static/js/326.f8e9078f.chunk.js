"use strict";(self.webpackChunkauto_pulse=self.webpackChunkauto_pulse||[]).push([[326],{2848:function(e,r,n){n.d(r,{Z:function(){return x}});var t=n(4942),a=n(1413),i=n(9439),o=n(2791),l=n(8174),u=n(9282),c=n(184),s=function(e){var r=e.id,n=void 0===r?"text-input":r,s=e.label,m=void 0===s?"label":s,f=e.value,d=void 0===f?{from:"",to:""}:f,p=(0,o.useState)(d),v=(0,i.Z)(p,2),h=v[0],x=v[1],b=function(e){/^[0-9,]+$/.test(e.target.value)||!e.target.value.trim()?x((function(r){return(0,a.Z)((0,a.Z)({},r),{},(0,t.Z)({},e.target.name,(0,u.h)(e.target.value)))})):l.Am.warn("Please write only numbers")};return(0,c.jsxs)("div",{className:"input-fromto-field__group",children:[(0,c.jsx)("p",{children:m}),(0,c.jsxs)("div",{className:"input-fromto__container",children:[(0,c.jsxs)("div",{className:"input-fromto__wrapper",children:[(0,c.jsx)("label",{htmlFor:"".concat(n,"_from"),children:"From"}),(0,c.jsx)("input",{name:"from",value:h.from,className:"input__from",id:"".concat(n,"_from"),type:"text",onChange:b})]}),(0,c.jsxs)("div",{className:"input-fromto__wrapper",children:[(0,c.jsx)("label",{htmlFor:"".concat(n,"_to"),children:"To"}),(0,c.jsx)("input",{name:"to",value:h.to,className:"input__to",id:"".concat(n,"_to"),type:"text",onChange:b})]})]})]})},m=function(e){return(0,c.jsx)("svg",(0,a.Z)((0,a.Z)({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none"},e),{},{children:(0,c.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m5 7.5 5 5 5-5"})}))},f=function(e){var r=e.name,n=e.id,t=e.label,a=e.placeholder,l=void 0===a?"Enter the text":a,u=e.optionList,s=e.value,f=(0,o.useState)(s),d=(0,i.Z)(f,2),p=d[0],v=d[1];return(0,c.jsxs)("div",{className:"select-field__wrapper",children:[(0,c.jsx)("label",{htmlFor:r,children:t}),(0,c.jsxs)("select",{name:r,value:p,id:n,placeholder:l,onChange:function(e){v(e.target.value)},children:[(0,c.jsx)("option",{value:"",children:l}),u.map((function(e){return(0,c.jsx)("option",{value:e,children:e},"".concat(r,"_").concat(Math.random()))}))]}),(0,c.jsx)(m,{})]})},d=n(5735),p=n(5048),v=n(1116),h=n(686),x=function(e){var r=e.filtersList,n=(0,p.I0)(),a=(0,p.v9)(v.V);return(0,c.jsxs)("form",{className:"filter",onSubmit:function(e){var r;e.preventDefault();var a=e.target.elements,i=a.brand,o=a.price,l=a.from,c=a.to,s=(r={},(0,t.Z)(r,i.name,i.value),(0,t.Z)(r,o.name,o.value),(0,t.Z)(r,"mileage",{from:(0,u.q)(l.value),to:(0,u.q)(c.value)}),(0,t.Z)(r,"prices",[]),r);n((0,h.j)(s))},children:[(0,c.jsx)(f,{name:"brand",label:"Car brand",value:a.brand,optionList:r.brands}),(0,c.jsx)(f,{name:"price",label:"Price/ 1 hour",placeholder:"To $",value:a.price,optionList:r.prices}),(0,c.jsx)(s,{name:"mileage",label:"\u0421ar mileage / km",value:a.mileage}),(0,c.jsx)(d.Z,{type:"submit",children:"Search"})]})}},3733:function(e,r,n){n.r(r);var t=n(3433),a=n(9439),i=n(6181),o=n(2848),l=n(5735),u=n(6574),c=n(2791),s=n(5048),m=n(9067),f=n(1116),d=n(6726),p=n(9624),v=n(184);r.default=function(){var e=(0,s.v9)(f.V),r=(0,m.FP)(),n=r.data,h=r.isLoading,x=(0,c.useState)(1),b=(0,a.Z)(x,2),j=b[0],g=b[1],_={brands:[],prices:[]},Z=(0,c.useMemo)((function(){}),[]),w=0,N=0;if(!h){var k=n.filter((function(e){return e.favorite}));Z=(0,p.i)(k,e),_={brands:(0,t.Z)(new Set(k.map((function(e){return e.make})))),prices:(0,d.o)(0,Math.max.apply(Math,(0,t.Z)(new Set(k.map((function(e){return e.rentalPrice.replace(/(\$)/,"")}))))),10)},w=Z.length,N=w?Math.ceil(w/12):1}var L=(0,c.useMemo)((function(){var e,r=12*(j-1),n=r+12;return null===(e=Z)||void 0===e?void 0:e.slice(r,n)}),[j,Z]);return(0,v.jsx)(u.Z,{children:!h&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(o.Z,{filtersList:_}),(0,v.jsx)(i.Z,{list:L}),N>j&&(0,v.jsx)(l.Z,{variant:"text",className:"load-more__btn",onClick:function(){j<N&&(g((function(e){return e+1})),window.scrollTo(0,0))},children:"Load more"})]})})}},1116:function(e,r,n){n.d(r,{V:function(){return t}});var t=function(e){return e.filters}},6726:function(e,r,n){n.d(r,{o:function(){return t}});var t=function(e,r,n){return Array.from({length:Math.floor((r-e)/n)+1},(function(r,t){return e+t*n}))}},9624:function(e,r,n){n.d(r,{i:function(){return t}});var t=function(e,r){return e.filter((function(e){if(r.brand&&e.make!==r.brand)return!1;if(r.price&&Number(e.rentalPrice.replace(/(\$)/,""))>Number(r.price))return!1;if(r.mileage.from.trim()||r.mileage.to.trim()){var n=r.mileage,t=n.from,a=n.to,i=Number(e.mileage);if(void 0!==t&&i<Number(t)||void 0!==a&&i>Number(a))return!1}return!0}))}}}]);
//# sourceMappingURL=326.f8e9078f.chunk.js.map