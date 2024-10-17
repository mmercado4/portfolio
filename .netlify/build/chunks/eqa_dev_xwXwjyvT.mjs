import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DnMwOCNv.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Desarrollo y mejora continua del software interno de la compañía utilizando C# y .NET, garantizando la optimización de procesos y la eficiencia operativa en diversas áreas del negocio. Además, lideré la creación de herramientas personalizadas para distintos departamentos mediante Macros en VBA, lo que permitió automatizar tareas repetitivas y aumentar la productividad de los equipos.</p>";

				const frontmatter = {"position":3,"company":"EQA Certificados I+D+i","jobPosition":"Desarrollador Full Stack","period":"Feb 2021 - Nov 2021","logo":"logo-eqa.png","stack":"C#, .NET, javascript, SQL Server, Excel, VBA","url":"https://eqa.es/"};
				const file = "/Users/user/Documents/otros/portfolio/src/content/experience/es/eqa_dev.md";
				const url = undefined;
				function rawContent() {
					return "\nDesarrollo y mejora continua del software interno de la compañía utilizando C# y .NET, garantizando la optimización de procesos y la eficiencia operativa en diversas áreas del negocio. Además, lideré la creación de herramientas personalizadas para distintos departamentos mediante Macros en VBA, lo que permitió automatizar tareas repetitivas y aumentar la productividad de los equipos.\n";
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
