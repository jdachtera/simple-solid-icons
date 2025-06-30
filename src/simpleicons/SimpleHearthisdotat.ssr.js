import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>hearthis.at</title>",
  _tmpl$2 = "<path d=\"M20.485 3.515C15.799-1.17 8.2-1.17 3.515 3.515c-4.687 4.686-4.687 12.285 0 16.97 4.685 4.686 12.284 4.686 16.97 0 4.687-4.685 4.687-12.284 0-16.97zm-5.81 14.433c-.252.252-1.25.562-1.25-.012 0-.573-.157-3.089-2.028-4.958-1.88-1.88-4.55-2.192-5.056-2.192-.506 0-.331-1-.078-1.252.253-.253.558-.15 1.064-.15 0 0 3.445.464 5.326 2.345 1.868 1.869 2.173 5.153 2.173 5.153 0 .463.102.813-.15 1.066zm4.022-.509c-.36.36-1.786.803-1.786-.015 0-.82-.224-4.41-2.893-7.079C11.335 7.662 7.524 7.217 6.8 7.217c-.723 0-.473-1.426-.113-1.787.361-.36.799-.214 1.52-.214 0 0 4.918.663 7.603 3.348 2.666 2.667 3.1 7.356 3.1 7.356 0 .658.147 1.158-.214 1.52z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleHearthisdotat(props) {
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