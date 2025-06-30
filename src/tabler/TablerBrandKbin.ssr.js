import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>",
  _tmpl$2 = "<g stroke-width=\"1.838\"><path d=\"M10.586 9.506h-2.43c-.434 -.932 -.7 -1.506 -1.596 -1.506l-2.404 .019c-.662 0 -1.353 .592 -1.103 1.487l2.216 9.436c.486 1.743 .811 2.058 1.145 2.058h.64\"></path><path d=\"M14.275 3h5.645c.84 0 1.24 .714 1.02 1.287l-4.687 15.109c-.42 1.133 -1.159 1.603 -2.354 1.603h-7.485c.39 0 .76 -.618 1.296 -2.061l4.457 -14.49c.326 -.83 .76 -1.448 2.108 -1.448z\"></path></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: tabler | License: MIT (<https://github.com/tabler/tabler-icons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function TablerBrandKbin(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2)], true);
}