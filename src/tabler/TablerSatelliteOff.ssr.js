import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>",
  _tmpl$2 = "<path d=\"M7.707 3.707l5.586 5.586m-1.293 2.707l-1.293 1.293a1 1 0 0 1 -1.414 0l-5.586 -5.586a1 1 0 0 1 0 -1.414l1.293 -1.293\"></path>",
  _tmpl$3 = "<path d=\"M6 10l-3 3l3 3l3 -3\"></path>",
  _tmpl$4 = "<path d=\"M10 6l3 -3l3 3l-3 3\"></path>",
  _tmpl$5 = "<path d=\"M12 12l1.5 1.5\"></path>",
  _tmpl$6 = "<path d=\"M14.5 17c.69 0 1.316 -.28 1.769 -.733\"></path>",
  _tmpl$7 = "<path d=\"M15 21c1.654 0 3.151 -.67 4.237 -1.752m1.507 -2.507a6 6 0 0 0 .256 -1.741\"></path>",
  _tmpl$8 = "<path d=\"M3 3l18 18\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: tabler | License: MIT (<https://github.com/tabler/tabler-icons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function TablerSatelliteOff(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7), _$ssr(_tmpl$8)], true);
}