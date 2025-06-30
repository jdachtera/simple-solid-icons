import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>bunq</title>",
  _tmpl$2 = "<path d=\"M16.414 14.62h1.103v-2.896a2.484 2.484 0 0 0-2.483-2.483 2.484 2.484 0 0 0-2.482 2.483v2.897h1.103v-2.897c0-.837.618-1.517 1.38-1.517.76 0 1.379.68 1.379 1.517zm-6.07-5.24h1.104v2.896a2.484 2.484 0 0 1-2.482 2.483 2.484 2.484 0 0 1-2.483-2.483V9.379h1.103v2.897c0 .837.618 1.517 1.38 1.517.76 0 1.379-.68 1.379-1.517zM0 7.034V12c0 .046.001.093.004.139H0v2.482h.965l.055-.48A2.76 2.76 0 0 0 5.518 12a2.76 2.76 0 0 0-4.414-2.208V7.035zm2.69 3.172c.951 0 1.724.803 1.724 1.793 0 .99-.773 1.793-1.725 1.793-.951 0-1.724-.803-1.724-1.793 0-.99.773-1.793 1.724-1.793zm18.552-.965A2.76 2.76 0 0 0 18.482 12a2.76 2.76 0 0 0 4.414 2.207v2.758H24V12a2.15 2.15 0 0 0-.004-.139H24V9.38h-.965l-.055.48a2.741 2.741 0 0 0-1.738-.617zm.069.965c.951 0 1.724.803 1.724 1.793 0 .99-.773 1.793-1.724 1.793-.952 0-1.725-.803-1.725-1.793 0-.99.773-1.793 1.725-1.793Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleBunq(props) {
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