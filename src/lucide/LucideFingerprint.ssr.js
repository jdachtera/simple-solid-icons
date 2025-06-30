import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4\"></path>",
  _tmpl$2 = "<path d=\"M14 13.12c0 2.38 0 6.38-1 8.88\"></path>",
  _tmpl$3 = "<path d=\"M17.29 21.02c.12-.6.43-2.3.5-3.02\"></path>",
  _tmpl$4 = "<path d=\"M2 12a10 10 0 0 1 18-6\"></path>",
  _tmpl$5 = "<path d=\"M2 16h.01\"></path>",
  _tmpl$6 = "<path d=\"M21.8 16c.2-2 .131-5.354 0-6\"></path>",
  _tmpl$7 = "<path d=\"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2\"></path>",
  _tmpl$8 = "<path d=\"M8.65 22c.21-.66.45-1.32.57-2\"></path>",
  _tmpl$9 = "<path d=\"M9 6.8a6 6 0 0 1 9 5.2v2\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideFingerprint(props) {
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