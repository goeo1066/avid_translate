<script>
    import "../../app.pcss";
    import {page} from '$app/stores';
    import {DarkMode, Footer, FooterCopyright, Navbar, NavBrand, NavHamburger, NavLi, NavUl} from "flowbite-svelte";
    import {browser} from "$app/environment";
    import CustomDarkMode from "$lib/CustomDarkMode.svelte";

    $: activeUrl = $page.url.pathname;
</script>


<div class="flex flex-col h-screen">
    {#key activeUrl}
        <Navbar>
            <NavBrand href="/">
                <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Avid Translate</span>
            </NavBrand>
            <NavHamburger/>
            {#if activeUrl}
                <NavUl {activeUrl}>
                    <NavLi href="/app/translate">Translate</NavLi>
                    <NavLi href="/app/guide">Guide</NavLi>
                    <NavLi href="/app/about">About</NavLi>
                </NavUl>
            {/if}
            <CustomDarkMode/>
        </Navbar>
    {/key}

    <div class="flex-1 dark:bg-gray-950 w-screen overflow-y-scroll">
        <div class="flex justify-center">
            <div class="w-[70rem]">
                <slot/>
            </div>
        </div>
    </div>

    <Footer>
        <div class="dark:bg-gray-900 dark:text-white">
            <!--        <FooterCopyright href="/app" by="Flowbite™" year={2022} />-->
            <div class="py-4 px-8">
                <div class="dark:border-t-2 dark:border-t-gray-600">
                    <div class="pt-2 pb-4">
                        <FooterCopyright href="/app" by="Avid Translate" year={2023}/>
                    </div>
                </div>
            </div>
        </div>
    </Footer>
</div>
