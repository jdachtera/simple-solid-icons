import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M3.00003 18H21C21.2762 18 21.5 18.2239 21.5 18.5C21.5 18.6082 21.4649 18.7135 21.4 18.8L19.3 21.6C19.1112 21.8518 18.8148 22 18.5 22H5.50003C5.18527 22 4.88888 21.8518 4.70003 21.6L2.60003 18.8C2.43434 18.5791 2.47912 18.2657 2.70003 18.1C2.78658 18.0351 2.89184 18 3.00003 18ZM7.16128 14H13V6.7016L7.16128 14ZM15 2.42543V15C15 15.5523 14.5523 16 14 16H4.04034C3.7642 16 3.54034 15.7762 3.54034 15.5C3.54034 15.3865 3.57898 15.2764 3.64991 15.1877L14.1096 2.11309C14.2821 1.89745 14.5967 1.86249 14.8124 2.035C14.931 2.12989 15 2.27354 15 2.42543Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixSailboatLine(props) {
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