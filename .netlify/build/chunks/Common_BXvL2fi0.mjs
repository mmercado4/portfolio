import { c as createComponent, r as renderTemplate, a as addAttribute, e as renderHead, f as renderSlot, b as createAstro, m as maybeRenderHead, d as renderComponent, g as renderUniqueStylesheet, h as renderScriptElement, i as createHeadAndContent, u as unescapeHTML } from './astro/server_DnMwOCNv.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { jsxs, jsx } from 'react/jsx-runtime';
import { useEffect, useState } from 'react';
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { removeBase, isRemotePath, prependForwardSlash } from '@astrojs/internal-helpers/path';
import { V as VALID_INPUT_FORMATS, A as AstroError, U as UnknownContentCollectionError } from './astro/assets-service_Nc9X4-v7.mjs';
import * as devalue from 'devalue';

const $$Astro$4 = createAstro();
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Base;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/icons/favicon.svg"><link rel="stylesheet" href="../../node_modules/flag-icons/css/flag-icons.min.css"><link rel="stylesheet" href="/styles/index.css"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body style="display: none;" class="font-sans min-h-screen dark:bg-dark dark:text-light bg-light text-dark transition-colors duration-300 font-outfit"> ${renderSlot($$result, $$slots["default"])}  </body></html>`;
}, "/Users/user/Documents/otros/portfolio/src/layouts/Base.astro", void 0);

const defaultLang = "en";
const ui = {
  en: {
    "Hello!": "Hello",
    "Hi! I'm Miguel": "Hi! I'm Miguel",
    "{years} years experienced Full Stack Developer": "{years} years experienced Full Stack Developer",
    "Addicted to software development and building new things.": "Addicted to software development and building new things."
  },
  es: {
    "Hello!": "Hola",
    "Hi! I'm Miguel": "¡Hola! Soy Miguel",
    "{years} years experienced Full Stack Developer": "Desarrollador Full Stack con {years} años de experiencia",
    "Addicted to software development and building new things.": "Adicto al desarrollo de software y a crear cosas nuevas."
  }
};

function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang;
  return defaultLang;
}
function useTranslations(lang) {
  return function t(key, injects = null) {
    let text = ui[lang][key] || ui[defaultLang][key] || key;
    if (injects) {
      for (const [key2, value] of Object.entries(injects)) {
        text = text.replace(`{${key2}}`, value.toString());
      }
    }
    return text;
  };
}
console.log();

const $$Astro$3 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Hero;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const getYearsOfExperience = () => {
    const startDate = new Date(2021, 1, 1);
    const currentDate = /* @__PURE__ */ new Date();
    const diffInYears = (currentDate.getTime() - startDate.getTime()) / (1e3 * 60 * 60 * 24 * 365.25);
    return Math.floor(diffInYears);
  };
  const yearsOfExperience = getYearsOfExperience();
  return renderTemplate`${maybeRenderHead()}<div id="hero" class="blur-section flex items-center gap-5 sm:gap-7 mt-12 max-w-3xl text-center sm:text-left mb-5"${addAttribute({ "--blur-delay": "0.1s" }, "style")}> <div class="rounded-full flex-shrink-0 bg-green-400 w-24 h-24 sm:w-32 sm:h-32 flex justify-center overflow-hidden"> <img src="/images/miguel_avatar.png" class="w-40 max-w-none translate-x-1 translate-y-1 rotate-12" alt="Miguel Mercado"> </div> <div> <div class="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4"> <h1 class="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tigh"> ${t("Hi! I'm Miguel")} </h1> <img src="/gifs/wave.gif" class="sm:w-14 w-8 max-w-none" alt="wave"> </div> <h2 class="text-lg sm:text-xl text-left tracking-wide"> <span>${t("{years} years experienced Full Stack Developer", { years: yearsOfExperience })}.</span> <span>${t("Addicted to software development and building new things.")}</span> </h2> </div> </div>`;
}, "/Users/user/Documents/otros/portfolio/src/components/Hero.astro", void 0);

