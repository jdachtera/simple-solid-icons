import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>mic-off</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"mic-off\"><g id=\"mic-off-2\" data-name=\"mic-off\"><path d=\"M10,6a2,2,0,0,1,4,0v5a1,1,0,0,1,0,.16l1.6,1.59A4,4,0,0,0,16,11V6a4,4,0,0,0-7.92-.75L10,7.17Z\"></path><path d=\"M19,11a1,1,0,0,0-2,0,4.86,4.86,0,0,1-.69,2.48L17.78,15A7,7,0,0,0,19,11Z\"></path><path d=\"M12,15l.16,0L8,10.83V11A4,4,0,0,0,12,15Z\"></path><path d=\"M20.71,19.29l-16-16A1,1,0,0,0,3.29,4.71l16,16a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29Z\"></path><path d=\"M15,20H13V17.92a7,7,0,0,0,1.65-.44l-1.6-1.6A4.57,4.57,0,0,1,12,16a5,5,0,0,1-5-5,1,1,0,0,0-2,0,7,7,0,0,0,6,6.92V20H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineMicOffOutline(props) {
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