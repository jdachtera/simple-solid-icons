import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M64,164V408a56,56,0,0,0,56,56H392a56,56,0,0,0,56-56V164a4,4,0,0,0-4-4H68A4,4,0,0,0,64,164ZM331,315.63l-63.69,63.68a16,16,0,0,1-22.62,0L181,315.63c-6.09-6.09-6.65-16-.85-22.38a16,16,0,0,1,23.16-.56L240,329.37V224.45c0-8.61,6.62-16,15.23-16.43A16,16,0,0,1,272,224V329.37l36.69-36.68a16,16,0,0,1,23.16.56C337.65,299.62,337.09,309.54,331,315.63Z></path><rect x=32 y=48 width=448 height=80 rx=32 ry=32>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonArchive(props) {
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