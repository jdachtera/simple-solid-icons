import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M123.636 269.236L123.636 90.5454C123.636 79.2617 128.119 68.4401 136.098 60.4613C144.076 52.4824 154.898 48 166.182 48L421.455 48C432.738 48 443.56 52.4824 451.539 60.4613C459.518 68.4401 464 79.2617 464 90.5454L464 345.818C464 357.102 459.518 367.924 451.539 375.902C443.56 383.881 432.738 388.364 421.455 388.364L242.764 388.364"stroke=currentColor stroke-width=32 stroke-linecap=round stroke-linejoin=round></path><path d="M48 331.636L48 464L180.364 464"stroke=currentColor stroke-width=32 stroke-linecap=round stroke-linejoin=round></path><path d="M296 216L48 464"stroke=currentColor stroke-width=32 stroke-linecap=round stroke-linejoin=round>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonArrowDownLeftBoxOutline(props) {
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