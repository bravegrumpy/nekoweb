import { defineCollection } from "astro:content";

import { glob, file } from "astro/loaders"

import { z } from "astro/zod";

const artwork = defineCollection({
    loader: file("src/data/artworks.json"),
    schema: ({ image }) =>  z.object({
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
        display: z.boolean()

    })
});

const routes = defineCollection({
    loader: file("src/data/routes.json"),
    schema: z.object({
        id: z.string(),
        href: z.string(),
        text: z.string(),
        visible: z.boolean(),
        order: z.number()
    })
});

const buttons = defineCollection({
    loader: file("src/data/button-collection.json"),
    schema: ({ image }) => z.object({
        id: z.number(),
        owner: z.union([z.literal("other"), z.literal("me")]),
        href: z.url(),
        image: z.object({
            src: image(),
            alt: z.string(),
        }),
        attribution: z.optional(z.string())
    })
})

export const collections = { artwork, routes, buttons }