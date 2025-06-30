import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>The Mighty</title>",
  _tmpl$2 = "<path d=\"M19.178.001h-4.432L12.05 13.988 9.309.001H4.856c.216.219.334.634.39 1.072v21.21c0 .621-.105 1.383-.425 1.717 1.014-.214 2.307-.416 3.414-.611V9.375l2.489 12.375c.07.46.135 1.084-.021 1.198.847-.129 1.694-.252 2.544-.366-.105-.16-.064-.652-.005-1.061L15.696 9.15v13.095c1.054-.123 2.366-.24 3.47-.349l.012-.008c-.324-.328-.43-1.1-.43-1.724V1.726c0-.627.105-1.396.43-1.726v.001z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleThemighty(props) {
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