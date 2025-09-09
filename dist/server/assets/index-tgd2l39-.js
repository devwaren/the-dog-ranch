import { useTSElements, html } from "@devwareng/vanilla-ts";
function index(DOM) {
  const ui = useTSElements(
    DOM,
    html`
        <section class="py-20 px-6 bg-gradient-to-br from-white via-white to-orange-50">
            <div class="max-w-screen-2xl mx-auto grid md:grid-cols-2 items-center gap-16">
        
                <!-- Staggered Image Grid -->
                <div class="grid grid-cols-2 grid-rows-5 gap-6 max-w-md mx-auto">
                    <!-- Empty top-left -->
                    <div></div>
        
                    <!-- Dog 1 -->
                    <div
                        class="row-span-4 flex items-start shadow-xl rounded-3xl overflow-hidden animate__animated animate__fadeInLeft animate__slow">
                        <img src="/dog3.webp" alt="dog image" width="400" height="400"
                            class="w-full h-auto object-cover shadow-xl transform hover:scale-120 transition duration-500">
                    </div>
        
                    <!-- Dog 2 -->
                    <div
                        class="row-span-4 flex items-end shadow-xl rounded-3xl overflow-hidden animate__animated animate__fadeInRight animate__slow">
                        <img src="/dog4.webp" alt="dog image" width="400" height="400"
                            class="w-full h-auto object-cover shadow-xl transform hover:scale-120 transition duration-500">
                    </div>
        
                    <!-- Empty bottom-right -->
                    <div></div>
                </div>
        
                <!-- Text Content -->
                <div class="space-y-6 animate__animated animate__fadeInUp animate__slower">
                    <h3 class="text-4xl md:text-5xl font-semibold text-amber-600">
                        Signature Programs
                    </h3>
                    <p class="text-base text-gray-500 leading-relaxed">
                        Our signature dog training programs are designed to build strong, lasting bonds
                        between you and your dog. From foundational obedience to specialized behavior
                        solutions, each program is carefully tailored to meet your dog’s unique needs.
                        Whether you’re raising a playful puppy, guiding an energetic adolescent, or
                        supporting an older companion, our proven methods create confident,
                        well-mannered, and happy dogs.
                    </p>
                    <div class="grid grid-cols-2 gap-4 max-w-1/2 text-sm">
                        <button
                            class="px-6 py-3 rounded-full bg-gray-500 text-white font-semibold shadow-lg hover:bg-gray-600 transition cursor-pointer animate__animated animate__zoomIn animate__delay-1s">
                            Explore Programs
                        </button>
                        <button
                            class="px-6 py-3 rounded-full bg-orange-500 text-white font-semibold shadow-lg hover:bg-orange-600 transition cursor-pointer animate__animated animate__zoomIn animate__delay-2s">
                            Apply Membership
                        </button>
                    </div>
                </div>
        
            </div>
        </section>
        `
  );
  return ui;
}
export {
  index as default
};
