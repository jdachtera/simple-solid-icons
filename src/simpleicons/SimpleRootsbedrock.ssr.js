import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Roots Bedrock</title>",
  _tmpl$2 = "<path d=\"M.4 0L0 .4v5.2l.343.343 11.314-1.886L12 4.4V8l11.52-1.92.48-.48V.4l-.4-.4zm.08 9.92L0 10.4v3.2l.343.343L12 12V8zM12 12v4l11.52-1.92.48-.48v-3.2l-.343-.343zM.48 17.92L0 18.4v5.2l.4.4h23.2l.4-.4v-5.2l-.343-.343-11.314 1.886L12 19.6V16L.48 17.92z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleRootsbedrock(props) {
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