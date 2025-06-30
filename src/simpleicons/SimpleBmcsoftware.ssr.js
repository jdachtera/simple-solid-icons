import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>BMC Software</title>",
  _tmpl$2 = "<path d=\"M6.375 23.999c-.95 0-1.95-.749-1.95-2.2v-3.4c0-1.349.85-2.899 2.05-3.548l4.75-2.8-4.75-2.8C5.325 8.5 4.425 7 4.425 5.65V2.2c0-1.45 1-2.2 2.002-2.2.4 0 .849.1 1.249.35l10.7 6.35c.75.45 1.15 1.149 1.15 1.849 0 .75-.452 1.45-1.15 1.85l-2.55 1.5 2.55 1.501c.75.45 1.2 1.15 1.2 1.85 0 .75-.452 1.45-1.2 1.85L7.674 23.65c-.45.25-.85.35-1.3.35zm7.15-10.599l-5.85 3.45c-.45.25-.9 1.05-.9 1.55v3.05l10.15-6zM6.775 2.6v3.05c0 .5.45 1.3.9 1.55l5.85 3.45 3.45-2.05z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleBmcsoftware(props) {
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