import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M414.56,94.92V80a16,16,0,0,0-16-16H113.44a16,16,0,0,0-16,16V94.92c-1.46,11.37-9.65,90.74,36.93,144.69,24.87,28.8,60.36,44.85,105.63,47.86V416H160a16,16,0,0,0,0,32H352a16,16,0,0,0,0-32H272V287.47c45.27-3,80.76-19.06,105.63-47.86C424.21,185.66,416,106.29,414.56,94.92Zm-285.3,3.41a15.14,15.14,0,0,0,.18-2.33H382.56a15.14,15.14,0,0,0,.18,2.33,201.91,201.91,0,0,1,0,45.67H129.32A204.29,204.29,0,0,1,129.26,98.33Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonWine(props) {
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