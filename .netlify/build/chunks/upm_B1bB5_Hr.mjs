import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DnMwOCNv.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"position":4,"center":"Universidad Politécnica de Madrid","period":"Sep 2007 - Jul 2013","degree":"Ingeniería Técnica de Obras Públicas","logo":"logo-upm.jpg","url":"https://www.upm.es/Estudiantes/Estudios_Titulaciones/EstudiosOficialesGrado/ArticulosRelacionados?fmt=detail&prefmt=articulo&id=7f69d8c19fb20210VgnVCM10000009c7648a____"};
				const file = "/Users/user/Documents/otros/portfolio/src/content/education/es/upm.md";
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
