import{P as c}from"./Paws-CsP0WpZh.js";import{s as m,H as i,z as u,L as v}from"./index-C7pY08Mi.js";import{T as f}from"./index-DVjjVzS5.js";import{u as p}from"./useUniqueId-CnvKpuyc.js";function _(s){const t=[],d=m(f.map(({title:e,image:l},r)=>{const{dataId:a}=p();t.push(a);const n=`animate__delay-${r+1}s`;return i`
                <div
                    class="relative rounded-md text-white grid items-center px-6 overflow-hidden animate__animated animate__zoomIn ${n}">
                    <div>
                        <div class="absolute top-0 left-0 w-full h-full ${l} bg-cover bg-center"></div>
                        <div class="absolute top-0 left-0 bg-black/60 w-full h-full"></div>
                        <div class="relative">
                            <h2 class="font-semibold text-3xl">${e}</h2>
                            <p class="underline">Read more</p>
                        </div>
                        <div id="${a}" class="absolute bottom-2 right-2 w-8 h-8 bg-gray-200 grid place-items-center rounded-xl">
                        </div>
                    </div>
                </div>
            `})),o=u(s,i`
        <section class="my-16">
            <div class="grid grid-cols-3 min-h-[20em] gap-4">
                ${d}
            </div>
        </section>
        `);return t.forEach(e=>v(`${e}`,s,c)),o}export{_ as default};