const useMount = (callback) => {
  useEffect(callback, []);
};

const isValidJson = (value) => {
  try {
    JSON.parse(value);
    return true;
  } catch (err) {
    return false;
  }
};

const useLocalStorage = (keyName, defaultValue = null) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        if (isValidJson(value)) {
          return JSON.parse(value);
        } else {
          return value;
        }
      } else {
        let value2 = defaultValue;
        if (typeof value2 !== "string") {
          value2 = JSON.stringify(value2);
        }
        window.localStorage.setItem(keyName, value2);
        return defaultValue;
      }
    } catch (err) {
      console.error(err);
      return defaultValue;
    }
  });
  const setValue = (newValue) => {
    try {
      let value = newValue;
      if (typeof value !== "string") {
        value = JSON.stringify(value);
      }
      window.localStorage.setItem(keyName, value);
    } catch (err) {
      console.error(err);
    }
    setStoredValue(newValue);
  };
  return [storedValue, setValue];
};

const useTheme = () => {
  const [localTheme, setLocalTheme] = useLocalStorage("theme", "dark");
  const [theme, setTheme] = useState(null);
  useMount(() => {
    if (localTheme && localTheme !== theme) {
      setTheme(localTheme);
    }
  });
  useEffect(() => {
    if (theme) {
      changeTheme(theme);
      if (theme !== localTheme) setLocalTheme(theme);
    }
  }, [theme]);
  const changeTheme = (theme2) => {
    const html = document.querySelector("html");
    const isDarkTheme = theme2 === "dark";
    if (html) {
      isDarkTheme ? html.classList.add("dark") : html.classList.remove("dark");
    }
  };
  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light");
  };
  return { theme, toggleTheme };
};

const moonIcon = new Proxy({"src":"/_astro/moon.-koWN4jq.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/user/Documents/otros/portfolio/public/icons/moon.svg";
							}
							
							return target[name];
						}
					});

const sunIcon = new Proxy({"src":"/_astro/sun.CPDd2jn7.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/user/Documents/otros/portfolio/public/icons/sun.svg";
							}
							
							return target[name];
						}
					});

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkTheme = theme === "dark";
  const sliderTrackStyles = [
    "absolute",
    "top-0",
    "left-0",
    "rounded-full",
    "cursor-pointer",
    "h-full",
    "w-full",
    "flex",
    "items-center",
    isDarkTheme ? "bg-dark" : "bg-gray-100",
    "border",
    "border-input-border"
  ];
  const sliderThumbStyles = [
    "h-6",
    "w-6",
    "rounded-full",
    "absolute",
    "top-1/2",
    "-translate-y-1/2",
    "left-0.5",
    "transition-all",
    "duration-400",
    isDarkTheme ? "translate-x-[26px]" : "",
    isDarkTheme ? "bg-black" : "bg-white",
    "flex",
    "items-center",
    "justify-center"
  ];
  if (!theme) return null;
  return /* @__PURE__ */ jsxs("label", { className: "inline-block h-7 w-14 relative", children: [
    /* @__PURE__ */ jsx("input", { type: "checkbox", id: "switch", className: "h-0 w-0 opacity-0 peer" }),
    /* @__PURE__ */ jsx("div", { onClick: toggleTheme, className: `${sliderTrackStyles.join(" ")}`, children: /* @__PURE__ */ jsx("div", { className: sliderThumbStyles.join(" "), children: /* @__PURE__ */ jsx(
      "img",
      {
        src: theme === "dark" ? moonIcon.src : sunIcon.src,
        className: "w-4 h-4",
        alt: "theme-mode-icon"
      }
    ) }) })
  ] });
};

