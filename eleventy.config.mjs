import { RenderPlugin } from "@11ty/eleventy";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import pugPlugin from "@11ty/eleventy-plugin-pug"

export default async function(eleventyConfig) {
    eleventyConfig.addPlugin(RenderPlugin);
    eleventyConfig.addPassthroughCopy("src/elements.css");
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    global.filters = eleventyConfig.javascriptFunctions;
    eleventyConfig.addPlugin(pugPlugin);
};

export const config = {
    dir: {
        input: "src",
        output: "dist",
        includes: "_includes",
        layouts: "_layouts",
        data: "_data"
    },
}