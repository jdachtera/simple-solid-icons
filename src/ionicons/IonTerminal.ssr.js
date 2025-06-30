import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M432,32H80A64.07,64.07,0,0,0,16,96V416a64.07,64.07,0,0,0,64,64H432a64.07,64.07,0,0,0,64-64V96A64.07,64.07,0,0,0,432,32ZM96,256a16,16,0,0,1-10-28.49L150.39,176,86,124.49a16,16,0,1,1,20-25l80,64a16,16,0,0,1,0,25l-80,64A16,16,0,0,1,96,256Zm160,0H192a16,16,0,0,1,0-32h64a16,16,0,0,1,0,32Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonTerminal(props) {
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
  }), () => _$ssr(_tmpl$), true);
}