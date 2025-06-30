import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M480,496H48a32,32,0,0,1-32-32V32a16,16,0,0,1,32,0V464H480a16,16,0,0,1,0,32Z></path><path d=M156,432H116a36,36,0,0,1-36-36V244a36,36,0,0,1,36-36h40a36,36,0,0,1,36,36V396A36,36,0,0,1,156,432Z></path><path d=M300,432H260a36,36,0,0,1-36-36V196a36,36,0,0,1,36-36h40a36,36,0,0,1,36,36V396A36,36,0,0,1,300,432Z></path><path d=M443.64,432h-40a36,36,0,0,1-36-36V132a36,36,0,0,1,36-36h40a36,36,0,0,1,36,36V396A36,36,0,0,1,443.64,432Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonBarChart(props) {
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