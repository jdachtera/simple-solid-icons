import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Electron Fiddle</title><path d="M8 0c-.6312 0-1.1429.5117-1.1429 1.1429v13.8583c-1.9716.5075-3.4285 2.2973-3.4285 4.4274C3.4286 21.9533 5.4753 24 8 24c2.5247 0 4.5714-2.0467 4.5714-4.5714 0-2.1301-1.4569-3.92-3.4285-4.4274v-4.7155h4.7346c.541 0 .9796-.5117.9796-1.1428 0-.6312-.4386-1.1429-.9796-1.1429H9.143V2.2857h10.2857c.6312 0 1.1428-.5117 1.1428-1.1428C20.5714.5117 20.0598 0 19.4286 0Zm0 17.1429c1.2624 0 2.2857 1.0233 2.2857 2.2857 0 1.2623-1.0233 2.2857-2.2857 2.2857-1.2624 0-2.2857-1.0234-2.2857-2.2857 0-1.2624 1.0233-2.2857 2.2857-2.2857z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleElectronfiddle(props) {
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