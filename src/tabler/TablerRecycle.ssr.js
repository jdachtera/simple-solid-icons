import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>",
  _tmpl$2 = "<path d=\"M12 17l-2 2l2 2\"></path>",
  _tmpl$3 = "<path d=\"M10 19h9a2 2 0 0 0 1.75 -2.75l-.55 -1\"></path>",
  _tmpl$4 = "<path d=\"M8.536 11l-.732 -2.732l-2.732 .732\"></path>",
  _tmpl$5 = "<path d=\"M7.804 8.268l-4.5 7.794a2 2 0 0 0 1.506 2.89l1.141 .024\"></path>",
  _tmpl$6 = "<path d=\"M15.464 11l2.732 .732l.732 -2.732\"></path>",
  _tmpl$7 = "<path d=\"M18.196 11.732l-4.5 -7.794a2 2 0 0 0 -3.256 -.14l-.591 .976\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: tabler | License: MIT (<https://github.com/tabler/tabler-icons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function TablerRecycle(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'none',
    stroke: 'currentColor',
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7)], true);
}