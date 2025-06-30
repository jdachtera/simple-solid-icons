import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Server Fault</title><path d="M24 18.185v2.274h-4.89v-2.274H24zm-24-.106h11.505v2.274H0zm12.89 0h4.89v2.274h-4.89zm6.221-3.607H24v2.274h-4.89l.001-2.274zM0 14.367h11.505v2.274H0v-2.274zm12.89 0h4.89v2.274h-4.89v-2.274zm6.221-3.346H24v2.273h-4.89l.001-2.273zM0 10.916h11.505v2.271H0v-2.271zm12.89 0h4.89v2.271h-4.89v-2.271zm6.22-3.609H24v2.279h-4.89V7.307zM0 7.206h11.505V9.48H0V7.201zm12.89 0h4.89V9.48h-4.89V7.201zm6.221-3.556H24v2.276h-4.89v-2.28l.001.004zM0 3.541h11.505v2.274H0V3.541zm12.89 0h4.89v2.274h-4.89V3.541z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleServerfault(props) {
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