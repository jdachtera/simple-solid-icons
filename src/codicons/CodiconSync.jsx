import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M2.85352 6.64746L4.85352 8.64746L4.14746 9.35352L3.00488 8.21191C3.11588 10.8709 5.314 13 8 13C9.6739 13 11.2291 12.1683 12.1602 10.7734L12.9922 11.3281C11.8742 13.0011 10.008 14 7.99902 14C4.75907 14 2.11101 11.4181 2.00293 8.20312L0.852539 9.35254L0.145508 8.64551L2.14746 6.64746H2.85352Z"></path><path d="M8 1.99902C11.24 1.99905 13.888 4.58095 13.9961 7.7959L15.1455 6.64551L15.8525 7.35156L13.8525 9.35156H13.1455L11.1455 7.35156L11.8525 6.64453L12.9951 7.78711C12.8841 5.12812 10.686 2.99905 8 2.99902C6.3251 2.99902 4.76989 3.83173 3.83887 5.22559L3.00684 4.66992C4.12484 2.99792 5.991 1.99902 8 1.99902Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: codicons | License: MIT (<https://github.com/microsoft/vscode-codicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function CodiconSync(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 16 16',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  }, props);
  return (() => {
    var _el$ = _$getNextElement(_tmpl$);
    _$spread(_el$, _$mergeProps(merged, {
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
    }), true, true);
    _$runHydrationEvents();
    return _el$;
  })();
}