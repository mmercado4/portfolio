/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro } from '../chunks/astro/server_DnMwOCNv.mjs';
import 'kleur/colors';
import { g as getLangFromUrl, $ as $$Base, u as useTranslations, a as $$Common } from '../chunks/Common_BXvL2fi0.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": t("Hello!") }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Common", $$Common, {})} ` })}`;
}, "/Users/user/Documents/otros/portfolio/src/pages/es/index.astro", void 0);

const $$file = "/Users/user/Documents/otros/portfolio/src/pages/es/index.astro";
const $$url = "/es";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
