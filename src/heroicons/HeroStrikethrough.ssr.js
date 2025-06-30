import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M11.9997 12.0002C11.894 11.976 11.7882 11.9497 11.6822 11.9213C10.097 11.4966 8.77773 10.6741 7.92138 9.68475C7.04857 8.67637 6.65666 7.49462 6.95428 6.38385C7.54391 4.18325 10.6167 3.09459 13.8174 3.95226C14.8398 4.22622 15.7516 4.66562 16.4999 5.20855M6.42133 17.8115C7.27768 18.8009 8.59697 19.6233 10.1821 20.0481C13.3829 20.9058 16.4557 19.8171 17.0453 17.6165C17.2777 16.7489 17.0895 15.838 16.5801 15.0003M3.75 12.0003H20.2499\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: heroicons | License: MIT (<https://github.com/tailwindlabs/heroicons/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function HeroStrikethrough(props) {
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