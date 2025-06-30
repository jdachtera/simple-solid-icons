import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M8.28767 15.0378C10.3379 12.9875 13.662 12.9875 15.7123 15.0378M5.10569 11.8558C8.9133 8.04815 15.0867 8.04815 18.8943 11.8558M1.92371 8.67373C7.48868 3.10876 16.5113 3.10876 22.0762 8.67373M12.5303 18.2197L12 18.7501L11.4696 18.2197C11.7625 17.9268 12.2374 17.9268 12.5303 18.2197Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: heroicons | License: MIT (<https://github.com/tailwindlabs/heroicons/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function HeroWifi(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'none',
    stroke: 'currentColor',
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