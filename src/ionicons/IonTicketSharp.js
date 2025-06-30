import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M426.24,127.72,415.3,138.66a29.67,29.67,0,0,1-42-42l10.94-10.94L314.52,16l-88,88-4,12.09-12.09,4L16,314.52l69.76,69.76L96.7,373.34a29.67,29.67,0,0,1,42,42l-10.94,10.94L197.48,496l194.4-194.4,4-12.09,12.09-4,88-88Zm-208.56,5.43,21.87-21.87,33,33-21.88,21.87Zm43,43,21.88-21.88,32.52,32.52-21.88,21.88Zm42.56,42.56,21.88-21.88,32.52,32.52L335.8,251.28Zm75.57,75.56-33-33,21.87-21.88,33,33Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonTicketSharp(props) {
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