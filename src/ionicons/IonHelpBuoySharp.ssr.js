import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M256,32C132.29,32,32,132.29,32,256S132.29,480,256,480,480,379.71,480,256,379.71,32,256,32ZM192,256a64,64,0,1,1,64,64A64,64,0,0,1,192,256Zm237.24-62.29L342.91,199a104.86,104.86,0,0,0-29.86-29.86l5.24-86.33a185,185,0,0,1,111,111ZM125.89,125.89a183.44,183.44,0,0,1,67.82-43.13L199,169.09A104.86,104.86,0,0,0,169.09,199l-86.33-5.24A183.44,183.44,0,0,1,125.89,125.89ZM82.76,318.29l86.33-5.24A104.86,104.86,0,0,0,199,342.91l-5.24,86.33A185,185,0,0,1,82.76,318.29Zm303.35,67.82a183.44,183.44,0,0,1-67.82,43.13l-5.24-86.33a104.86,104.86,0,0,0,29.86-29.86l86.33,5.24A183.44,183.44,0,0,1,386.11,386.11Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonHelpBuoySharp(props) {
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