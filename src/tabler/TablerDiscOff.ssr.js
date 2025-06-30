import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>",
  _tmpl$2 = "<path d=\"M20.044 16.04a9 9 0 0 0 -12.082 -12.085m-2.333 1.688a9 9 0 0 0 6.371 15.357c2.491 0 4.73 -1 6.36 -2.631\"></path>",
  _tmpl$3 = "<path d=\"M11.298 11.288a1 1 0 1 0 1.402 1.427\"></path>",
  _tmpl$4 = "<path d=\"M7 12c0 -1.38 .559 -2.629 1.462 -3.534m2.607 -1.38c.302 -.056 .613 -.086 .931 -.086\"></path>",
  _tmpl$5 = "<path d=\"M12 17a4.985 4.985 0 0 0 3.551 -1.48m1.362 -2.587c.057 -.302 .087 -.614 .087 -.933\"></path>",
  _tmpl$6 = "<path d=\"M3 3l18 18\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: tabler | License: MIT (<https://github.com/tabler/tabler-icons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function TablerDiscOff(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6)], true);
}