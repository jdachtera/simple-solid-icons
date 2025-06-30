import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>NextDNS</title><path d="m22.195 6.512-.001-.019c-.01-.23-.017-.474-.022-.746a2.543 2.543 0 0 0-2.395-2.492c-2.759-.154-4.894-1.053-6.717-2.831l-.016-.015a1.536 1.536 0 0 0-2.087 0l-.016.015C9.117 2.202 6.982 3.101 4.223 3.256a2.543 2.543 0 0 0-2.395 2.492c-.004.269-.011.513-.022.745l-.001.044c-.053 2.813-.12 6.315 1.052 9.494.644 1.748 1.619 3.267 2.899 4.516 1.458 1.422 3.367 2.552 5.674 3.356.075.026.153.048.233.063a1.668 1.668 0 0 0 .675 0c.079-.015.158-.037.233-.063 2.305-.806 4.212-1.936 5.668-3.358 1.28-1.25 2.255-2.769 2.9-4.518 1.176-3.188 1.109-6.696 1.056-9.515Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleNextdns(props) {
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