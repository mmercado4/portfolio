import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DnMwOCNv.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Gestión de proyectos de I+D+i enfocados en la obtención de deducciones fiscales, con responsabilidad técnico-comercial en la gestión de clientes y cuentas clave. Aunque esta experiencia no está directamente relacionada con mi perfil “tech”, la considero extremadamente valiosa, ya que me permitió desarrollar un conjunto integral de habilidades blandas que han sido fundamentales en mi carrera.\nEntre las habilidades que adquirí y perfeccioné se incluyen la comunicación efectiva, tanto con clientes como con equipos técnicos; la gestión del tiempo y la organización de proyectos complejos; la resolución de problemas en entornos de alta presión; y el liderazgo colaborativo, entre otros.</p>";

				const frontmatter = {"position":4,"company":"EQA Certificados I+D+i","jobPosition":"Gestor de Proyectos","period":"Sep 2014 - Feb 2021","logo":"logo-eqa.png","stack":"gestión del tiempo, liderazgo, resolución de problemas, comunicación efectiva","url":"https://eqa.es/"};
				const file = "/Users/user/Documents/otros/portfolio/src/content/experience/es/eqa_pm.md";
				const url = undefined;
				function rawContent() {
					return "\nGestión de proyectos de I+D+i enfocados en la obtención de deducciones fiscales, con responsabilidad técnico-comercial en la gestión de clientes y cuentas clave. Aunque esta experiencia no está directamente relacionada con mi perfil \"tech\", la considero extremadamente valiosa, ya que me permitió desarrollar un conjunto integral de habilidades blandas que han sido fundamentales en mi carrera.\nEntre las habilidades que adquirí y perfeccioné se incluyen la comunicación efectiva, tanto con clientes como con equipos técnicos; la gestión del tiempo y la organización de proyectos complejos; la resolución de problemas en entornos de alta presión; y el liderazgo colaborativo, entre otros.\n";
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
