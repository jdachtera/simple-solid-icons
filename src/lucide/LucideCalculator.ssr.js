import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<rect width=\"16\" height=\"20\" x=\"4\" y=\"2\" rx=\"2\"></rect>",
  _tmpl$2 = "<line x1=\"8\" x2=\"16\" y1=\"6\" y2=\"6\"></line>",
  _tmpl$3 = "<line x1=\"16\" x2=\"16\" y1=\"14\" y2=\"18\"></line>",
  _tmpl$4 = "<path d=\"M16 10h.01\"></path>",
  _tmpl$5 = "<path d=\"M12 10h.01\"></path>",
  _tmpl$6 = "<path d=\"M8 10h.01\"></path>",
  _tmpl$7 = "<path d=\"M12 14h.01\"></path>",
  _tmpl$8 = "<path d=\"M8 14h.01\"></path>",
  _tmpl$9 = "<path d=\"M12 18h.01\"></path>",
  _tmpl$0 = "<path d=\"M8 18h.01\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideCalculator(props) {
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