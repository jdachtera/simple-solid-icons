import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Slint</title>",
  _tmpl$2 = "<path d=\"m6.503 23.914 13.61-9.399s.614-.351.614-.906c0-.739-.776-.979-.776-.979l-7.488-2.953c-.267-.104-.634.189-.29.56l2.479 2.471s.688.675.688 1.117-.423.836-.423.836l-9.02 8.684c-.32.31.113.87.606.569zM17.497.087 3.887 9.484s-.614.351-.614.906c0 .739.776.98.776.98l7.488 2.953c.267.103.636-.19.29-.559l-2.479-2.48s-.688-.673-.688-1.116c0-.444.423-.837.423-.837L18.097.654c.326-.31-.106-.87-.6-.567z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleSlint(props) {
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