import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default async function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
};

export const config = {
    dir: {
        input: "src",
        output: "dist",
        includes: "_includes",
        layouts: "_layouts",
        data: "_data"
    }
}