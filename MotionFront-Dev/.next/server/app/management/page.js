(()=>{var e={};e.id=393,e.ids=[393],e.modules={399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},209:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},5315:e=>{"use strict";e.exports=require("path")},7742:(e,a,t)=>{"use strict";t.r(a),t.d(a,{GlobalError:()=>s.a,__next_app__:()=>m,pages:()=>d,routeModule:()=>h,tree:()=>c});var n=t(3003),r=t(4293),i=t(6550),s=t.n(i),o=t(6979),l={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);t.d(a,l);let c=["",{children:["management",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,9709)),"/home/jhoanduarte/Descargas/Brayan/MotionBackend-dev/MotionFront-Dev/src/app/management/page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,7789)),"/home/jhoanduarte/Descargas/Brayan/MotionBackend-dev/MotionFront-Dev/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,2075,23)),"next/dist/client/components/not-found-error"]}],d=["/home/jhoanduarte/Descargas/Brayan/MotionBackend-dev/MotionFront-Dev/src/app/management/page.js"],m={require:t,loadChunk:()=>Promise.resolve()},h=new n.AppPageRouteModule({definition:{kind:r.RouteKind.APP_PAGE,page:"/management/page",pathname:"/management",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},3912:(e,a,t)=>{Promise.resolve().then(t.t.bind(t,6114,23)),Promise.resolve().then(t.t.bind(t,2639,23)),Promise.resolve().then(t.t.bind(t,9727,23)),Promise.resolve().then(t.t.bind(t,9671,23)),Promise.resolve().then(t.t.bind(t,1868,23)),Promise.resolve().then(t.t.bind(t,4759,23)),Promise.resolve().then(t.t.bind(t,2816,23))},3803:()=>{},7755:(e,a,t)=>{Promise.resolve().then(t.bind(t,9203))},9029:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),function(e,a){for(var t in a)Object.defineProperty(e,t,{enumerable:!0,get:a[t]})}(a,{default:function(){return l},getImageProps:function(){return o}});let n=t(1174),r=t(3078),i=t(2481),s=n._(t(6820));function o(e){let{props:a}=(0,r.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,t]of Object.entries(a))void 0===t&&delete a[e];return{props:a}}let l=i.Image},9203:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>u});var n=t(8819),r=t(1801),i=t.n(r),s=t(9029),o=t.n(s),l=t(9404),c=t.n(l),d=t(7266);let m=async()=>{let e=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/records`,{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error("A\xfan no hay registros disponibles");return(await e.json()).reverse()},h=async e=>{let a=e.id?`${process.env.NEXT_PUBLIC_API_URL}/records/${e.id}`:`${process.env.NEXT_PUBLIC_API_URL}/records`,t=e.id?"PUT":"POST",n=await fetch(a,{method:t,headers:{"Content-Type":"application/json"},body:JSON.stringify({brand:e.brand,location:e.location,candidate:e.candidate})});if(!n.ok)throw Error(`Error al ${e.id?"actualizar":"crear"} el registro`);return await n.json()},g=async e=>{if(!(await fetch(`${process.env.NEXT_PUBLIC_API_URL}/records/${e}`,{method:"DELETE"})).ok)throw Error("Error al eliminar el registro")};function u(){let[e,a]=(0,d.useState)(!1),[t,r]=(0,d.useState)(""),[s,l]=(0,d.useState)([]),[u,_]=(0,d.useState)({brand:"",location:"",candidate:"",id:null}),[p,b]=(0,d.useState)(null),v=()=>{a(e=>!e),x(),b(null)},x=()=>{_({brand:"",location:"",candidate:"",id:null})},j=e=>{let{id:a,value:t}=e.target;_({...u,[a]:t})},f=async e=>{e.preventDefault();try{let e=await h(u);u.id?l(s.map(a=>a.id===e.id?e:a)):l([e,...s]);let t=await m();l(t),x(),a(!1),b(null)}catch(e){r(e.message),setTimeout(()=>{r("")},2e3)}},C=e=>{_({brand:e.brand,location:e.location,candidate:e.candidate,id:e.id}),a(!0),b(e.id)},w=async e=>{if(confirm("\xbfEst\xe1s seguro de que deseas eliminar este registro?"))try{await g(e);let a=await m();l(a)}catch(e){r(e.message),setTimeout(()=>{r("")},2e3)}};return(0,n.jsxs)("div",{className:i().container,children:[(0,n.jsx)(c(),{className:i().back,href:"/",children:(0,n.jsx)(o(),{src:"/images/arrow-left.svg",alt:"arrow-right",width:40,height:40})}),(0,n.jsxs)("form",{className:`${i().card} ${e&&i().cardExpanded}`,children:[(0,n.jsx)("div",{onClick:v,className:i().createAction,children:(0,n.jsx)(o(),{src:"/images/icon_crear.svg",alt:"create icon",width:20,height:20})}),(0,n.jsxs)("div",{className:i().brandContainer,children:[(0,n.jsx)("label",{htmlFor:"brand",className:i().label,children:(0,n.jsx)(o(),{src:e?"/images/Icon_vehiculo1.svg":"/images/Icon_vehiculo.svg",alt:"",width:30,height:30})}),(0,n.jsx)("input",{disabled:!e,value:u.brand,onChange:j,id:"brand",className:i().input})]}),(0,n.jsxs)("div",{className:i().locationContainer,children:[(0,n.jsx)("label",{htmlFor:"location",className:i().label,children:(0,n.jsx)(o(),{src:e?"/images/Icon_puntoubicacion1.svg":"/images/Icon_puntoubicacion.svg",alt:"",width:30,height:30})}),(0,n.jsx)("input",{disabled:!e,value:u.location,onChange:j,id:"location",className:i().input})]}),(0,n.jsxs)("div",{className:i().nameContainer,children:[(0,n.jsx)("label",{htmlFor:"candidate",className:i().label,children:(0,n.jsx)(o(),{src:e?"/images/Icon_persona1.svg":"/images/Icon_persona.svg",alt:"",width:30,height:30})}),(0,n.jsx)("input",{disabled:!e,value:u.candidate,onChange:j,id:"candidate",className:i().input})]}),(0,n.jsxs)("div",{className:`${i().btnContent} ${e&&i().visible}`,"data-active":e,children:[u.id?(0,n.jsx)(o(),{src:"/images/Icon_cancelar.svg",onClick:v,style:{cursor:"pointer"},alt:"",width:22,height:22}):(0,n.jsx)("button",{type:"button",onClick:v,className:`${i().btn} ${i().btnCancel}`,children:"Cancelar"}),u.id?(0,n.jsx)(o(),{src:"/images/Icon_confirmar.svg",onClick:f,style:{cursor:"pointer"},alt:"",width:22,height:22}):(0,n.jsx)("button",{onClick:f,type:"submit",className:`${i().btn} ${i().btnCreate}`,children:"Crear"})]})]}),(0,n.jsxs)("div",{className:i().tableContainer,children:[s?(0,n.jsxs)("table",{className:i().table,children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Marca"}),(0,n.jsx)("th",{children:"Sucursal"}),(0,n.jsx)("th",{colSpan:"2",children:"Aspirante"})]})}),(0,n.jsx)("tbody",{children:s.map((a,t)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:a.brand}),(0,n.jsx)("td",{children:a.location}),(0,n.jsx)("td",{children:(0,n.jsx)("label",{children:a.candidate})}),(0,n.jsx)("td",{children:(0,n.jsxs)("div",{children:[(0,n.jsx)(o(),{className:i().btnActionTable,src:p!==a.id&&e?"/images/Icon_editar.svg":"/images/Icon_editar1.svg",alt:"edit",width:25,height:25,onClick:()=>!e&&C(a)}),(0,n.jsx)(o(),{className:i().btnActionTable,src:p!==a.id&&e?"/images/Icon_eliminar.svg":"/images/Icon_eliminar1.svg",alt:"delete",width:25,height:25,onClick:()=>!e&&w(a.id)})]})})]},t))})]}):null,t&&(0,n.jsx)("p",{className:i().error,children:t})]}),(0,n.jsx)("div",{className:i().contentBottom,children:(0,n.jsx)(o(),{src:"/images/Imagologotipo_motion.svg",alt:"logo type",width:200,height:350})})]})}},1801:e=>{e.exports={container:"management_container__QMw91",back:"management_back__Ki_Wy",card:"management_card__qXA_J",cardExpanded:"management_cardExpanded__bZMux",createAction:"management_createAction__kxs_I",brandContainer:"management_brandContainer__mJOvf",locationContainer:"management_locationContainer__SlJkA",nameContainer:"management_nameContainer__1Ox8U",input:"management_input__2KKm0",btnContent:"management_btnContent__igZZt",showTransition:"management_showTransition__pX3Lz",hideTransition:"management_hideTransition__DddTR",visible:"management_visible__9F1K7",btn:"management_btn__i85Y2",btnCancel:"management_btnCancel__6MBob",btnCreate:"management_btnCreate__yVf1T",tableContainer:"management_tableContainer__FIXxy",table:"management_table__zwyVs",btnActionTable:"management_btnActionTable__wDiRP",contentBottom:"management_contentBottom__XP7wP",error:"management_error__oZauF"}},7789:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>o,metadata:()=>s});var n=t(9351),r=t(9383),i=t.n(r);t(4315);let s={title:"Motion",description:"Sitio web para un concesionario"};function o({children:e}){return(0,n.jsx)("html",{lang:"en",children:(0,n.jsx)("body",{className:`${i().className} antialiased`,children:e})})}},9709:(e,a,t)=>{"use strict";t.a(e,async(e,n)=>{try{t.r(a),t.d(a,{default:()=>e});var r=t(1851);let e=(await (0,r.createProxy)(String.raw`/home/jhoanduarte/Descargas/Brayan/MotionBackend-dev/MotionFront-Dev/src/app/management/page.js`)).default;n()}catch(e){n(e)}},1)},4315:()=>{}};var a=require("../../webpack-runtime.js");a.C(e);var t=e=>a(a.s=e),n=a.X(0,[635,162],()=>t(7742));module.exports=n})();