import type { APIRoute } from "astro";

import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export const GET: APIRoute = async (context) => {
    const artwork = await getCollection("artwork");
    return rss({
        title: 'Artwork by BraveGrumpy',
        description: `An Amateur artist's catelog.`,
        site: context.site ?? 'https://localhost:4321',
        items: artwork.map((art) => ({
            title: art.data.title,
            description: art.data.description,
            link: `/art`
        })),
        customData: `<language>en-us</language>`
    });
}
