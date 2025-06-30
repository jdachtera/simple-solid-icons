import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Openverse</title><path d="M4.882 1.018C2.182 1.018 0 3.214 0 5.932c0 2.704 2.182 4.915 4.882 4.915Zm7.118 0c-2.686 0-4.882 2.196-4.882 4.914 0 2.704 2.182 4.915 4.882 4.915zm7.118 0c-2.696 0-4.881 2.2-4.881 4.914 0 2.714 2.185 4.915 4.88 4.915 2.697 0 4.883-2.2 4.883-4.915 0-2.714-2.186-4.914-4.882-4.914zm0 12.093c-2.696 0-4.881 2.2-4.881 4.915 0 2.714 2.185 4.914 4.88 4.914 2.697 0 4.883-2.2 4.883-4.914 0-2.714-2.186-4.915-4.882-4.915ZM12 13.126c-2.686 0-4.882 2.196-4.882 4.9S9.3 22.94 12 22.94zm-7.118.04c-2.7 0-4.882 2.197-4.882 4.9 0 2.719 2.182 4.916 4.882 4.916Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleOpenverse(props) {
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