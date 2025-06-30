import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Rapid</title>",
  _tmpl$2 = "<path d=\"M16.028 15.798c-.212-.065-.228-.359.017-.457 4.216-1.993 3.938-6.519 3.938-6.519C19.967 4.232 16.6-.016 11.158 0 5.112.033 1.468 4.787 1.5 10.407 1.55 20.26 9.067 24.017 11.42 24l-.016-3.905c0-.62 0-1.11.375-1.11 0 0 2.42 2.434 5.116 2.417 4.183-.016 5.605-3.529 5.605-3.529zm-4.837-3.006a3.86 3.86 0 0 1-3.89-3.855 3.86 3.86 0 0 1 3.857-3.889 3.86 3.86 0 0 1 3.89 3.856c0 2.14-1.716 3.888-3.857 3.888z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleRapid(props) {
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