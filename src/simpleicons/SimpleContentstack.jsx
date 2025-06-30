import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Contentstack</title><path d="M18.564 10.108a.347.347 0 0 1-.364.368h-6.974a.35.35 0 0 1-.369-.368v-.79a.35.35 0 0 1 .37-.368h6.964a.347.347 0 0 1 .364.369zm3.085 2.29a.347.347 0 0 1-.368.37h-8.59a.343.343 0 0 1-.363-.37v-.807a.342.342 0 0 1 .364-.364h8.514a.346.346 0 0 1 .369.364zm2.35 2.35a.347.347 0 0 1-.37.368h-9.32a.342.342 0 0 1-.364-.368v-.803a.342.342 0 0 1 .364-.37h9.321a.347.347 0 0 1 .368.37zm0 2.352a.347.347 0 0 1-.37.364h-9.32a.343.343 0 0 1-.364-.364v-.807a.342.342 0 0 1 .364-.37h9.321a.347.347 0 0 1 .368.37zm-2.35 2.273a.351.351 0 0 1-.368.37h-8.589a.347.347 0 0 1-.364-.37v-.807a.346.346 0 0 1 .364-.37h8.515a.351.351 0 0 1 .368.37zm-3.085 2.349a.346.346 0 0 1-.364.368h-6.974a.351.351 0 0 1-.369-.368v-.808a.347.347 0 0 1 .37-.365h6.964a.343.343 0 0 1 .364.365zM5.354 3.087a.347.347 0 0 0 .37.364h6.97a.342.342 0 0 0 .367-.365V2.28a.346.346 0 0 0-.368-.369h-6.97a.351.351 0 0 0-.367.37ZM2.35 5.43a.342.342 0 0 0 .364.364h8.514a.346.346 0 0 0 .368-.364v-.807a.351.351 0 0 0-.368-.37H2.712a.346.346 0 0 0-.364.37ZM0 7.778a.342.342 0 0 0 .364.364h9.321a.342.342 0 0 0 .364-.364V6.97a.346.346 0 0 0-.364-.37H.365a.347.347 0 0 0-.364.37Zm0 2.33a.347.347 0 0 0 .364.37h9.321a.346.346 0 0 0 .364-.37v-.79a.346.346 0 0 0-.364-.368H.365A.347.347 0 0 0 0 9.319Zm2.347 2.291a.342.342 0 0 0 .365.368h8.513a.346.346 0 0 0 .37-.368v-.808a.346.346 0 0 0-.37-.364H2.713a.342.342 0 0 0-.365.364zm3.008 2.348a.346.346 0 0 0 .369.368h6.968a.346.346 0 0 0 .37-.368v-.803a.346.346 0 0 0-.37-.37H5.725a.347.347 0 0 0-.37.37z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleContentstack(props) {
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