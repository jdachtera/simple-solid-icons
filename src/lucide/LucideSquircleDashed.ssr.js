import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M13.77 3.043a34 34 0 0 0-3.54 0\"></path>",
  _tmpl$2 = "<path d=\"M13.771 20.956a33 33 0 0 1-3.541.001\"></path>",
  _tmpl$3 = "<path d=\"M20.18 17.74c-.51 1.15-1.29 1.93-2.439 2.44\"></path>",
  _tmpl$4 = "<path d=\"M20.18 6.259c-.51-1.148-1.291-1.929-2.44-2.438\"></path>",
  _tmpl$5 = "<path d=\"M20.957 10.23a33 33 0 0 1 0 3.54\"></path>",
  _tmpl$6 = "<path d=\"M3.043 10.23a34 34 0 0 0 .001 3.541\"></path>",
  _tmpl$7 = "<path d=\"M6.26 20.179c-1.15-.508-1.93-1.29-2.44-2.438\"></path>",
  _tmpl$8 = "<path d=\"M6.26 3.82c-1.149.51-1.93 1.291-2.44 2.44\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideSquircleDashed(props) {
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