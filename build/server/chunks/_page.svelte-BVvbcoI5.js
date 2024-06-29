import { c as create_ssr_component, v as validate_component } from './ssr-DiXjdsyf.js';
import { F as Fa } from './fa-layers-text.svelte_svelte_type_style_lang-W7EIW0Kp.js';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const css = {
  code: "section.svelte-1ylojtg{padding:2em}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\timport Fa from 'svelte-fa';\\n\\timport { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';\\n\\timport { faGithub } from '@fortawesome/free-brands-svg-icons';\\n<\/script>\\n\\n<section class=\\"bg-light\\">\\n\\t<div class=\\"container\\">\\n\\t\\t<div class=\\"sm-m-top-50 text-center row\\">\\n\\t\\t\\t<h5 class=\\"text-dark\\">Contact me</h5>\\n\\t\\t\\t<form class=\\"form-inline m-top-30\\" method=\\"post\\" action=\\"\\">\\n\\t\\t\\t\\t<div class=\\"form-group col\\">\\n\\t\\t\\t\\t\\t<input type=\\"text\\" class=\\"form-control m-1\\" placeholder=\\"Enter your Name\\" />\\n\\t\\t\\t\\t\\t<input type=\\"email\\" class=\\"form-control m-1\\" placeholder=\\"Enter your Email\\" />\\n\\t\\t\\t\\t\\t<textarea type=\\"email\\" class=\\"form-control m-1\\" placeholder=\\"Enter your Message\\"></textarea>\\n\\t\\t\\t\\t\\t<button type=\\"submit\\" class=\\"btn text-center\\"><Fa icon={faEnvelope} /></button>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</form>\\n\\t\\t</div>\\n\\t</div>\\n</section>\\n\\n<style>\\n\\tsection {\\n\\t\\tpadding: 2em;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAuBC,sBAAQ,CACP,OAAO,CAAE,GACV"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="bg-light svelte-1ylojtg"><div class="container"><div class="sm-m-top-50 text-center row"><h5 class="text-dark" data-svelte-h="svelte-pue4qr">Contact me</h5> <form class="form-inline m-top-30" method="post" action=""><div class="form-group col"><input type="text" class="form-control m-1" placeholder="Enter your Name"> <input type="email" class="form-control m-1" placeholder="Enter your Email"> <textarea type="email" class="form-control m-1" placeholder="Enter your Message"></textarea> <button type="submit" class="btn text-center">${validate_component(Fa, "Fa").$$render($$result, { icon: faEnvelope }, {}, {})}</button></div></form></div></div> </section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BVvbcoI5.js.map
