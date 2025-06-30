import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z\"></path>",
  _tmpl$2 = "<path d=\"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z\"></path>",
  _tmpl$3 = "<path d=\"M12 2v2\"></path>",
  _tmpl$4 = "<path d=\"M12 22v-2\"></path>",
  _tmpl$5 = "<path d=\"m17 20.66-1-1.73\"></path>",
  _tmpl$6 = "<path d=\"M11 10.27 7 3.34\"></path>",
  _tmpl$7 = "<path d=\"m20.66 17-1.73-1\"></path>",
  _tmpl$8 = "<path d=\"m3.34 7 1.73 1\"></path>",
  _tmpl$9 = "<path d=\"M14 12h8\"></path>",
  _tmpl$0 = "<path d=\"M2 12h2\"></path>",
  _tmpl$1 = "<path d=\"m20.66 7-1.73 1\"></path>",
  _tmpl$10 = "<path d=\"m3.34 17 1.73-1\"></path>",
  _tmpl$11 = "<path d=\"m17 3.34-1 1.73\"></path>",
  _tmpl$12 = "<path d=\"m11 13.73-4 6.93\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideCog(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7), _$ssr(_tmpl$8), _$ssr(_tmpl$9), _$ssr(_tmpl$0), _$ssr(_tmpl$1), _$ssr(_tmpl$10), _$ssr(_tmpl$11), _$ssr(_tmpl$12)], true);
}