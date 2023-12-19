import { c as create_ssr_component, d as compute_rest_props, v as validate_component, i as add_attribute, j as getContext, f as spread, h as escape_attribute_value, g as escape_object, s as setContext, n as get_current_component, k as compute_slots, e as escape, o as createEventDispatcher$1, l as each } from "../../../../chunks/ssr.js";
import { B as Breadcrumb, a as BreadcrumbItem } from "../../../../chunks/BreadcrumbItem.js";
import { T as ToolbarButton, v as validate_dynamic_element, a as validate_void_dynamic_element, i as is_void, F as Frame } from "../../../../chunks/ToolbarButton.js";
import { twMerge, twJoin } from "tailwind-merge";
import * as dom from "@floating-ui/dom";
import { w as writable } from "../../../../chunks/index.js";
import { P as Prism } from "../../../../chunks/http.js";
const CloseButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["name"]);
  let { name = "Close" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `${validate_component(ToolbarButton, "ToolbarButton").$$render($$result, Object.assign({}, { name }, $$restProps, { class: twMerge("ml-auto", $$props.class) }), {}, {
    default: ({ svgSize }) => {
      return `<svg${add_attribute("class", svgSize, 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>`;
    }
  })} `;
});
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["pill", "outline", "size", "href", "type", "color", "shadow", "tag", "checked"]);
  const group = getContext("group");
  let { pill = false } = $$props;
  let { outline = false } = $$props;
  let { size = group ? "sm" : "md" } = $$props;
  let { href = void 0 } = $$props;
  let { type = "button" } = $$props;
  let { color = group ? outline ? "dark" : "alternative" : "primary" } = $$props;
  let { shadow = false } = $$props;
  let { tag = "button" } = $$props;
  let { checked = void 0 } = $$props;
  const colorClasses = {
    alternative: "text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 hover:text-primary-700 focus-within:text-primary-700 dark:focus-within:text-white dark:hover:text-white",
    blue: "text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700",
    dark: "text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700",
    green: "text-white bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700",
    light: "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600",
    primary: "text-white bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700",
    purple: "text-white bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700",
    red: "text-white bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700",
    yellow: "text-white bg-yellow-400 hover:bg-yellow-500 ",
    none: ""
  };
  const colorCheckedClasses = {
    alternative: "text-primary-700 border dark:text-primary-500 bg-gray-100 dark:bg-gray-700 border-gray-300 shadow-gray-300 dark:shadow-gray-800 shadow-inner",
    blue: "text-blue-900 bg-blue-400 dark:bg-blue-500 shadow-blue-700 dark:shadow-blue-800 shadow-inner",
    dark: "text-white bg-gray-500 dark:bg-gray-600 shadow-gray-800 dark:shadow-gray-900 shadow-inner",
    green: "text-green-900 bg-green-400 dark:bg-green-500 shadow-green-700 dark:shadow-green-800 shadow-inner",
    light: "text-gray-900 bg-gray-100 border border-gray-300 dark:bg-gray-500 dark:text-gray-900 dark:border-gray-700 shadow-gray-300 dark:shadow-gray-700 shadow-inner",
    primary: "text-primary-900 bg-primary-400 dark:bg-primary-500 shadow-primary-700 dark:shadow-primary-800 shadow-inner",
    purple: "text-purple-900 bg-purple-400 dark:bg-purple-500 shadow-purple-700 dark:shadow-purple-800 shadow-inner",
    red: "text-red-900 bg-red-400 dark:bg-red-500 shadow-red-700 dark:shadow-red-800 shadow-inner",
    yellow: "text-yellow-900 bg-yellow-300 dark:bg-yellow-400 shadow-yellow-500 dark:shadow-yellow-700 shadow-inner",
    none: ""
  };
  const coloredFocusClasses = {
    alternative: "focus-within:ring-gray-200 dark:focus-within:ring-gray-700",
    blue: "focus-within:ring-blue-300 dark:focus-within:ring-blue-800",
    dark: "focus-within:ring-gray-300 dark:focus-within:ring-gray-700",
    green: "focus-within:ring-green-300 dark:focus-within:ring-green-800",
    light: "focus-within:ring-gray-200 dark:focus-within:ring-gray-700",
    primary: "focus-within:ring-primary-300 dark:focus-within:ring-primary-800",
    purple: "focus-within:ring-purple-300 dark:focus-within:ring-purple-900",
    red: "focus-within:ring-red-300 dark:focus-within:ring-red-900",
    yellow: "focus-within:ring-yellow-300 dark:focus-within:ring-yellow-900",
    none: ""
  };
  const coloredShadowClasses = {
    alternative: "shadow-gray-500/50 dark:shadow-gray-800/80",
    blue: "shadow-blue-500/50 dark:shadow-blue-800/80",
    dark: "shadow-gray-500/50 dark:shadow-gray-800/80",
    green: "shadow-green-500/50 dark:shadow-green-800/80",
    light: "shadow-gray-500/50 dark:shadow-gray-800/80",
    primary: "shadow-primary-500/50 dark:shadow-primary-800/80",
    purple: "shadow-purple-500/50 dark:shadow-purple-800/80",
    red: "shadow-red-500/50 dark:shadow-red-800/80 ",
    yellow: "shadow-yellow-500/50 dark:shadow-yellow-800/80 ",
    none: ""
  };
  const outlineClasses = {
    alternative: "text-gray-900 dark:text-gray-400 hover:text-white border border-gray-800 hover:bg-gray-900 focus-within:bg-gray-900 focus-within:text-white focus-within:ring-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus-within:ring-gray-800",
    blue: "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600",
    dark: "text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus-within:bg-gray-900 focus-within:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600",
    green: "text-green-700 hover:text-white border border-green-700 hover:bg-green-800 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600",
    light: "text-gray-500 hover:text-gray-900 bg-white border border-gray-200 dark:border-gray-600 dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600",
    primary: "text-primary-700 hover:text-white border border-primary-700 hover:bg-primary-700 dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-600",
    purple: "text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500",
    red: "text-red-700 hover:text-white border border-red-700 hover:bg-red-800 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600",
    yellow: "text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400",
    none: ""
  };
  const sizeClasses = {
    xs: "px-3 py-2 text-xs",
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-5 py-3 text-base",
    xl: "px-6 py-3.5 text-base"
  };
  const hasBorder = () => outline || color === "alternative" || color === "light";
  let buttonClass;
  if ($$props.pill === void 0 && $$bindings.pill && pill !== void 0)
    $$bindings.pill(pill);
  if ($$props.outline === void 0 && $$bindings.outline && outline !== void 0)
    $$bindings.outline(outline);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  buttonClass = twMerge(
    "text-center font-medium",
    group ? "focus-within:ring-2" : "focus-within:ring-4",
    group && "focus-within:z-10",
    group || "focus-within:outline-none",
    "inline-flex items-center justify-center " + sizeClasses[size],
    outline && checked && "border dark:border-gray-900",
    outline && checked && colorCheckedClasses[color],
    outline && !checked && outlineClasses[color],
    !outline && checked && colorCheckedClasses[color],
    !outline && !checked && colorClasses[color],
    color === "alternative" && (group && !checked ? "dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-600" : "dark:bg-transparent dark:border-gray-600 dark:hover:border-gray-700"),
    outline && color === "dark" && (group ? checked ? "bg-gray-900 border-gray-800 dark:border-white dark:bg-gray-600" : "dark:text-white border-gray-800 dark:border-white" : "dark:text-gray-400 dark:border-gray-700"),
    coloredFocusClasses[color],
    hasBorder() && group && "border-l-0 first:border-l",
    group ? pill && "first:rounded-l-full last:rounded-r-full" || "first:rounded-l-lg last:rounded-r-lg" : pill && "rounded-full" || "rounded-lg",
    shadow && "shadow-lg",
    shadow && coloredShadowClasses[color],
    $$props.disabled && "cursor-not-allowed opacity-50",
    $$props.class
  );
  return `${href ? `<a${spread(
    [
      { href: escape_attribute_value(href) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(buttonClass)
      },
      { role: "button" }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a>` : `${tag === "button" ? `<button${spread(
    [
      { type: escape_attribute_value(type) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(buttonClass)
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</button>` : `${((tag$1) => {
    validate_dynamic_element(tag$1);
    return tag$1 ? (() => {
      validate_void_dynamic_element(tag$1);
      return `<${tag}${spread(
        [
          escape_object($$restProps),
          {
            class: escape_attribute_value(buttonClass)
          }
        ],
        {}
      )}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}`;
    })() : "";
  })(tag)}`}`} `;
});
const ButtonGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "divClass"]);
  let { size = "md" } = $$props;
  let { divClass = "inline-flex rounded-lg shadow-sm" } = $$props;
  setContext("group", { size });
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  return `<div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(divClass, $$props.class))
      },
      { role: "group" }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div> `;
});
function createEventDispatcher() {
  const component = get_current_component();
  return (type, target, detail) => {
    const callbacks = component.$$.callbacks[type];
    if (callbacks) {
      const event = new CustomEvent(type, { detail });
      target.dispatchEvent(event);
      callbacks.slice().forEach((fn) => {
        fn.call(component, event);
      });
    }
  };
}
const Popper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let middleware;
  let $$restProps = compute_rest_props($$props, [
    "activeContent",
    "arrow",
    "offset",
    "placement",
    "trigger",
    "triggeredBy",
    "reference",
    "strategy",
    "open",
    "yOnly",
    "middlewares"
  ]);
  let { activeContent = false } = $$props;
  let { arrow = true } = $$props;
  let { offset = 8 } = $$props;
  let { placement = "top" } = $$props;
  let { trigger = "hover" } = $$props;
  let { triggeredBy = void 0 } = $$props;
  let { reference = void 0 } = $$props;
  let { strategy = "absolute" } = $$props;
  let { open = false } = $$props;
  let { yOnly = false } = $$props;
  let { middlewares = [dom.flip(), dom.shift()] } = $$props;
  const dispatch = createEventDispatcher();
  let referenceEl;
  let floatingEl;
  let arrowEl;
  let contentEl;
  const px = (n) => n != null ? `${n}px` : "";
  let arrowSide;
  const oppositeSideMap = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function updatePosition() {
    dom.computePosition(referenceEl, floatingEl, { placement, strategy, middleware }).then(({ x, y, middlewareData, placement: placement2, strategy: strategy2 }) => {
      floatingEl.style.position = strategy2;
      floatingEl.style.left = yOnly ? "0" : px(x);
      floatingEl.style.top = px(y);
      if (middlewareData.arrow && arrowEl instanceof HTMLDivElement) {
        arrowEl.style.left = px(middlewareData.arrow.x);
        arrowEl.style.top = px(middlewareData.arrow.y);
        arrowSide = oppositeSideMap[placement2.split("-")[0]];
        arrowEl.style[arrowSide] = px(-arrowEl.offsetWidth / 2 - ($$props.border ? 1 : 0));
      }
    });
  }
  function init(node, _referenceEl) {
    floatingEl = node;
    let cleanup = dom.autoUpdate(_referenceEl, floatingEl, updatePosition);
    return {
      update(_referenceEl2) {
        cleanup();
        cleanup = dom.autoUpdate(_referenceEl2, floatingEl, updatePosition);
      },
      destroy() {
        cleanup();
      }
    };
  }
  let arrowClass;
  if ($$props.activeContent === void 0 && $$bindings.activeContent && activeContent !== void 0)
    $$bindings.activeContent(activeContent);
  if ($$props.arrow === void 0 && $$bindings.arrow && arrow !== void 0)
    $$bindings.arrow(arrow);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.trigger === void 0 && $$bindings.trigger && trigger !== void 0)
    $$bindings.trigger(trigger);
  if ($$props.triggeredBy === void 0 && $$bindings.triggeredBy && triggeredBy !== void 0)
    $$bindings.triggeredBy(triggeredBy);
  if ($$props.reference === void 0 && $$bindings.reference && reference !== void 0)
    $$bindings.reference(reference);
  if ($$props.strategy === void 0 && $$bindings.strategy && strategy !== void 0)
    $$bindings.strategy(strategy);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.yOnly === void 0 && $$bindings.yOnly && yOnly !== void 0)
    $$bindings.yOnly(yOnly);
  if ($$props.middlewares === void 0 && $$bindings.middlewares && middlewares !== void 0)
    $$bindings.middlewares(middlewares);
  placement && (referenceEl = referenceEl);
  {
    dispatch("show", referenceEl, open);
  }
  middleware = [
    ...middlewares,
    dom.offset(+offset),
    arrowEl
  ];
  arrowClass = twJoin("absolute pointer-events-none block w-[10px] h-[10px] rotate-45 bg-inherit border-inherit", $$props.border && arrowSide === "bottom" && "border-b border-r", $$props.border && arrowSide === "top" && "border-t border-l ", $$props.border && arrowSide === "right" && "border-t border-r ", $$props.border && arrowSide === "left" && "border-b border-l ");
  return `${!referenceEl ? `<div${add_attribute("this", contentEl, 0)}></div>` : ``} ${open && referenceEl ? `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, { use: init }, { options: referenceEl }, { role: "tooltip" }, { tabindex: activeContent ? -1 : void 0 }, $$restProps), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``} ${arrow ? `<div${add_attribute("class", arrowClass, 0)}></div>` : ``}`;
    }
  })}` : ``} `;
});
const Dropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["activeUrl", "open", "containerClass", "headerClass", "footerClass", "activeClass"]);
  let $$slots = compute_slots(slots);
  const activeUrlStore = writable("");
  let { activeUrl = "" } = $$props;
  let { open = false } = $$props;
  let { containerClass = "divide-y z-50" } = $$props;
  let { headerClass = "py-1 overflow-hidden rounded-t-lg" } = $$props;
  let { footerClass = "py-1 overflow-hidden rounded-b-lg" } = $$props;
  let { activeClass = "text-primary-700 dark:text-primary-700 hover:text-primary-900 dark:hover:text-primary-900" } = $$props;
  let activeCls = twMerge(activeClass, $$props.classActive);
  setContext("DropdownType", { activeClass: activeCls });
  setContext("activeUrl", activeUrlStore);
  let containerCls = twMerge(containerClass, $$props.classContainer);
  let headerCls = twMerge(headerClass, $$props.classHeader);
  let ulCls = twMerge("py-1", $$props.class);
  let footerCls = twMerge(footerClass, $$props.classFooter);
  if ($$props.activeUrl === void 0 && $$bindings.activeUrl && activeUrl !== void 0)
    $$bindings.activeUrl(activeUrl);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.containerClass === void 0 && $$bindings.containerClass && containerClass !== void 0)
    $$bindings.containerClass(containerClass);
  if ($$props.headerClass === void 0 && $$bindings.headerClass && headerClass !== void 0)
    $$bindings.headerClass(headerClass);
  if ($$props.footerClass === void 0 && $$bindings.footerClass && footerClass !== void 0)
    $$bindings.footerClass(footerClass);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      activeUrlStore.set(activeUrl);
    }
    {
      {
        $$restProps.arrow = $$restProps.arrow ?? false;
        $$restProps.trigger = $$restProps.trigger ?? "click";
        $$restProps.placement = $$restProps.placement ?? "bottom";
        $$restProps.color = $$restProps.color ?? "dropdown";
        $$restProps.shadow = $$restProps.shadow ?? true;
        $$restProps.rounded = $$restProps.rounded ?? true;
      }
    }
    $$rendered = `${validate_component(Popper, "Popper").$$render(
      $$result,
      Object.assign({}, { activeContent: true }, $$restProps, { class: containerCls }, { open }),
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${$$slots.header ? `<div${add_attribute("class", headerCls, 0)}>${slots.header ? slots.header({}) : ``}</div>` : ``} <ul${add_attribute("class", ulCls, 0)}>${slots.default ? slots.default({}) : ``}</ul> ${$$slots.footer ? `<div${add_attribute("class", footerCls, 0)}>${slots.footer ? slots.footer({}) : ``}</div>` : ``}`;
        }
      }
    )} `;
  } while (!$$settled);
  return $$rendered;
});
const Wrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tag", "show", "use"]);
  let { tag = "div" } = $$props;
  let { show } = $$props;
  let { use = () => {
  } } = $$props;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  return `${show ? `${((tag$1) => {
    validate_dynamic_element(tag$1);
    return tag$1 ? (() => {
      validate_void_dynamic_element(tag$1);
      return `<${tag}${spread([escape_object($$restProps)], {})}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}`;
    })() : "";
  })(tag)}` : `${slots.default ? slots.default({}) : ``}`} `;
});
const DropdownItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let active;
  let liClass;
  let $$restProps = compute_rest_props($$props, ["defaultClass", "href", "activeClass"]);
  let { defaultClass = "font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600" } = $$props;
  let { href = void 0 } = $$props;
  let { activeClass = void 0 } = $$props;
  const context = getContext("DropdownType") ?? {};
  const activeUrlStore = getContext("activeUrl");
  let sidebarUrl = "";
  activeUrlStore.subscribe((value) => {
    sidebarUrl = value;
  });
  let wrap = true;
  function init(node) {
    wrap = node.parentElement?.tagName === "UL";
  }
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  active = sidebarUrl ? href === sidebarUrl : false;
  liClass = twMerge(defaultClass, href ? "block" : "w-full text-left", active && (activeClass ?? context.activeClass), $$props.class);
  return `${validate_component(Wrapper, "Wrapper").$$render($$result, { tag: "li", show: wrap, use: init }, {}, {
    default: () => {
      return `${((tag) => {
        validate_dynamic_element(tag);
        return tag ? (() => {
          validate_void_dynamic_element(tag);
          return `<${href ? "a" : "button"}${spread(
            [
              { href: escape_attribute_value(href) },
              {
                type: escape_attribute_value(href ? void 0 : "button")
              },
              {
                role: escape_attribute_value(href ? "link" : "button")
              },
              escape_object($$restProps),
              { class: escape_attribute_value(liClass) }
            ],
            {}
          )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}`;
        })() : "";
      })(href ? "a" : "button")}`;
    }
  })} `;
});
const Dropzone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["value", "files", "defaultClass"]);
  let { value = "" } = $$props;
  let { files = void 0 } = $$props;
  let { defaultClass = "flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600" } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.files === void 0 && $$bindings.files && files !== void 0)
    $$bindings.files(files);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  return `<button${add_attribute("class", twMerge(defaultClass, $$props.class), 0)} type="button"><label class="flex flex-col items-center" tabindex="0">${slots.default ? slots.default({}) : ``} <input${spread([escape_object($$restProps), { type: "file" }, { class: "hidden" }], {})}></label></button> `;
});
function clampSize(s) {
  return s && s === "xs" ? "sm" : s === "xl" ? "lg" : s;
}
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _size;
  let $$restProps = compute_rest_props($$props, ["type", "value", "size", "defaultClass", "color", "floatClass"]);
  let $$slots = compute_slots(slots);
  let { type = "text" } = $$props;
  let { value = void 0 } = $$props;
  let { size = void 0 } = $$props;
  let { defaultClass = "block w-full disabled:cursor-not-allowed disabled:opacity-50" } = $$props;
  let { color = "base" } = $$props;
  let { floatClass = "flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400" } = $$props;
  const borderClasses = {
    base: "border-gray-300 dark:border-gray-600",
    tinted: "border-gray-300 dark:border-gray-500",
    green: "border-green-500 dark:border-green-400",
    red: "border-red-500 dark:border-red-400"
  };
  const ringClasses = {
    base: "focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500",
    green: "focus:ring-green-500 focus:border-green-500 dark:focus:border-green-500 dark:focus:ring-green-500",
    red: "focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500"
  };
  const colorClasses = {
    base: "bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400",
    tinted: "bg-gray-50 text-gray-900 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400",
    green: "bg-green-50 text-green-900 placeholder-green-700 dark:text-green-400 dark:placeholder-green-500 dark:bg-gray-700",
    red: "bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700"
  };
  let background = getContext("background");
  let group = getContext("group");
  const textSizes = {
    sm: "sm:text-xs",
    md: "text-sm",
    lg: "sm:text-base"
  };
  const leftPadding = { sm: "pl-9", md: "pl-10", lg: "pl-11" };
  const rightPadding = { sm: "pr-9", md: "pr-10", lg: "pr-11" };
  const inputPadding = { sm: "p-2", md: "p-2.5", lg: "p-3" };
  let inputClass;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.floatClass === void 0 && $$bindings.floatClass && floatClass !== void 0)
    $$bindings.floatClass(floatClass);
  _size = size || clampSize(group?.size) || "md";
  {
    {
      const _color = color === "base" && background ? "tinted" : color;
      inputClass = twMerge([
        defaultClass,
        $$slots.left && leftPadding[_size] || $$slots.right && rightPadding[_size] || inputPadding[_size],
        ringClasses[color],
        colorClasses[_color],
        borderClasses[_color],
        textSizes[_size],
        group || "rounded-lg",
        group && "first:rounded-l-lg last:rounded-r-lg",
        group && "border-l-0 first:border-l last:border-r",
        $$props.class
      ]);
    }
  }
  return `${validate_component(Wrapper, "Wrapper").$$render(
    $$result,
    {
      class: "relative w-full",
      show: $$slots.left || $$slots.right
    },
    {},
    {
      default: () => {
        return `${$$slots.left ? `<div class="${escape(twMerge(floatClass, $$props.classLeft), true) + " left-0 pl-2.5 pointer-events-none"}">${slots.left ? slots.left({}) : ``}</div>` : ``} ${slots.default ? slots.default({
          props: { ...$$restProps, class: inputClass }
        }) : ` <input${spread(
          [
            escape_object($$restProps),
            escape_object({ type }),
            {
              class: escape_attribute_value(inputClass)
            }
          ],
          {}
        )}${add_attribute("value", value, 0)}> `} ${$$slots.right ? `<div class="${escape(twMerge(floatClass, $$props.classRight), true) + " right-0 pr-2.5"}">${slots.right ? slots.right({}) : ``}</div>` : ``}`;
      }
    }
  )} `;
});
const InputAddon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _size;
  let divClass;
  let $$restProps = compute_rest_props($$props, ["size"]);
  let { size = void 0 } = $$props;
  let background = getContext("background");
  let group = getContext("group");
  const borderClasses = {
    base: "border-gray-300 dark:border-gray-600",
    tinted: "border-gray-300 dark:border-gray-500"
  };
  const darkBgClasses = {
    base: "dark:bg-gray-600 dark:text-gray-400",
    tinted: "dark:bg-gray-500 dark:text-gray-300"
  };
  const divider = {
    base: "dark:border-r-gray-700 dark:last:border-r-gray-600",
    tinted: "dark:border-r-gray-600 dark:last:border-r-gray-500"
  };
  const textSizes = {
    sm: "sm:text-xs",
    md: "text-sm",
    lg: "sm:text-base"
  };
  const prefixPadding = { sm: "px-2", md: "px-3", lg: "px-4" };
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  _size = size || clampSize(group?.size) || "md";
  divClass = twMerge(
    textSizes[_size],
    prefixPadding[_size],
    background ? borderClasses["tinted"] : borderClasses["base"],
    "text-gray-500 bg-gray-200",
    background ? darkBgClasses.tinted : darkBgClasses.base,
    background ? divider.tinted : divider.base,
    "inline-flex items-center border-t border-b first:border-l border-r",
    "first:rounded-l-lg last:rounded-r-lg",
    $$props.class
  );
  return `<div${spread([escape_object($$restProps), { class: escape_attribute_value(divClass) }], {})}>${slots.default ? slots.default({}) : ``}</div> `;
});
const RadioButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["group", "value", "inline", "pill", "outline", "size", "color", "shadow"]);
  let { group = "" } = $$props;
  let { value = "" } = $$props;
  let { inline = true } = $$props;
  let { pill = false } = $$props;
  let { outline = false } = $$props;
  let { size = void 0 } = $$props;
  let { color = void 0 } = $$props;
  let { shadow = false } = $$props;
  let buttonClass;
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.pill === void 0 && $$bindings.pill && pill !== void 0)
    $$bindings.pill(pill);
  if ($$props.outline === void 0 && $$bindings.outline && outline !== void 0)
    $$bindings.outline(outline);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  buttonClass = twMerge(inline ? "inline-flex" : "flex", $$props.class);
  return `${validate_component(Button, "Button").$$render(
    $$result,
    {
      tag: "label",
      checked: value === group,
      pill,
      outline,
      size,
      color,
      shadow,
      class: buttonClass
    },
    {},
    {
      default: () => {
        return `<input${spread(
          [
            { type: "radio" },
            { value: escape_attribute_value(value) },
            escape_object($$restProps),
            { class: "sr-only" }
          ],
          {}
        )}${value === group ? add_attribute("checked", true, 1) : ""}> ${slots.default ? slots.default({}) : ``}`;
      }
    }
  )} `;
});
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "open",
    "title",
    "size",
    "placement",
    "autoclose",
    "dismissable",
    "backdropClass",
    "defaultClass",
    "outsideclose",
    "dialogClass"
  ]);
  let $$slots = compute_slots(slots);
  let { open = false } = $$props;
  let { title = "" } = $$props;
  let { size = "md" } = $$props;
  let { placement = "center" } = $$props;
  let { autoclose = false } = $$props;
  let { dismissable = true } = $$props;
  let { backdropClass = "fixed inset-0 z-40 bg-gray-900 bg-opacity-50 dark:bg-opacity-80" } = $$props;
  let { defaultClass = "relative flex flex-col mx-auto" } = $$props;
  let { outsideclose = false } = $$props;
  let { dialogClass = "fixed top-0 left-0 right-0 h-modal md:inset-0 md:h-full z-50 w-full p-4 flex" } = $$props;
  const dispatch = createEventDispatcher$1();
  const getPlacementClasses = () => {
    switch (placement) {
      case "top-left":
        return ["justify-start", "items-start"];
      case "top-center":
        return ["justify-center", "items-start"];
      case "top-right":
        return ["justify-end", "items-start"];
      case "center-left":
        return ["justify-start", "items-center"];
      case "center":
        return ["justify-center", "items-center"];
      case "center-right":
        return ["justify-end", "items-center"];
      case "bottom-left":
        return ["justify-start", "items-end"];
      case "bottom-center":
        return ["justify-center", "items-end"];
      case "bottom-right":
        return ["justify-end", "items-end"];
      default:
        return ["justify-center", "items-center"];
    }
  };
  const sizes = {
    xs: "max-w-md",
    sm: "max-w-lg",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-7xl"
  };
  let frameClass;
  let backdropCls = twMerge(backdropClass, $$props.classBackdrop);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.autoclose === void 0 && $$bindings.autoclose && autoclose !== void 0)
    $$bindings.autoclose(autoclose);
  if ($$props.dismissable === void 0 && $$bindings.dismissable && dismissable !== void 0)
    $$bindings.dismissable(dismissable);
  if ($$props.backdropClass === void 0 && $$bindings.backdropClass && backdropClass !== void 0)
    $$bindings.backdropClass(backdropClass);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.outsideclose === void 0 && $$bindings.outsideclose && outsideclose !== void 0)
    $$bindings.outsideclose(outsideclose);
  if ($$props.dialogClass === void 0 && $$bindings.dialogClass && dialogClass !== void 0)
    $$bindings.dialogClass(dialogClass);
  {
    dispatch(open ? "open" : "close");
  }
  frameClass = twMerge(defaultClass, "w-full divide-y", $$props.class);
  return `${open ? ` <div${add_attribute("class", backdropCls, 0)}></div>   <div${add_attribute("class", twMerge(dialogClass, $$props.classDialog, ...getPlacementClasses()), 0)} tabindex="-1" aria-modal="true" role="dialog"><div class="${"flex relative " + escape(sizes[size], true) + " w-full max-h-full"}"> ${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, { rounded: true }, { shadow: true }, $$restProps, { class: frameClass }), {}, {
    default: () => {
      return ` ${$$slots.header || title ? `${validate_component(Frame, "Frame").$$render(
        $$result,
        {
          color: $$restProps.color,
          class: "flex justify-between items-center p-4 rounded-t"
        },
        {},
        {
          default: () => {
            return `${slots.header ? slots.header({}) : ` <h3 class="${"text-xl font-semibold " + escape($$restProps.color ? "" : "text-gray-900 dark:text-white", true) + " p-0"}">${escape(title)}</h3> `} ${dismissable ? `${validate_component(CloseButton, "CloseButton").$$render(
              $$result,
              {
                name: "Close modal",
                color: $$restProps.color
              },
              {},
              {}
            )}` : ``}`;
          }
        }
      )}` : `${dismissable ? `${validate_component(CloseButton, "CloseButton").$$render(
        $$result,
        {
          name: "Close modal",
          class: "absolute top-3 right-2.5",
          color: $$restProps.color
        },
        {},
        {}
      )}` : ``}`}  <div${add_attribute("class", twMerge("p-6 space-y-6 flex-1 overflow-y-auto overscroll-contain", $$props.bodyClass), 0)} role="document">${slots.default ? slots.default({}) : ``}</div>  ${$$slots.footer ? `${validate_component(Frame, "Frame").$$render(
        $$result,
        {
          color: $$restProps.color,
          class: "flex items-center p-6 space-x-2 rounded-b"
        },
        {},
        {
          default: () => {
            return `${slots.footer ? slots.footer({}) : ``}`;
          }
        }
      )}` : ``}`;
    }
  })}</div></div>` : ``} `;
});
const Popover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["title", "defaultClass"]);
  let $$slots = compute_slots(slots);
  let { title = "" } = $$props;
  let { defaultClass = "py-2 px-3" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  return `${validate_component(Popper, "Popper").$$render(
    $$result,
    Object.assign({}, { activeContent: true }, { border: true }, { shadow: true }, { rounded: true }, $$restProps, {
      class: "dark:!border-gray-600 " + $$props.class
    }),
    {},
    {
      default: () => {
        return `${$$slots.title || title ? `<div class="py-2 px-3 bg-gray-100 rounded-t-md border-b border-gray-200 dark:border-gray-600 dark:bg-gray-700">${slots.title ? slots.title({}) : ` <h3 class="font-semibold text-gray-900 dark:text-white">${escape(title)}</h3> `}</div>` : ``} <div${add_attribute("class", defaultClass, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
      }
    }
  )} `;
});
class TranslateInput {
  constructor(value) {
    this._value = value;
  }
  /**
   *
   * @return {string | undefined}
   */
  get value() {
    return this._value;
  }
  /**
   *
   * @param {string | undefined} value
   */
  set value(value) {
    this._value = value;
  }
}
const DropdownItemLangauge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher$1();
  let { labelInSourceLanguage = "" } = $$props;
  let { labelInEnglish = "" } = $$props;
  if ($$props.labelInSourceLanguage === void 0 && $$bindings.labelInSourceLanguage && labelInSourceLanguage !== void 0)
    $$bindings.labelInSourceLanguage(labelInSourceLanguage);
  if ($$props.labelInEnglish === void 0 && $$bindings.labelInEnglish && labelInEnglish !== void 0)
    $$bindings.labelInEnglish(labelInEnglish);
  return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="flex flex-row"><div class="w-20 border-r-2 border-r-gray-500 mr-3">${escape(labelInSourceLanguage)}</div> <div>${escape(labelInEnglish)}</div></div>`;
    }
  })}`;
});
const LanguageDropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { selectedLanguage = "" } = $$props;
  let { withAutomatic = false } = $$props;
  if ($$props.selectedLanguage === void 0 && $$bindings.selectedLanguage && selectedLanguage !== void 0)
    $$bindings.selectedLanguage(selectedLanguage);
  if ($$props.withAutomatic === void 0 && $$bindings.withAutomatic && withAutomatic !== void 0)
    $$bindings.withAutomatic(withAutomatic);
  return `${validate_component(Dropdown, "Dropdown").$$render(
    $$result,
    {
      class: "p-2 space-y-1 text-sm",
      open: false
    },
    {},
    {
      header: () => {
        return `<div slot="header" class="px-4 py-2"><span class="block text-sm text-gray-900 dark:text-white" data-svelte-h="svelte-h0n45t">Select Uploading Language</span></div>`;
      },
      default: () => {
        return `${withAutomatic ? `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
          default: () => {
            return `Automatic`;
          }
        })}` : ``} ${validate_component(DropdownItemLangauge, "DropdownItemLangauge").$$render(
          $$result,
          {
            labelInSourceLanguage: "English",
            labelInEnglish: "English"
          },
          {},
          {}
        )} ${validate_component(DropdownItemLangauge, "DropdownItemLangauge").$$render(
          $$result,
          {
            labelInSourceLanguage: "日本語",
            labelInEnglish: "Japanese"
          },
          {},
          {}
        )} ${validate_component(DropdownItemLangauge, "DropdownItemLangauge").$$render(
          $$result,
          {
            labelInSourceLanguage: "한국어",
            labelInEnglish: "Korean"
          },
          {},
          {}
        )} ${validate_component(DropdownItemLangauge, "DropdownItemLangauge").$$render(
          $$result,
          {
            labelInSourceLanguage: "Tagalog",
            labelInEnglish: "Tagalog"
          },
          {},
          {}
        )} ${validate_component(DropdownItemLangauge, "DropdownItemLangauge").$$render(
          $$result,
          {
            labelInSourceLanguage: "简体中文",
            labelInEnglish: "Chinese (Simplified)"
          },
          {},
          {}
        )} ${validate_component(DropdownItemLangauge, "DropdownItemLangauge").$$render(
          $$result,
          {
            labelInSourceLanguage: "繁體中文",
            labelInEnglish: "Chinese (Traditional)"
          },
          {},
          {}
        )}`;
      }
    }
  )}`;
});
function getDataFromJson(file, onLoad) {
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function(evt) {
    let object = JSON.parse(evt.target.result);
    let purpose;
    if (object["purpose"]) {
      purpose = object["purpose"];
    }
    let list;
    if (object["list"]) {
      list = object["list"];
    }
    if (onLoad) {
      onLoad(purpose, list);
    }
  };
}
function getDataFromXML(file, onLoad) {
  const getOneElementByTagIfExist = function(doc, tag) {
    const elements = doc.getElementsByTagName(tag);
    if (elements && elements.length > 0) {
      return elements[0];
    }
  };
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function(evt) {
    const xmlStr = evt.target.result;
    const parser = new DOMParser();
    const doc = parser.parseFromString(xmlStr, "application/xml");
    const mainElement = getOneElementByTagIfExist(doc, "main");
    let purpose;
    let list;
    if (mainElement) {
      const purposeElement = getOneElementByTagIfExist(mainElement, "purpose");
      if (purposeElement) {
        purpose = purposeElement.getInnerHTML();
      }
      const listElement = getOneElementByTagIfExist(mainElement, "list");
      if (listElement) {
        list = [];
        const itemElements = listElement.getElementsByTagName("item");
        for (let itemElement of itemElements) {
          list.push(itemElement.getInnerHTML());
        }
      }
    }
    onLoad(purpose, list);
  };
}
function getDataFromCsv(file, onLoad) {
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function(evt) {
    let csvStr = evt.target.result;
    let rows = csvStr.split("\n");
    if (rows[0] === "list") {
      onLoad("", rows.slice(1, rows.length - 1));
    }
  };
}
function getSourceLanguageFromCode(code) {
  switch (code) {
    case "en": {
      return "English";
    }
    case "ja": {
      return "Japanese";
    }
    case "ko": {
      return "Korean";
    }
    case "tl": {
      return "Tagalog";
    }
    case "cn-chs": {
      return "Chinese (Simplified)";
    }
    case "cn-cht": {
      return "Chinese (Traditional)";
    }
    default: {
      return "<Automatic>";
    }
  }
}
function getTargetLanguageFromCode(code) {
  switch (code) {
    case "en": {
      return "English";
    }
    case "ja": {
      return "Japanese";
    }
    case "ko": {
      return "Korean";
    }
    case "tl": {
      return "Tagalog";
    }
    case "cn-chs": {
      return "Chinese (Simplified)";
    }
    case "cn-cht": {
      return "Chinese (Traditional)";
    }
  }
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selectedLanguageCodeFrom = "";
  let selectedLanguageCodeTo = "";
  let translateInputs = [];
  let translatePurpose = "";
  let defaultModal = false;
  for (let i = 0; i < 10; i++) {
    translateInputs.push(new TranslateInput(""));
  }
  let value = [];
  const onLoadDataFromFile = (purpose, list) => {
    translatePurpose = purpose;
    translateInputs = [];
    for (let i = 0; i < list.length && translateInputs.length < 200; i++) {
      if (translateInputs.length <= i) {
        for (let j = 0; j < 10; j++) {
          translateInputs.push("");
        }
      }
      translateInputs[i] = { value: list[i] };
    }
    translateInputs = translateInputs;
  };
  const showFiles = (fileList) => {
    if (fileList.length === 1) {
      let fileName = fileList[0].name;
      if (fileName.endsWith(".json")) {
        getDataFromJson(fileList[0].file, onLoadDataFromFile);
      } else if (fileName.endsWith(".xml")) {
        getDataFromXML(fileList[0].file, onLoadDataFromFile);
      } else if (fileName.endsWith(".csv")) {
        getDataFromCsv(fileList[0].file, onLoadDataFromFile);
      }
      return fileList[0].name;
    } else {
      return [];
    }
  };
  let downloadTypes = "csv";
  let exampleDataMap = /* @__PURE__ */ new Map();
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="flex flex-col"><div class="flex flex-row p-4">${validate_component(Breadcrumb, "Breadcrumb").$$render(
      $$result,
      {
        "aria-label": "Solid background breadcrumb example",
        solid: true
      },
      {},
      {
        default: () => {
          return `${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/app/translate" }, {}, {
            default: () => {
              return `Translate`;
            }
          })}`;
        }
      }
    )}</div> <div class="grid grid-cols-5 px-4 gap-1">${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, { class: "col-span-3 w-full h-10" }, {}, {
      default: () => {
        return `${validate_component(InputAddon, "InputAddon").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="w-20" data-svelte-h="svelte-ngpj8s">Languages</div>`;
          }
        })} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            floatClass: "w-[12rem]",
            value: getSourceLanguageFromCode(selectedLanguageCodeFrom)
          },
          {},
          {}
        )} ${validate_component(LanguageDropdown, "LanguageDropdown").$$render(
          $$result,
          {
            withAutomatic: true,
            selectedLanguage: selectedLanguageCodeFrom
          },
          {
            selectedLanguage: ($$value) => {
              selectedLanguageCodeFrom = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(InputAddon, "InputAddon").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="w-5 text-center" data-svelte-h="svelte-vrkbhx">&gt;</div>`;
          }
        })} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            floatClass: "w-[12rem]",
            value: getTargetLanguageFromCode(selectedLanguageCodeTo)
          },
          {},
          {}
        )} ${validate_component(LanguageDropdown, "LanguageDropdown").$$render(
          $$result,
          { selectedLanguage: selectedLanguageCodeTo },
          {
            selectedLanguage: ($$value) => {
              selectedLanguageCodeTo = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `Translate`;
          }
        })} ${validate_component(Modal, "Modal").$$render(
          $$result,
          {
            title: "Privacy Policy",
            autoclose: true,
            open: defaultModal
          },
          {
            open: ($$value) => {
              defaultModal = $$value;
              $$settled = false;
            }
          },
          {
            footer: () => {
              return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
                default: () => {
                  return `I accept`;
                }
              })} ${validate_component(Button, "Button").$$render($$result, { color: "alternative" }, {}, {
                default: () => {
                  return `Decline`;
                }
              })} `;
            },
            default: () => {
              return `<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400" data-svelte-h="svelte-d0lsh5">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May
                    25 and is meant to ensure a common set of data rights in the European Union. It requires
                    organizations to notify users as soon as possible of high-risk data breaches that could
                    personally affect them.</p>`;
            }
          }
        )}`;
      }
    })} ${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, { class: "grid grid-cols-3 w-full" }, {}, {
      default: () => {
        return `${validate_component(RadioButton, "RadioButton").$$render(
          $$result,
          { value: "json", group: downloadTypes },
          {
            group: ($$value) => {
              downloadTypes = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `JSON`;
            }
          }
        )} ${validate_component(RadioButton, "RadioButton").$$render(
          $$result,
          { value: "xml", group: downloadTypes },
          {
            group: ($$value) => {
              downloadTypes = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `XML`;
            }
          }
        )} ${validate_component(RadioButton, "RadioButton").$$render(
          $$result,
          { value: "csv", group: downloadTypes },
          {
            group: ($$value) => {
              downloadTypes = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `CSV`;
            }
          }
        )}`;
      }
    })} ${validate_component(Dropzone, "Dropzone").$$render($$result, { class: "relative row-span-2 h-full" }, {}, {
      default: () => {
        return `${`${value.length === 0 ? `<p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold" data-svelte-h="svelte-3gnd3g">Click to upload</span></p> <p class="text-xs text-gray-500 dark:text-gray-400" data-svelte-h="svelte-kjs7hy">or drag and drop</p> <p class="text-xs text-gray-500 dark:text-gray-400" data-svelte-h="svelte-mw90a8">(JSON, XML or CSV)</p>` : `<p class="text-xs text-gray-500 dark:text-gray-400" data-svelte-h="svelte-1mo5pzc">Uploading...</p> <p class="text-xs text-gray-500 dark:text-gray-400"><span class="font-semibold">${escape(showFiles(value))}</span></p>`}`} <a id="b3" class="absolute w-7 h-7 right-[-0.2rem] top-[-1rem] dark:bg-gray-400 text-center rounded-2xl border-2" href="/app/guide#file_format" data-svelte-h="svelte-1i5kxhx">?</a>`;
      }
    })} ${validate_component(Popover, "Popover").$$render(
      $$result,
      {
        triggeredBy: "#b3",
        class: "w-[45rem] text-sm font-light text-gray-500 bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400",
        placement: "bottom-start",
        title: "Format Guide"
      },
      {},
      {
        default: () => {
          return `<div class="p-3 space-y-2 text-left"><div class="border-2 p-1 rounded-lg"><h3 class="font-semibold text-gray-900 dark:bg-gray-500 dark:text-white text-left px-2 rounded" data-svelte-h="svelte-1ru01ag">JSON</h3> ${validate_component(Prism, "Prism").$$render(
            $$result,
            {
              language: "js",
              source: exampleDataMap.get("json")
            },
            {},
            {}
          )}</div> <div class="border-2 p-1 rounded-lg"><h3 class="font-semibold text-gray-900 dark:bg-gray-500 dark:text-white text-left px-2 rounded" data-svelte-h="svelte-dbhiz5">XML</h3> ${validate_component(Prism, "Prism").$$render(
            $$result,
            {
              language: "xml",
              source: exampleDataMap.get("xml")
            },
            {},
            {}
          )}</div> <div class="border-2 p-1 rounded-lg"><h3 class="font-semibold text-gray-900 dark:bg-gray-500 dark:text-white text-left px-2 rounded" data-svelte-h="svelte-d3t8u8">CSV</h3> ${validate_component(Prism, "Prism").$$render(
            $$result,
            {
              language: "txt",
              source: exampleDataMap.get("csv")
            },
            {},
            {}
          )}</div> <a href="/app/guide#file_format" class="flex items-center font-medium text-primary-600 dark:text-primary-500 dark:hover:text-primary-600 hover:text-primary-700" data-svelte-h="svelte-z9twms">Read more &gt;</a></div>`;
        }
      }
    )} ${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, { class: "col-span-3 w-full h-10" }, {}, {
      default: () => {
        return `${validate_component(InputAddon, "InputAddon").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="w-20" data-svelte-h="svelte-1a06xpt">Purpose</div>`;
          }
        })} ${validate_component(Input, "Input").$$render(
          $$result,
          { value: translatePurpose },
          {
            value: ($$value) => {
              translatePurpose = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })} ${validate_component(Button, "Button").$$render($$result, { class: "w-full" }, {}, {
      default: () => {
        return `Download
            Input`;
      }
    })}</div> <div class="h-14 pt-1.5">${``}</div> <div class="flex flex-col px-4 py-2 gap-1">${each(translateInputs, (ti, i) => {
      return `${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(InputAddon, "InputAddon").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="w-10 text-right">${escape(i + 1)}</div> `;
            }
          })} ${validate_component(Input, "Input").$$render(
            $$result,
            {
              color: ti.value && ti.value.length > 2048 ? "red" : "base",
              value: ti.value
            },
            {
              value: ($$value) => {
                ti.value = $$value;
                $$settled = false;
              }
            },
            {}
          )} `;
        }
      })}`;
    })} <div class="flex flex-row justify-center py-4">${translateInputs.length < 200 ? `${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Add 10 Rows`;
      }
    })}` : `${validate_component(Button, "Button").$$render($$result, { color: "alternative" }, {}, {
      default: () => {
        return `Max 200 Rows Reached`;
      }
    })}`}</div></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
