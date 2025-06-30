import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Vectorworks</title>",
  _tmpl$2 = "<path d=\"M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22.725c-5.925 0-10.725-4.8-10.725-10.725S6.075 1.275 12 1.275 22.725 6.075 22.725 12 17.925 22.725 12 22.725zM8.775 7.5h-2.25c-.15 0-.208.086-.15.225l4.425 10.65c.04.098.15.225.3.225h1.95c.15 0 .206-.086.15-.225l-4.35-10.8c-.028-.07-.035-.075-.075-.075zm8.7 0h-2.25c-.075 0-.13.023-.15.075L13.35 11.85a.6.6 0 0 0 0 .375l1.05 2.55c.075.15.225.15.3 0l2.925-7.05c.057-.139 0-.225-.15-.225z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleVectorworks(props) {
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