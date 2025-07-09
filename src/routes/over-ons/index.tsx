import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import Profile from '~/components/profile/profile';
import Journey from '/public/images/reis.jpg?jsx';


export default component$(() => {
    return (
        <section class="bg-gradient-to-br from-slate-50 to-slate-100">

            <div class="container mx-auto px-6 py-16 md:py-24 lg:py-32">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div class="md:order-2">
                        <div class="relative">
                            <Journey class="rounded-lg shadow-md w-full" />
                            {/* <img class="rounded-lg shadow-md w-full" src="https://uipilot.dev/img-placeholder.svg" alt="About Us Image" /> */}
                            <div class="absolute bottom-0 left-0 p-4 bg-white/80 backdrop-blur-sm rounded-br-lg">
                                <h4 class="text-lg font-semibold text-gray-800">Onze reis</h4>
                                <p class="text-sm text-gray-600">Maak kennis met ons verhaal en onze waarden.</p>
                            </div>
                        </div>
                    </div>
                    <div class="md:order-1">
                        <h2 class="text-3xl font-extrabold text-gray-900 tracking-tight mb-4">Betrouwbaarheid en transparantie voorop</h2>
                        <p class="text-gray-700 leading-relaxed mb-6">
                            Onze samenwerking is ontstaan vanuit een persoonlijke ervaring die ons heeft doen inzien dat het anders moet kunnen. 
                            Na zelf het slachtoffer te zijn geworden van oplichting door een ander bedrijf in de branche, besloten we dat het anders moest. 
                            We waren ervan overtuigd dat we klanten de eerlijke, betrouwbare service konden bieden die zij verdienen.
                        </p>
                        <p class="text-gray-700 leading-relaxed mb-6">
                            Deze ervaring vormde de basis van onze kernwaarden: <strong>betrouwbaarheid</strong> en <strong>transparantie</strong>.
                            Elke dag werken we eraan om het vertrouwen terug te brengen in de industrie door onze klanten eerlijk te behandelen en duidelijk te communiceren over onze werkzaamheden, prijzen en verwachtingen.
                        </p>
                        <h3 class="text-gray-900 tracking-tight mb-4">Vakmanschap waarop u kunt vertrouwen</h3>
                        <p class="text-gray-700 leading-relaxed mb-6">
                            Ons team bestaat uit ervaren, betrouwbare vakmensen die hun vak verstaan. We geloven in kwaliteit boven kwantiteit en nemen de tijd om elk project met de grootste zorg uit te voeren. 
                            Van advies tot installatie - wij staan voor vakwerk waar u jaren plezier van heeft.                            
                        </p>
                        <h3 class="text-gray-900 tracking-tight mb-4">Vakmanschap waarop u kunt vertrouwen</h3>
                        <div class="flex items-center space-x-4 mb-8">
                            <span class="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Onze missie</span>
                            <p class="text-gray-600 text-sm italic">Het leveren van transparante service die verwachtingen te boven gaat.</p>
                        </div>
                        <Link href="/contact" class="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Contact</Link>
                    </div>
                </div>

                <div class="mt-16 border-t border-gray-200 pt-8">
                    <h3 class="text-xl font-semibold text-gray-800 mb-6">Ons team</h3>
                    <div class="grid grid-cols-1 gap-8 sm:grid-cols-3">
                        <Profile
                            picture="https://plus.unsplash.com/premium_photo-1677151140640-7f3f57b5a701?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            name="Gerard van der Stelt"
                            title="Vloer verwijderingsspecialist"
                            description="Gepassioneerd omtrent vloerverwijdering en opgeruimd werken. Met jarenlange ervaring in het vak, zorg ik ervoor dat elke vloer perfect wordt verwijderd zonder schade aan de ondergrond."
                        />
                        <Profile
                            picture="https://plus.unsplash.com/premium_photo-1677151140640-7f3f57b5a701?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            name="Gerard van der Stelt"
                            title="Vloer verwijderingsspecialist"
                            description="Gepassioneerd omtrent vloerverwijdering en opgeruimd werken. Met jarenlange ervaring in het vak, zorg ik ervoor dat elke vloer perfect wordt verwijderd zonder schade aan de ondergrond."
                        />
                        <Profile
                            picture="https://plus.unsplash.com/premium_photo-1677151140640-7f3f57b5a701?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            name="Gerard van der Stelt"
                            title="Vloer verwijderingsspecialist"
                            description="Gepassioneerd omtrent vloerverwijdering en opgeruimd werken. Met jarenlange ervaring in het vak, zorg ik ervoor dat elke vloer perfect wordt verwijderd zonder schade aan de ondergrond."
                        />
                        <Profile
                            picture="https://plus.unsplash.com/premium_photo-1677151140640-7f3f57b5a701?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            name="Gerard van der Stelt"
                            title="Vloer verwijderingsspecialist"
                            description="Gepassioneerd omtrent vloerverwijdering en opgeruimd werken. Met jarenlange ervaring in het vak, zorg ik ervoor dat elke vloer perfect wordt verwijderd zonder schade aan de ondergrond."
                        />
                        <Profile
                            picture="https://plus.unsplash.com/premium_photo-1677151140640-7f3f57b5a701?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            name="Gerard van der Stelt"
                            title="Vloer verwijderingsspecialist"
                            description="Gepassioneerd omtrent vloerverwijdering en opgeruimd werken. Met jarenlange ervaring in het vak, zorg ik ervoor dat elke vloer perfect wordt verwijderd zonder schade aan de ondergrond."
                        />
                    </div>
                </div>
            </div>
        </section>




    );
});

