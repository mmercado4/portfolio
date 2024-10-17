import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DnMwOCNv.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Analysis and development of Nailted, a software solution for HR teams. Implemented the backend API using FeathersJS and Node.js, integrating RabbitMQ AMPQ and a command bus to efficiently manage commands and events. Developed unit tests with Mocha to ensure code reliability and maintain high test coverage.</p>\n<p>Developed the frontend using AngularJS, implementing end-to-end tests with Cypress to deliver a seamless user experience.</p>\n<p>Additionally, integrated AI tools through LLM Sonet to enhance the platform’s intelligence and improve automation capabilities.</p>\n<p>Worked in an agile environment following the SCRUM framework, collaborating with an international team in Croatia, Ghana, and Spain.</p>";

				const frontmatter = {"position":1,"company":"Nailted","jobPosition":"Full Stack Developer","period":"Oct 2022 - Now","logo":"logo-nailted.png","stack":"NodeJs, typescript, javascript, FeathersJs, AngularJs, postgreSQL, Sequelize, Cypress, Mocha","url":"https://nailted.com/"};
				const file = "/Users/user/Documents/otros/portfolio/src/content/experience/en/nailted.md";
				const url = undefined;
				function rawContent() {
					return "\nAnalysis and development of Nailted, a software solution for HR teams. Implemented the backend API using FeathersJS and Node.js, integrating RabbitMQ AMPQ and a command bus to efficiently manage commands and events. Developed unit tests with Mocha to ensure code reliability and maintain high test coverage.\n\nDeveloped the frontend using AngularJS, implementing end-to-end tests with Cypress to deliver a seamless user experience.\n\nAdditionally, integrated AI tools through LLM Sonet to enhance the platform's intelligence and improve automation capabilities.\n\nWorked in an agile environment following the SCRUM framework, collaborating with an international team in Croatia, Ghana, and Spain.\n";
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
