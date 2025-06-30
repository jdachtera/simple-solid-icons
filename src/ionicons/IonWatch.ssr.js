import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<rect x=\"136\" y=\"136\" width=\"240\" height=\"240\" rx=\"56\" ry=\"56\"></rect>",
  _tmpl$2 = "<path d=\"M336,96V32a16,16,0,0,0-16-16H192a16,16,0,0,0-16,16V96a80.09,80.09,0,0,0-80,80V336a80.09,80.09,0,0,0,80,80v64a16,16,0,0,0,16,16H320a16,16,0,0,0,16-16V416a80.09,80.09,0,0,0,80-80V176A80.09,80.09,0,0,0,336,96Zm56,224a72.08,72.08,0,0,1-72,72H192a72.08,72.08,0,0,1-72-72V192a72.08,72.08,0,0,1,72-72H320a72.08,72.08,0,0,1,72,72Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonWatch(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 512 512',
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