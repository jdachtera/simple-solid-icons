import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z\"></path>",
  _tmpl$2 = "<path d=\"M18 11V4H6v7\"></path>",
  _tmpl$3 = "<path d=\"M15 22v-4a3 3 0 0 0-3-3a3 3 0 0 0-3 3v4\"></path>",
  _tmpl$4 = "<path d=\"M22 11V9\"></path>",
  _tmpl$5 = "<path d=\"M2 11V9\"></path>",
  _tmpl$6 = "<path d=\"M6 4V2\"></path>",
  _tmpl$7 = "<path d=\"M18 4V2\"></path>",
  _tmpl$8 = "<path d=\"M10 4V2\"></path>",
  _tmpl$9 = "<path d=\"M14 4V2\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideCastle(props) {
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