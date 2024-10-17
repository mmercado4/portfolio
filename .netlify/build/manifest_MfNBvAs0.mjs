import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import { j as decodeKey } from './chunks/astro/server_DnMwOCNv.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = (_, next) => next();

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/user/Documents/otros/portfolio/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const n=window.localStorage.getItem(\"theme\"),s=n&&n===\"dark\";s&&document.querySelector(\"html\")?.classList.add(\"dark\");document.querySelector(\"body\").style.display=\"block\";const i=document.querySelectorAll(\".experience-item\");for(const t of i)t.addEventListener(\"click\",()=>{const e=t.children[3],o=e.scrollHeight;e.style.maxHeight=t.classList.contains(\"open\")?\"0px\":`${o}px`,t.classList.contains(\"open\")?t.classList.remove(\"open\"):t.classList.add(\"open\")});const c=document.querySelectorAll(\".nav-btn\");if(c.length)for(const t of c)l(t);function l(t){t.addEventListener(\"click\",e=>{const o=e.target.id.split(\"nav-\")[1];r(o)})}function r(t){document.querySelector(`#${t}`)?.scrollIntoView({behavior:\"smooth\",block:\"start\",inline:\"start\"})}\n"}],"styles":[{"type":"external","src":"/_astro/index.Cn-K8dbN.css"}],"routeData":{"route":"/es","isIndex":true,"type":"page","pattern":"^\\/es\\/?$","segments":[[{"content":"es","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/es/index.astro","pathname":"/es","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const n=window.localStorage.getItem(\"theme\"),s=n&&n===\"dark\";s&&document.querySelector(\"html\")?.classList.add(\"dark\");document.querySelector(\"body\").style.display=\"block\";const i=document.querySelectorAll(\".experience-item\");for(const t of i)t.addEventListener(\"click\",()=>{const e=t.children[3],o=e.scrollHeight;e.style.maxHeight=t.classList.contains(\"open\")?\"0px\":`${o}px`,t.classList.contains(\"open\")?t.classList.remove(\"open\"):t.classList.add(\"open\")});const c=document.querySelectorAll(\".nav-btn\");if(c.length)for(const t of c)l(t);function l(t){t.addEventListener(\"click\",e=>{const o=e.target.id.split(\"nav-\")[1];r(o)})}function r(t){document.querySelector(`#${t}`)?.scrollIntoView({behavior:\"smooth\",block:\"start\",inline:\"start\"})}\n"}],"styles":[{"type":"external","src":"/_astro/index.Cn-K8dbN.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/user/Documents/otros/portfolio/src/pages/es/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/user/Documents/otros/portfolio/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/user/Documents/otros/portfolio/src/components/Education.astro",{"propagation":"in-tree","containsHead":false}],["/Users/user/Documents/otros/portfolio/src/components/Common.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/es/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/user/Documents/otros/portfolio/src/components/Experience.astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/es/index@_@astro":"pages/es.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_MfNBvAs0.mjs","/Users/user/Documents/otros/portfolio/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","/Users/user/Documents/otros/portfolio/src/content/education/en/neoland.md?astroContentCollectionEntry=true":"chunks/neoland_sNGakrOO.mjs","/Users/user/Documents/otros/portfolio/src/content/education/en/scrum.md?astroContentCollectionEntry=true":"chunks/scrum_C7cYWaBK.mjs","/Users/user/Documents/otros/portfolio/src/content/education/en/uem.md?astroContentCollectionEntry=true":"chunks/uem_Bo6YPMNk.mjs","/Users/user/Documents/otros/portfolio/src/content/education/en/upm.md?astroContentCollectionEntry=true":"chunks/upm_B6OxNCOt.mjs","/Users/user/Documents/otros/portfolio/src/content/education/es/neoland.md?astroContentCollectionEntry=true":"chunks/neoland_DBEcLkzV.mjs","/Users/user/Documents/otros/portfolio/src/content/education/es/scrum.md?astroContentCollectionEntry=true":"chunks/scrum_BHTM7_Rm.mjs","/Users/user/Documents/otros/portfolio/src/content/education/es/uem.md?astroContentCollectionEntry=true":"chunks/uem_CCSIhF-4.mjs","/Users/user/Documents/otros/portfolio/src/content/education/es/upm.md?astroContentCollectionEntry=true":"chunks/upm_BKCTqMKq.mjs","/Users/user/Documents/otros/portfolio/src/content/experience/en/accom.md?astroContentCollectionEntry=true":"chunks/accom_Bzy6ieEl.mjs","/Users/user/Documents/otros/portfolio/src/content/experience/en/eqa_dev.md?astroContentCollectionEntry=true":"chunks/eqa_dev_BBOxa43Y.mjs","/Users/user/Documents/otros/portfolio/src/content/experience/en/eqa_pm.md?astroContentCollectionEntry=true":"chunks/eqa_pm_caOoCY-8.mjs","/Users/user/Documents/otros/portfolio/src/content/experience/en/nailted.md?astroContentCollectionEntry=true":"chunks/nailted_8n-sCqT9.mjs","/Users/user/Documents/otros/portfolio/src/content/experience/es/accom.md?astroContentCollectionEntry=true":"chunks/accom_Cl6PNrJy.mjs","/Users/user/Documents/otros/portfolio/src/content/experience/es/eqa_dev.md?astroContentCollectionEntry=true":"chunks/eqa_dev_ZJJ3z-wn.mjs","/Users/user/Documents/otros/portfolio/src/content/experience/es/eqa_pm.md?astroContentCollectionEntry=true":"chunks/eqa_pm_DlooWUm0.mjs","/Users/user/Documents/otros/portfolio/src/content/experience/es/nailted.md?astroContentCollectionEntry=true":"chunks/nailted_C0BzPw1X.mjs","/Users/user/Documents/otros/portfolio/src/content/education/en/neoland.md?astroPropagatedAssets":"chunks/neoland_Bd3s9-nc.mjs","/Users/user/Documents/otros/portfolio/src/content/education/en/scrum.md?astroPropagatedAssets":"chunks/scrum_DW8P_VuZ.mjs","/Users/user/Documents/otros/portfolio/src/content/education/en/uem.md?astroPropagatedAssets":"chunks/uem_D7Kq0s2s.mjs","/Users/user/Documents/otros/portfolio/src/content/education/en/upm.md?astroPropagatedAssets":"chunks/upm_Bus76XTF.mjs","/Users/user/Documents/otros/portfolio/src/content/education/es/neoland.md?astroPropagatedAssets":"chunks/neoland_CQe9uTnR.mjs","/Users/user/Documents/otros/portfolio/src/content/education/es/scrum.md?astroPropagatedAssets":"chunks/scrum_CENNQmiJ.mjs","/Users/user/Documents/otros/portfolio/src/content/education/es/uem.md?astroPropagatedAssets":"chunks/uem_CjjxqtJ1.mjs","/Users/user/Documents/otros/portfolio/src/content/education/es/upm.md?astroPropagatedAssets":"chunks/upm_Bj8rv0JV.mjs","/Users/user/Documents/otros/portfolio/src/content/experience/en/accom.md?astroPropagatedAssets":"chunks/accom_sC6o6sYp.mjs","/Users/user/Documents/otros/portfolio/src/content/experience/en/eqa_dev.md?astroPropagatedAssets":"chunks/eqa_dev_BtKnL0_J.mjs","/Users/user/Documents/otros/portfolio/src/content/experience/en/eqa_pm.md?astroPropagatedAssets":"chunks/eqa_pm_BhptY-cu.mjs","/Users/user/Documents/otros/portfolio/src/content/experience/en/nailted.md?astroPropagatedAssets":"chunks/nailted_CbTsWseF.mjs","/Users/user/Documents/otros/portfolio/src/content/experience/es/accom.md?astroPropagatedAssets":"chunks/accom_BPKzfLq_.mjs","/Users/user/Documents/otros/portfolio/src/content/experience/es/eqa_dev.md?astroPropagatedAssets":"chunks/eqa_dev_BMooAjSp.mjs","/Users/user/Documents/otros/portfolio/src/content/experience/es/eqa_pm.md?astroPropagatedAssets":"chunks/eqa_pm_CCgT7WyD.mjs","/Users/user/Documents/otros/portfolio/src/content/experience/es/nailted.md?astroPropagatedAssets":"chunks/nailted_lqeZxaS8.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","/Users/user/Documents/otros/portfolio/src/content/education/en/neoland.md":"chunks/neoland_1ZcV-fKb.mjs","/Users/user/Documents/otros/portfolio/src/content/education/en/scrum.md":"chunks/scrum_c7Dw9M1M.mjs","/Users/user/Documents/otros/portfolio/src/content/education/en/uem.md":"chunks/uem_0tcIMMh7.mjs","/Users/user/Documents/otros/portfolio/src/content/education/en/upm.md":"chunks/upm_ZHGgxxFK.mjs","/Users/user/Documents/otros/portfolio/src/content/education/es/neoland.md":"chunks/neoland_zLny9hnR.mjs","/Users/user/Documents/otros/portfolio/src/content/education/es/scrum.md":"chunks/scrum_B55gYt7-.mjs","/Users/user/Documents/otros/portfolio/src/content/education/es/uem.md":"chunks/uem_Bp_UUYI9.mjs","/Users/user/Documents/otros/portfolio/src/content/education/es/upm.md":"chunks/upm_B1bB5_Hr.mjs","/Users/user/Documents/otros/portfolio/src/content/experience/en/accom.md":"chunks/accom_C37JL5_y.mjs","/Users/user/Documents/otros/portfolio/src/content/experience/en/eqa_dev.md":"chunks/eqa_dev_yalDBAvG.mjs","/Users/user/Documents/otros/portfolio/src/content/experience/en/eqa_pm.md":"chunks/eqa_pm_CSmmFuw-.mjs","/Users/user/Documents/otros/portfolio/src/content/experience/en/nailted.md":"chunks/nailted_Djqqp1g9.mjs","/Users/user/Documents/otros/portfolio/src/content/experience/es/accom.md":"chunks/accom_DX0xp4DK.mjs","/Users/user/Documents/otros/portfolio/src/content/experience/es/eqa_dev.md":"chunks/eqa_dev_xwXwjyvT.mjs","/Users/user/Documents/otros/portfolio/src/content/experience/es/eqa_pm.md":"chunks/eqa_pm_DLTUUTp-.mjs","/Users/user/Documents/otros/portfolio/src/content/experience/es/nailted.md":"chunks/nailted_BXbSNEzv.mjs","@components/ThemeToggle.tsx":"_astro/ThemeToggle.CGg-55pA.js","@astrojs/react/client.js":"_astro/client.BIGLHmRd.js","/astro/hoisted.js?q=0":"_astro/hoisted.48IfhAc1.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/moon.-koWN4jq.svg","/_astro/sun.CPDd2jn7.svg","/_astro/index.Cn-K8dbN.css","/_astro/ThemeToggle.CGg-55pA.js","/_astro/client.BIGLHmRd.js","/_astro/index.DhYZZe0J.js","/gifs/wave.gif","/images/logo-accom.jpg","/images/logo-eqa.png","/images/logo-nailted.png","/images/logo-neoland.webp","/images/logo-scrum.png","/images/logo-uem.svg","/images/logo-upm.jpg","/images/miguel_avatar.png","/icons/favicon.svg","/icons/moon.svg","/icons/sun.svg","/styles/index.css"],"i18n":{"fallbackType":"redirect","strategy":"pathname-prefix-other-locales","locales":["es","en"],"defaultLocale":"en","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"cKNNe7ZS0C/GykXaZH0sIcqDMoE3+goDD4N95ft4LDE=","experimentalEnvGetSecretEnabled":false});

export { manifest };
