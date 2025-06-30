import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Brenntag</title>",
  _tmpl$2 = "<path d=\"M19.7305 12.01c-.768.959-1.899 1.8775-3.2745 2.421.828 1.02 1.246 2.156.9445 3.337-.2875 1.1275-1.3655 2.228-2.9 2.228H6.5v-5.999h7c3.86 0 7-3.1395 7-6.9985S17.36 0 13.5 0h-11v8.998h4V3.999h7c1.655 0 3 1.3445 3 2.9995s-1.345 2.9995-3 2.9995h-11V24h12c3.86 0 7-3.1395 7-6.9985 0-1.712-.4815-3.634-1.7695-4.9915\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleBrenntag(props) {
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