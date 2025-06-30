import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>VoIP.ms</title>",
  _tmpl$2 = "<path d=\"M17.51 2.372c-.946 0-1.877.24-2.71.696a5.721 5.721 0 0 0-2.055 1.92l-5.177 8.047c-.928 1.446-3.076 1.656-3.92.943l4.051 6.343c.258.402.611.731 1.027.96a2.808 2.808 0 0 0 2.706 0 2.85 2.85 0 0 0 1.025-.96L24 2.371ZM0 8.309l2.228 3.521s.89 1.302 2.402 1.302c1.513 0 2.378-1.302 2.378-1.302l2.23-3.52Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleVoipdotms(props) {
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