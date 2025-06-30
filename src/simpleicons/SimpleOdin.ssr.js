import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Odin</title>",
  _tmpl$2 = "<path d=\"M12 0A11.999 11.999 0 0 0 1.607 18c.001 0 .143.279.545.861.456.661.725.939.725.939L14.194.2s-.468-.09-1.17-.158C12.56-.002 12 0 12 0m4.184.755L4.35 21.248a12 12 0 0 0 1.652 1.144c5.734 3.312 13.078 1.342 16.39-4.394 3.31-5.735 1.342-13.08-4.394-16.39 0 0-.42-.236-.926-.479-.403-.193-.891-.373-.891-.373m-5.38 1.317L2.806 15.926A9.98 9.98 0 0 1 3.34 7a9.99 9.99 0 0 1 7.463-4.928M17 3.34c4.78 2.759 6.42 8.88 3.66 13.66-2.758 4.779-8.881 6.42-13.66 3.66z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleOdin(props) {
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