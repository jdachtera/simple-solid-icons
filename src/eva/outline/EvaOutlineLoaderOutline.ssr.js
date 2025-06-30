import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>loader</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"loader\"><g id=\"loader-2\" data-name=\"loader\"><path d=\"M12,2a1,1,0,0,0-1,1V5a1,1,0,0,0,2,0V3A1,1,0,0,0,12,2Z\"></path><path d=\"M21,11H19a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z\"></path><path d=\"M6,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H5A1,1,0,0,0,6,12Z\"></path><path d=\"M6.22,5A1,1,0,0,0,4.83,6.47L6.27,7.86A1,1,0,0,0,7,8.14a1,1,0,0,0,.72-.31,1,1,0,0,0,0-1.41Z\"></path><path d=\"M17,8.14a1,1,0,0,0,.69-.28l1.44-1.39A1,1,0,0,0,17.78,5L16.34,6.42a1,1,0,0,0,0,1.41A1,1,0,0,0,17,8.14Z\"></path><path d=\"M12,18a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V19A1,1,0,0,0,12,18Z\"></path><path d=\"M17.73,16.14a1,1,0,0,0-1.39,1.44L17.78,19a1,1,0,0,0,.69.28,1,1,0,0,0,.72-.3,1,1,0,0,0,0-1.42Z\"></path><path d=\"M6.27,16.14,4.83,17.53a1,1,0,0,0,0,1.42,1,1,0,0,0,.72.3A1,1,0,0,0,6.22,19l1.44-1.39a1,1,0,0,0-1.39-1.44Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineLoaderOutline(props) {
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