import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path stroke=none d="M0 0h24v24H0z"fill=none></path><path d="M13 13.282c0 .492 .784 1.718 2.102 1.718c1.318 0 2.898 -.966 2.898 -2.062c0 -.817 -.932 -.938 -1.409 -.938c-.228 0 -3.591 .111 -3.591 1.282z"></path><path d="M12 21c-2.984 0 -6.471 -2.721 -6.63 -2.982c-2.13 -3.49 -2.37 -13.703 -2.37 -13.703l1.446 -1.315c2.499 .39 5.023 .617 7.554 .68a58.626 58.626 0 0 0 7.554 -.68l1.446 1.315s-.24 10.213 -2.37 13.704c-.16 .26 -3.646 2.981 -6.63 2.981z"></path><path d="M11 13.282c0 .492 -.784 1.718 -2.102 1.718c-1.318 0 -2.898 -.966 -2.898 -2.062c0 -.817 .932 -.938 1.409 -.938c.228 0 3.591 .111 3.591 1.282z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: tabler | License: MIT (<https://github.com/tabler/tabler-icons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function TablerBrandGrindr(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'none',
    stroke: 'currentColor',
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