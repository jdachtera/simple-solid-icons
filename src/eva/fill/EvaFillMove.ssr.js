import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>move</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"move\"><g id=\"move-2\" data-name=\"move\"><path d=\"M21.71,11.31l-3-3a1,1,0,0,0-1.42,1.42L18.58,11H13V5.41l1.29,1.3A1,1,0,0,0,15,7a1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42l-3-3A1,1,0,0,0,12,2a1,1,0,0,0-.7.29l-3,3A1,1,0,0,0,9.71,6.71L11,5.42V11H5.41l1.3-1.29A1,1,0,0,0,5.29,8.29l-3,3A1,1,0,0,0,2,12a1,1,0,0,0,.29.71l3,3A1,1,0,0,0,6,16a1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42L5.42,13H11v5.59l-1.29-1.3a1,1,0,0,0-1.42,1.42l3,3A1,1,0,0,0,12,22h0a1,1,0,0,0,.7-.29l3-3a1,1,0,0,0-1.42-1.42L13,18.58V13h5.59l-1.3,1.29a1,1,0,0,0,0,1.42A1,1,0,0,0,18,16a1,1,0,0,0,.71-.29l3-3A1,1,0,0,0,22,12,1,1,0,0,0,21.71,11.31Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillMove(props) {
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