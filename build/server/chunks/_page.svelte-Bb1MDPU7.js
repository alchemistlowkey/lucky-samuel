import { c as create_ssr_component, v as validate_component } from './ssr-DiXjdsyf.js';
import { F as Fa } from './fa-layers-text.svelte_svelte_type_style_lang-W7EIW0Kp.js';
import { faGasPump, faScissors } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const css = {
  code: "section.svelte-1ylojtg{padding:2em}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\timport Fa from 'svelte-fa';\\n\\timport { faGasPump, faScissors } from '@fortawesome/free-solid-svg-icons';\\n\\timport { faGithub } from '@fortawesome/free-brands-svg-icons';\\n<\/script>\\n\\n<section>\\n\\t<div class=\\"container text-center\\">\\n\\t\\t<h2>Projects</h2>\\n\\t\\t<div class=\\"row\\">\\n\\t\\t\\t<div class=\\"col bg-success rounded m-2\\">\\n\\t\\t\\t\\t<h3><Fa icon={faGasPump} /> Fuel Price Locator</h3>\\n\\t\\t\\t\\t<p>\\n\\t\\t\\t\\t\\tFuel Price Locator is an innovative application designed to help users find the most\\n\\t\\t\\t\\t\\taffordable petroleum products in their vicinity.\\n\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t<a\\n\\t\\t\\t\\t\\tclass=\\"text-white\\"\\n\\t\\t\\t\\t\\thref=\\"https://github.com/alchemistlowkey/fuelpricelocator.git\\"\\n\\t\\t\\t\\t\\ttarget=\\"_blank\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t<Fa icon={faGithub} /></a\\n\\t\\t\\t\\t>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"col bg-success rounded m-2\\">\\n\\t\\t\\t\\t<h3><Fa icon={faScissors} /> Tailors Online</h3>\\n\\t\\t\\t\\t<p>\\n\\t\\t\\t\\t\\tThis platform connects users with talented tailors, providing a seamless experience in\\n\\t\\t\\t\\t\\tfinding the right designer for your fabrics.\\n\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t<a\\n\\t\\t\\t\\t\\tclass=\\"text-white\\"\\n\\t\\t\\t\\t\\thref=\\"https://github.com/alchemistlowkey/tailors_online.git\\"\\n\\t\\t\\t\\t\\ttarget=\\"_blank\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t<Fa icon={faGithub} /></a\\n\\t\\t\\t\\t>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</div>\\n</section>\\n\\n<style>\\n\\tsection {\\n\\t\\tpadding: 2em;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA2CC,sBAAQ,CACP,OAAO,CAAE,GACV"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="svelte-1ylojtg"><div class="container text-center"><h2 data-svelte-h="svelte-7jt1gw">Projects</h2> <div class="row"><div class="col bg-success rounded m-2"><h3>${validate_component(Fa, "Fa").$$render($$result, { icon: faGasPump }, {}, {})} Fuel Price Locator</h3> <p data-svelte-h="svelte-53t1v4">Fuel Price Locator is an innovative application designed to help users find the most
					affordable petroleum products in their vicinity.</p> <a class="text-white" href="https://github.com/alchemistlowkey/fuelpricelocator.git" target="_blank">${validate_component(Fa, "Fa").$$render($$result, { icon: faGithub }, {}, {})}</a></div> <div class="col bg-success rounded m-2"><h3>${validate_component(Fa, "Fa").$$render($$result, { icon: faScissors }, {}, {})} Tailors Online</h3> <p data-svelte-h="svelte-152mf6x">This platform connects users with talented tailors, providing a seamless experience in
					finding the right designer for your fabrics.</p> <a class="text-white" href="https://github.com/alchemistlowkey/tailors_online.git" target="_blank">${validate_component(Fa, "Fa").$$render($$result, { icon: faGithub }, {}, {})}</a></div></div></div> </section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Bb1MDPU7.js.map
