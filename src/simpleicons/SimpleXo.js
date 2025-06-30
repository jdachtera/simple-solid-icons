import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>XO</title><path d="m1.629 5.698 4.275 5.367 4.274-5.367h1.613l-5.089 6.384 4.958 6.219h-1.613L5.903 13.1l-4.142 5.201H.131l4.957-6.219L0 5.698h1.629Zm16.48-.082C21.423 5.616 24 8.632 24 12c0 3.425-2.613 6.331-5.883 6.383-3.301-.1-5.804-2.878-5.911-6.164L12.202 12c0-3.436 2.637-6.384 5.907-6.384Zm0 1.268c-2.59 0-4.639 2.4-4.639 5.116.078 2.736 1.983 4.996 4.444 5.111l.195.004c2.583 0 4.623-2.406 4.623-5.115 0-2.752-2.086-5.116-4.623-5.116Zm.944 3.71c.507 0 1.1.662.702 1.473-.297.605-1.373 1.192-1.609 1.315l-.045.024s-1.32-.658-1.655-1.339c-.397-.811.196-1.473.703-1.473.56 0 .952.535.952.535s.391-.535.952-.535Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleXo(props) {
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