import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>RTM</title><path d="M5.584 9.054H1.98l-.487 1.413h3.408c.54 0 .594.25.51.494-.084.244-.18.323-.719.323h-3.43L0 14.946h1.917l.892-2.454c.263 0 .33.024.436.257l1.043 2.197h2.084l-1.148-2.46c1.368-.15 1.985-.822 2.206-1.698.211-.837-.173-1.734-1.846-1.734m2.817 0-.487 1.413H10l-1.541 4.48 2.036-.001 1.54-4.479h1.94l.486-1.413H8.4zm7.89 0h-1.306l-.485 1.414h.624c.272 0 .416.22.322.493l-1.368 3.985h2.036l1.37-3.988c.37-1.08.053-1.905-1.194-1.904m3.186 0h-1.16l-.486 1.414h.48c.271 0 .415.22.322.493l-1.368 3.985H19.3l1.37-3.988c.37-1.08.053-1.904-1.194-1.904m3.185 0h-1.16l-.485 1.414h.479c.272 0 .416.22.323.493l-1.369 3.985h2.036l1.37-3.988c.37-1.08.054-1.904-1.194-1.904">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleRtm(props) {
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