import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>link-2</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"link-2\"><g id=\"link-2-2\" data-name=\"link-2\"><path d=\"M13.29,9.29l-4,4a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0-1.42-1.42Z\"></path><path d=\"M12.28,17.4,11,18.67a4.2,4.2,0,0,1-5.58.4,4,4,0,0,1-.27-5.93l1.42-1.43a1,1,0,0,0,0-1.42,1,1,0,0,0-1.42,0L3.88,11.57a6.15,6.15,0,0,0-.67,8.07,6.06,6.06,0,0,0,9.07.6l1.42-1.42a1,1,0,0,0-1.42-1.42Z\"></path><path d=\"M19.66,3.22a6.18,6.18,0,0,0-8.13.68L10.45,5a1.09,1.09,0,0,0-.17,1.61,1,1,0,0,0,1.42,0L13,5.3a4.17,4.17,0,0,1,5.57-.4,4,4,0,0,1,.27,5.95l-1.42,1.43a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l1.42-1.42A6.06,6.06,0,0,0,19.66,3.22Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillLink2(props) {
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