import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Spine</title><path d="M7.157 2.207c.066 2.004 1.454 3.117 4.221 3.55 2.345.368 4.46.181 5.151-1.829C17.874.01 14.681.985 11.915.55S7.051-1.013 7.157 2.207m.831 8.23c.257 1.497 1.652 2.355 3.786 2.297 2.135-.059 3.728-.892 3.949-2.507.409-2.988-1.946-1.832-4.08-1.774-2.136.059-4.161-.952-3.655 1.984m2.778 6.852c.424 1.117 1.587 1.589 3.159 1.253 1.569-.335 2.656-.856 2.568-2.129-.159-2.357-1.713-1.616-3.283-1.279-1.571.333-3.272-.039-2.444 2.155m1.348 5.221c.123.943.939 1.5 2.215 1.49 1.279-.011 2.248-.515 2.412-1.525.308-1.871-1.123-1.175-2.4-1.165-1.28.01-2.47-.65-2.227 1.2">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleSpine(props) {
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