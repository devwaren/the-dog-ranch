import{I as d}from"./index-DVjjVzS5.js";import{z as n,H as r,U as l,s as h}from"./index-C7pY08Mi.js";import{u as c}from"./useUniqueId-CnvKpuyc.js";function g(t){return n(t,r`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
            <path d="m9 12 2 2 4-4"></path>
        </svg>
        `)}function u(t){return n(t,r`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
            <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"></path>
        </svg>
        `)}function p(t){return n(t,r`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
            <path
                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z">
            </path>
            <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66">
            </path>
            <path d="m18 15-2-2"></path>
            <path d="m15 18-2-2"></path>
        </svg>
        `)}function m(t){return n(t,r`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
            <path
                d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5">
            </path>
            <path
                d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5">
            </path>
            <path d="M8 14v.5"></path>
            <path d="M16 14v.5"></path>
            <path d="M11.25 16.25h1.5L12 17l-.75-.75Z"></path>
            <path
                d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306">
            </path>
        </svg>
`)}const v=t=>{let e;return(o=>{o.GUARD="guard",o.HEART="heart",o.CROWN="crown",o.DOG="dog"})(e||(e={})),l(["guard","heart","crown","dog"],t,[g,p,u,m])};function x(t){const e=h(d.map(({id:i,title:o})=>{const{dataId:s}=c();return r`
            <div data-id="${s}" class="bg-gray-200/75 px-4 py-3 rounded-md flex items-center gap-2 border border-gray-300">
                <div id="${i}" class="bg-black/10 p-2 rounded-xl"></div>
                <p>${o}</p>
            </div>
        `})),a=n(t,r`
        <section class="min-h-screen grid lg:grid-cols-2 py-8 px-4 gap-16 relative">
            <div class="flex flex-col gap-4 h-full justify-center animate__animated animate__fadeInUp">
                <p class="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 px-4 py-1 rounded-md w-fit text-white">
                    Membership Only
                </p>
                <h2 class="text-7xl font-extrabold">
                    Exclusive Canine Club for Discerning Dog Parents
                </h2>
                <p class="my-8 text-gray-700 text-lg">
                    Boutique boarding, precision training, and daily enrichment—crafted
                    exclusively for members. Every detail designed for your dog’s
                    wellbeing and joy.
                </p>
                <div class="grid grid-cols-3 gap-4 h-[40px]">
                    <button
                        class="flex items-center justify-between px-4 py-1 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition">
                        <span>Request Invitation</span>
                        <span class="bx bx-chevron-right"></span>
                    </button>
                    <button
                        class="flex items-center px-4 py-1 border border-gray-300 bg-gray-200/75 rounded-md hover:bg-gray-300 transition">
                        Book a Tour
                    </button>
                    <button
                        class="flex items-center px-4 py-1 border border-gray-300 bg-gray-200/75 rounded-md hover:bg-gray-300 transition">
                        Download Brochure
                    </button>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    ${e}
                </div>
            </div>
        
            <div class="grid animate__animated animate__zoomIn relative overflow-hidden min-h-[40em]">
                <div class="bg-[url('/corgi.png')] bg-center bg-cover w-full h-full"></div>
                <div class="absolute bottom-[20px] right-0">
                    <div>
                        <h2>Trusted by. Dog Owners</h2>
                        <p class="text-6xl font-semibold">16k +</p>
                    </div>
                </div>
        
                <!-- Hug 1 (fades in first) -->
                <div
                    class="w-40 h-40 overflow-hidden absolute top-[20%] right-[20px] rounded-xl shadow animate__animated animate__zoomIn animate__delay-1s">
                    <img src="/hug1.webp" alt="hug" width="400" height="400" class="object-cover">
                </div>
        
                <!-- Hug 2 (fades in after hug1) -->
                <div
                    class="w-40 h-40 overflow-hidden absolute bottom-[20%] left-[40px] rounded-xl shadow animate__animated animate__zoomIn animate__delay-2s">
                    <img src="/hug2.webp" alt="hug" width="400" height="600" class="object-cover w-full h-full">
                </div>
            </div>
        </section>
    `);return v(t),a}export{x as default};
