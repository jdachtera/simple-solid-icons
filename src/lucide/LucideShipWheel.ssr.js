import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<circle cx=\"12\" cy=\"12\" r=\"8\"></circle>",
  _tmpl$2 = "<path d=\"M12 2v7.5\"></path>",
  _tmpl$3 = "<path d=\"m19 5-5.23 5.23\"></path>",
  _tmpl$4 = "<path d=\"M22 12h-7.5\"></path>",
  _tmpl$5 = "<path d=\"m19 19-5.23-5.23\"></path>",
  _tmpl$6 = "<path d=\"M12 14.5V22\"></path>",
  _tmpl$7 = "<path d=\"M10.23 13.77 5 19\"></path>",
  _tmpl$8 = "<path d=\"M9.5 12H2\"></path>",
  _tmpl$9 = "<path d=\"M10.23 10.23 5 5\"></path>",
  _tmpl$0 = "<circle cx=\"12\" cy=\"12\" r=\"2.5\"></circle>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideShipWheel(props) {
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