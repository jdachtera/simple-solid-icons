import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"m10.852 14.772-.383.923\"></path>",
  _tmpl$2 = "<path d=\"M13.148 14.772a3 3 0 1 0-2.296-5.544l-.383-.923\"></path>",
  _tmpl$3 = "<path d=\"m13.148 9.228.383-.923\"></path>",
  _tmpl$4 = "<path d=\"m13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544\"></path>",
  _tmpl$5 = "<path d=\"m14.772 10.852.923-.383\"></path>",
  _tmpl$6 = "<path d=\"m14.772 13.148.923.383\"></path>",
  _tmpl$7 = "<path d=\"M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5\"></path>",
  _tmpl$8 = "<path d=\"M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5\"></path>",
  _tmpl$9 = "<path d=\"M6 18h.01\"></path>",
  _tmpl$0 = "<path d=\"M6 6h.01\"></path>",
  _tmpl$1 = "<path d=\"m9.228 10.852-.923-.383\"></path>",
  _tmpl$10 = "<path d=\"m9.228 13.148-.923.383\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideServerCog(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7), _$ssr(_tmpl$8), _$ssr(_tmpl$9), _$ssr(_tmpl$0), _$ssr(_tmpl$1), _$ssr(_tmpl$10)], true);
}