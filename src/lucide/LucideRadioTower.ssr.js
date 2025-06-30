import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M4.9 16.1C1 12.2 1 5.8 4.9 1.9\"></path>",
  _tmpl$2 = "<path d=\"M7.8 4.7a6.14 6.14 0 0 0-.8 7.5\"></path>",
  _tmpl$3 = "<circle cx=\"12\" cy=\"9\" r=\"2\"></circle>",
  _tmpl$4 = "<path d=\"M16.2 4.8c2 2 2.26 5.11.8 7.47\"></path>",
  _tmpl$5 = "<path d=\"M19.1 1.9a9.96 9.96 0 0 1 0 14.1\"></path>",
  _tmpl$6 = "<path d=\"M9.5 18h5\"></path>",
  _tmpl$7 = "<path d=\"m8 22 4-11 4 11\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideRadioTower(props) {
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