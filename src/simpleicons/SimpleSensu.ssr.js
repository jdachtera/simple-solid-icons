import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Sensu</title>",
  _tmpl$2 = "<path d=\"M24 12L12 0 0 12l12 12 12-12zM12 3.197l4.418 4.418c-1.445-.386-2.93-.586-4.418-.586s-2.974.199-4.418.588L12 3.196zM8.069 16.87c1.19-.658 2.534-1.008 3.931-1.008s2.741.35 3.931 1.008L12 20.804 8.069 16.87zm9.509-1.647c-1.697-1.08-3.636-1.622-5.578-1.622s-3.881.542-5.578 1.622l-3.103-3.101C5.822 10.284 8.834 9.29 12 9.29s6.178.994 8.681 2.832l-3.103 3.101z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleSensu(props) {
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