import { query, mutation } from "$lib/convex/_generated/server"
import { v } from "convex/values"

export const get = query({
    args: {},
    handler: async (ctx) => {
        const routes = await ctx.db
            .query("navigation")
            .withIndex("by_exists_index", (q) => q.eq("exists", true))
            .order("asc")
            .collect();
        return routes.map((route) => ({...route}))
    }
});

export const createRoute = mutation({
    args: { 
        id: v.string(), 
        href: v.string(), 
        text: v.string(), 
        pageTitle: v.string(), 
        pageSubtitle: v.string(),
        display: v.boolean(),
        exists: v.boolean(),
    },
    handler: async (ctx, args) => {
        const newRoute = await ctx.db.insert("navigation", {
            id: args.id,
            href: args.href,
            text: args.text,
            pageTitle: args.pageTitle,
            pageSubtitle: args.pageSubtitle,
            display: args.display,
            exists: args.exists
        });
        return newRoute
    }
});