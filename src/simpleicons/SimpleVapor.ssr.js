import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Vapor</title>",
  _tmpl$2 = "<path d=\"M22.75 13.908v1.56L12 24 1.25 15.468v-1.56L12 22.44l10.75-8.532zM12 17.267L1.25 8.824 12 0l10.75 8.824L12 17.267zm.356-4.635a3.193 3.193 0 0 0 3.193-3.193 3.185 3.185 0 0 0-3.029-3.176l.001-.016-4.514-.427 1.205 4.102a3.184 3.184 0 0 0 3.144 2.71zM12 20.269L1.25 11.737v1.533L12 21.802l10.75-8.532v-1.533L12 20.269zm0-2.366L1.25 9.46v1.64L12 19.63l10.75-8.532V9.46L12 17.903z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleVapor(props) {
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