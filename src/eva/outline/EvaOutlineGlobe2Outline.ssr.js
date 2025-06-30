import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>globe-2</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"globe-2\"><g id=\"globe-2-2\" data-name=\"globe-2\"><path d=\"M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,2a8.19,8.19,0,0,1,1.79.21,2.61,2.61,0,0,1-.78,1c-.22.17-.46.31-.7.46a4.56,4.56,0,0,0-1.85,1.67,6.49,6.49,0,0,0-.62,3.3c0,1.36,0,2.16-.95,2.87-1.37,1.07-3.46.47-4.76-.07A8.33,8.33,0,0,1,4,12,8,8,0,0,1,12,4ZM5,15.8a8.42,8.42,0,0,0,2,.27,5,5,0,0,0,3.14-1c1.71-1.34,1.71-3.06,1.71-4.44a4.76,4.76,0,0,1,.37-2.34,2.86,2.86,0,0,1,1.12-.91,9.75,9.75,0,0,0,.92-.61A4.55,4.55,0,0,0,15.66,4.9,8,8,0,0,1,19,8.12c-1.43.2-3.46.67-3.86,2.53A7,7,0,0,0,15,12a2.93,2.93,0,0,1-.29,1.47l-.1.17c-.65,1.08-1.38,2.31-.39,4,.12.21.25.41.38.61a2.29,2.29,0,0,1,.52,1.08A7.89,7.89,0,0,1,12,20,8,8,0,0,1,5,15.8Zm11.93,2.52a6.79,6.79,0,0,0-.63-1.14c-.11-.16-.22-.32-.32-.49-.39-.68-.25-1,.38-2l.1-.17A4.77,4.77,0,0,0,17,12.09a5.42,5.42,0,0,1,.09-1c.16-.73,1.71-.93,2.67-1a7.94,7.94,0,0,1-2.86,8.28Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineGlobe2Outline(props) {
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