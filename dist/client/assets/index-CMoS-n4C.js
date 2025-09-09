import{s as n,H as t,z as m}from"./index-C7pY08Mi.js";import{f as v,s as f,a as u,L as x}from"./index-DVjjVzS5.js";import{u as d}from"./useUniqueId-CnvKpuyc.js";const g=()=>{const{dataId:e}=d(),{dataId:a}=d(),o=n(v.map(({url:s,title:l})=>t`
            <a data-id="${e}" href="${s}" class="hover:text-gray-800 hover:font-semibold">
                ${l}
            </a>
          `)),i=n(f.map(({title:s,icon:l,url:p})=>t`
            <a data-id="${a}" href="${p}" aria-label="${s}" class="bx ${l} text-3xl hover:text-gray-800">
                <span class="sr-only">${s}</span>
            </a>
            `)),r=n(u.map(s=>t`<p>${s}</p>`));return[{title:"Explore",items:o},{title:"Hours",items:r},{title:"Follow Us",items:t`
        <div class="flex gap-4">
            ${i}
        </div>
      `}]},h=()=>{const e=g(),a=n(x.map(({title:i,icon:r})=>t`
            <div class="flex items-center gap-2">
                <p class="bx ${r}"></p>
                <p>${i}</p>
            </div>
            `)),o=t`
        <div class="grid gap-4">
            <div>
                <h2 class="font-semibold text-3xl">The Dog Ranch</h2>
                <p>Lipa</p>
            </div>
            <p>An invitation-only haven for boarding, training, and day enrichment.</p>
            <div>
                ${a}
            </div>
        </div>
        `;return{footerSections:e,companyInfo:o}};function I(e){const{footerSections:a,companyInfo:o}=h(),i=n(a.map(({title:c,items:s})=>t`
                <div class="grid gap-4">
                    <h3>${c}</h3>
                    ${s}
                </div>
        `));return m(e,t`
        <div class="px-4 py-16 relative">
            <div class="max-w-screen-2xl mx-auto px-4 text-gray-500">
        
                <div class="flex gap-16 items-start justify-between">
                    ${o}
                    ${i}
                </div>
        
                <div class="w-full h-[1px] bg-gray-300 my-8"></div>
                <div class="flex justify-between items-center">
                    <p>© 2025 The Canine Club. All rights reserved.</p>
                    <img src="/puppy.webp" alt="puppy image" width="300" class="absolute bottom-0 left-[50%]">
                    <button class="px-6 py-3 bg-gray-200 rounded-xl">Subscribe for Updates</button>
                </div>
            </div>
        </div>
    `)}export{I as default};
