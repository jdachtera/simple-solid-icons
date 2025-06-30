import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M9.97487 8.97487C11.3417 7.60804 11.3417 5.39196 9.97487 4.02513C8.60804 2.65829 6.39196 2.65829 5.02513 4.02513C3.65829 5.39196 3.65829 7.60804 5.02513 8.97487L7.5 11.4497L9.97487 8.97487ZM7.5 14.2782L3.61091 10.3891C1.46303 8.2412 1.46303 4.7588 3.61091 2.61091C5.7588 0.463029 9.2412 0.463029 11.3891 2.61091C13.537 4.7588 13.537 8.2412 11.3891 10.3891L7.5 14.2782ZM7.5 8C6.67157 8 6 7.32843 6 6.5C6 5.67157 6.67157 5 7.5 5C8.32843 5 9 5.67157 9 6.5C9 7.32843 8.32843 8 7.5 8ZM16.5 20.4497L18.9749 17.9749C20.3417 16.608 20.3417 14.392 18.9749 13.0251C17.608 11.6583 15.392 11.6583 14.0251 13.0251C12.6583 14.392 12.6583 16.608 14.0251 17.9749L16.5 20.4497ZM20.3891 19.3891L16.5 23.2782L12.6109 19.3891C10.463 17.2412 10.463 13.7588 12.6109 11.6109C14.7588 9.46303 18.2412 9.46303 20.3891 11.6109C22.537 13.7588 22.537 17.2412 20.3891 19.3891ZM16.5 17C15.6716 17 15 16.3284 15 15.5C15 14.6716 15.6716 14 16.5 14C17.3284 14 18 14.6716 18 15.5C18 16.3284 17.3284 17 16.5 17Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixPinDistanceLine(props) {
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