import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M17.8492 11.805L17.1421 11.0979L7.24264 20.9974H3V16.7547L14.3137 5.44101L19.9706 11.0979C20.3611 11.4884 20.3611 12.1216 19.9706 12.5121L12.8995 19.5831L11.4853 18.1689L17.8492 11.805ZM18.5563 2.61258L21.3848 5.44101C21.7753 5.83153 21.7753 6.4647 21.3848 6.85522L19.9706 8.26943L15.7279 4.02679L17.1421 2.61258C17.5327 2.22206 18.1658 2.22206 18.5563 2.61258Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixBallPenFill(props) {
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