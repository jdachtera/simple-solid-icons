import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Known</title><path d="M18.387 16.926h.604v1.936h-6.086v-1.936h.904s.333-.072.26-.386l-2.392-3.776-1.893 1.847v1.322c0 .653.324.993.687.993h.844v1.936H5.414v-1.936h.741c.364 0 .688-.34.688-.993V7.992c0-.364-.324-.855-.688-.855h-.741V5.201h5.901v1.936h-.844c-.363 0-.687.491-.687.855v3.83l4.087-4.144a.316.316 0 0 0-.219-.541h-.747V5.201H19v1.936h-.872c-.363 0-.867.176-1.225.525l-3.058 2.985 3.396 5.276c.304.434.772 1.003 1.146 1.003zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-1.684 0c0-5.697-4.619-10.316-10.316-10.316C6.303 1.684 1.684 6.303 1.684 12c0 5.697 4.619 10.316 10.316 10.316 5.697 0 10.316-4.619 10.316-10.316z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleKnown(props) {
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