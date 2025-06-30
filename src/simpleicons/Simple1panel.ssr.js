import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>1Panel</title>",
  _tmpl$2 = "<path d=\"m12 0 10.349 6v12L12 24 1.651 18V6zm0 .326L1.897 6.158v11.664L12 23.653l10.103-5.831V6.158zM8.84 20.523l-5.801-3.349V6.826L12 1.653l2.23 1.287-8.925 5.195v7.73l5.792 3.345zm6.299-17.058 5.822 3.361v10.348L12 22.347l-2.274-1.312 8.969-5.17v-7.73l-5.823-3.362zm-2.137 3.35v2.869l.024 7.666-.691.384-2.18-1.249.008-6.801H8.958L8.95 8.351l3.412-1.965z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function Simple1panel(props) {
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