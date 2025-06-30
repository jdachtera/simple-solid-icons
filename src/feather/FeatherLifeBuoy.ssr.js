import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle>",
  _tmpl$2 = "<circle cx=\"12\" cy=\"12\" r=\"4\"></circle>",
  _tmpl$3 = "<line x1=\"4.93\" y1=\"4.93\" x2=\"9.17\" y2=\"9.17\"></line>",
  _tmpl$4 = "<line x1=\"14.83\" y1=\"14.83\" x2=\"19.07\" y2=\"19.07\"></line>",
  _tmpl$5 = "<line x1=\"14.83\" y1=\"9.17\" x2=\"19.07\" y2=\"4.93\"></line>",
  _tmpl$6 = "<line x1=\"14.83\" y1=\"9.17\" x2=\"18.36\" y2=\"5.64\"></line>",
  _tmpl$7 = "<line x1=\"4.93\" y1=\"19.07\" x2=\"9.17\" y2=\"14.83\"></line>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: feather | License: MIT (<https://github.com/feathericons/feather/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function FeatherLifeBuoy(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7)], true);
}