import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<circle cx=\"12\" cy=\"12\" r=\"5\"></circle>",
  _tmpl$2 = "<line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"3\"></line>",
  _tmpl$3 = "<line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\"></line>",
  _tmpl$4 = "<line x1=\"4.22\" y1=\"4.22\" x2=\"5.64\" y2=\"5.64\"></line>",
  _tmpl$5 = "<line x1=\"18.36\" y1=\"18.36\" x2=\"19.78\" y2=\"19.78\"></line>",
  _tmpl$6 = "<line x1=\"1\" y1=\"12\" x2=\"3\" y2=\"12\"></line>",
  _tmpl$7 = "<line x1=\"21\" y1=\"12\" x2=\"23\" y2=\"12\"></line>",
  _tmpl$8 = "<line x1=\"4.22\" y1=\"19.78\" x2=\"5.64\" y2=\"18.36\"></line>",
  _tmpl$9 = "<line x1=\"18.36\" y1=\"5.64\" x2=\"19.78\" y2=\"4.22\"></line>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: feather | License: MIT (<https://github.com/feathericons/feather/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function FeatherSun(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7), _$ssr(_tmpl$8), _$ssr(_tmpl$9)], true);
}