import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Logitech G</title>",
  _tmpl$2 = "<path d=\"M12.5664 0C10.9101 0 9.352.3143 7.8887.9414c-1.4794.6271-2.766 1.483-3.8594 2.5684-1.0935 1.0854-1.9549 2.359-2.582 3.8222-.6432 1.4473-.9575 3-.9414 4.6563 0 1.6563.3142 3.2164.9414 4.6797.8537 1.9702 2.6764 4.7711 6.4414 6.3672C9.352 23.6784 10.91 24 12.5664 24v-4.9922c-.9809 0-1.8977-.1848-2.75-.5547-1.6852-.7313-2.9903-2.0167-3.7383-3.7402-.7467-1.7207-.736-3.755 0-5.4512.737-1.6981 2.0318-2.9977 3.7383-3.7383.8523-.3698 1.7691-.5546 2.75-.5546Zm.17 9.8418v4.9434h5.8124v5.8144h4.9453V9.8418Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleLogitechg(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2)], true);
}