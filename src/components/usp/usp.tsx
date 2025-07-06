import { Slot, component$ } from '@builder.io/qwik';
import { HiChevronRightOutline } from '@qwikest/icons/heroicons';

export interface UspProps {
    title: string,
    subtitle: string
}

export const Usp = component$<UspProps>((props) => {
    return (
        <div class="text-center">
            <div class="m-auto inline-block"><Slot /></div>
            <h3>{props.title} <HiChevronRightOutline class="inline-block text-sm" /></h3>
            <p class="text-sm text-neutral-400">{props.subtitle}</p>
        </div>
    );
});
