import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>SecurityScorecard</title><path d="M16.3696 2.5006 12.0006 5 7.6303 7.5006v-5L12.0006 0Zm6.1177 3.499.0028 4.986-8.7282-4.9929 4.3564-2.4923Zm-4.369 9.5085-.0014 4.9972 4.3774-2.5007-.0028-5.018-4.3732-2.502zM7.6274 21.502 12.0006 24l4.369-2.4952v-4.9972zM7.6303 9.5v5.0014l4.3703 2.4992 4.369-2.4937V9.5001l-4.369-2.4993Zm-6.1248 8.5044.0028-5.0055 8.7464 5.0027-4.376 2.5008Zm4.376-14.504L1.5125 6.001l-.0028 4.9985 4.3718 2.502z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleSecurityscorecard(props) {
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