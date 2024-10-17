import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DnMwOCNv.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Comprehensive backend and frontend software development for optimizing and managing the company’s sales processes. This includes creating surveys for customer acquisition, implementing the ABLA Restful API (the company’s core system), and developing landing pages for lead generation, among other key solutions. The work was conducted in an agile development environment, utilizing the SCRUM framework to ensure continuous value delivery and ongoing product improvement.</p>";

				const frontmatter = {"position":2,"company":"Accom","jobPosition":"Full Stack Developer","period":"Dic 2021 - Sept 2022","logo":"logo-accom.jpg","stack":"php, javascript, reactJs, Sass, MongoDb, Code Igniter","url":"https://www.we-accom.com/"};
				const file = "/Users/user/Documents/otros/portfolio/src/content/experience/en/accom.md";
				const url = undefined;
				function rawContent() {
					return "\nComprehensive backend and frontend software development for optimizing and managing the company's sales processes. This includes creating surveys for customer acquisition, implementing the ABLA Restful API (the company's core system), and developing landing pages for lead generation, among other key solutions. The work was conducted in an agile development environment, utilizing the SCRUM framework to ensure continuous value delivery and ongoing product improvement.\n";
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
