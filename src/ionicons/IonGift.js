import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M200,144h40V104a40,40,0,1,0-40,40Z style=fill:none></path><path d=M352,104a40,40,0,0,0-80,0v40h40A40,40,0,0,0,352,104Z style=fill:none></path><path d=M80,416a64,64,0,0,0,64,64h92a4,4,0,0,0,4-4V292a4,4,0,0,0-4-4H88a8,8,0,0,0-8,8Z></path><path d=M240,252V144h32V252a4,4,0,0,0,4,4H416a47.93,47.93,0,0,0,16-2.75h0A48.09,48.09,0,0,0,464,208V192a48,48,0,0,0-48-48H375.46a2,2,0,0,1-1.7-3A72,72,0,0,0,256,58.82,72,72,0,0,0,138.24,141a2,2,0,0,1-1.7,3H96a48,48,0,0,0-48,48v16a48.09,48.09,0,0,0,32,45.25h0A47.93,47.93,0,0,0,96,256H236A4,4,0,0,0,240,252Zm32-148a40,40,0,1,1,40,40H272ZM197.14,64.1A40,40,0,0,1,240,104v40H200a40,40,0,0,1-2.86-79.89Z></path><path d=M276,480h92a64,64,0,0,0,64-64V296a8,8,0,0,0-8-8H276a4,4,0,0,0-4,4V476A4,4,0,0,0,276,480Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonGift(props) {
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