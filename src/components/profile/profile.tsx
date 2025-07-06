import { component$ } from '@builder.io/qwik';

export interface ProfileProps {
    picture: string;
    name: string;
    title: string;
    description: string;
}

export default component$<ProfileProps>((props) => {
    return (
        <div class="bg-gradient-to-br from-gray-50 to-gray-100 opacity-90 rounded-xl overflow-hidden shadow-xl w-full">
            <div class="md:flex">
                <div class="md:w-1/3">
                    <img class="object-cover size-full" src={props.picture} alt="Member picture" />
                </div>

                <div class="md:w-2/3 p-6 flex flex-col gap-4">
                    <div>
                        <h2 class="text-2xl font-semibold whitespace-nowrap">{props.name}</h2>
                        <span class="text-gray-600 text-sm">{props.title}</span>
                    </div>

                    <p class="text-gray-700">{props.description}</p>

                    <div class="flex justify-between">
                        <button class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-[#FFD700] rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" tabindex="0">
                            <svg class="me-2 -ms-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                            Bericht
                        </button>
                        <button class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700" tabindex="0">
                            <svg class="me-2 -ms-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                            Profiel
                        </button>
                    </div>

                    <div class="flex flex-wrap gap-2 border-t border-gray-200 pt-4">
                        <span class="inline-flex items-center gap-1 bg-gray-500 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm11 7H9v2h6V10z" clip-rule="evenodd" />
                            </svg>
                            Verwijdering
                        </span>
                        <span class="inline-flex items-center gap-1 bg-gray-500 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm11 7H9v2h6V10z" clip-rule="evenodd" />
                            </svg>
                            Egalisatie
                        </span>
                        <span class="inline-flex items-center gap-1 bg-gray-500 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm11 7H9v2h6V10z" clip-rule="evenodd" />
                            </svg>
                            Gietvloer
                        </span>
                    </div>

                </div>

            </div>
        </div>
    );
});
