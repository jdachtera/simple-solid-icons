import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>",
  _tmpl$2 = "<path d=\"M16.72 11.06A10.94 10.94 0 0 1 19 12.55\"></path>",
  _tmpl$3 = "<path d=\"M5 12.55a10.94 10.94 0 0 1 5.17-2.39\"></path>",
  _tmpl$4 = "<path d=\"M10.71 5.05A16 16 0 0 1 22.58 9\"></path>",
  _tmpl$5 = "<path d=\"M1.42 9a15.91 15.91 0 0 1 4.7-2.88\"></path>",
  _tmpl$6 = "<path d=\"M8.53 16.11a6 6 0 0 1 6.95 0\"></path>",
  _tmpl$7 = "<line x1=\"12\" y1=\"20\" x2=\"12.01\" y2=\"20\"></line>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: feather | License: MIT (<https://github.com/feathericons/feather/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function FeatherWifiOff(props) {
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