const $$Astro$2 = createAstro();
const $$LanguagePicker = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LanguagePicker;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${maybeRenderHead()}<div class="w-7 h-7 flex items-center justify-center overflow-hidden rounded-full border border-transparent"> ${lang === "en" ? renderTemplate`<a href="/es" class="fi fi-es rounded-sm scale-[2]"></a>` : renderTemplate`<a href="/" class="fi fi-us rounded-sm scale-[2]"></a>`} </div>`;
}, "/Users/user/Documents/otros/portfolio/src/components/LanguagePicker.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const toggleButtonStyles = ["h-2", "w-2", "rotate-45", "border-b-2", "border-r-2", "border-dark"];
  return renderTemplate`${maybeRenderHead()}<nav class="fixed top-0 left-1/2 -translate-x-1/2 -translate-y-14 hover:translate-y-0 transition-all z-10 w-full sm:w-auto"> <div class="flex items-center gap-4 justify-center h-14 dark:bg-dark bg-light"> <div id="nav-about" class="nav-btn cursor-pointer px-2 py-1 border border-transparent hover:border-white rounded-full transition-all">
About
</div> <div id="nav-experience" class="nav-btn cursor-pointer">Experience</div> <div id="nav-education" class="nav-btn cursor-pointer">Education</div> <div id="nav-projects" class="nav-btn cursor-pointer">Projects</div> <div id="nav-footer" class="nav-btn cursor-pointer">Footer</div> </div> <div${addAttribute(`w-full h-8 flex items-center justify-center`, "class")}> <div${addAttribute(`dark:border-white ${toggleButtonStyles.join(" ")}`, "class")}></div> </div> </nav> `;
}, "/Users/user/Documents/otros/portfolio/src/components/Nav.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="relative mx-auto flex justify-end gap-4 mb-6"> ${renderComponent($$result, "Nav", $$Nav, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/user/Documents/otros/portfolio/src/components/Nav.astro", "client:component-export": "default" })} ${renderComponent($$result, "ThemeToggle", ThemeToggle, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/ThemeToggle.tsx", "client:component-export": "default" })} ${renderComponent($$result, "LanguagePicker", $$LanguagePicker, {})} </header>`;
}, "/Users/user/Documents/otros/portfolio/src/components/Header.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mb-8 w-full blur-section" id="about"${addAttribute({ "--blur-delay": "0.3s" }, "style")}> <div class="text-lg font-bold">About me</div> <div class="text-grey-secondary dark:text-light-grey text-sm">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus elit facilisis est venenatis
    ultricies. In non elit pellentesque sem tempor tempus sit amet a lorem. Integer consequat, ex vitae
    eleifend semper, nisi est lacinia tellus, quis auctor est leo vel arcu. Maecenas accumsan nisi sit amet
    dui fringilla ullamcorper vulputate eu nulla. Nullam in egestas eros. Praesent fermentum tellus ut
    ultricies venenatis. Aliquam fermentum ultricies sapien, vitae pulvinar erat auctor non. Donec dictum
    lectus vitae ligula feugiat fringilla.
