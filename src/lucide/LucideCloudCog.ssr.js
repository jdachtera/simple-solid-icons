import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"m10.852 19.772-.383.924\"></path>",
  _tmpl$2 = "<path d=\"m13.148 14.228.383-.923\"></path>",
  _tmpl$3 = "<path d=\"M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923\"></path>",
  _tmpl$4 = "<path d=\"m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544\"></path>",
  _tmpl$5 = "<path d=\"m14.772 15.852.923-.383\"></path>",
  _tmpl$6 = "<path d=\"m14.772 18.148.923.383\"></path>",
  _tmpl$7 = "<path d=\"M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2\"></path>",
  _tmpl$8 = "<path d=\"m9.228 15.852-.923-.383\"></path>",
  _tmpl$9 = "<path d=\"m9.228 18.148-.923.383\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideCloudCog(props) {
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