import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>upload</title><g id=Layer_2 data-name="Layer 2"><g id=upload><g id=upload-2 data-name=upload><rect x=4 y=4 width=16 height=2 rx=1 ry=1 transform="translate(24 10) rotate(180)"></rect><rect x=17 y=5 width=4 height=2 rx=1 ry=1 transform="translate(25 -13) rotate(90)"></rect><rect x=3 y=5 width=4 height=2 rx=1 ry=1 transform="translate(11 1) rotate(90)"></rect><path d=M8,14a1,1,0,0,1-.8-.4,1,1,0,0,1,.2-1.4l4-3a1,1,0,0,1,1.18,0l4,2.82a1,1,0,0,1,.24,1.39,1,1,0,0,1-1.4.24L12,11.24,8.6,13.8A1,1,0,0,1,8,14Z></path><path d=M12,21a1,1,0,0,1-1-1V12a1,1,0,0,1,2,0v8A1,1,0,0,1,12,21Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillUpload(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
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