import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Polkadot</title>",
  _tmpl$2 = "<path d=\"M12,0c2.39,0,4.328,1.127,4.328,2.517S14.39,5.034,12,5.034,7.672,3.907,7.672,2.517,9.61,0,12,0Zm0,18.966c2.39,0,4.328,1.127,4.328,2.517S14.39,24,12,24s-4.328-1.127-4.328-2.517S9.61,18.966,12,18.966ZM1.606,6C2.8,3.93,4.747,2.816,5.952,3.511s1.212,2.937.017,5.007S2.828,11.7,1.624,11.007.411,8.07,1.606,6Zm16.427,9.483c1.2-2.07,3.139-3.184,4.343-2.489s1.211,2.936.016,5.006-3.14,3.185-4.344,2.49S16.837,17.553,18.033,15.483ZM1.624,12.993c1.205-.7,3.15.419,4.346,2.489s1.187,4.311-.018,5.007S2.8,20.07,1.607,18,.42,13.689,1.624,12.993ZM18.049,3.512c1.2-.695,3.149.419,4.344,2.489s1.188,4.311-.016,5.007-3.148-.42-4.343-2.49S16.846,4.207,18.049,3.512Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimplePolkadot(props) {
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