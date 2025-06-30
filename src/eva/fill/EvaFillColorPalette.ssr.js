import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>color-palette</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"color-palette\"><g id=\"color-palette-2\" data-name=\"color-palette\"><path d=\"M19.54,5.08A10.61,10.61,0,0,0,11.91,2h0a10,10,0,0,0-.05,20h0a2.58,2.58,0,0,0,2.53-1.89,2.52,2.52,0,0,0-.57-2.28.5.5,0,0,1,.37-.83h1.65A6.15,6.15,0,0,0,22,11.33,8.48,8.48,0,0,0,19.54,5.08ZM6.84,14.74a1.5,1.5,0,1,1,.4-2.08A1.49,1.49,0,0,1,6.84,14.74ZM8.3,9.25a1.5,1.5,0,1,1-.55-2A1.5,1.5,0,0,1,8.3,9.25ZM11,7a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,11,7Zm5.75.8a1.5,1.5,0,1,1,.55-2A1.5,1.5,0,0,1,16.75,7.8Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillColorPalette(props) {
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