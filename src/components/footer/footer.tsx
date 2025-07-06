import { component$ } from "@builder.io/qwik";
import Logo from "~/components/logo/logo";


export default component$(() => {

    return (
        <footer class="bg-slate-300 text-neutral-600">
            <div class="container mx-auto py-6 max-sm:px-2.5 sm:grid grid-cols-5 gap-12">
                <div class="col-span-2">
                    <Logo />
                    <p class="mt-4">Wij voorzien in kwaliteitsvloeren waarop je voorop loopt.</p>
                    <div class="mt-6 flex gap-3 items-center">
                        <a href="#!" class="hover:underline" title="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9.602 21.026v-7.274H6.818a.545.545 0 0 1-.545-.545V10.33a.545.545 0 0 1 .545-.545h2.773V7a4.547 4.547 0 0 1 4.86-4.989h2.32a.556.556 0 0 1 .557.546v2.436a.557.557 0 0 1-.557.545h-1.45c-1.566 0-1.867.742-1.867 1.833v2.413h3.723a.533.533 0 0 1 .546.603l-.337 2.888a.545.545 0 0 1-.545.476h-3.364v7.274a.962.962 0 0 1-.975.974h-1.937a.961.961 0 0 1-.963-.974" /></svg>
                        </a>
                        <a href="#!" class="hover:underline" title="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8" /><path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z" /><path stroke-linecap="round" stroke-linejoin="round" d="m17.5 6.51l.01-.011" /></g></svg>
                        </a>
                        <a href="#!" class="hover:underline" title="Pinterest">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M256.05 32c-123.7 0-224 100.3-224 224c0 91.7 55.2 170.5 134.1 205.2c-.6-15.6-.1-34.4 3.9-51.4c4.3-18.2 28.8-122.1 28.8-122.1s-7.2-14.3-7.2-35.4c0-33.2 19.2-58 43.2-58c20.4 0 30.2 15.3 30.2 33.6c0 20.5-13.1 51.1-19.8 79.5c-5.6 23.8 11.9 43.1 35.4 43.1c42.4 0 71-54.5 71-119.1c0-49.1-33.1-85.8-93.2-85.8c-67.9 0-110.3 50.7-110.3 107.3c0 19.5 5.8 33.3 14.8 43.9c4.1 4.9 4.7 6.9 3.2 12.5c-1.1 4.1-3.5 14-4.6 18c-1.5 5.7-6.1 7.7-11.2 5.6c-31.3-12.8-45.9-47-45.9-85.6c0-63.6 53.7-139.9 160.1-139.9c85.5 0 141.8 61.9 141.8 128.3c0 87.9-48.9 153.5-120.9 153.5c-24.2 0-46.9-13.1-54.7-27.9c0 0-13 51.6-15.8 61.6c-4.7 17.3-14 34.5-22.5 48a225.13 225.13 0 0 0 63.5 9.2c123.7 0 224-100.3 224-224S379.75 32 256.05 32" /></svg>
                        </a>
                        <a href="#!" class="hover:underline" title="Youtube">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><defs><mask id="ipSYoutube0"><g fill="none" stroke-linejoin="round"><path fill="#fff" stroke="#fff" stroke-width="4" d="M11.064 10.414c5.543-.276 9.854-.414 12.934-.414s7.393.138 12.939.415a6 6 0 0 1 5.68 5.492c.254 3.034.381 5.706.381 8.017c0 2.339-.13 5.048-.39 8.128a6 6 0 0 1-5.587 5.483c-4.741.31-9.082.465-13.023.465c-3.94 0-8.28-.155-13.018-.465a6 6 0 0 1-5.587-5.48c-.263-3.103-.395-5.814-.395-8.131c0-2.29.129-4.963.385-8.02a6 6 0 0 1 5.68-5.49Z" /><path fill="#000" stroke="#000" stroke-width="3.429" d="M21 19.61v8.796a.857.857 0 0 0 1.33.715l6.597-4.36a.857.857 0 0 0 .006-1.427l-6.598-4.436a.857.857 0 0 0-1.335.711Z" /></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSYoutube0)" /></svg>
                        </a>
                        <a href="#!" class="hover:underline" title="Linkedin">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="4.983" cy="5.009" r="2.188" fill="currentColor" /><path fill="currentColor" d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66zm-6.142 0H6.87v12.139H3.095z" /></svg>
                        </a>

                    </div>
                </div>
                <div class="space-y-4">
                    <div class="uppercase font-bold text-lg tracking-widest">Contact</div>
                    <p>
                        Dokter Hiemstralaan 22 <br />
                        4205 KM Gorinchem
                    </p>
                    <p>
                        +31 (0) 6 37 60 25 26 <br />
                        info@vloerexpert.nl
                    </p>
                    <p>
                        KvK 123 45 678
                    </p>
                </div>
                <div class="space-y-4">
                    <div class="uppercase font-bold text-lg tracking-widest">Diensten</div>
                    <ol class="space-y-4">
                        <li>Vloerverwijdering</li>
                        <li>Vloerverwarming</li>
                        <li>Egalisatie</li>
                        <li>Eindafwerking</li>
                    </ol>
                </div>
                <div class="space-y-4">
                    <div class="uppercase font-bold text-lg tracking-widest">Blijf op de hoogte</div>
                    <p>Schrijf je in voor onze nieuwsbrief</p>
                    <div class="flex">
                        <input type="email" placeholder="E-mail adres" class="p-2 bg-white" />
                        <button class="bg-blue-600 text-white px-4 py-2">Inschrijven</button>

                    </div>
                </div>
            </div>
        </footer>
    );
    
});