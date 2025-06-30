import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M288,256c52.79,0,99.43-49.71,104-110.82,2.27-30.7-7.36-59.33-27.12-80.6C345.33,43.57,318,32,288,32c-30.24,0-57.59,11.5-77,32.38-19.63,21.11-29.2,49.8-27,80.78C188.49,206.28,235.12,256,288,256Z></path><path d=M495.38,439.76c-8.44-46.82-34.79-86.15-76.19-113.75C382.42,301.5,335.83,288,288,288s-94.42,13.5-131.19,38c-41.4,27.6-67.75,66.93-76.19,113.75-1.93,10.73.69,21.34,7.19,29.11A30.94,30.94,0,0,0,112,480H464a30.94,30.94,0,0,0,24.21-11.13C494.69,461.1,497.31,450.49,495.38,439.76Z></path><path d=M144,216H32a16,16,0,0,0,0,32H144a16,16,0,0,0,0-32Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonPersonRemove(props) {
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