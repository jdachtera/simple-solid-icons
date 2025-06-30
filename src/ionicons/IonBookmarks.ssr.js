import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M400,0H176a64.11,64.11,0,0,0-62,48H342a74,74,0,0,1,74,74V426.89l22,17.6a16,16,0,0,0,19.34.5A16.41,16.41,0,0,0,464,431.57V64A64,64,0,0,0,400,0Z\"></path>",
  _tmpl$2 = "<path d=\"M320,80H112a64,64,0,0,0-64,64V495.62A16.36,16.36,0,0,0,54.6,509a16,16,0,0,0,19.71-.71L216,388.92,357.69,508.24a16,16,0,0,0,19.6.79A16.4,16.4,0,0,0,384,495.59V144A64,64,0,0,0,320,80Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonBookmarks(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 512 512',
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