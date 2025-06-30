import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Facepunch</title>",
  _tmpl$2 = "<path d=\"M12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.388 12-12S18.629 0 12 0zm0 21.314c-5.133 0-9.297-4.164-9.297-9.297S6.867 2.72 12 2.72s9.297 4.164 9.297 9.297-4.164 9.297-9.297 9.297zM10.028 12l1.48 1.479-1.922 1.92-1.478-1.478-1.428 1.444-1.92-1.92L6.203 12l-1.377-1.377 1.92-1.904 1.36 1.377 1.411-1.41 1.921 1.903L10.03 12zm9.162-1.462-1.411 1.411 1.479 1.479-1.92 1.904-1.48-1.48-1.444 1.446-1.904-1.921 1.445-1.428-1.377-1.377 1.904-1.92 1.376 1.376 1.411-1.41 1.92 1.92z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleFacepunch(props) {
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