import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<circle cx=\"256\" cy=\"448\" r=\"32\" style=\"fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px\"></circle>",
  _tmpl$2 = "<circle cx=\"256\" cy=\"320\" r=\"32\" style=\"fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px\"></circle>",
  _tmpl$3 = "<path d=\"M288,192a32,32,0,1,1-32-32A32,32,0,0,1,288,192Z\" style=\"fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px\"></path>",
  _tmpl$4 = "<circle cx=\"256\" cy=\"64\" r=\"32\" style=\"fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px\"></circle>",
  _tmpl$5 = "<circle cx=\"384\" cy=\"320\" r=\"32\" style=\"fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px\"></circle>",
  _tmpl$6 = "<circle cx=\"384\" cy=\"192\" r=\"32\" style=\"fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px\"></circle>",
  _tmpl$7 = "<circle cx=\"384\" cy=\"64\" r=\"32\" style=\"fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px\"></circle>",
  _tmpl$8 = "<circle cx=\"128\" cy=\"320\" r=\"32\" style=\"fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px\"></circle>",
  _tmpl$9 = "<circle cx=\"128\" cy=\"192\" r=\"32\" style=\"fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px\"></circle>",
  _tmpl$0 = "<circle cx=\"128\" cy=\"64\" r=\"32\" style=\"fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px\"></circle>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonKeypadOutline(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7), _$ssr(_tmpl$8), _$ssr(_tmpl$9), _$ssr(_tmpl$0)], true);
}