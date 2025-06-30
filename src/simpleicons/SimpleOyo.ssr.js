import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>OYO</title>",
  _tmpl$2 = "<path d=\"M19.843 16.185C22.135 16.185 24 14.307 24 12c0-2.309-1.865-4.185-4.157-4.185-2.293 0-4.158 1.876-4.158 4.185 0 2.307 1.865 4.185 4.158 4.185zm0-5.677c.817 0 1.482.67 1.482 1.492s-.666 1.49-1.483 1.49A1.488 1.488 0 0 1 18.36 12c0-.824.665-1.493 1.482-1.493zM4.157 16.185c2.293 0 4.158-1.878 4.158-4.185 0-2.309-1.865-4.185-4.158-4.185C1.866 7.815 0 9.691 0 12c0 2.307 1.866 4.185 4.157 4.185zm0-5.677c.818 0 1.483.67 1.483 1.492s-.665 1.49-1.483 1.49A1.488 1.488 0 0 1 2.677 12c0-.824.664-1.493 1.48-1.493zm7.84-.094L10.722 7.87H7.733l2.791 5.564v2.62h2.948v-2.62l2.791-5.564h-2.99l-1.275 2.544Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleOyo(props) {
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