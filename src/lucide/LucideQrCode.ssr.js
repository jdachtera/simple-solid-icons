import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<rect width=\"5\" height=\"5\" x=\"3\" y=\"3\" rx=\"1\"></rect>",
  _tmpl$2 = "<rect width=\"5\" height=\"5\" x=\"16\" y=\"3\" rx=\"1\"></rect>",
  _tmpl$3 = "<rect width=\"5\" height=\"5\" x=\"3\" y=\"16\" rx=\"1\"></rect>",
  _tmpl$4 = "<path d=\"M21 16h-3a2 2 0 0 0-2 2v3\"></path>",
  _tmpl$5 = "<path d=\"M21 21v.01\"></path>",
  _tmpl$6 = "<path d=\"M12 7v3a2 2 0 0 1-2 2H7\"></path>",
  _tmpl$7 = "<path d=\"M3 12h.01\"></path>",
  _tmpl$8 = "<path d=\"M12 3h.01\"></path>",
  _tmpl$9 = "<path d=\"M12 16v.01\"></path>",
  _tmpl$0 = "<path d=\"M16 12h1\"></path>",
  _tmpl$1 = "<path d=\"M21 12v.01\"></path>",
  _tmpl$10 = "<path d=\"M12 21v-1\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideQrCode(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7), _$ssr(_tmpl$8), _$ssr(_tmpl$9), _$ssr(_tmpl$0), _$ssr(_tmpl$1), _$ssr(_tmpl$10)], true);
}