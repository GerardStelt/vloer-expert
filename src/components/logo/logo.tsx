import { component$, type PropsOf } from "@builder.io/qwik";
 
function MdiShieldCrownOutline(props: PropsOf<'svg'>, key: string) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props} key={key}><path d="m12 1l9 4v6c0 5.55-3.84 10.74-9 12c-5.16-1.26-9-6.45-9-12V5zm0 2.18L5 6.3v4.92C5 15.54 8.25 20 12 21c3.75-1 7-5.46 7-9.78V6.3zM16 14v1.59c-.04.22-.22.37-.47.41H8.47c-.25-.04-.43-.19-.47-.41V14zm1-6l-1 5H8L7 8l2.67 2.67L12 8.34l2.33 2.33z"></path></svg>
    )
}

export default component$(() => {
    return (
        <div class="flex items-center">
            <div class="text-center uppercase text-neutral-600">
                <div class="text-3xl font-black border-b-4 border-black">Vloer</div>
                <div class="text-lg font-thin flex justify-between"><span>e</span><span>x</span><span>p</span><span>e</span><span>r</span><span>t</span></div>
            </div>
            <div><MdiShieldCrownOutline class="row-span-2 text-6xl" fill="#525252" /></div>
        </div>
    );
});