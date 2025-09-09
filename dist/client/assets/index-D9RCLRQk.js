import{C as n}from"./index-DVjjVzS5.js";import{s as m,H as i,z as f}from"./index-C7pY08Mi.js";import{u as g}from"./useUniqueId-CnvKpuyc.js";function p(t){const e=m(n.map(({title:a,desc:l,image:s},d)=>{const{dataId:r}=g(),o=`animate__delay-${d+100}ms`;return i`
            <div data-id="${r}"
                class="bg-white px-4 py-2 rounded-md shadow-xl border border-gray-200 grid gap-8 animate__animated animate__zoomIn ${o}">
                <div class="flex gap-2 items-center">
                    <div class="w-10 rounded-lg bg-gray-300 p-2">
                        <img src="${s}" alt="image card" width="100" height="100">
                    </div>
                    <h3 class="font-semibold text-lg">${a}</h3>
                </div>
                <div>
                    <p class="text-gray-500">${l}</p>
                </div>
            </div>
            `}));return f(t,i`
        <div class="min-h-[40em] flex items-baseline justify-end relative">
            <div class="absolute top-0 left-0 w-full h-full bg-[url('/training-dog.webp')]"></div>
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white via-white/20 to-transparent"></div>
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white via-white/20 to-transparent"></div>
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-white via-white/20 to-transparent"></div>
        
            <div class="relative max-w-screen-2xl mx-auto flex flex-col justify-between w-full h-full">
                <div class="h-[25em]"></div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full h-[10em] gap-8">
                    ${e}
                </div>
            </div>
        </div>
        `)}export{p as default};
