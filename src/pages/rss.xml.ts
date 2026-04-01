import rss, { pagesToRssItems } from "@astrojs/rss"

export async function GET(context) {
    return rss({
        title: "Content",
        description: "This is some content I wrote",
        site: context.site,
        items: [],
        customData: `<language>en-us</language>`
    })
}