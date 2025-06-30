import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<line x1=\"256\" y1=\"48\" x2=\"256\" y2=\"96\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px\"></line>",
  _tmpl$2 = "<line x1=\"256\" y1=\"416\" x2=\"256\" y2=\"464\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px\"></line>",
  _tmpl$3 = "<line x1=\"403.08\" y1=\"108.92\" x2=\"369.14\" y2=\"142.86\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px\"></line>",
  _tmpl$4 = "<line x1=\"142.86\" y1=\"369.14\" x2=\"108.92\" y2=\"403.08\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px\"></line>",
  _tmpl$5 = "<line x1=\"464\" y1=\"256\" x2=\"416\" y2=\"256\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px\"></line>",
  _tmpl$6 = "<line x1=\"96\" y1=\"256\" x2=\"48\" y2=\"256\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px\"></line>",
  _tmpl$7 = "<line x1=\"403.08\" y1=\"403.08\" x2=\"369.14\" y2=\"369.14\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px\"></line>",
  _tmpl$8 = "<line x1=\"142.86\" y1=\"142.86\" x2=\"108.92\" y2=\"108.92\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px\"></line>",
  _tmpl$9 = "<circle cx=\"256\" cy=\"256\" r=\"80\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px\"></circle>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonSunnyOutline(props) {
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