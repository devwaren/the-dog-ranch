import{L as s,j as a,z as o,H as r}from"./index-C7pY08Mi.js";import{P as l}from"./Paws-CsP0WpZh.js";import"./useUniqueId-CnvKpuyc.js";const c=t=>{s("paw-loader",t,l),requestAnimationFrame(()=>{const e=a("#loading-text",t);if(e){const i=["is Trimming…","is Catching…","is Fetching…"];let n=0;e.textContent=i[n],setInterval(()=>{n=(n+1)%i.length,e.textContent=i[n]},200)}})};function f(t){const e=o(t,r`
        <div class="flex flex-col items-center justify-center h-screen w-full bg-white space-y-4">
            <div class="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-900 flex items-center justify-center">
                <span id="paw-loader"></span>
            </div>
            <p class="text-lg font-semibold text-orange-900">
                Dog Coach <span id="loading-text" class="italic"></span>
            </p>
        </div>
        `);return c(t),e}export{f as default};
