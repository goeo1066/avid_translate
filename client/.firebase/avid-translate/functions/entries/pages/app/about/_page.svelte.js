import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { B as Breadcrumb, a as BreadcrumbItem } from "../../../../chunks/BreadcrumbItem.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col dark:text-white"><div class="flex flex-row p-4">${validate_component(Breadcrumb, "Breadcrumb").$$render(
    $$result,
    {
      "aria-label": "Solid background breadcrumb example",
      solid: true
    },
    {},
    {
      default: () => {
        return `${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/app/about" }, {}, {
          default: () => {
            return `About`;
          }
        })}`;
      }
    }
  )}</div></div>`;
});
export {
  Page as default
};
