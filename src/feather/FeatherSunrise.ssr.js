import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M17 18a5 5 0 0 0-10 0\"></path>",
  _tmpl$2 = "<line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"9\"></line>",
  _tmpl$3 = "<line x1=\"4.22\" y1=\"10.22\" x2=\"5.64\" y2=\"11.64\"></line>",
  _tmpl$4 = "<line x1=\"1\" y1=\"18\" x2=\"3\" y2=\"18\"></line>",
  _tmpl$5 = "<line x1=\"21\" y1=\"18\" x2=\"23\" y2=\"18\"></line>",
  _tmpl$6 = "<line x1=\"18.36\" y1=\"11.64\" x2=\"19.78\" y2=\"10.22\"></line>",
  _tmpl$7 = "<line x1=\"23\" y1=\"22\" x2=\"1\" y2=\"22\"></line>",
  _tmpl$8 = "<polyline points=\"8 6 12 2 16 6\"></polyline>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: feather | License: MIT (<https://github.com/feathericons/feather/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function FeatherSunrise(props) {
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