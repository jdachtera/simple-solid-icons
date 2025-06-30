import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M313.8,303.9,469,32H365L209.4,303.8a1.35,1.35,0,0,0,0,1.7l98.9,173.8c.4.7.8.7,1.6.7H413L313.7,305.3A1.74,1.74,0,0,1,313.8,303.9Z\"></path>",
  _tmpl$2 = "<path d=\"M221.9,216.2,163,113a2,2,0,0,0-2-1H65l58.9,104.4a1.13,1.13,0,0,1,.1.8L43,352h96.8a1.54,1.54,0,0,0,1.6-.9l80.5-133.7A2.44,2.44,0,0,0,221.9,216.2Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonLogoXing(props) {
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