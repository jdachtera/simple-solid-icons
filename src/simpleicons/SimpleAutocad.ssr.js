import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>AutoCAD</title>",
  _tmpl$2 = "<path d=\"M3.8672 1.0527v.0157L0 3.3848v17.914l3.8965-2.332h18.3398V2.3301c0-.702-.5773-1.2774-1.2793-1.2774H3.8672zm7.5058 4.0098h3.3008l2.9844 9.9512h-2.5879l-.5683-2.1895h-2.9844l-.5703 2.1621h-2.416l2.8417-9.9238zm11.8633.0273v14.877H4.172l-2.0684 1.2383v.4648c0 .702.5793 1.2774 1.2813 1.2774H24V5.0898h-.7637zM12.9668 6.6816l-.9941 4.3243h2.0468l-1.0527-4.3243z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleAutocad(props) {
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