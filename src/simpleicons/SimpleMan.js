import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>MAN</title><path d="M10.979 14.943h2.05L15.46 18.7h-2.054l-.263-.409h-2.278l-.264.41H8.548zm1.025 1.568l-.458.711h.916l-.458-.712zM0 17.372C0 10.704 5.372 5.3 12 5.3s12 5.405 12 12.073c0 .449-.024.892-.072 1.328H22.58c.054-.435.082-.878.082-1.328 0-5.924-4.774-10.726-10.662-10.726-5.889 0-10.661 4.802-10.661 10.726 0 .45.027.893.08 1.328H.073A12.254 12.274 0 0 1 0 17.372zm2.237-2.43h1.83l1.22 1.228 1.22-1.227h1.831V18.7H6.363v-1.38l-1.075 1.082-1.076-1.082v1.38H2.237v-3.757zm13.42 0h1.927l2.17 1.62v-1.62h1.975V18.7h-1.942l-2.156-1.605V18.7h-1.975Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleMan(props) {
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