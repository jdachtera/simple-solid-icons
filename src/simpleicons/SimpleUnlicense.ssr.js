import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Unlicense</title>",
  _tmpl$2 = "<path d=\"M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12ZM12 2.449A9.551 9.551 0 0 0 2.449 12c0 2.09.672 4.024 1.811 5.597L17.597 4.26A9.508 9.508 0 0 0 12 2.449Zm0 19.102A9.551 9.551 0 0 0 21.551 12c0-2.09-.672-4.024-1.811-5.597L6.403 19.74A9.508 9.508 0 0 0 12 21.551Zm0-2.816a6.704 6.704 0 0 1-3.34-.885l2.32-2.32a3.674 3.674 0 0 0 4.388-2.06h3.206A6.737 6.737 0 0 1 12 18.734ZM5.265 12A6.735 6.735 0 0 1 15.34 6.15l-2.32 2.32a3.673 3.673 0 0 0-4.55 4.55l-2.32 2.32A6.704 6.704 0 0 1 5.265 12Zm13.28-1.592h-2.443L17.85 8.66c.309.54.545 1.128.695 1.748Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleUnlicense(props) {
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