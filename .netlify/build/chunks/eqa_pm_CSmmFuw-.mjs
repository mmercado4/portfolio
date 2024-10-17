import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DnMwOCNv.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Management of R&#x26;D projects focused on obtaining tax deductions, with technical-commercial responsibility for managing clients and key accounts. Although this experience is not directly related to my “tech” profile, I consider it extremely valuable as it allowed me to develop a comprehensive set of soft skills that have been fundamental to my career.\nAmong the skills I acquired and refined are effective communication, both with clients and technical teams; time management and organization of complex projects; problem-solving in high-pressure environments; and collaborative leadership, among others.</p>";

				const frontmatter = {"position":4,"company":"EQA Certificados I+D+i","jobPosition":"Project Manager","period":"Sep 2014 - Feb 2021","logo":"logo-eqa.png","stack":"time management, leadership, problem solving, effective communication","url":"https://eqa.es/"};
				const file = "/Users/user/Documents/otros/portfolio/src/content/experience/en/eqa_pm.md";
				const url = undefined;
				function rawContent() {
					return "\nManagement of R&D projects focused on obtaining tax deductions, with technical-commercial responsibility for managing clients and key accounts. Although this experience is not directly related to my \"tech\" profile, I consider it extremely valuable as it allowed me to develop a comprehensive set of soft skills that have been fundamental to my career.\nAmong the skills I acquired and refined are effective communication, both with clients and technical teams; time management and organization of complex projects; problem-solving in high-pressure environments; and collaborative leadership, among others.\n";
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
