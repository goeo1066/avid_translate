import { c as create_ssr_component, d as compute_rest_props, s as setContext, f as spread, g as escape_object, h as escape_attribute_value, j as getContext, i as add_attribute, e as escape, k as compute_slots, l as each, a as validate_store, b as subscribe, v as validate_component } from "../../../../chunks/ssr.js";
import { B as Breadcrumb, a as BreadcrumbItem } from "../../../../chunks/BreadcrumbItem.js";
import { twMerge } from "tailwind-merge";
import { w as writable } from "../../../../chunks/index.js";
import { P as Prism } from "../../../../chunks/http.js";
import { p as page } from "../../../../chunks/stores.js";
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["activeUrl", "asideClass", "nonActiveClass", "activeClass", "ariaLabel"]);
  const activeUrlStore = writable("");
  let { activeUrl = "" } = $$props;
  let { asideClass = "w-64" } = $$props;
  let { nonActiveClass = "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" } = $$props;
  let { activeClass = "flex items-center p-2 text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" } = $$props;
  let { ariaLabel = "Sidebar" } = $$props;
  setContext("sidebarContext", { activeClass, nonActiveClass });
  setContext("activeUrl", activeUrlStore);
  if ($$props.activeUrl === void 0 && $$bindings.activeUrl && activeUrl !== void 0)
    $$bindings.activeUrl(activeUrl);
  if ($$props.asideClass === void 0 && $$bindings.asideClass && asideClass !== void 0)
    $$bindings.asideClass(asideClass);
  if ($$props.nonActiveClass === void 0 && $$bindings.nonActiveClass && nonActiveClass !== void 0)
    $$bindings.nonActiveClass(nonActiveClass);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    {
      activeUrlStore.set(activeUrl);
    }
  }
  return `<aside${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(asideClass, $$props.class))
      },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</aside> `;
});
const SidebarItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let active;
  let aClass;
  let $$restProps = compute_rest_props($$props, ["href", "label", "spanClass", "activeClass", "nonActiveClass"]);
  let $$slots = compute_slots(slots);
  let { href = "" } = $$props;
  let { label = "" } = $$props;
  let { spanClass = "ml-3" } = $$props;
  let { activeClass = void 0 } = $$props;
  let { nonActiveClass = void 0 } = $$props;
  const context = getContext("sidebarContext") ?? {};
  const activeUrlStore = getContext("activeUrl");
  let sidebarUrl = "";
  activeUrlStore.subscribe((value) => {
    sidebarUrl = value;
  });
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.spanClass === void 0 && $$bindings.spanClass && spanClass !== void 0)
    $$bindings.spanClass(spanClass);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.nonActiveClass === void 0 && $$bindings.nonActiveClass && nonActiveClass !== void 0)
    $$bindings.nonActiveClass(nonActiveClass);
  active = sidebarUrl ? href === sidebarUrl : false;
  aClass = twMerge(
    active ? activeClass ?? context.activeClass : nonActiveClass ?? context.nonActiveClass,
    $$props.class
  );
  return `<li><a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      { class: escape_attribute_value(aClass) }
    ],
    {}
  )}>${slots.icon ? slots.icon({}) : ``} <span${add_attribute("class", spanClass, 0)}>${escape(label)}</span> ${$$slots.subtext ? `${slots.subtext ? slots.subtext({}) : ``}` : ``}</a></li> `;
});
const SidebarGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["ulClass", "borderClass", "border"]);
  let { ulClass = "space-y-2" } = $$props;
  let { borderClass = "pt-4 mt-4 border-t border-gray-200 dark:border-gray-700" } = $$props;
  let { border = false } = $$props;
  if (border) {
    ulClass += " " + borderClass;
  }
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass !== void 0)
    $$bindings.ulClass(ulClass);
  if ($$props.borderClass === void 0 && $$bindings.borderClass && borderClass !== void 0)
    $$bindings.borderClass(borderClass);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  return `<ul${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(ulClass, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</ul> `;
});
const SidebarWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["divClass"]);
  let { divClass = "overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800" } = $$props;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  return `<div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(divClass, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div> `;
});
const P = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "color",
    "height",
    "align",
    "justify",
    "italic",
    "firstupper",
    "upperClass",
    "opacity",
    "whitespace",
    "size",
    "space",
    "weight"
  ]);
  let { color = "text-gray-900 dark:text-white" } = $$props;
  let { height = "normal" } = $$props;
  let { align = "left" } = $$props;
  let { justify = false } = $$props;
  let { italic = false } = $$props;
  let { firstupper = false } = $$props;
  let { upperClass = "first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left" } = $$props;
  let { opacity = void 0 } = $$props;
  let { whitespace = "normal" } = $$props;
  let { size = "base" } = $$props;
  let { space = void 0 } = $$props;
  let { weight = "normal" } = $$props;
  const sizes = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
    "8xl": "text-8xl",
    "9xl": "text-9xl"
  };
  const weights = {
    thin: "font-thin",
    extralight: "font-extralight",
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
    black: "font-black"
  };
  const spaces = {
    tighter: "tracking-tighter",
    tight: "tracking-tight",
    normal: "tracking-normal",
    wide: "tracking-wide",
    wider: "tracking-wider",
    widest: "tracking-widest"
  };
  const heights = {
    normal: "leading-normal",
    relaxed: "leading-relaxed",
    loose: "leading-loose"
  };
  const aligns = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };
  const whitespaces = {
    normal: "whitespace-normal",
    nowrap: "whitespace-nowrap",
    pre: "whitespace-pre",
    preline: "whitespace-pre-line",
    prewrap: "whitespace-pre-wrap"
  };
  let colorAndopacity = color.split(" ").map((element) => element.trim()).map((element) => element + "/" + String(opacity)).join(" ");
  let classP = twMerge(size && sizes[size], opacity && colorAndopacity || color && color, height && heights[height], weight && weights[weight], space && spaces[space], align && aligns[align], justify && "text-justify", italic && "italic", firstupper && upperClass, whitespace && whitespaces[whitespace], $$props.class);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.justify === void 0 && $$bindings.justify && justify !== void 0)
    $$bindings.justify(justify);
  if ($$props.italic === void 0 && $$bindings.italic && italic !== void 0)
    $$bindings.italic(italic);
  if ($$props.firstupper === void 0 && $$bindings.firstupper && firstupper !== void 0)
    $$bindings.firstupper(firstupper);
  if ($$props.upperClass === void 0 && $$bindings.upperClass && upperClass !== void 0)
    $$bindings.upperClass(upperClass);
  if ($$props.opacity === void 0 && $$bindings.opacity && opacity !== void 0)
    $$bindings.opacity(opacity);
  if ($$props.whitespace === void 0 && $$bindings.whitespace && whitespace !== void 0)
    $$bindings.whitespace(whitespace);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.space === void 0 && $$bindings.space && space !== void 0)
    $$bindings.space(space);
  if ($$props.weight === void 0 && $$bindings.weight && weight !== void 0)
    $$bindings.weight(weight);
  return `<p${spread([escape_object($$restProps), { class: escape_attribute_value(classP) }], {})}>${slots.default ? slots.default({}) : ``}</p> `;
});
const GuideTitleH1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { level = "" } = $$props;
  let { title = "" } = $$props;
  if ($$props.level === void 0 && $$bindings.level && level !== void 0)
    $$bindings.level(level);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<div class="px-4 border-b-2 flex flex-row text-3xl py-2">${level ? `<div class="w-10">${escape(level)}</div>` : ``} <h1 class="">${escape(title)}</h1></div>`;
});
function range(length) {
  let result = [];
  for (let i = 0; i < length; i++) {
    result.push(i);
  }
  return result;
}
const BulletItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { level = "" } = $$props;
  let { title = "" } = $$props;
  let { sideTitle = "" } = $$props;
  let { indent = 0 } = $$props;
  if ($$props.level === void 0 && $$bindings.level && level !== void 0)
    $$bindings.level(level);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.sideTitle === void 0 && $$bindings.sideTitle && sideTitle !== void 0)
    $$bindings.sideTitle(sideTitle);
  if ($$props.indent === void 0 && $$bindings.indent && indent !== void 0)
    $$bindings.indent(indent);
  return `<div class="px-4 flex flex-col text-lg py-2"><div class="flex flex-row px-2">${each(range(indent), (i) => {
    return `<div class="w-2"></div>`;
  })} ${level ? `<div class="w-10">${escape(level)}</div>` : ``} <h1 class="">${escape(title)}</h1> <h1 class="pl-2 pt-2 dark:text-gray-600 text-xs">${escape(sideTitle)}</h1></div> <div class="w-full border-2 rounded-lg p-2 mt-2">${slots.default ? slots.default({}) : ``}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeUrl;
  let $page, $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let exampleDataMap = /* @__PURE__ */ new Map();
  activeUrl = $page.url.hash;
  $$unsubscribe_page();
  return `<div class="flex flex-col dark:text-white"><div class="flex flex-row p-4">${validate_component(Breadcrumb, "Breadcrumb").$$render(
    $$result,
    {
      "aria-label": "Solid background breadcrumb example",
      solid: true
    },
    {},
    {
      default: () => {
        return `${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/app/guide" }, {}, {
          default: () => {
            return `Guide`;
          }
        })}`;
      }
    }
  )}</div> <div class="flex flex-row"><div class="p-4">${validate_component(Sidebar, "Sidebar").$$render($$result, { activeUrl }, {}, {
    default: () => {
      return `${validate_component(SidebarWrapper, "SidebarWrapper").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(SidebarGroup, "SidebarGroup").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(SidebarItem, "SidebarItem").$$render(
                $$result,
                {
                  label: "1. File formats",
                  href: "#file_format"
                },
                {},
                {}
              )}`;
            }
          })}`;
        }
      })}`;
    }
  })}</div> <div id="file_format" class="flex-1 w-96">${validate_component(GuideTitleH1, "GuideTitleH1").$$render($$result, { level: "1.", title: "File formats" }, {}, {})} <div class="flex flex-col gap-4 p-4">${exampleDataMap ? `<div class="border-2 p-1 rounded-lg"><h3 class="font-semibold text-gray-900 dark:bg-gray-500 dark:text-white text-left px-2 rounded" data-svelte-h="svelte-yfew">JSON</h3> <div class="p-2"><div class="w-40 bg-gray-500 px-2 py-1 rounded-lg" data-svelte-h="svelte-1tjta50">Supported Fields</div> ${validate_component(BulletItem, "BulletItem").$$render(
    $$result,
    {
      level: "-",
      title: "purpose",
      sideTitle: "<Optional>"
    },
    {},
    {
      default: () => {
        return `${validate_component(P, "P").$$render($$result, {}, {}, {
          default: () => {
            return `Describe the purpose`;
          }
        })}`;
      }
    }
  )} ${validate_component(BulletItem, "BulletItem").$$render(
    $$result,
    {
      level: "-",
      title: "list",
      sideTitle: "<Required>"
    },
    {},
    {
      default: () => {
        return `${validate_component(P, "P").$$render($$result, {}, {}, {
          default: () => {
            return `List the sentences what you want to translate`;
          }
        })}`;
      }
    }
  )}</div> ${validate_component(Prism, "Prism").$$render(
    $$result,
    {
      language: "js",
      source: exampleDataMap.get("json")
    },
    {},
    {}
  )}</div> <div class="border-2 p-1 rounded-lg"><h3 class="font-semibold text-gray-900 dark:bg-gray-500 dark:text-white text-left px-2 rounded" data-svelte-h="svelte-1841qa9">XML</h3> <div class="p-2"><div class="w-40 bg-gray-500 px-2 py-1 rounded-lg" data-svelte-h="svelte-z9kagw">Supported Tags</div> ${validate_component(BulletItem, "BulletItem").$$render(
    $$result,
    {
      level: "-",
      title: "purpose",
      sideTitle: "<Optional>"
    },
    {},
    {
      default: () => {
        return `${validate_component(P, "P").$$render($$result, {}, {}, {
          default: () => {
            return `Describe the purpose`;
          }
        })}`;
      }
    }
  )} ${validate_component(BulletItem, "BulletItem").$$render(
    $$result,
    {
      level: "-",
      title: "list",
      sideTitle: "<Required>"
    },
    {},
    {
      default: () => {
        return `${validate_component(P, "P").$$render($$result, {}, {}, {
          default: () => {
            return `List the sentences what you want to translate within an item tag`;
          }
        })}`;
      }
    }
  )} ${validate_component(BulletItem, "BulletItem").$$render($$result, { indent: 4, level: "-", title: "item" }, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, {}, {}, {
        default: () => {
          return `List the sentences what you want to translate within an item tag`;
        }
      })}`;
    }
  })}</div> ${validate_component(Prism, "Prism").$$render(
    $$result,
    {
      language: "xml",
      source: exampleDataMap.get("xml")
    },
    {},
    {}
  )}</div> <div class="border-2 p-1 rounded-lg"><h3 class="font-semibold text-gray-900 dark:bg-gray-500 dark:text-white text-left px-2 rounded" data-svelte-h="svelte-1j0xgqo">CSV</h3> <div class="pl-4">${validate_component(P, "P").$$render($$result, {}, {}, {
    default: () => {
      return `Containing &#39;purpose&#39; in CSV format is not supported`;
    }
  })} ${validate_component(P, "P").$$render($$result, {}, {}, {
    default: () => {
      return `The first row is for label, and it should be &#39;list&#39;`;
    }
  })}</div> <div class="p-2"><div class="w-40 bg-gray-500 px-2 py-1 rounded-lg" data-svelte-h="svelte-tcxhgd">Supported Column</div> ${validate_component(BulletItem, "BulletItem").$$render(
    $$result,
    {
      level: "-",
      title: "list",
      sideTitle: "<Required>"
    },
    {},
    {
      default: () => {
        return `${validate_component(P, "P").$$render($$result, {}, {}, {
          default: () => {
            return `List the sentences what you want to translate`;
          }
        })}`;
      }
    }
  )}</div> ${validate_component(Prism, "Prism").$$render(
    $$result,
    {
      language: "txt",
      source: exampleDataMap.get("csv")
    },
    {},
    {}
  )}</div>` : ``}</div></div></div></div>`;
});
export {
  Page as default
};
