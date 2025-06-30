import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Bricks</title><path d="m7.578 0 .405.253v7.038a8.416 8.416 0 0 1 4.742-1.418c2.498 0 4.569.872 6.211 2.616 1.621 1.745 2.431 3.894 2.431 6.448 0 2.565-.816 4.714-2.448 6.447C17.277 23.128 15.212 24 12.725 24c-2.171 0-4.028-.776-5.569-2.329v1.907H2.633V.557L7.578 0Zm4.287 10.447c-1.193 0-2.189.405-2.988 1.215-.799.833-1.198 1.925-1.198 3.275 0 1.35.399 2.436 1.198 3.257.788.822 1.784 1.232 2.988 1.232 1.271 0 2.301-.427 3.088-1.282.777-.844 1.165-1.913 1.165-3.207 0-1.294-.394-2.369-1.182-3.224-.787-.844-1.811-1.266-3.071-1.266Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleBricks(props) {
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