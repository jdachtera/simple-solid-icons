import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Camunda</title>",
  _tmpl$2 = "<path d=\"M3.327 0A3.327 3.327 0 0 0 0 3.326v17.348A3.327 3.327 0 0 0 3.327 24h17.347A3.326 3.326 0 0 0 24 20.674V3.326A3.326 3.326 0 0 0 20.674 0H3.327Zm8.687 3.307c1.875 0 2.84 1.105 2.84 3.049v1.175H13.05V6.23c0-.867-.392-1.203-.994-1.203-.615-.014-.993.322-.993 1.189v6.56c0 .867.392 1.175.993 1.175.616 0 .994-.308.994-1.175v-1.734h1.804v1.608c-.014 1.945-.979 3.049-2.854 3.049-1.874 0-2.839-1.119-2.839-3.035V6.356c.014-1.944.979-3.049 2.853-3.049ZM9.161 17.476h5.693v3.217H9.161v-3.217Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleCamunda(props) {
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