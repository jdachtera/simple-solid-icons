import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<rect fill=\"none\" stroke=\"currentColor\" stroke-miterlimit=\"10\" stroke-width=\"32\" x=\"280.48\" y=\"122.9\" width=\"63.03\" height=\"378.2\" rx=\"31.52\" transform=\"translate(-129.23 312) rotate(-45)\"></rect>",
  _tmpl$2 = "<path d=\"M178.38,178.38h0a31.64,31.64,0,0,0,0,44.75L223.25,268,268,223.25l-44.87-44.87A31.64,31.64,0,0,0,178.38,178.38Z\"></path>",
  _tmpl$3 = "<line stroke=\"currentColor\" stroke-miterlimit=\"10\" stroke-width=\"32\" stroke-linecap=\"round\" x1=\"48\" y1=\"192\" x2=\"96\" y2=\"192\"></line>",
  _tmpl$4 = "<line stroke=\"currentColor\" stroke-miterlimit=\"10\" stroke-width=\"32\" stroke-linecap=\"round\" x1=\"90.18\" y1=\"90.18\" x2=\"124.12\" y2=\"124.12\"></line>",
  _tmpl$5 = "<line stroke=\"currentColor\" stroke-miterlimit=\"10\" stroke-width=\"32\" stroke-linecap=\"round\" x1=\"192\" y1=\"48\" x2=\"192\" y2=\"96\"></line>",
  _tmpl$6 = "<line stroke=\"currentColor\" stroke-miterlimit=\"10\" stroke-width=\"32\" stroke-linecap=\"round\" x1=\"293.82\" y1=\"90.18\" x2=\"259.88\" y2=\"124.12\"></line>",
  _tmpl$7 = "<line stroke=\"currentColor\" stroke-miterlimit=\"10\" stroke-width=\"32\" stroke-linecap=\"round\" x1=\"124.12\" y1=\"259.88\" x2=\"90.18\" y2=\"293.82\"></line>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonColorWandOutline(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7)], true);
}