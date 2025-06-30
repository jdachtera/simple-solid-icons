import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"m2.586 15.408 4.299 4.299a.996.996 0 0 0 .707.293h12.001v-2h-6.958l7.222-7.222c.78-.779.78-2.049 0-2.828L14.906 3a2.003 2.003 0 0 0-2.828 0l-4.75 4.749-4.754 4.843a2.007 2.007 0 0 0 .012 2.816zM13.492 4.414l4.95 4.95-2.586 2.586L10.906 7l2.586-2.586zM8.749 9.156l.743-.742 4.95 4.95-4.557 4.557a1.026 1.026 0 0 0-.069.079h-1.81l-4.005-4.007 4.748-4.837z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: boxicons | License: MIT (<https://github.com/atisawd/boxicons/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function BoxBxEraser(props) {
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
  }), () => _$ssr(_tmpl$), true);
}