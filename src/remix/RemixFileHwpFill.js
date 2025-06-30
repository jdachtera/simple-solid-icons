import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M16 2L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44749 2 3.9985 2H16ZM9.33333 14.6667H8V18H16V16.6667L9.333 16.666L9.33333 14.6667ZM12 14.3333C11.4477 14.3333 11 14.781 11 15.3333C11 15.8856 11.4477 16.3333 12 16.3333C12.5523 16.3333 13 15.8856 13 15.3333C13 14.781 12.5523 14.3333 12 14.3333ZM12 9C10.6193 9 9.5 10.1193 9.5 11.5C9.5 12.8807 10.6193 14 12 14C13.3807 14 14.5 12.8807 14.5 11.5C14.5 10.1193 13.3807 9 12 9ZM12 10.3333C12.6443 10.3333 13.1667 10.8557 13.1667 11.5C13.1667 12.1443 12.6443 12.6667 12 12.6667C11.3557 12.6667 10.8333 12.1443 10.8333 11.5C10.8333 10.8557 11.3557 10.3333 12 10.3333ZM12.6667 6H11.3333L11.333 7.333L8 7.33333V8.66667H16V7.33333L12.666 7.333L12.6667 6Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixFileHwpFill(props) {
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