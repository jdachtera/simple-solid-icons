import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M5 16H17.8079C17.4099 14.185 16.3432 12.8528 14.1474 11.9115C13.9274 11.8171 13.8096 11.5713 13.8853 11.3443C13.9521 11.1436 14.1504 11.0171 14.3605 11.041L18.8456 11.5508C19.2427 11.596 19.6285 11.4003 19.8268 11.0534L20.6527 9.60794C20.8612 9.24304 20.8193 8.7867 20.5479 8.46586L15.5 2.5002V0.287109C9.33622 2.83971 5.00008 8.91347 5 16ZM4 17H19V20H20V22H3V20H4V17ZM15 7C15 7.55228 14.5523 8 14 8C13.4477 8 13 7.55228 13 7C13 6.44772 13.4477 6 14 6C14.5523 6 15 6.44772 15 7Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixChessFill(props) {
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
  return _$ssrElement("svg", _$mergeProps(merged, {
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
  }), () => _$ssr(_tmpl$), true);
}