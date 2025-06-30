import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>OpenMined</title>",
  _tmpl$2 = "<path d=\"M12 0c-.486 0-.972.242-1.25.725L7.082 7.082.725 10.75a1.44 1.44 0 000 2.5l6.357 3.668 3.668 6.357a1.44 1.44 0 002.5 0l3.668-6.357 6.357-3.668c.967-.544.967-1.945 0-2.5l-6.357-3.668L13.25.725A1.429 1.429 0 0012 0zm.006 4.237l7.757 7.769-7.769 7.757-7.757-7.757zm-.012 3.112l-4.656 4.657 4.656 4.656 4.657-4.656z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleOpenmined(props) {
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