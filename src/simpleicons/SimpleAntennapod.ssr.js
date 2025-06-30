import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>AntennaPod</title>",
  _tmpl$2 = "<path d=\"M12 0A12 12 0 0 0 0 12a12 12 0 0 0 7.188 10.98l3.339-9.459a2.118 2.118 0 1 1 2.946 0l3.339 9.46A12 12 0 0 0 24 12 12 12 0 0 0 12 0m0 2.824a9.177 9.177 0 0 1 4.969 16.892l-.486-1.376a7.765 7.765 0 1 0-8.967 0l-.485 1.376A9.177 9.177 0 0 1 12 2.824m0 3.529a5.647 5.647 0 0 1 3.739 9.879l-.521-1.478a4.235 4.235 0 1 0-6.436 0l-.522 1.478A5.647 5.647 0 0 1 12 6.353m0 8.298-1.618 4.584a7.4 7.4 0 0 0 3.236 0zm-2.21 6.258-.937 2.656A12 12 0 0 0 12 24a12 12 0 0 0 3.146-.435l-.937-2.656a9.2 9.2 0 0 1-2.209.267 9.2 9.2 0 0 1-2.21-.267\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleAntennapod(props) {
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