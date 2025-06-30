import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<circle cx=\"6\" cy=\"19\" r=\"3\"></circle>",
  _tmpl$2 = "<path d=\"M9 19h8.5c.4 0 .9-.1 1.3-.2\"></path>",
  _tmpl$3 = "<path d=\"M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12\"></path>",
  _tmpl$4 = "<path d=\"m2 2 20 20\"></path>",
  _tmpl$5 = "<path d=\"M21 15.3a3.5 3.5 0 0 0-3.3-3.3\"></path>",
  _tmpl$6 = "<path d=\"M15 5h-4.3\"></path>",
  _tmpl$7 = "<circle cx=\"18\" cy=\"5\" r=\"3\"></circle>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideRouteOff(props) {
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