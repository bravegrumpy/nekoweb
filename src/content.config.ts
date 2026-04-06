import { defineCollection } from "astro:content";

import { glob, file } from "astro/loaders"

import { z } from "astro/zod";

const artwork = defineCollection({
    loader: file("src/data/artworks.json"),
    schema: ({image}) =>  z.object({
        id: z.string(),
        title: z.string(),
        description: z.string(),
        image: z.object({
            src: image(),
            alt: z.string(),
            width: z.number(),
            height: z.number()
        }),
        footer: z.string(),
        display: z.optional(z.boolean())

    })
});

export const collections = { artwork }