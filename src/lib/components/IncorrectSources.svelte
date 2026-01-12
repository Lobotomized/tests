<script lang="ts">
    import IncorrectSource from './IncorrectSource.svelte';
    const data = $props();
    const { result, incorrectSources, goToQuestion } = data;

</script>
<section class="study card">
{#if result}
    {#if incorrectSources.length === 0}
        <p>Great job! No mistakes to study.</p>
    {:else}
        {#each incorrectSources as src}
            <IncorrectSource src={src} goToQuestion={goToQuestion}></IncorrectSource>
        {/each}
    {/if}
{/if}
</section>
