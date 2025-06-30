import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M9.0002 9.85985L5.96831 12L9.0002 14.1402V9.85985ZM10.9087 17.3234C10.7494 17.549 10.4375 17.6028 10.2119 17.4435L3.07889 12.4085C3.03228 12.3756 2.99164 12.335 2.95874 12.2883C2.7995 12.0627 2.85329 11.7508 3.07889 11.5915L10.2119 6.55648C10.2962 6.49693 10.3969 6.46497 10.5002 6.46497C10.7763 6.46497 11.0002 6.68882 11.0002 6.96497V17.035C11.0002 17.1383 10.9682 17.239 10.9087 17.3234ZM18.0002 14.1402V9.85985L14.9683 12L18.0002 14.1402ZM12.0789 12.4085C12.0323 12.3756 11.9916 12.335 11.9587 12.2883C11.7995 12.0627 11.8533 11.7508 12.0789 11.5915L19.2119 6.55648C19.2962 6.49693 19.3969 6.46497 19.5002 6.46497C19.7763 6.46497 20.0002 6.68882 20.0002 6.96497V17.035C20.0002 17.1383 19.9682 17.239 19.9087 17.3234C19.7494 17.549 19.4375 17.6028 19.2119 17.4435L12.0789 12.4085Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixRewindMiniLine(props) {
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