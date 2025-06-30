import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Craftsman</title><path d="M.428 9.572v4.899h23.144V9.572Zm1.543 1.143h.172l.886.014v.572h-.744v1.484h.744v.572H1.971l-.371-.37v-1.901zm1.7 0h1.243l.47.314v.985l-.37.244.601 1.086h-.73l-.528-.973v.973h-.685Zm2.815 0H7.5l.357.314v2.315h-.615v-.873h-.484v.873h-.63v-2.315zm2.07 0h1.329v.613H9.27v.516h.543v.57h-.543v.93h-.714Zm1.944 0h1.686l-.2.629h-.443v2h-.672v-2h-.57zm2.1 0h1.556l-.17.613h-.843l1.029 1.414-.201.615h-1.713l.185-.586h.942l-.942-1.386zm2.1 0h.814l.414.97.4-.97h.815v2.613h-.672v-1.57l-.399.957h-.3l-.4-.944v1.573h-.673zm3.571 0h1.014l.358.314v2.315h-.63v-.873h-.484v.873h-.615v-2.315zm2.057 0h.629l.615 1.414v-1.414h.627v2.629h-.627l-.615-1.416v1.416h-.629zm-13.586.556v.614h.487v-.614zm11.787 0v.614h.485v-.614zm-14.172.014v.572h.358v-.572ZM0 9.143h24v5.714H0Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleCraftsman(props) {
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