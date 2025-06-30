import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>shield-off</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"shield-off\"><g id=\"shield-off-2\" data-name=\"shield-off\"><path d=\"M4.71,3.29A1,1,0,0,0,3.29,4.71l16,16a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z\"></path><path d=\"M12.3,19.68l-.3.17-.3-.17A13.15,13.15,0,0,1,5,8.23V8.09L5.16,8,3.73,6.56A2,2,0,0,0,3,8.09v.14a15.17,15.17,0,0,0,7.72,13.2l.3.17a2,2,0,0,0,2,0l.3-.17a15.22,15.22,0,0,0,3-2.27l-1.42-1.42A12.56,12.56,0,0,1,12.3,19.68Z\"></path><path d=\"M20,6.34,13,2.4a2,2,0,0,0-2,0L7.32,4.49,8.78,6,12,4.15l7,3.94v.14a13,13,0,0,1-1.63,6.31L18.84,16A15.08,15.08,0,0,0,21,8.23V8.09A2,2,0,0,0,20,6.34Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineShieldOffOutline(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3)], true);
}