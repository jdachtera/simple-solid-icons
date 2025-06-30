import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Game Developer</title>",
  _tmpl$2 = "<path d=\"M23.955 11.956a.84.84 0 0 0-.837-.796H17.37V1.9c0-.019 0-.037-.002-.055a.84.84 0 0 0-.494-.806A11.89 11.89 0 0 0 12 0a11.89 11.89 0 0 0-8.454 3.515A11.983 11.983 0 0 0 .043 12c0 1.62.316 3.192.94 4.672a11.928 11.928 0 0 0 2.563 3.813 11.96 11.96 0 0 0 3.799 2.572C8.82 23.683 10.386 24 12 24c1.614 0 3.18-.317 4.655-.943a11.905 11.905 0 0 0 3.799-2.572A11.983 11.983 0 0 0 23.957 12c0-.014 0-.03-.002-.044Zm-4.685 7.343a10.24 10.24 0 0 1-7.272 3.022 10.228 10.228 0 0 1-7.273-3.022A10.305 10.305 0 0 1 1.714 12a10.312 10.312 0 0 1 6.281-9.511 10.212 10.212 0 0 1 4.003-.809 10.197 10.197 0 0 1 3.694.688v8.792h-3.765a.84.84 0 0 0 0 1.68h3.729a3.78 3.78 0 0 1-1.205 2.012 3.75 3.75 0 0 1-2.458.92A3.77 3.77 0 0 1 8.235 12a3.768 3.768 0 0 1 3.758-3.772.84.84 0 0 0 0-1.68 5.385 5.385 0 0 0-3.841 1.597A5.429 5.429 0 0 0 6.559 12c0 1.457.564 2.825 1.591 3.855a5.384 5.384 0 0 0 3.841 1.597 5.431 5.431 0 0 0 3.555-1.329 5.46 5.46 0 0 0 1.813-3.281h4.89a10.292 10.292 0 0 1-2.979 6.457Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleGamedeveloper(props) {
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