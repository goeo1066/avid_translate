import { c as create_ssr_component, i as add_attribute, e as escape } from "./ssr.js";
import prism$1 from "prismjs";
import "prism-svelte";
import axios from "axios";
if (typeof window !== "undefined") {
  if (window.Prism)
    console.warn(
      "Prism has already been initiated. Please ensure that svelte-prism is imported first."
    );
  window.Prism = window.Prism || {};
  window.Prism.manual = true;
}
const prism = prism$1;
prism$1.highlightElement;
const globalConfig = { transform: (x) => x };
const Prism = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { language = "javascript" } = $$props;
  let { source = "" } = $$props;
  let { transform = (x) => x } = $$props;
  let element, formattedCode;
  function highlightCode() {
    const grammar = prism.languages[language];
    let body = source || element.textContent;
    body = globalConfig.transform(body);
    body = transform(body);
    formattedCode = language === "none" ? body : prism.highlight(body, grammar, language);
  }
  if ($$props.language === void 0 && $$bindings.language && language !== void 0)
    $$bindings.language(language);
  if ($$props.source === void 0 && $$bindings.source && source !== void 0)
    $$bindings.source(source);
  if ($$props.transform === void 0 && $$bindings.transform && transform !== void 0)
    $$bindings.transform(transform);
  $$props && (source || element) && highlightCode();
  return `<code style="display:none"${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</code> <pre class="${"language-" + escape(language, true)}" command-line data-output="2-17"><code class="${"language-" + escape(language, true)}">${language === "none" ? `${escape(formattedCode)}` : `<!-- HTML_TAG_START -->${formattedCode}<!-- HTML_TAG_END -->`}</code></pre>`;
});
class Http {
  constructor() {
    this._instance = axios.create({
      baseURL: "http://localhost:8080"
    });
  }
  /**
   *
   * @param {string} endpoint
   * @param {any} data
   * @return {Promise<axios.AxiosResponse<any>>}
   * @public
   */
  async post(endpoint, data) {
    return await this._instance.post(endpoint, data, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  /**
   *
   * @param {string} endpoint
   * @return {Promise<axios.AxiosResponse<any>>}
   * @public
   */
  async get(endpoint) {
    return await this._instance.get(endpoint);
  }
}
new Http();
class Assets {
  constructor() {
    this._instance = axios.create({
      baseURL: "http://localhost:5173"
    });
  }
  /**
   *
   * @param {string} endpoint
   * @param {any} data
   * @return {Promise<axios.AxiosResponse<any>>}
   * @public
   */
  async post(endpoint, data) {
    return await this._instance.post(endpoint, data, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  /**
   *
   * @param {string} endpoint
   * @return {Promise<axios.AxiosResponse<any>>}
   * @public
   */
  async get(endpoint) {
    return await this._instance.get(endpoint);
  }
}
new Assets();
export {
  Prism as P
};
