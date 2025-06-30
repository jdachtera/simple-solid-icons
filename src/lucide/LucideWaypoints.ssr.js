import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<circle cx=\"12\" cy=\"4.5\" r=\"2.5\"></circle>",
  _tmpl$2 = "<path d=\"m10.2 6.3-3.9 3.9\"></path>",
  _tmpl$3 = "<circle cx=\"4.5\" cy=\"12\" r=\"2.5\"></circle>",
  _tmpl$4 = "<path d=\"M7 12h10\"></path>",
  _tmpl$5 = "<circle cx=\"19.5\" cy=\"12\" r=\"2.5\"></circle>",
  _tmpl$6 = "<path d=\"m13.8 17.7 3.9-3.9\"></path>",
  _tmpl$7 = "<circle cx=\"12\" cy=\"19.5\" r=\"2.5\"></circle>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideWaypoints(props) {
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