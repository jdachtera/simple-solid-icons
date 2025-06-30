import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>DATEV</title><path d="M0 .165v16.9174h23.9147V.1651Zm.017 18.1842v5.4857h1.9809c1.4754 0 2.7429-1.1832 2.7429-2.7005-.042-1.686-1.0982-2.7852-2.5736-2.7852zm6.62 0-2.1079 5.4857H5.706l1.6422-4.3428 1.3546 3.454h-1.524v.8888h3.0392l-2.1502-5.4857Zm2.6498 0v.9312h1.7778v4.5545h1.219v-4.5545h1.727v-.9312zm5.1894 0v5.4857h3.7926v-.8889h-2.6159v-1.5153h2.3196v-.9313h-2.3196v-1.219h2.4889v-.9312zm3.962 0 2.1502 5.4857h1.3037L24 18.3492h-2.9037v.9312h1.3884l-1.2699 3.327-1.5577-4.2582zm-17.2869.9312h.9313c.9271 0 1.5576.6735 1.5153 1.8117-.042 1.1804-.8425 1.8116-1.8116 1.8116h-.635Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleDatev(props) {
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