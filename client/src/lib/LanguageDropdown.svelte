<script>
    import DropdownItemLangauge from "$lib/DropdownItemLangauge.svelte";
    import {Dropdown, DropdownItem} from "flowbite-svelte";

    export let selectedLanguage = ''
    export let withAutomatic = false;
</script>

<Dropdown class="p-2 space-y-1 text-sm" open={false}>
    <div slot="header" class="px-4 py-2">
        <span class="block text-sm text-gray-900 dark:text-white">Select Uploading Language</span>
    </div>
    {#if withAutomatic}
        <DropdownItem on:click={(e) => selectedLanguage = ''}>Automatic</DropdownItem>
    {/if}
    <DropdownItemLangauge on:click={(e) => selectedLanguage = 'en'}
                          labelInSourceLanguage="English"
                          labelInEnglish="English"/>
    <DropdownItemLangauge on:click={(e) => selectedLanguage = 'ja'}
                          labelInSourceLanguage="日本語"
                          labelInEnglish="Japanese"/>
    <DropdownItemLangauge on:click={(e) => selectedLanguage = 'ko'}
                          labelInSourceLanguage="한국어"
                          labelInEnglish="Korean"/>
    <DropdownItemLangauge on:click={(e) => selectedLanguage = 'tl'}
                          labelInSourceLanguage="Tagalog"
                          labelInEnglish="Tagalog"/>
    <DropdownItemLangauge on:click={(e) => selectedLanguage = 'cn-chs'}
                          labelInSourceLanguage="简体中文"
                          labelInEnglish="Chinese (Simplified)"/>
    <DropdownItemLangauge on:click={(e) => selectedLanguage = 'cn-cht'}
                          labelInSourceLanguage="繁體中文"
                          labelInEnglish="Chinese (Traditional)"/>
</Dropdown>