import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M12 17v4\"></path>",
  _tmpl$2 = "<path d=\"m14.305 7.53.923-.382\"></path>",
  _tmpl$3 = "<path d=\"m15.228 4.852-.923-.383\"></path>",
  _tmpl$4 = "<path d=\"m16.852 3.228-.383-.924\"></path>",
  _tmpl$5 = "<path d=\"m16.852 8.772-.383.923\"></path>",
  _tmpl$6 = "<path d=\"m19.148 3.228.383-.924\"></path>",
  _tmpl$7 = "<path d=\"m19.53 9.696-.382-.924\"></path>",
  _tmpl$8 = "<path d=\"m20.772 4.852.924-.383\"></path>",
  _tmpl$9 = "<path d=\"m20.772 7.148.924.383\"></path>",
  _tmpl$0 = "<path d=\"M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7\"></path>",
  _tmpl$1 = "<path d=\"M8 21h8\"></path>",
  _tmpl$10 = "<circle cx=\"18\" cy=\"6\" r=\"3\"></circle>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideMonitorCog(props) {
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