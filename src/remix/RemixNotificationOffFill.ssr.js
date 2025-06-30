import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M18.5859 20H4.00016C3.72401 20 3.50016 19.7762 3.50016 19.5C3.50016 19.3918 3.53525 19.2866 3.60016 19.2L4.00016 18.6667V10C4.00016 8.67022 4.32462 7.41619 4.8987 6.31279L1.39355 2.80765L2.80777 1.39343L22.6068 21.1924L21.1925 22.6066L18.5859 20ZM20.0002 15.7858L7.55919 3.34486C8.8297 2.49537 10.3571 2.00003 12.0002 2.00003C16.4184 2.00003 20.0002 5.58176 20.0002 10V15.7858ZM9.50016 21H14.5002C14.5002 22.3807 13.3809 23.5 12.0002 23.5C10.6194 23.5 9.50016 22.3807 9.50016 21Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixNotificationOffFill(props) {
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