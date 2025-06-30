import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M419.13,96H419l-35.05.33L128,96h-.16l-36.74.33C66.93,96.38,48,116.07,48,141.2V371.47c0,25.15,19,44.86,43.2,44.86h.15l36.71-.33,255.92.33h.17l35.07-.33A44.91,44.91,0,0,0,464,371.13V140.87A44.92,44.92,0,0,0,419.13,96ZM144,320a16,16,0,0,1-32,0V192a16,16,0,0,1,32,0Zm64,32a16,16,0,0,1-32,0V160a16,16,0,0,1,32,0Zm64-16a16,16,0,0,1-32,0V176a16,16,0,0,1,32,0Zm64,16a16,16,0,0,1-32,0V160a16,16,0,0,1,32,0Zm64-32a16,16,0,0,1-32,0V192a16,16,0,0,1,32,0Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonBarcode(props) {
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