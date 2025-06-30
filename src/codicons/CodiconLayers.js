import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path fill-rule=evenodd clip-rule=evenodd d="M7.62706 1.08717L8.18535 1.08325L14.2762 5.1203L14.2727 5.95617L8.1818 9.91912L7.63062 9.91528L1.72152 5.95233L1.71796 5.12422L7.62706 1.08717ZM7.91335 2.10268L2.89198 5.53323L7.91329 8.90079L13.0891 5.5332L7.91335 2.10268ZM1.79257 8.5L7.63059 12.4153L8.18177 12.4191L14.2053 8.5H12.3716L7.91326 11.4008L3.58794 8.5H1.79257ZM7.63059 14.9153L1.79257 11H3.58794L7.91326 13.9008L12.3716 11H14.2053L8.18177 14.9191L7.63059 14.9153Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: codicons | License: MIT (<https://github.com/microsoft/vscode-codicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function CodiconLayers(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
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