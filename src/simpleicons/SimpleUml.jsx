import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>UML</title><path d="M10.768 0 7.182 1.604s6.126 2.72 6.852 3.055c.72.335 1.744.947.565 1.629-1.18.682-2.423.477-3.259.09-.835-.384-7.012-3.257-7.012-3.257L.666 4.777s6.4 2.935 7.4 3.417c1.003.482 4.753 1.784 8.48.002 3.727-1.781 3.261-2.577 3.268-2.724.006-.148-.036-.933-.632-1.467-.599-.534-2.378-1.375-3.127-1.73C15.305 1.916 10.77 0 10.77 0ZM.411 5.299v13.215l2.904 1.402v-7.963l1.585 8.6 2.58 1.243 1.66-7.154v7.826l2.916 1.38V10.643L7.629 8.628l-1.403 6.296-1.412-7.598Zm16.76 3.115-4.624 2.315L12.559 24l11.03-5.225-.025-3.613-6.393 2.92Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleUml(props) {
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