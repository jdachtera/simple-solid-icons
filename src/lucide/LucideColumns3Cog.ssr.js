import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M10.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5\"></path>",
  _tmpl$2 = "<path d=\"m14.3 19.6 1-.4\"></path>",
  _tmpl$3 = "<path d=\"M15 3v7.5\"></path>",
  _tmpl$4 = "<path d=\"m15.2 16.9-.9-.3\"></path>",
  _tmpl$5 = "<path d=\"m16.6 21.7.3-.9\"></path>",
  _tmpl$6 = "<path d=\"m16.8 15.3-.4-1\"></path>",
  _tmpl$7 = "<path d=\"m19.1 15.2.3-.9\"></path>",
  _tmpl$8 = "<path d=\"m19.6 21.7-.4-1\"></path>",
  _tmpl$9 = "<path d=\"m20.7 16.8 1-.4\"></path>",
  _tmpl$0 = "<path d=\"m21.7 19.4-.9-.3\"></path>",
  _tmpl$1 = "<path d=\"M9 3v18\"></path>",
  _tmpl$10 = "<circle cx=\"18\" cy=\"18\" r=\"3\"></circle>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideColumns3Cog(props) {
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