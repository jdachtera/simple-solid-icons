import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Softpedia</title>",
  _tmpl$2 = "<path d=\"M1.88 18.093V24c4.526 0 9.959-.326 13.765-1.628a14.698 14.698 0 0 0 2.708-1.23c1.255-.752 2.208-1.668 2.844-2.763.317-.533.559-1.107.725-1.709l.197-1.723c0-.63-.09-1.23-.257-1.819a6.72 6.72 0 0 0-.696-1.531c-.484-.78-1.165-1.45-2.012-2.024a12.187 12.187 0 0 0-1.95-.999c-1.722-.642-4.38-1.295-5.356-1.654-.882-.294-1.784-.738-1.784-1.012H20.59V0H10.11C7.522 0 5.677 1.148 4.573 3.46c-1.18 2.461-.741 4.704 1.286 6.714.56.561 1.24 1.053 2.042 1.477.862.452 2.072.903 3.615 1.34 1.664.493 2.465.712 2.374.684.56.178 1 .342 1.332.493l.62.328c.272.191.332.506.18.957-.165.22-.437.452-.8.67-.938.574-2.375 1.026-4.311 1.34-2.39.424-5.4.63-9.03.63z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleSoftpedia(props) {
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