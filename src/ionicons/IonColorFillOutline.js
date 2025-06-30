import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M419.1,337.45a3.94,3.94,0,0,0-6.1,0c-10.5,12.4-45,46.55-45,77.66,0,27,21.5,48.89,48,48.89h0c26.5,0,48-22,48-48.89C464,384,429.7,349.85,419.1,337.45Z style=fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px></path><path d=M387,287.9,155.61,58.36a36,36,0,0,0-51,0l-5.15,5.15a36,36,0,0,0,0,51l52.89,52.89,57-57L56.33,263.2a28,28,0,0,0,.3,40l131.2,126a28.05,28.05,0,0,0,38.9-.1c37.8-36.6,118.3-114.5,126.7-122.9,5.8-5.8,18.2-7.1,28.7-7.1h.3A6.53,6.53,0,0,0,387,287.9Z style=fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonColorFillOutline(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 512 512',
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