import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>stylelint</title><path d="M3.415.549L0 3.712 2.242 5.65.547 7.483l11.176 15.909h.114c-2.625-9.386-2.55-9.428-4.446-16.12l-.456.263c-.248.143-.451.026-.451-.26V4.084C5.98 2.321 5.586.958 5.47.549zm15.115 0c-.116.41-.51 1.772-1.014 3.535v3.191c0 .286-.203.403-.45.26l-.457-.264c-1.897 6.693-1.821 6.735-4.446 16.12-.017.07.06.09.114 0L23.453 7.484 21.757 5.65 24 3.712 20.585.549zm-11.496.75c-.118.007-.2.105-.2.271v5.127c0 .242.172.34.38.22l3.068-1.772a.336.336 0 01-.086-.222V3.287c0-.067.021-.129.056-.182L7.215 1.35a.333.333 0 00-.18-.051zm9.939 0a.331.331 0 00-.18.052l-3.038 1.753a.33.33 0 01.057.183v1.636a.335.335 0 01-.088.223l3.068 1.77c.21.122.38.023.38-.218V1.57c0-.166-.08-.264-.199-.27zm-6.35 1.863c-.101 0-.183.056-.183.125v1.636c0 .069.082.125.183.125h2.761c.101 0 .184-.056.184-.125V3.287c0-.07-.083-.125-.184-.125zm1.294 3.642a.829.829 0 00-.83.83.829.829 0 00.83.828.829.829 0 00.829-.829.829.829 0 00-.83-.829zm-.01 4.93a.829.829 0 00-.82.829.829.829 0 00.83.829.829.829 0 00.828-.83.829.829 0 00-.829-.828.829.829 0 00-.009 0zm.01 4.93a.829.829 0 00-.83.828.829.829 0 00.83.83.829.829 0 00.829-.83.829.829 0 00-.83-.829z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleStylelint(props) {
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