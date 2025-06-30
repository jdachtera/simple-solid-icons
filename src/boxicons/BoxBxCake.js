import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M19 5h-6V2h-2v3H5C3.346 5 2 6.346 2 8v10c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.654-1.346-3-3-3zM5 7h14a1 1 0 0 1 1 1l.001 3.12c-.896.228-1.469.734-1.916 1.132-.507.45-.842.748-1.588.748-.745 0-1.08-.298-1.587-.747-.595-.529-1.409-1.253-2.915-1.253-1.505 0-2.319.724-2.914 1.253-.507.45-.841.747-1.586.747-.743 0-1.077-.297-1.582-.747-.447-.398-1.018-.905-1.913-1.133V8a1 1 0 0 1 1-1zM4 18v-4.714c.191.123.374.274.583.461C5.178 14.276 5.991 15 7.495 15c1.505 0 2.319-.724 2.914-1.253.507-.45.841-.747 1.586-.747s1.08.298 1.587.747c.595.529 1.409 1.253 2.915 1.253s2.321-.724 2.916-1.253c.211-.188.395-.34.588-.464L20.002 18H4z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: boxicons | License: MIT (<https://github.com/atisawd/boxicons/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function BoxBxCake(props) {
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