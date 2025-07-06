import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';
import { HiBars3Outline, HiUserOutline, HiXMarkOutline } from '@qwikest/icons/heroicons';
import Logo from '../logo/logo';


export default component$(() => {
    const menuOpen = useSignal<boolean>(false);
    const location = useLocation();

    useVisibleTask$(({ track }) => {
        track(() => location.url.pathname);
        document.body.classList.toggle('no-scroll', false);
    });

    return (
        <header class="sticky top-0 w-full z-20 bg-white sm:bg-white/90 backdrop-blur-sm shadow-md">

            <nav class="container mx-auto p-2.5 flex flex-wrap justify-between group has-[:checked]:h-dvh items-center">
                <Link href="/" onClick$={() => menuOpen.value = false}><Logo /></Link>

                <input id="menu-toggle" type="checkbox" class="hidden peer" bind:checked={menuOpen} onChange$={({ target }) => document.body.classList.toggle('no-scroll', (target as HTMLInputElement).checked)} />
                <label for="menu-toggle" class="sm:hidden">
                    <HiBars3Outline class="text-3xl group-has-[:checked]:hidden" />
                    <HiXMarkOutline class="text-3xl hidden group-has-[:checked]:block" />
                </label>

                <div class="hidden sm:block max-sm:w-full peer-checked:block h-full">
                    <ol class="flex max-sm:flex-col gap-4 max-sm:text-xl max-sm:font-semibold max-sm:pt-4 *:inline-flex" onClick$={() => menuOpen.value = false}>
                        <li><Link href="/inspiratie" class="hover:bg-neutral-100 py-4 sm:px-4">Inspiratie</Link></li>
                        <li><Link href="/over-ons" class="hover:bg-neutral-100 py-4 sm:px-4">Over ons</Link></li>
                        <li><Link href="/contact" class="hover:bg-neutral-100 py-4 sm:px-4">Contact</Link></li>
                        <li><Link href="/login" class="hover:bg-neutral-100 p-4 border">Inloggen</Link></li>
                    </ol>
                </div>
            </nav>

        </header>
    );
});