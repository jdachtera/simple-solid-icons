import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>mail.com</title><path d="M18.017-.0085H0V15.66c0 1.4057.96 2.5714 2.2457 2.9143L24 24.0085V5.9915c.0172-3.3086-2.6743-6-5.9828-6zm3 15.6685H18V8.7857c0-.6685-.223-2.2285-2.2115-2.2285-1.32 0-2.28.9085-2.28 2.2285V15.66h-3.0171V8.7857c0-.6685-.2057-2.2285-2.1943-2.2285-1.3543 0-2.28.9085-2.28 2.2285V15.66H3V3.6086h5.297c1.5943 0 2.8971.6343 3.7371 1.6629.8915-1.0286 2.2115-1.6629 3.7372-1.6629 3.2914 0 5.2285 2.1771 5.2285 5.2457l.0172 6.8057z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleMaildotcom(props) {
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