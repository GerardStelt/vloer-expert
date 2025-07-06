import { component$ } from '@builder.io/qwik';

export default component$(() => {
    return (
        <div class="bg-gradient-to-br from-slate-50 to-slate-100 py-20">
            <div class="container mx-auto px-4">
                <div class="flex flex-col md:flex-row gap-12">
                    <div class="md:w-1/2">
                        <div class="flex flex-col mb-8">
                            <h2 class="text-3xl font-bold mb-4 text-gray-800">Let's Connect</h2>
                            <p class="text-gray-600 text-lg mb-6">
                                We horen graag van je. Of je nu een vraag hebt, feedback of anderszins, ons team staat voor je klaar. 
                                Gebruik de onderstaande kanalen om ons te bereiken, en we nemen zo snel mogelijk contact met je op.
                            </p>

                            <div class="grid gap-6 mb-8">

                                <div class="p-4 bg-white shadow rounded-lg  border border-gray-200 hover:shadow-xl transition-shadow duration-200 flex items-center justify-between">

                                    <div class="flex items-center">
                                        <div class="mr-4 flex size-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail h-5 w-5"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                                        </div>

                                        <div>
                                            <h3 class="text-lg font-medium text-gray-700 mb-1">Email</h3>
                                            <p class="text-gray-500"><a href="mailto:support@company.com" class="hover:text-blue-500 transition-colors duration-200">info@vloerexpert.com</a> </p>
                                        </div>
                                    </div>
                                    <span class=" rounded-full p-2 bg-gray-100 text-gray-600 cursor-pointer  transition duration-200 hover:bg-gray-200" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4"><path d="m10 16 4-4-4-4"></path><path d="M20 12H4"></path></svg></span>

                                </div>

                                <div class="p-4 bg-white shadow rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-200 flex items-center justify-between">

                                    <div class="flex items-center">
                                        <div class="mr-4 flex size-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone h-5 w-5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                        </div>
                                        <div>
                                            <h3 class="text-lg font-medium text-gray-700 mb-1">Telefoon</h3>
                                            <p class="text-gray-500"><a href="tel:+15551234567" class="hover:text-blue-500 transition-colors duration-200">+31 (0) 6 3760 2526</a> </p>
                                        </div>
                                    </div>
                                    <span class=" rounded-full p-2 bg-gray-100 text-gray-600 cursor-pointer transition duration-200 hover:bg-gray-200" > <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4"><path d="m10 16 4-4-4-4"></path><path d="M20 12H4"></path></svg>
                                    </span>
                                </div>


                                <div class="p-4 bg-white shadow rounded-lg  border border-gray-200 hover:shadow-xl transition-shadow duration-200 flex items-center justify-between">
                                    <div class="flex items-center">

                                        <div class="mr-4 flex size-10 items-center justify-center rounded-full bg-teal-100 text-teal-600">

                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin h-5 w-5"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                        </div>
                                        <div>
                                            <h3 class="text-lg font-medium text-gray-700 mb-1">Adres</h3>
                                            <p class="text-gray-500"> <a href="#" class="hover:text-blue-500 transition-colors duration-200">Dokter Hiemstralaan 22, 4205 KM Gorinchem</a> </p>
                                        </div>
                                    </div>
                                    <span class=" rounded-full p-2 bg-gray-100 text-gray-600 cursor-pointer  transition duration-200 hover:bg-gray-200" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4"><path d="m10 16 4-4-4-4"></path><path d="M20 12H4"></path></svg>
                                    </span>
                                </div>

                            </div>
                            <div class="my-5 ">
                                <p class="text-gray-500 text-sm">Need Help?
                                    <a href="#" class="font-medium text-blue-600 hover:text-blue-500"> FAQ's </a> or  <a href="#" class="font-medium text-blue-600 hover:text-blue-500 "> Contact Us</a>
                                </p>
                            </div>

                        </div>

                    </div>

                    <div class="md:w-1/2  bg-white rounded-lg shadow p-8">

                        <h3 class="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label for="name" class="block text-gray-700 text-sm font-medium mb-2">Naam</label>
                                <input type="text" id="name" placeholder="Enter your name" class=" border border-gray-300  focus:ring-blue-500  focus:border-blue-500 rounded-md p-2 w-full" />
                            </div>

                            <div>
                                <label for="email" class="block text-gray-700 text-sm font-medium mb-2">E-mail</label>
                                <input type="email" id="email" placeholder="Enter your email" class=" border border-gray-300  focus:ring-blue-500 focus:border-blue-500 rounded-md p-2 w-full" />
                            </div>


                            <div>
                                <label for="phone" class="block text-gray-700 text-sm font-medium mb-2">Telefoon</label>
                                <input type="text" id="phone" placeholder="Enter your number" class=" border border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md p-2 w-full" />
                            </div>


                            <div >
                                <label for="subject" class="block text-gray-700 text-sm font-medium mb-2">Onderwerp</label>
                                <input type="text" id="subject" placeholder="Enter subject" class=" border border-gray-300  focus:ring-blue-500 focus:border-blue-500 rounded-md p-2 w-full" />
                            </div>


                            <div class="sm:col-span-2">
                                <label for="message" class="block text-gray-700 text-sm font-medium mb-2">Bericht</label>
                                <textarea id="message" rows={5} class="border border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md p-2 w-full"></textarea>
                            </div>
                            <div class="sm:col-span-2">
                                <button class="bg-blue-500  hover:bg-blue-600 focus:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md focus:ring-4 focus:ring-blue-300">
                                    Verstuur
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
});