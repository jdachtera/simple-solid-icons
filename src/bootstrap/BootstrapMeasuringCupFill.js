import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M14 0a2 2 0 0 1 2 2v5.959a1.041 1.041 0 0 1-2.049.264l-.02-.093-.849-5.096a.041.041 0 0 0-.082.007V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3.742a2.5 2.5 0 0 0-.732-1.767L.146.854A.5.5 0 0 1 .5 0zM4 13v1h1.5a.5.5 0 0 0 0-1zm0-2v1h3.5a.5.5 0 0 0 0-1zm0-2v1h1.5a.5.5 0 0 0 0-1zm0-2v1h3.5a.5.5 0 0 0 0-1zm0-2v1h1.5a.5.5 0 0 0 0-1zm0-2v1h3.5a.5.5 0 0 0 0-1z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: bootstrap | License: MIT (<https://github.com/twbs/icons/blob/main/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function BootstrapMeasuringCupFill(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 0.5,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 16 16',
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