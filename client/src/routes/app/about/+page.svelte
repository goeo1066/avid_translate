<script>
    import {Breadcrumb, BreadcrumbItem} from "flowbite-svelte";
</script>

<div class="flex flex-col dark:text-white">
    <div class="flex flex-row p-4">
        <Breadcrumb aria-label="Solid background breadcrumb example" solid>
            <BreadcrumbItem href="/app/about">About</BreadcrumbItem>
        </Breadcrumb>
    </div>
</div>