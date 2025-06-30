import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M388.364 242.764V421.455C388.364 432.738 383.881 443.56 375.902 451.539C367.924 459.518 357.102 464 345.818 464H90.5455C79.2617 464 68.4401 459.518 60.4613 451.539C52.4825 443.56 48 432.738 48 421.455V166.182C48 154.898 52.4825 144.076 60.4613 136.098C68.4401 128.119 79.2617 123.636 90.5455 123.636H269.236"stroke=currentColor stroke-width=32 stroke-linecap=round stroke-linejoin=round></path><path d="M464 180.364L464 48L331.636 48"stroke=currentColor stroke-width=32 stroke-linecap=round stroke-linejoin=round></path><path d="M216 296L464 48"stroke=currentColor stroke-width=32 stroke-linecap=round stroke-linejoin=round>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonArrowUpRightBoxOutline(props) {
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