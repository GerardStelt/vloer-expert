import { $, useSignal, useVisibleTask$, type PropFunction, type Signal } from "@builder.io/qwik";

/**
 * Interval hook
 */
export function useInterval(callback$: PropFunction<any>, delay: number = 5000) {
    const intervalId = useSignal<ReturnType<typeof setInterval>>();
    const pause = useSignal<number>(0);

    useVisibleTask$(({ cleanup }) => {
        intervalId.value = setInterval(() => {
            if (pause.value-- > 0)  return;
            callback$();
        }, delay);
        cleanup(() => clearInterval(intervalId.value));
    });

    return $((beats: number) => {
        pause.value = beats;    // number of 'beats' to skip
    });
};

/**
 * Slide hook
 * @param {Signal} ref A reference to the container element
 * @returns {Function} A function to scroll to a specific slide
 */
export function useSlide(ref: Signal<HTMLElement | undefined>): Function {
    return $((slide: number) => {
        ref.value?.scrollTo({
            left: (ref.value?.children[slide] as HTMLElement).offsetLeft,
            behavior: 'smooth'
        });
    });

};