{/* <section class="container mx-auto p-2.5 flex flex-col gap-10">
            <h1 class="text-neutral-600 text-center">Over <i class="font-extralight">Vloer Expert&trade;</i></h1>

            <div>
                <p>
                    Bij Vloer Experts&trade; geloven we dat vloeren de basis vormen van elke mooie, functionele ruimte.
                    Opgericht vanuit kwaliteit, integriteit en vakmanschap, is ons team van ervaren vloerspecialisten
                    toegewijd aan het leveren van uitstekende resultaten—op tijd en binnen budget.
                </p>
                <p class="mt-4">
                    Onze passie voor vloeren komt tot uiting in elke vezel van ons werk, van de eerste inspectie tot
                    de uiteindelijke afwerking. Wij streven ernaar om niet alleen een vloer te leggen, maar ook een
                    fundament te creëren waarop u kunt bouwen en vertrouwen.
                </p>
            </div>

            <div class="grid md:grid-cols-2 gap-8">
                <div class="p-6 bg-neutral-50 rounded-lg shadow">
                    <h2 class="text-2xl font-semibold text-neutral-800 mb-4">Onze Missie</h2>
                    <p class="text-neutral-600">
                        Onze missie is om elke klant te voorzien van een duurzame en esthetisch verantwoorde
                        vloeroplossing, met aandacht voor detail en een focus op kwaliteit.
                    </p>
                </div>
                <div class="p-6 bg-neutral-50 rounded-lg shadow">
                    <h2 class="text-2xl font-semibold text-neutral-800 mb-4">Onze Waarden</h2>
                    <ul class="list-disc pl-5 text-neutral-600">
                        <li class="mb-2">Vakmanschap en kwaliteit</li>
                        <li class="mb-2">Betrouwbaarheid en integriteit</li>
                        <li class="mb-2">Innovatie en duurzaamheid</li>
                        <li class="mb-2">Klanttevredenheid en service</li>
                    </ul>
                </div>
            </div>

            <div>
                <h2 class="text-3xl font-semibold text-neutral-800 mb-4">Ons Team</h2>
                <p class="text-neutral-600">
                    Ons team bestaat uit experts met jarenlange ervaring in de vloerindustrie. Iedere medewerker
                    brengt unieke vaardigheden mee, waardoor we in staat zijn om maatwerk oplossingen te bieden die
                    perfect aansluiten bij uw wensen.
                </p>
            </div>

            <div class="flex gap-6 *:shrink-0 overflow-x-auto">
                <Profile
                    picture="https://plus.unsplash.com/premium_photo-1677151140640-7f3f57b5a701?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    name="Gerard van der Stelt"
                    title="Vloer verwijderingsspecialist"
                    description="Gepassioneerd omtrent vloerverwijdering en opgeruimd werken. Met jarenlange ervaring in het vak, zorg ik ervoor dat elke vloer perfect wordt verwijderd zonder schade aan de ondergrond."
                />
                <Profile
                    picture="https://plus.unsplash.com/premium_photo-1677151140640-7f3f57b5a701?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    name="Gerard van der Stelt"
                    title="Vloer verwijderingsspecialist"
                    description="Gepassioneerd omtrent vloerverwijdering en opgeruimd werken. Met jarenlange ervaring in het vak, zorg ik ervoor dat elke vloer perfect wordt verwijderd zonder schade aan de ondergrond."
                />
                <Profile
                    picture="https://plus.unsplash.com/premium_photo-1677151140640-7f3f57b5a701?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    name="Gerard van der Stelt"
                    title="Vloer verwijderingsspecialist"
                    description="Gepassioneerd omtrent vloerverwijdering en opgeruimd werken. Met jarenlange ervaring in het vak, zorg ik ervoor dat elke vloer perfect wordt verwijderd zonder schade aan de ondergrond."
                />
                <Profile
                    picture="https://plus.unsplash.com/premium_photo-1677151140640-7f3f57b5a701?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    name="Gerard van der Stelt"
                    title="Vloer verwijderingsspecialist"
                    description="Gepassioneerd omtrent vloerverwijdering en opgeruimd werken. Met jarenlange ervaring in het vak, zorg ik ervoor dat elke vloer perfect wordt verwijderd zonder schade aan de ondergrond."
                />
                <Profile
                    picture="https://plus.unsplash.com/premium_photo-1677151140640-7f3f57b5a701?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    name="Gerard van der Stelt"
                    title="Vloer verwijderingsspecialist"
                    description="Gepassioneerd omtrent vloerverwijdering en opgeruimd werken. Met jarenlange ervaring in het vak, zorg ik ervoor dat elke vloer perfect wordt verwijderd zonder schade aan de ondergrond."
                />
            </div>

        </section> */}