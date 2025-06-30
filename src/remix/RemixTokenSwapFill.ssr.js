import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M21.5 9C21.5 11.7039 19.849 14.0223 17.5 15.0018L17.5 15C17.5 10.3056 13.6944 6.5 9.00001 6.5L8.99817 6.5C9.97773 4.15105 12.2961 2.5 15 2.5C18.5899 2.5 21.5 5.41015 21.5 9ZM7 3C4.79086 3 3 4.79086 3 7V8.5H5V7C5 5.89543 5.89543 5 7 5H8.5V3H7ZM19 15.5V17C19 18.1046 18.1046 19 17 19H15.5V21H17C19.2091 21 21 19.2091 21 17V15.5H19ZM9 21.5C12.5899 21.5 15.5 18.5899 15.5 15C15.5 11.4101 12.5899 8.5 9 8.5C5.41015 8.5 2.5 11.4101 2.5 15C2.5 18.5899 5.41015 21.5 9 21.5ZM9 12.5L11.5 15L9 17.5L6.5 15L9 12.5Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixTokenSwapFill(props) {
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