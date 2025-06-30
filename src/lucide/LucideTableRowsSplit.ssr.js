import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M14 10h2\"></path>",
  _tmpl$2 = "<path d=\"M15 22v-8\"></path>",
  _tmpl$3 = "<path d=\"M15 2v4\"></path>",
  _tmpl$4 = "<path d=\"M2 10h2\"></path>",
  _tmpl$5 = "<path d=\"M20 10h2\"></path>",
  _tmpl$6 = "<path d=\"M3 19h18\"></path>",
  _tmpl$7 = "<path d=\"M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6\"></path>",
  _tmpl$8 = "<path d=\"M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2\"></path>",
  _tmpl$9 = "<path d=\"M8 10h2\"></path>",
  _tmpl$0 = "<path d=\"M9 22v-8\"></path>",
  _tmpl$1 = "<path d=\"M9 2v4\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideTableRowsSplit(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7), _$ssr(_tmpl$8), _$ssr(_tmpl$9), _$ssr(_tmpl$0), _$ssr(_tmpl$1)], true);
}