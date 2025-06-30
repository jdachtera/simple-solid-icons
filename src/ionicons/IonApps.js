import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M104,160a56,56,0,1,1,56-56A56.06,56.06,0,0,1,104,160Z></path><path d=M256,160a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,160Z></path><path d=M408,160a56,56,0,1,1,56-56A56.06,56.06,0,0,1,408,160Z></path><path d=M104,312a56,56,0,1,1,56-56A56.06,56.06,0,0,1,104,312Z></path><path d=M256,312a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,312Z></path><path d=M408,312a56,56,0,1,1,56-56A56.06,56.06,0,0,1,408,312Z></path><path d=M104,464a56,56,0,1,1,56-56A56.06,56.06,0,0,1,104,464Z></path><path d=M256,464a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,464Z></path><path d=M408,464a56,56,0,1,1,56-56A56.06,56.06,0,0,1,408,464Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonApps(props) {
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