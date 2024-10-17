import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DnMwOCNv.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Development and continuous improvement of the company’s internal software using C# and .NET, ensuring process optimization and operational efficiency across various business areas. Additionally, I led the creation of customized tools for different departments using VBA Macros, which allowed for the automation of repetitive tasks and significantly increased team productivity.</p>";

				const frontmatter = {"position":3,"company":"EQA Certificados I+D+i","jobPosition":"Full Stack Developer","period":"Feb 2021 - Nov 2021","logo":"logo-eqa.png","stack":"C#, .NET, javascript, SQL Server, Excel, VBA","url":"https://eqa.es/"};
				const file = "/Users/user/Documents/otros/portfolio/src/content/experience/en/eqa_dev.md";
				const url = undefined;
				function rawContent() {
					return "\nDevelopment and continuous improvement of the company's internal software using C# and .NET, ensuring process optimization and operational efficiency across various business areas. Additionally, I led the creation of customized tools for different departments using VBA Macros, which allowed for the automation of repetitive tasks and significantly increased team productivity.\n";
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
