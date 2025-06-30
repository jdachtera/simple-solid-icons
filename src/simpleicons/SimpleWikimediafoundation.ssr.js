import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Wikimedia Foundation</title>",
  _tmpl$2 = "<path d=\"M20.074 3.126C22.486 5.321 24 8.485 24 12c0 6.623-5.377 12-12 12S0 18.623 0 12c0-3.515 1.514-6.679 3.926-8.874l2.265 2.265C4.358 7.005 3.2 9.368 3.2 12c0 4.857 3.943 8.8 8.8 8.8s8.8-3.943 8.8-8.8c0-2.632-1.158-4.995-2.991-6.609zm-3.399 3.399C18.22 7.846 19.2 9.81 19.2 12c0 3.703-2.802 6.757-6.4 7.156V10.4zM11.2 19.156C7.602 18.757 4.8 15.703 4.8 12c0-2.19.98-4.154 2.525-5.475L11.2 10.4zM12 0c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleWikimediafoundation(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2)], true);
}