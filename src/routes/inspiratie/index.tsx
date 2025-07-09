import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';

import BathRoom from '~/media/bath-room.png?jsx';
import KitchenFloor from '~/media/kitchen-floor.png?jsx';
import Hallway from '~/media/hallway.png?jsx';
import LivingRoom from '~/media/living-room.png?jsx';
import Bar from '~/media/bar.png?jsx';

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
