import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M15 4V2\"></path>",
  _tmpl$2 = "<path d=\"M15 16v-2\"></path>",
  _tmpl$3 = "<path d=\"M8 9h2\"></path>",
  _tmpl$4 = "<path d=\"M20 9h2\"></path>",
  _tmpl$5 = "<path d=\"M17.8 11.8 19 13\"></path>",
  _tmpl$6 = "<path d=\"M15 9h.01\"></path>",
  _tmpl$7 = "<path d=\"M17.8 6.2 19 5\"></path>",
  _tmpl$8 = "<path d=\"m3 21 9-9\"></path>",
  _tmpl$9 = "<path d=\"M12.2 6.2 11 5\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideWand(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7), _$ssr(_tmpl$8), _$ssr(_tmpl$9)], true);
}