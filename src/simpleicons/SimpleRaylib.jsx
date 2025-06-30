import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Raylib</title><path d="M0 0v24h24V0H0Zm1.5 1.5h21v21h-21v-21Zm14.813 15.469v3.281h.937v-.469h-.469V16.97h-.468Zm1.406 0v.468h.468v-.468h-.468Zm.937 0v3.281H21v-2.344h-1.875v-.937h-.469Zm-10.781.937v2.344h.469v-1.875h1.875v-.469H7.875Zm2.813 0v.469h1.874v.469h-1.874v1.406h2.343v-2.344h-2.344Zm2.812 0v2.344h1.875v.469H13.5v.468h2.344v-3.28h-.469v1.874h-1.406v-1.875H13.5Zm4.219 0v2.344h.468v-2.344h-.468Zm1.406.469h1.406v1.406h-1.406v-1.406Zm-7.969.938h1.406v.468h-1.406v-.468Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleRaylib(props) {
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