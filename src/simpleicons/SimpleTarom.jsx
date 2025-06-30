import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>TAROM</title><path d="M12.054 0C5.424 0 .028 5.37 0 11.973 0 18.603 5.424 24 12.054 24 18.657 24 24 18.603 24 11.973 24 5.398 18.657 0 12.054 0Zm0 .877c2.603 0 5.068.96 6.986 2.52L7.178 15.123a21.416 21.416 0 0 1-.75-.101c-.55-.082-.988-.147-1.552-.089-.904.082-2.135.876-2.902 1.725a11.18 11.18 0 0 1-1.015-4.711C.959 5.864 5.917.877 12.054.877zm7.37 2.876c2.247 2.054 3.672 4.987 3.672 8.22 0 2.137-.549 4.055-1.59 5.753l-10.218-1.862ZM4.876 16.738c.795.028 1.644.084 2.521.33l9.534 4.712-5.15-4.219 9.479.547c-2 3.014-5.398 4.96-9.179 4.96-4.328 0-8.082-2.465-9.945-6.054.96-.164 1.809-.303 2.74-.276z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleTarom(props) {
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