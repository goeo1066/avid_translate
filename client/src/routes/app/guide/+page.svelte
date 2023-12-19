<script>
    import {Breadcrumb, BreadcrumbItem, P, Sidebar, SidebarGroup, SidebarItem, SidebarWrapper} from "flowbite-svelte";
    import Prism from "svelte-prism";
    import {page} from '$app/stores';
    import {onMount} from "svelte";
    import {_getAssetAsText} from "../translate/http.js";
    import jsonSimpleExample from "$lib/assets/code/simple-example.json.txt";
    import xmlSimpleExample from "$lib/assets/code/simple-example.xml.txt";
    import csvSimpleExample from "$lib/assets/code/simple-example.csv.txt";
    import GuideTitleH1 from "./GuideTitleH1.svelte";
    import BulletItem from "./BulletItem.svelte";

    let exampleDataMap = new Map();
    onMount(async () => {
        let json = await _getAssetAsText(jsonSimpleExample);
        if (json) {
            exampleDataMap.set('json', json);
        } else {
            console.log(`Failed Loading json: ${json}`)
        }

        let xml = await _getAssetAsText(xmlSimpleExample);
        if (xml) {
            exampleDataMap.set('xml', xml);
        } else {
            console.log(`Failed loading xml: ${xml}`)
        }

        let csv = await _getAssetAsText(csvSimpleExample);
        if (csv) {
            exampleDataMap.set('csv', csv);
        } else {
            console.log(`Failed loading xml: ${csv}`)
        }
        exampleDataMap = exampleDataMap;
    });
    $: activeUrl = $page.url.hash;
</script>

<div class="flex flex-col dark:text-white">
    <div class="flex flex-row p-4">
        <Breadcrumb aria-label="Solid background breadcrumb example" solid>
            <BreadcrumbItem href="/app/guide">Guide</BreadcrumbItem>
        </Breadcrumb>
    </div>
    <div class="flex flex-row">
        <div class="p-4">
            {#key activeUrl}
                <Sidebar {activeUrl}>
                    <SidebarWrapper>
                        <SidebarGroup>
                            <SidebarItem label="1. File formats" href="#file_format">

                            </SidebarItem>
                        </SidebarGroup>
                    </SidebarWrapper>
                </Sidebar>
            {/key}
        </div>
        <div id="file_format" class="flex-1 w-96">
            <GuideTitleH1 level="1." title="File formats"/>
            <div class="flex flex-col gap-4 p-4">
                {#if exampleDataMap}
                    <div class="border-2 p-1 rounded-lg">
                        <h3 class="font-semibold text-gray-900 dark:bg-gray-500 dark:text-white text-left px-2 rounded">
                            JSON</h3>
                        <div class="p-2">
                            <div class="w-40 bg-gray-500 px-2 py-1 rounded-lg">Supported Fields</div>
                            <BulletItem
                                    level="-"
                                    title="purpose"
                                    sideTitle="<Optional>">
                                <P>Describe the purpose</P>
                            </BulletItem>
                            <BulletItem
                                    level="-"
                                    title="list"
                                    sideTitle="<Required>">
                                <P>List the sentences what you want to translate</P>
                            </BulletItem>
                        </div>
                        <Prism language="js" source={exampleDataMap.get('json')}/>
                    </div>

                    <div class="border-2 p-1 rounded-lg">
                        <h3 class="font-semibold text-gray-900 dark:bg-gray-500 dark:text-white text-left px-2 rounded">
                            XML</h3>
                        <div class="p-2">
                            <div class="w-40 bg-gray-500 px-2 py-1 rounded-lg">Supported Tags</div>
                            <BulletItem
                                    level="-"
                                    title="purpose"
                                    sideTitle="<Optional>">
                                <P>Describe the purpose</P>
                            </BulletItem>
                            <BulletItem
                                    level="-"
                                    title="list"
                                    sideTitle="<Required>">
                                <P>List the sentences what you want to translate within an item tag</P>
                            </BulletItem>
                            <BulletItem
                                    indent={4}
                                    level="-"
                                    title="item">
                                <P>List the sentences what you want to translate within an item tag</P>
                            </BulletItem>
                        </div>
                        <Prism language="xml" source={exampleDataMap.get('xml')}/>
                    </div>

                    <div class="border-2 p-1 rounded-lg">
                        <h3 class="font-semibold text-gray-900 dark:bg-gray-500 dark:text-white text-left px-2 rounded">
                            CSV</h3>
                        <div class="pl-4">
                            <P>Containing 'purpose' in CSV format is not supported</P>
                            <P>The first row is for label, and it should be 'list'</P>
                        </div>
                        <div class="p-2">
                            <div class="w-40 bg-gray-500 px-2 py-1 rounded-lg">Supported Column</div>
                            <BulletItem
                                    level="-"
                                    title="list"
                                    sideTitle="<Required>">
                                <P>List the sentences what you want to translate</P>
                            </BulletItem>
                        </div>
                        <Prism language="txt" source={exampleDataMap.get('csv')}/>
                    </div>
                {/if}
            </div>
        </div>
    </div>
</div>