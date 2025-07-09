import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';

import BathRoom from '/public/images/bath-room.png?jsx';
import KitchenFloor from '/public/images/kitchen-floor.png?jsx';
import Hallway from '/public/images/hallway.png?jsx';
import LivingRoom from '/public/images/living-room.png?jsx';
import Bar from '/public/images/bar.png?jsx';

export default component$(() => {
    return (
        <div>
            <BathRoom class="size-full object-cover object-bottom max-h-150" />
            <div class="pt-10 container mx-auto p-2.5 sm:-mt-50 sm:columns-3 masonry gap-4">
                <div>
                    <KitchenFloor />
                    <h3>Paola aan de wiel</h3>
                    <h2>Lavastone Sleeuwijk</h2>
                    <p>
                        Een oplevering gedaan in Sleeuwijk met lavastone top.
                    </p>
                    <div>Lees meer -</div>
                </div>
                <div>
                    <Hallway />
                    <h3>Paola aan de wiel</h3>
                    <h2>Lavastone Sleeuwijk</h2>
                    <p>
                        Een oplevering gedaan in Sleeuwijk met lavastone top.
                    </p>
                    <div>Lees meer -</div>
                </div>
                <div>
                    <LivingRoom />
                    <h3>Paola aan de wiel</h3>
                    <h2>Lavastone Sleeuwijk</h2>
                    <p>
                        Een oplevering gedaan in Sleeuwijk met lavastone top.
                    </p>
                    <div>Lees meer -</div>
                </div>
                <div>
                    <Bar />
                    <h3>Paola aan de wiel</h3>
                    <h2>Lavastone Sleeuwijk</h2>
                    <p>
                        Een oplevering gedaan in Sleeuwijk met lavastone top.
                    </p>
                    <div>Lees meer -</div>
                </div>
            </div>
        </div>
    );
});

export const head: DocumentHead = {
    title: "Inspiratie | Vloer Expert",
    meta: [
        {
            name: "inspiratie",
            content: "Inspiratie Vloer Expert",
        },
    ],
};
