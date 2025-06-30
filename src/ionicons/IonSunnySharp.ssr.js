import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<rect x=\"234\" y=\"26\" width=\"44\" height=\"92\"></rect>",
  _tmpl$2 = "<rect x=\"234\" y=\"394\" width=\"44\" height=\"92\"></rect>",
  _tmpl$3 = "<rect x=\"340.11\" y=\"103.89\" width=\"92\" height=\"44\" transform=\"translate(24.07 309.89) rotate(-45)\"></rect>",
  _tmpl$4 = "<rect x=\"79.89\" y=\"364.11\" width=\"92\" height=\"44\" transform=\"translate(-236.14 202.1) rotate(-45)\"></rect>",
  _tmpl$5 = "<rect x=\"394\" y=\"234\" width=\"92\" height=\"44\"></rect>",
  _tmpl$6 = "<rect x=\"26\" y=\"234\" width=\"92\" height=\"44\"></rect>",
  _tmpl$7 = "<rect x=\"364.11\" y=\"340.11\" width=\"44\" height=\"92\" transform=\"translate(-159.93 386.11) rotate(-45)\"></rect>",
  _tmpl$8 = "<rect x=\"103.89\" y=\"79.89\" width=\"44\" height=\"92\" transform=\"translate(-52.15 125.89) rotate(-45)\"></rect>",
  _tmpl$9 = "<path d=\"M256,358A102,102,0,1,1,358,256,102.12,102.12,0,0,1,256,358Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonSunnySharp(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7), _$ssr(_tmpl$8), _$ssr(_tmpl$9)], true);
}