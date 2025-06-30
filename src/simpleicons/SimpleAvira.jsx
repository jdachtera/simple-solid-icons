import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Avira</title><path d="M24 23.414a.586.586 0 0 1-.586.587H.585A.586.586 0 0 1 0 23.414V.586c0-.324.262-.587.585-.587h22.829c.325 0 .586.263.586.587v22.828Zm-4.971-9.675-.04-.044-1.323 1.256a.925.925 0 0 1-1.342 1.272 1.234 1.234 0 0 1-.118-.122l-3.56-3.753 4.857-4.609c-3.034-2.858-7.795-2.984-10.765-.111-2.969 2.874-3.337 7.527-.539 10.838l5.106-4.845 3.748 3.952a2.777 2.777 0 0 0 1.995.74 2.681 2.681 0 0 0 1.772-.742c.559-.526.894-1.272.887-2.022a2.702 2.702 0 0 0-.678-1.81Zm-4.573-5.55-7.65 7.259c-2.576-4.553 2.815-10.009 7.65-7.259Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleAvira(props) {
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