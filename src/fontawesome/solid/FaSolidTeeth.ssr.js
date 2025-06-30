import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M0 128C0 75 43 32 96 32l384 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96L96 480c-53 0-96-43-96-96L0 128zm176 48l0 56c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-56c0-26.5-21.5-48-48-48s-48 21.5-48 48zm176-48c-26.5 0-48 21.5-48 48l0 56c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-56c0-26.5-21.5-48-48-48zM48 208l0 24c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-24c0-26.5-21.5-48-48-48s-48 21.5-48 48zM96 384c26.5 0 48-21.5 48-48l0-24c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24l0 24c0 26.5 21.5 48 48 48zm80-48c0 26.5 21.5 48 48 48s48-21.5 48-48l0-24c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24l0 24zm176 48c26.5 0 48-21.5 48-48l0-24c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24l0 24c0 26.5 21.5 48 48 48zm80-176l0 24c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-24c0-26.5-21.5-48-48-48s-48 21.5-48 48zm48 176c26.5 0 48-21.5 48-48l0-24c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24l0 24c0 26.5 21.5 48 48 48z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: fontawesome | License: CC BY 4.0 (<https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function FaSolidTeeth(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 576 512',
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