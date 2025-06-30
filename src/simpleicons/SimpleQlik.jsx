import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Qlik</title><path d="m23.7515 20.1367-3.13-2.6326c1.0862-1.7307 1.7303-3.7745 1.7303-5.9655 0-6.1684-5.008-11.1764-11.176-11.1764S0 5.3702 0 11.5386c0 6.168 5.008 11.176 11.1759 11.176 2.3934 0 4.6216-.7552 6.4443-2.0438l3.3324 2.7988s.4974.4236.921-.0738l1.9884-2.3568c-.0186 0 .3864-.4968-.1105-.9023zm-5.7078-8.598c0 3.7926-3.0747 6.8672-6.8678 6.8672-3.7926 0-6.8678-3.0746-6.8678-6.8673 0-3.793 3.0752-6.8678 6.8678-6.8678 3.7931 0 6.8678 3.0747 6.8678 6.8678zm-11.287 0c0-2.4304 1.9702-4.4006 4.4006-4.4006 2.4303 0 4.4005 1.9702 4.4005 4.4005 0 2.4304-1.9702 4.4006-4.4005 4.4006-2.4304 0-4.4005-1.9702-4.4005-4.4006z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleQlik(props) {
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