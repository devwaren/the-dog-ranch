import { useTSElements, html } from "@devwareng/vanilla-ts";
function Info(DOM) {
  const ui = useTSElements(
    DOM,
    html`
        <section class="grid grid-cols-1 lg:grid-cols-3 min-h-[40em] gap-12 px-6 lg:px-12 py-32">
        
            <!-- ✅ Left column -->
            <div class="flex flex-col justify-evenly gap-24 animate__animated animate__fadeInLeft animate__delay-1s">
                <div class="grid gap-4">
                    <h3 class="text-4xl lg:text-5xl font-bold leading-tight">Dogs Make Life Better</h3>
                    <p class="text-gray-600 text-lg leading-relaxed">
                        Dogs are more than just adorable companions, they bring incredible benefits into our
                        everyday lives.
                    </p>
                </div>
        
                <div class="grid gap-4">
                    <h3 class="text-4xl lg:text-5xl font-bold leading-tight">Relaxation and Stress Relief</h3>
                    <p class="text-gray-600 text-lg leading-relaxed">
                        The simple presence of a dog can reduce stress levels, calm the mind, and promote
                        relaxation.
                    </p>
                </div>
        
                <div>
                    <a href="#" class="underline text-amber-700 font-medium hover:text-amber-800 transition">
                        Discover more benefits
                    </a>
                </div>
            </div>
        
            <!-- ✅ Center column (image) -->
            <div class="relative min-h-[28em]">
                <div class="absolute top-[-10%] left-[-20%] z-[5] animate__animated animate__zoomIn animate__delay-4s">
                    <img src="/bubble.png" alt="bubble image" width="200">
                </div>
                <div
                    class="bg-[url('/dog.webp')] bg-cover bg-center rounded-b-[10em] min-h-full overflow-hidden shadow-2xl animate__animated animate__zoomIn animate__delay-2s ">
                </div>
                <div class="absolute bottom-[-8%] left-[2%] animate__animated animate__zoomIn animate__delay-3s">
                    <img src="/dog-paw.png" alt="dog paw" width="400" class="w-full">
                </div>
            </div>
        
            <!-- ✅ Right column -->
            <div class="flex flex-col justify-evenly gap-10 animate__animated animate__fadeInRight animate__delay-3s">
                <p class="text-gray-700 text-lg leading-relaxed">
                    <span class="font-semibold text-2xl text-amber-700">16 years</span> of experience —
                    over a decade of providing unparalleled care, training, and love for dogs.
                </p>
        
                <button
                    class="px-6 py-3 bg-amber-700 text-lg text-white rounded-3xl shadow-md hover:bg-amber-800 transition max-w-max">
                    Learn more
                </button>
        
                <!-- ✅ Image with overlay -->
                <div
                    class="relative rounded-2xl overflow-hidden group shadow-lg animate__animated animate__fadeInUp animate__delay-4s">
                    <img src="/hug3.webp" alt="hug 3" width="400" height="100"
                        class="w-full object-cover group-hover:scale-125 duration-500">
        
                    <div
                        class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <i
                            class="bx bx-play-circle text-white text-6xl group-hover:scale-110 transform transition-transform"></i>
                    </div>
                </div>
            </div>
        </section>
        `
  );
  return ui;
}
export {
  Info as default
};
