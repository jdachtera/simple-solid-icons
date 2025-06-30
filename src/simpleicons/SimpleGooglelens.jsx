import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Google Lens</title><path d="M12 17.333q-1.667 0-2.833-1.166Q8 15 8 13.333q0-1.666 1.167-2.833Q10.333 9.333 12 9.333q1.667 0 2.833 1.167Q16 11.667 16 13.333q0 1.667-1.167 2.834-1.166 1.166-2.833 1.166Zm8 5.334q-1.1 0-1.883-.784-.784-.783-.784-1.883t.784-1.883q.783-.784 1.883-.784t1.883.784q.784.783.784 1.883t-.784 1.883q-.783.784-1.883.784ZM5.333 24q-2.2 0-3.766-1.567Q0 20.867 0 18.667V16h2.667v2.667q0 1.1.783 1.883.783.783 1.883.783H12V24Zm16-10.667V8q0-1.1-.783-1.883-.783-.784-1.883-.784H5.333q-1.1 0-1.883.784Q2.667 6.9 2.667 8v4H0V8q0-2.2 1.567-3.767 1.566-1.566 3.766-1.566H8L9.333 0h5.334L16 2.667h2.667q2.2 0 3.766 1.566Q24 5.8 24 8v5.333z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleGooglelens(props) {
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