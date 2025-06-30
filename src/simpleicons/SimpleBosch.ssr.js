import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Bosch</title>",
  _tmpl$2 = "<path d=\"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12C23.996 5.374 18.626.004 12 0zm0 22.88C5.991 22.88 1.12 18.009 1.12 12S5.991 1.12 12 1.12 22.88 5.991 22.88 12c-.006 6.006-4.874 10.874-10.88 10.88zm4.954-18.374h-.821v4.108h-8.24V4.506h-.847a8.978 8.978 0 0 0 0 14.988h.846v-4.108h8.24v4.108h.822a8.978 8.978 0 0 0 0-14.988zM6.747 17.876a7.86 7.86 0 0 1 0-11.752v11.752zm9.386-3.635h-8.24V9.734h8.24v4.507zm1.12 3.61V6.124a7.882 7.882 0 0 1 0 11.727z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleBosch(props) {
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