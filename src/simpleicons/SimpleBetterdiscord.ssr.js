import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>BetterDiscord</title>",
  _tmpl$2 = "<path d=\"M14.393.861q.514.258.964.57a6.6 6.6 0 0 1 2.122 2.387c.513.987.792 2.133.828 3.409v9.556c-.035 1.275-.313 2.422-.828 3.408a6.6 6.6 0 0 1-2.122 2.387 8 8 0 0 1-.933.555h.933c4.46.024 8.643-2.205 8.643-7.315V8.352c.024-5.21-4.16-7.49-8.62-7.49zM0 .867v9.197l5.693 5.127V5.44h3.31c3.537 0 3.537 4.444 0 4.444H6.817v4.244h2.188c3.536 0 3.536 4.441 0 4.441H0v4.57h8.904c4.59 0 8.151-1.836 8.278-6.388 0-2.094-.574-3.66-1.584-4.748 1.01-1.087 1.584-2.652 1.584-4.746-.125-4.553-3.687-6.39-8.278-6.39z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleBetterdiscord(props) {
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