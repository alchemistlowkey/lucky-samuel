import { c as create_ssr_component, v as validate_component } from './ssr-DiXjdsyf.js';
import { F as Fa } from './fa-layers-text.svelte_svelte_type_style_lang-W7EIW0Kp.js';
import { faLinkedin, faXTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="text-center"><div class="container-fluid"><div class="row" data-svelte-h="svelte-8zerl7"><div><h1>Hi, I&#39;m Lucky Samuel a Software Engineer (Back-end)</h1></div> <div class="col"><p>I am a backend developer with expertise in Python, ExpressJS and Node.js. I have
					experience working with frameworks like Django and Sveltekit. I enjoy solving complex
					problems and learning new skills, looking forward to new challenges and opportunities to
					grow as a developer.</p></div></div> <div class="row mt-4"><div class="col bg-primary rounded p-4 m-2"><p data-svelte-h="svelte-1i183u8">Click the icon below to connect to my LinkedIn profile</p> <ul class="pagination justify-content-center"><li class="page-item"><a class="page-link bg-primary text-white" href="https://www.linkedin.com/in/lucky-samuel/" target="_blank">${validate_component(Fa, "Fa").$$render($$result, { icon: faLinkedin }, {}, {})}</a></li></ul></div> <div class="col bg-success rounded p-4 m-2"><p data-svelte-h="svelte-1hzilz7">Click the icon below to connect to my Twitter profile</p> <ul class="pagination justify-content-center"><li class="page-item"><a class="page-link bg-success text-white" href="https://x.com/alchemistlowkey" target="_blank">${validate_component(Fa, "Fa").$$render($$result, { icon: faXTwitter }, {}, {})}</a></li></ul></div> <div class="col bg-secondary rounded p-4 m-2"><p data-svelte-h="svelte-1w72tt7">Click the icon below to connect to my Github profile</p> <ul class="pagination justify-content-center"><li class="page-item"><a class="page-link bg-secondary text-white" href="https://github.com/alchemistlowkey" target="_blank">${validate_component(Fa, "Fa").$$render($$result, { icon: faGithub }, {}, {})}</a></li></ul></div></div></div></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Cdb-erU_.js.map
