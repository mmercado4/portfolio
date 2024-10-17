import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DnMwOCNv.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"position":1,"center":"European Scrum","period":"Jan 2022 - Feb 2022","degree":"Scrum Master","logo":"logo-scrum.png","url":"https://www.europeanscrum.org/certificate-in-scrum-master.html"};
				const file = "/Users/user/Documents/otros/portfolio/src/content/education/en/scrum.md";
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
