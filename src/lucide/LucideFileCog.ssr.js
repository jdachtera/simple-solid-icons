import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M14 2v4a2 2 0 0 0 2 2h4\"></path>",
  _tmpl$2 = "<path d=\"m2.305 15.53.923-.382\"></path>",
  _tmpl$3 = "<path d=\"m3.228 12.852-.924-.383\"></path>",
  _tmpl$4 = "<path d=\"M4.677 21.5a2 2 0 0 0 1.313.5H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2.5\"></path>",
  _tmpl$5 = "<path d=\"m4.852 11.228-.383-.923\"></path>",
  _tmpl$6 = "<path d=\"m4.852 16.772-.383.924\"></path>",
  _tmpl$7 = "<path d=\"m7.148 11.228.383-.923\"></path>",
  _tmpl$8 = "<path d=\"m7.53 17.696-.382-.924\"></path>",
  _tmpl$9 = "<path d=\"m8.772 12.852.923-.383\"></path>",
  _tmpl$0 = "<path d=\"m8.772 15.148.923.383\"></path>",
  _tmpl$1 = "<circle cx=\"6\" cy=\"14\" r=\"3\"></circle>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideFileCog(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7), _$ssr(_tmpl$8), _$ssr(_tmpl$9), _$ssr(_tmpl$0), _$ssr(_tmpl$1)], true);
}