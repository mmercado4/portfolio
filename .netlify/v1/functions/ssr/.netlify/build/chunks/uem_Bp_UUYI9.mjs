import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DnMwOCNv.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"position":3,"center":"Universidad Europea de Madrid","period":"Sep 2013 - Jul 2013","degree":"Grado en Ingeniería Civil","logo":"logo-uem.svg","url":"https://universidadeuropea.com/grado-ingenieria-civil-madrid/"};
				const file = "/Users/user/Documents/otros/portfolio/src/content/education/es/uem.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
