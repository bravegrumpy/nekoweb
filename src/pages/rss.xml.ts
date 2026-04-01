import rss, { pagesGlobToRssItems } from "@astrojs/rss"

export async function GET(context) {
    return rss({
        title: "Content",
        description: "This is some content I wrote",
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
        customData: `<language>en-us</language>`
    })
}