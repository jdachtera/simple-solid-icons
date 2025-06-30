import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Plotly</title><path d="M1.713.002A1.713 1.713 0 0 0 0 1.715a1.713 1.713 0 0 0 1.713 1.713 1.713 1.713 0 0 0 1.714-1.713A1.713 1.713 0 0 0 1.713.002Zm6.861 0a1.713 1.713 0 0 0-1.713 1.713 1.713 1.713 0 0 0 1.713 1.713 1.713 1.713 0 0 0 1.713-1.713A1.713 1.713 0 0 0 8.574.002Zm6.857 0a1.713 1.713 0 0 0-1.714 1.713 1.713 1.713 0 0 0 1.714 1.713 1.713 1.713 0 0 0 1.713-1.713A1.713 1.713 0 0 0 15.431.002zm6.856 0a1.713 1.713 0 0 0-1.713 1.713 1.713 1.713 0 0 0 1.713 1.713A1.713 1.713 0 0 0 24 1.715 1.713 1.713 0 0 0 22.287.002ZM1.713 6.859A1.713 1.713 0 0 0 0 8.572a1.713 1.713 0 0 0 1.713 1.713 1.713 1.713 0 0 0 1.714-1.713A1.713 1.713 0 0 0 1.713 6.86Zm6.861 0c-.948 0-1.713.765-1.713 1.713v13.713c0 .947.765 1.713 1.713 1.713.948 0 1.713-.766 1.713-1.713V8.572c0-.948-.765-1.713-1.713-1.713zm6.857 0a1.713 1.713 0 0 0-1.714 1.713 1.713 1.713 0 0 0 1.714 1.713 1.713 1.713 0 0 0 1.713-1.713 1.713 1.713 0 0 0-1.713-1.713zm6.856 0c-.947 0-1.713.765-1.713 1.713v13.713c0 .947.766 1.713 1.713 1.713.948 0 1.713-.766 1.713-1.713V8.572c0-.948-.765-1.713-1.713-1.713zM1.713 13.715C.766 13.715 0 14.48 0 15.428v6.857c0 .947.766 1.713 1.713 1.713.948 0 1.714-.766 1.714-1.713v-6.857c0-.948-.766-1.713-1.714-1.713zm13.718 0c-.948 0-1.714.765-1.714 1.713v6.857c0 .947.766 1.713 1.714 1.713.947 0 1.713-.766 1.713-1.713v-6.857c0-.948-.766-1.713-1.713-1.713z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimplePlotly(props) {
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