import{z as i,H as a,s as p,U as u,d as g,L as h}from"./index-C7pY08Mi.js";import{P as v}from"./Paws-CsP0WpZh.js";import{u as w}from"./useUniqueId-CnvKpuyc.js";function b(e){return i(e,a`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-orange-400">
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
        </svg>
        `)}function f(e){return i(e,a`
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-orange-400">
                <path d="m6.5 6.5 11 11"></path>
                <path d="m21 21-1-1"></path>
                <path d="m3 3 1 1"></path>
                <path d="m18 22 4-4"></path>
                <path d="m2 6 4-4"></path>
                <path d="m3 10 7-7"></path>
                <path d="m14 21 7-7"></path>
            </svg>
        `)}function x(e){return i(e,a`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-orange-400">
            <path d="m4 6 8-4 8 4"></path>
            <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"></path>
            <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"></path>
            <path d="M18 5v17"></path>
            <path d="M6 5v17"></path>
            <circle cx="12" cy="9" r="2"></circle>
        </svg>
        `)}const s=[{title:"Boutique Boarding",subTitle:"Overnight",desc:"Private suites, climate-controlled comfort, and individualized care rhythms. Night cameras and 24/7 supervision included.",iconId:"paw-pcard",component:v},{title:"Elite Training",subTitle:"Obedience",desc:"Force-free foundations, impulse control, recall reliability, and real-world manners led by certified professionals.",iconId:"building-pcard",component:x},{title:"Day Club",subTitle:"Daytime",desc:"Small-group social time, structured rest, and customized enrichment to keep minds sharp and bodies happy.",iconId:"dumbell-pcard",component:f},{title:"Enrichment Lab",subTitle:"Mind & Body",desc:"Scent games, confidence courses, and problem-solving stations designed to engage and fulfill.",iconId:"leaf-pcard",component:b}],y=e=>{const t=p(s.map(({title:n,subTitle:r,desc:o,iconId:d},l)=>{const c=`animate__delay-${l%5+1}s`,{dataId:m}=w();return a`
        <div data-id="${m}"
            class="bg-white border border-gray-200 p-6 rounded-lg animate__animated animate__zoomIn ${c}">
            <div>
                <div class="flex items-center gap-4">
                    <div id="${d}" class="bg-gray-200 p-2 w-10 rounded-lg"></div>
                    <h2>${n}</h2>
                    <div class="rounded-lg bg-gray-300 px-4 py-1">${r}</div>
                </div>
                <div class="py-2 text-gray-600">
                    <p>${o}</p>
                </div>
            </div>
        </div>
        `}));return queueMicrotask(()=>{s.forEach(({iconId:n,component:r})=>{u([n],e,[r])})}),{programCard:t}};function _(e){const{programCard:t}=y(e);return i(e,a`
        <section class="grid grid-cols-2 gap-4 py-8">
            ${t}
        </section>
    `)}function B(e){g({name:"Signature Programs",description:"List of Signature Program Offers",author:"Dog Coach Francis"});const t=i(e,a`
    <div class="relative min-h-screen flex flex-col items-center w-full py-32">
        <!-- Background image -->
        <div class="absolute inset-0 bg-[url('/training-ground.webp')] bg-cover bg-top"></div>
    
        <!-- Gradient overlays -->
        <div class="absolute inset-0 bg-gradient-to-l from-white via-white/40 to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
    
        <!-- Content -->
        <div class="relative max-w-screen-2xl mx-auto px-6">
            <!-- Dog image stays on top of cards -->
            <img src="/german.webp" alt="german dog" width="400"
                class="absolute -top-[8%] right-[2%] z-30 animate__animated animate__zoomIn animate__delay-5s">
    
            <div class="relative z-20">
                <h1 class="text-7xl font-extrabold py-8 text-amber-600 animate__animated animate__fadeInDown">
                    Signature Programs
                </h1>
                <p class="max-w-2xl text-gray-700 animate__animated animate__fadeInUp animate__delay-2s">
                    Tailored experiences crafted by certified trainers and behavior specialists.
                    We align daily structure and enrichment to your dog’s unique needs.
                </p>
    
                <!-- Cards below dog -->
                <div id="cards" class="relative mt-12"></div>
    
                <a href="/membership"
                    class="bg-amber-600 px-4 py-2 text-white rounded-xl animate__animated animate__pulse animate__infinite mt-8 inline-block">
                    Become a Member
                </a>
            </div>
        </div>
    </div>
        `);return h("cards",e,_),t}export{B as default};
