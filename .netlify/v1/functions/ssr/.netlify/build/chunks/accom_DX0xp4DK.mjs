import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DnMwOCNv.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Desarrollo integral de software backend y frontend para la optimización y gestión de ventas en la compañía. Esto incluye la creación de encuestas para la captación de clientes, la implementación del API Restful ABLA (Core de la compañía), y el desarrollo de landings para captación, entre otras soluciones clave. Entorno de desarrollo ágil, utilizando el marco de trabajo SCRUM para asegurar la entrega continua de valor y la mejora constante del producto.</p>";

				const frontmatter = {"position":2,"company":"Accom","jobPosition":"Desarrollador Full Stack","period":"Dic 2021 - Oct 2022","logo":"logo-accom.jpg","stack":"php, javascript, reactJs, Sass, MongoDb, Code Igniter","url":"https://www.we-accom.com/"};
				const file = "/Users/user/Documents/otros/portfolio/src/content/experience/es/accom.md";
				const url = undefined;
				function rawContent() {
					return "\nDesarrollo integral de software backend y frontend para la optimización y gestión de ventas en la compañía. Esto incluye la creación de encuestas para la captación de clientes, la implementación del API Restful ABLA (Core de la compañía), y el desarrollo de landings para captación, entre otras soluciones clave. Entorno de desarrollo ágil, utilizando el marco de trabajo SCRUM para asegurar la entrega continua de valor y la mejora constante del producto.\n";
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
