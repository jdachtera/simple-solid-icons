import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>",
  _tmpl$2 = "<path d=\"M6.04 14.831l4.46 -4.331\"></path>",
  _tmpl$3 = "<path d=\"M12.555 20.82c4.55 -3.456 7.582 -8.639 8.426 -14.405a1.668 1.668 0 0 0 -.934 -1.767a19.647 19.647 0 0 0 -8.047 -1.648a19.647 19.647 0 0 0 -8.047 1.647a1.668 1.668 0 0 0 -.934 1.767c.844 5.766 3.875 10.95 8.426 14.406a.948 .948 0 0 0 1.11 0z\"></path>",
  _tmpl$4 = "<path d=\"M20 5c-2 0 -4.37 3.304 -8 6.644c-3.63 -3.34 -6 -6.644 -8 -6.644\"></path>",
  _tmpl$5 = "<path d=\"M17.738 15l-4.238 -4.5\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: tabler | License: MIT (<https://github.com/tabler/tabler-icons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function TablerBrandCtemplar(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'none',
    stroke: 'currentColor',
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5)], true);
}