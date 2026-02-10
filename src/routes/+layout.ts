export const prerender = true;
export const ssr = false;

import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async () => {
    const PUBLIC_CONVEX_URL="https://scrupulous-albatross-914.convex.cloud"
    return {
        env: PUBLIC_CONVEX_URL
    }
}