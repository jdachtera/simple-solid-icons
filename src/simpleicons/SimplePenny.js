import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Penny</title><path d="M2.053 11.914h.368c.419 0 .675-.245.718-.556.043-.27-.154-.556-.547-.556H2.24zm18.611-.638.839-1.504h1.924l-2.908 4.399H18.56l.933-1.26-1.07-3.049-.727 4.309h-1.54l-.949-2.036-.342 2.036h-1.54l.745-4.4h1.582l.915 1.971.334-1.97h3.37l.393 1.504zm-7.21-1.504-.744 4.399h-1.54l-.949-2.036-.342 2.036h-1.54l.745-4.4h1.582l.915 1.971.334-1.97h1.539zM3.036 9.707c1.07 0 1.788.547 1.797 1.438l.23-1.373h3.49l-.188 1.112H6.517l-.094.523h1.668l-.188 1.104H6.235l-.094.548h1.873l-.188 1.112H4.32l.402-2.38c-.273.77-1.009 1.227-1.967 1.227h-.88l-.198 1.153H0l.753-4.464zM24 13.345c0 .523-.445.948-.992.948-.547 0-.992-.425-.992-.948 0-.523.445-.948.992-.948.556.008.992.425.992.948z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimplePenny(props) {
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