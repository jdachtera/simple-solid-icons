import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M444,32H128c-19.38,0-45.9,4.34-64.11,24.77C52.17,69.92,48,85.66,48,96a16,16,0,0,0,13.8,15.85C91.7,116,96,117.79,96,136V400A80.07,80.07,0,0,0,176,480H368a80.11,80.11,0,0,0,80-80V96c0-12.55,7.46-27.25,10-31.36l.1-.14c.22-.35.5-.72.78-1.1,2-2.79,5.09-7,5.09-12.95C464,39.79,454.89,32,444,32ZM84.11,83.08c5.24-8.87,17.17-19,44.29-19H422.83C419.3,72.87,416,84.27,416,96v64H128V136C128,98.68,106.65,87.86,84.11,83.08Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonBeaker(props) {
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