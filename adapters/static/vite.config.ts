import { staticAdapter } from "@builder.io/qwik-city/adapters/static/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from "../../vite.config";

export default extendConfig(baseConfig, () => {
    return {
        // base: "/vloer-expert/",
        build: {
            ssr: true,
            rollupOptions: {
                input: ["@qwik-city-plan"],
                // base: "/vloer-expert/"
            }
        },
        plugins: [
            staticAdapter({
                origin: "https://gerardstelt.github.io",
                base: "/vloer-expert",
            })
        ]
    };
});