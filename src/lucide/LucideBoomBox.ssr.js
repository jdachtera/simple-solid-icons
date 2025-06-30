import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4\"></path>",
  _tmpl$2 = "<path d=\"M8 8v1\"></path>",
  _tmpl$3 = "<path d=\"M12 8v1\"></path>",
  _tmpl$4 = "<path d=\"M16 8v1\"></path>",
  _tmpl$5 = "<rect width=\"20\" height=\"12\" x=\"2\" y=\"9\" rx=\"2\"></rect>",
  _tmpl$6 = "<circle cx=\"8\" cy=\"15\" r=\"2\"></circle>",
  _tmpl$7 = "<circle cx=\"16\" cy=\"15\" r=\"2\"></circle>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideBoomBox(props) {
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