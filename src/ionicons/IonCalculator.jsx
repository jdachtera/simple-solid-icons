import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M416,80a48.05,48.05,0,0,0-48-48H144A48.05,48.05,0,0,0,96,80V432a48.05,48.05,0,0,0,48,48H368a48.05,48.05,0,0,0,48-48ZM168,432a24,24,0,1,1,24-24A24,24,0,0,1,168,432Zm0-80a24,24,0,1,1,24-24A24,24,0,0,1,168,352Zm0-80a24,24,0,1,1,24-24A24,24,0,0,1,168,272Zm88,160a24,24,0,1,1,24-24A24,24,0,0,1,256,432Zm0-80a24,24,0,1,1,24-24A24,24,0,0,1,256,352Zm0-80a24,24,0,1,1,24-24A24,24,0,0,1,256,272ZM368,408a24,24,0,0,1-48,0V328a24,24,0,0,1,48,0ZM344,272a24,24,0,1,1,24-24A24,24,0,0,1,344,272Zm19.31-100.69A16,16,0,0,1,352,176H160a16,16,0,0,1-16-16V96a16,16,0,0,1,16-16H352a16,16,0,0,1,16,16v64A16,16,0,0,1,363.31,171.31Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonCalculator(props) {
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