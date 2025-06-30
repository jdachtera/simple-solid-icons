import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M318.586 363.5L256 424L193.414 363.5C193.414 363.5 212 336 256 336C300 336 318.586 363.5 318.586 363.5Z"stroke=currentColor stroke-width=32 stroke-linecap=round stroke-linejoin=round></path><path d="M407.31 278L372 312C372 312 331 266 256 266C181 266 140 312 140 312L104.69 278C104.69 278 142.5 214 256 214C369.5 214 407.31 278 407.31 278Z"stroke=currentColor stroke-width=32 stroke-linecap=round stroke-linejoin=round></path><path d="M496 192L459.31 227.5C459.31 227.5 386.5 141 256 141C125.5 141 52.6897 227.5 52.6897 227.5L16 192C16 192 88 88 256 88C424 88 496 192 496 192Z"stroke=currentColor stroke-width=32 stroke-linecap=round stroke-linejoin=round>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonWifiOutline(props) {
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