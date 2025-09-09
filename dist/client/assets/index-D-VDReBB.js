import{H as g,s as S,m as M,c as _,j as v,z as C,i as $,v as k,U as B,D as T,b as y}from"./index-C7pY08Mi.js";import{P as L}from"./Paws-CsP0WpZh.js";import"./useUniqueId-CnvKpuyc.js";const R=(a,o,i,c={})=>{const r=g`
        <div class="flex">
            <div class="bg-gray-100 px-3 py-2 rounded-2xl animate-pulse text-sm">typing...</div>
        </div>
    `,l=t=>g`
        <div class="text-xs text-red-600 mt-1" role="alert">${t}</div>
    `,n=t=>new Date(t.ts).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),m=t=>{const e=t.toLowerCase();return["apply","book","membership"].some(u=>e.includes(u))},s=S(a.map(t=>{const e=t.role==="user",u=e?"justify-end":"justify-start",h=e?"bg-orange-600 text-white rounded-br-none":"bg-gray-100 text-gray-800 rounded-bl-none";let p;if(c.asHTML&&!e){const d=document.createElement("div");d.className="text-sm",d.innerHTML=t.text,p=d}else p=g`<div class="text-sm">${t.text}</div>`;return g`
                <div class="flex ${u}">
                    <div class="max-w-[80%] break-words px-4 py-2 rounded-2xl shadow-sm ${h}">
                        ${p}
                        ${!e&&m(t.text)?g`<a href="/membership" class="mt-2 px-3 py-1 rounded bg-orange-600 text-white text-xs hover:bg-orange-700">
                                Apply Membership
                        </a>`:""}
                        <div class="text-xs opacity-60 mt-1 text-right"> ${n(t)} </div>
                    </div>
                </div>
            `}));return{typingBubble:r,errorBubble:l,messageMapper:s,isTyping:o,errorMsg:i}},j=(a=6)=>Math.random().toString(36).slice(2,2+a);function A(a,o,i,c,r,l){function n(s,t){const e={id:j(),role:s,text:t,ts:Date.now()},u=M.safeParse(e);if(!u.success){i("Message failed validation."),c();return}o([...a(),u.data]),i(null),c()}function m(s){r(!0),c(),setTimeout(()=>{const t=s.toLowerCase().trim(),e=t.replace(/[?.!,]/g,"").split(/\s+/);if((e[0]==="hi"||e[0]==="hello")&&e[1]&&/^(wh|how)/.test(e[1])){n("bot","Thank you! It seems you’re trying to ask a question, let me know more."),r(!1),c();return}const h=["hello","hi","register","book","membership","appointment","price","address","contact","apply","program","schedule","time"].filter(d=>t.includes(d));let p;h.length>0?p=h.map(d=>l[d]).join(`

`):p="Sorry, I didn't understand that. Could you re-type your question?",n("bot",p),r(!1),c()},800+Math.random()*400)}return{pushMessage:n,simulateBotReply:m}}function w(a){const{getState:o,setState:i,subscribe:c}=_,{pushMessage:r,simulateBotReply:l}=A(()=>o().messages,s=>i({messages:s}),s=>i({errorMsg:s}),m,s=>i({isTyping:s}),k);function n(s){const t=s.value,e=$.safeParse(t);if(!e.success){i({errorMsg:e.error.issues[0].message});return}i({errorMsg:null}),r("user",e.data),s.value="",l(e.data)}function m(){const{messages:s,isTyping:t,errorMsg:e}=o(),{typingBubble:u,errorBubble:h,messageMapper:p}=R(s,t,e),d=C(a,g`
            <div class="max-w-[360px] w-full bg-white p-3 rounded-md shadow-2xl max-h-[560px] flex flex-col">
                <!-- header -->
                <div class="flex items-center gap-3 border-b pb-3 mb-2">
                    <div class="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                        <p>DR</p>
                    </div>
                    <div>
                        <div class="font-semibold">Dog Ranch Assistant</div>
                        <div class="flex items-center gap-2 text-xs text-gray-500">
                            <span class="relative flex h-2 w-2">
                                <span
                                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <p>Online</p>
                        </div>
                    </div>
                </div>
            
                <!-- messages container -->
                <div data-id="chat-scroll" class="flex-1 overflow-y-auto space-y-3 p-3 scroll-smooth hidescroll">
                    ${p}
                    ${t?u:""}
                </div>
            
                <!-- input area -->
                <div class="mt-3 pt-2 border-t">
                    <form data-id="chat-form" class="flex flex-col gap-2">
                        <div class="flex gap-2 items-center">
                            <input id="data-input" data-id="chat-input" type="text" placeholder="Type a message..."
                                class="flex-1 px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-200" />
                            <button data-id="send-btn" type="submit" class="px-4 py-2 rounded-lg bg-orange-600 text-white">
                                Send
                            </button>
                        </div>
                        ${e?h(e):""}
                    </form>
                </div>
            </div>
          `),x=v("[data-id='chat-form']",a),b=v("#data-input",a);return x&&b&&(x.onsubmit=f=>{f.preventDefault(),n(b)},b.onkeydown=f=>{f.key==="Enter"&&!f.shiftKey&&(f.preventDefault(),n(b))}),d}return c(()=>{m(),requestAnimationFrame(()=>{const s=v("[data-id='chat-scroll']",a);s&&(s.scrollTop=s.scrollHeight)})}),m()}const H=a=>{let o;(l=>{l.CHATBOT="chat-bot"})(o||(o={})),B(["chat-bot"],a,[L]);const r=v("#chat-container",a);T("chat-bot","click",l=>{l.preventDefault(),y.getState().toggleChat()}),y.subscribe(l=>{if(r.textContent="",l.isOpen){const n=document.createElement("div");n.className="animate__animated animate__fadeInRight",w(n),r.appendChild(n)}else{const n=document.createElement("div");n.className="animate__animated animate__fadeOutRight",w(n),r.appendChild(n)}})};function P(a){const o=C(a,g`
        <div class="fixed right-[2%] bottom-10 z-[99]">
            <div class="relative">
                <div id="chat-container" class="animate__animated animate__fadeInUp delay-75 absolute bottom-12 right-5"></div>
                <button id="chat-bot"
                    class="w-10 h-10 rounded-full bg-orange-100 hover:bg-orange-950 grid place-items-center shadow-2xl cursor-pointer">
                    <p class="sr-only">chat-bot</p>
                </button>
            </div>
        </div>
    `);return H(a),o}export{P as default};
