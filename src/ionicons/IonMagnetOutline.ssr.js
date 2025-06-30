import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M421.83,293.82A144,144,0,0,0,218.18,90.17\" style=\"fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px\"></path>",
  _tmpl$2 = "<path d=\"M353.94,225.94a48,48,0,0,0-67.88-67.88\" style=\"fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px\"></path>",
  _tmpl$3 = "<line x1=\"192\" y1=\"464\" x2=\"192\" y2=\"416\" style=\"stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px\"></line>",
  _tmpl$4 = "<line x1=\"90.18\" y1=\"421.82\" x2=\"124.12\" y2=\"387.88\" style=\"stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px\"></line>",
  _tmpl$5 = "<line x1=\"48\" y1=\"320\" x2=\"96\" y2=\"320\" style=\"stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px\"></line>",
  _tmpl$6 = "<path d=\"M286.06,158.06,172.92,271.19a32,32,0,0,1-45.25,0L105,248.57a32,32,0,0,1,0-45.26L218.18,90.17\" style=\"fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:32px\"></path>",
  _tmpl$7 = "<path d=\"M421.83,293.82,308.69,407a32,32,0,0,1-45.26,0l-22.62-22.63a32,32,0,0,1,0-45.26L353.94,225.94\" style=\"fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:32px\"></path>",
  _tmpl$8 = "<line x1=\"139.6\" y1=\"169.98\" x2=\"207.48\" y2=\"237.87\" style=\"fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:32px\"></line>",
  _tmpl$9 = "<line x1=\"275.36\" y1=\"305.75\" x2=\"343.25\" y2=\"373.63\" style=\"fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:32px\"></line>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonMagnetOutline(props) {
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