</div> </div>`;
}, "/Users/user/Documents/otros/portfolio/src/components/About.astro", void 0);

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1);
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class DataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BcEe_9wP.mjs');
      if (data.default instanceof Map) {
        return DataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return DataStore.fromMap(map);
    } catch {
    }
    return new DataStore();
  }
  static async fromMap(data) {
    const store = new DataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = DataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": undefined, "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        const entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/education/en/neoland.md": () => import('./neoland_sNGakrOO.mjs'),"/src/content/education/en/scrum.md": () => import('./scrum_C7cYWaBK.mjs'),"/src/content/education/en/uem.md": () => import('./uem_Bo6YPMNk.mjs'),"/src/content/education/en/upm.md": () => import('./upm_B6OxNCOt.mjs'),"/src/content/education/es/neoland.md": () => import('./neoland_DBEcLkzV.mjs'),"/src/content/education/es/scrum.md": () => import('./scrum_BHTM7_Rm.mjs'),"/src/content/education/es/uem.md": () => import('./uem_CCSIhF-4.mjs'),"/src/content/education/es/upm.md": () => import('./upm_BKCTqMKq.mjs'),"/src/content/experience/en/accom.md": () => import('./accom_Bzy6ieEl.mjs'),"/src/content/experience/en/eqa_dev.md": () => import('./eqa_dev_BBOxa43Y.mjs'),"/src/content/experience/en/eqa_pm.md": () => import('./eqa_pm_caOoCY-8.mjs'),"/src/content/experience/en/nailted.md": () => import('./nailted_8n-sCqT9.mjs'),"/src/content/experience/es/accom.md": () => import('./accom_Cl6PNrJy.mjs'),"/src/content/experience/es/eqa_dev.md": () => import('./eqa_dev_ZJJ3z-wn.mjs'),"/src/content/experience/es/eqa_pm.md": () => import('./eqa_pm_DlooWUm0.mjs'),"/src/content/experience/es/nailted.md": () => import('./nailted_C0BzPw1X.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"education":{"type":"content","entries":{"en/scrum":"/src/content/education/en/scrum.md","en/neoland":"/src/content/education/en/neoland.md","en/uem":"/src/content/education/en/uem.md","en/upm":"/src/content/education/en/upm.md","es/neoland":"/src/content/education/es/neoland.md","es/scrum":"/src/content/education/es/scrum.md","es/upm":"/src/content/education/es/upm.md","es/uem":"/src/content/education/es/uem.md"}},"experience":{"type":"content","entries":{"es/eqa_dev":"/src/content/experience/es/eqa_dev.md","es/accom":"/src/content/experience/es/accom.md","es/eqa_pm":"/src/content/experience/es/eqa_pm.md","es/nailted":"/src/content/experience/es/nailted.md","en/accom":"/src/content/experience/en/accom.md","en/eqa_pm":"/src/content/experience/en/eqa_pm.md","en/eqa_dev":"/src/content/experience/en/eqa_dev.md","en/nailted":"/src/content/experience/en/nailted.md"}}};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/education/en/neoland.md": () => import('./neoland_Bd3s9-nc.mjs'),"/src/content/education/en/scrum.md": () => import('./scrum_DW8P_VuZ.mjs'),"/src/content/education/en/uem.md": () => import('./uem_D7Kq0s2s.mjs'),"/src/content/education/en/upm.md": () => import('./upm_Bus76XTF.mjs'),"/src/content/education/es/neoland.md": () => import('./neoland_CQe9uTnR.mjs'),"/src/content/education/es/scrum.md": () => import('./scrum_CENNQmiJ.mjs'),"/src/content/education/es/uem.md": () => import('./uem_CjjxqtJ1.mjs'),"/src/content/education/es/upm.md": () => import('./upm_Bj8rv0JV.mjs'),"/src/content/experience/en/accom.md": () => import('./accom_sC6o6sYp.mjs'),"/src/content/experience/en/eqa_dev.md": () => import('./eqa_dev_BtKnL0_J.mjs'),"/src/content/experience/en/eqa_pm.md": () => import('./eqa_pm_BhptY-cu.mjs'),"/src/content/experience/en/nailted.md": () => import('./nailted_CbTsWseF.mjs'),"/src/content/experience/es/accom.md": () => import('./accom_BPKzfLq_.mjs'),"/src/content/experience/es/eqa_dev.md": () => import('./eqa_dev_BMooAjSp.mjs'),"/src/content/experience/es/eqa_pm.md": () => import('./eqa_pm_CCgT7WyD.mjs'),"/src/content/experience/es/nailted.md": () => import('./nailted_lqeZxaS8.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const $$Astro$1 = createAstro();
const $$Experience = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Experience;
  const lang = getLangFromUrl(Astro2.url);
  const experienceEntries = await getCollection("experience", (entry) => {
    return entry.slug.split("/")[0] === lang;
  });
  const compareExperience = (entryA, entryB) => {
    return entryA.data.position > entryB.data.position ? 1 : -1;
  };
  return renderTemplate`${maybeRenderHead()}<div class="w-full mb-8 blur-section" id="experience"${addAttribute({ "--blur-delay": "0.5s" }, "style")}> <div class="text-lg font-bold mb-2">Work experience</div> ${experienceEntries.sort(compareExperience).map((entry) => renderTemplate`<div class="flex h-fit gap-x-3 mb-3"> <div> <a${addAttribute(entry.data.url, "href")} target="_blank" rel="noopener noreferrer"> <div class="h-12 w-12 rounded-full relative bg-light border border-grey-line z-10 flex justify-center items-center overflow-hidden"> <img${addAttribute(`/images/${entry.data.logo}`, "src")} class="w-9 cursor-pointer" alt="Miguel Mercado"> </div> </a> </div> <div${addAttribute(entry.id, "id")} class="experience-item grid grid-cols-[1fr_auto_14px] grid-rows-[48px_auto] w-full gap-x-4 items-center cursor-pointer overflow-hidden"> <div> <div class="text-sm font-semibold">${entry.data.company}</div> <div class="text-xs">${entry.data.jobPosition}</div> </div> <div class="text-sm text-grey-secondary tracking-widest">${entry.data.period}</div> <div class="w-2 h-2 border-b-2 border-r-2 -rotate-45 border-dark dark:border-light justify-self-center transition-all duration-200"></div> <div class="col-span-3 max-h-0 transition-all duration-200 ease-in"> <span class="pt-2 inline-block text-sm opacity-0 transition-opacity duration-200"> ${entry.body} </span> </div> </div> </div>`)} </div> `;
}, "/Users/user/Documents/otros/portfolio/src/components/Experience.astro", void 0);

const $$Astro = createAstro();
const $$Education = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Education;
  const lang = getLangFromUrl(Astro2.url);
  const educationEntries = await getCollection("education", (entry) => {
    return entry.slug.split("/")[0] === lang;
  });
  const compareEducation = (entryA, entryB) => {
    return entryA.data.position > entryB.data.position ? 1 : -1;
  };
  return renderTemplate`${maybeRenderHead()}<div class="w-full mb-8 blur-section" id="education"${addAttribute({ "--blur-delay": "0.7s" }, "style")}> <div class="text-lg font-bold mb-2">Education</div> ${educationEntries.sort(compareEducation).map((entry) => renderTemplate`<div class="flex h-fit gap-x-3 mb-3"> <div> <a${addAttribute(entry.data.url, "href")} target="_blank" rel="noopener noreferrer"> <div class="h-12 w-12 rounded-full relative bg-light border border-grey-line z-10 flex justify-center items-center overflow-hidden"> <img${addAttribute(`/images/${entry.data.logo}`, "src")} class="w-9 cursor-pointer" alt="Miguel Mercado"> </div> </a> </div> <div${addAttribute(entry.id, "id")} class="experience-item grid grid-cols-[1fr_auto_14px] grid-rows-[48px_auto] w-full gap-x-4 items-center overflow-hidden"> <div> <div class="text-sm font-semibold">${entry.data.center}</div> <div class="text-xs">${entry.data.degree}</div> </div> <div class="text-sm text-grey-secondary tracking-widest">${entry.data.period}</div> <div class="col-span-3 max-h-0 transition-all duration-200 ease-in"> <span class="pt-2 inline-block text-sm opacity-0 transition-opacity duration-200"> ${entry.body} </span> </div> </div> </div>`)} </div>`;
}, "/Users/user/Documents/otros/portfolio/src/components/Education.astro", void 0);

const $$Common = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main class="container max-w-3xl sm:p-4 p-3 mx-auto"> ${renderComponent($$result, "Header", $$Header, {})} ${renderComponent($$result, "Hero", $$Hero, {})} ${renderComponent($$result, "About", $$About, {})} ${renderComponent($$result, "Experience", $$Experience, {})} ${renderComponent($$result, "Education", $$Education, {})} <div class="h-svh w-full bg-green-200" id="projects"></div> <div class="h-svh w-full bg-brown-200" id="footer"></div> </main>`;
}, "/Users/user/Documents/otros/portfolio/src/components/Common.astro", void 0);

export { $$Base as $, $$Common as a, getLangFromUrl as g, useTranslations as u };
