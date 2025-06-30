import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>GSMArena.com</title>",
  _tmpl$2 = "<path d=\"M20.324 22.992c-.905-.454-12.625-5.27-12.625-5.27a1.275 1.275 0 0 0-.389-.122c-.39-.056-.78.091-1.061.444 0 0-2.672 4.354-3.066 4.948C2.782 23.58 3.2 24 3.726 24h16.38c.644 0 .898-.67.218-1.008ZM19.688 0h-7.743c-.868 0-1.49.28-2.042 1.043L4.05 10.497c-.333.457-.14.985.336 1.185.974.412 2.766.977 3.68 1.388.718.326 1.157.204 1.552-.382l4.092-6.507.49-.005v7.405c0 .924.37 1.279.946 1.54.577.246 4.144 1.773 4.689 1.973.644.246 1.143-.05 1.143-.731V1.289c0-.706-.585-1.289-1.29-1.289Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleGsmarenadotcom(props) {
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