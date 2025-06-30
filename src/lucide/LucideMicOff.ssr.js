import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<line x1=\"2\" x2=\"22\" y1=\"2\" y2=\"22\"></line>",
  _tmpl$2 = "<path d=\"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2\"></path>",
  _tmpl$3 = "<path d=\"M5 10v2a7 7 0 0 0 12 5\"></path>",
  _tmpl$4 = "<path d=\"M15 9.34V5a3 3 0 0 0-5.68-1.33\"></path>",
  _tmpl$5 = "<path d=\"M9 9v3a3 3 0 0 0 5.12 2.12\"></path>",
  _tmpl$6 = "<line x1=\"12\" x2=\"12\" y1=\"19\" y2=\"22\"></line>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideMicOff(props) {
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