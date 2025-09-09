import{d as t,u as n,e as i,z as o,H as s}from"./index-C7pY08Mi.js";function l(a){t({name:"404 - Page Not Found",description:"The requested page could not be found.",author:"Coach Francis"}),n({LoadingElement:i,DOM:a,Element:e=>o(e,s`
                <section class="w-full min-h-screen relative flex items-center justify-center">
                    <!-- Background image -->
                    <div class="absolute inset-0 bg-[url('/notfound.webp')] bg-cover bg-no-repeat"></div>
                
                    <!-- Overlay gradient -->
                    <div class="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
                
                    <!-- Content -->
                    <div class="relative text-black max-w-screen-md mx-auto px-6 text-center space-y-4">
                        <h1 class="text-5xl font-bold animate__animated animate__fadeInDown">
                            Opps 404!
                        </h1>
                        <p class="text-lg animate__animated animate__fadeInUp animate__delay-1s">
                            Looks like you're lost...
                        </p>
                        <p class="text-gray-700 animate__animated animate__fadeInUp animate__delay-2s">
                            You can return to the previous page, visit our homepage, or contact us directly.
                        </p>
                
                        <div class="grid grid-cols-2 gap-4 max-w-xs mx-auto animate__animated animate__zoomIn animate__delay-3s">
                            <a href="/" class="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition">
                                Home
                            </a>
                            <a href="/contact" class="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </section>
            `),delay:1200})}export{l as default};
