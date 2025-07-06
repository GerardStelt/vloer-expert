import { $, component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useInterval } from "~/utils";
import { HiAcademicCapOutline, HiChatBubbleLeftRightOutline, HiChevronLeftSolid, HiChevronRightSolid, HiHashtagSolid, HiCalculatorOutline } from "@qwikest/icons/heroicons";
import { Usp } from '~/components/usp/usp';
import testimonials from '~/data/testimonials.json';

// images
import FloorRemoval from '~/media/vloer-verwijderen.jpeg?jsx';
import FloorHeating from '~/media/vloer-verwarming.jpeg?jsx';
import FloorLevelling from '~/media/vloer-egalisatie.jpeg?jsx';
import PVCfloor from '~/media/pvc-vloer.jpeg?jsx';
import LaminaatFloor from '~/media/laminaat-vloer.jpeg?jsx';
import Testimonial1 from '~/media/testimonial-1.png?jsx';
import Testimonial2 from '~/media/testimonial-2.png?jsx';

const imageMap: Record<string, any> = {
    "testimonial-1": Testimonial1,
    "testimonial-2": Testimonial2,
};


export default component$(() => {

    // hero slides
    const heroSlide = useSignal<number>(0);
    const heroPause = useInterval($(() => heroSlide.value = heroSlide.value === 4 ? 0 : heroSlide.value + 1));    // traverse all slides

    // testimonials
    const testimonialSlider = useSignal<HTMLElement>();
    const testimonialPause = useInterval($(() => {
        const { clientWidth, scrollLeft, scrollWidth } = testimonialSlider.value!;
        const endReached = scrollLeft + clientWidth + 1 >= scrollWidth;

        const scrollMethod = endReached ? 'scrollTo' : 'scrollBy';
        testimonialSlider.value?.[scrollMethod]({
            left: endReached ? 0 : testimonialSlider.value?.clientWidth, // as the maximum number of visible slides is 4 the scroll-snap will take care of the rest
            behavior: 'smooth'
        });
    }), 5000);
    const scrollState = useSignal<number>(-1);

    return (
        <div class="flex flex-col gap-30">

            {/* hero images */}
            <div class="relative" onClick$={() => heroPause(3)}>
                <div class="relative size-full aspect-video max-h-[700px] overflow-hidden *:object-cover *:object-center *:pointer-events-none *:size-full *:absolute *:transition-opacity *:duration-1000 *:opacity-0 *:ease-in-out">
                    <FloorRemoval class={{ "opacity-100!": heroSlide.value === 0 }} />
                    <FloorHeating class={{ "opacity-100!": heroSlide.value === 1 }} />
                    <FloorLevelling class={{ "opacity-100!": heroSlide.value === 2 }} />
                    <PVCfloor class={{ "opacity-100!": heroSlide.value === 3 }} />
                    <LaminaatFloor class={{ "opacity-100!": heroSlide.value === 4 }} />
                </div>
                <div class="absolute inset-0 flex justify-between items-center *:cursor-pointer">
                    <button onClick$={() => heroSlide.value = heroSlide.value === 0 ? 4 : heroSlide.value - 1}><HiChevronLeftSolid class="text-6xl text-white" /></button>
                    <button onClick$={() => heroSlide.value = heroSlide.value === 4 ? 0 : heroSlide.value + 1}><HiChevronRightSolid class="text-6xl text-white" /></button>
                </div>
                <div class="flex gap-3.5 justify-center mt-6 relative">
                    {Array.from({ length: 5 }, (_, index) =>
                        <label key={index}>
                            <input type="radio" name="slides" value={index} checked={index === heroSlide.value} class="cursor-pointer accent-neutral-600 hidden peer" onChange$={() => heroSlide.value = index} />
                            <span class="peer-checked:bg-neutral-600 inline-block w-4 h-4 rounded-full cursor-pointer bg-neutral-200"></span>
                        </label>
                    )}
                </div>
            </div>

            {/* USP's */}
            <div class="container m-auto">
                <div class="grid sm:grid-cols-3 not-sm:gap-6">
                    <Usp title="Gecertificeerde vakmensen" subtitle="A-kwaliteit mensen met jarenlange ervaring">
                        <HiAcademicCapOutline class="h-20 text-8xl text-green-500" />
                    </Usp>

                    <Usp title="We doen alles in overleg" subtitle="Met de juiste communicatie zorgen wij voor succes">
                        <HiChatBubbleLeftRightOutline class="h-20 text-8xl text-green-500" />
                    </Usp>

                    <Usp title="Snelle offerte" subtitle="Dezelfde dag nog een offerte">
                        <HiCalculatorOutline class="h-20 text-8xl text-green-500" />
                    </Usp>
                </div>
            </div>

            <section class="container mx-auto p-2.5 flex flex-col gap-10">
                <h1 class="text-neutral-600 ">Onze <i class="font-extralight">diensten</i></h1>

                <div class="flex flex-col gap-16 sm:gap-20">

                    <div class="relative p-2 sm:p-8">
                        <div class="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 opacity-90 rounded sm:ml-8 mt-8 sm:mt-0"></div>
                        <div class="grid sm:grid-cols-2 gap-8 sm:gap-12 relative sm:-ml-8">
                            <FloorRemoval class="object-cover w-full h-full shadow-md shadow-gray-400 rounded" />
                            <div>
                                <h2>Vloerverwijdering</h2>
                                <blockquote class="italic font-extralight text-xl text-neutral-600 leading-loose mt-4">'Alle soorten vloeren'</blockquote>
                                <p>
                                    Wilt u uw vloer laten verwijderen? Wij beschikken over een gespecialiseerd team om efficiënt elke vloer te verwijderen in uw woning.
                                    Het verwijderen van een vloer kan lastig zijn zonder de juiste gereedschappen of ervaring. Ons team zorgt voor een vakkundige verwijdering.
                                    Wij helpen bij het verwijderen van beton, tegels, pvc, hout, vloerbedekking of andere verlijmde en lastig te verwijderen vloeren.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="relative p-2 sm:p-8 sm:scale-x-[-1]">
                        <div class="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 opacity-90 rounded sm:ml-8 mt-8 sm:mt-0"></div>
                        <div class="grid sm:grid-cols-2 gap-8 sm:gap-12 relative sm:-ml-8 sm:scale-x-[-1]">
                            <FloorHeating class="object-cover w-full h-full shadow-md shadow-gray-400 rounded sm:order-1" />
                            <div>
                                <h2>Vloerverwarming</h2>
                                <blockquote class="italic font-extralight text-xl text-neutral-600 leading-loose mt-4">'Comfort en luxe in elke kamer'</blockquote>
                                <p>
                                    Wilt u altijd warme voeten en een aangenaam binnenklimaat? Kies dan voor vloerverwarming! Onze specialisten zorgen voor een snelle en vakkundige installatie,
                                    of het nu gaat om een nieuwbouwwoning of renovatieproject. Vloerverwarming is energiezuinig, ruimtebesparend en biedt een gelijkmatige warmteverdeling.
                                    Geen zichtbare radiatoren meer, alleen ultiem comfort.
                                </p>
                                <p class="mt-4">
                                    Laat ons uw huis voorzien van de meest efficiënte verwarmingsoplossing. Vraag nu een vrijblijvende offerte aan en ervaar het verschil van vloerverwarming!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="relative p-2 sm:p-8">
                        <div class="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 opacity-90 rounded sm:ml-8 mt-8 sm:mt-0"></div>
                        <div class="grid sm:grid-cols-2 gap-8 sm:gap-12 relative sm:-ml-8">
                            <FloorLevelling class="object-cover w-full h-full shadow-md shadow-gray-400 rounded" />
                            <div>
                                <h2>Egalisatie</h2>
                                <blockquote class="italic font-extralight text-xl text-neutral-600 leading-loose mt-4">'Perfecte vloeregalisatie voor een strakke basis'</blockquote>
                                <p>
                                    Een nieuwe vloer begint met een gladde en egale ondergrond. Met onze professionele vloeregalisatie-service garanderen we een perfect vlakke basis,
                                    of het nu gaat om tegels, parket, laminaat of vinyl. Wij verwijderen oneffenheden en zorgen voor een stevige ondervloer die klaar is voor elke vloerbedekking.
                                </p>
                                <p class="mt-4">
                                    Met de nieuwste technieken en hoogwaardige egaliseermiddelen maken wij uw vloer klaar voor installatie, zonder scheuren of hoogteverschillen.
                                    Kies voor vakmanschap en laat uw vloer stralen vanaf de basis. Vraag vandaag nog een offerte aan en geef uw nieuwe vloer de perfecte start!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="relative p-2 sm:p-8 sm:scale-x-[-1]">
                        <div class="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 opacity-90 rounded sm:ml-8 mt-8 sm:mt-0"></div>
                        <div class="grid sm:grid-cols-2 gap-8 sm:gap-12 relative sm:-ml-8 sm:scale-x-[-1]">
                            <PVCfloor class="object-cover w-full h-full shadow-md shadow-gray-400 rounded sm:order-1" />
                            <div>
                                <h2>Eindafwerking</h2>
                                <blockquote class="italic font-extralight text-xl text-neutral-600 leading-loose mt-4">'De perfecte Finishing Touch!'</blockquote>
                                <p>
                                    Bij ons draait het om de details: een professionele eindafwerking kan uw vloer tot leven brengen. Of u nu kiest voor gietvloeren, laminaat,
                                    PVC, microcement of vloerbedekking, wij zorgen voor een vakkundige afwerking die uw vloer compleet maakt. Van schuren en lakken tot oliën
                                    en het plaatsen van plinten, wij bieden de expertise die nodig is voor elke vloer.
                                </p>
                                <p class="mt-4">
                                    Een hoogwaardige afwerking betekent niet alleen een prachtige uitstraling, maar ook een langere levensduur van uw vloer.
                                    Kies voor onze eindafwerking en geniet van een vloer die stijl en duurzaamheid combineert. Vraag vandaag nog een offerte aan en ervaar het verschil van vakmanschap!
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section class="container mx-auto p-2.5 flex flex-col gap-10 overflow-hidden">
                <h1 class="text-neutral-600">#<i class="font-extralight">VloerExpert</i></h1>

                <div class="flex flex-nowrap items-center" onClick$={() => testimonialPause(3)}>
                    <button class="cursor-pointer disabled:cursor-default text-6xl text-grey disabled:text-gray-300" disabled={scrollState.value === -1} onClick$={() => testimonialSlider.value?.scrollBy({
                        left: -testimonialSlider.value.clientWidth,
                        behavior: 'smooth'
                    })}><HiChevronLeftSolid class="-mx-4 sm:mx-0" /></button>
                    <ul class="grow flex overflow-hidden *:flex-none snap-x snap-mandatory *:snap-start *:snap-always *:p-4 *:size-full md:*:size-1/2 lg:*:size-1/3 xl:*:size-1/4" ref={testimonialSlider} onScrollend$={() => {
                        const { clientWidth, scrollLeft, scrollWidth } = testimonialSlider.value!;
                        scrollState.value = scrollLeft + clientWidth >= scrollWidth - 1 ? 1 : scrollLeft === 0 ? -1 : 0; 
                    }}>
                        {testimonials.map(({ name, city, quote, image }, index) => {
                            const ImageComponent = imageMap[image];
                            return (
                                <li key={index} class="sm:w-1/4">
                                    <div class="border border-neutral-200 rounded-lg overflow-hidden shadow-lg">
                                        <ImageComponent class="size-full object-cover relative -z-10" />
                                        <div class="-mt-9 flex flex-col gap-4 m-4">
                                            <div class="m-auto rounded-full size-18 border-8 border-white bg-neutral-300 flex"><HiHashtagSolid class="text-3xl m-auto" /></div>
                                            <blockquote class="text-sm italic">{quote}</blockquote>
                                            <div class="font-semibold">{name} <span class="font-thin">- {city}</span></div>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                    <button class="cursor-pointer disabled:cursor-default text-6xl text-grey disabled:text-gray-300" disabled={scrollState.value === 1}
                        onClick$={() => testimonialSlider.value?.scrollBy({
                            left: testimonialSlider.value.clientWidth,
                            behavior: 'smooth'
                        })}><HiChevronRightSolid class="-mx-4 sm:mx-0" /></button>
                </div>
            </section>

        </div>
    );
});

export const head: DocumentHead = {
    title: "Vloer Expert",
    meta: [
        {
            name: "description",
            content: "Vloer Expert site description",
        },
    ],
};