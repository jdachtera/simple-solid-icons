import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M12 2v2\"></path>",
  _tmpl$2 = "<path d=\"m4.93 4.93 1.41 1.41\"></path>",
  _tmpl$3 = "<path d=\"M20 12h2\"></path>",
  _tmpl$4 = "<path d=\"m19.07 4.93-1.41 1.41\"></path>",
  _tmpl$5 = "<path d=\"M15.947 12.65a4 4 0 0 0-5.925-4.128\"></path>",
  _tmpl$6 = "<path d=\"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24\"></path>",
  _tmpl$7 = "<path d=\"M11 20v2\"></path>",
  _tmpl$8 = "<path d=\"M7 19v2\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideCloudSunRain(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7), _$ssr(_tmpl$8)], true);
}