import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"m14.305 19.53.923-.382\"></path>",
  _tmpl$2 = "<path d=\"m15.228 16.852-.923-.383\"></path>",
  _tmpl$3 = "<path d=\"m16.852 15.228-.383-.923\"></path>",
  _tmpl$4 = "<path d=\"m16.852 20.772-.383.924\"></path>",
  _tmpl$5 = "<path d=\"m19.148 15.228.383-.923\"></path>",
  _tmpl$6 = "<path d=\"m19.53 21.696-.382-.924\"></path>",
  _tmpl$7 = "<path d=\"M2 7.82a15 15 0 0 1 20 0\"></path>",
  _tmpl$8 = "<path d=\"m20.772 16.852.924-.383\"></path>",
  _tmpl$9 = "<path d=\"m20.772 19.148.924.383\"></path>",
  _tmpl$0 = "<path d=\"M5 11.858a10 10 0 0 1 11.5-1.785\"></path>",
  _tmpl$1 = "<path d=\"M8.5 15.429a5 5 0 0 1 2.413-1.31\"></path>",
  _tmpl$10 = "<circle cx=\"18\" cy=\"18\" r=\"3\"></circle>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideWifiCog(props) {
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