import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M14 7C14 8.10461 13.1046 9 12 9 10.8954 9 10 8.10461 10 7 10 5.89539 10.8954 5 12 5 13.1046 5 14 5.89539 14 7ZM15 11C15 10.4478 14.5522 10 14 10H10C9.44775 10 9 10.4478 9 11V15H10.5V19H13.5V15H15V11ZM12 2C6.47717 2 2 6.47717 2 12 2 17.5228 6.47717 22 12 22 17.5228 22 22 17.5228 22 12 22 6.47717 17.5228 2 12 2ZM4 12C4 7.58167 7.58167 4 12 4 16.4183 4 20 7.58167 20 12 20 16.4183 16.4183 20 12 20 7.58167 20 4 16.4183 4 12Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixCreativeCommonsByLine(props) {
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