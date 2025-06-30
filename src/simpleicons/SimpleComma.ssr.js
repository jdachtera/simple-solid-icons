import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>comma</title>",
  _tmpl$2 = "<path d=\"M6.72682 24c0-.55531-.0434-1.02051.02045-1.46891.0272-.1912.25037-.39595.43237-.51143.88731-.56315 1.85122-1.01275 2.67734-1.65857 2.67584-2.09206 4.26201-4.84612 4.3487-8.42366.02452-1.01583-.34891-1.2696-1.20211-.87389-2.4628 1.1424-5.11119.47263-6.5246-1.65034-1.54137-2.3155-1.32431-5.3984.52253-7.4211 2.359-2.58344 6.24053-2.66074 8.91722-.19346 1.60337 1.47794 2.3652 3.38627 2.5552 5.5569.63691 7.27188-3.01046 13.2657-9.64881 15.89874-.657.26045-1.3307.4744-2.09828.74571\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleComma(props) {
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