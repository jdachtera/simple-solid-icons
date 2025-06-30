import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M405.84,136.9A151.25,151.25,0,0,0,358.24,55a153,153,0,0,0-241.81,51.86C60.5,110.16,16,156.65,16,213.33,16,272.15,63.91,320,122.8,320h72.31L176,416h48v80L336,352H292.49l8-32H404.33a91.56,91.56,0,0,0,1.51-183.1Z\"></path>",
  _tmpl$2 = "<rect x=\"65.17\" y=\"360\" width=\"85.67\" height=\"32\" transform=\"translate(-276.6 304.44) rotate(-63.43)\"></rect>",
  _tmpl$3 = "<rect x=\"94.11\" y=\"432\" width=\"67.78\" height=\"32\" transform=\"translate(-329.95 362.13) rotate(-63.43)\"></rect>",
  _tmpl$4 = "<rect x=\"345.17\" y=\"360\" width=\"85.67\" height=\"32\" transform=\"translate(-121.83 554.88) rotate(-63.43)\"></rect>",
  _tmpl$5 = "<rect x=\"374.11\" y=\"432\" width=\"67.78\" height=\"32\" transform=\"translate(-175.17 612.57) rotate(-63.43)\"></rect>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonThunderstormSharp(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5)], true);
}