import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<circle cx=\"184\" cy=\"232\" r=\"24\"></circle>",
  _tmpl$2 = "<path d=\"M256,288c45.42,0,83.62,29.53,95.71,69.83A8,8,0,0,1,343.84,368H168.15a8,8,0,0,1-7.82-10.17C172.32,317.53,210.53,288,256,288Z\"></path>",
  _tmpl$3 = "<circle cx=\"328\" cy=\"232\" r=\"24\"></circle>",
  _tmpl$4 = "<circle cx=\"256\" cy=\"256\" r=\"208\" style=\"fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px\"></circle>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonSadOutline(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4)], true);
}