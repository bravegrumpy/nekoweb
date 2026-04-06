import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
    const artwork = await getCollection('artwork');
    return rss({
        title: 'Artwork by BraveGrumpy',
        description: `An Amateur artist's catelog.`,
        site: context.site,
        items: artwork.map((art) => ({
            title: art.data.title,
            description: art.data.description,
            link: `/art`
        })),
        customData: `<language>en-us</language>`
    })
}