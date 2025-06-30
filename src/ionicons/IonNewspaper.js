import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M439.91,112H416.09a.09.09,0,0,0-.09.09V416a32,32,0,0,0,32,32h0a32,32,0,0,0,32-32V152.09A40.09,40.09,0,0,0,439.91,112Z></path><path d=M384,416V72a40,40,0,0,0-40-40H72A40,40,0,0,0,32,72V424a56,56,0,0,0,56,56H430.85a1.14,1.14,0,0,0,1.15-1.15h0a1.14,1.14,0,0,0-.85-1.1A64.11,64.11,0,0,1,384,416ZM96,128a16,16,0,0,1,16-16h64a16,16,0,0,1,16,16v64a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16ZM304,400H112.45c-8.61,0-16-6.62-16.43-15.23A16,16,0,0,1,112,368H303.55c8.61,0,16,6.62,16.43,15.23A16,16,0,0,1,304,400Zm0-64H112.45c-8.61,0-16-6.62-16.43-15.23A16,16,0,0,1,112,304H303.55c8.61,0,16,6.62,16.43,15.23A16,16,0,0,1,304,336Zm0-64H112.45c-8.61,0-16-6.62-16.43-15.23A16,16,0,0,1,112,240H303.55c8.61,0,16,6.62,16.43,15.23A16,16,0,0,1,304,272Zm0-64H240.45c-8.61,0-16-6.62-16.43-15.23A16,16,0,0,1,240,176h63.55c8.61,0,16,6.62,16.43,15.23A16,16,0,0,1,304,208Zm0-64H240.45c-8.61,0-16-6.62-16.43-15.23A16,16,0,0,1,240,112h63.55c8.61,0,16,6.62,16.43,15.23A16,16,0,0,1,304,144Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonNewspaper(props) {
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