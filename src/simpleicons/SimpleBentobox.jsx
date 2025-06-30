import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>BentoBox</title><path d="m7.406 3.821 2.723-2.725a3.74 3.74 0 0 1 5.29 0l.078.078a3.74 3.74 0 0 1 0 5.29l-2.723 2.723-5.368-5.366Zm7.407 7.407 2.723-2.723a3.74 3.74 0 0 1 5.29 0l.078.078a3.74 3.74 0 0 1 0 5.29l-2.725 2.723-5.369-5.368h.003ZM0 11.228l2.723-2.723a3.74 3.74 0 0 1 5.29 0l.079.078a3.742 3.742 0 0 1 0 5.29l-2.724 2.723L0 11.228Zm7.406 7.406 2.723-2.723a3.74 3.74 0 0 1 5.29 0l.078.078a3.74 3.74 0 0 1 0 5.29L12.774 24l-5.368-5.366Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleBentobox(props) {
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