import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Edge Impulse</title>",
  _tmpl$2 = "<path d=\"M16.008 10.287h4.51l1.348 3.53h-5.858c-.979 0-1.772-.79-1.772-1.766s.793-1.766 1.772-1.766v.002ZM.677 12.049a1.77 1.77 0 0 1 1.773-1.766h8.597a1.77 1.77 0 0 1 1.772 1.766c0 .976-.793 1.766-1.772 1.766H2.45c-.98 0-1.773-.79-1.773-1.766ZM24 19.613H4.448a2.515 2.515 0 0 1-1.93.899A2.514 2.514 0 0 1 0 18.002a2.514 2.514 0 0 1 2.518-2.509c.775 0 1.467.351 1.93.899h18.321L24 19.613ZM19.594 7.655H4.404a2.51 2.51 0 0 1-1.886.852A2.514 2.514 0 0 1 0 5.998a2.514 2.514 0 0 1 2.518-2.51c.797 0 1.506.371 1.967.946h13.878l1.231 3.221Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleEdgeimpulse(props) {
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