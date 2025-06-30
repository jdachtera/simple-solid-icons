import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M12.765 21.522a.5.5 0 0 1-.765-.424v-8.196a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z\"></path>",
  _tmpl$2 = "<path d=\"M14.12 3.88 16 2\"></path>",
  _tmpl$3 = "<path d=\"M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5\"></path>",
  _tmpl$4 = "<path d=\"M20.97 5c0 2.1-1.6 3.8-3.5 4\"></path>",
  _tmpl$5 = "<path d=\"M3 21c0-2.1 1.7-3.9 3.8-4\"></path>",
  _tmpl$6 = "<path d=\"M6 13H2\"></path>",
  _tmpl$7 = "<path d=\"M6.53 9C4.6 8.8 3 7.1 3 5\"></path>",
  _tmpl$8 = "<path d=\"m8 2 1.88 1.88\"></path>",
  _tmpl$9 = "<path d=\"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideBugPlay(props) {
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