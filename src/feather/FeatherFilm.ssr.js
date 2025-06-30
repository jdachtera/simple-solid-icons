import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"2.18\" ry=\"2.18\"></rect>",
  _tmpl$2 = "<line x1=\"7\" y1=\"2\" x2=\"7\" y2=\"22\"></line>",
  _tmpl$3 = "<line x1=\"17\" y1=\"2\" x2=\"17\" y2=\"22\"></line>",
  _tmpl$4 = "<line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"></line>",
  _tmpl$5 = "<line x1=\"2\" y1=\"7\" x2=\"7\" y2=\"7\"></line>",
  _tmpl$6 = "<line x1=\"2\" y1=\"17\" x2=\"7\" y2=\"17\"></line>",
  _tmpl$7 = "<line x1=\"17\" y1=\"17\" x2=\"22\" y2=\"17\"></line>",
  _tmpl$8 = "<line x1=\"17\" y1=\"7\" x2=\"22\" y2=\"7\"></line>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: feather | License: MIT (<https://github.com/feathericons/feather/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function FeatherFilm(props) {
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