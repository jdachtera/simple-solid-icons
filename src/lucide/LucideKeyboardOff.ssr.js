import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M 20 4 A2 2 0 0 1 22 6\"></path>",
  _tmpl$2 = "<path d=\"M 22 6 L 22 16.41\"></path>",
  _tmpl$3 = "<path d=\"M 7 16 L 16 16\"></path>",
  _tmpl$4 = "<path d=\"M 9.69 4 L 20 4\"></path>",
  _tmpl$5 = "<path d=\"M14 8h.01\"></path>",
  _tmpl$6 = "<path d=\"M18 8h.01\"></path>",
  _tmpl$7 = "<path d=\"m2 2 20 20\"></path>",
  _tmpl$8 = "<path d=\"M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2\"></path>",
  _tmpl$9 = "<path d=\"M6 8h.01\"></path>",
  _tmpl$0 = "<path d=\"M8 12h.01\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideKeyboardOff(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7), _$ssr(_tmpl$8), _$ssr(_tmpl$9), _$ssr(_tmpl$0)], true);
}