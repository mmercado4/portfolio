import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DnMwOCNv.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"position":2,"center":"Neoland","period":"Sep 2020 - Mar 2021","degree":"Bootcamp Full Stack Developer","logo":"logo-neoland.webp","url":"https://neoland.es/bootcamps/web-development/"};
				const file = "/Users/user/Documents/otros/portfolio/src/content/education/en/neoland.md";
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
