<script lang="ts">
    import { useQuery } from "convex-svelte";
    import { api } from "$lib/convex/_generated/api";

    const query = $derived(useQuery(api.tasks.get, {}))
</script>

{#if query.isLoading}
    Loading...
{:else if query.error}
    failed to load: {query.error.toString()}
{:else}
    <ul>
        {#each query.data as task}
            <li>
                {task.isCompleted ? '☑' : '☐'}
                <span>{task.text}</span>
                <span>assigned by {task.assigner}</span>
            </li>
        {/each}
    </ul>
{/if}