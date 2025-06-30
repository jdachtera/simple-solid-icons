import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"6\"></line>",
  _tmpl$2 = "<line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"22\"></line>",
  _tmpl$3 = "<line x1=\"4.93\" y1=\"4.93\" x2=\"7.76\" y2=\"7.76\"></line>",
  _tmpl$4 = "<line x1=\"16.24\" y1=\"16.24\" x2=\"19.07\" y2=\"19.07\"></line>",
  _tmpl$5 = "<line x1=\"2\" y1=\"12\" x2=\"6\" y2=\"12\"></line>",
  _tmpl$6 = "<line x1=\"18\" y1=\"12\" x2=\"22\" y2=\"12\"></line>",
  _tmpl$7 = "<line x1=\"4.93\" y1=\"19.07\" x2=\"7.76\" y2=\"16.24\"></line>",
  _tmpl$8 = "<line x1=\"16.24\" y1=\"7.76\" x2=\"19.07\" y2=\"4.93\"></line>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: feather | License: MIT (<https://github.com/feathericons/feather/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function FeatherLoader(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7), _$ssr(_tmpl$8)], true);
}