import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>TrillerTV</title><path d="m9.496.07-1.8 3.107-.868-.498c-1.269-.729-2.852.184-2.852 1.64v6.28l3.9-6.734L9.933.319a.14.14 0 0 0-.053-.19l-.19-.11a.143.143 0 0 0-.193.05Zm-.713 3.734-4.807 8.301v7.163c0 .674.338 1.23.826 1.562l-1.65 2.85a.14.14 0 0 0 .05.192l.192.109a.142.142 0 0 0 .193-.05l1.665-2.874L13.629 6.59Zm11.63 2.547-1.8 3.108-4.33-2.49-8.217 14.186a1.91 1.91 0 0 0 .764-.248l8.598-4.948 5.42-9.356a.141.141 0 0 0-.05-.193c-.065-.035-.128-.073-.192-.11-.027-.02-.14-.041-.193.051zm-.711 3.735-2.967 5.123 3.08-1.774c1.268-.731 1.268-2.556 0-3.285z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleTrillertv(props) {
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