import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<rect fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"32\" x=\"48\" y=\"80\" width=\"416\" height=\"384\" rx=\"48\"></rect>",
  _tmpl$2 = "<circle cx=\"296\" cy=\"232\" r=\"24\"></circle>",
  _tmpl$3 = "<circle cx=\"376\" cy=\"232\" r=\"24\"></circle>",
  _tmpl$4 = "<circle cx=\"296\" cy=\"312\" r=\"24\"></circle>",
  _tmpl$5 = "<circle cx=\"376\" cy=\"312\" r=\"24\"></circle>",
  _tmpl$6 = "<circle cx=\"136\" cy=\"312\" r=\"24\"></circle>",
  _tmpl$7 = "<circle cx=\"216\" cy=\"312\" r=\"24\"></circle>",
  _tmpl$8 = "<circle cx=\"136\" cy=\"392\" r=\"24\"></circle>",
  _tmpl$9 = "<circle cx=\"216\" cy=\"392\" r=\"24\"></circle>",
  _tmpl$0 = "<circle cx=\"296\" cy=\"392\" r=\"24\"></circle>",
  _tmpl$1 = "<line fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"32\" stroke-linecap=\"round\" x1=\"128\" y1=\"48\" x2=\"128\" y2=\"80\"></line>",
  _tmpl$10 = "<line fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"32\" stroke-linecap=\"round\" x1=\"384\" y1=\"48\" x2=\"384\" y2=\"80\"></line>",
  _tmpl$11 = "<line fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"32\" x1=\"464\" y1=\"160\" x2=\"48\" y2=\"160\"></line>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonCalendarOutline(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7), _$ssr(_tmpl$8), _$ssr(_tmpl$9), _$ssr(_tmpl$0), _$ssr(_tmpl$1), _$ssr(_tmpl$10), _$ssr(_tmpl$11)], true);
}