import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M14.8027 4C14.2922 4.88252 14 5.90714 14 7C14 10.3137 16.6863 13 20 13C21.0929 13 22.1175 12.7078 23 12.1973V18.9991C23 19.5519 22.5605 20 21.9975 20H2.00246C1.44882 20 1 19.5554 1 18.9991V5.00087C1 4.44811 1.43946 4 2.00246 4H14.8027ZM20 11C17.7909 11 16 9.20914 16 7C16 4.79086 17.7909 3 20 3C22.2091 3 24 4.79086 24 7C24 9.20914 22.2091 11 20 11ZM20 9C21.1046 9 22 8.10457 22 7C22 5.89543 21.1046 5 20 5C18.8954 5 18 5.89543 18 7C18 8.10457 18.8954 9 20 9ZM19 15V18H21V15H19Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixPhoneCameraFill(props) {
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