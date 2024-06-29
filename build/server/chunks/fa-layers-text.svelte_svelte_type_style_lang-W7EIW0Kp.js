import { c as create_ssr_component, d as add_attribute, e as escape } from './ssr-DiXjdsyf.js';

function getTransform(scale, translateX, translateY, rotate, flip, translateTimes = 1, translateUnit = "", rotateUnit = "") {
  let flipX = 1;
  let flipY = 1;
  if (flip) {
    if (flip == "horizontal") {
      flipX = -1;
    } else if (flip == "vertical") {
      flipY = -1;
    } else {
      flipX = flipY = -1;
    }
  }
  if (typeof scale === "string") {
    scale = parseFloat(scale);
  }
  if (typeof translateX === "string") {
    translateX = parseFloat(translateX);
  }
  if (typeof translateY === "string") {
    translateY = parseFloat(translateY);
  }
  const x = `${translateX * translateTimes}${translateUnit}`;
  const y = `${translateY * translateTimes}${translateUnit}`;
  let output = `translate(${x},${y}) scale(${flipX * scale},${flipY * scale})`;
  if (rotate) {
    output += ` rotate(${rotate}${rotateUnit})`;
  }
  return output;
}
const css = {
  code: ".svelte-fa-base{height:1em;overflow:visible;transform-origin:center;vertical-align:-0.125em}.svelte-fa-fw{text-align:center;width:1.25em}.svelte-fa-pull-left.svelte-bvo74f{float:left}.svelte-fa-pull-right.svelte-bvo74f{float:right}.svelte-fa-size-lg.svelte-bvo74f{font-size:1.33333em;line-height:0.75em;vertical-align:-0.225em}.svelte-fa-size-sm.svelte-bvo74f{font-size:0.875em}.svelte-fa-size-xs.svelte-bvo74f{font-size:0.75em}.spin.svelte-bvo74f{animation:svelte-bvo74f-spin 2s 0s infinite linear}.pulse.svelte-bvo74f{animation:svelte-bvo74f-spin 1s infinite steps(8)}@keyframes svelte-bvo74f-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",
  map: '{"version":3,"file":"fa.svelte","sources":["fa.svelte"],"sourcesContent":["<script>import { getTransform, setCustomFontSize } from \\"./utils.js\\";\\nlet clazz = void 0;\\nexport { clazz as class };\\nexport let id = void 0;\\nexport let style = void 0;\\nexport let icon;\\nexport let size = void 0;\\nexport let color = void 0;\\nexport let fw = false;\\nexport let pull = void 0;\\nexport let scale = 1;\\nexport let translateX = 0;\\nexport let translateY = 0;\\nexport let rotate = void 0;\\nexport let flip = void 0;\\nexport let spin = false;\\nexport let pulse = false;\\nexport let primaryColor = \\"\\";\\nexport let secondaryColor = \\"\\";\\nexport let primaryOpacity = 1;\\nexport let secondaryOpacity = 0.4;\\nexport let swapOpacity = false;\\nlet svgElement;\\n$:\\n  svgElement && size && setCustomFontSize(svgElement, size);\\n$:\\n  i = icon && icon.icon || [0, 0, \\"\\", [], \\"\\"];\\n$:\\n  transform = getTransform(scale, translateX, translateY, rotate, flip, 512);\\n<\/script>\\n\\n{#if i[4]}\\n  <!-- eslint-disable svelte/no-inline-styles -- Only styles passed to this component should be included -->\\n  <svg\\n    {id}\\n    class=\\"svelte-fa svelte-fa-base {clazz}\\"\\n    class:pulse\\n    class:svelte-fa-size-lg={size === \\"lg\\"}\\n    class:svelte-fa-size-sm={size === \\"sm\\"}\\n    class:svelte-fa-size-xs={size === \\"xs\\"}\\n    class:svelte-fa-fw={fw}\\n    class:svelte-fa-pull-left={pull === \\"left\\"}\\n    class:svelte-fa-pull-right={pull === \\"right\\"}\\n    class:spin\\n    bind:this={svgElement}\\n    {style}\\n    viewBox=\\"0 0 {i[0]} {i[1]}\\"\\n    aria-hidden=\\"true\\"\\n    role=\\"img\\"\\n    xmlns=\\"http://www.w3.org/2000/svg\\"\\n  >\\n    <!-- eslint-enable -->\\n    <g transform=\\"translate({i[0] / 2} {i[1] / 2})\\" transform-origin=\\"{i[0] / 4} 0\\">\\n      <g {transform}>\\n        {#if typeof i[4] == \\"string\\"}\\n          <path\\n            d={i[4]}\\n            fill={color || primaryColor || \\"currentColor\\"}\\n            transform=\\"translate({i[0] / -2} {i[1] / -2})\\"\\n          />\\n        {:else}\\n          <!-- Duotone icons -->\\n          <path\\n            d={i[4][0]}\\n            fill={secondaryColor || color || \\"currentColor\\"}\\n            fill-opacity={swapOpacity != false ? primaryOpacity : secondaryOpacity}\\n            transform=\\"translate({i[0] / -2} {i[1] / -2})\\"\\n          />\\n          <path\\n            d={i[4][1]}\\n            fill={primaryColor || color || \\"currentColor\\"}\\n            fill-opacity={swapOpacity != false ? secondaryOpacity : primaryOpacity}\\n            transform=\\"translate({i[0] / -2} {i[1] / -2})\\"\\n          />\\n        {/if}\\n      </g>\\n    </g>\\n  </svg>\\n{/if}\\n\\n<style>\\n  :global(.svelte-fa-base) {\\n    height: 1em;\\n    overflow: visible;\\n    transform-origin: center;\\n    vertical-align: -0.125em;\\n  }\\n\\n  :global(.svelte-fa-fw) {\\n    text-align: center;\\n    width: 1.25em;\\n  }\\n\\n  .svelte-fa-pull-left {\\n    float: left;\\n  }\\n\\n  .svelte-fa-pull-right {\\n    float: right;\\n  }\\n\\n  .svelte-fa-size-lg {\\n    font-size: 1.33333em;\\n    line-height: 0.75em;\\n    vertical-align: -0.225em;\\n  }\\n\\n  .svelte-fa-size-sm {\\n    font-size: 0.875em;\\n  }\\n\\n  .svelte-fa-size-xs {\\n    font-size: 0.75em;\\n  }\\n\\n  .spin {\\n    animation: spin 2s 0s infinite linear;\\n  }\\n\\n  .pulse {\\n    animation: spin 1s infinite steps(8);\\n  }\\n\\n  @keyframes spin {\\n    0% {\\n      transform: rotate(0deg);\\n    }\\n    100% {\\n      transform: rotate(360deg);\\n    }\\n  }\\n</style>\\n"],"names":[],"mappings":"AAiFU,eAAiB,CACvB,MAAM,CAAE,GAAG,CACX,QAAQ,CAAE,OAAO,CACjB,gBAAgB,CAAE,MAAM,CACxB,cAAc,CAAE,QAClB,CAEQ,aAAe,CACrB,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,MACT,CAEA,kCAAqB,CACnB,KAAK,CAAE,IACT,CAEA,mCAAsB,CACpB,KAAK,CAAE,KACT,CAEA,gCAAmB,CACjB,SAAS,CAAE,SAAS,CACpB,WAAW,CAAE,MAAM,CACnB,cAAc,CAAE,QAClB,CAEA,gCAAmB,CACjB,SAAS,CAAE,OACb,CAEA,gCAAmB,CACjB,SAAS,CAAE,MACb,CAEA,mBAAM,CACJ,SAAS,CAAE,kBAAI,CAAC,EAAE,CAAC,EAAE,CAAC,QAAQ,CAAC,MACjC,CAEA,oBAAO,CACL,SAAS,CAAE,kBAAI,CAAC,EAAE,CAAC,QAAQ,CAAC,MAAM,CAAC,CACrC,CAEA,WAAW,kBAAK,CACd,EAAG,CACD,SAAS,CAAE,OAAO,IAAI,CACxB,CACA,IAAK,CACH,SAAS,CAAE,OAAO,MAAM,CAC1B,CACF"}'
};
const Fa = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let i;
  let transform;
  let { class: clazz = void 0 } = $$props;
  let { id = void 0 } = $$props;
  let { style = void 0 } = $$props;
  let { icon } = $$props;
  let { size = void 0 } = $$props;
  let { color = void 0 } = $$props;
  let { fw = false } = $$props;
  let { pull = void 0 } = $$props;
  let { scale = 1 } = $$props;
  let { translateX = 0 } = $$props;
  let { translateY = 0 } = $$props;
  let { rotate = void 0 } = $$props;
  let { flip = void 0 } = $$props;
  let { spin = false } = $$props;
  let { pulse = false } = $$props;
  let { primaryColor = "" } = $$props;
  let { secondaryColor = "" } = $$props;
  let { primaryOpacity = 1 } = $$props;
  let { secondaryOpacity = 0.4 } = $$props;
  let { swapOpacity = false } = $$props;
  let svgElement;
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0) $$bindings.icon(icon);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.fw === void 0 && $$bindings.fw && fw !== void 0) $$bindings.fw(fw);
  if ($$props.pull === void 0 && $$bindings.pull && pull !== void 0) $$bindings.pull(pull);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0) $$bindings.scale(scale);
  if ($$props.translateX === void 0 && $$bindings.translateX && translateX !== void 0) $$bindings.translateX(translateX);
  if ($$props.translateY === void 0 && $$bindings.translateY && translateY !== void 0) $$bindings.translateY(translateY);
  if ($$props.rotate === void 0 && $$bindings.rotate && rotate !== void 0) $$bindings.rotate(rotate);
  if ($$props.flip === void 0 && $$bindings.flip && flip !== void 0) $$bindings.flip(flip);
  if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0) $$bindings.spin(spin);
  if ($$props.pulse === void 0 && $$bindings.pulse && pulse !== void 0) $$bindings.pulse(pulse);
  if ($$props.primaryColor === void 0 && $$bindings.primaryColor && primaryColor !== void 0) $$bindings.primaryColor(primaryColor);
  if ($$props.secondaryColor === void 0 && $$bindings.secondaryColor && secondaryColor !== void 0) $$bindings.secondaryColor(secondaryColor);
  if ($$props.primaryOpacity === void 0 && $$bindings.primaryOpacity && primaryOpacity !== void 0) $$bindings.primaryOpacity(primaryOpacity);
  if ($$props.secondaryOpacity === void 0 && $$bindings.secondaryOpacity && secondaryOpacity !== void 0) $$bindings.secondaryOpacity(secondaryOpacity);
  if ($$props.swapOpacity === void 0 && $$bindings.swapOpacity && swapOpacity !== void 0) $$bindings.swapOpacity(swapOpacity);
  $$result.css.add(css);
  i = icon && icon.icon || [0, 0, "", [], ""];
  transform = getTransform(scale, translateX, translateY, rotate, flip, 512);
  return `${i[4] ? ` <svg${add_attribute("id", id, 0)} class="${[
    "svelte-fa svelte-fa-base " + escape(clazz, true) + " svelte-bvo74f",
    (pulse ? "pulse" : "") + " " + (size === "lg" ? "svelte-fa-size-lg" : "") + " " + (size === "sm" ? "svelte-fa-size-sm" : "") + " " + (size === "xs" ? "svelte-fa-size-xs" : "") + " " + (fw ? "svelte-fa-fw" : "") + " " + (pull === "left" ? "svelte-fa-pull-left" : "") + " " + (pull === "right" ? "svelte-fa-pull-right" : "") + " " + (spin ? "spin" : "")
  ].join(" ").trim()}"${add_attribute("style", style, 0)} viewBox="${"0 0 " + escape(i[0], true) + " " + escape(i[1], true)}" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"${add_attribute("this", svgElement, 0)}><g transform="${"translate(" + escape(i[0] / 2, true) + " " + escape(i[1] / 2, true) + ")"}" transform-origin="${escape(i[0] / 4, true) + " 0"}"><g${add_attribute("transform", transform, 0)}>${typeof i[4] == "string" ? `<path${add_attribute("d", i[4], 0)}${add_attribute("fill", color || primaryColor || "currentColor", 0)} transform="${"translate(" + escape(i[0] / -2, true) + " " + escape(i[1] / -2, true) + ")"}"></path>` : ` <path${add_attribute("d", i[4][0], 0)}${add_attribute("fill", secondaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? primaryOpacity : secondaryOpacity, 0)} transform="${"translate(" + escape(i[0] / -2, true) + " " + escape(i[1] / -2, true) + ")"}"></path> <path${add_attribute("d", i[4][1], 0)}${add_attribute("fill", primaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? secondaryOpacity : primaryOpacity, 0)} transform="${"translate(" + escape(i[0] / -2, true) + " " + escape(i[1] / -2, true) + ")"}"></path>`}</g></g></svg>` : ``}`;
});

export { Fa as F };
//# sourceMappingURL=fa-layers-text.svelte_svelte_type_style_lang-W7EIW0Kp.js.map
