import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>trivago</title><path d="M7.8112 0a.2537.2537 0 0 0-.1336.0416L2.8311 3.1804a.4265.4265 0 0 0-.1947.3579v9.285c0 .141.1144.2554.2555.2554h5.1808l10.358-5.7274a.4263.4263 0 0 0 .22-.3732V1.6774c0-.1949-.2092-.3182-.3797-.2239L8.0727 7.0923V.2563c0-.1521-.1265-.2589-.2615-.2563zm.0172 14.7072-4.9307.0002c-.1457 0-.2607.1216-.2555.2672C2.822 19.9896 6.9445 24 12.0032 24c5.059 0 9.18-4.01 9.3602-9.0246.0053-.1461-.1102-.2682-.2564-.2682h-4.9319c-.1312 0-.2442.1073-.2545.238-.1592 2.025-1.8517 3.6185-3.9173 3.6185-2.4784 0-3.4806-2.1046-3.4808-2.105-.3197-.6025-.4129-1.1898-.4394-1.5183a.255.255 0 0 0-.2547-.2332Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleTrivago(props) {
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