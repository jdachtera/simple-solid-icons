import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Vivint</title><path d="M9.102 2.04a.81.81 0 0 0-.553.218L.514 9.756A1.62 1.62 0 0 0 0 10.939V21.15c0 .447.362.81.809.81h16.584a.81.81 0 0 0 .808-.81V10.94a1.62 1.62 0 0 0-.514-1.184l-8.035-7.5a.804.804 0 0 0-.55-.217zm0 4.964 5.252 4.904v6.203H3.848v-6.203l5.254-4.904zM21.648 17.35a2.305 2.305 0 0 0-2.26 2.304 2.305 2.305 0 0 0 2.307 2.307A2.305 2.305 0 0 0 24 19.654a2.305 2.305 0 0 0-2.305-2.304 2.305 2.305 0 0 0-.047 0z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleVivint(props) {
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