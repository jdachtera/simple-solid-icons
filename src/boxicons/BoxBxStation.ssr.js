import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<circle cx=\"12\" cy=\"12\" r=\"2\"></circle>",
  _tmpl$2 = "<path d=\"m7.758 16.243 1.414-1.415a3.97 3.97 0 0 1-1.173-2.831c0-1.068.417-2.071 1.173-2.825L7.758 7.756a5.957 5.957 0 0 0-1.76 4.24c0 1.604.625 3.112 1.76 4.247zm8.484 0A5.96 5.96 0 0 0 18 12a5.96 5.96 0 0 0-1.758-4.243l-1.414 1.414C15.584 9.927 16 10.932 16 12s-.416 2.073-1.172 2.829l1.414 1.414z\"></path>",
  _tmpl$3 = "<path d=\"M6.344 17.657a7.953 7.953 0 0 1-2.345-5.659c0-2.137.833-4.145 2.345-5.654L4.93 4.929c-1.89 1.886-2.931 4.397-2.931 7.069s1.041 5.183 2.931 7.073l1.414-1.414zM17.657 6.343A7.948 7.948 0 0 1 20 12a7.948 7.948 0 0 1-2.343 5.657l1.414 1.414A9.932 9.932 0 0 0 22 12a9.934 9.934 0 0 0-2.929-7.071l-1.414 1.414z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: boxicons | License: MIT (<https://github.com/atisawd/boxicons/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function BoxBxStation(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3)], true);
}