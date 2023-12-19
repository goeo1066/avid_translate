<script>
    export let level = '';
    export let title = '';
</script>

<div class="px-4 border-b-2 flex flex-row text-3xl py-2">
    {#if level}
        <div class="w-10">{level}</div>
    {/if}
    <h1 class="">
        {title}
    </h1>
</div>