import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Statuspal</title><path d="M14.275 9.296c0-1.242-1.02-2.25-2.275-2.25-1.256 0-2.275 1.008-2.275 2.25 0 .936.58 1.737 1.403 2.077L5.934 24c1.896-1.1 3.98-1.651 6.066-1.651 2.085 0 4.17.55 6.066 1.65l-5.194-12.626a2.251 2.251 0 001.403-2.077zm1.187 12.01A13.44 13.44 0 0012 20.849a13.44 13.44 0 00-3.463.457L12 13.389zM16.55 13.5a5.58 5.58 0 00-.723-7.535 5.732 5.732 0 00-7.654 0A5.58 5.58 0 007.45 13.5a6.167 6.167 0 01.143-8.716c2.446-2.379 6.368-2.379 8.813 0a6.167 6.167 0 01.144 8.716zm0 3c3.047-1.988 4.416-5.716 3.366-9.174C18.867 3.867 15.65 1.5 12 1.5c-3.65 0-6.869 2.367-7.917 5.826-1.049 3.458.32 7.186 3.367 9.174-3.481-2.029-5.16-6.111-4.096-9.968C4.417 2.675 7.96 0 12 0c4.042 0 7.583 2.675 8.646 6.532 1.063 3.857-.615 7.94-4.096 9.968z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleStatuspal(props) {
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