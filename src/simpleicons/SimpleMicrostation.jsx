import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Microstation</title><path d="M24 .357c-.938.217-3.086.22-3.631 1.15l-.55.922c-1.376 2.348-4.833 11.069-8.183 11.181-3.35.113 1.762-10.712 2.27-11.797-2.08.489-4.078.193-4.826 2.326-.775 2.212-1.54 4.425-2.363 6.62-1.71 4.532-3.795 8.89-6.634 12.767.064-.086.127-.171-.083.117 2.111-.422 4.03-.352 5.295-2.253 1.17-1.759 1.92-3.73 2.712-5.68l.377-.927.303.286c3.017 2.844 5.334 0 7.697-2.219l.349-.327 1.322 4.977 2.932-3.144a33.47 33.47 0 0 1-.713-1.342l-.037-.08C18.302 8.742 21.6 3.935 23.861.566Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleMicrostation(props) {
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