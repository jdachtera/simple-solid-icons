import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M4.00098 1.73438C4.17692 1.73438 4.34975 1.7808 4.50201 1.86895L20.5061 11.1345C20.9841 11.4112 21.1473 12.023 20.8705 12.501C20.783 12.6522 20.6574 12.7778 20.5061 12.8654L4.50201 22.1309C4.02405 22.4076 3.41226 22.2445 3.13555 21.7665C3.0474 21.6143 3.00098 21.4414 3.00098 21.2655V2.73438C3.00098 2.18209 3.44869 1.73438 4.00098 1.73438ZM12.2931 13.4132L7.79498 17.9124L13.494 14.6134L12.2931 13.4132ZM4.99998 6.11938V17.8784L10.8791 11.9992L4.99998 6.11938ZM15.284 10.4214L13.7071 11.9992L15.285 13.5764L18.009 11.9999L15.284 10.4214ZM7.79398 6.08537L12.2931 10.5852L13.493 9.38437L7.79398 6.08537Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixGooglePlayLine(props) {
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