import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DnMwOCNv.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Análisis y desarrollo de Nailted, una solución de software para equipos de RRHH. Implementación del backend API utilizando FeathersJS y Node.js, integrando RabbitMQ AMPQ y un command bus para gestionar comandos y eventos de manera eficiente. Desarrollo de tests unitarios con Mocha para asegurar la fiabilidad del código y mantener una alta cobertura de pruebas.</p>\n<p>Desarrollo del frontend con AngularJS, implementando tests end-to-end con Cypress para ofrecer una experiencia de usuario fluida.</p>\n<p>Además, integración de herramientas de IA a través de LLM Sonet para potenciar la inteligencia de la plataforma y mejorar las capacidades de automatización.</p>\n<p>Entorno ágil siguiendo el marco de trabajo SCRUM, colaborando con un equipo internacional en Croacia, Ghana y España.</p>";

				const frontmatter = {"position":1,"company":"Nailted","jobPosition":"Desarrollador Full Stack","period":"Oct 2022 - Actualmente","logo":"logo-nailted.png","stack":"NodeJs, typescript, javascript, FeathersJs, AngularJs, postgreSQL, Sequelize, Cypress, Mocha","url":"https://nailted.com/es/"};
				const file = "/Users/user/Documents/otros/portfolio/src/content/experience/es/nailted.md";
				const url = undefined;
				function rawContent() {
					return "\nAnálisis y desarrollo de Nailted, una solución de software para equipos de RRHH. Implementación del backend API utilizando FeathersJS y Node.js, integrando RabbitMQ AMPQ y un command bus para gestionar comandos y eventos de manera eficiente. Desarrollo de tests unitarios con Mocha para asegurar la fiabilidad del código y mantener una alta cobertura de pruebas.\n\nDesarrollo del frontend con AngularJS, implementando tests end-to-end con Cypress para ofrecer una experiencia de usuario fluida.\n\nAdemás, integración de herramientas de IA a través de LLM Sonet para potenciar la inteligencia de la plataforma y mejorar las capacidades de automatización.\n\nEntorno ágil siguiendo el marco de trabajo SCRUM, colaborando con un equipo internacional en Croacia, Ghana y España.\n";
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
