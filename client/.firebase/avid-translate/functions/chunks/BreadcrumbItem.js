import { c as create_ssr_component, d as compute_rest_props, f as spread, h as escape_attribute_value, g as escape_object, i as add_attribute, k as compute_slots } from "./ssr.js";
import { twMerge } from "tailwind-merge";
const Breadcrumb = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["solid", "navClass", "solidClass", "olClass", "ariaLabel"]);
  let { solid = false } = $$props;
  let { navClass = "flex" } = $$props;
  let { solidClass = "flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" } = $$props;
  let { olClass = "inline-flex items-center space-x-1 md:space-x-3" } = $$props;
  let { ariaLabel = "Breadcrumb" } = $$props;
  let classNav = solid ? solidClass : navClass;
  if ($$props.solid === void 0 && $$bindings.solid && solid !== void 0)
    $$bindings.solid(solid);
  if ($$props.navClass === void 0 && $$bindings.navClass && navClass !== void 0)
    $$bindings.navClass(navClass);
  if ($$props.solidClass === void 0 && $$bindings.solidClass && solidClass !== void 0)
    $$bindings.solidClass(solidClass);
  if ($$props.olClass === void 0 && $$bindings.olClass && olClass !== void 0)
    $$bindings.olClass(olClass);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<nav${spread(
    [
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(classNav, $$props.class))
      }
    ],
    {}
  )}><ol${add_attribute("class", twMerge(olClass, $$props.classOl), 0)}>${slots.default ? slots.default({}) : ``}</ol></nav> `;
});
const BreadcrumbItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["home", "href", "linkClass", "spanClass", "homeClass"]);
  let $$slots = compute_slots(slots);
  let { home = false } = $$props;
  let { href = void 0 } = $$props;
  let { linkClass = "ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white" } = $$props;
  let { spanClass = "ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400" } = $$props;
  let { homeClass = "inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" } = $$props;
  if ($$props.home === void 0 && $$bindings.home && home !== void 0)
    $$bindings.home(home);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.linkClass === void 0 && $$bindings.linkClass && linkClass !== void 0)
    $$bindings.linkClass(linkClass);
  if ($$props.spanClass === void 0 && $$bindings.spanClass && spanClass !== void 0)
    $$bindings.spanClass(spanClass);
  if ($$props.homeClass === void 0 && $$bindings.homeClass && homeClass !== void 0)
    $$bindings.homeClass(homeClass);
  return `<li${spread(
    [
      {
        class: escape_attribute_value(twMerge("inline-flex items-center", $$props.class))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${home ? `<a${add_attribute("class", twMerge(homeClass, $$props.classHome), 0)}${add_attribute("href", href, 0)}>${$$slots.icon ? `${slots.icon ? slots.icon({}) : ``}` : `<svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>`} ${slots.default ? slots.default({}) : ``}</a>` : `${$$slots.icon ? `${slots.icon ? slots.icon({}) : ``}` : `<svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>`} ${href ? `<a${add_attribute("class", twMerge(linkClass, $$props.classLink), 0)}${add_attribute("href", href, 0)}>${slots.default ? slots.default({}) : ``}</a>` : `<span${add_attribute("class", twMerge(spanClass, $$props.classSpan), 0)}>${slots.default ? slots.default({}) : ``}</span>`}`}</li> `;
});
export {
  Breadcrumb as B,
  BreadcrumbItem as a
};
