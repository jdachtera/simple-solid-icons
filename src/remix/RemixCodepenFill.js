import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M12 10.2018L9.30278 12L12 13.7982L14.6972 12L12 10.2018ZM16.5 10.7982L19.1972 9L13 4.86852V8.46482L16.5 10.7982ZM20 10.8685L18.3028 12L20 13.1315V10.8685ZM16.5 13.2018L13 15.5352V19.1315L19.1972 15L16.5 13.2018ZM11 8.46482V4.86852L4.80278 9L7.5 10.7982L11 8.46482ZM4.80278 15L11 19.1315V15.5352L7.5 13.2018L4.80278 15ZM5.69722 12L4 10.8685V13.1315L5.69722 12ZM2 9C2 8.66565 2.1671 8.35342 2.4453 8.16795L11.4453 2.16795C11.7812 1.94402 12.2188 1.94402 12.5547 2.16795L21.5547 8.16795C21.8329 8.35342 22 8.66565 22 9V15C22 15.3344 21.8329 15.6466 21.5547 15.8321L12.5547 21.8321C12.2188 22.056 11.7812 22.056 11.4453 21.8321L2.4453 15.8321C2.1671 15.6466 2 15.3344 2 15V9Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixCodepenFill(props) {
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