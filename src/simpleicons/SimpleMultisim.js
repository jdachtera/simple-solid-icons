import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Multisim</title><path d="M20.3636 5.7778c-.1616.3232-.5656.5656-.9697.5656-.6464 0-1.1313-.4848-1.1313-1.1313s.4849-1.1313 1.1313-1.1313c.404 0 .7273.2424.9697.5657h3.5556V.1212H0v2.7475h15.0303c.1616-.3232.5657-.5657.9697-.5657.6465 0 1.1313.4849 1.1313 1.1313S16.6465 4.5657 16 4.5657c-.404 0-.7273-.2425-.9697-.5657H0v6.5455h2.101V6.505h10.586c.1616-.3232.5656-.5656.9697-.5656.6464 0 1.1313.4848 1.1313 1.1313s-.485 1.1313-1.1314 1.1313c-.404 0-.7273-.2424-.9697-.5656H3.313v3.0707h11.798c.1616-.3233.5657-.5657.9697-.5657.6465 0 1.1313.4849 1.1313 1.1313s-.4848 1.1313-1.1313 1.1313c-.404 0-.7273-.2424-.9697-.5656H0v3.0707h6.5455c.1616-.3232.5656-.5657.9697-.5657.6464 0 1.1313.4849 1.1313 1.1313 0 .6465-.4849 1.1314-1.1313 1.1314-.404 0-.7273-.2425-.9697-.5657H0v3.0707h7.6768c.1616-.3232.5656-.5657.9697-.5657.6464 0 1.1313.4849 1.1313 1.1314 0 .6464-.4849 1.1313-1.1313 1.1313-.404 0-.7273-.2424-.9697-.5657H0v3.6364h12.606v-7.4344c-.3232-.1616-.5656-.5656-.5656-.9697 0-.6464.4849-1.1313 1.1313-1.1313s1.1313.4849 1.1313 1.1313c0 .404-.2424.7273-.5656.9697v7.4344h2.6666v-5.6566c-.3232-.1616-.5656-.5656-.5656-.9697 0-.6464.4848-1.1313 1.1313-1.1313s1.1313.4849 1.1313 1.1313c0 .404-.2424.7273-.5656.9697v5.6566h2.6666v-8.3232c-.3232-.1617-.5656-.5657-.5656-.9697 0-.6465.4848-1.1314 1.1313-1.1314.6464 0 1.1313.4849 1.1313 1.1314 0 .404-.2424.7272-.5657.9697v8.3232H24V9.9798h-2.9899c-.1616.3232-.5657.5657-.9697.5657-.6465 0-1.1313-.4849-1.1313-1.1314s.4848-1.1313 1.1313-1.1313c.404 0 .7273.2425.9697.5657H24V5.697l-3.6364.0808z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleMultisim(props) {
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