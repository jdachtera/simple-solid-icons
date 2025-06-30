import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM216,368H188a44.05,44.05,0,0,1-44-44V296a16,16,0,0,1,32,0v28a12,12,0,0,0,12,12h28a16,16,0,0,1,0,32Zm0-192H188a12,12,0,0,0-12,12v28a16,16,0,0,1-32,0V188a44.05,44.05,0,0,1,44-44h28a16,16,0,0,1,0,32ZM368,324a44.05,44.05,0,0,1-44,44H296a16,16,0,0,1,0-32h28a12,12,0,0,0,12-12V296a16,16,0,0,1,32,0Zm0-108a16,16,0,0,1-32,0V188a12,12,0,0,0-12-12H296a16,16,0,0,1,0-32h28a44.05,44.05,0,0,1,44,44Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonScanCircle(props) {
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