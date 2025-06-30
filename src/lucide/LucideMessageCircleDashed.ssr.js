import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1\"></path>",
  _tmpl$2 = "<path d=\"M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1\"></path>",
  _tmpl$3 = "<path d=\"M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5\"></path>",
  _tmpl$4 = "<path d=\"M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1\"></path>",
  _tmpl$5 = "<path d=\"M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1\"></path>",
  _tmpl$6 = "<path d=\"M3.5 17.5 2 22l4.5-1.5\"></path>",
  _tmpl$7 = "<path d=\"M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5\"></path>",
  _tmpl$8 = "<path d=\"M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideMessageCircleDashed(props) {
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