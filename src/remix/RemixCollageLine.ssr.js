import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M20 3.10669C20.5523 3.10669 21 3.5544 21 4.10669V20.1067C21 20.659 20.5523 21.1067 20 21.1067H4C3.44772 21.1067 3 20.659 3 20.1067V4.10669C3 3.5544 3.44772 3.10669 4 3.10669H20ZM11.1888 13.2651L5 14.3557V19.1067H12.218L11.1888 13.2651ZM19 5.10669H11.781L14.249 19.1067H19V5.10669ZM9.75 5.10669H5V12.3247L10.8415 11.2955L9.75 5.10669Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixCollageLine(props) {
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
  }), () => _$ssr(_tmpl$), true);
}