import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>LBRY</title>",
  _tmpl$2 = "<path d=\"M23.3493 14.1894l.169-1.0651-1.0315-.1775.0676-.4142 1.4456.245-.2365 1.4795zm.152-5.495v1.1921l-11.7338 7.211-8.8425-4.3367.0169-.6677 8.7918 4.3282 11.1759-6.8644v-.4904L12.3592 3.9773.5917 11.2561v3.2547l11.142 5.5119 11.6322-7.135.33.5074-11.9284 7.3038L0 14.8828v-3.9563L12.3254 3.301z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleLbry(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2)], true);
}