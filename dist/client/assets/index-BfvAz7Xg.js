import{s as r,H as e,z as o,L as n}from"./index-C7pY08Mi.js";import{P as l}from"./Paws-CsP0WpZh.js";import{N as p}from"./index-DVjjVzS5.js";import"./useUniqueId-CnvKpuyc.js";function x(a){const s=r(p.map(t=>e`
            <li>
                <a href="${t.path}" class="hover:bg-gray-200 hover:shadow transition-colors px-4 py-2 rounded">
                    ${t.title}
                </a>
            </li>
        `)),i=o(a,e`
        <div class="flex items-center justify-between p-4 max-w-screen-2xl mx-auto px-4">
            <div class="flex items-center gap-4">
                <div id="paw"></div>
                <div class="leading-tight">
                    <h1 class="font-bold">Dog Ranch</h1>
                    <p class="text-sm text-gray-600">Lipa</p>
                </div>
            </div>
        
            <div class="flex items-center gap-6 text-gray-600">
                <nav aria-label="Main navigation">
                    <ul class="flex gap-4">${s}</ul>
                </nav>
                <button class="bg-orange-600 px-4 py-2 rounded text-white hover:bg-orange-700 transition-colors cursor-pointer">
                    Inquire Now
                </button>
            </div>
        </div>
    `);return n("paw",a,l),i}export{x as default};
