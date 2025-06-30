import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<circle cx=\"12\" cy=\"12\" r=\"2\"></circle>",
  _tmpl$2 = "<path d=\"M12 2v4\"></path>",
  _tmpl$3 = "<path d=\"m6.8 15-3.5 2\"></path>",
  _tmpl$4 = "<path d=\"m20.7 7-3.5 2\"></path>",
  _tmpl$5 = "<path d=\"M6.8 9 3.3 7\"></path>",
  _tmpl$6 = "<path d=\"m20.7 17-3.5-2\"></path>",
  _tmpl$7 = "<path d=\"m9 22 3-8 3 8\"></path>",
  _tmpl$8 = "<path d=\"M8 22h8\"></path>",
  _tmpl$9 = "<path d=\"M18 18.7a9 9 0 1 0-12 0\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideFerrisWheel(props) {
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