import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Sveltecult",
      social: {
        github: "https://github.com/sveltecult",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            { label: "Introduction", link: "/guides/introduction/" },
            { label: "Contributing", link: "/guides/contributing/" },
            { label: "Error Handling", link: "/guides/error_handling/" },
            { label: "Custom Validation", link: "/guides/custom/" },
          ],
        },
        {
          label: "Available Rules",
          autogenerate: { directory: "types" },
        },
        {
          label: "Integrations",
          autogenerate: { directory: "integrations" },
        },
      ],
    }),
  ],
});
