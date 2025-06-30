import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Lodash</title><path d="m0 20.253h24v2.542h-24zm18.061-15.041.223.031c1.933-.071 3.885 1.006 4.882 2.674.844 1.566.976 3.458.712 5.187-.204 1.657-1.149 3.234-2.644 4.027-2.177 1.139-5.085 1.017-7.017-.59-1.994-1.942-2.461-5.136-1.444-7.678.711-2.207 3-3.661 5.288-3.63zm.234 1.8h-.183c-1.424-.03-2.777.915-3.285 2.237-.732 1.831-.732 4.17.691 5.695 1.17 1.434 3.458 1.597 4.882.438 1.525-1.312 1.83-3.59 1.322-5.451-.275-1.648-1.78-2.929-3.458-2.929zm-18.295-5.807h2.237v14.847h8.848v1.831h-11.085z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleLodash(props) {
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