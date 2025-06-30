import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<circle cx=\"104\" cy=\"152\" r=\"56\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px\"></circle>",
  _tmpl$2 = "<circle cx=\"104\" cy=\"360\" r=\"56\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px\"></circle>",
  _tmpl$3 = "<path d=\"M157,175,146,190,183,205s3.46-6.42,7-10Z\" style=\"fill:none;stroke:currentColor;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px\"></path>",
  _tmpl$4 = "<path d=\"M154.17,334.43,460,162c-2.5-6.7-28-12-64-4-29.12,6.47-121.16,29.05-159.16,56.05C205.85,236.06,227,272,192,298c-25.61,19-44.43,22.82-44.43,22.82Z\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px\"></path>",
  _tmpl$5 = "<path d=\"M344.47,278.24,295,306.67c14.23,6.74,65.54,33.27,117,36.33,14.92.89,30,.39,39-6Z\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px\"></path>",
  _tmpl$6 = "<circle cx=\"256\" cy=\"240\" r=\"32\" style=\"fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px\"></circle>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonCutOutline(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6)], true);
}