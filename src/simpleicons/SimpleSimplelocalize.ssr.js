import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>SimpleLocalize</title>",
  _tmpl$2 = "<path d=\"M9.62 1.5q1.63 0 3.017.834a6.1 6.1 0 0 1 2.175 2.197 3.5 3.5 0 0 1 1.988-.606q1.5 0 2.55 1.06 1.05 1.062 1.05 2.577a4 4 0 0 1-.225 1.327q1.65.34 2.738 1.667Q24 11.882 24 13.625q0 1.326-.637 2.444a4.7 4.7 0 0 1-1.666 1.715c-1.966 1.409-6.07 3.414-11.223 4.683-1.866.459 3.785-3.98.853-3.98q-.15 0-.24-.011L5.4 18.475a5.17 5.17 0 0 1-2.7-.74 5.53 5.53 0 0 1-1.969-1.99A5.3 5.3 0 0 1 0 13.02q0-1.78 1.013-3.183T3.6 7.866v-.303a6 6 0 0 1 .806-3.032A6 6 0 0 1 6.6 2.315 5.86 5.86 0 0 1 9.62 1.5\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleSimplelocalize(props) {
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