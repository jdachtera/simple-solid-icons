import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M48.17,113.34A32,32,0,0,0,32,141.24V438a32,32,0,0,0,47,28.37c.43-.23.85-.47,1.26-.74l84.14-55.05a8,8,0,0,0,3.63-6.72V46.45a8,8,0,0,0-12.51-6.63Z\"></path>",
  _tmpl$2 = "<path d=\"M212.36,39.31A8,8,0,0,0,200,46V403.56a8,8,0,0,0,3.63,6.72l96,62.42A8,8,0,0,0,312,466V108.67a8,8,0,0,0-3.64-6.73Z\"></path>",
  _tmpl$3 = "<path d=\"M464.53,46.47a31.64,31.64,0,0,0-31.5-.88,12.07,12.07,0,0,0-1.25.74l-84.15,55a8,8,0,0,0-3.63,6.72V465.51a8,8,0,0,0,12.52,6.63l107.07-73.46a32,32,0,0,0,16.41-28v-296A32.76,32.76,0,0,0,464.53,46.47Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonMap(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3)], true);
}