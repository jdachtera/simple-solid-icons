import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>SparkFun</title><path d="M16.307 5.476c-.756.134-1.975-.615-2.59-1.362-.755-.922-.66-1.647-.071-2.29.883-.978 2.396-.6 2.396-.6s-2.772-2.432-5.658-.44c-2.571 1.77-1.833 4.183.487 6.288 2.09 1.902.42 3.988-1.686 3.717-1.443-.184-2.034-1.343-1.687-2.054.298-.608 1.335-.982 1.335-.982s-1.19-.484-2.592.044c-1.259.474-2.297 1.515-2.214 4.12V24s1.301-1.604 2.83-3.236c1.714-1.84 2.495-3.084 4.254-2.938 3.328.205 5.735-1.273 7.371-3.645 3.141-4.563.67-9.68-1.43-10.343 0 0 .34 1.438-.745 1.638z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleSparkfun(props) {
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