import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Dictionary.com</title>",
  _tmpl$2 = "<path d=\"M11.894.087 1.043 0a.3.3 0 0 0-.305.293V18.97a.331.331 0 0 0 .166.28l8.13 4.713a.268.268 0 0 0 .364-.092.27.27 0 0 0 .038-.138V6.275a.33.33 0 0 0-.176-.292L4.944 3.625a.173.173 0 0 1-.084-.21.173.173 0 0 1 .197-.112l7.804 1.333a.31.31 0 0 1 .252.302v15.717a.307.307 0 0 0 .309.308h.035c5.781-.645 9.72-4.693 9.804-10.308.078-6.28-4.595-10.48-11.367-10.568Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleDictionarydotcom(props) {
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