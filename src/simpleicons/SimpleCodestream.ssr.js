import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>CodeStream</title>",
  _tmpl$2 = "<path d=\"M10.5408 18.2457a6.4596 6.4596 0 0 1 0-12.5804V1.2199A.4315.4315 0 0 0 9.795.9261l-9.36 9.9713a1.61 1.61 0 0 0 0 2.2011l9.36 9.9754a.4315.4315 0 0 0 .7463-.2954zm2.9184 0a6.4596 6.4596 0 0 0 0-12.5804V1.2199a.4315.4315 0 0 1 .7463-.2938l9.3596 9.9713a1.61 1.61 0 0 1 0 2.2011l-9.3596 9.9754a.4315.4315 0 0 1-.7463-.2954zm2.2636-6.2902a3.7276 3.7307 0 0 1-3.7277 3.7307 3.7276 3.7307 0 0 1-3.7276-3.7307 3.7276 3.7307 0 0 1 3.7276-3.7307 3.7276 3.7307 0 0 1 3.7277 3.7307z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleCodestream(props) {
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