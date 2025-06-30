import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>MediaPipe</title>",
  _tmpl$2 = "<path d=\"M2.182 0C1 0 .037.94.002 2.114L0 2.182v6.545a2.182 2.182 0 0 0 4.364 0V2.182A2.182 2.182 0 0 0 2.182 0Zm6.545 0c-1.182 0-2.145.94-2.18 2.114l-.002.068v13.09a2.182 2.182 0 0 0 4.364 0V2.183A2.182 2.182 0 0 0 8.727 0Zm6.546 0a2.182 2.182 0 0 0-2.182 2.182 2.182 2.182 0 0 0 2.182 2.182 2.182 2.182 0 0 0 2.182-2.182A2.182 2.182 0 0 0 15.273 0Zm6.545 0c-1.182 0-2.145.94-2.18 2.114l-.002.068v19.636a2.182 2.182 0 0 0 4.364 0V2.182A2.182 2.182 0 0 0 21.818 0Zm-6.545 6.545c-1.183 0-2.145.94-2.181 2.114l-.001.068v13.091a2.182 2.182 0 0 0 4.364 0V8.728a2.182 2.182 0 0 0-2.182-2.183zM2.182 13.091c-1.182 0-2.145.94-2.18 2.114L0 15.273v6.545a2.182 2.182 0 0 0 4.364 0v-6.545a2.182 2.182 0 0 0-2.182-2.182zm6.545 6.545a2.182 2.182 0 0 0-2.182 2.182A2.182 2.182 0 0 0 8.727 24a2.182 2.182 0 0 0 2.182-2.182 2.182 2.182 0 0 0-2.182-2.182Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleMediapipe(props) {
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