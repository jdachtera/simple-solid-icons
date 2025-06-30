import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Clarifai</title>",
  _tmpl$2 = "<path d=\"M2.78 14.772A2.768 2.768 0 0 1 0 12.008a2.781 2.781 0 0 1 2.78-2.78 2.765 2.765 0 0 1 2.764 2.764c0 1.52-1.23 2.78-2.764 2.78zM17.119 1.83c-2.05 0-2.142 1.732-5.27 1.732-3.16 0-3.419-1.732-5.287-1.732a2.765 2.765 0 0 0-2.765 2.765 2.775 2.775 0 0 0 2.765 2.764c2.066 0 2.157-1.731 5.286-1.731 3.16 0 3.418 1.731 5.286 1.731A2.765 2.765 0 0 0 19.9 4.595a2.778 2.778 0 0 0-2.78-2.765zm0 14.81c-2.066 0-2.157 1.732-5.286 1.732-3.16 0-3.418-1.731-5.286-1.731a2.765 2.765 0 0 0-2.765 2.764 2.775 2.775 0 0 0 2.765 2.765c2.066 0 2.157-1.732 5.286-1.732 3.16 0 3.418 1.732 5.286 1.732a2.765 2.765 0 0 0 0-5.53zm4.101-7.397c-2.08 0-2.005 1.823-4.617 1.823-2.416-.015-2.446-1.823-4.755-1.823-1.443 0-2.628 1.322-2.628 2.765s1.2 2.764 2.765 2.764c2.08 0 2.005-1.823 4.618-1.823 2.415 0 2.445 1.808 4.77 1.808 1.442 0 2.627-1.322 2.627-2.765 0-1.427-1.2-2.749-2.78-2.749Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleClarifai(props) {
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