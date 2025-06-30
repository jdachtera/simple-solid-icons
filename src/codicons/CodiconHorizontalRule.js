import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path fill-rule=evenodd clip-rule=evenodd d="M6.432 10h.823V4h-.823v2.61h-2.61V4H3v6h.823V7.394h2.61V10zm5.668 0h.9l-1.28-2.63c.131-.058.26-.134.389-.23a1.666 1.666 0 0 0 .585-.797c.064-.171.096-.364.096-.58a1.77 1.77 0 0 0-.082-.557 1.644 1.644 0 0 0-.22-.446 1.504 1.504 0 0 0-.31-.341 1.864 1.864 0 0 0-.737-.373A1.446 1.446 0 0 0 11.1 4H8.64v6h.824V7.518h1.467L12.1 10zm-.681-3.32a.874.874 0 0 1-.293.055H9.463V4.787h1.663a.87.87 0 0 1 .576.24.956.956 0 0 1 .306.737c0 .168-.029.314-.087.437a.91.91 0 0 1-.503.479zM13 12H3v1h10v-1z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: codicons | License: MIT (<https://github.com/microsoft/vscode-codicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function CodiconHorizontalRule(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 16 16',
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