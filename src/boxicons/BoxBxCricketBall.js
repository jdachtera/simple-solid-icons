import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M19.07 4.93A10 10 0 0 0 4.93 19.07 10 10 0 0 0 19.07 4.93zM6.34 6.34a8 8 0 0 1 8.78-1.71l-.29.3.71.71.52-.53a9.53 9.53 0 0 1 .84.57L5.68 16.9a9.53 9.53 0 0 1-.57-.84l.53-.52-.71-.71-.29.29a8 8 0 0 1 1.7-8.78zm11.32 11.32a8 8 0 0 1-8.78 1.71l.29-.3-.71-.71-.52.53a9.53 9.53 0 0 1-.84-.57L18.32 7.1a9.53 9.53 0 0 1 .57.84l-.53.52.71.71.29-.29a8 8 0 0 1-1.7 8.78zm-6.37-2.12.71.7-1.41 1.42-.71-.66zm2.83-2.83.71.7-1.42 1.42-.7-.71zM17 9.88l.71.71L16.24 12l-.7-.71zm-4.29-1.42-.71-.7 1.41-1.42.71.71zm-2.83 2.83-.71-.7 1.42-1.42.7.71zm-2.83 2.83-.71-.71L7.76 12l.7.71z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: boxicons | License: MIT (<https://github.com/atisawd/boxicons/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function BoxBxCricketBall(props) {
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