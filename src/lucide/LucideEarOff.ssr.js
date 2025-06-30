import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46\"></path>",
  _tmpl$2 = "<path d=\"M6 8.5c0-.75.13-1.47.36-2.14\"></path>",
  _tmpl$3 = "<path d=\"M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76\"></path>",
  _tmpl$4 = "<path d=\"M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18\"></path>",
  _tmpl$5 = "<line x1=\"2\" x2=\"22\" y1=\"2\" y2=\"22\"></line>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideEarOff(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5)], true);
}