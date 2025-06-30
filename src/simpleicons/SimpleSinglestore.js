import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>SingleStore</title><path d="M17.029 5.063c-.914-1.916-2.8-3.432-5.114-4.033C11.4.887 10.858.83 10.258.8c-.886 0-1.743.114-2.629.343-2.2.658-3.742 1.945-4.657 2.947C1.801 5.435 1.03 6.837.572 8.238c0 .029-.028.057-.028.115C.515 8.467.4 8.81.4 8.896c-.029.057-.029.143-.057.2l-.086.344c0 .028 0 .057-.028.086-.743 3.69.49 7.001 1.234 8.231.185.308.338.564.49.8C.27 9.403 5.116 5.035 10.63 4.92c2.886-.057 5.771 1.116 7.171 3.461-.086-1.287-.171-2.002-.771-3.318zM12.543 0c2.572.715 4.914 2.517 5.886 4.72 1.485 3.575 1.143 8.095-.486 10.784-1.371 2.203-3.485 3.375-5.914 3.347-3.771-.029-6.828-3.032-6.857-6.808 0-3.776 2.971-6.894 6.857-6.894.629 0 1.535.087 2.563.516 0 0-.739-.438-2.638-.732C6.497 4.218.058 8.353 1.544 17.878c2.057 3.662 6 6.15 10.485 6.122 6.6-.029 12-5.435 11.97-12.072C24 5.578 18.83.172 12.544 0z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleSinglestore(props) {
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