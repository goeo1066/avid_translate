<script>
    import {DropdownItem} from "flowbite-svelte";
    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher();

    export let labelInSourceLanguage = '';
    export let labelInEnglish = '';
</script>

<DropdownItem on:click={(e) => dispatch('click')}>
    <div class="flex flex-row">
        <div class="w-20 border-r-2 border-r-gray-500 mr-3">{labelInSourceLanguage}</div>
        <div>{labelInEnglish}</div>
    </div>
</DropdownItem>