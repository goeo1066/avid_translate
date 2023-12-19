<script>
    export let level = '';
    export let title = '';
    export let sideTitle = '';
    export let indent = 0;

    /**
     *
     * @param {number} length
     */
    function range(length) {
        let result = [];
        for (let i = 0; i < length; i++) {
            result.push(i);
        }
        return result;
    }
</script>

<div class="px-4 flex flex-col text-lg py-2">
    <div class="flex flex-row px-2">
        {#each range(indent) as i}
            <div class="w-2"></div>
        {/each}
        {#if level}
            <div class="w-10">{level}</div>
        {/if}
        <h1 class="">
            {title}
        </h1>
        <h1 class="pl-2 pt-2 dark:text-gray-600 text-xs">
            {sideTitle}
        </h1>
    </div>
    <div class="w-full border-2 rounded-lg p-2 mt-2">
        <slot/>
    </div>
</div>