const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-D1eFy1kS.js","assets/index-C7pY08Mi.js","assets/index-BcorOg7-.css","assets/index-TaRPLYnx.js","assets/index-C2qtBqCF.js","assets/Paws-CsP0WpZh.js","assets/useUniqueId-CnvKpuyc.js","assets/index-DXHzOlqk.js"])))=>i.map(i=>d[i]);
import{Z as r,_ as a,E as d,R as c,C as _,U as m,j as p,M as l,N as u,F as v,a as h,z as f,H as E}from"./index-C7pY08Mi.js";const R=r(()=>a(()=>import("./index-D1eFy1kS.js"),__vite__mapDeps([0,1,2]))),g=r(()=>a(()=>import("./index-TaRPLYnx.js"),__vite__mapDeps([3,1,2]))),w=r(()=>a(()=>import("./index-C2qtBqCF.js"),__vite__mapDeps([4,1,2,5,6]))),A=r(()=>a(()=>import("./index-DXHzOlqk.js"),__vite__mapDeps([7,1,2]))),T=(e,t)=>(d.getState(),new c([{path:"/",element:()=>R(e,t)},{path:"/programs",element:()=>w(e)},{path:"/membership",element:()=>A(e)},{path:"*",element:()=>g(e,t)}],[String(_(window.location.search)),"id","sort","name","page","pageSize"]).navigate("")),b=e=>{let t;(o=>{o.NAVBAR="navbar",o.ROUTER="router",o.FOOTER="footer",o.CHATBOT="chat"})(t||(t={})),m(["navbar","router","footer","chat"],e,[u,T,v,h]),window.addEventListener("keydown",o=>{const n=o;n.key==="Enter"&&!n.shiftKey&&n.preventDefault()});const s=p("a");return l(s)};function V(e){const t=f(e,E`
                <div class="relative hidescroll">
                    <header id="navbar" class="fixed top-0 left-0 bg-white shadow z-[99] w-full animate__animated animate__fadeInDown">
                    </header>
                    <div id="router" class="hidescroll"></div>
                    <footer id="footer"></footer>
                    <div id="chat"></div>
                </div>
                `);return b(e),t}export{V as default};
