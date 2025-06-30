import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>",
  _tmpl$2 = "<path d=\"M9 8v-1a2 2 0 1 0 -4 0\"></path>",
  _tmpl$3 = "<path d=\"M15 8v-1a2 2 0 1 1 4 0\"></path>",
  _tmpl$4 = "<path d=\"M4 20l3.472 -7.812a2 2 0 0 1 1.828 -1.188h5.4a2 2 0 0 1 1.828 1.188l3.472 7.812\"></path>",
  _tmpl$5 = "<path d=\"M6.192 15.064a2.14 2.14 0 0 1 .475 -.064c.527 -.009 1.026 .178 1.333 .5c.307 .32 .806 .507 1.333 .5c.527 .007 1.026 -.18 1.334 -.5c.307 -.322 .806 -.509 1.333 -.5c.527 -.009 1.026 .178 1.333 .5c.308 .32 .807 .507 1.334 .5c.527 .007 1.026 -.18 1.333 -.5c.307 -.322 .806 -.509 1.333 -.5c.161 .003 .32 .025 .472 .064\"></path>",
  _tmpl$6 = "<path d=\"M12 8v-4\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: tabler | License: MIT (<https://github.com/tabler/tabler-icons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function TablerVolcano(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  }, props);
  return _$ssrElement("svg", _$mergeProps(merged, {
    get width() {
      return merged.width ?? merged.size;
    },
    get height() {
      return merged.height ?? merged.size;
    },
    get stroke() {
      return merged.stroke ?? merged.color;
    },
    get fill() {
      return merged.fill;
    }
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6)], true);
}