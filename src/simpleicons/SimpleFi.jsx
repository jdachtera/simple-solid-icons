import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Fi</title><path d="M14.908 4.621c0-1.749 1.472-3.162 3.286-3.162 1.813 0 3.287 1.416 3.287 3.162s-1.472 3.162-3.287 3.162c-1.816 0-3.286-1.414-3.286-3.162zM24 17.077h-.735c-1.507 0-2.267-1.069-2.267-2.753v-3.162h-5.569v4.482c0 4.869 3.228 6.913 6.353 6.913H24ZM5.578 18.581c0-1.628.901-2.369 2.731-2.369h4.541v-5.064H5.578V9.057c0-1.654 1.427-2.552 3.132-2.552h4.133V1.443H7.289C2.925 1.443 0 3.753 0 8.594v13.95h5.578Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleFi(props) {
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