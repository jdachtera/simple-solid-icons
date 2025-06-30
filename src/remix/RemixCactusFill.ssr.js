import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M11.998 2C14.2072 2 15.998 3.79086 15.998 6V15H16.998C17.5476 15 17.998 14.55 17.998 14V8C17.998 7.44772 18.4458 7 18.998 7C19.5503 7 19.998 7.44772 19.998 8V14C19.998 15.6569 18.6549 17 16.998 17H15.998V20H17.998V22H5.99805V20H7.99805V14H6.99805C5.34119 14 3.99805 12.6569 3.99805 11V9C3.99805 8.44772 4.44576 8 4.99805 8C5.55033 8 5.99805 8.44772 5.99805 9V11C5.99805 11.55 6.44805 12 6.99805 12C7.36471 12 7.69805 12 7.99805 12V6C7.99805 3.79086 9.78891 2 11.998 2Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixCactusFill(props) {
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